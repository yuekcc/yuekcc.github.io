import{e as a,h as n}from"/dist/chunk-n2t7x54v.js";function l(){return n("div",{class:"markdown-body",children:n(a,{children:[n("h1",{children:"go 快速笔记"},void 0,!1,void 0,this),`
`,n("p",{children:n("strong",{children:"下文中的内容不一定全部正确，学习 go 语言请参考官方文档"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:["golang 官网：",n("a",{href:"http://go.dev",children:"http://go.dev"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("h2",{children:"安装"},void 0,!1,void 0,this),`
`,n("p",{children:["windows 下直接到 ",n("a",{href:"https://golang.google.cn",children:"https://golang.google.cn"},void 0,!1,void 0,this),` 下载安装就可以了，推荐直接下载
最新版本。`]},void 0,!0,void 0,this),`
`,n("p",{children:["然后配置 goproxy。可以查看这里：",n("a",{href:"https://goproxy.io/zh/",children:"https://goproxy.io/zh/"},void 0,!1,void 0,this)," 或 ",n("a",{href:"https://goproxy.cn/",children:"https://goproxy.cn/"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("p",{children:"最新版本 go 工具链，已经默认启用 go module。"},void 0,!1,void 0,this),`
`,n("h2",{children:"开始新工程"},void 0,!1,void 0,this),`
`,n("ol",{children:[`
`,n("li",{children:"在硬盘上找个地"},void 0,!1,void 0,this),`
`,n("li",{children:[n("code",{children:"mkdir 工程目录"},void 0,!1,void 0,this),"，目录一般取一些比较简单又体现核心功能的小写名称，如 ",n("code",{children:"somepackage"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("li",{children:n("code",{children:"cd 工程目录"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("li",{children:[n("code",{children:"go mod init 包名"},void 0,!1,void 0,this),"，包名一般是域名 + 工程目录名，比如 ",n("code",{children:"github.com/somepackage"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("h2",{children:"第一个工程"},void 0,!1,void 0,this),`
`,n("p",{children:"新建一个 main.go 文件，写入："},void 0,!1,void 0,this),`
`,n("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:n("code",{className:"language-go",children:[n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"package"},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:" main"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"import"},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:' "'},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:"fmt"},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:'"'},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"func"},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:" main"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"() {"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"\tfmt."},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:"Println"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"("},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:'"hello, world"'},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:")"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"}"},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:["在 shell 中执行：",n("code",{children:"go run main.go"},void 0,!1,void 0,this)," 就可以看到输出："]},void 0,!0,void 0,this),`
`,n("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:n("code",{className:"language-sh",children:[n("span",{className:"line",children:[n("span",{style:{color:"#B392F0"},children:"$"},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:" go"},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:" run"},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:" main.go"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#B392F0"},children:"hello,"},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:" world"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#B392F0"},children:"$"},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:["执行 ",n("code",{children:"go build"},void 0,!1,void 0,this)," 就可以编译出执行文件。"]},void 0,!0,void 0,this),`
`,n("p",{children:`go 是一种强类型，具有自动内存管理、高并发支持的编程语言。golang 实现的软件
可以编译为独立的执行文件。目前 golang 大量应用于云服务、微服务、中间件的场景下。`},void 0,!1,void 0,this),`
`,n("blockquote",{children:[`
`,n("p",{children:"私货评价："},void 0,!1,void 0,this),`
`,n("p",{children:`golang 的语法算是比较简洁，容易上手。特别是有 c/c++ 学习经验，会感觉
特别熟悉。golang 初始团队就有 c 语言的创始人。性能虽然比不上 java，但总体
没有落后太多。而且在真实项目中，高性能的代码往往会使用 c++ 实现一遍又一遍。`},void 0,!1,void 0,this),`
`,n("p",{children:`目前来看，go 和 java 大部分应用场景是重合的。java 最大优势是几乎覆盖了所有应用场景，而且有成熟的解决方案。而 go
因为是编译到二进制文件直接执行，在内存使用、启动、软件体积方面就比 java 有优势。在容器化逐渐盛行的今天就变得更有吸引力。`},void 0,!1,void 0,this),`
`,n("p",{children:"go 1.18 将会启用泛型支持，部分场景下性能也会有所提升。相信这对于 golang 进入云以外的场景有帮助。"},void 0,!1,void 0,this),`
`,n("p",{children:`golang 另一个对手是 rust。rust 自诞生就面向更低级别的系统层应用开发，比如操作系统、编程语言、浏览器等。go 侧重于低层之上
的应用开发。`},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("h2",{children:"语言元素"},void 0,!1,void 0,this),`
`,n("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:n("code",{className:"language-go",children:[n("span",{className:"line",children:n("span",{style:{color:"#6A737D"},children:"// package 关键字声明这一个 main 包"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#6A737D"},children:"// golang 项目中，应该只有一个 main 包"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"package"},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:" main"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#6A737D"},children:"// import 语句用于导入外部包。这些包可能是内置在标准库中，也可以是第三方提供的"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"import"},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:' "'},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:"fmt"},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:'"'},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#6A737D"},children:"// main 函数，传统的程序入口"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#6A737D"},children:"// go 实现的软件，入口总是 main.main（main 包中的 main 函数）"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#6A737D"},children:"// func 是声明函数的关键字，无返回值时，不用声明类型"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#6A737D"},children:"// go 中的函数可以是包级别，也有对象级别（习惯叫对象的方法）"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"func"},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:" main"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"() {"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#6A737D"},children:"  // 调用外部包中的函数"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#6A737D"},children:"  // 外部包在习惯上，包名总是小写字母"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#6A737D"},children:"  // 包中函数的外部可见性是通过大写字母开头来约定的，除函数，也可以 struct、变量、常量等"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#6A737D"},children:"  // go 编译器会自动插入分号，所以大部分情况下是不需要写分号的"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"\tfmt."},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:"Println"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"("},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:'"hello, world"'},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:")"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"}"},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,n("h2",{children:"类型"},void 0,!1,void 0,this),`
`,n("ul",{children:[`
`,n("li",{children:"空值 nil"},void 0,!1,void 0,this),`
`,n("li",{children:"整形数值：int（取决于操作系统）、int8、int16、int32、int6、uint8、uint16、uint32、..."},void 0,!1,void 0,this),`
`,n("li",{children:"浮点数值：float32、float64"},void 0,!1,void 0,this),`
`,n("li",{children:"字节：byte (等价于 uint8)"},void 0,!1,void 0,this),`
`,n("li",{children:"字符串：string"},void 0,!1,void 0,this),`
`,n("li",{children:"布尔值：boolean"},void 0,!1,void 0,this),`
`,n("li",{children:"指针： *int 之类"},void 0,!1,void 0,this),`
`,n("li",{children:"数组 array"},void 0,!1,void 0,this),`
`,n("li",{children:"切片 slice"},void 0,!1,void 0,this),`
`,n("li",{children:"字典 map"},void 0,!1,void 0,this),`
`,n("li",{children:"结构体 struct"},void 0,!1,void 0,this),`
`,n("li",{children:"函数"},void 0,!1,void 0,this),`
`,n("li",{children:"接口（interface）"},void 0,!1,void 0,this),`
`,n("li",{children:"通道 (channel)"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("p",{children:n("s",{children:"引用类型是指，如果一个将一个引用类型赋值给一个变量，这个变量实际拿到的一个内存地址，数据本身并在变量上。"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("blockquote",{children:[`
`,n("p",{children:"关于 go 中的值类型及引用类型，我的理解："},void 0,!1,void 0,this),`
`,n("p",{children:`go 中的数据类型，大概可以分为引用类型和值类型。引用类型是指变量本身并不持有该数据，
而是指向内存中的一个地址，最经典的就是 slice、map。处理器要取得这个变量的数据，起码需要两次或以上的内存操作。
值类型是针变量持有数据本身，处理器只需要读取一次内存地址。`},void 0,!1,void 0,this),`
`,n("p",{children:`在传入函数时，值类型是 clone 传入的，即传入函数内部时，复制了一次数据。而引用类型在传入函数时，是移动进去，
由于 go 是没有不可变数据类型的，在函数内部对于该数据的修改会影响原有的数据。这也是带 gc 语言的常用处理方法，可以减少 gc 压力。`},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("h2",{children:"变量声明"},void 0,!1,void 0,this),`
`,n("p",{children:"go 中声明一个变量有两种写法："},void 0,!1,void 0,this),`
`,n("ul",{children:[`
`,n("li",{children:["声明一个变量，指定类型，不指定初始值：",n("code",{children:"var i int"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("li",{children:["声明一个变量，并指定初始\uD840\uDE4A：",n("code",{children:"i := 32"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("p",{children:["第二种写法算是一种语法糖。首先 go 具体有一定程度的类型推断能力，可以从 ",n("code",{children:":="},void 0,!1,void 0,this)," 右侧的语句推断出类型。"]},void 0,!0,void 0,this),`
`,n("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:n("code",{className:"language-go",children:[n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"var"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" i "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"int"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" ="},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:" 32"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#6A737D"},children:"// 可以写为"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"i "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:":="},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:" 32"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,n("blockquote",{children:[`
`,n("p",{children:["题外：",n("strong",{children:"变量尽快初始化"},void 0,!1,void 0,this),"本身也是一种比较好的实践。golang 中采用的后置类型的变量声明，官方说是可以解决一些 c 语言中奇怪问题，二是结合类型推导增加手感。"]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("p",{children:"golang，如果不在声明变量设置初始值，将会自动使用“零”值进行初始化："},void 0,!1,void 0,this),`
`,n("ul",{children:[`
`,n("li",{children:["整形数值：",n("code",{children:"0"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("li",{children:["浮点数值：",n("code",{children:"0.0"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("li",{children:["字节：",n("code",{children:"0"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("li",{children:["字符串：",n("code",{children:'""'},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("li",{children:["布尔值：",n("code",{children:"false"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("p",{children:"golang 中声明引用的类型就有几种不同的写法："},void 0,!1,void 0,this),`
`,n("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:n("code",{className:"language-go",children:[n("span",{className:"line",children:n("span",{style:{color:"#6A737D"},children:"// 数组"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"arr "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:":="},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" ["},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"5"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"]"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"int"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"{}"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#6A737D"},children:"// 切片"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"slice1 "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:":="},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" []"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"int"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"{}"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"slice2 "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:":="},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:" make"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"([]"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"int"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:", "},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"0"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:") "},void 0,!1,void 0,this),n("span",{style:{color:"#6A737D"},children:"// 长度为 0 的切片"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"slice3 "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:":="},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:" make"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"([]"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"int"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:", "},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"5"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:", "},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"10"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:") "},void 0,!1,void 0,this),n("span",{style:{color:"#6A737D"},children:"// 长度为 5，容量为 10 的切片"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#6A737D"},children:"// map"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"m1 "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:":="},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" map"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"["},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"string"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"]"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"string"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" {"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#9ECBFF"},children:'  "name1"'},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:": "},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:'"tom"'},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:","},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#9ECBFF"},children:'  "name2"'},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:": "},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:'"cat"'},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:","},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"}"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"m2 "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:":="},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:" make"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"("},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"map"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"["},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"string"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"]"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"string"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:")"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#6A737D"},children:"// 指针"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"str "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:":="},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:' "hello, world"'},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"p1 "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:":="},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" &"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"str "},void 0,!1,void 0,this),n("span",{style:{color:"#6A737D"},children:"// 取得地址"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#6A737D"},children:"// 结构体"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#6A737D"},children:"// 结构体需要先声明结构体"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"type"},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:" Person"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" struct"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" {"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"  name "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"string"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"}"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"p1 "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:":="},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" &"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"Person {"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"  name: "},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:'"Tom"'},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:","},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"}"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"p2 "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:":="},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:" new"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"("},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:"Person"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:")"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"p2.name "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"="},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:' "Tom"'},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#6A737D"},children:"// 接口是一组方法的集合，不能实例化"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"type"},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:" Say"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" interface"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" {"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#B392F0"},children:"  say"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"() "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"string"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"}"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#6A737D"},children:"// 函数"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#6A737D"},children:"// 函数支持多返回值，特别是 go 的异常处理比较特殊，基本上使用后置的错误码"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#6A737D"},children:"// golang 中 function is first class，函数名可以作为变量使用"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"func"},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:" sayHello"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"() ("},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"string"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"， "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"error"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:") {"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"  return"},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:' "hello, world"'},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:", "},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"nil"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"}"},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,n("h2",{children:"函数"},void 0,!1,void 0,this),`
`,n("p",{children:"由上面的例子可以看出，golang 的入口就是一个函数。这点就比较接近 c 语言，至少与 java 的代码组织方式有明显区别。"},void 0,!1,void 0,this),`
`,n("p",{children:"函数声明，可以为分为一般场景、匿名函数、方法三种。go 语言的函数是支持闭包功能，可以捕捉函数外部的数据。"},void 0,!1,void 0,this),`
`,n("h3",{children:"一般声明"},void 0,!1,void 0,this),`
`,n("p",{children:"大部分情况下，函数都是先声明后使用的。有一个需要注意，同一个包中，函数声明的位置、所在文件是无区别的"},void 0,!1,void 0,this),`
`,n("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:n("code",{className:"language-go",children:[n("span",{className:"line",children:n("span",{style:{color:"#6A737D"},children:"// 声明 sayHello 函数"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"func"},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:" sayHello"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"("},void 0,!1,void 0,this),n("span",{style:{color:"#FFAB70"},children:"name"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" string"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:") ("},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"string"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"， "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"error"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:") {"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"  return"},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:' "hello, "'},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" +"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" name, "},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"nil"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"}"},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:`golang 是带有 gc 的编程语言，在编译代码时，golang 会通过逃逸分析，决定函数内部声明的变量是放置在栈内存中还是堆内存中。所以
golang 是可以直接返回内部变量。`},void 0,!1,void 0,this),`
`,n("p",{children:`对于结构体，习惯上使用指针传入到函数中，这样会减少内存复制。golang 目前并没有提供 getter、setter 这种属性保持机制，因此在需要修改参数的
字段时多加注意。`},void 0,!1,void 0,this),`
`,n("h3",{children:"匿名函数"},void 0,!1,void 0,this),`
`,n("p",{children:"匿名函数的用法就比较接近 js 中的写法"},void 0,!1,void 0,this),`
`,n("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:n("code",{className:"language-go",children:[n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"func"},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:" main"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"() {"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#6A737D"},children:"  // 一个函数内部声明另一个函数，并赋值给 sayHelloInner 变量"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"  sayHelloInner "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:":="},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" func"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"("},void 0,!1,void 0,this),n("span",{style:{color:"#FFAB70"},children:"name"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" string"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:") ("},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"string"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:", "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"error"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:") {"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"    return"},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:' "hello, "'},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" +"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" name, "},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"nil"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"  }"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"}"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"var"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" ("},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#6A737D"},children:"  // 全局声明了一个匿名函数，并赋值给 sayHelloGlobal"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#6A737D"},children:"  // sayHelloGlobal 的类型就是 func(name string) (string, error)"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"  sayHelloGlobal "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"func"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"("},void 0,!1,void 0,this),n("span",{style:{color:"#FFAB70"},children:"name"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" string"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:") ("},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"string"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:", "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"error"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:") "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"="},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" func"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"("},void 0,!1,void 0,this),n("span",{style:{color:"#FFAB70"},children:"name"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" string"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:") ("},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"string"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:", "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"error"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:") {"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"    return"},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:' "hello, "'},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" +"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" name, "},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"nil"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"  }"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:")"},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,n("h3",{children:"方法"},void 0,!1,void 0,this),`
`,n("p",{children:"方法是一种习惯叫法，一般是指对象自身带有函数。golang 通过支持方法的函数声明来支持面向对象编程范式。"},void 0,!1,void 0,this),`
`,n("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:n("code",{className:"language-go",children:[n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"type"},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:" Person"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" struct"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" {"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"  name "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"string"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"}"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"func"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" ("},void 0,!1,void 0,this),n("span",{style:{color:"#FFAB70"},children:"p "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"*"},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:"Person"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:") "},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:"IntroduceMyself"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"() "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"string"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" {"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"  return"},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:` "Hi, I'm "`},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" +"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" p.name"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"}"},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:`方法的声明区别于一般声明。方法中可以包括接收者部分。接收者类似于 java 中的 this。golang 通过接收者，可以访问自身的数据。
如果需要修改对象自身的数据，需要将接收者声明为指针类型。`},void 0,!1,void 0,this),`
`,n("h2",{children:"并发"},void 0,!1,void 0,this),`
`,n("p",{children:`golang 是基于 mpg (machine - processor - goroutine) 实现的并发支持，是一种轻量级线程机制。并发也是 golang 比较重要
的特性之一。`},void 0,!1,void 0,this),`
`,n("p",{children:`golang 推荐使用 channel 来同步数据。channel 是一种内置的消息队列功能，分为只写、只读、读写三种基本类型，也可以配置
缓存大小。`},void 0,!1,void 0,this),`
`,n("p",{children:["启动一个 goroutine 只需要在调用函数时增加 ",n("code",{children:"go"},void 0,!1,void 0,this)," 关键字："]},void 0,!0,void 0,this),`
`,n("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:n("code",{className:"language-go",children:n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"go"},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:" sayHello"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"()"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:"golang 的 runtime 会自行决定这个线程由哪个 cpu 上执行。"},void 0,!1,void 0,this),`
`,n("p",{children:["golang 通过 ",n("code",{children:"select"},void 0,!1,void 0,this)," 可以将各个 channel 组合为多通道的消息队列，让并发的流程更接近多消费者多生产者的通信模型。"]},void 0,!0,void 0,this),`
`,n("h2",{children:"错误处理"},void 0,!1,void 0,this),`
`,n("p",{children:"golang 没有采用异常作为错误处理的基础设施。异常会引入一些复杂的处理流程，这就与 golang 的简洁背道而驰。"},void 0,!1,void 0,this),`
`,n("blockquote",{children:[`
`,n("p",{children:`私货：不过 golang 的异常处理也被人诟病，因为内置的支持过于简陋。因为 error 往往只知道一个字符串提示，这就让程序无法实现一些
错误处理。`},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("p",{children:["golang 标准库中自带有一个 ",n("code",{children:"error"},void 0,!1,void 0,this)," 接口，实现 ",n("code",{children:"Error() string"},void 0,!1,void 0,this),` 方法则可以认为是一个错误。golang 的函数调用如果返回了 error，
总是需要首先检查的。有点类似于 error first 的思想。`]},void 0,!0,void 0,this),`
`,n("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:n("code",{className:"language-go",children:[n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"func"},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:" myHalt"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"() ("},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"int"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:", "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"error"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:") {"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"  return"},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:" 0"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:", errors."},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:"New"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"("},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:"'"},void 0,!1,void 0,this),n("span",{style:{color:"#FDAEB7",fontStyle:"italic"},children:"some error"},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:"'"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:")"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"}"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"func"},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:" main"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"() {"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"  result, err "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:":="},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:" myHalt"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"()"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"  if"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" err "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"!="},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:" nil"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" {"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"    log."},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:"Println"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"(err)"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"    os."},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:"Exit"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"("},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"-"},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"1"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:")"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"  }"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#6A737D"},children:"  // no error and do something"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"}"},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,n("h2",{children:"标准库"},void 0,!1,void 0,this),`
`,n("p",{children:"常用的标准库："},void 0,!1,void 0,this),`
`,n("ul",{children:[`
`,n("li",{children:n("code",{children:"fmt"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("li",{children:n("code",{children:"strings"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("li",{children:n("code",{children:"log"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("li",{children:n("code",{children:"os"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("li",{children:n("code",{children:"http"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("li",{children:n("code",{children:"sort"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("li",{children:n("code",{children:"bytes"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("h2",{children:"测试"},void 0,!1,void 0,this),`
`,n("p",{children:"go 自带一套测试框架。可以支持一般的单元测试，也支持性能测试。这里只介绍单元测试。"},void 0,!1,void 0,this),`
`,n("p",{children:["首先是文件名。go 对源代码文件的命名是一个约定。命名一般采用小写，编译器对于 ",n("code",{children:"_xxxx.go"},void 0,!1,void 0,this)," 这样的后缀会做一些特殊条件，可以达到条件编译的效果。"]},void 0,!0,void 0,this),`
`,n("p",{children:["比如：",n("code",{children:"example_windows.go"},void 0,!1,void 0,this)," 是针对 windows 操作系统的实现版本，",n("code",{children:"example_linux.go"},void 0,!1,void 0,this)," 是针对 linux 系统的实现版本。还可以针对处理器实现条件编译。"]},void 0,!0,void 0,this),`
`,n("p",{children:["go 的编译器，对于 ",n("code",{children:"_test.go"},void 0,!1,void 0,this)," 这种后缀的源代码文件，会认为是一个测试代码。执行 ",n("code",{children:"go test"},void 0,!1,void 0,this)," 命令将会执行测试。"]},void 0,!0,void 0,this),`
`,n("p",{children:["单元测试是一个函数，以 ",n("code",{children:"TestXXXXXXX(t *testing.T)"},void 0,!1,void 0,this)," 函数签名。比如："]},void 0,!0,void 0,this),`
`,n("p",{children:"在 main.go 中，有一个函数："},void 0,!1,void 0,this),`
`,n("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:n("code",{className:"language-go",children:[n("span",{className:"line",children:n("span",{style:{color:"#6A737D"},children:"// main.go"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"func"},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:" hi"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"() "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"string"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" {"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"  return"},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:' "hi"'},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"}"},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:["针对这个函数单元测试需要写在另外的文件中，如：",n("code",{children:"main_test.go"},void 0,!1,void 0,this),"，具体实现就是："]},void 0,!0,void 0,this),`
`,n("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:n("code",{className:"language-go",children:[n("span",{className:"line",children:n("span",{style:{color:"#6A737D"},children:"// main_test.go"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"func"},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:" TestHi"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"("},void 0,!1,void 0,this),n("span",{style:{color:"#FFAB70"},children:"t"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" *"},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:"testing"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"."},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:"T"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:") {"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"  result "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:":="},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:" hi"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"()"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"  if"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" result "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"=="},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:' ""'},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" {"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"    t."},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:"Fatal"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"("},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:'"should not be empty"'},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:")"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"  }"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"}"},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,n("hr",{},void 0,!1,void 0,this),`
`,n("ul",{children:[`
`,n("li",{children:"2021 年 10 月 14 日：增加库、测试；修改一些内容。"},void 0,!1,void 0,this),`
`,n("li",{children:"2021 年 10 月 3 日：初稿"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)}export{l as default};
