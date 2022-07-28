# CORS

**CORS**(Cross-Origin Resource Sharing，跨域资源共享)是一种基于HTTP头部的机制，该机制通过允许服务器标示除了它自己以外的其他origin（域，协议和端口），使浏览器允许这些origin访问加载自己的资源。跨域资源共享还通过一种机制来检查服务器是否会允许要发送的真实请求，该机制通过发起一个到服务器托管的跨域资源的[预检(preflight)](#preflight)请求。在预检中，浏览器发送的头中标示有HTTP方法和真实请求中用到的头。

出于安全性的考虑，浏览器限制脚本内发起跨域HTTP请求。例如，`XMLHttpRequest`和`Fetch API`遵循[同源策略](#同源策略)。这意味着使用这些API的Web应用程序只能从加载应用程序的同一个域请求HTTP资源，除非响应报文包含了正确CORS响应头。

跨域资源共享（CORS）机制允许Web应用服务器进行跨域资源访问控制，从而使跨域数据传输得以安全进行。现代浏览器支持在API容器中（XMLHttpRequest或Fetch）使用CORS，以降低跨域HTTP请求所带来的风险。

跨域资源共享标准新增了一组HTTP头部字段，允许服务器声明哪些域通过浏览器有权限访问哪些资源。另外，规范要求，对哪些可能对服务器数据产生副作用的HTTP请求方法（特别是`GET`以外的HTTP请求，或者搭配某些`MIME类型`的`POST`请求），浏览器必须首先使用`OPTIONS`发起一个[预检(preflight)](#preflight)，从而获知服务端是否允许跨域请求。服务端确认允许之后，才能发起实际的HTTP请求。在预检请求的返回中，服务端也可以通知客户端，是否需要携带身份凭证（包括`Cookies`和`HTTP认证`相关数据）。

## 同源策略

## 简单请求

某些请求不会触发CORS预检请求。这些请求可以被称为“简单请求”，若请求满足下述**所有条件**，则该请求可视为“简单请求”

* 使用下列方法之一：
  - GET
  - HEAD
  - POST
* 除了被用户代理自动设置的首部字段（如Connection，User-Agent）和在Fetch规范中定义为[禁用首部名称](https://fetch.spec.whatwg.org/#forbidden-header-name)的其他首部，允许人为设置的字段为Fetch规范定义的[对CORS安全的首部字段集合](https://fetch.spec.whatwg.org/#cors-safelisted-request-header)。该集合为：
  - Accept
  - Accept-Language
  - Content-Language
  - Content-Type（需要注意额外的限制）
* Content-Type的值仅限于下列三者之一：
  - text/plain
  - multipart/form-data
  - application/x-ww-form-urlencoded
* 请求中的任意XMLHttpRequest对象均没有注册任何事件监听器；XMLHttpRequest对象可以使用XMLHttpRequest.upload属性访问。
* 请求中没有使用ReadableStream对象

### 简单头部

一下的HTTP Headers都可以被认为是简单头部:
* Accept
* Accept-Language
* Content-Language
* Content-Type并且值是`text/plain`，`multipart/form-data`，`application/x-ww-form-urlencoded`三者之一。

或者以下客户端头部之一的也可以被认为是简单头部：
* DPR
* Downlink
* Save-Data
* Viewport-Width
* Width

## Preflight

**CORS预检请求**是用于检查服务器是否支持CORS。它一般是用了依赖几个HTTP请求首部的`OPTIONS`请求：`Access-Control-Request-Method`和`Access-Control-Request-Headers`，以及一个`Origin`。当有必要的时候，浏览器会自动发出一个预检请求，而无需开发者自己发送。

例如，一个客户端可能会在实际发送一个`DELETE`请求之前，先向服务器发送一个预检请求，用于询问是否可以想服务器发送一个`DELETE`请求：

```http:no-line-numbers
OPTIONS /resource/foo
Access-Control-Request-Method: DELETE
Access-Control-Request-Headers: origin, x-requested-with
Origin: https://foo.bar.org
```

如果服务器允许，那么服务器就会响应这个预检请求。并且响应首部`Access-Control-Allow-Methods`会将DELETE包含在其中：

```http:no-line-numbers
HTTP/1.1 200 OK
Content-Length: 0
Connection: keep-alive
Access-Control-Allow-Origin: https://foo.bar.org
Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE
Access-Control-Max-age: 86400
```
## CORS响应头部

### Access-Control-Allow-Origin

**Access-Control-Allow-Origin**响应头指定了该响应的资源是否被允许与给定的origin共享。

```http:no-line-numbers
Access-Control-Allow-Origin: <origin> | *
```

如果服务器未使用“*”，而是指定了一个域，那么响应头中的Vary字段值必须包含Origin。这将告诉客户端，服务端对不同的源返回的内容不同。

```http:no-line-numbers
Access-Control-Allow-Origin: https://developer.mozilla.org
Vary: Origin
```

### Access-Control-Expose-Headers

**Access-Control-Expose-Headers**头部列出了哪些头部可以作为响应的一部分暴露给外部。
默认情况下，只有七种响应头部可以暴露给外部：
* Cache-Control
* Content-Language
* Content-Length
* Content_type
* Expires
* Last-Modified
* Pragma

如果想要让客户端可以访问到其他的头部信息，可以将它们在Access-Control-Expose-Header里列出来