# React

## create-react-app

npx

```shell:no-line-numbers
npx create-react-app my-app
```

npm

```shell:no-line-numbers
npm init react-app my-app
```

yarn 

```shell:no-line-numbers
yarn create react-app my-app
```

### Selecting a template

模板在npm中命名为`cra-template-[template-name]`，我们只需要在创建命令中添加`[template-name]`即可：

```shell:no-line-numbers
npx create-react-app my-app --template [tempalte-name]

// typescript
npx-create-react-app my-app --tempalte typescript
```

## setState

```js:no-line-numbers
setState(partialState, callbace);
```

* `partialState`: object| function；用于产生与当前state合并的子集
* `callback`: function；state更新之后被调用

### setState()的三件事

1. 不要直接修改state

```js:no-line-numbers
// 错误示范
this.state.comment = 'Hello'  // 不会重新渲染组件
// 正确使用
this.setState({ comment: 'Hello' })
```

2. state的更新可能是异步的

出于性能考虑，React可能会把多个`setState()`调用合并成一个调用。
观察下面例子，log的值和button显示的counter值，不相同

```jsx
import { Component } from 'react'

export default class SetStateComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    }
  }

  changeValue = v => {
    this.setState({
      counter: this.state.counter + v
    })
    console.log('counter', this.state.counter)
    // 打印的值为显示的上一个值
  }

  setCounter = () => {
    this.changeValue(1);
  }

  render() {
    const { counter } = this.state;
    return (
      <div>
        <h3>set state</h3>
        <button onClick={this.setCounter}>{counter}</button>
      </div>
    )
  }
} 
```

观察发现，log打印的值为button按钮的上一个值，如果想要获取最新状态值，
可以使用一下三种方式：

  * 在回调中获取状态值
  ```js
  changeValue = v => {
    this.setState({
      counter: this.state.counter + v
    }, () => {
      console.log('counter', this.state.counter)
    })
  }
  ```
  * 使用定时器（v18这种方法已不可以）
  ```js
  setTimeout(() => {
    this.setCounter()
  }, 0)
  ```
  * 原生事件中修改状态（v18这种方法已不可以）
  ```js
  componentDidMount() {
    document.querySelector('#test')
      .addEventListener('click',this.setCounter, false)
  }
  ```
  总结：setState只有在合成事件和生命周期函数中是异步的，*在原生时间和setTimeout中都是同步的，这里的异步其实是批量更新*。

3. state的更新会被合并

```js
changevalue = v => {
  this.setState({
    counter: this.state.counter + v
  })
}
setCounter = () => {
  this.changeValue(1)
  this.changeValue(2)
}
```
使用上面代码发现，点击一次按钮counter值会直接变成2

如果想要链式更新state：
```js
changeValue = v => {
  this.setState(state => ({counter: state.counter + v}))
}
```