import{e as a,h as n}from"/dist/chunk-scq2q67j.js";function o(){return n("div",{class:"markdown-body",children:n(a,{children:[n("h1",{children:"docutil 开发笔记"},void 0,!1,void 0,this),`
`,n("p",{children:"docutil 是一个纯前端博客应用。通过 docutil 可以高效地部署一个网站，而且无需后台服务支持。"},void 0,!1,void 0,this),`
`,n("p",{children:"传统的静态网站生成工具，比如 hugo、hexo，用户需要先在本地生成 html 文件，然后才能部署。docutil 是完全运行在浏览器侧，仅需要一个 HTTP 服务。"},void 0,!1,void 0,this),`
`,n("p",{children:"用户按约定的目录编写 markdown 文件，导入 index.html 及 dist 目录下的三个文件即完成网站部署。文章从编写到最终上线，完全可以在浏览器上完成。"},void 0,!1,void 0,this),`
`,n("p",{children:n("img",{src:"/images/lambdadriver_space.png",alt:"lambdadriver_space"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("h2",{children:"核心"},void 0,!1,void 0,this),`
`,n("p",{children:["docutil 源于一次“小作业”——使用 vanilla js 实山寨一个 ",n("a",{href:"https://docsify.js.org/",children:"docsify"},void 0,!1,void 0,this),"。那次“小作业”的成果便是 ",n("a",{href:"https://github.com/yuekcc/marknote",children:"marknote"},void 0,!1,void 0,this),"。演进到后面，想法慢慢就变成为使用 wasm 实现一个相同功能的应用。"]},void 0,!0,void 0,this),`
`,n("p",{children:"docutil 核心是使用 rust + sycamore 实现的 markdown 渲染，页面路由处理引擎。样式使用了 unocss 的 css-in-js 版本。"},void 0,!1,void 0,this),`
`,n("p",{children:"sycamore 是一个纯 rust 实现的前端框架，具有 vdomless、响应式的特点。rust 是一门没有 gc 的编程语言，以安全、高性能、学习曲线徒著称。rust 着非常优秀的 wasm 工具链。通过 wasm-bindgen，rust 代码可以很方便地调用 DOM API、JS API。"},void 0,!1,void 0,this),`
`,n("h2",{children:"代码量 pk：rust vs js"},void 0,!1,void 0,this),`
`,n("p",{children:"marknote"},void 0,!1,void 0,this),`
`,n("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:n("code",{className:"language-sh",children:[n("span",{className:"line",children:n("span",{style:{color:"#9ECBFF"},children:"==============================================================================="},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#B392F0"},children:" Language"},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:"            Files"},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:"        Lines"},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:"         Code"},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:"     Comments"},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:"       Blanks"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#9ECBFF"},children:"==============================================================================="},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#B392F0"},children:" CSS"},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"                     4"},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"          269"},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"          221"},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"            2"},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"           46"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#B392F0"},children:" JavaScript"},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"              3"},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"          333"},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"          259"},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"           11"},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"           63"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#B392F0"},children:" SVG"},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"                     3"},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"            3"},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"            3"},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"            0"},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"            0"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#9ECBFF"},children:"==============================================================================="},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#B392F0"},children:" Total"},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"                  10"},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"          605"},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"          483"},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"           13"},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"          109"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#9ECBFF"},children:"==============================================================================="},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:"docutil"},void 0,!1,void 0,this),`
`,n("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:n("code",{className:"language-sh",children:[n("span",{className:"line",children:n("span",{style:{color:"#9ECBFF"},children:"==============================================================================="},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#B392F0"},children:" Language"},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:"            Files"},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:"        Lines"},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:"         Code"},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:"     Comments"},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:"       Blanks"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#9ECBFF"},children:"==============================================================================="},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#B392F0"},children:" Rust"},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"                    8"},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"          580"},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"          498"},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"            3"},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"           79"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#9ECBFF"},children:"==============================================================================="},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#B392F0"},children:" Total"},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"                   8"},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"          580"},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"          498"},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"            3"},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"           79"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#9ECBFF"},children:"==============================================================================="},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:"docutil 比 marknote 多实现一个搜索的弹窗，大概 100 行代码。虽然 docutil 本身复杂度不高，但是可以看出 rust 的表达能力并不比 js 低多少。"},void 0,!1,void 0,this),`
`,n("h2",{children:"默认 unmutable，默认 move"},void 0,!1,void 0,this),`
`,n("p",{children:"rust 中默认是 move 语义。我理解是一个值会绑定到一个变量。变量可以声明为是否有权限修改这个值的数据。"},void 0,!1,void 0,this),`
`,n("p",{children:["比如声明一个 ",n("code",{children:"String"},void 0,!1,void 0,this)," 类型变量：",n("code",{children:'let s = String::from("hello, world")'},void 0,!1,void 0,this),"。这时会将 ",n("code",{children:'String::from("hello, world")'},void 0,!1,void 0,this)," 这个函数的返回值绑定到变量 ",n("code",{children:"s"},void 0,!1,void 0,this),"，并且 ",n("code",{children:"s"},void 0,!1,void 0,this)," 对数据有只读的权限。如果需要修改数据的内容，则需要显式地使用 ",n("code",{children:"let mut"},void 0,!1,void 0,this)," 声明：",n("code",{children:'let mut s = String::from("hello, world")'},void 0,!1,void 0,this),"。"]},void 0,!0,void 0,this),`
`,n("p",{children:"move 又是如何理解。比如下面一段代码："},void 0,!1,void 0,this),`
`,n("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:n("code",{className:"language-rust",children:[n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"fn"},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:" get_something"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"() "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"->"},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:" String"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" {"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"\tlet"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" result "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"="},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:" String"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"::"},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:"from"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"("},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:'"something"'},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:");"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"\tresult"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"}"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"fn"},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:" main"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"() {"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"\tlet"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" a "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"="},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:" get_something"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"();"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"\tlet"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" b "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"="},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" a;"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"\tlet"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" c "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"="},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" b;"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#B392F0"},children:"\tprintln!"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"("},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:'"{} {} {}"'},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:", a, b, c);"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"}"},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:[n("code",{children:"get_somthing"},void 0,!1,void 0,this)," 函数返回一个 ",n("code",{children:"somthing"},void 0,!1,void 0,this)," 字符串，先是绑定到 ",n("code",{children:"a"},void 0,!1,void 0,this),"，然后将 ",n("code",{children:"a"},void 0,!1,void 0,this)," 绑定到 ",n("code",{children:"b"},void 0,!1,void 0,this),"，再将 ",n("code",{children:"b"},void 0,!1,void 0,this)," 绑定到 ",n("code",{children:"c"},void 0,!1,void 0,this),"，最后在打印 ",n("code",{children:"a"},void 0,!1,void 0,this),"、",n("code",{children:"b"},void 0,!1,void 0,this),"、",n("code",{children:"c"},void 0,!1,void 0,this)," 的值。而事实上无法通过编译！"]},void 0,!0,void 0,this),`
`,n("p",{children:"为什么是这样？这一点就是 rust 与其他编程语言最大的区别。特别现在流行的 java、js 这些语言。"},void 0,!1,void 0,this),`
`,n("p",{children:"将上面的代码改为 js，代码可以正常执行。"},void 0,!1,void 0,this),`
`,n("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:n("code",{className:"language-js",children:[n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"function"},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:" get_something"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"() {"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"  let"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" result "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"="},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:" 'something'"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:";"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"  return"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" result;"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"}"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"function"},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:" main"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"() {"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"  let"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" a "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"="},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:" get_something"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"();"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"  let"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" b "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"="},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" a;"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"  let"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" c "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"="},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" b;"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"  console."},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:"log"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"(a, b, c);"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"}"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#B392F0"},children:"main"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"(); "},void 0,!1,void 0,this),n("span",{style:{color:"#6A737D"},children:"// => something something something"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:"从内存分配的角度就可以简单的理解这个问题。"},void 0,!1,void 0,this),`
`,n("p",{children:["首先 ",n("code",{children:"get_something"},void 0,!1,void 0,this)," 函数，返回了一个字符串对象，在 v8 的角度其实是返回了一个指针。这个指针指向堆内存中的一个地址，这个地址保存了 ",n("code",{children:"something"},void 0,!1,void 0,this)," 字符串。当函数赋值给 ",n("code",{children:"a"},void 0,!1,void 0,this)," 时，只是将这个指针复制了一次。当 ",n("code",{children:"b"},void 0,!1,void 0,this)," 赋值时，将 ",n("code",{children:"a"},void 0,!1,void 0,this)," 复制了一次；当 ",n("code",{children:"c"},void 0,!1,void 0,this)," 赋值时，又将 ",n("code",{children:"b"},void 0,!1,void 0,this)," 复制了一次。所以这些指针都指向了同一个内存地址。这就是 ",n("strong",{children:"copy 语义"},void 0,!1,void 0,this)," 。"]},void 0,!0,void 0,this),`
`,n("p",{children:["copy 语义会造成 ",n("strong",{children:"“一鱼多食”"},void 0,!1,void 0,this)," 的局面。js 是单线程的系统，一般不会出现问题。在多线程系统中，比如 java，可能会造成数据竞争。"]},void 0,!0,void 0,this),`
`,n("p",{children:["move 语义则是另一个处理方式，每次数据绑定是移动，将绑定到 ",n("code",{children:"a"},void 0,!1,void 0,this)," 的数据移动到 ",n("code",{children:"b"},void 0,!1,void 0,this),"，然后将绑定到 ",n("code",{children:"b"},void 0,!1,void 0,this)," 的数据移动到 ",n("code",{children:"c"},void 0,!1,void 0,this),"。这样可以保证数据事实上只是被一个变量持有。"]},void 0,!0,void 0,this),`
`,n("p",{children:["move 语义的代码写起来也会比较啰嗦。在需要保持相同的多份数据时，唯有使用 ",n("code",{children:"clone"},void 0,!1,void 0,this)," 方法或使用 ",n("code",{children:"RC"},void 0,!1,void 0,this),"、",n("code",{children:"ARC"},void 0,!1,void 0,this)," 进行装箱。所以原始类型，rust 也提供了 copy 语义支持，减少 ",n("code",{children:"clone"},void 0,!1,void 0,this)," 方法。原始类型主要就是数值、boolean 这些。"]},void 0,!0,void 0,this),`
`,n("h2",{children:"代码块、生命周期"},void 0,!1,void 0,this),`
`,n("p",{children:["rust 没有 gc，主要依赖生命周期实现",n("strong",{children:"自动内存管理"},void 0,!1,void 0,this),"。rust 中大部分场景是可以自动管理 内存。生命周期的一个重要参考范围就是代码块。在 rust 中，一对 ",n("code",{children:"{}"},void 0,!1,void 0,this)," 表示一个代码块。代码块中的变量，当程序离开这个代码块时，就会触发 ",n("code",{children:"drop"},void 0,!1,void 0,this)," 操作，释放内存。"]},void 0,!0,void 0,this),`
`,n("blockquote",{children:[`
`,n("p",{children:"When a value is no longer needed, Rust will run a “destructor” on that value. The most common way that a value is no longer needed is when it goes out of scope."},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("p",{children:"在现代的很多编程语言中都有代码块的概念，特别是有闭包的编程语言。顺便一提，rust 也支持闭包。docutil 也使用了不少闭包作为事件的回调函数（这种写法 js 中也非常普遍）。"},void 0,!1,void 0,this),`
`,n("p",{children:"比如下面这几行代码："},void 0,!1,void 0,this),`
`,n("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:n("code",{className:"language-rust",children:[n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"#[component]"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"pub"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" fn"},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:" SearchBox"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"<"},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:"G"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:":"},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:" Html"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:">(ctx"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:":"},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:" ScopeRef"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"<'"},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:"_"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:">) "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"->"},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:" View"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"<"},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:"G"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"> {"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"\tlet"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" keyword "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"="},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" ctx"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"."},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:"create_signal"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"("},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:"String"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"::"},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:"new"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"()); "},void 0,!1,void 0,this),n("span",{style:{color:"#6A737D"},children:"// (1)"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"\tlet"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" reset "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"="},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" {"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"\t\tlet"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" keyword "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"="},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" keyword"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"."},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:"clone"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"(); "},void 0,!1,void 0,this),n("span",{style:{color:"#6A737D"},children:"// (2)"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"\t\tmove"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" ||"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" { "},void 0,!1,void 0,this),n("span",{style:{color:"#6A737D"},children:"// (3)"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"\t\t\tkeyword"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"."},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:"set"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"("},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:"String"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"::"},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:"new"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"());"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"\t\t}"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"\t};"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#B392F0"},children:"\tview!"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" {ctx,"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#6A737D"},children:"\t\t// ..."},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"\t}"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"}"},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:[n("code",{children:"keyword"},void 0,!1,void 0,this)," 是一个可响应对象引用，类型是 ",n("code",{children:"&Signal<String>"},void 0,!1,void 0,this),"。",n("code",{children:"reset"},void 0,!1,void 0,this)," 是一个闭包，目标是重置 ",n("code",{children:"keyword"},void 0,!1,void 0,this)," 的值。可以看出 ",n("code",{children:"reset"},void 0,!1,void 0,this)," 是一个代码块返回的结果，在 rust 中，代码块也可以有返回值，属于 rust 的一种表达式。"]},void 0,!0,void 0,this),`
`,n("p",{children:["reset 代码块中，首先是 clone 一次 ",n("code",{children:"keyword"},void 0,!1,void 0,this),"，因为后面的 html 模板中也用到了这个值，不能被直接移动到闭包中（否则无法实现功能），所以这里只是将 clone 出来的 ",n("code",{children:"keyword"},void 0,!1,void 0,this)," 移动到闭包中。注意（1）和（2）的 ",n("code",{children:"keyword"},void 0,!1,void 0,this)," 不是同一个变量，rust 支持变量声明 shadowing，可以出现同名变量。虽然同名，但是也是受到生命周期行为约束。还有就是这里并没有数据竞争问题，因为两个 ",n("code",{children:"keyword"},void 0,!1,void 0,this)," 都在 ",n("code",{children:"SearchBox"},void 0,!1,void 0,this)," 这个函数的内部，也没有 async 块。"]},void 0,!0,void 0,this),`
`,n("h2",{children:"async/await"},void 0,!1,void 0,this),`
`,n("p",{children:["rust 同时支持多线程和异步编程。浏览器侧异步编程是相当普遍，而且也被（事实）证明了是一种可靠的并发编程技术。async 的本质的状态机，将异步的操作转换为各种状态。",n("code",{children:"wasm_bindgen_futures"},void 0,!1,void 0,this)," 提供在 wasm 里使用异步的可能。"]},void 0,!0,void 0,this),`
`,n("p",{children:"与 js 的 Promise 不同，rust 的 Future，是一种需要被触发才会操作的异步系统。就是只声明 Future 对象，实际并不是马上就执行内部的代码。这点 js 的 Promise 只要 new 出来，就会马上执行。"},void 0,!1,void 0,this),`
`,n("h2",{children:"debug"},void 0,!1,void 0,this),`
`,n("p",{children:["唯有 ",n("code",{children:"console.log"},void 0,!1,void 0,this)," 大法。"]},void 0,!0,void 0,this),`
`,n("h2",{children:"胶水代码"},void 0,!1,void 0,this),`
`,n("p",{children:"wasm-bindgen 会自动生成胶水代码。docutil 的核心代码使用 rust 实现，胶水代码主要与 js 或调用 dom api 的部分代码，再就是 unocss 的代码。"},void 0,!1,void 0,this),`
`,n("p",{children:"rust 中调用 js 函数也比较简单，只需要简单的声明，就可以在 rust 代码只使用："},void 0,!1,void 0,this),`
`,n("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:n("code",{className:"language-rust",children:[n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"#[wasm_bindgen]"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"extern"},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:' "C"'},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" {"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"    #[wasm_bindgen(js_namespace "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"="},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" hljs, js_name "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"="},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" highlightAll )]"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"    pub"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" fn"},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:" highlight_all"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"(); "},void 0,!1,void 0,this),n("span",{style:{color:"#6A737D"},children:"// 调用 hljs.highlightAll() 方法"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"}"},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,n("h2",{children:"小结"},void 0,!1,void 0,this),`
`,n("p",{children:"rust 上手写简单的应用并不是非常困难。如果有 c++ 或 go（比如我）背景相信会更容易上手。rust 复杂的地方还有生命周期、trait、泛型、unsafe rust。不过对于应用开发程序程序员来说，使用 safe rust 已经足够解决工作需要。"},void 0,!1,void 0,this),`
`,n("p",{children:"rust 对于来说是一种补充，我主力工作业务是 js，并同时在浏览器、node.js 上开发应用。我也曾经被 go 吸引——自动内存管理、编译型、单文件部署等等吸引我的地方。但是很快我就被 rust 吸引了。原因就是 rust 更适合作为 js 的补充。通过 napi-rs 项目可以很方便地将代码嵌入的 node.js 中，通过 wasm 也可以将代码嵌入到浏览器侧。"},void 0,!1,void 0,this),`
`,n("p",{children:["当然我是 ",n("strong",{children:"always bet on js and wasm"},void 0,!1,void 0,this),"。"]},void 0,!0,void 0,this),`
`,n("hr",{},void 0,!1,void 0,this),`
`,n("ul",{children:[`
`,n("li",{children:"2022 年 03 月 05 日 初稿"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)}export{o as default};
