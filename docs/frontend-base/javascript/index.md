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

滚动到元素位置

```js
const scrollElement = (element) => element.scrollIntoView({ behavior: 'smooth' });
```

滚动到页面顶部

```js
const scrollToTop = () => {
  const height = document.documentElement.scrollTop || document.body.scrollTop;
  if (height > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, height - height / 8);
  }
}
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

判断是Android还是IOS

```js
/**
 * @return {number} [1, 2] 1：IOS；2：Android；3：other
*/
const getOSType = () => {
  const u = navigator.userAgent;
  const isAndroid = u.includes('Android') || u.includes('Linux');
  const isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
  if (isIOS) return 1;
  if (isAndroid) return 2
  return 3;
}
```

## Hidden element

```js
const hideElement = (el, removeFromFlow = false) => {
  removeFromFlow
    ? (el.style.display = 'none')
    : (el.style.visibility = 'hidden');
};
```

## Get parameters from the URL

获取 URL 参数

```js
const getParamByURL = (key) => {
  const url = new URL(location.href);
  return url.searchParams.get(key);
};
```

获取所有参数

```js
const getSearchParams = () => {
  const searchPar = new URLSearchParams(window.location.search);
  const paramsObj = {};
  for (const [key, value] of searchPar.entries()) {
    paramsObj[key] = value;
  }
  return paramsObj;
}
```

## Wait function

```js
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const asyncFn = async () => {
  await wait(1000);
  console.log('Waiting for an asynchronous function to finish executing');
};

asyncFn();
```

## Detect data type

检测数据类型

```js
const typeOf = (data) =>
  Object.prototype.toString.call(data).slice(8, -1).tolowerCase();
```

## debounce 防抖

```js
const debounce = (() => {
  let timer = null;
  return (callback, wait = 800) => {
    timer && clearTimeout(timer);
    timer = setTimeout(callback, wait);
  };
})();
```

## throttle 节流

```js
const throttle = (() => {
  let last = 0;
  return (callback, wait = 800) => {
    let now = +new Date();
    if (now - last > wait) {
      callback();
      last = now;
    }
  };
})();
```

## 手机号脱敏

```js
const hideMobile = (mobile) =>
  mobile.replace(/^(\d{3})\d{4}(\d{4})$/, '$1****$2');
```

## full screen

```js
const launchFullscreen = (element) => {
  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.mozRequestFullscreen) {
    element.mozRequestFullscreen();
  } else if (element.msRequestFullscreen) {
    element.msRequestFullscreen()
  } else if (element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen();
  } else {
    alert('当前浏览器不支持全屏');
  }
}
```

关闭全屏

```js
const exitFullscreen = () => {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  }
}
```

## 大小写转换

```js
/**
 * @param str {string}
 * @param type {number} [1, 2, 3] 1：大写，2：小写，3：首字母大写
 * @return {string}
*/
const turnCase = (str, type) => {
  switch (type) {
    case 1:
      return str.toUpperCase();
    case 2:
      return str.toLowerCase();
    case 3:
      return str[0].toUpperCase() + str.substring(1).toLowerCase();
    default:
      return str;
  }
}
```

## 金额格式化

```js
const moneyFormat = (number, decimals, sep = ',') => {
  number = (number + '').replace(/[^0-9+-Ee.]/g, '')
  const n = !isFinite(+number) ? 0 : +number
  const prec = !isFinite(+decimals) ? 2 : Math.abs(decimals)
  let s = ''
  const toFixedFix = function(n, prec) {
    const k = Math.pow(10, prec)
    return '' + Math.ceil(n * k) / k
  }
  s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.')
  const re = /(-?\d+)(\d{3})/
  while (re.test(s[0])) {
    s[0] = s[0].replace(re, '$1' + sep + '$2')
  }

  if ((s[1] || '').length < prec) {
    s[1] = s[1] || ''
    s[1] += new Array(prec - s[1].length + 1).join('0')
  }
  return s.join('.')
}
```