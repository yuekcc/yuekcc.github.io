# Debounce 和 Throttle

Debounce 一般翻译为防抖；Throttle 一般翻译为节流。

## Debounce

Debounce 防抖，在一段时间内连续触发事件，只会在时间间隔的右侧执行回调。

![debounce](images/debounce.svg)

## Throttle

Throttle 节流，在一段时间内连接触发事件，只会在时间间隔的左侧执行回调。

![Throttle](images/throttle.svg)

## 实现

这里的实现是 Debounce 和 Throttle 的基础版本：

```js
function debounce(fn, wait) {
  let timerId;
  return function (...args) {
    const ctx = this;
    if (timerId) {
      clearTimeout(timerId);
    }

    timerId = setTimeout(() => {
      fn.apply(ctx, args);
    }, wait);
  };
}

function throttle(fn, wait) {
  let lastInvoke = 0;
  return function (...args) {
    const ctx = this;
    const now = Date.now();

    if (lastInvoke === 0) {
      fn.apply(ctx, args);
      lastInvoke = now;
      return;
    }

    if (now - lastInvoke > wait) {
      fn.apply(ctx, args);
      lastInvoke = now;
    }
  };
}
```

更优秀的实现可以参考 lodash 的 `_.debounce` 和 `_.throttle`。

---

- 2023 年 01 月 08 日
