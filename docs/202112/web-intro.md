# 小前端快速入门

送给所有对前端有兴趣，有需求的朋友们。

[TOC]

## 一点历史

TLDR.

### js 是什么？

JavaScript 是一门用了 10 天就完成设计，再用了 20 年还在继续填坑，支持 OO、支持函数式、动态类型的编程语言。JavaScript 常常被写作 js（下文也会写作 js）。虽然名字中带 **Java**，但是与 Java 真是没有多少关系，属于雷锋和雷锋塔的关系。

运行 js 代码，需要运行环境。现代（2020 年）最常见的 js 运行环境是浏览器，其次是 nodejs、deno，和一票嵌入式的 js 引擎。一般情况下，js 引擎都为执行 js 代码实现一些标准的 API，这些 API 一般以标准对象的形式提供。这些标准对象的定义由 tc39 组织负责维护，实现则由各个 js 引擎自行处理。

v8 是目前地球上性能最强的 js 引擎。在[特化设计][talk-about-justjs]的情况下，v8 的性能甚至越过 c++。v8 也是 chrome、chromium、nodejs、deno 的 js 引擎，也是目前使用最为广泛的 js 引擎。

[talk-about-justjs]: https://www.zhihu.com/question/445956285

> chromium 浏览器是 chrome 的开源版本，国内厂商做的一些浏览器（360、QQ 浏览器）大多基于 chromium 开发，兼容性、性能基本上和 chrome 一致。微软自家的 Edge 浏览器也是基于 chromium 开发。

### js 与 java 概念类比

*非严格对比，有不同意见的话，请坚持自己的意见*。

| 概念     | js                                             | java                     |
| ------ | ---------------------------------------------- | ------------------------ |
| 语言版本   | es2015、es2016、... es2021                       | java8、java11、...、java17  |
| 执行引擎   | v8、JavaScriptCode、SpiderMonkey ……              | HotSpot、Openj9、graalvm…… |
| 标准库    | `String`、`Number`、`Boolean`、`Array`、`Object`…… | `java.*`，`javax.*`……     |
| 网络 IO  | `fetch`、`XMLHttpRequest`                       | `java.nio`、`java.net`    |
| 开发工具包  | nodejs（1）                                      | jdk                      |
| 依赖管理   | npm                                            | maven                    |
| 项目配置   | package.json                                   | pom.xml                  |
| 构建工具   | webpack、esbuild……                              | maven                    |
| 编译器（1） | babel、swc、esbuild                              | javac                    |

注 1：在 js 中指转译，将不同的语言版本写的代码，转译为某个语言版本，提高兼容性。

nodejs 是一个后端的 js 运行环境，提供了后台服务开发的文件 io、网络 io 等功能，nodejs 自带的一个 npm 包管理工具。npm 即 node package manager，也是一个模块托管服务，地址 https://www.npmjs.com。

自 nodejs、npm 这两个工具的出前端开发也正式进入工程化。所以  nodejs 目前已经成为了前端开发中重要的工具。不使用工程化的工具也可以开发前端项目，正如不使用 maven，也可以编译执行 java 代码，只是更麻烦。

## js 入门

js 是一门图灵完备的编程语言。 js 的概念可以与 c、java 中的一些概念类等。

语言设计上 js 是一门大杂烩，源自 c 语言的基本语言元素，又带有 everything is object 的基于原形链的对象系统，又是独有的单线程设计。在工程化推广之前，js 甚至不被人认为是一门编程语言。

```js
let a = 1;
const b = c;
a = a + b;

function add(num1, num2) {
  return num1 + num2;
}

const add10 = num => add(num, 10);


const add100 = (num) => {
  return add(num, 100)
};

let d = add10(10);
let e = add(10, 10);
console.log(d, e);

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const tom = new Person('Tom', 18);
console.log(`${tom.name} is ${tom.age} year(s) old.`);

class Student extends Person {
  constructor(name, age, classNumber) {
    super(name, age);

    this.classNumber = classNumber;
  }
}

const p2 = new Student('Cherry', 18, 2);
console.log(`${p2.name} is ${p2.age} year(s) old. ${p2.name} is reading in class ${p2.classNumber}`);
```

