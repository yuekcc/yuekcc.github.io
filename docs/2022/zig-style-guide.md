# Zig/JavaScript 代码风格指南

> 部分内容源自 Zig 语言文档中的 [Style Guide][zig_style_guide]。

[zig_style_guide]: https://ziglang.org/documentation/0.9.0/#Style-Guide

每个编程语言都会有自己的风格。有的编程语言比较严格，比如 go。go 在上市的时候也带上 go fmt 命令，用于格式化代码。当时也有不少人反对官方管按语言风格。不过后来上市的编程语言都带上了自己的 fmt 工具，用于格式化代码。可以形成统一的风格对于新上手的朋友来说，当然比较好。只是对于老手，就少了展示技术的机会。

Zig 在语言文档也写了一段风格指南。第一眼看 Zig 其实有一种很 js 的感觉，带有很多 js 语言的味道。最明显的是 `const` 声明不可变变量，`var` 明显变量。还有不知道是敌是友的 `undefined`。导入外部代码的 `const xxx = @import('yyyy.zig')` 也是一股 js 味道。

下面是正文。

## Style Guide

### 空白

- 使用 4 个空格的缩进。
- `{` 在代码的同一行，除非要执行排版。
- 小于两个元素的列表/数组，放置到同一行，并且带上一个拖尾 `,`。
- 每行宽度的目标是 100 列，但是还得看场景。

### 命名

大致三种：`camelCaseFunctionName`，`TitleCaseTypeName`，`snake_case_variable_name`。详情规则如下：

- 如果 `x` 是一个 `type`（类型）应该写作 `TitleCase`。除非是一个零字段的 `struct` 而且不会被实例化，这种情况下这个 `struct` 应该是一个 `namespace`，应该写作 `snake_case`。
- 如果 `x` 可以调用，但是 `x` 返回的类型是 `type`，那么 `x` 应该是 `TitleCase`。
- 如果 `x` 可以调用，并且不是上面的情况，则写作 `camelCase`。
- 其他场景 `x` 应该写作 `snake_case`。

名词的缩写也应该按上面的规则，即使只有两个字母。

文件名则分为两类：type、namespace。如果一个源码文件的顶层对象是一个 `struct`，并且是一个 type，用 `TitleCase` 风格，否则用 `snake_case` 风格。目录统一按 `snake_case`。

上面的就是推荐的规则。具体还得看场景。

### 文件编码

- 使用 utf-8
- 换行用 `LF`
- 代码的不使用 Ascii control characters，除非是 LF、CR、HT、U+0009 (HT): U+0000 - U+0008, U+000b - U+000c, U+000e - U+0001f, U+007f.
- 不能用非 ASCII Unicode 的字符结尾。

## JavaScript 的风格又是如何？

最近接手了一个 20K 行级别的应用项目，代码都是「随意流」——大小写混合、camelCase/snake_case 混搭。总结就没有没有任何的风格。

Rust 也是混合使用，但社区已经有比较完善的习惯用法，除 `struct` 名使用 `TitleCase`，其他基本上是 `snake_case`。Zig 也是三者混用。在用 Zig 写了几行代码，就可以理解为什么有这种约定——主要就是一眼可以看出哪个是方法，可以调用，哪个是变量，哪个是类型。

> Zig 的创始人也有很多 JavaScript 使用的经验，第一眼看 Zig 也是一股 JavaScript 味道。比如 `const std = @import('std');`

参考 Zig 的风格指南。我也总结了几条 js 的规则：

- 文件名，顶层导出 default 的，使用 `TitleCase`；顶层导出多个对象的使用 `snake_case`
  - `export default`的应该只有 class、vue 组件
  - 有 `export default`就不应该再导出其他对象
  - 尽量不使用 default 导出
- 目录使用 `snake_case`
  - 如何需要，一个目录的入口文件应该是 `index.js`
  - 不打算被外部使用的代码模块、文件，应该写作 `_snake_case` 或 `_TitleCase`
- 类 class 使用 `TitleCase`
- 方法使用 `camelCase`
- 变量使用 `camelCase`
- 变量或全局变量使用 `SNAKE_CASE`
- 代码文件统一使用 utf-8
- 换行用系统默认（windows 是 crlf，linux/osx 是 lf）
  - git 应该设置换行为 `auto`
- vue sfc 组件，使用 `TitleCase`
  - 因为 vue sfc 组件都是 `export default`，相当于一种类型

**风格指南没有绝对正确的，关键是使用一套风格并且一直用**。

---

- 2022 年 09 月 16 日 初稿
- 2022 年 10 月 05 日 修改部分措辞
