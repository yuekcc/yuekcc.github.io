# 前端笔记

本文写的是经验总结，100% 一己之见。如果不认同，以你为准。

## js/ts 篇

### 声明变量时使用 const、let

全新 es2021 已经发布。对于 evergreen 浏览器优先使用 const，其次是 let。虽然现在经过 babel/typescript 转换后（可能）都是 var，但是在编写代码、eslint/语义层面还是相当有意义的。

const 关键字的好处是变量声明后，不能被再次赋值可以减少一些错误。

### 变量尽快初始化

初始化可以减少 null/undefined 问题。

- 数值：`0`
- 字符串：`''`
- boolean：`false`
- 数组：`[]`
- 对象（object）: `null` 或具体的初始值

### 外部接口尽量进行“空”判断

接口数据是不可靠的。因为不是所有人都是面向协议编程。**偷偷修改接口输出结构不是偶发事件**。

### 异步编程时优先使用 async/await 语法，这些代码会更清晰

async/await 可以将复杂麻烦的回调改写为简单直接的类似于同步的代码，更方便理解、修改。使用 async/await 关键字前，应该先稍微了解一下 Promise 的基础知识。

### 工具库应该优先使用 typescript

typescript 对比 javascript 主要是改进是引入了一套兼容 javascript 的类型系统。因为兼容的原因也引入了 any。类型系统的优点是让程序员更好的表达自己的意图，而不是”lucky 编程“。

javascript 是动态类型语言，只有在运行的才知道具体的变量类型。也就是说，对于 js 引擎，代码中的每一个变量都是一个黑盒子，只有在最后打开的时候才知道里面是什么东西。现在的 js 引擎（特别是 v8）是一种多次分析的执行引擎，减少变量类型的变化，可以更早地进入 jit 分析阶段。

对于工具库使用 typescript 相当于自带了文档。无论是别人或是自己，通过函数签名也更容易知道函数是做了一些什么。

### 不要利用 js 的隐式类型转换特性编写代码

写清晰好理解的代码，而不是幸运代码。日常工作不是面试不是考试，不需要 show 技巧。

```js
const sum = '1' + 100 - +new Date() + '1000A'; // 第一眼实在不知道最终结果会是什么
```

### 时常重构代码

最实用的重构是给变量、方法起一个合适的名字。所谓通过代码解释自己，而不是注释，更不是口口相传。

### 错误处理

错误处理的地方至少留一行 `console.warn`，方便追踪。某些禁止使用 `console` 对象的场景也得造一个 `log(msg)` 函数。

## vue 篇

### 积极使用 @vue/composition-api 特性

`@vue/composition-api` 包可以视为 vue2 到 vue3 的过度方案。首先明确一点，vue3 是重写的版本，但是支持 vue2 的 option api，只是更推荐使用 `@vue/composition-api`。主要是由于在 业务逻辑可以统一写在 `setup` 函数里，而且比 option api 更容易写出优雅的代码。

有一说一，业务代码是相当相当啰嗦的，写出优雅的业务代码需要花上一些时间。

### 非必须不使用 Vue.prototype 挂载对象/方法

`@vue/composition-api` 提供了 `provider`/`inject` 可以很方便使用这个功能。`setup` 中也不支持 `this` 的，是时候放弃 `Vue.prototype` 挂载“飞线”的习惯了。

### （尽量）不使用默认导出（export default）

默认导出无法利用 IDE 的智能提示直接录入，也不方便重构。编辑的代码跳转功能也可能失效。

### 自定义的组件导入时，应使用大写 CamelCase

html 原生标签全是小写字母不会使用 `-` 分割。三方库一般是 `el-button` 风格。自定义组件 `PageHeader` 风格。一目了然。

### 组件的 props、event 可以加上前缀。方便区分变量、props、原生事件

思考一个问题 `@click` 和 原生的 `onclick` 是同一个事件？与其猜或找文档，不如直接在命名上进行区分，也减少了命名冲突。

### 优先使用 template 而不是 render 函数或者 jsx

vue 的 template 中项目构建时会转换为 render 函数。可以自动处理的应该交给机器。template 可以满足 90% 的开发需求。也更为直接。

### 在 template 中，自定义组件使用 CamelCase 风格。ui 库使用其推荐风格

```html
<PageHeader>
  <el-button>hello</el-button>
</PageHeader>
```

很明显 `PageHeader` 是自定义组件。`el-button` 是 element-ui 的一个按钮组件。

### 在组件中注册其他组件，而不是全局注册

多数情况下，自定义组件是针对特定业务场景制定，复用意义不大。应该使用实例注册。被多个组件引用且无具体业务的特性的组件才是公共组件，比如 ui 库的组件。

### 在 template 中，组件的 props、event 使用 kebab-case

vue 官方也是这么推荐的。

```html
<PageHeader :x-title="'some title'" @x-back="goBack" />
```

### 控制一个组件的代码量

超过 1000 行的组件应该拆分出子组件、公共逻辑。使用 `@vue/composition-api`，则可以抽象为多个 `useXXXX` 函数。

### 业务组件更推荐使用 javascript

如上面所说，工具库、公共函数更推荐使用 typescript，但是在写业务的组件时类型安全就变得意义不大。业务组件的特点是要么稳定下来长久不变，要么天天修改。与其花时间完善业务组件的类型，不如专注于需求理解、组件设计、测试上。

## css 篇

### 使用 scss

scss 语法上更接近 css，可以少学一门语言。

### 使用局部分样式

