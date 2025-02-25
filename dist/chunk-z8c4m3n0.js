import{e as n,h as e}from"/dist/chunk-scq2q67j.js";function a(){return e("div",{class:"markdown-body",children:e(n,{children:[e("h1",{children:"rsync 简明使用教程"},void 0,!1,void 0,this),`
`,e("p",{children:"rsync 是一个文件同步软件，支持本地计算机和远程计算机之间进行文件同步。rsync 可以理解为 cp、mv 命令的威力加强版。"},void 0,!1,void 0,this),`
`,e("h2",{children:"基本使用"},void 0,!1,void 0,this),`
`,e("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:e("code",{className:"language-sh",children:e("span",{className:"line",children:[e("span",{style:{color:"#B392F0"},children:"rsync"},void 0,!1,void 0,this),e("span",{style:{color:"#79B8FF"},children:" -r"},void 0,!1,void 0,this),e("span",{style:{color:"#9ECBFF"},children:" src"},void 0,!1,void 0,this),e("span",{style:{color:"#9ECBFF"},children:" dest"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,e("p",{children:"表示将 src 目录复制到 dest 目录。注意是 src 目录本身及其子目录。"},void 0,!1,void 0,this),`
`,e("p",{children:[e("strong",{children:"如果只想同步 src 目录下的文件，需要改为 src/"},void 0,!1,void 0,this),"：",e("code",{children:"rsync -r src/ dest"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,e("h2",{children:[e("code",{children:"-a"},void 0,!1,void 0,this)," 同步元数据"]},void 0,!0,void 0,this),`
`,e("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:e("code",{className:"language-sh",children:e("span",{className:"line",children:[e("span",{style:{color:"#B392F0"},children:"rsync"},void 0,!1,void 0,this),e("span",{style:{color:"#79B8FF"},children:" -a"},void 0,!1,void 0,this),e("span",{style:{color:"#9ECBFF"},children:" src/"},void 0,!1,void 0,this),e("span",{style:{color:"#9ECBFF"},children:" dest"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,e("p",{children:"-a 和 -r 基本一致。但会复制文件的元数据"},void 0,!1,void 0,this),`
`,e("h2",{children:[e("code",{children:"-n"},void 0,!1,void 0,this)," 试运行"]},void 0,!0,void 0,this),`
`,e("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:e("code",{className:"language-sh",children:e("span",{className:"line",children:[e("span",{style:{color:"#B392F0"},children:"rsync"},void 0,!1,void 0,this),e("span",{style:{color:"#79B8FF"},children:" -anv"},void 0,!1,void 0,this),e("span",{style:{color:"#9ECBFF"},children:" src/"},void 0,!1,void 0,this),e("span",{style:{color:"#9ECBFF"},children:" dest"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,e("p",{children:"增加 -n 表示 --dry-run。不会实际操作文件，用于测试一下执行的效果。"},void 0,!1,void 0,this),`
`,e("h2",{children:[e("code",{children:"--delete"},void 0,!1,void 0,this)," 同步删除文件"]},void 0,!0,void 0,this),`
`,e("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:e("code",{className:"language-sh",children:e("span",{className:"line",children:[e("span",{style:{color:"#B392F0"},children:"$"},void 0,!1,void 0,this),e("span",{style:{color:"#9ECBFF"},children:" rsync"},void 0,!1,void 0,this),e("span",{style:{color:"#79B8FF"},children:" -av"},void 0,!1,void 0,this),e("span",{style:{color:"#79B8FF"},children:" --delete"},void 0,!1,void 0,this),e("span",{style:{color:"#9ECBFF"},children:" src/"},void 0,!1,void 0,this),e("span",{style:{color:"#9ECBFF"},children:" dest"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,e("p",{children:"增加 --delete 会删除 dest 目录下存在但 src 目录没有的文件。执行后 dest 就成了 src 的镜像。"},void 0,!1,void 0,this),`
`,e("h2",{children:"示例"},void 0,!1,void 0,this),`
`,e("p",{children:"我使用 rsync 主要冷备份。我自组的 NAS 有四个硬盘："},void 0,!1,void 0,this),`
`,e("table",{children:[e("thead",{children:e("tr",{children:[e("th",{children:"挂载点"},void 0,!1,void 0,this),e("th",{children:"容量"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),e("tbody",{children:[e("tr",{children:[e("td",{children:"/dev/sda1"},void 0,!1,void 0,this),e("td",{children:"4TB"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),e("tr",{children:[e("td",{children:"/dev/sdc1"},void 0,!1,void 0,this),e("td",{children:"1TB"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),e("tr",{children:[e("td",{children:"/dev/sdd1"},void 0,!1,void 0,this),e("td",{children:"1TB"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),e("tr",{children:[e("td",{children:"/dev/sde1"},void 0,!1,void 0,this),e("td",{children:"500GB"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),`
`,e("p",{children:"一般情况下，我先将数据从其他设备（主要是手机）通过 syncthing 上传到 NAS 的一个硬盘，比如上面的 /dev/sdc1，再通过 rsync 同步到其他硬盘。"},void 0,!1,void 0,this),`
`,e("p",{children:"具体操作如下："},void 0,!1,void 0,this),`
`,e("ol",{children:[`
`,e("li",{children:"使用手机端的 syncthing 同步文件到 /mnt/sdc1/sync 目录下"},void 0,!1,void 0,this),`
`,e("li",{children:["执行 ",e("code",{children:"rsync -av --delete /mnt/sdc1/ /mnt/sdd1"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,e("li",{children:["执行 ",e("code",{children:"rsync -av /mnt/sdc1/ /mnt/sda1"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,e("hr",{},void 0,!1,void 0,this),`
`,e("ul",{children:[`
`,e("li",{children:"2024 年 8 月 4 日 初稿"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)}export{a as default};
