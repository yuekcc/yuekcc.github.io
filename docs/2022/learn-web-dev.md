# Web 前端开发入门

被问过一个问题——如何快速学习前端开发。

第一次遇到这个问题，我试着回忆了一下自己是如何学习 web 开发的。似乎没有特别快速的学习方法。不过，web 应用
开发是一种有快速反馈的学习过程，比较容易有成就感而且是一个慢慢深入的过程。

前端技术栈中有三种技术最为基础：html、css、js。这三种技术也分别对应一个应用的三层：布局、样式、交互。

## html、css

html 使用了 xml 的语法来表示一个网页。web 1.0 时代，html 仅提供了基本的富文本展示功能。html 通过嵌套标签
表示一个网页的布局。css 负责控制各个标签的展示效果，也就是样式。

html 现在已经发展到 html5，而 css 也到 css3.0。html、css 的标准由 w3c 制定，实现则是浏览器实现的，
各种浏览器对于这些标准支持程序甚至进度也是不一致的。因此不同的浏览器之间会存在兼容性问题。浏览器发展的现在已经形成
了三个集团：基于 blink 内核的 chromiun 家族，水果厂的 safari、web 自由爱好者 mozilla 的 firefox。这些浏览器的
最新版本也称为 every green 浏览器。

### html

对于 html 基本上就是 xml。比如下面的一段 html：

```html
<div class="container" style="padding: 10px; margin: 10px">
  <div>
    <!-- 我是注释  -->
  </div>
</div>
```

html 标准中包含许多标签。这些标签有部分被称为语义化标签。不过在日常开发中，只需要记住下面几个标签，基本上可以一招走天下：

- `div` 容器
- `span` 行内文本
- 表单
  - `input` 文本框
  - `textarea` 多行文本框
  - `select` 下拉选择
  - `button` 按钮

> 现在的 spa 应用很少会直接使用上面的表单标签，基本上会先将原始的标签进行包装以实现更好的交互效果。

### css

css 可以实现很多效果。但是对于前端开发而言掌握一部分基础的样式就算上手了。css 语法带有强烈的 c 风格，
属性使用 key-value 表示。比如：

```css
/* 注释只支持这种语法 */

/* 这里的 div 称为选择器。选择器有多个种类，最常见有标签选择器和类选择器 */
div {
  display: block;
}

.container {
  padding: 0; /* 设置属性 */
  margin: 0;
}
```

常用的属性：

- `padding` 内边距
- `margin` 外边距
- `display` 显示类型
  - `flex`
  - `inline-flex`
  - `block`
  - `inline-block`
- `border` 边框
- `position` 位置
- `backgroud` 背景
- `color` 文本颜色

css 中一个非常重要的概念就是：盒子模型。

![盒子模型](images/Pasted%20image%2020220527211902.png)

盒子模型会影响一个标签的展示。上图中表示的一个 div 标签。盒子模型还有不少细节，具体的细节可以问问 google。
现在流行的盒子模型是 `borderbox`。

## JS

js，更正式地应该叫 JavaScript、ECMAScript。js 在 web 技术栈中主要是负责交互部分，包括人机交互、机机交互。

js 由 tc39 进行标准化、版本迭代，目前的迭代节奏是一年一个版本。最新版本是 ES2022。关于 js 的历史可以找找其他资料看看，又是充满传奇的故事。

### 语法

js 也属于 c 语法的一支。大概是就是 c 语法 + scheme 功能 + oo 的组合。

```js
// 数组字面量
const arr = [1, 2, 3];
const emptyArr = [];

// 字符串
let aStr = 'hello, ';

// 使用 let 关键字声明的变量，可以重新赋值
aStr = aStr + 'world'; // => "hello, world"

// 对象字面量
const people = {
  name: 'Tom',
};

// 动态添加属性
people.age = 18;

// console.log 用于在控制台打印消息
console.log(people); // => {name: "Tom", age: 18}

// 声明一个函数
function add(a, b) {
  return a + b;
}

// 声明一个函数，这个函数也返回了一个函数
// 一般称为高阶函数
// 返回也的这个函数也可以称为闭包
function makeAddX(base) {
  return a => {
    // 这里返回的是一个新的函数，这种语法表示的函数，又称为箭头函数
    return add(a, base);
  };
}

// 获取一个 +100 的函数
const add100 = makeAddX(100);
const result = add100(1); // => 101

// 声明一个布尔类型的字面量
const canPrintResult = true;

// if 语句
if (canPrintResult) {
  // for 语句
  for (let i = 0; i < 10; i++) {
    console.log(result);

    if (i === 5) {
      break; // 从 for 循环中 break 出来
    }
  }
}

// 声明一个类
class Image {
  // js 类中的构建函数都叫 constructor
  constructor(width, height) {
    this._width = width;
    this._height = height;
  }

  printWidth() {
    console.log(this._width);
  }

  printSize() {
    console.log(this._width + ' x ' + this._height);
  }
}

// 声明一个类，并继承
class PngImage extends Image {
  constructor(width, height) {
    // 先调用父类的构建函数
    super(width, height);

    this._type = 'png';
  }

  printType() {
    console.log(this._type);
  }
}

const aPng = new PngImage(100, 200);
aPng.printType(); // => png
aPng.printSize(); // => 100 x 200
```

总结 js 的语法：语法并不复杂可细节不少，有 c 风格语言背景的同学还是很容易上手。至于 js 的一些细节，无非熟能生巧。

