# 理解 Vue 的 Dep

Dep 类是 vue 中用于追踪变化的工具类。

当组件初始化时，vue 会为 data 选项中的每个 key 创建一个 Dep 实例，用来追踪其值的 set 或 get，从而实现数据响应。
这就是所谓的“响应式”编程。

对于 vue 实现响应式编程，可以简要理解为：首先通过某种方式，在创建组件实例时，观测某些数据的变化。如果这些数据的值发生了
改变，则自动触发某些回调函数，最终触发视图更新。

## 简化版

```js
let _target;

class Dep {
  constructor() {
    this._subscribers = [];
  }
  depend() {
    if (_target && !this._subscribers.includes(_target)) {
      this._subscribers.push(_target);
    }
  }

  notify() {
    this._subscribers.forEach((sub) => sub());
  }
}

export function watchEffect(effect) {
  _target = effect;
  effect();
  _target = null;
}
```

Dep 类包含两个方法，一个私有属性：

- `#depend` 用于在数据的 getter 中收集变化依赖
- `#notify` 用于在 setter 中通知这个 dep 追踪的数据发生的改变，并执行注册在 `subscribers` 中的回调函数 

Dep 类是观察者模式的一个变种。与 Observable 不同的是 Dep 是利用了闭包的特性自动收集依赖。

## 例子

例如有这样一个 vue 组件：

```js
export default {
  data() {
    return {
      name: "",
      age: 0,
    };
  },
  computed: {
    message() {
      return `${this.name} is ${this.age} year(s) old.`;
    },
  },
  render(h) {
    return h("div", this.message);
  },
};
```

首先要明确一点，vue 组件的初始化是串行的，因为 js 本身就是单线程。

比如上面这个组件，有 `data`、`computed` 选项。vue 会先初始化 `data` 选项，然后再执行 `computed` 中的计算。
这个在 `created` 事件后，`this.name`、`this.age`、`this.message` 都可以直接在 `render` 函数中使用。
vue 初始化这些数据，目的是执行 `render` 函数，渲染视图。

>无论是 `template` 选项或 sfc 组件，模板最终会通过动态或静态的方式编译为 `render` 函数。

对于 `this.message`，由代码可以看出，依赖于 `this.name` 和 `this.age`。vue 初始 `data` 中的对象时，会为每个字段创建一个 dep 对象，
通过拦截 setter 和 getter 实现数据变化时响应。大概的流程：

- 初始化 `name` 字段，创建 `dep` 对象，设置 setter/getter
- 初始化 `age` 字段，创建 `dep` 对象，设置 setter/getter
- 发现有 `computed` 选项，执行 `computed` 下的函数。
- `message()` 会进行包装，比如传入到 `watchEffect()` 中执行。
- 执行 `watchEffect` 函数，设置 `_target` 为 `message()`
- 执行 `message()`，触发 `this.name` 和 `this.age` 的 getter
- getter 将 `message()` 加入到各自 dep 对象的 `subscribers` 队列中
- 执行结束，设置 `_target` 为 `null`。因为闭包的特性。`subscribers` 队列中记录的数据是不会被 gc。就是说可以一直保存到 dep 实例被 gc。
- 在初始结束后。`this.name` 被重新赋值，这时就发触发 setter 中的 `#notify` 方法，从而重新执行 `subscribers` 队列中的所有函数

## 小结

vue2 中的 Dep 实现当然会更复杂，毕竟有优化和 edge case 的考虑。上面的只是一个简化的版本，用来理解 vue 是如何实现响应式的。

----

2021.11.7 从本地文章中添加到当前仓库。有少量修改
