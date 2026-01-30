import{d as i,g as t}from"/dist/chunk-9xt68df4.js";function e(){return t("div",{class:"markdown-body",children:t(i,{children:[t("h1",{children:"Marknote 介绍"},void 0,!1,void 0,this),`
`,t("img",{src:"images/marknote-screenshot.jpg",style:{border:"2px solid #ccc",maxWidth:"100%"}},void 0,!1,void 0,this),`
`,t("ul",{children:[`
`,t("li",{children:t("a",{href:"https://yuekcc.github.io/marknote/",children:"在线预览"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,t("li",{children:t("a",{href:"https://github.com/yuekcc/marknote",children:"源码"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,t("p",{children:"[TOC]"},void 0,!1,void 0,this),`
`,t("h2",{children:"想法"},void 0,!1,void 0,this),`
`,t("p",{children:["Marknote 最初的想法是山寨一个 ",t("a",{href:"https://github.com/vvpvvp/book-cli",children:"boot-cli"},void 0,!1,void 0,this),"。book-cli 是一个纯前端渲染的网站工具。类似概念的著名产品还有：",t("a",{href:"https://github.com/docsifyjs/docsify",children:"docsify"},void 0,!1,void 0,this),"。当然 docsify 功能更多。相对本地执行的静态网站生成器，例如 ",t("a",{href:"https://gohugo.io/",children:"hugo"},void 0,!1,void 0,this),"，纯前端型的工具功能更加简单（简陋），而且几乎不存在 SEO 可能。不过好处就是，用户可以更专注于内容本身，也可以在线使用。比如通过 github 直接编写文章并发布新网站。"]},void 0,!0,void 0,this),`
`,t("h2",{children:"特性"},void 0,!1,void 0,this),`
`,t("ul",{children:[`
`,t("li",{children:[`页面布局改为顶部导航，下面为正文内容的布局
`,t("ul",{children:[`
`,t("li",{children:"正文部分保持左右布局，方便组织文章；左侧是导航，右则是文章"},void 0,!1,void 0,this),`
`,t("li",{children:"文章可以指定使用不同的侧栏"},void 0,!1,void 0,this),`
`,t("li",{children:"增加打印机优化的样式"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,t("li",{children:["markdown 增加了一个简单的 ",t("code",{children:"[TOC]"},void 0,!1,void 0,this)," 语法拓展"]},void 0,!0,void 0,this),`
`,t("li",{children:"主题支持大屏小屏设备"},void 0,!1,void 0,this),`
`,t("li",{children:"打印机优化"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,t("p",{children:["网站主页，实际上是仓库的 ",t("a",{href:"http://README.md",children:"README.md"},void 0,!1,void 0,this)," 文件。选择这个文档为主页的目的是与 github 这样的托管服务保持一致。在 ",t("a",{href:"http://github.io",children:"github.io"},void 0,!1,void 0,this)," 不能访问时，可以直接访问仓库，起码内容还可以正常浏览。"]},void 0,!0,void 0,this),`
`,t("blockquote",{children:[`
`,t("p",{children:[t("a",{href:"http://github.io",children:"github.io"},void 0,!1,void 0,this)," 域名在我用的网络偶然会抽风，访问不了"]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,t("p",{children:["网站除主页外，应该有一个侧栏，侧栏可以起到链接、跳转的功能。这样就可以将多个文章组织为一个整体。参考一些使用 ",t("a",{href:"https://vuepress.vuejs.org/zh/",children:"vuepress"},void 0,!1,void 0,this)," 的文章网站，我也给文章的连接增加了 ",t("code",{children:"sidebar"},void 0,!1,void 0,this)," 参数，用于指定渲染文章时使用不同的侧栏。在概念上，就可以实现文章分类。"]},void 0,!0,void 0,this),`
`,t("p",{children:"顶部导航因为内容比较简单，就直接使用 html 编写。"},void 0,!1,void 0,this),`
`,t("h2",{children:"后续功能计划"},void 0,!1,void 0,this),`
`,t("ul",{className:"contains-task-list",children:[`
`,t("li",{className:"task-list-item",children:[t("input",{className:"task-list-item-checkbox",disabled:!0,type:"checkbox"},void 0,!1,void 0,this)," ",t("s",{children:"front matter 支持"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,t("li",{className:"task-list-item",children:[t("input",{className:"task-list-item-checkbox",checked:!0,disabled:!0,type:"checkbox"},void 0,!1,void 0,this)," 完善打印样式"]},void 0,!0,void 0,this),`
`,t("li",{className:"task-list-item",children:[t("input",{className:"task-list-item-checkbox",disabled:!0,type:"checkbox"},void 0,!1,void 0,this)," ",t("s",{children:"完善用户交互效果"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,t("li",{className:"task-list-item",children:[t("input",{className:"task-list-item-checkbox",disabled:!0,type:"checkbox"},void 0,!1,void 0,this)," ",t("s",{children:"缓存"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,t("li",{className:"task-list-item",children:[t("input",{className:"task-list-item-checkbox",checked:!0,disabled:!0,type:"checkbox"},void 0,!1,void 0,this)," pwa 支持（仅支持安装为应用）"]},void 0,!0,void 0,this),`
`,t("li",{className:"task-list-item",children:[t("input",{className:"task-list-item-checkbox",checked:!0,disabled:!0,type:"checkbox"},void 0,!1,void 0,this)," 文档"]},void 0,!0,void 0,this),`
`,t("li",{className:"task-list-item",children:[t("input",{className:"task-list-item-checkbox",checked:!0,disabled:!0,type:"checkbox"},void 0,!1,void 0,this)," 实现一个更好 ",t("code",{children:"[TOC]"},void 0,!1,void 0,this)," 拓展"]},void 0,!0,void 0,this),`
`,t("li",{className:"task-list-item",children:[t("input",{className:"task-list-item-checkbox",checked:!0,disabled:!0,type:"checkbox"},void 0,!1,void 0,this),` 增加一套主题
`,t("ul",{children:[`
`,t("li",{children:t("s",{children:"[ ] 支持 light/dark 切换"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,t("li",{className:"task-list-item",children:[t("input",{className:"task-list-item-checkbox",checked:!0,disabled:!0,type:"checkbox"},void 0,!1,void 0,this)," 语法高亮"]},void 0,!0,void 0,this),`
`,t("li",{className:"task-list-item",children:[t("input",{className:"task-list-item-checkbox",checked:!0,disabled:!0,type:"checkbox"},void 0,!1,void 0,this)," 使用 sycamore 重写（新仓库：",t("a",{href:"https://github.com/yuekcc/docutil",children:"https://github.com/yuekcc/docutil"},void 0,!1,void 0,this),`）
`,t("ul",{className:"contains-task-list",children:[`
`,t("li",{className:"task-list-item",children:[t("input",{className:"task-list-item-checkbox",checked:!0,disabled:!0,type:"checkbox"},void 0,!1,void 0,this)," 改名 marknote => docutil"]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,t("h2",{children:"用户"},void 0,!1,void 0,this),`
`,t("ul",{children:[`
`,t("li",{children:t("a",{href:"https://yuekcc.github.io/",children:"https://yuekcc.github.io/"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,t("li",{children:t("a",{href:"https://turn-left.github.io/",children:"https://turn-left.github.io/"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,t("li",{children:t("a",{href:"https://yuekcc.github.io/marknote/",children:"https://yuekcc.github.io/marknote/"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,t("li",{children:t("a",{href:"https://lambdadriver.space/",children:"https://lambdadriver.space/"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,t("hr",{},void 0,!1,void 0,this),`
`,t("ul",{children:[`
`,t("li",{children:"2021.11.6：初稿"},void 0,!1,void 0,this),`
`,t("li",{children:"2021.11.7: 完成部分计划"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)}export{e as default};
