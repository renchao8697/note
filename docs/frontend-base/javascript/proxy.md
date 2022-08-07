# Proxy and Reflect

ES6新增的代理（Proxy）和反射（Reflect）为开发者提供了拦截并向基本操作嵌入额外行为的能力。具体地说，可以给目标对象定义一个关联的代理对象，而这个代理对象可以作为抽象的目标对来使用。在对目标对象的各种操作影响目标对象之前，可以在代理对象中对这些操作加以控制。

::: warning 注意
在ES6之前，ECMAScript中并没有类似代理的特性。由于代理是一种新的基础性语言能力，很多转译程序都不能把代理行为转换为之前的ECMAScript代码，因为代理的行为实际上是无可替代的。为此代理和反射只在百分之百支持它们的平台上有用。可以检测代理是否存在，不存在则提供后备代码。不过这会导致代码冗余，因此并不推荐。
:::

## 代理基础

### 创建空代理

```js
const target = {
  id: 'target'
}
const handler = {}
const proxy = new Proxy(target, handler)
// id属性会访问同一个值
console.log(target.id)  // traget
console.log(proxy.id)  // traget
// 给目标属性赋值会反映在两个对象上
target.id = 'foo'
console.log(target.id)  // foo
console.log(proxy.id)  // foo
// 给代理属性赋值会反映在两个对象上
proxy.id = 'bar'
console.log(target.id)  // bar
console.log(proxy.id)  // bar

console.log(target.hasOwnProperty('id'))  // true
console.log(proxy.hasOwnProperty('id'))  // true

console.log(target instanceof Proxy)  // TypeError
console.log(proxy instanceof Proxy) // TypeError

console.log(target === proxy) // false
```


**Proxy**对象用于创建一个对象的代理，从而实现基本操作的拦截和自定义（如属性查找、赋值、枚举、函数调用等）。

```js
const p = new Proxy(target, handler)
```

### 定义捕获器

使用代理的主要目的是可以定义捕获器（trap）。捕获器就是在处理程序对象中定义的”基本操作的拦截器“。每个处理程序对象可以包含零个活多个捕获器，每个捕获器都对应一种基本操作，可以直接或间接在代理对象上调用。**每次在代理对象上调用这些基本操作时，代理可以在这些操作传播到目标对象之前先调用捕获器函数，从而拦截并修改响应的行为**。

例如，可以定义一个`get()`捕获器，在ECMAScript操作以某种形式调用`get()`时触发。下面的例子定义了一个`get()`捕获器：

```js
const target = {
  foo: 'bar'
}
const hander = {
  get() {
    return 'handler override'
  }
}
const proxy = new Proxy(target, handler)
```

这样，当通过代理对象之行`get()`操作时，就会出发定义的`get()`捕获器。当然，`get()`不是ECMAScript对象一个调用的方法。这个操作在JavaScript代码中可以通过多种形式触发并被`get()`捕获器拦截到。`proxy[property]`、`proxy.property`或`Object.create(proxy)[property]`等操作都会触发基本的`get()`操作以获取属性。因此所有这些操作只要发生在代理对象上，就会出发`get()`捕获器。注意，只有在代理对象上执行这些操作才会触发捕获器。在目标对象傻姑娘执行这些操作仍然会产生正常的行为。

```js
const target = {
  foo: 'bar'
}
const handler = {
  get() {
    return 'handler override'
  }
}
const proxy = new Proxy(target, handler)

console.log(target.foo) // bar
console.log(proxy.foo) // handler override


console.log(target['foo']) // bar
console.log(proxy['foo']) // handler override


console.log(Object.create(target)['foo']) // bar
console.log(Object.create(proxy)['foo']) // handler override
```

### 捕获器参数和反射API

所有捕获器都可以访问响应的参数，基于这些参数可以重建被捕获方法的原始行为。不如，`get()`捕获器会接收到目标对象、要查询的属性和代理对象三个参数。

```js
const target = {
  foo: 'bar'
}
const handler = {
  get(trapTarget, property, receiver) {
    console.log(trapTarget === target)
    console.log(property)
    console.log(receiver === proxy)
  }
}
const proxy = new Proxy(target, handler)
proxy.foo
// true
// 'foo'
// true
```

所有捕获器都可以给予自己的参数擦红箭原始操作，但并非所有捕获器行为都想`get()`那么简单。因此，通过手动写代码如法炮制的想法时不现实的。实际上，**开发者并不需要手动重建原始行为，而是可以通过调用全局`Reflect`对象上（封装了原始行为）的同名方法来轻松重建。**

**处理程序对象中所有可以捕获的方法都有对应的反射（Reflect）API方法。这些方法与捕获器拦截的方法具有相同的名称和函数签名，而且也具有与被拦截方法相同的行为。**因此，使用反射API也可以像下面这样定义出空代理对象：

```js
const target = {
  foo: 'bar'
}
const handler = {
  get() {
    return Reflect.get(...arguments)
  }
}
const proxy = new Proxy(target, handler)
```

甚至可以写的更简洁一些：

```js
const target = {
  foo: 'bar'
}
const handler = {
  get: Reflect.get
}
const proxy = new Proxy(target, handler)
```

事实上，如果真想创建一个可以捕获所有方法，然后将每个方法转发给对应反射API的空代理，那么甚至不需要定义处理程序对象：
```js
const target = {
  foo: 'bar'
}
const proxy = new Proxy(target, Reflect)
```

反射API为开发者准备好了样板代码，在此基础上开者可以用最少的代码修改捕获的方法。

