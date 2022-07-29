# CORS

**CORS**(Cross-Origin Resource Sharing，跨域资源共享)是一种基于HTTP头部的机制，该机制通过允许服务器标示除了它自己以外的其他origin（域，协议和端口），使浏览器允许这些origin访问加载自己的资源。跨域资源共享还通过一种机制来检查服务器是否会允许要发送的真实请求，该机制通过发起一个到服务器托管的跨域资源的[预检(preflight)](#preflight)请求。在预检中，浏览器发送的头中标示有HTTP方法和真实请求中用到的头。

出于安全性的考虑，浏览器限制脚本内发起跨域HTTP请求。例如，`XMLHttpRequest`和`Fetch API`遵循[同源策略](#同源策略)。这意味着使用这些API的Web应用程序只能从加载应用程序的同一个域请求HTTP资源，除非响应报文包含了正确CORS响应头。

跨域资源共享（CORS）机制允许Web应用服务器进行跨域资源访问控制，从而使跨域数据传输得以安全进行。现代浏览器支持在API容器中（XMLHttpRequest或Fetch）使用CORS，以降低跨域HTTP请求所带来的风险。

跨域资源共享标准新增了一组HTTP头部字段，允许服务器声明哪些域通过浏览器有权限访问哪些资源。另外，规范要求，对哪些可能对服务器数据产生副作用的HTTP请求方法（特别是`GET`以外的HTTP请求，或者搭配某些`MIME类型`的`POST`请求），浏览器必须首先使用`OPTIONS`发起一个[预检(preflight)](#preflight)，从而获知服务端是否允许跨域请求。服务端确认允许之后，才能发起实际的HTTP请求。在预检请求的返回中，服务端也可以通知客户端，是否需要携带身份凭证（包括`Cookies`和`HTTP认证`相关数据）。

## 同源策略

**同源策略**是一个重要的安全策略，它用于限制一个origin的文档或者它加载的脚步如何能与另一个源的资源进行交互。它能帮助阻隔恶意文件，减少可能被攻击的媒介。

**同源**：如果两个URL的protocol、port和host都相同的话，则这两个URL是同源。

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

#### Access-Control-Allow-Origin

`Access-Control-Allow-Origin`响应头指定了该响应的资源是否被允许与给定的origin共享。

```http:no-line-numbers
Access-Control-Allow-Origin: <origin> | *
```

如果服务器未使用“*”，而是指定了一个域，那么响应头中的Vary字段值必须包含Origin。这将告诉客户端，服务端对不同的源返回的内容不同。

```http:no-line-numbers
Access-Control-Allow-Origin: https://developer.mozilla.org
Vary: Origin
```

#### Access-Control-Expose-Headers

`Access-Control-Expose-Headers`头部列出了哪些头部可以作为响应的一部分暴露给外部。
默认情况下，只有七种响应头部可以暴露给外部：
* Cache-Control
* Content-Language
* Content-Length
* Content_type
* Expires
* Last-Modified
* Pragma

如果想要让客户端可以访问到其他的头部信息，可以将它们在Access-Control-Expose-Header里列出来。
也可以额外暴露自定义头部，可以指定多个，用逗号隔开：
```http:no-line-numbers
Access-Control-Expose-Headers: Content-Length, X-My-Custom-Header
```
这样浏览器就能够通过`getResponseHeader`访问`Content-Length`, `X-My-Custom-Header`响应头了。

#### Access-Control-Max-Age

`Access-Control-Max-Age`头指定了[preflight](#preflight)请求的结果能够被缓存多久。

```http:no-line-numbers
Access-Control-Max-Age: <delta-seconds>
```

#### Access-Control-Allow-Credentials

`Access-Control-Allow-Credentials`响应头用于在请求要求包含credentials（Request.credentials的值为`include`）时，告知浏览器是否可以将对请求的响应暴露给前端JavaScript代码。

当请求的credentials模式（Request.credentials）为`include`时，浏览器仅在响应标头`Access-Control-Allow-Credentials`的值为`true`的情况下将响应暴露给前端的JavaScript代码。

Credentials可以是cookies、authorization headers或TLS client certificates。

当作为对预检请求响应的一部分时，这能表示是否真正的请求可以使用credentials。注意简单的`GET`请求没有预检，所以若一个对资源的请求带了credentials，如果这个响应头没有随资源返回，响应就会被浏览器忽视，不会返回到web内容。

`Access-Control-Allow-Credentials`标头需要与`XMLHttpRequest.withCredentials`或Fetch API的`Request()`构造函数中的credentials选项结合使用。

```http:no-line-numbers
Access-Control-Allow-Credentials: true
```

#### Access-Control-Allow-Methods

`Access-Control-Allow-Methods`头部字段用于[预检请求preflight request](#preflight)的响应。指明了请求所允许使用的HTTP方法。

```http:no-line-numbers
Access-Control-Allow-Methods: POST, GET, OPTIONS
```

#### Access-Control-Allow-Headers

`Access-Control-Allow-Headers`头部字段用于预检请求的响应，指明了实际请求中允许携带的头部字段。
[简单头部](#简单头部)始终支持，不炫耀在这个头部中列出。

```http:no-line-numbers
Access-COntrol-Allow-Headers: <field-name>[, <field-name>]*
```

## CORS请求头部

#### Origin

`Origin`头部字段表明[预检请求preflight request](#preflight)或实际请求的源站。

```http:no-line-numbers
Origin: http://developer.mozilla.org
```

#### Access-Control-Request-Method

`Access-Control-Request-Method`头部字段用于[预检请求preflight request](#preflight)。其作用是，将实际请求所使用的HTTP方法告诉服务器。

```http:no-line-numbers
Access-Control-Request-Method: <method>
```

#### Access-Control-Request-Headers

`Access-Control-Request-Headers`头部字段用于[预检请求preflight request](#preflight)。其作用是，将实际所携带的首部字段告诉服务器。

```http:no-line-numbers
Access-Control-Request-Headers: <field-name>[, <field-name>]*
```