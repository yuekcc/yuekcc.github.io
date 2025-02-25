import{e as c,h as e}from"/dist/chunk-scq2q67j.js";function o(){return e("div",{class:"markdown-body",children:e(c,{children:[e("h1",{children:"Zig/JavaScript 代码风格指南"},void 0,!1,void 0,this),`
`,e("blockquote",{children:[`
`,e("p",{children:["部分内容源自 Zig 语言文档中的 ",e("a",{href:"https://ziglang.org/documentation/0.9.0/#Style-Guide",children:"Style Guide"},void 0,!1,void 0,this),"。"]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,e("p",{children:"每个编程语言都会有自己的风格。有的编程语言比较严格，比如 go。go 在上市的时候也带上 go fmt 命令，用于格式化代码。当时也有不少人反对官方管按语言风格。不过后来上市的编程语言都带上了自己的 fmt 工具，用于格式化代码。可以形成统一的风格对于新上手的朋友来说，当然比较好。只是对于老手，就少了展示技术的机会。"},void 0,!1,void 0,this),`
`,e("p",{children:["Zig 在语言文档也写了一段风格指南。第一眼看 Zig 其实有一种很 js 的感觉，带有很多 js 语言的味道。最明显的是 ",e("code",{children:"const"},void 0,!1,void 0,this)," 声明不可变变量，",e("code",{children:"var"},void 0,!1,void 0,this)," 明显变量。还有不知道是敌是友的 ",e("code",{children:"undefined"},void 0,!1,void 0,this),"。导入外部代码的 ",e("code",{children:"const xxx = @import('yyyy.zig')"},void 0,!1,void 0,this)," 也是一股 js 味道。"]},void 0,!0,void 0,this),`
`,e("p",{children:"下面是正文。"},void 0,!1,void 0,this),`
`,e("h2",{children:"Style Guide"},void 0,!1,void 0,this),`
`,e("h3",{children:"空白"},void 0,!1,void 0,this),`
`,e("ul",{children:[`
`,e("li",{children:"使用 4 个空格的缩进。"},void 0,!1,void 0,this),`
`,e("li",{children:[e("code",{children:"{"},void 0,!1,void 0,this)," 在代码的同一行，除非要执行排版。"]},void 0,!0,void 0,this),`
`,e("li",{children:["小于两个元素的列表/数组，放置到同一行，并且带上一个拖尾 ",e("code",{children:","},void 0,!1,void 0,this),"。"]},void 0,!0,void 0,this),`
`,e("li",{children:"每行宽度的目标是 100 列，但是还得看场景。"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,e("h3",{children:"命名"},void 0,!1,void 0,this),`
`,e("p",{children:["大致三种：",e("code",{children:"camelCaseFunctionName"},void 0,!1,void 0,this),"，",e("code",{children:"TitleCaseTypeName"},void 0,!1,void 0,this),"，",e("code",{children:"snake_case_variable_name"},void 0,!1,void 0,this),"。详情规则如下："]},void 0,!0,void 0,this),`
`,e("ul",{children:[`
`,e("li",{children:["如果 ",e("code",{children:"x"},void 0,!1,void 0,this)," 是一个 ",e("code",{children:"type"},void 0,!1,void 0,this),"（类型）应该写作 ",e("code",{children:"TitleCase"},void 0,!1,void 0,this),"。除非是一个零字段的 ",e("code",{children:"struct"},void 0,!1,void 0,this)," 而且不会被实例化，这种情况下这个 ",e("code",{children:"struct"},void 0,!1,void 0,this)," 应该是一个 ",e("code",{children:"namespace"},void 0,!1,void 0,this),"，应该写作 ",e("code",{children:"snake_case"},void 0,!1,void 0,this),"。"]},void 0,!0,void 0,this),`
`,e("li",{children:["如果 ",e("code",{children:"x"},void 0,!1,void 0,this)," 可以调用，但是 ",e("code",{children:"x"},void 0,!1,void 0,this)," 返回的类型是 ",e("code",{children:"type"},void 0,!1,void 0,this),"，那么 ",e("code",{children:"x"},void 0,!1,void 0,this)," 应该是 ",e("code",{children:"TitleCase"},void 0,!1,void 0,this),"。"]},void 0,!0,void 0,this),`
`,e("li",{children:["如果 ",e("code",{children:"x"},void 0,!1,void 0,this)," 可以调用，并且不是上面的情况，则写作 ",e("code",{children:"camelCase"},void 0,!1,void 0,this),"。"]},void 0,!0,void 0,this),`
`,e("li",{children:["其他场景 ",e("code",{children:"x"},void 0,!1,void 0,this)," 应该写作 ",e("code",{children:"snake_case"},void 0,!1,void 0,this),"。"]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,e("p",{children:"名词的缩写也应该按上面的规则，即使只有两个字母。"},void 0,!1,void 0,this),`
`,e("p",{children:["文件名则分为两类：type、namespace。如果一个源码文件的顶层对象是一个 ",e("code",{children:"struct"},void 0,!1,void 0,this),"，并且是一个 type，用 ",e("code",{children:"TitleCase"},void 0,!1,void 0,this)," 风格，否则用 ",e("code",{children:"snake_case"},void 0,!1,void 0,this)," 风格。目录统一按 ",e("code",{children:"snake_case"},void 0,!1,void 0,this),"。"]},void 0,!0,void 0,this),`
`,e("p",{children:"上面的就是推荐的规则。具体还得看场景。"},void 0,!1,void 0,this),`
`,e("h3",{children:"文件编码"},void 0,!1,void 0,this),`
`,e("ul",{children:[`
`,e("li",{children:"使用 utf-8"},void 0,!1,void 0,this),`
`,e("li",{children:["换行用 ",e("code",{children:"LF"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,e("li",{children:"代码的不使用 Ascii control characters，除非是 LF、CR、HT、U+0009 (HT): U+0000 - U+0008, U+000b - U+000c, U+000e - U+0001f, U+007f."},void 0,!1,void 0,this),`
`,e("li",{children:"不能用非 ASCII Unicode 的字符结尾。"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,e("h2",{children:"JavaScript 的风格又是如何？"},void 0,!1,void 0,this),`
`,e("p",{children:"最近接手了一个 20K 行级别的应用项目，代码都是「随意流」——大小写混合、camelCase/snake_case 混搭。总结就没有没有任何的风格。"},void 0,!1,void 0,this),`
`,e("p",{children:["Rust 也是混合使用，但社区已经有比较完善的习惯用法，除 ",e("code",{children:"struct"},void 0,!1,void 0,this)," 名使用 ",e("code",{children:"TitleCase"},void 0,!1,void 0,this),"，其他基本上是 ",e("code",{children:"snake_case"},void 0,!1,void 0,this),"。Zig 也是三者混用。在用 Zig 写了几行代码，就可以理解为什么有这种约定——主要就是一眼可以看出哪个是方法，可以调用，哪个是变量，哪个是类型。"]},void 0,!0,void 0,this),`
`,e("blockquote",{children:[`
`,e("p",{children:["Zig 的创始人也有很多 JavaScript 使用的经验，第一眼看 Zig 也是一股 JavaScript 味道。比如 ",e("code",{children:"const std = @import('std');"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,e("p",{children:"参考 Zig 的风格指南。我也总结了几条 js 的规则："},void 0,!1,void 0,this),`
`,e("ul",{children:[`
`,e("li",{children:["文件名，顶层导出 default 的，使用 ",e("code",{children:"TitleCase"},void 0,!1,void 0,this),"；顶层导出多个对象的使用 ",e("code",{children:"snake_case"},void 0,!1,void 0,this),`
`,e("ul",{children:[`
`,e("li",{children:[e("code",{children:"export default"},void 0,!1,void 0,this),"的应该只有 class、vue 组件"]},void 0,!0,void 0,this),`
`,e("li",{children:["有 ",e("code",{children:"export default"},void 0,!1,void 0,this),"就不应该再导出其他对象"]},void 0,!0,void 0,this),`
`,e("li",{children:"尽量不使用 default 导出"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,e("li",{children:["目录使用 ",e("code",{children:"snake_case"},void 0,!1,void 0,this),`
`,e("ul",{children:[`
`,e("li",{children:["如何需要，一个目录的入口文件应该是 ",e("code",{children:"index.js"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,e("li",{children:["不打算被外部使用的代码模块、文件，应该写作 ",e("code",{children:"_snake_case"},void 0,!1,void 0,this)," 或 ",e("code",{children:"_TitleCase"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,e("li",{children:["类 class 使用 ",e("code",{children:"TitleCase"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,e("li",{children:["方法使用 ",e("code",{children:"camelCase"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,e("li",{children:["变量使用 ",e("code",{children:"camelCase"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,e("li",{children:["变量或全局变量使用 ",e("code",{children:"SNAKE_CASE"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,e("li",{children:"代码文件统一使用 utf-8"},void 0,!1,void 0,this),`
`,e("li",{children:[`换行用系统默认（windows 是 crlf，linux/osx 是 lf）
`,e("ul",{children:[`
`,e("li",{children:["git 应该设置换行为 ",e("code",{children:"auto"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,e("li",{children:["vue sfc 组件，使用 ",e("code",{children:"TitleCase"},void 0,!1,void 0,this),`
`,e("ul",{children:[`
`,e("li",{children:["因为 vue sfc 组件都是 ",e("code",{children:"export default"},void 0,!1,void 0,this),"，相当于一种类型"]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,e("p",{children:[e("strong",{children:"风格指南没有绝对正确的，关键是使用一套风格并且一直用"},void 0,!1,void 0,this),"。"]},void 0,!0,void 0,this),`
`,e("hr",{},void 0,!1,void 0,this),`
`,e("ul",{children:[`
`,e("li",{children:"2022 年 09 月 16 日 初稿"},void 0,!1,void 0,this),`
`,e("li",{children:"2022 年 10 月 05 日 修改部分措辞"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)}export{o as default};