![](images/Pasted%20image%2020220527221228.png)

### 内置库

**标准对象**

js 的语言标准中包含一组标准对象，用于提供基本的功能，比如 Math、Array、Object、Map、Set、String、Number、Boolean、Symbol、RegExp、Promise 等。

具体可以看 MDN 上的 [文档][global_objects]。

[global_objects]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects

**宿主 API**

除上面介绍的标准对象外，js 的引擎也会为编程方便提供一些 API。这些 API 也是通过全局对象的形式进入到 js 的执行环境中。

比如在浏览器中，可以使用 Docment、fetch、console 等 API，这些都是由浏览器提供。在 node.js、deno 这类面向后台服务的执行环境，
它们都会提供不同的 API 以实现各种编程任务。

> js 的执行环境除常见的浏览器外，还有 node.js/deno 这些面向后台服务的环境，还有像 quickjs 这种面向嵌入脚本需求的执行环境。
> 这些环境对于 js 标准的支持程度、内置的 API 都有区别。具体只能查看相应的产品文档。但是 js 的语法基本上是一致的。

### 现代 js 开发流程

现在的前端应用，特别是一些重交互应用、控制台类应用都是基于 SPA 架构实现。js 在其中会控制整个页面的生成、人机交互、机机交互。因此 js 代码的复杂度也几何级别上升。node.js 出现后，js 的开发体验也变得越来越工程化。

node.js 是一种面向后台服务的 js 执行环境。node.js 有异步 io、高性能、高并发支持的特点。在开发体验，node.js 带来 npm 包管理器。通过 node.js，js 程序员可以使用 js 实现相关的工具。工具的开发难度大幅度降低。npm 的出现侧让 js 程序员更方便地分享代码，带来的结果就是 js 生态大爆炸。

现代 js 开发基本上就是这样一个流程：

1. 使用 npm 初始化一个项目
2. 安装依赖
3. 配置项目，比如 eslint、webpack 等
4. 开发应用组件
5. 构建
6. 测试
7. 部署

基本上与其他语言的开发体验一致。而且也可以通过 ci/cd 自动化集成到系统中。

编辑器/IDE 可以使用 vscode 或 webstorm。vscode 免费，功能也足够使用；webstorm 则有更好的 js 静态分析支持，git ui、代码重构功能也特别好用。

> 广告：初始化 node.js 可以使用我家的 [init-nodejs-project][init_nodejs_project]，已经内置了 eslint、prettier 工具的配置。

[init_nodejs_project]: https://github.com/yuekcc/init-nodejs-project

## VUE

vuejs 是目前流行的前端三大框架之一（另两个是 angular、react）。据我所知，vue 在小厂中非常流行，原因是上手真的简单，而且原创也是华人，也有足够多的中文资料。

无论 vue、angular，还是 react 都是基于 mvvm 或类似概念开发的框架。追求的是通过组件化的带来更好的开发体验。

所谓组件化是将一个大的功能模块细分为多个小组件。采用类似于积木的方式组合出更大更复杂的应用。

我认为组件也可以分为多种类型：

- 基础组件。比如按钮、菜单等一般由组件库提供，而且比较通用。甚至跨端使用。这些基础组件一般是直接使用开源产品。比如 vue 生态中的 element ui、react 生态中有 ant design。
- 通用业务组件。比如各个系统菜单。这种组件的特点是基于基础组进行了一定程序的包装。在项目中有一定的通用性。
- 具体业务组件。这些组件都是按照业务流程定制开发的组件，几乎没有通用性。如果业务流程发生了变更，这些组件通常都需要大面积的重写。

如果一个项目由多个开发小组共同进行开发。那么基础组件可能是由专门的人员进行维护；通用业务组件可能由特定域的人员进行开发；具体的业务组件则可能是某个人员进行维护。

### Options API

vue 提供了一种 Options API 用于声明一个组件。组件使用 js 对象语法描述：

```js
const AComponent = {
  data() {
    return {
      name: 'Tom',
    };
  },
  methods: {
    getName() {
      return this.name;
    },
  },
  template: `<div>{{getName()}}</div>`,
};
```

vue 组件使用模板来声明组件的 html，模板会通过内置的编译器编译为 render 函数执行。模板的好处是比较直观，也更接近传统的网页开发方式。这点也是 vue 比较容易上手的特性。

如果将一个网页分为三个部分——样式、模板、脚本。然后组合在一个文件中，这样的就可以得一 Single File Component（SFC）的组件开发方式。

SFC 也是现在主流的 vue 组件开发方式。使用 SFC 需要编译工具支持。vue 官方现在推荐使用 vite。

### vite

vue 生态中为工程化提供了两套解决方案：vue-cli、vite。vue-cli 目前已经进入维护期，主要面对 vue2 构建；vite 则是一款更现代的工程化工具，主要面向 vue3。

> vue2、vue3 大部分场景下是兼容的。但不代表代码可以直接复用！开始项目的话，推荐 vue3。

工程化可以带来不少好处，比如：

- 更好地组织代码
- 通过编译工具的使用，可以使用更新、更方便的语法特性
- 对接前端的生态环境

vite 的文档可以在 [https://vitejs.dev/](https://vitejs.dev/) 找到。

### live coding

TBD

---

- 2022 年 05 月 27 日，初稿
- 2022 年 06 月 05 日，修订
