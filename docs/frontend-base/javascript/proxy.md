# Proxy

**Proxy**对象用于创建一个对象的代理，从而实现基本操作的拦截和自定义（如属性查找、赋值、枚举、函数调用等）。

```js
const p = new Proxy(target, handler)
```

* `target`：要使用`Proxy`包装的目标对象（可以是任何类型的对象，包括原生数组，函数，甚至另一个代理）。
* `handler`：一个通常以函数作为属性的对象，各属性中的函数分别定义了在执行各种操作时代理`p`的行为。

## handler对象的方法

`handler`对象是一个容纳一批特定属性的占位符对象。它包含有`Proxy`的各个捕捉器（trap）。

所有的捕捉器是可选的。如果没有定义某个捕捉器，那么就会保留源对象的默认行为。

### handler.getPrototypeOf()

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

### handler.setPrototypeOf()

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

### handler.isExtensible()

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

### handler.preventExtensible()

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
// output: sss
```