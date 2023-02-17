# commit message 规范化

在项目中经常可以见到无意义 commit message，可见书写有效 commit message 也是技术活。网上可以找到一些
文章，特别前端的多采用 [angular 规范][1]。

每次提交， commit message 包含三个部分：header、body、footer。其中 body 和 footer 是可选部分。

具体就像这样：

```
<type*>(<scope>): <subject*>

<body>

<footer>
```

> 带 `*` 的都是必须的

## header

header 由 type、scope、subject 三部分组成。

type 指明了这次 commit 的类型，一般可以有：

- `feat` 新功能
- `fix` 改 bug
- `docs` 文档（更新、新增、增加注释）
- `style` 格式化代码（不涉及代码逻辑修改）
- `refactor` 重构、性能优化（涉及代码逻辑修改）
- `test` 测试（新增、更新、删除）
- `chore` 构建过程、工具、脚本更新
- `revert` 回退代码

scope 表明这次修改的模块，可选。实践中，我是经常不写。

subject 是一段简短的说明，长度不经过 70 个字。更多的说明应该写在 body 中。subject 是必须的

## body

body 用来编写大段文字，说明这次修改的动机、原因等等。

## footer

footer 用来指示这次修改涉及的一些 issue 单或需求单号。

比如，修复了一个 issue 可以写 `fixes #12345`，实现了一个需求可以写：`close #33344`

[1]: https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y/edit#heading=h.greljkmo14y0

----
2021 年 9 月 8 日