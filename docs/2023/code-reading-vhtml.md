# vhtml 源码阅读理解

[vhtml] 是 [Jason Miller][developit] 很多年前（有近 10 年）实现的一个 jsx 渲染库。Jason Miller 是 [preact] 的核心开发之一。

jsx 一般配合 vdom 使用。jsx 本质只是函数调用，可以通过自定义的 `h` 函数将 jsx 调用渲染为 HTML。vhtml 的功能是将 jsx 渲染为 HTML 字符串。

## jsx

jsx 是一种 javascript 的语法拓展。在编写 jsx 时表现为 js 代码中的 xml。比如 vhtml 的 README.md 中的这个例子：

```js
// import the library:
import h from 'vhtml';

// tell babel to transpile JSX to h() calls:
/** @jsx h */

// now render JSX to an HTML string!
let items = ['one', 'two', 'three'];

document.body.innerHTML = (
  <div class="foo">
    <h1>Hi!</h1>
    <p>Here is a list of {items.length} items:</p>
    <ul>
      {items.map(item => (
        <li>{item}</li>
      ))}
    </ul>
  </div>
);
```

javascript 引擎原生不支持 jsx。jsx 需要通过 bundler 或 babel 转换成一般 javascript 代码。上面的代码通过 babel 转换，可以得到这样的 javascript 代码：

```js
// 格式化后
document.body.innerHTML = /*#__PURE__*/ React.createElement(
  'div',
  {
    class: 'foo',
  },
  /*#__PURE__*/ React.createElement('h1', null, 'Hi!'),
  /*#__PURE__*/ React.createElement('p', null, 'Here is a list of ', items.length, ' items:'),
  /*#__PURE__*/ React.createElement(
    'ul',
    null,
    items.map(item => /*#__PURE__*/ React.createElement('li', null, item)),
  ),
);
```

可以看出，jsx 转换后就是 `React.createElement` 的函数调用。通过 babel 的配置或 `@jsx` 转译注解，可以将 `React.createElement` 替换为自定义的 `h` 函数。而 vhtml 就提供 `h` 函数的实现。

## vhtml 代码

vhtml 的核心代码在 [https://github.com/developit/vhtml/blob/master/src/vhtml.js][vhtml_core]：

```js
import emptyTags from './empty-tags'; // empty-tags 中声明非闭合的元素，比如 input、hr 等

// 转义处理
let esc = str => String(str).replace(/[&<>"']/g, s => `&${map[s]};`);
let map = { '&': 'amp', '<': 'lt', '>': 'gt', '"': 'quot', "'": 'apos' };

// 如果设置了 dangerouslySetInnerHTML 字段，表示直接保存内容、不进行转义。对于 web 程序，可能会有 XSS 风险
let setInnerHTMLAttr = 'dangerouslySetInnerHTML';

// jsx 属性和 html 属性之类转换。class、for 是 javascript 的关键字
let DOMAttributeNames = {
  className: 'class',
  htmlFor: 'for',
};

let sanitized = {}; // 用于标记是否已经进行转义

/** Hyperscript reviver that constructs a sanitized HTML string. */
export default function h(name, attrs) {
  // stack 用于保存第三个参数之后的参数列表
  // h 函数一般是这样调用：h('p', {}, 'text1', 'text2')
  // 第一个参数可能是一个函数或标签名称；第二个参数是属性；余下的标签之间的内容，可能是空也可能是多个
  let stack = [],
    s = ''; // 结果
  attrs = attrs || {}; // 保存元素的属性

  // 倒序存入 stack，后续可以和 .pop() 弹出最后一个存入的数据
  for (let i = arguments.length; i-- > 2; ) {
    stack.push(arguments[i]);
  }

  // 如果第一参数是函数，说明是一个组件，将 stack 反向排序后，保存到第二个参数 attrs 的 children 字段中，然后调用 name 函数。
  // attrs.children 表示标签的内容
  // Sortof component support!
  if (typeof name === 'function') {
    attrs.children = stack.reverse();
    return name(attrs);
    // return name(attrs, stack.reverse());
  }

  // 如果 name = 'div'
  if (name) {
    s += '<' + name; // s = '<div'

    // 如果有 attrs
    if (attrs)
      // 迭代 attrs 的每个字段
      for (let i in attrs) {
        // 将非空的字段转换为 key="value" 对
        if (attrs[i] !== false && attrs[i] != null && i !== setInnerHTMLAttr) {
          // className 和 htmlFor 特殊处理一下
          // key、value 都进行一次转义，预防 XSS
          s += ` ${DOMAttributeNames[i] ? DOMAttributeNames[i] : esc(i)}="${esc(attrs[i])}"`;
        }
      }
    s += '>'; // s = '<div class="xxx">'
  }

  // 如果是单边闭合的标签，忽略这些处理
  if (emptyTags.indexOf(name) === -1) {
    // 如果需要直接输出 html
    if (attrs[setInnerHTMLAttr]) {
      s += attrs[setInnerHTMLAttr].__html; // 传入 html 内容
    }
    // 处理标签内容
    else
      while (stack.length) {
        // 取出第三个参数
        let child = stack.pop(); // 前面存入的时候已经是倒序入库，所以 .pop() 可以拿出第三个参数
        if (child) {
          // 如果 child 非空，且有 .pop 方法，表示 child 是一个数组
          if (child.pop) {
            // 将 child 的每个元素倒序存入 stack
            for (let i = child.length; i--; ) {
              stack.push(child[i]);
            }
          } else {
            // 拼接
            s += sanitized[child] === true ? child : esc(child);
          }
        }
      }

    s += name ? `</${name}>` : '';
  }

  sanitized[s] = true;
  return s;
}
```

## 体会

大佬的代码总是很简洁实用。首先安全性，XSS 预防；其次 stack 的处理也让人印象深刻。再就是 Array 对象的 `.pop`、`.push`、`.revert` 方法的使用；vhtml 的核心代码很短，仓库中也配置了单元测试，是一个很完整的项目。

---

- 2023-06-07 初稿

[vhtml]: https://www.npmjs.com/package/vhtml
[developit]: https://github.com/developit
[preact]: https://preactjs.com/
[vhtml_core]: https://github.com/developit/vhtml/blob/master/src/vhtml.js
