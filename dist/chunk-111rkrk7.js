import{e as o,h as e}from"/dist/chunk-scq2q67j.js";function n(){return e("div",{class:"markdown-body",children:e(o,{children:[e("h1",{children:"commit message 规范化"},void 0,!1,void 0,this),`
`,e("p",{children:[`在项目中经常可以见到无意义 commit message，可见书写有效 commit message 也是技术活。网上可以找到一些
文章，特别前端的多采用 `,e("a",{href:"https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y/edit#heading=h.greljkmo14y0",children:"angular 规范"},void 0,!1,void 0,this),"。"]},void 0,!0,void 0,this),`
`,e("p",{children:"每次提交，commit message 包含三个部分：header、body、footer。其中 body 和 footer 是可选部分。"},void 0,!1,void 0,this),`
`,e("p",{children:"具体就像这样："},void 0,!1,void 0,this),`
`,e("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:e("code",{className:"language-log",children:[e("span",{className:"line",children:e("span",{style:{color:"#E1E4E8"},children:"<type*>(<scope>): <subject*>"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,e("span",{className:"line"},void 0,!1,void 0,this),`
`,e("span",{className:"line",children:e("span",{style:{color:"#E1E4E8"},children:"<body>"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,e("span",{className:"line"},void 0,!1,void 0,this),`
`,e("span",{className:"line",children:e("span",{style:{color:"#E1E4E8"},children:"<footer>"},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,e("blockquote",{children:[`
`,e("p",{children:["带 ",e("code",{children:"*"},void 0,!1,void 0,this)," 的都是必须的"]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,e("h2",{children:"header"},void 0,!1,void 0,this),`
`,e("p",{children:"header 由 type、scope、subject 三部分组成。"},void 0,!1,void 0,this),`
`,e("p",{children:"type 指明了这次 commit 的类型，一般可以有："},void 0,!1,void 0,this),`
`,e("ul",{children:[`
`,e("li",{children:[e("code",{children:"feat"},void 0,!1,void 0,this)," 新功能"]},void 0,!0,void 0,this),`
`,e("li",{children:[e("code",{children:"fix"},void 0,!1,void 0,this)," 改 bug"]},void 0,!0,void 0,this),`
`,e("li",{children:[e("code",{children:"docs"},void 0,!1,void 0,this)," 文档（更新、新增、增加注释）"]},void 0,!0,void 0,this),`
`,e("li",{children:[e("code",{children:"style"},void 0,!1,void 0,this)," 格式化代码（不涉及代码逻辑修改）"]},void 0,!0,void 0,this),`
`,e("li",{children:[e("code",{children:"refactor"},void 0,!1,void 0,this)," 重构、性能优化（涉及代码逻辑修改）"]},void 0,!0,void 0,this),`
`,e("li",{children:[e("code",{children:"test"},void 0,!1,void 0,this)," 测试（新增、更新、删除）"]},void 0,!0,void 0,this),`
`,e("li",{children:[e("code",{children:"chore"},void 0,!1,void 0,this)," 构建过程、工具、脚本更新"]},void 0,!0,void 0,this),`
`,e("li",{children:[e("code",{children:"revert"},void 0,!1,void 0,this)," 回退代码"]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,e("p",{children:"scope 表明这次修改的模块，可选。实践中，我是经常不写。"},void 0,!1,void 0,this),`
`,e("p",{children:"subject 是一段简短的说明，长度不经过 70 个字。更多的说明应该写在 body 中。subject 是必须的"},void 0,!1,void 0,this),`
`,e("h2",{children:"body"},void 0,!1,void 0,this),`
`,e("p",{children:"body 用来编写大段文字，说明这次修改的动机、原因等等。"},void 0,!1,void 0,this),`
`,e("h2",{children:"footer"},void 0,!1,void 0,this),`
`,e("p",{children:"footer 用来指示这次修改涉及的一些 issue 单或需求单号。"},void 0,!1,void 0,this),`
`,e("p",{children:["比如，修复了一个 issue 可以写 ",e("code",{children:"fixes #12345"},void 0,!1,void 0,this),"，实现了一个需求可以写：",e("code",{children:"close #33344"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,e("hr",{},void 0,!1,void 0,this),`
`,e("p",{children:"2021 年 9 月 8 日"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)}export{n as default};
