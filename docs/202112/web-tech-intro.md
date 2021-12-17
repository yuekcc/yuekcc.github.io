# 小前端快速入门

送给所有对前端有兴趣，有需求的朋友们。

## 前言

TBA

## 一点历史

### js 是什么？

首先是一个最基本概念——JavaScript 是什么？

JavaScript 是一门用了 10 天就完成设计，再用了 20 年还在继续填坑，具有多种范式、动态类型的开发语言。JavaScript 常常被
写作 js（下文也会写作 js）。虽然名字中带 'Java'，但是与 Java 真是没有多少关系，大概就是雷锋和雷锋塔的关系。

js 是一种开发语言。运行 js 代码，需要运行环境。在现代（2020 年）最常见的 js 运行环境是浏览器，其次是 nodejs、deno，和一
票 js 引擎。与 Java 不同，不同的 js 去年环境提供的功能是不一致的，但是都会提供运行 js 的标准对象。这些标准对象的定义由 tc39 这个
组织负责维护，实现则由各个 js 引擎自行处理。

v8 是目前地球上性能最强的 js 引擎。在[特化设计][talk-about-justjs]的情况下，v8 的性能甚至越过 c++。v8 也是 chrome、chromium、nodejs、deno 的 js 引擎。

[talk-about-justjs]: https://www.zhihu.com/question/445956285

chromium 浏览器是 chrome 的开源版本，国内厂商做的一些浏览器（360、QQ 浏览器）大多基于 chromium 开发，兼容性、性能基本上和 chrome 一致。微软自家的 Edge 浏览器也是基于 chromium 开发。


## js 与 java 概念对比

| 概念  |  js  | java |
|------|------|------|
| 语言版本 | es2015、es2016、... es2021 | java8、java11、...、java17 |
| 执行引擎 | v8、JavaScriptCode、SpiderMonkey …… | HotSpot、Openj9、graalvm…… |
| 标准库 | `String`、`Number`、`Boolean`、`Array`、`Object`…… | `java.*`，`javax.*`……  |
| 网络 IO | `fetch`、`XMLHttpRequest` | `java.nio`、`java.net` |
| 开发工具 | nodejs | jdk |
| 依赖管理 | npm | maven |
| 项目配置 | package.json | pom.xml |
| 构建工具 | webpack、esbuild…… | maven |
| 编译器（1） | babel、swc、esbuild | javac |

注 1：js 中指转译，将不同的语言版本写的代码，转译为某个语言版本，提高兼容性。

nodejs 是一个后端的 js 运行环境，提供了后台服务开发的文件 io、网络 io 等功能，nodejs 自带的一个 npm 包管理工具。
npm 即 node package manager，也是一个模块托管服务，地址 https://www.npmjs.com。自 nodejs、npm 这两个工具的
出前端开发也正式进入工程化。

## js 入门

js 也是一门图灵完备的编程语言。也就是说 js 的概念可以与 c、java 中的一些概念类等。

js 在语言设计上是一门大杂烩，源自 c 语言的基本语言元素，又带有 everything is object 的基于原形链的对象系统，又是独有的单线程设计。所以写能的 js 代码是很简单的，连基础多线程难题都没有。

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
5. null，表示“无”、值未知、空概念，值只能是 null
6. undefined，表示未被赋值（）
7. symbol，标识符，对于整个运行过程标识符是唯一的
8. bigint，大数字

原始类型最大的特点是赋值是复制过程：

```js
let a = 1;
console.log(a); // => 1
let b = a; // b 复制了 a 的值。对 b 的操作，不会影响到 a
console.log(b); // => 1
b = b + 1;
console.log(a); // => 1
console.log(b); // => 2

const aBooleanVar = false; // const 关键字声明的变量，不能再次赋值
let aSymbol = Symbol("something") // symbol 类型，只能通过 Symbol 构造器创建
```

### 复杂类型

js 中只有 Object 是复杂类型。Object 类型 HashMap，其中 key 可以是任意字符串或 symbol，value 可以是任意 js 类型。

Array 对象在本质上是一种特化的 Object 对象。js 引擎会对 Array 对象进行优化，性能表现表上更接近一般数组。

TBD

---
