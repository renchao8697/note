# Common JavaScript Functions

## Generate random colors

生成随机颜色

```js
const generateRandomHexColor = () =>
  `#${Math.floor(Math.random() * 0xffffff).toString(16)}`;
```

## Array reordering

数组重新排序

```js
const shuffle = (arr) => arr.sort(() => Math.random() - 0.5);
```

## Copy to clipboard

复制到剪贴板

```js
const copyToClipboard = (text) => navigator.clipboard.writeText(text);
```

`navigator.clipboard.writeText()`函数返回一个`Promise`，当 document.hasFocus()为 true，并且用户授予了相应的权限时才能使用。完整代码为：

```js
navigator.permissions.query({ name: 'clipboard-write' }).then((result) => {
  const hasFocus = document.hasFocus(); // 判断当前是否为dom页面
  if (hasFocus && (result.state === 'granted' || result.state === 'prompt')) {
    navigator.clipboard.writeText('haha').then(() => {
      console.log('success');
    });
  }
});
```

## Detect dark theme

检测 dark 主题

```js
const isDarkMode = () =>
  window.matchMedia('(prefers-color-scheme: dark)').matches;
```

## Scroll to top

使用`scrollIntoView`让元素滚动到顶部

```js
const scrollToTop = (element) =>
  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
```

可以使用同样方法让元素滚动到底部

```js
const scrollToTop = (element) =>
  element.scrollIntoView({ behavior: 'smooth', block: 'end' });
```

## Detect if an element is on the screen

使用 IntersectionObserver 检测元素是否在窗口中

```js
const callback = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log(`button "${entry.target.innerText}" is visible`);
    }
  });
};

const options = {
  threshold: 1.0,
};
const observer = new IntersectionObserver(callback, options);
const btn = document.querySelector('button');
observer.observe(btn);
```

## Testing Equipment

使用`navigator.userAgent`检测运行在什么设备平台

```js
const detectDeviceType = () =>
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
    ? 'Mobile'
    : 'Desktop';
```

## Hidden element

```js
const hideElement = (el, removeFromFlow = false) => {
  removeFromFlow ? (el.style.display = 'none') : (el.style.visibility = 'hidden')
}
```

## Get parameters from the URL

获取URL参数

```js
const getParamByURL = (key) => {
  const url = new URL(location.href);
  return url.searchParams.get(key);
}
```

## Wait function

```js
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const asyncFn = async () => {
  await wait(1000);
  console.log('Waiting for an asynchronous function to finish executing');
}

asyncFn();
```
