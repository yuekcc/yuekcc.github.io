import{d as n,g as l}from"/dist/chunk-9xt68df4.js";function a(){return l("div",{class:"markdown-body",children:l(n,{children:[l("h1",{children:"Bashrc"},void 0,!1,void 0,this),`
`,l("p",{children:["bash 有一系列的配置文件，包括 ",l("code",{children:".bashrc"},void 0,!1,void 0,this),", ",l("code",{children:".bash_profile"},void 0,!1,void 0,this),", ",l("code",{children:".bash_login"},void 0,!1,void 0,this),", ",l("code",{children:".profile"},void 0,!1,void 0,this)," 等。"]},void 0,!0,void 0,this),`
`,l("h2",{children:".bashrc"},void 0,!1,void 0,this),`
`,l("p",{children:`位置：通常位于用户的主目录下（~/.bashrc）。
用途：这个文件主要用于交互式非登录 shell 会话。当你打开一个新的终端窗口或标签页时，Bash 会读取这个文件。
内容：通常包含别名、函数、环境变量设置、shell 选项等，用于定制你的交互式 shell 体验。`},void 0,!1,void 0,this),`
`,l("h2",{children:".bash_profile"},void 0,!1,void 0,this),`
`,l("p",{children:`位置：通常位于用户的主目录下（~/.bash_profile）。
用途：这个文件用于登录 shell 会话，即当你登录到系统时（比如通过 SSH 或图形界面登录），Bash 会读取这个文件。它通常用于设置环境变量、执行某些启动时的命令。
内容：可能包含与 .bashrc 类似的内容，但更侧重于登录时的初始化设置。`},void 0,!1,void 0,this),`
`,l("h2",{children:".profile"},void 0,!1,void 0,this),`
`,l("p",{children:`位置：通常位于用户的主目录下（~/.profile）。
用途：这个文件用于登录 shell 会话，即当你登录到系统时（比如通过 SSH 或图形界面登录），Bash 会读取这个文件。它通常用于设置环境变量、执行某些启动时的命令。
内容：可能包含与 .bashrc 类似的内容，但更侧重于登录时的初始化设置。`},void 0,!1,void 0,this),`
`,l("h2",{children:"加载顺序"},void 0,!1,void 0,this),`
`,l("p",{children:"Bash 会按以下顺序加载配置文件："},void 0,!1,void 0,this),`
`,l("ol",{children:[`
`,l("li",{children:"系统配置文件（/etc/bashrc）"},void 0,!1,void 0,this),`
`,l("li",{children:"用户主目录下的 .bash_profile 文件（如果存在的话）"},void 0,!1,void 0,this),`
`,l("li",{children:"用户主目录下的 .bash_login 文件（如果存在的话）"},void 0,!1,void 0,this),`
`,l("li",{children:"用户主目录下的 .profile 文件（如果存在的话）"},void 0,!1,void 0,this),`
`,l("li",{children:"如果以上文件都不存在，Bash 会尝试读取 .bashrc"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,l("p",{children:"当你打开一个新的交互式非登录 shell 时（比如打开一个新的终端窗口），Bash 会读取 .bashrc 文件。"},void 0,!1,void 0,this),`
`,l("h2",{children:"使用建议"},void 0,!1,void 0,this),`
`,l("ul",{children:[`
`,l("li",{children:"通常，你应该将那些只需要在登录时执行一次的命令放在 .bash_profile 或 .profile 中"},void 0,!1,void 0,this),`
`,l("li",{children:"将那些每次打开新 shell 时都需要执行的命令放在 .bashrc 中"},void 0,!1,void 0,this),`
`,l("li",{children:"为了避免重复，你可以在 .bash_profile 中添加一行代码来包含 .bashrc，例如："},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,l("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:l("code",{children:[l("span",{className:"line",children:[l("span",{style:{color:"#F97583"},children:"if"},void 0,!1,void 0,this),l("span",{style:{color:"#E1E4E8"},children:" [ "},void 0,!1,void 0,this),l("span",{style:{color:"#F97583"},children:"-f"},void 0,!1,void 0,this),l("span",{style:{color:"#F97583"},children:" ~"},void 0,!1,void 0,this),l("span",{style:{color:"#E1E4E8"},children:"/.bashrc ]; "},void 0,!1,void 0,this),l("span",{style:{color:"#F97583"},children:"then"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,l("span",{className:"line",children:[l("span",{style:{color:"#79B8FF"},children:"    source"},void 0,!1,void 0,this),l("span",{style:{color:"#9ECBFF"},children:" ~/.bashrc"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,l("span",{className:"line",children:l("span",{style:{color:"#F97583"},children:"fi"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,l("span",{className:"line"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,l("p",{children:"这样，登录时 .bash_profile 会包含 .bashrc 的内容，而打开新终端时 .bashrc 直接被读取。"},void 0,!1,void 0,this),`
`,l("hr",{},void 0,!1,void 0,this),`
`,l("ul",{children:[`
`,l("li",{children:"024 年 9 月 1 日"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)}export{a as default};