### 原始类型

js 的原始类型有：

1. number，表示整数和浮点数据
2. string，表示字符串
3. boolean，表示布尔值，值只能是 true、false
4. null，表示“无”、值未知、空概念，值只能是 null
5. undefined，表示未被赋值（）
6. symbol，标识符，对于整个运行过程标识符是唯一的
7. bigint，大数字

原始类型最大的特点是赋值是复制过程：

```js
let a = 1;
console.log(a); // => 1
let b = a; // b 复制了 a 的值。对 b 的操作，不会影响到 a
console.log(b); // => 1
b = b + 1;
console.log(a); // => 1
console.log(b); // => 2


// const 关键字声明的变量，不能再次赋值
// 实践中更推荐使用 const 声明变量，可以减少一些 bug
const aBooleanVar = false; 

// symbol 类型，只能通过 Symbol 构造器创建
let aSymbol = Symbol("something") 
```

虽然 js 是动态类型的编程语言，实践中还是推荐一个变量尽可能保持一种类型。像 v8 这种带有 jit 的执行引擎特别喜欢固定的类型，因为比较容易优化。

### 复杂类型

js 中只有 Object 是复杂类型。Object 类型 HashMap，其中 key 可以是任意字符串或 symbol，value 可以是任意 js 类型。

Array 对象在本质上是一种特化的 Object 对象。js 引擎会对 Array 对象进行优化，性能表现表上更接近一般数组。

### 函数

js 中函数属于第一类公民。js 支持闭包，匿名函数、箭头函数。

```js
// 一般函数
function hi() {
    console.log('hi');
}

// 匿名函数，并赋值
const fn = function() {
    return 100;
}

fn(); // 调用函数

// 箭头函数
// 箭头函数也是一种匿名函数，与 function 声明不同的是箭头函数会自动捕捉声明时的 this 的值
// js 中的 this 可以理解为一个特殊引用，与 Java 类中的 this 有非常大的差别！
// this 也是 js 中的一个著名的坑
const fn2 = () => {
    return 100;
};

const a = 100;
const fn3 = () => a; // 箭头函数的函数体是一个表达式时，可以省略花括号
```

### 其他

js 与很多 c 家族语言有非常多的相似性，比如数学操作、逻辑比较、循环、if 等，这些都与 c、java 有比较接近的体验。具体可以看看这些文档：

- [现代 JavaScript 教程](https://zh.javascript.info/)

- MDN [Web 入门](https://developer.mozilla.org/zh-CN/docs/Learn/Getting_started_with_the_web)

## Vue 上手

Vue 是一个用于构建 UI 的 js 框架，主要用于浏览器侧的界面开发实现。Vue 为开发者提供了一个响应式为核心的模型，可以极大地提供开发效率。

### vue2、vue3 如何选择

vue 的最新版本是 3.x。vue 成为主流的前端框架时正是 2.x，所以有不少现存项目还是使用 2.x。对于 vue2、vue3 的选择上，我推荐新项目还是使用 vue3 吧。vue3 在性能上更胜 vue2，而且新加入的 compostion api 可以更好地组织代码，提升复用性。最重要的一点是，vue3 依然支持 vue2 使用的 option api。

下面只介绍 option api。

### Option API

所谓 option api，是指传入函数的有且仅有一个大对象（Ojbect 类型）。例如下面的代码：j

```js
const opt = {
    name: 'tom',
    age: 18
}


function show(param) {
    console.log(param)
}


show(opt) // 函数 show 这种接口就可以称为 option api
```

在 vue 中，声明一个组件，实际上是编写一个 option 对象。vue 会在初始化组件时，按照 option 对象中的配置创建实例。因此实践中所谓的 vue 组件，在代码层面是表达为一个 Object 对象。

Vue 的 api 可以在这里找到：[API — Vue.js](https://cn.vuejs.org/v2/api/) 

### 工程化

vue 官方出品了配套的工程化工具 vue-cli。vue3 也可以使用 vite。

---
