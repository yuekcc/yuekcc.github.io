import{e,h as n}from"/dist/chunk-0936xbxf.js";function a(){return n("div",{class:"markdown-body",children:n(e,{children:[n("h1",{children:"实用工具合集"},void 0,!1,void 0,this),`
`,n("p",{children:"基本上都是开发用的工具了。"},void 0,!1,void 0,this),`
`,n("h2",{children:"just"},void 0,!1,void 0,this),`
`,n("p",{children:["主页：",n("a",{href:"https://github.com/casey/just",children:"https://github.com/casey/just"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("p",{children:"just 是一个类似于 make 工具，用于执行项目开发中的一些组合命令。通过 recipes 可以组成工作流。如果熟悉 node.js 的话，大概也是知道 package.json 中可以增加自定义的脚本，用于启动或执行一些命令，使用最多的情况是构建项目。just 则更为通用。类 Makefile 的语法也更容易上手。"},void 0,!1,void 0,this),`
`,n("p",{children:"使用："},void 0,!1,void 0,this),`
`,n("ol",{children:[`
`,n("li",{children:["在项目中创建一个 ",n("code",{children:"justfile"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("li",{children:["在 justfile 增加一些 ",n("em",{children:"recipe"},void 0,!1,void 0,this),"，比如我当前项目的 justfile："]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:n("code",{children:[n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"serve:"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"  @npm run serve"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"push:"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"  @echo "},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:'"Push to Github"'},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"  @git push origin"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"  @echo "},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:'"Push to Gitee"'},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"  @git push gitee"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"  @echo "},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:'"Push to Codeberg"'},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"  @git push codeberg"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"  @echo "},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:'"DONE"'},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,n("ol",{start:"3",children:[`
`,n("li",{children:"使用："},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("ul",{children:[`
`,n("li",{children:["直接执行 ",n("code",{children:"just"},void 0,!1,void 0,this),"。默认会执行第一个 recipe"]},void 0,!0,void 0,this),`
`,n("li",{children:["通过 ",n("code",{children:"just <recipe-name>"},void 0,!1,void 0,this)," 执行指定的 ",n("code",{children:"recipe"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("li",{children:["通过 ",n("code",{children:"just -l"},void 0,!1,void 0,this)," 查看可以用 ",n("code",{children:"recipe"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("p",{children:["其他细节这里就不一一说明了。看文档吧：",n("a",{href:"https://github.com/chinanf-boy/just-zh",children:"https://github.com/chinanf-boy/just-zh"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("h2",{children:"watchexec"},void 0,!1,void 0,this),`
`,n("p",{children:["主页：",n("a",{href:"https://github.com/watchexec/watchexec",children:"https://github.com/watchexec/watchexec"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("p",{children:"基本使用"},void 0,!1,void 0,this),`
`,n("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:n("code",{children:[n("span",{className:"line",children:[n("span",{style:{color:"#B392F0"},children:"$"},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:" watchexec"},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:" -e"},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:" js,html,css"},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:" npm"},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:" run"},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:" build"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:"命令行参数"},void 0,!1,void 0,this),`
`,n("table",{children:[n("thead",{children:n("tr",{children:[n("th",{children:"参数"},void 0,!1,void 0,this),n("th",{children:"功能"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),n("tbody",{children:[n("tr",{children:[n("td",{children:n("code",{children:"-c"},void 0,!1,void 0,this)},void 0,!1,void 0,this),n("td",{children:"清空 console 输出"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),n("tr",{children:[n("td",{children:n("code",{children:"-r"},void 0,!1,void 0,this)},void 0,!1,void 0,this),n("td",{children:"一旦监听到文件变化就重新启动指定的命令"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),n("tr",{children:[n("td",{children:n("code",{children:"-s <SINGLE>"},void 0,!1,void 0,this)},void 0,!1,void 0,this),n("td",{children:"发送信号到指定命令"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),n("tr",{children:[n("td",{children:n("code",{children:"-w <DIR>"},void 0,!1,void 0,this)},void 0,!1,void 0,this),n("td",{children:"指定监听的目录"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),`
`,n("p",{children:["watchexec 会自动忽略 ",n("code",{children:".gitignore"},void 0,!1,void 0,this)," 中的文件，并且递归处理子目录。"]},void 0,!0,void 0,this),`
`,n("p",{children:["watchexec 可以配合 just 使用。比如下面的 ",n("code",{children:"justfile"},void 0,!1,void 0,this),"："]},void 0,!0,void 0,this),`
`,n("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:n("code",{children:[n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"start: build"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"  pnpm start"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"build:"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"  pnpm build"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"watch:"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"  watchexec -c -r -w src -e js just start"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:["执行 ",n("code",{children:"just watch"},void 0,!1,void 0,this),"，就可以启动开始监听 src 目录下的 js 文件，文件发布变化时，则执行 ",n("code",{children:"just start"},void 0,!1,void 0,this),"。最终效果就是修改了 src 目录下的 js 文件，并自动重启服务。"]},void 0,!0,void 0,this),`
`,n("h2",{children:"sirv"},void 0,!1,void 0,this),`
`,n("p",{children:["主页：",n("a",{href:"https://github.com/lukeed/sirv",children:"https://github.com/lukeed/sirv"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("p",{children:"sirv 是 node.js 的一个简单开发服务器。sirv 自带 SPA 前端项目支持，也只支持自动查找可用端口。"},void 0,!1,void 0,this),`
`,n("p",{children:[n("strong",{children:"sirv 需要 node.js 环境"},void 0,!1,void 0,this),"。"]},void 0,!0,void 0,this),`
`,n("p",{children:["使用 npm 的项目可以直接通过 ",n("code",{children:"npm i -D sirv-cli"},void 0,!1,void 0,this)," 进行安装到项目依赖中。也可以安装到全局：",n("code",{children:"npm i -g sirv-cli"},void 0,!1,void 0,this),"。"]},void 0,!0,void 0,this),`
`,n("p",{children:"基本使用："},void 0,!1,void 0,this),`
`,n("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:n("code",{children:[n("span",{className:"line",children:[n("span",{style:{color:"#B392F0"},children:"$"},void 0,!1,void 0,this),n("span",{style:{color:"#6A737D"},children:" # 如果安装到全局"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#B392F0"},children:"$"},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:" sirv"},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:" -D"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" <"},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:"di"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"r"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:">"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#B392F0"},children:"$"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#B392F0"},children:"$"},void 0,!1,void 0,this),n("span",{style:{color:"#6A737D"},children:" # 如果安装到项目"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#B392F0"},children:"$"},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:" npx"},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:" sirv"},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:" -D"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" <"},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:"di"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"r"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:">"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,n("h2",{children:"mkcert"},void 0,!1,void 0,this),`
`,n("p",{children:["主页：",n("a",{href:"https://github.com/FiloSottile/mkcert",children:"https://github.com/FiloSottile/mkcert"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("p",{children:"mkcert 是一个创建自签证书的工具。特别适合需要内网部署 https 的场景。"},void 0,!1,void 0,this),`
`,n("h2",{children:"tokei"},void 0,!1,void 0,this),`
`,n("p",{children:["主页：",n("a",{href:"https://github.com/XAMPPRocky/tokei",children:"https://github.com/XAMPPRocky/tokei"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("p",{children:"tokei 是一个代码统计工具。对比常见的 sloc，tokei 主要统计内嵌脚本。比如嵌入在 html 文件中的 js 代码。"},void 0,!1,void 0,this),`
`,n("p",{children:"tokei 使用 rust 实现，支持 linux/macos/windows 操作系统。"},void 0,!1,void 0,this),`
`,n("p",{children:["类似的工具还有使用 go 实现的 ",n("a",{href:"scc",children:"scc"},void 0,!1,void 0,this),"。scc 甚至会根据 COCOMO 模型计算软件成本。看到自己的代码估算值 xxx USD 还是很舒服的 \uD83D\uDE01"]},void 0,!0,void 0,this),`
`,n("h2",{children:"WindTerm"},void 0,!1,void 0,this),`
`,n("p",{children:["主页：",n("a",{href:"https://github.com/kingToolbox/WindTerm",children:"https://github.com/kingToolbox/WindTerm"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("p",{children:"WindTerm 是一个 SSH 客户端，类似于 XShell 和 mobaxterm。支持保存 SSH 自动登陆，历史记录等功能。"},void 0,!1,void 0,this),`
`,n("h2",{children:"# WinLibs standalone build of GCC and MinGW-w64 for Windows"},void 0,!1,void 0,this),`
`,n("p",{children:["主页：",n("a",{href:"https://winlibs.com/",children:"https://winlibs.com/"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("p",{children:"winlibs 是 mingw-w64 的一处发行版。mingw-w64 是源自 mingw 项目的一个 Fork，包括一组用于 windows 应用开发的 Headers、库、GNU 工具和 64 位支持。"},void 0,!1,void 0,this),`
`,n("p",{children:"类似的项目还有："},void 0,!1,void 0,this),`
`,n("ul",{children:[`
`,n("li",{children:n("a",{href:"https://www.msys2.org/",children:"https://www.msys2.org/"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("li",{children:n("a",{href:"https://github.com/skeeto/w64devkit",children:"https://github.com/skeeto/w64devkit"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("li",{children:n("a",{href:"https://github.com/niXman/mingw-builds-binaries",children:"https://github.com/niXman/mingw-builds-binaries"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("li",{children:n("a",{href:"https://github.com/mstorsjo/llvm-mingw",children:"https://github.com/mstorsjo/llvm-mingw"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("li",{children:n("a",{href:"https://nuwen.net/mingw.html",children:"https://nuwen.net/mingw.html"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("h2",{children:"游览器"},void 0,!1,void 0,this),`
`,n("ul",{children:[`
`,n("li",{children:["一个没有包含 Google API Keys 的 Chromium 版本：",n("a",{href:"https://github.com/Hibbiki/chromium-win64",children:"https://github.com/Hibbiki/chromium-win64"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("li",{children:["Firefox 也有一些民间补丁版本，比如 ",n("a",{href:"https://github.com/Alex313031/Mercury",children:"Mercury"},void 0,!1,void 0,this),"。同一作者也有一个 Chromium fork：",n("a",{href:"https://github.com/Alex313031/Thorium",children:"Thorium"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("li",{children:["Android 平台用的 Chromium 可以试试 ",n("a",{href:"https://github.com/uazo/cromite",children:"cromite"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("hr",{},void 0,!1,void 0,this),`
`,n("ul",{children:[`
`,n("li",{children:"2022 年 01 月 02 日"},void 0,!1,void 0,this),`
`,n("li",{children:"2022 年 02 月 18 日，收录 WindTerm"},void 0,!1,void 0,this),`
`,n("li",{children:"2022 年 05 月 09 日，收录 winlibs build of gcc"},void 0,!1,void 0,this),`
`,n("li",{children:"2024 年 02 月 06 日，增加游览器"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)}export{a as default};
