import{e as n,h as a}from"/dist/chunk-n2t7x54v.js";function e(){return a("div",{class:"markdown-body",children:a(n,{children:[a("h1",{children:"我的 java 笔记"},void 0,!1,void 0,this),`
`,a("p",{children:a("s",{children:"是的，我又双开始学习 java。这次应该要认真点。"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,a("p",{children:"从不一样的角度认真学习 java。"},void 0,!1,void 0,this),`
`,a("p",{children:"[TOC]"},void 0,!1,void 0,this),`
`,a("h2",{children:"上手"},void 0,!1,void 0,this),`
`,a("h3",{children:"安装 jdk"},void 0,!1,void 0,this),`
`,a("p",{children:["jdk 可以在 ",a("a",{href:"https://www.injdk.cn/",children:"https://www.injdk.cn/"},void 0,!1,void 0,this),` 下载。学习阶段推荐使用最新的 LTS 版本。Windows 下就一路回车大法，然后
就可以直接使用了。其他操作系统找文档看吧。`]},void 0,!0,void 0,this),`
`,a("p",{children:"自 jdk8 开始，o 家对 jdk 的授权发生了变化。于是就出现了大厂自己分发 jdk 的情况，也有开源组织分发 jdk。所以商业项目还是要认真审视一下这些 xxx jdk 的风险。"},void 0,!1,void 0,this),`
`,a("h3",{children:"用 class 组织代码"},void 0,!1,void 0,this),`
`,a("p",{children:["java 总是用 class 来组织代码，一个 class 可以包含多个方法和多个静态方法。Java 程序的入口一般是一个静态的 ",a("code",{children:"main"},void 0,!1,void 0,this),` 方法，方法
签名：`,a("code",{children:"public static void main(String[] args)"},void 0,!1,void 0,this),"。这个方法需要放置到一个 ",a("code",{children:"public"},void 0,!1,void 0,this)," 的 ",a("code",{children:"class"},void 0,!1,void 0,this)," 中。"]},void 0,!0,void 0,this),`
`,a("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:a("code",{className:"language-java",children:[a("span",{className:"line",children:[a("span",{style:{color:"#F97583"},children:"package"},void 0,!1,void 0,this),a("span",{style:{color:"#E1E4E8"},children:" space.lambdadriver.demo;"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,a("span",{className:"line"},void 0,!1,void 0,this),`
`,a("span",{className:"line",children:[a("span",{style:{color:"#F97583"},children:"public"},void 0,!1,void 0,this),a("span",{style:{color:"#F97583"},children:" class"},void 0,!1,void 0,this),a("span",{style:{color:"#B392F0"},children:" Hello"},void 0,!1,void 0,this),a("span",{style:{color:"#E1E4E8"},children:" {"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,a("span",{className:"line",children:[a("span",{style:{color:"#F97583"},children:"    public"},void 0,!1,void 0,this),a("span",{style:{color:"#F97583"},children:" static"},void 0,!1,void 0,this),a("span",{style:{color:"#F97583"},children:" void"},void 0,!1,void 0,this),a("span",{style:{color:"#B392F0"},children:" main"},void 0,!1,void 0,this),a("span",{style:{color:"#E1E4E8"},children:"("},void 0,!1,void 0,this),a("span",{style:{color:"#F97583"},children:"String"},void 0,!1,void 0,this),a("span",{style:{color:"#E1E4E8"},children:"[] "},void 0,!1,void 0,this),a("span",{style:{color:"#FFAB70"},children:"args"},void 0,!1,void 0,this),a("span",{style:{color:"#E1E4E8"},children:") {"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,a("span",{className:"line",children:[a("span",{style:{color:"#E1E4E8"},children:"        System.out."},void 0,!1,void 0,this),a("span",{style:{color:"#B392F0"},children:"println"},void 0,!1,void 0,this),a("span",{style:{color:"#E1E4E8"},children:"("},void 0,!1,void 0,this),a("span",{style:{color:"#9ECBFF"},children:'"Hello, world"'},void 0,!1,void 0,this),a("span",{style:{color:"#E1E4E8"},children:");"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,a("span",{className:"line",children:a("span",{style:{color:"#E1E4E8"},children:"    }"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,a("span",{className:"line",children:a("span",{style:{color:"#E1E4E8"},children:"}"},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,a("p",{children:["将上面的代码保存为 ",a("code",{children:"Hello.java"},void 0,!1,void 0,this),"，打开 shell，执行下面的命令就可以看到运行效果："]},void 0,!0,void 0,this),`
`,a("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:a("code",{className:"language-sh",children:[a("span",{className:"line",children:[a("span",{style:{color:"#B392F0"},children:"$"},void 0,!1,void 0,this),a("span",{style:{color:"#9ECBFF"},children:" java"},void 0,!1,void 0,this),a("span",{style:{color:"#9ECBFF"},children:" Hello.java"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,a("span",{className:"line",children:[a("span",{style:{color:"#B392F0"},children:"Hello,"},void 0,!1,void 0,this),a("span",{style:{color:"#9ECBFF"},children:" world"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,a("span",{className:"line"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,a("p",{children:["我用的是 jdk17，可以直接执行 java 源码文件。一般情况下 java 工程是先用 ",a("code",{children:"javac"},void 0,!1,void 0,this)," 命令进行编译，然后由 ",a("code",{children:"java"},void 0,!1,void 0,this),` 命令执行。
实际项目中，java 都是使用 maven 或 gradle 进行管理。`]},void 0,!0,void 0,this),`
`,a("h2",{children:"工程化"},void 0,!1,void 0,this),`
`,a("h3",{children:"javac 命令"},void 0,!1,void 0,this),`
`,a("p",{children:"javac 可以将 java 源代码（.java 文件）编译为 class 字节文件（.class），供 jvm 执行。常见命令参数："},void 0,!1,void 0,this),`
`,a("ul",{children:[`
`,a("li",{children:[a("code",{children:"javac -d <目录> HelloWorld.java"},void 0,!1,void 0,this)," 编译 java 源代码文件，并将生成的字节码放到 ",a("code",{children:"<目录>"},void 0,!1,void 0,this)," 里。如果代码里包含 ",a("code",{children:"package"},void 0,!1,void 0,this),` 语句
会按 `,a("code",{children:"."},void 0,!1,void 0,this)," 分割后，放到多级目录中。"]},void 0,!0,void 0,this),`
`,a("li",{children:[a("code",{children:"javac -g"},void 0,!1,void 0,this)," 生成调试信息"]},void 0,!0,void 0,this),`
`,a("li",{children:[a("code",{children:"javac -version"},void 0,!1,void 0,this)," 打印版本信息"]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,a("p",{children:["比如上面的例子，可能通过下面的命令生成字节，并保存到 ",a("code",{children:"lib"},void 0,!1,void 0,this)," 目录下："]},void 0,!0,void 0,this),`
`,a("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:a("code",{className:"language-sh",children:[a("span",{className:"line",children:[a("span",{style:{color:"#B392F0"},children:"$"},void 0,!1,void 0,this),a("span",{style:{color:"#9ECBFF"},children:" javac"},void 0,!1,void 0,this),a("span",{style:{color:"#79B8FF"},children:" -d"},void 0,!1,void 0,this),a("span",{style:{color:"#9ECBFF"},children:" lib"},void 0,!1,void 0,this),a("span",{style:{color:"#9ECBFF"},children:" Hello.java"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,a("span",{className:"line",children:[a("span",{style:{color:"#B392F0"},children:"$"},void 0,!1,void 0,this),a("span",{style:{color:"#9ECBFF"},children:" ls"},void 0,!1,void 0,this),a("span",{style:{color:"#9ECBFF"},children:" lib/space/lambdadriver/demo/"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,a("span",{className:"line",children:a("span",{style:{color:"#B392F0"},children:"Hello.class"},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,a("h3",{children:"java 命令"},void 0,!1,void 0,this),`
`,a("p",{children:"java 命令用于执行字节码。常见参数："},void 0,!1,void 0,this),`
`,a("ul",{children:[`
`,a("li",{children:[a("code",{children:"java -version"},void 0,!1,void 0,this)," 打印版本号"]},void 0,!0,void 0,this),`
`,a("li",{children:[a("code",{children:"java [-options] class [args...]"},void 0,!1,void 0,this)," 执行类"]},void 0,!0,void 0,this),`
`,a("li",{children:[a("code",{children:"java [-options] -jar jarFile [args]"},void 0,!1,void 0,this)," 执行 jar 包"]},void 0,!0,void 0,this),`
`,a("li",{children:[a("code",{children:"java -classpath <目录> <包名>.<类名>"},void 0,!1,void 0,this)," 执行特定的类"]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,a("p",{children:["如上面的例子，字节码已经编译到 ",a("code",{children:"lib/space/lambdadriver/demo"},void 0,!1,void 0,this)," 目录下。用 java 命令执行这个字节码，可以输入下面的命令："]},void 0,!0,void 0,this),`
`,a("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:a("code",{className:"language-sh",children:[a("span",{className:"line",children:[a("span",{style:{color:"#B392F0"},children:"$"},void 0,!1,void 0,this),a("span",{style:{color:"#9ECBFF"},children:" java"},void 0,!1,void 0,this),a("span",{style:{color:"#79B8FF"},children:" -classpath"},void 0,!1,void 0,this),a("span",{style:{color:"#9ECBFF"},children:" lib"},void 0,!1,void 0,this),a("span",{style:{color:"#9ECBFF"},children:" space.lambdadriver.demo.Hello"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,a("span",{className:"line",children:[a("span",{style:{color:"#B392F0"},children:"Hello,"},void 0,!1,void 0,this),a("span",{style:{color:"#9ECBFF"},children:" world"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,a("h3",{children:"多文件工程"},void 0,!1,void 0,this),`
`,a("p",{children:"首先是创建两个源代码文件："},void 0,!1,void 0,this),`
`,a("p",{children:[a("code",{children:"Words.java"},void 0,!1,void 0,this),"："]},void 0,!0,void 0,this),`
`,a("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:a("code",{className:"language-java",children:[a("span",{className:"line",children:[a("span",{style:{color:"#F97583"},children:"package"},void 0,!1,void 0,this),a("span",{style:{color:"#E1E4E8"},children:" space.lambdadriver.demo;"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,a("span",{className:"line"},void 0,!1,void 0,this),`
`,a("span",{className:"line",children:[a("span",{style:{color:"#F97583"},children:"public"},void 0,!1,void 0,this),a("span",{style:{color:"#F97583"},children:" class"},void 0,!1,void 0,this),a("span",{style:{color:"#B392F0"},children:" Words"},void 0,!1,void 0,this),a("span",{style:{color:"#E1E4E8"},children:" {"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,a("span",{className:"line",children:[a("span",{style:{color:"#F97583"},children:"    public"},void 0,!1,void 0,this),a("span",{style:{color:"#E1E4E8"},children:" String "},void 0,!1,void 0,this),a("span",{style:{color:"#B392F0"},children:"hello"},void 0,!1,void 0,this),a("span",{style:{color:"#E1E4E8"},children:"() {"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,a("span",{className:"line",children:[a("span",{style:{color:"#F97583"},children:"        return"},void 0,!1,void 0,this),a("span",{style:{color:"#9ECBFF"},children:' "Hello world for Words Class"'},void 0,!1,void 0,this),a("span",{style:{color:"#E1E4E8"},children:";"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,a("span",{className:"line",children:a("span",{style:{color:"#E1E4E8"},children:"    }"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,a("span",{className:"line",children:a("span",{style:{color:"#E1E4E8"},children:"}"},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,a("p",{children:[a("code",{children:"Hello.java"},void 0,!1,void 0,this),":"]},void 0,!0,void 0,this),`
`,a("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:a("code",{className:"language-java",children:[a("span",{className:"line",children:[a("span",{style:{color:"#F97583"},children:"package"},void 0,!1,void 0,this),a("span",{style:{color:"#E1E4E8"},children:" space.lambdadriver.demo;"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,a("span",{className:"line"},void 0,!1,void 0,this),`
`,a("span",{className:"line",children:[a("span",{style:{color:"#F97583"},children:"public"},void 0,!1,void 0,this),a("span",{style:{color:"#F97583"},children:" class"},void 0,!1,void 0,this),a("span",{style:{color:"#B392F0"},children:" Hello"},void 0,!1,void 0,this),a("span",{style:{color:"#E1E4E8"},children:" {"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,a("span",{className:"line",children:[a("span",{style:{color:"#F97583"},children:"    public"},void 0,!1,void 0,this),a("span",{style:{color:"#F97583"},children:" static"},void 0,!1,void 0,this),a("span",{style:{color:"#F97583"},children:" void"},void 0,!1,void 0,this),a("span",{style:{color:"#B392F0"},children:" main"},void 0,!1,void 0,this),a("span",{style:{color:"#E1E4E8"},children:"("},void 0,!1,void 0,this),a("span",{style:{color:"#F97583"},children:"String"},void 0,!1,void 0,this),a("span",{style:{color:"#E1E4E8"},children:"[] "},void 0,!1,void 0,this),a("span",{style:{color:"#FFAB70"},children:"args"},void 0,!1,void 0,this),a("span",{style:{color:"#E1E4E8"},children:") {"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,a("span",{className:"line",children:[a("span",{style:{color:"#F97583"},children:"        var"},void 0,!1,void 0,this),a("span",{style:{color:"#E1E4E8"},children:" words "},void 0,!1,void 0,this),a("span",{style:{color:"#F97583"},children:"="},void 0,!1,void 0,this),a("span",{style:{color:"#F97583"},children:" new"},void 0,!1,void 0,this),a("span",{style:{color:"#B392F0"},children:" Words"},void 0,!1,void 0,this),a("span",{style:{color:"#E1E4E8"},children:"(); "},void 0,!1,void 0,this),a("span",{style:{color:"#6A737D"},children:"// 创建 Words 对象"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,a("span",{className:"line",children:[a("span",{style:{color:"#E1E4E8"},children:"        System.out."},void 0,!1,void 0,this),a("span",{style:{color:"#B392F0"},children:"println"},void 0,!1,void 0,this),a("span",{style:{color:"#E1E4E8"},children:"(words."},void 0,!1,void 0,this),a("span",{style:{color:"#B392F0"},children:"hello"},void 0,!1,void 0,this),a("span",{style:{color:"#E1E4E8"},children:"()); "},void 0,!1,void 0,this),a("span",{style:{color:"#6A737D"},children:"// 调用 hello 方法"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,a("span",{className:"line",children:a("span",{style:{color:"#E1E4E8"},children:"    }"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,a("span",{className:"line",children:a("span",{style:{color:"#E1E4E8"},children:"}"},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,a("p",{children:["由上面的代码可以看出在 ",a("code",{children:"main"},void 0,!1,void 0,this)," 方法中创建了一个 ",a("code",{children:"Words"},void 0,!1,void 0,this)," 对象，并调用了其中的 ",a("code",{children:"hello"},void 0,!1,void 0,this)," 方法。"]},void 0,!0,void 0,this),`
`,a("p",{children:"编译并执行这个 java 程序，可以执行这些命令："},void 0,!1,void 0,this),`
`,a("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:a("code",{className:"language-sh",children:[a("span",{className:"line",children:[a("span",{style:{color:"#B392F0"},children:"$"},void 0,!1,void 0,this),a("span",{style:{color:"#9ECBFF"},children:" javac"},void 0,!1,void 0,this),a("span",{style:{color:"#79B8FF"},children:" -d"},void 0,!1,void 0,this),a("span",{style:{color:"#9ECBFF"},children:" lib"},void 0,!1,void 0,this),a("span",{style:{color:"#9ECBFF"},children:" Hello.java"},void 0,!1,void 0,this),a("span",{style:{color:"#9ECBFF"},children:" Words.java"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,a("span",{className:"line",children:[a("span",{style:{color:"#B392F0"},children:"$"},void 0,!1,void 0,this),a("span",{style:{color:"#9ECBFF"},children:" java"},void 0,!1,void 0,this),a("span",{style:{color:"#79B8FF"},children:" -classpath"},void 0,!1,void 0,this),a("span",{style:{color:"#9ECBFF"},children:" lib"},void 0,!1,void 0,this),a("span",{style:{color:"#9ECBFF"},children:" space.lambdadriver.demo.Hello"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,a("span",{className:"line",children:[a("span",{style:{color:"#B392F0"},children:"Hello"},void 0,!1,void 0,this),a("span",{style:{color:"#9ECBFF"},children:" world"},void 0,!1,void 0,this),a("span",{style:{color:"#9ECBFF"},children:" for"},void 0,!1,void 0,this),a("span",{style:{color:"#9ECBFF"},children:" Words"},void 0,!1,void 0,this),a("span",{style:{color:"#9ECBFF"},children:" Class"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,a("span",{className:"line"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,a("p",{children:`估计是习惯原因吧。javac 与 c/c++ 中的 cc 对应，需要用户指定相关的源代码文件，javac 才能找到相应的符号。如果需要编译大量源码和依赖第三方包
的话，相当麻烦。`},void 0,!1,void 0,this),`
`,a("blockquote",{children:[`
`,a("p",{children:"与 js 的构建工具不同，javac 并不会按 import 语句自动去引入相应的文件。go 则使用一个约定来解决这个问题，一个包对应一个目录，编译时可以自动查找文件。"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,a("p",{children:["在源码组织上。java 工程更习惯将同一个 package 源文件放到同级目录吧。比如，上面的示例，包名为 ",a("code",{children:"space.lambdadriver.demo"},void 0,!1,void 0,this),`，在保存源码文件时，
一般会放置到 `,a("code",{children:"space/lambdadriver/demo/"},void 0,!1,void 0,this)," 这个目录下。"]},void 0,!0,void 0,this),`
`,a("p",{children:`多文件，多二方三方依赖时，应该使用构建工具。java 生态中最为流行为有：gradle、maven。我这里只记录 maven 的一些基本使用。gradle 在我家的网络下
实在用不起来。`},void 0,!1,void 0,this),`
`,a("h3",{children:"maven"},void 0,!1,void 0,this),`
`,a("p",{children:["maven 是由 apache 开发的一个 java 项目管理工具，支持依赖管理、工程构建等功能。官网：",a("a",{href:"http://maven.apache.org/",children:"http://maven.apache.org/"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,a("p",{children:"maven 的依赖管理是基于中心式的仓库实现（和 npm 类似的设计）。网络环境不怎么好的情况下，最好配置一个镜像。"},void 0,!1,void 0,this),`
`,a("p",{children:["入门可以看官方的 ",a("a",{href:"http://maven.apache.org/guides/getting-started/maven-in-five-minutes.html",children:"5 分钟介绍"},void 0,!1,void 0,this),"。"]},void 0,!0,void 0,this),`
`,a("p",{children:["在 maven 中，一个 java 项目使用 ",a("code",{children:"pom.xml"},void 0,!1,void 0,this)," 来描述。",a("code",{children:"pom.xml"},void 0,!1,void 0,this)," 是包含了项目的包名、版本号、依赖项目、构建配置。"]},void 0,!0,void 0,this),`
`,a("h4",{children:"1. 创建项目"},void 0,!1,void 0,this),`
`,a("p",{children:["执行下面的命令，会生成一个基本 maven 工程。maven 会创建一个 ",a("code",{children:"my-app"},void 0,!1,void 0,this)," 的目录，然后在里面生成一些基本的文件。"]},void 0,!0,void 0,this),`
`,a("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:a("code",{className:"language-sh",children:a("span",{className:"line",children:[a("span",{style:{color:"#B392F0"},children:"$"},void 0,!1,void 0,this),a("span",{style:{color:"#9ECBFF"},children:" mvn"},void 0,!1,void 0,this),a("span",{style:{color:"#9ECBFF"},children:" archetype:generate"},void 0,!1,void 0,this),a("span",{style:{color:"#79B8FF"},children:" -DgroupId=com.mycompany.app"},void 0,!1,void 0,this),a("span",{style:{color:"#79B8FF"},children:" -DartifactId=my-app"},void 0,!1,void 0,this),a("span",{style:{color:"#79B8FF"},children:" -DarchetypeArtifactId=maven-archetype-quickstart"},void 0,!1,void 0,this),a("span",{style:{color:"#79B8FF"},children:" -DarchetypeVersion=1.4"},void 0,!1,void 0,this),a("span",{style:{color:"#79B8FF"},children:" -DinteractiveMode=false"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,a("p",{children:"maven 生成的工程是一个 standard directory layout。这个目录结构的介绍可以看这个文档："},void 0,!1,void 0,this),`
`,a("p",{children:a("a",{href:"http://maven.apache.org/guides/introduction/introduction-to-the-standard-directory-layout.html",children:"http://maven.apache.org/guides/introduction/introduction-to-the-standard-directory-layout.html"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,a("h4",{children:"2. 构建"},void 0,!1,void 0,this),`
`,a("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:a("code",{className:"language-sh",children:[a("span",{className:"line",children:[a("span",{style:{color:"#B392F0"},children:"$"},void 0,!1,void 0,this),a("span",{style:{color:"#9ECBFF"},children:" mvn"},void 0,!1,void 0,this),a("span",{style:{color:"#9ECBFF"},children:" package"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,a("span",{className:"line",children:a("span",{style:{color:"#6A737D"},children:"# ....."},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,a("span",{className:"line",children:a("span",{style:{color:"#E1E4E8"},children:"[INFO] ------------------------------------------------------------------------"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,a("span",{className:"line",children:a("span",{style:{color:"#E1E4E8"},children:"[INFO] BUILD SUCCESS"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,a("span",{className:"line",children:a("span",{style:{color:"#E1E4E8"},children:"[INFO] ------------------------------------------------------------------------"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,a("span",{className:"line",children:a("span",{style:{color:"#E1E4E8"},children:"[INFO] Total time:  2.953 s"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,a("span",{className:"line",children:a("span",{style:{color:"#E1E4E8"},children:"[INFO] Finished at: 2019-11-24T13:05:10+01:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,a("span",{className:"line",children:a("span",{style:{color:"#E1E4E8"},children:"[INFO] ------------------------------------------------------------------------"},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,a("p",{children:"如果看到上面的日志，表示构建成功。"},void 0,!1,void 0,this),`
`,a("h4",{children:"3. 执行"},void 0,!1,void 0,this),`
`,a("p",{children:`执行依然使用的是 java 命令。不过，使用 maven 构建的项目，一般会打包为 jar 文件。一个 jar 文件实质上是一个 zip 压缩包。
编译的 .class 一般会统一压缩到 jar 文件中，方便分发。通过不同的插件，maven 也支持将依赖的三方包（一般也是 jar）压缩到
同一个 jar 文件中。`},void 0,!1,void 0,this),`
`,a("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:a("code",{className:"language-sh",children:a("span",{className:"line",children:[a("span",{style:{color:"#B392F0"},children:"$"},void 0,!1,void 0,this),a("span",{style:{color:"#9ECBFF"},children:" java"},void 0,!1,void 0,this),a("span",{style:{color:"#79B8FF"},children:" -cp"},void 0,!1,void 0,this),a("span",{style:{color:"#9ECBFF"},children:" target/my-app-1.0-SNAPSHOT.jar"},void 0,!1,void 0,this),a("span",{style:{color:"#9ECBFF"},children:" com.mycompany.app.App"},void 0,!1,void 0,this),a("span",{style:{color:"#6A737D"},children:" # -cp 就是 -classpath"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,a("h4",{children:"更多 maven 命令"},void 0,!1,void 0,this),`
`,a("p",{children:"maven 围绕 build lifecycle 进行设计。对于普通用户，只需要记住几个命令就可以完成项目的构建和发布。"},void 0,!1,void 0,this),`
`,a("p",{children:["一个 build lifecycle 由多个阶段组成。目前 maven 中内置了三个 build lifecycle：",a("code",{children:"default"},void 0,!1,void 0,this),"，",a("code",{children:"clean"},void 0,!1,void 0,this),"，",a("code",{children:"site"},void 0,!1,void 0,this),"。"]},void 0,!0,void 0,this),`
`,a("p",{children:[a("code",{children:"clean"},void 0,!1,void 0,this)," 用于清理构建输出的文件，",a("code",{children:"site"},void 0,!1,void 0,this)," 用于生成文档。重点是 ",a("code",{children:"default"},void 0,!1,void 0,this)," build lifecycle。"]},void 0,!0,void 0,this),`
`,a("p",{children:["在 ",a("code",{children:"default"},void 0,!1,void 0,this)," 配置中，由上到下分别是："]},void 0,!0,void 0,this),`
`,a("ul",{children:[`
`,a("li",{children:[a("code",{children:"validate"},void 0,!1,void 0,this)," 检查项目信息"]},void 0,!0,void 0,this),`
`,a("li",{children:[a("code",{children:"compile"},void 0,!1,void 0,this)," 构建源代码"]},void 0,!0,void 0,this),`
`,a("li",{children:[a("code",{children:"test"},void 0,!1,void 0,this)," 运行测试"]},void 0,!0,void 0,this),`
`,a("li",{children:[a("code",{children:"package"},void 0,!1,void 0,this)," 打包（比如打包为 jar）"]},void 0,!0,void 0,this),`
`,a("li",{children:[a("code",{children:"verify"},void 0,!1,void 0,this)," 验证"]},void 0,!0,void 0,this),`
`,a("li",{children:[a("code",{children:"install"},void 0,!1,void 0,this)," 安装包到本地仓库，供其他工程使用"]},void 0,!0,void 0,this),`
`,a("li",{children:[a("code",{children:"deploy"},void 0,!1,void 0,this)," 构建结束，执行分发（比较分发到远程仓库）"]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,a("p",{children:["maven 支持执行上面各种阶段中的其中一个，但是如果这个阶段是有上一级阶段的，会依次执行。比如执行 ",a("code",{children:"mvn verify"},void 0,!1,void 0,this),`，则
会按顺序执行：`,a("code",{children:"validate"},void 0,!1,void 0,this)," -> ",a("code",{children:"compile"},void 0,!1,void 0,this)," -> ",a("code",{children:"test"},void 0,!1,void 0,this)," -> ",a("code",{children:"package"},void 0,!1,void 0,this)," -> ",a("code",{children:"verify"},void 0,!1,void 0,this),"。"]},void 0,!0,void 0,this),`
`,a("p",{children:["maven 的 build lifecycle 中的各个阶段分别对应不同的 ",a("code",{children:"plugin:goal"},void 0,!1,void 0,this),`。对当于每个阶段都会有不同的钩子
方便插件实现不同的功能。具体应该看官方文档：`]},void 0,!0,void 0,this),`
`,a("p",{children:a("a",{href:"http://maven.apache.org/guides/introduction/introduction-to-the-lifecycle.html",children:"http://maven.apache.org/guides/introduction/introduction-to-the-lifecycle.html"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,a("h3",{children:"jdeps、jlink、jpackage"},void 0,!1,void 0,this),`
`,a("p",{children:"从 jdk9 开始引入了一系列的工具，用来解决 java 项目分发的问题。其中就有 jdeps、jlink、jpackage。"},void 0,!1,void 0,this),`
`,a("ul",{children:[`
`,a("li",{children:"jdeps 用来分析项目的依赖"},void 0,!1,void 0,this),`
`,a("li",{children:"jlink 用于创建自定义的 jre，可以裁减未使用的 mods"},void 0,!1,void 0,this),`
`,a("li",{children:"jpackage 用于创建安装包，windows 下可以打包为 MSI 安装包"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,a("p",{children:`这里不详细写了。先知道有这么一回事。java 项目分发更适合的做法是使用容器。可是在 windows 下就比较无力，对于普通用户安装包是比较容易接受的。
我认为无论是使用安装包还是容器技术，减少文体体积都是比较友好的做法。试想一下，一个未经过优化的容器镜像可能占地 3~4 GB，无论传输、安装、更新、归档都是一笔巨大的投入。`},void 0,!1,void 0,this),`
`,a("table",{children:[a("thead",{children:a("tr",{children:[a("th",{children:"镜像 tag"},void 0,!1,void 0,this),a("th",{children:"OS/ARCH"},void 0,!1,void 0,this),a("th",{children:"压缩后体积"},void 0,!1,void 0,this),a("th",{children:"主要开发语言"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),a("tbody",{children:[a("tr",{children:[a("td",{children:"tomcat:jre8-openjdk-slim-buster"},void 0,!1,void 0,this),a("td",{children:"linux/amd64"},void 0,!1,void 0,this),a("td",{children:"81.04mb"},void 0,!1,void 0,this),a("td",{children:"java"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),a("tr",{children:[a("td",{children:"jetty:9.4.44-jre8-slim"},void 0,!1,void 0,this),a("td",{children:"linux/amd64"},void 0,!1,void 0,this),a("td",{children:"80.82mb"},void 0,!1,void 0,this),a("td",{children:"java"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),a("tr",{children:[a("td",{children:"caddy:alpine"},void 0,!1,void 0,this),a("td",{children:"linux/amd64"},void 0,!1,void 0,this),a("td",{children:"14.17mb"},void 0,!1,void 0,this),a("td",{children:"go"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),a("tr",{children:[a("td",{children:"nginx:stable-alpine"},void 0,!1,void 0,this),a("td",{children:"linux/amd64"},void 0,!1,void 0,this),a("td",{children:"9.41mb"},void 0,!1,void 0,this),a("td",{children:"c"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),`
`,a("blockquote",{children:[`
`,a("p",{children:`tomcat 和 jetty 官方没有基于 alpine 的镜像，上面列出的是体积相对比较小的。caddy 和 nginx 的镜像因为使用了 alpine，一些系统级别的依赖占地也比较小。
单纯比较镜像文件大小是没有意义的！但是在部署应用时，就不得不考虑这个问题。至少我所在项目组，镜像体积是限定尺寸的。一次全量部署，接近 50 个镜像，光是下载镜像都得二小时`},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,a("p",{children:"由这三个工具，可以看出 java 在云时代的努力。"},void 0,!1,void 0,this),`
`,a("h2",{children:"没啥用的知识"},void 0,!1,void 0,this),`
`,a("h3",{children:"Java 虚拟机"},void 0,!1,void 0,this),`
`,a("p",{children:"Java 是一种被设计为在 Java 虚拟机 JVM 上执行的编程语言。前面也说明了，Java 源代码会先编译为字节码，然后再交由 VM 执行。业界实际上有多个 Java VM 实现。我了解过的有 HotSpot、OpenJ9、GraalVM。"},void 0,!1,void 0,this),`
`,a("h4",{children:"HotSpot"},void 0,!1,void 0,this),`
`,a("p",{children:"HotSpot 目前是 OpenJDK 上默认的 Java VM 实现。也是目前使用最广的 Java 实现。"},void 0,!1,void 0,this),`
`,a("h4",{children:"OpenJ9"},void 0,!1,void 0,this),`
`,a("p",{children:"OpenJ9 最早由 IBM 开发，后来贡献给了 Eclipse 基金会。不过后面 IBM 又收回了自用。OpenJ9 最大的特点就是比较省内存、启动速度快。"},void 0,!1,void 0,this),`
`,a("h4",{children:"GraalVM"},void 0,!1,void 0,this),`
`,a("p",{children:"Java + AOT，顺带搞了一个 N 种语言通过用运行时。AOT 是比较吸引的，冷启动可以做到毫秒级。这个特性真的是谁用谁知识，就连 Java 界的明星 Spring Boot 也要加入 AOT 的支持。在各种“云”当道的今天，冷启动速度已经成为了一个重要指标。"},void 0,!1,void 0,this),`
`,a("p",{children:"GraalVM 出带有一个支持 N 种编程语言的组件。历史上不少项目都做过类似的功能，比如 MS 家的 .net 就搞过一票的 Iron* 语言。不过慢慢就没有下文了。"},void 0,!1,void 0,this),`
`,a("p",{children:"不过单 AOT 这个特性已经足够吸引一部分用户迁移到 GraalVM。"},void 0,!1,void 0,this),`
`,a("h3",{children:"GC"},void 0,!1,void 0,this),`
`,a("p",{children:"Java 具有自动的内存管理功能，这个功能是通过 JVM 中的垃圾回收器 GC 实现。不同版本中使用了不同的算法："},void 0,!1,void 0,this),`
`,a("table",{children:[a("thead",{children:a("tr",{children:[a("th",{children:"JDK 版本"},void 0,!1,void 0,this),a("th",{children:"GC 算法"},void 0,!1,void 0,this),a("th",{children:"其他"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),a("tbody",{children:[a("tr",{children:[a("td",{children:"JDK 8"},void 0,!1,void 0,this),a("td",{children:"ParallelGC"},void 0,!1,void 0,this),a("td",{children:["默认，新版本中可以通过 ",a("code",{children:"-XX:+UseParallelGC"},void 0,!1,void 0,this)," 启用"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),a("tr",{children:[a("td",{children:"JDK 17"},void 0,!1,void 0,this),a("td",{children:"G1GC"},void 0,!1,void 0,this),a("td",{children:["JDK9+ 默认，JDK8 中可以通过 ",a("code",{children:"-XX:+UseG1GC"},void 0,!1,void 0,this)," 启用"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),a("tr",{children:[a("td",{},void 0,!1,void 0,this),a("td",{children:"ZGC"},void 0,!1,void 0,this),a("td",{children:["通过 ",a("code",{children:"-XX:+UseZGC -Xmx<size>"},void 0,!1,void 0,this)," 启用"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),a("tr",{children:[a("td",{},void 0,!1,void 0,this),a("td",{children:"Shenandoah GC"},void 0,!1,void 0,this),a("td",{children:["通过 ",a("code",{children:"-XX:+UseShenandoahGC"},void 0,!1,void 0,this)," 启用"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),`
`,a("p",{children:"ZGC 和 Shenandoah GC 是用于大堆优化的并行低感知 GC。低感知是指 Stop The World 时间很短（ms 级别），大堆是指 > 20GB 堆内存。所以对于一般场景更推荐默认配置。毕竟“没有免费的午餐”，GC 的低 STW 时长，是使用吞吐量为代价。"},void 0,!1,void 0,this),`
`,a("h3",{children:"性能测试"},void 0,!1,void 0,this),`
`,a("p",{children:"HotSpot 是带有 JIT 功能虚拟机。JIT 一般有一个特点：越跑越快。这是因为 JIT 会尝试对经常使用的代码进行优化。因为测试 Java 代码性能时，需求在启动后多测试几个回合。一般至少三个回合。"},void 0,!1,void 0,this),`
`,a("p",{children:"TBA"},void 0,!1,void 0,this),`
`,a("hr",{},void 0,!1,void 0,this),`
`,a("p",{children:"2021.11.13"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)}export{e as default};