### 捕获器不变式










* `target`：要使用`Proxy`包装的目标对象（可以是任何类型的对象，包括原生数组，函数，甚至另一个代理）。
* `handler`：一个通常以函数作为属性的对象，各属性中的函数分别定义了在执行各种操作时代理`p`的行为。

## handler对象的方法

`handler`对象是一个容纳一批特定属性的占位符对象。它包含有`Proxy`的各个捕捉器（trap）。

所有的捕捉器是可选的。如果没有定义某个捕捉器，那么就会保留源对象的默认行为。

### getPrototypeOf

`handler.getPrototypeOf()`：`Object.getPrototypeOf()`方法的捕捉器
```js
const target = {
  n: 1
}
const targetPrototype = {
  n: 2
}
const handler = {
  getPrototypeOf(target) {
    return targetPrototype;
  }
}
const p = new Proxy(target, handler)
console.log(Object.getPrototypeOf(p) === targetPrototype)
// output: true
console.log(Object.getPrototypeOf(p).n)
// output: 2
```

`Object.getPrototypeOf()`方法返回指定对象的原型（内部`[[Prototype]]`属性的值）。

```js
const proto = {}
const obj = Object.create(proto)
console.log(Object.getPrototypeOf(obj) === proto)
// output: true
const reg = /a/
console.log(Object.getPrototypeOf(reg) === RegExp.prototype)
// output: true
```


在ES5中如果参数不是一个对象类型，将会抛出一个`TypeError`异常。在ES6中，参数会被强制转换为一个Object。

```js
Object.getPrototypeOf('foo');
// TypeError: "foo" is not an object (ES5 code)
Object.getPrototypeOf('foo');
// String.prototype (ES2015 code)
```

### setPrototypeOf

`handler.setPrototypeOf()`：`Object.setPrototypeOf()`方法的捕捉器

```js
const target = {}
const newProto = {}
const handler = {
  setPrototypeOf(target, prototype) {
    Object.setPrototypeOf(target, prototype)
    // 如果返回false或throw Error则set失败
    return true
  }
}
const p = new Proxy(target, handler)
Object.setPrototypeOf(p, newProto)
console.log(Object.getPrototypeOf(p) === newProto)
// output: true
```

`Object.setPrototypeOf()`方法设置一个指定的对象的原型（即，内部`[[Prototype]]`属性）到另一个对象或`null`。

::: danger 警告
由于现代JavaScript引擎优化属性访问所带来的特性的关系，更改对象的`[[Prototype]]`在 ***各个*** 浏览器和JavaScript引擎上都是一个很慢的操作。其在更改继承的性能上的影响是微妙而又广泛的，这仅仅限于`obj.__proto__ = ...`语句上的时间花费，而且可能会延伸到 ***任何*** 代码，哪些可以访问 ***任何*** `[[Prototype]]`已被更改的对象的代码。如果你关心性能，你应该避免设置一个对象的`[[Prototype]]`。相反。你应该使用`Object.create()`来创建带有你想要`[[Prototype]]`的新对象。
:::

```js
Object.setPrototypeOf(obj, prototype)
```

如果对象的`[[Prototype]]`被修改成不可扩展（通过`Object.isExtensible()`查看），就会判处`TypeError`异常。如果prototype参数不是一个对象或者null（例如，数字，字符串，boolean或者undefined），则什么都不坐。否则，该方法将obj的`[[Prototype]]`修改为新的值。

### isExtensible

`handler.isExtensible()`：`Object.isExtensible()`方法的捕捉器

```js
const p = new Proxy({}, {
  isExtensible(target) {
    console.log('called')
    // 返回false会报错
    // 可以不返回boolean值，如0和1
    return true
  }
})
console.log(Object.isExtensible(p))
// output: true
```

`Object.isExtensible()`方法判断一个对象是否可扩展。默认情况下，对象是可以扩展的，我们可以使用`Object.preventExtensions`、`Object.seal`或`Object.freeze`方法设置一个对象为不可扩展（non-extensible）。

在ES5中，如果参数不是一个对象类型，将会抛出一个`TypeError`异常。在ES6中，non-object 参数将被视为一个不可扩展的普通对象，将会返回false。

```js
Object.isExtensible(1);
// TypeError: 1 is not an object (ES5 code)
Object.isExtensible(1);
// false                         (ES6 code)
```

### preventExtensible

`handler.preventExtensible()`：`Object.preventExtensible()`方法的捕捉器

```js
const p = new Proxy({}, {
  preventExtensions(target) {
    return Object.preventExtensions(target);
  }
})

console.log(Object.preventExtensions(p))
// output: Proxy对象，但是MDN中表示会返回boolean
```

`Object.preventExtensions()`方法让一个对象变的不可扩展，也就是永远不能再添加新的属性。

`Object.preventExtensions()`会返回已经不可扩展的对象。

`Object.preventExtensions()`仅阻止添加自身的属性。但其对象类型的原型依然可以添加新的属性。

`Object.preventExtensions()`方法使目标对象的`[[Prototype]]`不可变。


```js
const fixed = Object.preventExtensions({});
fixed.__proto__ = { oh: 'hai' };  // throws a 'TypeError'.
fixed.__proto__.a = 123
console.log(fixed.a)
// output: 123
```

### getOwnPropertyDescriptor

`handler.getOwnPropertyDescriptor()`：`Object.getOwnPropertyDescriptor()`方法的捕捉器


### defineProperty



### has


### get


### set


### deleteProperty


### ownKeys


### apply


### construct