局部样式可以减少样式覆盖问题。不使用 `scoped` 属性，也可以通过在最外层增加一个前置的样式 class 控制影响范围。

比如在一组件中：

```vue
<template>
  <div class="page-header">
    <h1>xxx</h1>
  </div>
</template>
```

在全局样式中：

```scss
.page-header {
  h1 {
    // ...
  }
}
```

### 类命名：kebab-case

例：

```scss
.page-title {
  // ...

  & h1 {
    // ...
  }
}
```

### 需要全局样式修改的情况下，集中在个样式文件中完成

比如来一个 `element-ui-custom.scss`。

### 需要样式穿透的，要注意控制影响范围

样式穿透实际上组件里的样式覆盖全局样式，推荐在组件增加一个前置样式来控制影响范围：

```scss
.my-button {
  .el-button {
    border: none;
  }
}
```

在组件中：

```vue
<template>
  <div class="my-button"><el-button>a button</el-button></div>
</template>
```

## 工程篇

### 全局使用一种或一套命名风格

**风格没有对错，只有统一和不统一之分**。代码风格应该与世界接轨，方便接盘或者三个月之后的自己接盘。

### 文件名原则上应该都使用小写字母、-（中划线）

windows 系统、macos 默认情况下不区分大小写，linux 的文件却区分大小写。全小写可以避免一些无谓的问题。前端更习惯使用 `-` 分割单词。当然如果统一使用 `_` 也是可以的，**关键是统一**。

### 文件名可以加上特别后缀，以区分具体功能。

例如：`user.service.ts`、`validate-user.guard.ts`

一些常见的后缀：

- `service`: 服务
- `guard`: 路由守卫
- `filter`: vue 的过滤器
- `directive`: vue 的自定义指令

> `filter` 可以少用了。vue3 已经不支持 `filter`。

### 一个代码文件只用于编写一组紧密相关的函数、一个组件、一个类，甚至一个函数、常量

控制代码的布局。多人协作时，减少冲突。

### 使用 prettier 格式化代码

prettier 是目前流行的代码格式化工具，属于强制风格的格式化工具。所谓“强制风格”就是用户要么全部授受，要么全部不授受。prettier 用户包括 vue 全家、react 全家，还有 n 多 npm 包。

我的 prettier 祖传配置：

```json
{
  "printWidth": 120,
  "semi": true,
  "singleQuote": true,
  "trailingComma": "all",
  "arrowParens": "avoid",
  "endOfLine": "auto"
}
```

### 使用 eslint

js 是动态类型语言。eslint 可以在编写代码时进行一些检查，减少错误。也可以矫正一些不好编程习惯。**对于提升个人技术**是非常有帮助。

eslint 有非常多插件。推荐配合 prettier 使用。

我的 eslint 祖传配置：

```json
{
  "env": {
    "browser": true,
    "commonjs": true,
    "es2020": true,
    "jest": true,
    "mocha": true,
    "node": true
  },
  "parserOptions": {
    "sourceType": "module"
  },
  "plugins": ["prettier"],
  "extends": ["eslint:recommended", "plugin:prettier/recommended"]
}
```

我一般使用自己的写的项目初始化工具，开始一个新的 npm 项目：[init-nodejs-project](https://github.com/yuekcc/inp)。

使用 eslint，记得安装一个 vscode 的 eslint 插件。webstorm 也内置 eslint 支持，翻一下选项就可以找到。

### 拼写检查

毕竟英文是外语，有拼写检查起码可以保持单词是正确拼写的。jetbrains 系列是自带功能，vscode 安装 `code spell checker` 插件。

### 只使用一套基础组件库

基础组件库因为涉及大量功能，往往同类型的基础组件库都具有类似的功能。而且经常被全局引用。引用多个基础软件库容易引入奇怪的问题。例如样式覆盖、事件覆盖等。

### 简化导入（import）路径，使用绝对路径导入

```ts
import { formatDateTime } from '@/shared/utils/format-date-time';
import { PageHeader } from '@/components/page-header';
```

工具类直接指定到具体的文件。vue 组件可以先在组件所在目录中建立一个 index.ts 文件，再引用。绝对路径的好处是不用人工计算这样的目录：`../../../../xxxx`，而且重构时也会相对方便。

上面的例子，目录实际上是这样的：

```
/src
    /components
        /page-header
            /index.ts
            /page-header.vue
```

index.ts 代码：

```ts
import Component from './page-header.vue';
export const PageHeader = Component;
```

page-header.vue 代码：

```vue
<script lang="ts">
export default {
  // ...
  setup() {
    return {};
  },
};
</script>

<template>
  <div>
    <slot />
  </div>
</template>
```

绝对路径引用，需要在构建工具中进行配置，非原生支持。

### 多 commit、多 push、写有意义的 commit message

commit、push 是多人协作开发的第一步。有些情况下做的一个需求内容很多，但也可以拆分多个阶段，每个阶段至少可以进行一次 commit/push。需求拆分也是熟悉需求的一部分工程。

代码尽快集成也是减少冲突的方法。分次 commit 也更方便使用 git 的 cherry-pick 等特性，制作补丁、回退代码也更方便。

### rebase 而不是 merge

个人分支独立发展一段时间后，可以进行一些 rebase。将自己的变动放置在主干之上，可以减少一些 merge 的记录。自己的代码也不容易被覆盖。

---

- 2021 年 11 月 7 日，迁移文章，源仓库 https://github.com/yuekcc/frontend-tips
- 2022 年 02 月 19 日，修改部分内容
