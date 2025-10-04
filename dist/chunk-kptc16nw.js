import{e as a,h as n}from"/dist/chunk-n2t7x54v.js";function l(){return n("div",{class:"markdown-body",children:n(a,{children:[n("h1",{children:"Web 前端开发入门"},void 0,!1,void 0,this),`
`,n("p",{children:"被问过一个问题——如何快速学习前端开发。"},void 0,!1,void 0,this),`
`,n("p",{children:`第一次遇到这个问题，我试着回忆了一下自己是如何学习 web 开发的。似乎没有特别快速的学习方法。不过，web 应用
开发是一种有快速反馈的学习过程，比较容易有成就感而且是一个慢慢深入的过程。`},void 0,!1,void 0,this),`
`,n("p",{children:"前端技术栈中有三种技术最为基础：html、css、js。这三种技术也分别对应一个应用的三层：布局、样式、交互。"},void 0,!1,void 0,this),`
`,n("h2",{children:"html、css"},void 0,!1,void 0,this),`
`,n("p",{children:`html 使用了 xml 的语法来表示一个网页。web 1.0 时代，html 仅提供了基本的富文本展示功能。html 通过嵌套标签
表示一个网页的布局。css 负责控制各个标签的展示效果，也就是样式。`},void 0,!1,void 0,this),`
`,n("p",{children:`html 现在已经发展到 html5，而 css 也到 css3.0。html、css 的标准由 w3c 制定，实现则是浏览器实现的，
各种浏览器对于这些标准支持程序甚至进度也是不一致的。因此不同的浏览器之间会存在兼容性问题。浏览器发展的现在已经形成
了三个集团：基于 blink 内核的 chromiun 家族，水果厂的 safari、web 自由爱好者 mozilla 的 firefox。这些浏览器的
最新版本也称为 every green 浏览器。`},void 0,!1,void 0,this),`
`,n("h3",{children:"html"},void 0,!1,void 0,this),`
`,n("p",{children:"对于 html 基本上就是 xml。比如下面的一段 html："},void 0,!1,void 0,this),`
`,n("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:n("code",{className:"language-html",children:[n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"<"},void 0,!1,void 0,this),n("span",{style:{color:"#85E89D"},children:"div"},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:" class"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"="},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:'"container"'},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:" style"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"="},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:'"padding: 10px; margin: 10px"'},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:">"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"  <"},void 0,!1,void 0,this),n("span",{style:{color:"#85E89D"},children:"div"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:">"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#6A737D"},children:"    <!-- 我是注释  -->"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"  </"},void 0,!1,void 0,this),n("span",{style:{color:"#85E89D"},children:"div"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:">"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"</"},void 0,!1,void 0,this),n("span",{style:{color:"#85E89D"},children:"div"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:">"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:"html 标准中包含许多标签。这些标签有部分被称为语义化标签。不过在日常开发中，只需要记住下面几个标签，基本上可以一招走天下："},void 0,!1,void 0,this),`
`,n("ul",{children:[`
`,n("li",{children:[n("code",{children:"div"},void 0,!1,void 0,this)," 容器"]},void 0,!0,void 0,this),`
`,n("li",{children:[n("code",{children:"span"},void 0,!1,void 0,this)," 行内文本"]},void 0,!0,void 0,this),`
`,n("li",{children:[`表单
`,n("ul",{children:[`
`,n("li",{children:[n("code",{children:"input"},void 0,!1,void 0,this)," 文本框"]},void 0,!0,void 0,this),`
`,n("li",{children:[n("code",{children:"textarea"},void 0,!1,void 0,this)," 多行文本框"]},void 0,!0,void 0,this),`
`,n("li",{children:[n("code",{children:"select"},void 0,!1,void 0,this)," 下拉选择"]},void 0,!0,void 0,this),`
`,n("li",{children:[n("code",{children:"button"},void 0,!1,void 0,this)," 按钮"]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("blockquote",{children:[`
`,n("p",{children:"现在的 spa 应用很少会直接使用上面的表单标签，基本上会先将原始的标签进行包装以实现更好的交互效果。"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("h3",{children:"css"},void 0,!1,void 0,this),`
`,n("p",{children:`css 可以实现很多效果。但是对于前端开发而言掌握一部分基础的样式就算上手了。css 语法带有强烈的 c 风格，
属性使用 key-value 表示。比如：`},void 0,!1,void 0,this),`
`,n("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:n("code",{className:"language-css",children:[n("span",{className:"line",children:n("span",{style:{color:"#6A737D"},children:"/* 注释只支持这种语法 */"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#6A737D"},children:"/* 这里的 div 称为选择器。选择器有多个种类，最常见有标签选择器和类选择器 */"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#85E89D"},children:"div"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" {"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#79B8FF"},children:"  display"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:": "},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"block"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:";"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"}"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#B392F0"},children:".container"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" {"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#79B8FF"},children:"  padding"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:": "},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"0"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"; "},void 0,!1,void 0,this),n("span",{style:{color:"#6A737D"},children:"/* 设置属性 */"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#79B8FF"},children:"  margin"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:": "},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"0"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:";"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"}"},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:"常用的属性："},void 0,!1,void 0,this),`
`,n("ul",{children:[`
`,n("li",{children:[n("code",{children:"padding"},void 0,!1,void 0,this)," 内边距"]},void 0,!0,void 0,this),`
`,n("li",{children:[n("code",{children:"margin"},void 0,!1,void 0,this)," 外边距"]},void 0,!0,void 0,this),`
`,n("li",{children:[n("code",{children:"display"},void 0,!1,void 0,this),` 显示类型
`,n("ul",{children:[`
`,n("li",{children:n("code",{children:"flex"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("li",{children:n("code",{children:"inline-flex"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("li",{children:n("code",{children:"block"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("li",{children:n("code",{children:"inline-block"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("li",{children:[n("code",{children:"border"},void 0,!1,void 0,this)," 边框"]},void 0,!0,void 0,this),`
`,n("li",{children:[n("code",{children:"position"},void 0,!1,void 0,this)," 位置"]},void 0,!0,void 0,this),`
`,n("li",{children:[n("code",{children:"backgroud"},void 0,!1,void 0,this)," 背景"]},void 0,!0,void 0,this),`
`,n("li",{children:[n("code",{children:"color"},void 0,!1,void 0,this)," 文本颜色"]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("p",{children:"css 中一个非常重要的概念就是：盒子模型。"},void 0,!1,void 0,this),`
`,n("p",{children:n("img",{src:"/images/Pasted%20image%2020220527211902.png",alt:"盒子模型"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:[`盒子模型会影响一个标签的展示。上图中表示的一个 div 标签。盒子模型还有不少细节，具体的细节可以问问 google。
现在流行的盒子模型是 `,n("code",{children:"borderbox"},void 0,!1,void 0,this),"。"]},void 0,!0,void 0,this),`
`,n("h2",{children:"JS"},void 0,!1,void 0,this),`
`,n("p",{children:"js，更正式地应该叫 JavaScript、ECMAScript。js 在 web 技术栈中主要是负责交互部分，包括人机交互、机机交互。"},void 0,!1,void 0,this),`
`,n("p",{children:"js 由 tc39 进行标准化、版本迭代，目前的迭代节奏是一年一个版本。最新版本是 ES2022。关于 js 的历史可以找找其他资料看看，又是充满传奇的故事。"},void 0,!1,void 0,this),`
`,n("h3",{children:"语法"},void 0,!1,void 0,this),`
`,n("p",{children:"js 也属于 c 语法的一支。大概是就是 c 语法 + scheme 功能 + oo 的组合。"},void 0,!1,void 0,this),`
`,n("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:n("code",{className:"language-js",children:[n("span",{className:"line",children:n("span",{style:{color:"#6A737D"},children:"// 数组字面量"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"const"},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:" arr"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" ="},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" ["},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"1"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:", "},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"2"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:", "},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"3"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"];"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"const"},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:" emptyArr"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" ="},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" [];"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#6A737D"},children:"// 字符串"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"let"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" aStr "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"="},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:" 'hello, '"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:";"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#6A737D"},children:"// 使用 let 关键字声明的变量，可以重新赋值"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"aStr "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"="},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" aStr "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"+"},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:" 'world'"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"; "},void 0,!1,void 0,this),n("span",{style:{color:"#6A737D"},children:'// => "hello, world"'},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#6A737D"},children:"// 对象字面量"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"const"},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:" people"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" ="},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" {"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"  name: "},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:"'Tom'"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:","},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"};"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#6A737D"},children:"// 动态添加属性"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"people.age "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"="},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:" 18"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:";"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#6A737D"},children:"// console.log 用于在控制台打印消息"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"console."},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:"log"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"(people); "},void 0,!1,void 0,this),n("span",{style:{color:"#6A737D"},children:'// => {name: "Tom", age: 18}'},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#6A737D"},children:"// 声明一个函数"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"function"},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:" add"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"("},void 0,!1,void 0,this),n("span",{style:{color:"#FFAB70"},children:"a"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:", "},void 0,!1,void 0,this),n("span",{style:{color:"#FFAB70"},children:"b"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:") {"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"  return"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" a "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"+"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" b;"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"}"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#6A737D"},children:"// 声明一个函数，这个函数也返回了一个函数"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#6A737D"},children:"// 一般称为高阶函数"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#6A737D"},children:"// 返回也的这个函数也可以称为闭包"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"function"},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:" makeAddX"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"("},void 0,!1,void 0,this),n("span",{style:{color:"#FFAB70"},children:"base"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:") {"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"  return"},void 0,!1,void 0,this),n("span",{style:{color:"#FFAB70"},children:" a"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" =>"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" {"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#6A737D"},children:"    // 这里返回的是一个新的函数，这种语法表示的函数，又称为箭头函数"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"    return"},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:" add"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"(a, base);"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"  };"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"}"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#6A737D"},children:"// 获取一个 +100 的函数"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"const"},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:" add100"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" ="},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:" makeAddX"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"("},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"100"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:");"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"const"},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:" result"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" ="},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:" add100"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"("},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"1"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"); "},void 0,!1,void 0,this),n("span",{style:{color:"#6A737D"},children:"// => 101"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#6A737D"},children:"// 声明一个布尔类型的字面量"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"const"},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:" canPrintResult"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" ="},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:" true"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:";"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#6A737D"},children:"// if 语句"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"if"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" (canPrintResult) {"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#6A737D"},children:"  // for 语句"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"  for"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" ("},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"let"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" i "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"="},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:" 0"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"; i "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"<"},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:" 10"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"; i"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"++"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:") {"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"    console."},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:"log"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"(result);"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"    if"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" (i "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"==="},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:" 5"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:") {"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"      break"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"; "},void 0,!1,void 0,this),n("span",{style:{color:"#6A737D"},children:"// 从 for 循环中 break 出来"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"    }"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"  }"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"}"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#6A737D"},children:"// 声明一个类"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"class"},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:" Image"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" {"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#6A737D"},children:"  // js 类中的构建函数都叫 constructor"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"  constructor"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"("},void 0,!1,void 0,this),n("span",{style:{color:"#FFAB70"},children:"width"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:", "},void 0,!1,void 0,this),n("span",{style:{color:"#FFAB70"},children:"height"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:") {"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#79B8FF"},children:"    this"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"._width "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"="},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" width;"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#79B8FF"},children:"    this"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"._height "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"="},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" height;"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"  }"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#B392F0"},children:"  printWidth"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"() {"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"    console."},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:"log"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"("},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"this"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"._width);"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"  }"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#B392F0"},children:"  printSize"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"() {"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"    console."},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:"log"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"("},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"this"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"._width "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"+"},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:" ' x '"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" +"},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:" this"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"._height);"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"  }"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"}"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#6A737D"},children:"// 声明一个类，并继承"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"class"},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:" PngImage"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" extends"},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:" Image"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" {"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"  constructor"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"("},void 0,!1,void 0,this),n("span",{style:{color:"#FFAB70"},children:"width"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:", "},void 0,!1,void 0,this),n("span",{style:{color:"#FFAB70"},children:"height"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:") {"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#6A737D"},children:"    // 先调用父类的构建函数"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#79B8FF"},children:"    super"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"(width, height);"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#79B8FF"},children:"    this"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"._type "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"="},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:" 'png'"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:";"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"  }"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#B392F0"},children:"  printType"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"() {"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"    console."},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:"log"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"("},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"this"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"._type);"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"  }"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"}"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"const"},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:" aPng"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" ="},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" new"},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:" PngImage"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"("},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"100"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:", "},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"200"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:");"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"aPng."},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:"printType"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"(); "},void 0,!1,void 0,this),n("span",{style:{color:"#6A737D"},children:"// => png"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"aPng."},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:"printSize"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"(); "},void 0,!1,void 0,this),n("span",{style:{color:"#6A737D"},children:"// => 100 x 200"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:"总结 js 的语法：语法并不复杂可细节不少，有 c 风格语言背景的同学还是很容易上手。至于 js 的一些细节，无非熟能生巧。"},void 0,!1,void 0,this),`
`,n("p",{children:n("img",{src:"/images/Pasted%20image%2020220527221228.png",alt:""},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("h3",{children:"内置库"},void 0,!1,void 0,this),`
`,n("p",{children:n("strong",{children:"标准对象"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:"js 的语言标准中包含一组标准对象，用于提供基本的功能，比如 Math、Array、Object、Map、Set、String、Number、Boolean、Symbol、RegExp、Promise 等。"},void 0,!1,void 0,this),`
`,n("p",{children:["具体可以看 MDN 上的 ",n("a",{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects",children:"文档"},void 0,!1,void 0,this),"。"]},void 0,!0,void 0,this),`
`,n("p",{children:n("strong",{children:"宿主 API"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:"除上面介绍的标准对象外，js 的引擎也会为编程方便提供一些 API。这些 API 也是通过全局对象的形式进入到 js 的执行环境中。"},void 0,!1,void 0,this),`
`,n("p",{children:`比如在浏览器中，可以使用 Docment、fetch、console 等 API，这些都是由浏览器提供。在 node.js、deno 这类面向后台服务的执行环境，
它们都会提供不同的 API 以实现各种编程任务。`},void 0,!1,void 0,this),`
`,n("blockquote",{children:[`
`,n("p",{children:`js 的执行环境除常见的浏览器外，还有 node.js/deno 这些面向后台服务的环境，还有像 quickjs 这种面向嵌入脚本需求的执行环境。
这些环境对于 js 标准的支持程度、内置的 API 都有区别。具体只能查看相应的产品文档。但是 js 的语法基本上是一致的。`},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("h3",{children:"现代 js 开发流程"},void 0,!1,void 0,this),`
`,n("p",{children:"现在的前端应用，特别是一些重交互应用、控制台类应用都是基于 SPA 架构实现。js 在其中会控制整个页面的生成、人机交互、机机交互。因此 js 代码的复杂度也几何级别上升。node.js 出现后，js 的开发体验也变得越来越工程化。"},void 0,!1,void 0,this),`
`,n("p",{children:"node.js 是一种面向后台服务的 js 执行环境。node.js 有异步 io、高性能、高并发支持的特点。在开发体验，node.js 带来 npm 包管理器。通过 node.js，js 程序员可以使用 js 实现相关的工具。工具的开发难度大幅度降低。npm 的出现侧让 js 程序员更方便地分享代码，带来的结果就是 js 生态大爆炸。"},void 0,!1,void 0,this),`
`,n("p",{children:"现代 js 开发基本上就是这样一个流程："},void 0,!1,void 0,this),`
`,n("ol",{children:[`
`,n("li",{children:"使用 npm 初始化一个项目"},void 0,!1,void 0,this),`
`,n("li",{children:"安装依赖"},void 0,!1,void 0,this),`
`,n("li",{children:"配置项目，比如 eslint、webpack 等"},void 0,!1,void 0,this),`
`,n("li",{children:"开发应用组件"},void 0,!1,void 0,this),`
`,n("li",{children:"构建"},void 0,!1,void 0,this),`
`,n("li",{children:"测试"},void 0,!1,void 0,this),`
`,n("li",{children:"部署"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("p",{children:"基本上与其他语言的开发体验一致。而且也可以通过 ci/cd 自动化集成到系统中。"},void 0,!1,void 0,this),`
`,n("p",{children:"编辑器/IDE 可以使用 vscode 或 webstorm。vscode 免费，功能也足够使用；webstorm 则有更好的 js 静态分析支持，git ui、代码重构功能也特别好用。"},void 0,!1,void 0,this),`
`,n("blockquote",{children:[`
`,n("p",{children:["广告：初始化 node.js 可以使用我家的 ",n("a",{href:"https://github.com/yuekcc/init-nodejs-project",children:"init-nodejs-project"},void 0,!1,void 0,this),"，已经内置了 eslint、prettier 工具的配置。"]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("h2",{children:"VUE"},void 0,!1,void 0,this),`
`,n("p",{children:"vuejs 是目前流行的前端三大框架之一（另两个是 angular、react）。据我所知，vue 在小厂中非常流行，原因是上手真的简单，而且原创也是华人，也有足够多的中文资料。"},void 0,!1,void 0,this),`
`,n("p",{children:"无论 vue、angular，还是 react 都是基于 mvvm 或类似概念开发的框架。追求的是通过组件化的带来更好的开发体验。"},void 0,!1,void 0,this),`
`,n("p",{children:"所谓组件化是将一个大的功能模块细分为多个小组件。采用类似于积木的方式组合出更大更复杂的应用。"},void 0,!1,void 0,this),`
`,n("p",{children:"我认为组件也可以分为多种类型："},void 0,!1,void 0,this),`
`,n("ul",{children:[`
`,n("li",{children:"基础组件。比如按钮、菜单等一般由组件库提供，而且比较通用。甚至跨端使用。这些基础组件一般是直接使用开源产品。比如 vue 生态中的 element ui、react 生态中有 ant design。"},void 0,!1,void 0,this),`
`,n("li",{children:"通用业务组件。比如各个系统菜单。这种组件的特点是基于基础组进行了一定程序的包装。在项目中有一定的通用性。"},void 0,!1,void 0,this),`
`,n("li",{children:"具体业务组件。这些组件都是按照业务流程定制开发的组件，几乎没有通用性。如果业务流程发生了变更，这些组件通常都需要大面积的重写。"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("p",{children:"如果一个项目由多个开发小组共同进行开发。那么基础组件可能是由专门的人员进行维护；通用业务组件可能由特定域的人员进行开发；具体的业务组件则可能是某个人员进行维护。"},void 0,!1,void 0,this),`
`,n("h3",{children:"Options API"},void 0,!1,void 0,this),`
`,n("p",{children:"vue 提供了一种 Options API 用于声明一个组件。组件使用 js 对象语法描述："},void 0,!1,void 0,this),`
`,n("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:n("code",{className:"language-js",children:[n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"const"},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:" AComponent"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" ="},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" {"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#B392F0"},children:"  data"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"() {"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"    return"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" {"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"      name: "},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:"'Tom'"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:","},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"    };"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"  },"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"  methods: {"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#B392F0"},children:"    getName"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"() {"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"      return"},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:" this"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:".name;"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"    },"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"  },"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"  template: "},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:"`<div>{{getName()}}</div>`"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:","},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"};"},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:"vue 组件使用模板来声明组件的 html，模板会通过内置的编译器编译为 render 函数执行。模板的好处是比较直观，也更接近传统的网页开发方式。这点也是 vue 比较容易上手的特性。"},void 0,!1,void 0,this),`
`,n("p",{children:"如果将一个网页分为三个部分——样式、模板、脚本。然后组合在一个文件中，这样的就可以得一 Single File Component（SFC）的组件开发方式。"},void 0,!1,void 0,this),`
`,n("p",{children:"SFC 也是现在主流的 vue 组件开发方式。使用 SFC 需要编译工具支持。vue 官方现在推荐使用 vite。"},void 0,!1,void 0,this),`
`,n("h3",{children:"vite"},void 0,!1,void 0,this),`
`,n("p",{children:"vue 生态中为工程化提供了两套解决方案：vue-cli、vite。vue-cli 目前已经进入维护期，主要面对 vue2 构建；vite 则是一款更现代的工程化工具，主要面向 vue3。"},void 0,!1,void 0,this),`
`,n("blockquote",{children:[`
`,n("p",{children:"vue2、vue3 大部分场景下是兼容的。但不代表代码可以直接复用！开始项目的话，推荐 vue3。"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("p",{children:"工程化可以带来不少好处，比如："},void 0,!1,void 0,this),`
`,n("ul",{children:[`
`,n("li",{children:"更好地组织代码"},void 0,!1,void 0,this),`
`,n("li",{children:"通过编译工具的使用，可以使用更新、更方便的语法特性"},void 0,!1,void 0,this),`
`,n("li",{children:"对接前端的生态环境"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("p",{children:["vite 的文档可以在 ",n("a",{href:"https://vitejs.dev/",children:"https://vitejs.dev/"},void 0,!1,void 0,this)," 找到。"]},void 0,!0,void 0,this),`
`,n("h3",{children:"live coding"},void 0,!1,void 0,this),`
`,n("p",{children:"TBD"},void 0,!1,void 0,this),`
`,n("hr",{},void 0,!1,void 0,this),`
`,n("ul",{children:[`
`,n("li",{children:"2022 年 05 月 27 日，初稿"},void 0,!1,void 0,this),`
`,n("li",{children:"2022 年 06 月 05 日，修订"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)}export{l as default};
