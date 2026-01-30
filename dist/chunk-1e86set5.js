import{d as a,g as n}from"/dist/chunk-9xt68df4.js";function l(){return n("div",{class:"markdown-body",children:n(a,{children:[n("h1",{children:"C3 语言快速入门指南"},void 0,!1,void 0,this),`
`,n("blockquote",{children:[`
`,n("p",{children:"C 的演进版：更安全、更好用，但依然是系统语言。"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("hr",{},void 0,!1,void 0,this),`
`,n("h2",{children:"1. C3 是什么"},void 0,!1,void 0,this),`
`,n("p",{children:["C3 是一种",n("strong",{children:"系统编程语言"},void 0,!1,void 0,this),"，在语法和语义上都基于 C，目标是："]},void 0,!0,void 0,this),`
`,n("ul",{children:[`
`,n("li",{children:"让 C 程序员几乎“无痛迁移”"},void 0,!1,void 0,this),`
`,n("li",{children:"保留 C 的性能和低级控制能力"},void 0,!1,void 0,this),`
`,n("li",{children:[`增加现代语言常见的“质量提升”特性：
`,n("ul",{children:[`
`,n("li",{children:"更安全的类型系统与错误处理"},void 0,!1,void 0,this),`
`,n("li",{children:["模块系统（替代 ",n("code",{children:"#include"},void 0,!1,void 0,this),"）"]},void 0,!0,void 0,this),`
`,n("li",{children:"切片（slices）、Optionals、defer 等"},void 0,!1,void 0,this),`
`,n("li",{children:"更易用的宏与泛型模块"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("p",{children:"你可以把它理解为："},void 0,!1,void 0,this),`
`,n("blockquote",{children:[`
`,n("p",{children:"“如果今天重新设计一门尽量兼容 C 的语言，它大概会长成 C3 这个样子。”"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("hr",{},void 0,!1,void 0,this),`
`,n("h2",{children:"2. 安装与第一个程序"},void 0,!1,void 0,this),`
`,n("h3",{children:"2.1 安装 C3 编译器"},void 0,!1,void 0,this),`
`,n("p",{children:"在 C3 官网可以下载适用于 macOS / Linux / Windows 的预编译二进制包。[1]"},void 0,!1,void 0,this),`
`,n("p",{children:["下载安装后，确保 ",n("code",{children:"c3c"},void 0,!1,void 0,this)," 在 PATH 中："]},void 0,!0,void 0,this),`
`,n("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:n("code",{children:[n("span",{className:"line",children:[n("span",{style:{color:"#B392F0"},children:"c3c"},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:" --version"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:"能看到版本号就说明安装成功。"},void 0,!1,void 0,this),`
`,n("h3",{children:"2.2 Hello World"},void 0,!1,void 0,this),`
`,n("p",{children:["创建文件 ",n("code",{children:"hello_world.c3"},void 0,!1,void 0,this),"："]},void 0,!0,void 0,this),`
`,n("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:n("code",{children:[n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"import std::io;"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"fn "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"void"},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:" main"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"() {"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#B392F0"},children:"    io::printn"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"("},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:'"Hello, World!"'},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:");"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"}"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:"说明一下："},void 0,!1,void 0,this),`
`,n("ul",{children:[`
`,n("li",{children:[n("code",{children:"import std::io;"},void 0,!1,void 0,this),"：导入标准库中的 ",n("code",{children:"io"},void 0,!1,void 0,this)," 模块，里面有打印函数"]},void 0,!0,void 0,this),`
`,n("li",{children:[n("code",{children:"fn void main()"},void 0,!1,void 0,this),"：C3 程序的入口，",n("code",{children:"fn"},void 0,!1,void 0,this)," 声明函数，返回类型在 ",n("code",{children:"fn"},void 0,!1,void 0,this)," 后面"]},void 0,!0,void 0,this),`
`,n("li",{children:[n("code",{children:"io::printn(...)"},void 0,!1,void 0,this),"：打印一行字符串（自动换行）"]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("p",{children:"编译并运行："},void 0,!1,void 0,this),`
`,n("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:n("code",{children:[n("span",{className:"line",children:[n("span",{style:{color:"#B392F0"},children:"c3c"},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:" compile"},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:" hello_world.c3"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#B392F0"},children:"./hello_world"},void 0,!1,void 0,this),n("span",{style:{color:"#6A737D"},children:"      # Unix 系"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#B392F0"},children:"hello_world.exe"},void 0,!1,void 0,this),n("span",{style:{color:"#6A737D"},children:"    # Windows"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:"文档中也会演示带命令行参数版本："},void 0,!1,void 0,this),`
`,n("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:n("code",{children:[n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"fn "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"void"},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:" main"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"(String"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"[]"},void 0,!1,void 0,this),n("span",{style:{color:"#FFAB70"},children:" args"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:") {"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#6A737D"},children:"    // args 是字符串切片，包含命令行参数"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"}"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,n("hr",{},void 0,!1,void 0,this),`
`,n("h2",{children:"3. 基础语法：从 C 进化而来"},void 0,!1,void 0,this),`
`,n("p",{children:"如果你写过 C，这一节主要是对差异和增强的梳理。"},void 0,!1,void 0,this),`
`,n("h3",{children:"3.1 模块与 import（不用再写 .h）"},void 0,!1,void 0,this),`
`,n("p",{children:["C3 不再用 ",n("code",{children:"#include"},void 0,!1,void 0,this),"，而是用",n("strong",{children:"模块"},void 0,!1,void 0,this),"和 ",n("code",{children:"import"},void 0,!1,void 0,this),"："]},void 0,!0,void 0,this),`
`,n("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:n("code",{children:[n("span",{className:"line",children:n("span",{style:{color:"#6A737D"},children:"// math_utils.c3"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"module math_utils;"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"fn "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"int"},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:" add"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"("},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"int"},void 0,!1,void 0,this),n("span",{style:{color:"#FFAB70"},children:" a"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:", "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"int"},void 0,!1,void 0,this),n("span",{style:{color:"#FFAB70"},children:" b"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:") {"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"    return"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" a "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"+"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" b;"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"}"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,n("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:n("code",{children:[n("span",{className:"line",children:n("span",{style:{color:"#6A737D"},children:"// main.c3"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"import std::io;"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"import math_utils;"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"fn "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"void"},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:" main"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"() {"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"    int"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" r "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"="},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:" math_utils::add"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"("},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"2"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:", "},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"3"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:");"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#B392F0"},children:"    io::printfn"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"("},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:'"2 + 3 = {}"'},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:", r);"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"}"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:"要点："},void 0,!1,void 0,this),`
`,n("ul",{children:[`
`,n("li",{children:["源文件可以用 ",n("code",{children:"module xxx;"},void 0,!1,void 0,this)," 指定模块名，不写时默认用文件名"]},void 0,!0,void 0,this),`
`,n("li",{children:[n("code",{children:"import"},void 0,!1,void 0,this)," 引入模块，",n("strong",{children:"是递归的"},void 0,!1,void 0,this),"——不用担心 include 顺序问题"]},void 0,!0,void 0,this),`
`,n("li",{children:["用户自定义类型（struct / enum / union 的名字）使用时",n("strong",{children:["不用再写 ",n("code",{children:"struct"},void 0,!1,void 0,this)," 前缀"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("hr",{},void 0,!1,void 0,this),`
`,n("h3",{children:["3.2 函数：",n("code",{children:"fn"},void 0,!1,void 0,this)," 在前，返回类型紧跟"]},void 0,!0,void 0,this),`
`,n("p",{children:"C："},void 0,!1,void 0,this),`
`,n("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:n("code",{children:[n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"int"},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:" foo"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"(Foo "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"*"},void 0,!1,void 0,this),n("span",{style:{color:"#FFAB70"},children:"b"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:", "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"int"},void 0,!1,void 0,this),n("span",{style:{color:"#FFAB70"},children:" x"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:", "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"void"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" *"},void 0,!1,void 0,this),n("span",{style:{color:"#FFAB70"},children:"z"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:") { ... }"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:"C3："},void 0,!1,void 0,this),`
`,n("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:n("code",{children:[n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"fn "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"int"},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:" foo"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"(Foo"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"*"},void 0,!1,void 0,this),n("span",{style:{color:"#FFAB70"},children:" b"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:", "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"int"},void 0,!1,void 0,this),n("span",{style:{color:"#FFAB70"},children:" x"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:", "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"void*"},void 0,!1,void 0,this),n("span",{style:{color:"#FFAB70"},children:" z"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:") {"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"    return"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" x "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"+"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" ("},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"int"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:")(uptr)z;"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"}"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:"规则："},void 0,!1,void 0,this),`
`,n("ul",{children:[`
`,n("li",{children:["用 ",n("code",{children:"fn"},void 0,!1,void 0,this)," 开头"]},void 0,!0,void 0,this),`
`,n("li",{children:["返回类型放在 ",n("code",{children:"fn"},void 0,!1,void 0,this)," 后：",n("code",{children:"fn void ..."},void 0,!1,void 0,this)," / ",n("code",{children:"fn int ..."},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("li",{children:"参数写法基本与 C 一致"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("p",{children:"还有两个 C3 独有的功能："},void 0,!1,void 0,this),`
`,n("ul",{children:[`
`,n("li",{children:"默认参数"},void 0,!1,void 0,this),`
`,n("li",{children:"命名参数"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:n("code",{children:[n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"fn "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"void"},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:" log"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"(String "},void 0,!1,void 0,this),n("span",{style:{color:"#FFAB70"},children:"msg"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:", "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"int"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" level"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"="},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"1"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:", "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"bool"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" verbose"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"="},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"false"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:") {"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#6A737D"},children:"    // ..."},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"}"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#B392F0"},children:"log"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"("},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:'"Init"'},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:");"},void 0,!1,void 0,this),n("span",{style:{color:"#6A737D"},children:"                            // level=1, verbose=false"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#B392F0"},children:"log"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"("},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:'"IO error"'},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:", level"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"="},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"2"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:");"},void 0,!1,void 0,this),n("span",{style:{color:"#6A737D"},children:"               // 指定部分参数"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#B392F0"},children:"log"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"(msg"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"="},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:'"Done"'},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:", verbose"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"="},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"true"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:", level"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"="},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"3"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:");"},void 0,!1,void 0,this),n("span",{style:{color:"#6A737D"},children:" // 全部用命名"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,n("hr",{},void 0,!1,void 0,this),`
`,n("h3",{children:"3.3 变量与初始化"},void 0,!1,void 0,this),`
`,n("p",{children:["C3 的一个重要理念：",n("strong",{children:"默认更安全"},void 0,!1,void 0,this),"。"]},void 0,!0,void 0,this),`
`,n("ul",{children:[`
`,n("li",{children:["局部变量默认",n("strong",{children:"零初始化"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("li",{children:["不允许 ",n("code",{children:"int a, b = 4;"},void 0,!1,void 0,this)," 这种混合写法"]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:n("code",{children:[n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"int"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" a;"},void 0,!1,void 0,this),n("span",{style:{color:"#6A737D"},children:"            // 自动初始化为 0"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"int"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" b @noinit;"},void 0,!1,void 0,this),n("span",{style:{color:"#6A737D"},children:"    // 显式声明为“不初始化”（更像 C）"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"int"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" c "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"="},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:" 10"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:";"},void 0,!1,void 0,this),n("span",{style:{color:"#6A737D"},children:"       // OK"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"int"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" d; "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"int"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" e "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"="},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:" 4"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:";"},void 0,!1,void 0,this),n("span",{style:{color:"#6A737D"},children:" // OK"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"int"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" f, g "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"="},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:" 7"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:";"},void 0,!1,void 0,this),n("span",{style:{color:"#6A737D"},children:"     // ❌ 不允许"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,n("hr",{},void 0,!1,void 0,this),`
`,n("h3",{children:"3.4 基本类型和别名"},void 0,!1,void 0,this),`
`,n("p",{children:"C3 统一了一部分整数类型命名，例如："},void 0,!1,void 0,this),`
`,n("ul",{children:[`
`,n("li",{children:[n("code",{children:"short"},void 0,!1,void 0,this)," 16 位"]},void 0,!0,void 0,this),`
`,n("li",{children:[n("code",{children:"int"},void 0,!1,void 0,this)," 32 位"]},void 0,!0,void 0,this),`
`,n("li",{children:[n("code",{children:"long"},void 0,!1,void 0,this)," / ",n("code",{children:"ulong"},void 0,!1,void 0,this)," 64 位"]},void 0,!0,void 0,this),`
`,n("li",{children:["平台相关类型：",n("code",{children:"usz"},void 0,!1,void 0,this),"（类似 ",n("code",{children:"size_t"},void 0,!1,void 0,this),"）、",n("code",{children:"isz"},void 0,!1,void 0,this),"（类似 ",n("code",{children:"ssize_t"},void 0,!1,void 0,this),"）、",n("code",{children:"uptr"},void 0,!1,void 0,this)," 等[2]"]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("p",{children:["你可以用 ",n("code",{children:"alias"},void 0,!1,void 0,this)," 定义别名，替代 C 的 ",n("code",{children:"typedef"},void 0,!1,void 0,this)," 和一些 ",n("code",{children:"#define"},void 0,!1,void 0,this)," 用法："]},void 0,!0,void 0,this),`
`,n("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:n("code",{children:[n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"alias FooPtr "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"="},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" Foo"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"*"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:";"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"alias println "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"="},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" io::printn;"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"char*"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" my_string "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"="},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:' "Party on"'},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:";"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"alias my_excellent_string "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"="},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" my_string;"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#B392F0"},children:"println"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"(my_excellent_string);"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:["注意：C3 语义中的 ",n("code",{children:"typedef"},void 0,!1,void 0,this),"（在 primer 中）会创建“真正的新类型”，不能随意互转，这使得类型更安全。"]},void 0,!0,void 0,this),`
`,n("hr",{},void 0,!1,void 0,this),`
`,n("h2",{children:"4. 数组、切片和 foreach"},void 0,!1,void 0,this),`
`,n("h3",{children:"4.1 固定长度数组：维度写在类型后"},void 0,!1,void 0,this),`
`,n("p",{children:"C："},void 0,!1,void 0,this),`
`,n("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:n("code",{children:[n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"int"},void 0,!1,void 0,this),n("span",{style:{color:"#FFAB70"},children:" x"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"["},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"2"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"] "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"="},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" {"},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"1"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:", "},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"2"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"};"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"int"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" *"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"y "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"="},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" x;"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:"C3："},void 0,!1,void 0,this),`
`,n("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:n("code",{children:[n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"int"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"["},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"2"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"] x "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"="},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" {"},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"1"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:", "},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"2"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"};"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"int*"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" y "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"="},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" &"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"x;"},void 0,!1,void 0,this),n("span",{style:{color:"#6A737D"},children:"      // 数组不会自动退化为指针"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:"推断长度："},void 0,!1,void 0,this),`
`,n("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:n("code",{children:[n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"int"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"["},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"*"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"] x "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"="},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" {"},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"1"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:", "},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"2"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:", "},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"3"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"};"},void 0,!1,void 0,this),n("span",{style:{color:"#6A737D"},children:"  // x 是 int[3]"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:"数组之间可以直接赋值（是拷贝）："},void 0,!1,void 0,this),`
`,n("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:n("code",{children:[n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"int"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"["},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"3"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"] a "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"="},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" {"},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"1"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:", "},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"2"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:", "},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"3"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"};"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"int"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"["},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"3"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"] b "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"="},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" a;"},void 0,!1,void 0,this),n("span",{style:{color:"#6A737D"},children:"   // 逐元素拷贝"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,n("hr",{},void 0,!1,void 0,this),`
`,n("h3",{children:"4.2 切片（slice）：带长度的视图"},void 0,!1,void 0,this),`
`,n("p",{children:"C3 有一等公民的切片类型，用于安全、灵活地处理数组片段。"},void 0,!1,void 0,this),`
`,n("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:n("code",{children:[n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"int"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"["},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"10"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"] data "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"="},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" {"},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"0"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:","},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"1"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:","},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"2"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:","},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"3"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:","},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"4"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:","},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"5"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:","},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"6"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:","},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"7"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:","},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"8"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:","},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"9"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"};"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"int[]"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" all "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"="},void 0,!1,void 0,this),n("span",{style:{color:"#FFAB70"},children:" data"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"["},void 0,!1,void 0,this),n("span",{style:{color:"#FDAEB7",fontStyle:"italic"},children:"0.."},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"];"},void 0,!1,void 0,this),n("span",{style:{color:"#6A737D"},children:"     // 整个数组的切片"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"int[]"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" mid "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"="},void 0,!1,void 0,this),n("span",{style:{color:"#FFAB70"},children:" data"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"["},void 0,!1,void 0,this),n("span",{style:{color:"#FDAEB7",fontStyle:"italic"},children:"2..7"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"];"},void 0,!1,void 0,this),n("span",{style:{color:"#6A737D"},children:"    // [2, 7]，范围是“包含 2，包含 7”还是“半开区间”"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#6A737D"},children:"                            // 以文档示例为准，一般习惯为“包含起点，包含终点”或“len 计算清晰”"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:"切片常作为函数参数："},void 0,!1,void 0,this),`
`,n("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:n("code",{children:[n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"fn "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"void"},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:" sort_ints"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"("},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"int[]"},void 0,!1,void 0,this),n("span",{style:{color:"#FFAB70"},children:" s"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:") {"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#6A737D"},children:"    // 排序"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"}"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"int"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"["},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"100"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"] a;"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"int"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"["},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"30"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"] b;"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"int[]"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" c "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"="},void 0,!1,void 0,this),n("span",{style:{color:"#FFAB70"},children:" data"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"["},void 0,!1,void 0,this),n("span",{style:{color:"#FDAEB7",fontStyle:"italic"},children:"1..10"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"];"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#B392F0"},children:"sort_ints"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"("},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"&"},void 0,!1,void 0,this),n("span",{style:{color:"#FFAB70"},children:"a"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:");"},void 0,!1,void 0,this),n("span",{style:{color:"#6A737D"},children:"      // int[100]* -> int[]"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#B392F0"},children:"sort_ints"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"("},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"&"},void 0,!1,void 0,this),n("span",{style:{color:"#FFAB70"},children:"b"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:");"},void 0,!1,void 0,this),n("span",{style:{color:"#6A737D"},children:"      // int[30]*  -> int[]"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#B392F0"},children:"sort_ints"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"(c);"},void 0,!1,void 0,this),n("span",{style:{color:"#6A737D"},children:"       // 已是切片"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,n("hr",{},void 0,!1,void 0,this),`
`,n("h3",{children:"4.3 foreach：不用再写指针算术的遍历"},void 0,!1,void 0,this),`
`,n("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:n("code",{children:[n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"int"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"["},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"5"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"] a "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"="},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" {"},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"1"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:","},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"2"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:","},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"3"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:","},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"4"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:","},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"5"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"};"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"for"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" ("},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"int"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" x : a) {"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#B392F0"},children:"    io::printfn"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"("},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:'"x = {}"'},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:", x);"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"}"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#6A737D"},children:"// 需要原地修改时可以用引用"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"for"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" (ref "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"int"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" x : a) {"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"    x "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"="},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" x "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"*"},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:" 2"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:";"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"}"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,n("hr",{},void 0,!1,void 0,this),`
`,n("h2",{children:"5. 控制流：if / for / switch 的进化"},void 0,!1,void 0,this),`
`,n("h3",{children:"5.1 if / for"},void 0,!1,void 0,this),`
`,n("p",{children:"基本与 C 相同，这里不赘述。"},void 0,!1,void 0,this),`
`,n("h3",{children:"5.2 switch：默认 break，显式 nextcase"},void 0,!1,void 0,this),`
`,n("p",{children:["C3 的 ",n("code",{children:"switch"},void 0,!1,void 0,this)," 修正了 C 一个常见 bug 源头：",n("strong",{children:"每个 case 默认，会自动 break"},void 0,!1,void 0,this),"。"]},void 0,!0,void 0,this),`
`,n("p",{children:["需要穿透时要用 ",n("code",{children:"nextcase"},void 0,!1,void 0,this),"："]},void 0,!0,void 0,this),`
`,n("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:n("code",{children:[n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"switch"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" (x) {"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"    case"},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:" 1"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:":"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#B392F0"},children:"        io::printn"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"("},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:'"One"'},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:");"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"        nextcase;"},void 0,!1,void 0,this),n("span",{style:{color:"#6A737D"},children:"                // 显式“继续到下一个 case”"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"    case"},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:" 2"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:","},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"3"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:":"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#B392F0"},children:"        io::printn"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"("},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:'"Two or Three"'},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:");"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"    default"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:":"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#B392F0"},children:"        io::printn"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"("},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:'"Other"'},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:");"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"}"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:[n("strong",{children:"空 case"},void 0,!1,void 0,this)," 会隐式地穿透下一个 case："]},void 0,!0,void 0,this),`
`,n("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:n("code",{children:[n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"switch"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" (x) {"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"    case"},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:" 1"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:":"},void 0,!1,void 0,this),n("span",{style:{color:"#6A737D"},children:"          // 空体，隐式 nextcase"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"    case"},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:" 2"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:":"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#B392F0"},children:"        io::printn"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"("},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:'"One or Two"'},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:");"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"}"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:[n("code",{children:"goto"},void 0,!1,void 0,this)," 在 C3 中被移除，典型用途可以用："]},void 0,!0,void 0,this),`
`,n("ul",{children:[`
`,n("li",{children:[n("code",{children:"defer"},void 0,!1,void 0,this)," 做资源释放"]},void 0,!0,void 0,this),`
`,n("li",{children:["带标签的 ",n("code",{children:"break"},void 0,!1,void 0,this)," / ",n("code",{children:"continue"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("li",{children:"更清晰的结构化控制流"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("p",{children:"来替代。[2]"},void 0,!1,void 0,this),`
`,n("hr",{},void 0,!1,void 0,this),`
`,n("h2",{children:"6. 错误处理：Optionals 与更安全的返回"},void 0,!1,void 0,this),`
`,n("p",{children:["C3 提供了 Optionals（可选类型）来作为错误或“无值”情况的表示，语法上类似在返回类型前加 ",n("code",{children:"?"},void 0,!1,void 0,this),"。"]},void 0,!0,void 0,this),`
`,n("p",{children:"下面是概念性的例子（风格参照官方教程与 FAQ 中对 Optionals 的描述组合而成）："},void 0,!1,void 0,this),`
`,n("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:n("code",{children:[n("span",{className:"line",children:n("span",{style:{color:"#6A737D"},children:"// 返回值可能不存在"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"fn "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"?int"},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:" divide"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"("},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"int"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" a, "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"int"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" b) {"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"    if"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" (b "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"=="},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:" 0"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:") {"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"        return"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" ?"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:";"},void 0,!1,void 0,this),n("span",{style:{color:"#6A737D"},children:"         // 表示“没有值”（错误）"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"    }"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"    return"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" a "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"/"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" b;"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"}"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"fn "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"void"},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:" main"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"() {"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"    if"},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:" let"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" ("},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"int"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" result "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"="},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:" divide"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"("},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"10"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:", "},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"2"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:")) {"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#B392F0"},children:"        io::printfn"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"("},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:'"10 / 2 = {}"'},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:", result);"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"    } "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"else"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" {"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#B392F0"},children:"        io::printn"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"("},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:'"Division by zero!"'},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:");"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"    }"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"}"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:"要点："},void 0,!1,void 0,this),`
`,n("ul",{children:[`
`,n("li",{children:[n("code",{children:"?T"},void 0,!1,void 0,this)," 表示“要么是 T，要么是无”"]},void 0,!0,void 0,this),`
`,n("li",{children:[n("code",{children:"return ?;"},void 0,!1,void 0,this)," 表示返回“无”"]},void 0,!0,void 0,this),`
`,n("li",{children:[n("code",{children:"if let"},void 0,!1,void 0,this)," 用于拆解 Optional 的“成功”分支"]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("p",{children:"比起传统的“返回负值/NULL + errno”方式，Optionals 提供了更安全、可组合的错误处理能力，同时保证为零开销抽象。"},void 0,!1,void 0,this),`
`,n("p",{children:["官方教程中还有更系统的 ",n("strong",{children:"Error Handling 1–5"},void 0,!1,void 0,this)," 章节，可逐步深入。[3]"]},void 0,!0,void 0,this),`
`,n("hr",{},void 0,!1,void 0,this),`
`,n("h2",{children:"7. 资源管理：defer"},void 0,!1,void 0,this),`
`,n("p",{children:[n("code",{children:"defer"},void 0,!1,void 0,this)," 是 C3 中最常用、也最有价值的特性之一，用于在当前函数结束时自动执行清理逻辑，无论函数是从哪里返回。"]},void 0,!0,void 0,this),`
`,n("p",{children:"示意写法："},void 0,!1,void 0,this),`
`,n("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:n("code",{children:[n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"fn "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"void"},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:" work_with_file"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"() {"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"    File f "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"="},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:" open"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"("},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:'"log.txt"'},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:");"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"    defer f."},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:"close"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"();"},void 0,!1,void 0,this),n("span",{style:{color:"#6A737D"},children:"        // 函数结束前必定执行"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"    if"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" ("},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"!"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"f."},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:"is_open"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"()) {"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#B392F0"},children:"        io::printn"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"("},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:'"failed to open file"'},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:");"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"        return"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:";"},void 0,!1,void 0,this),n("span",{style:{color:"#6A737D"},children:"             // 仍然会调用 f.close()"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"    }"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"    f."},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:"write"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"("},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:'"Hello"'},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:");"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#6A737D"},children:"    // 正常结束时，也会执行 f.close()"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"}"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:"常见用途："},void 0,!1,void 0,this),`
`,n("ul",{children:[`
`,n("li",{children:"释放资源（文件、锁、内存池等）"},void 0,!1,void 0,this),`
`,n("li",{children:"回滚部分状态"},void 0,!1,void 0,this),`
`,n("li",{children:"打印日志、度量性能"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("p",{children:["它是将 C 中各种 ",n("code",{children:"goto cleanup;"},void 0,!1,void 0,this)," 模式抽象成语言级功能的一个代表。"]},void 0,!0,void 0,this),`
`,n("hr",{},void 0,!1,void 0,this),`
`,n("h2",{children:"8. 与 C 的互操作：直接用 C 库"},void 0,!1,void 0,this),`
`,n("p",{children:["C3 的设计目标之一就是 ",n("strong",{children:"与 C 完全 ABI 兼容"},void 0,!1,void 0,this),"。[1][2]"]},void 0,!0,void 0,this),`
`,n("h3",{children:"8.1 调用 C 函数"},void 0,!1,void 0,this),`
`,n("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:n("code",{children:[n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"extern"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" fn "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"int"},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:" puts"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"("},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"char*"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:");"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"fn "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"void"},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:" main"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"() {"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#B392F0"},children:"    puts"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"("},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:'"Hello from C3!"'},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:");"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"}"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:["如果需要给 C 函数起一个不同的 C3 名字，可以用 ",n("code",{children:"@cname"},void 0,!1,void 0,this),"："]},void 0,!0,void 0,this),`
`,n("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:n("code",{children:[n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"extern"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" fn "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"int"},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:" c3_puts"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"("},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"char*"},void 0,!1,void 0,this),n("span",{style:{color:"#FFAB70"},children:" msg"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:") @"},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:"cname"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"("},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:'"puts"'},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:");"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"fn "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"void"},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:" main"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"() {"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#B392F0"},children:"    c3_puts"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"("},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:'"Hello again"'},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:");"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"}"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:"注意："},void 0,!1,void 0,this),`
`,n("ul",{children:[`
`,n("li",{children:"默认只会自动链接 C 标准库，其他库要像在 C 中一样手动链接"},void 0,!1,void 0,this),`
`,n("li",{children:"结构体布局与 C 保持兼容，可与 C 的头文件协同使用（通过合适的绑定生成）"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("h3",{children:"8.2 让 C 调用 C3"},void 0,!1,void 0,this),`
`,n("p",{children:["因为 ABI 兼容，你也可以把 C3 代码编译成库，给 C 直接调用。做法在 C 侧和普通的 ",n("code",{children:".o"},void 0,!1,void 0,this),"/",n("code",{children:".a"},void 0,!1,void 0,this)," 链接没有本质差异，关键是函数使用 C ABI（C3 默认就是）。"]},void 0,!0,void 0,this),`
`,n("hr",{},void 0,!1,void 0,this),`
`,n("h2",{children:"9. 模块系统与命名规范"},void 0,!1,void 0,this),`
`,n("h3",{children:"9.1 模块再次梳理"},void 0,!1,void 0,this),`
`,n("p",{children:"一个稍微复杂一点的例子："},void 0,!1,void 0,this),`
`,n("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:n("code",{children:[n("span",{className:"line",children:n("span",{style:{color:"#6A737D"},children:"// otherlib/foo.c3"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"module otherlib::foo;"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"fn "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"void"},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:" test"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"() {"},void 0,!1,void 0,this),n("span",{style:{color:"#6A737D"},children:" /* ... */"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" }"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"struct"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" FooStruct {"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"    int"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" x;"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"}"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,n("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:n("code",{children:[n("span",{className:"line",children:n("span",{style:{color:"#6A737D"},children:"// mylib/bar.c3"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"module mylib::bar;"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"import otherlib;"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"fn "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"void"},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:" myCheck"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"() {"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#B392F0"},children:"    foo::test"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"();"},void 0,!1,void 0,this),n("span",{style:{color:"#6A737D"},children:"                  // 由于 import otherlib，会导入 otherlib::foo"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#B392F0"},children:"    mylib::foo::test"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"();"},void 0,!1,void 0,this),n("span",{style:{color:"#6A737D"},children:"           // 完整路径也可以"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"    FooStruct x;"},void 0,!1,void 0,this),n("span",{style:{color:"#6A737D"},children:"                  // 用户定义类型不需要加模块前缀"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"    otherlib::foo::FooStruct y;"},void 0,!1,void 0,this),n("span",{style:{color:"#6A737D"},children:"   // 当然也可以写全限定名"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"}"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,n("h3",{children:"9.2 命名约定"},void 0,!1,void 0,this),`
`,n("p",{children:"C3 建议的命名风格（在 primer 中有说明）：[2]"},void 0,!1,void 0,this),`
`,n("ul",{children:[`
`,n("li",{children:["开头大写且后面有小写：",n("strong",{children:"自定义类型"},void 0,!1,void 0,this),`（struct/enum 等）
`,n("ul",{children:[`
`,n("li",{children:[n("code",{children:"Foo"},void 0,!1,void 0,this),", ",n("code",{children:"MyStruct"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("li",{children:[`开头小写：变量、函数、字段
`,n("ul",{children:[`
`,n("li",{children:[n("code",{children:"foo"},void 0,!1,void 0,this),", ",n("code",{children:"count"},void 0,!1,void 0,this),", ",n("code",{children:"fooBar"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("li",{children:[`全大写：常量或枚举值
`,n("ul",{children:[`
`,n("li",{children:[n("code",{children:"MAX_SIZE"},void 0,!1,void 0,this),", ",n("code",{children:"STATE_A"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("p",{children:"这不是强制语法规则，但配合工具可以做更多静态检查。"},void 0,!1,void 0,this),`
`,n("hr",{},void 0,!1,void 0,this),`
`,n("h2",{children:"10. 更多语言特性一览（只做“预告”）"},void 0,!1,void 0,this),`
`,n("p",{children:"这些是官方介绍和 primer 中多次提到、但本指南不细讲的内容。[1][2][3]"},void 0,!1,void 0,this),`
`,n("ul",{children:[`
`,n("li",{children:[n("strong",{children:"方法（methods）"},void 0,!1,void 0,this),n("br",{},void 0,!1,void 0,this),`
给类型定义方法，注意不是 OOP，而是对 C 风格结构体的增强`]},void 0,!0,void 0,this),`
`,n("li",{children:n("strong",{children:"Optionals（上面提到的错误处理）"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("li",{children:[n("strong",{children:"语义宏（semantic macros）"},void 0,!1,void 0,this),n("br",{},void 0,!1,void 0,this),`
不再是纯文本替换，而是理解类型信息的宏`]},void 0,!0,void 0,this),`
`,n("li",{children:n("strong",{children:"泛型模块（generic modules）"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("li",{children:[n("strong",{children:"Contracts（契约）"},void 0,!1,void 0,this),n("br",{},void 0,!1,void 0,this),`
写在特殊注释里的前置条件、后置条件，编译器可检查`]},void 0,!0,void 0,this),`
`,n("li",{children:n("strong",{children:"编译期求值 & 反射"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("li",{children:n("strong",{children:"运算符重载"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("li",{children:n("strong",{children:"静态初始化 / 终结函数"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("li",{children:n("strong",{children:"动态接口（dynamic interfaces）"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("p",{children:"这些特性让 C3 在保持“接近 C 的简单心智模型”的同时，拥有与现代语言相当的表达力。"},void 0,!1,void 0,this),`
`,n("hr",{},void 0,!1,void 0,this),`
`,n("h2",{children:"11. 实战：一个稍完整的小例子"},void 0,!1,void 0,this),`
`,n("p",{children:"综合前面提到的点，写一个读参数、简单计算、错误处理的小程序（伪示例，意在风格）："},void 0,!1,void 0,this),`
`,n("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:n("code",{children:[n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"module app;"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"import std::io;"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"import std::conv;"},void 0,!1,void 0,this),n("span",{style:{color:"#6A737D"},children:"    // 假设有字符串转数字的模块"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"fn "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"?int"},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:" parse_int"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"(String s) {"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#6A737D"},children:"    // 假设 conv::parse_int 返回 ?int"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"    return"},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:" conv::parse_int"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"(s);"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"}"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"fn "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"?int"},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:" safe_div"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"("},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"int"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" a, "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"int"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" b) {"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"    if"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" (b "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"=="},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:" 0"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:") {"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"        return"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" ?"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:";"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"    }"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"    return"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" a "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"/"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" b;"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"}"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"fn "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"void"},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:" main"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"(String"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"[]"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" args) {"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"    if"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" (args.len "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"<"},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:" 3"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:") {"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#B392F0"},children:"        io::printn"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"("},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:'"Usage: app <a> <b>"'},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:");"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"        return"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:";"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"    }"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#6A737D"},children:"    // parse 参数"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"    if"},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:" let"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" ("},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"int"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" a "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"="},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:" parse_int"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"("},void 0,!1,void 0,this),n("span",{style:{color:"#FFAB70"},children:"args"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"["},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"1"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"])) {"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"        if"},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:" let"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" ("},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"int"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" b "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"="},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:" parse_int"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"("},void 0,!1,void 0,this),n("span",{style:{color:"#FFAB70"},children:"args"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"["},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"2"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"])) {"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"            if"},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:" let"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" ("},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"int"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" r "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"="},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:" safe_div"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"(a, b)) {"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#B392F0"},children:"                io::printfn"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"("},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:'"{} / {} = {}"'},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:", a, b, r);"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"            } "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"else"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" {"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#B392F0"},children:"                io::printn"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"("},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:'"Division by zero"'},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:");"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"            }"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"        } "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"else"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" {"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#B392F0"},children:"            io::printn"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"("},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:'"Invalid integer: second argument"'},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:");"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"        }"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"    } "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"else"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" {"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#B392F0"},children:"        io::printn"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"("},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:'"Invalid integer: first argument"'},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:");"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"    }"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"}"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:"可以看到："},void 0,!1,void 0,this),`
`,n("ul",{children:[`
`,n("li",{children:"完全系统级：没有 GC，没有隐藏的分配"},void 0,!1,void 0,this),`
`,n("li",{children:"错误处理通过 Optionals 组合完成"},void 0,!1,void 0,this),`
`,n("li",{children:"模块和标准库让代码比纯 C 更简洁"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("hr",{},void 0,!1,void 0,this),`
`,n("h2",{children:"12. 建议的学习路线"},void 0,!1,void 0,this),`
`,n("ol",{children:[`
`,n("li",{children:[n("strong",{children:"跑通 Hello World"},void 0,!1,void 0,this),n("br",{},void 0,!1,void 0,this),`
熟悉 `,n("code",{children:"c3c compile"},void 0,!1,void 0,this)," / ",n("code",{children:"c3c run"},void 0,!1,void 0,this),"，掌握编译和运行流程。"]},void 0,!0,void 0,this),`
`,n("li",{children:[n("strong",{children:"看一遍 Learn C3 “Basics” 章节"},void 0,!1,void 0,this),`[3]
`,n("ul",{children:[`
`,n("li",{children:"Modules"},void 0,!1,void 0,this),`
`,n("li",{children:"Imports"},void 0,!1,void 0,this),`
`,n("li",{children:"Functions"},void 0,!1,void 0,this),`
`,n("li",{children:"For、Foreach、If、Switch、Nextcase"},void 0,!1,void 0,this),`
`,n("li",{children:"Pointers、Structs & Unions、Arrays、Slices"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("li",{children:[n("strong",{children:"参考 “C3 For C Programmers” Primer"},void 0,!1,void 0,this),"[2]",n("br",{},void 0,!1,void 0,this),`
从“C 的差异点”角度快速熟悉 C3 语法与语义。`]},void 0,!0,void 0,this),`
`,n("li",{children:[n("strong",{children:"写一个小工具"},void 0,!1,void 0,this),n("br",{},void 0,!1,void 0,this),`
例如：小型文本处理、简单 HTTP 客户端、命令行计算器。`]},void 0,!0,void 0,this),`
`,n("li",{children:[n("strong",{children:"逐个尝试进阶特性"},void 0,!1,void 0,this),`
`,n("ul",{children:[`
`,n("li",{children:"Defer 管理资源"},void 0,!1,void 0,this),`
`,n("li",{children:"Optionals 做错误处理"},void 0,!1,void 0,this),`
`,n("li",{children:"alias / typedef 创建更安全的“领域类型”"},void 0,!1,void 0,this),`
`,n("li",{children:"尝试与 C 库互操作"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("p",{children:"做到这一步，你已经可以把不少 C 项目平滑迁移到 C3，再慢慢引入新特性来提高安全性和可维护性。"},void 0,!1,void 0,this),`
`,n("hr",{},void 0,!1,void 0,this),`
`,n("h2",{children:"13. 总结"},void 0,!1,void 0,this),`
`,n("ul",{children:[`
`,n("li",{children:["C3 是对 C 的",n("strong",{children:"增量改进"},void 0,!1,void 0,this),"，而不是彻底替代"]},void 0,!0,void 0,this),`
`,n("li",{children:["核心理念是：",n("strong",{children:"保持低级控制力，同时默认更安全、更易用"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("li",{children:[`对 C 程序员来说：
`,n("ul",{children:[`
`,n("li",{children:"入门难度很低：语法极其相似"},void 0,!1,void 0,this),`
`,n("li",{children:[`但可以立即获得：
`,n("ul",{children:[`
`,n("li",{children:"模块系统"},void 0,!1,void 0,this),`
`,n("li",{children:"更好的数组和切片"},void 0,!1,void 0,this),`
`,n("li",{children:"结构化的错误处理"},void 0,!1,void 0,this),`
`,n("li",{children:"语言级的资源管理（defer）"},void 0,!1,void 0,this),`
`,n("li",{children:"更现代的宏和泛型能力"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("p",{children:"如果你喜欢 C 的“贴近硬件”风格，又希望能少踩一点老的坑（UB、内存泄漏、goto 混乱等），那么 C3 值得你认真试用。"},void 0,!1,void 0,this),`
`,n("hr",{},void 0,!1,void 0,this),`
`,n("h3",{children:"References"},void 0,!1,void 0,this),`
`,n("p",{children:["[1] GETTING STARTED / WHAT IS C3? ",n("a",{href:"https://c3-lang.org/getting-started/",children:"https://c3-lang.org/getting-started/"},void 0,!1,void 0,this),n("br",{},void 0,!1,void 0,this),`
[2] C3 FOR C PROGRAMMERS (PRIMER). `,n("a",{href:"https://c3-lang.org/language-overview/primer/",children:"https://c3-lang.org/language-overview/primer/"},void 0,!1,void 0,this),n("br",{},void 0,!1,void 0,this),`
[3] C3 TUTORIAL (LEARN-C3). `,n("a",{href:"https://learn-c3.org/",children:"https://learn-c3.org/"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("hr",{},void 0,!1,void 0,this),`
`,n("ul",{children:[`
`,n("li",{children:["2026-01-31, by ",n("a",{href:"https://dr.miromind.ai/share/a94e6d1d-e3fb-459d-a448-1f075231f711",children:"MiroThinker"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)}export{l as default};
