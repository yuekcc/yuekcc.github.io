import{e as a,h as n}from"/dist/chunk-0936xbxf.js";function p(){return n("div",{class:"markdown-body",children:n(a,{children:[n("h1",{children:"最小规模的 CI/CD 的技术栈讨论"},void 0,!1,void 0,this),`
`,n("p",{children:["原文地址：",n("a",{href:"https://v2ex.com/t/1086033#reply58",children:"https://v2ex.com/t/1086033#reply58"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("h2",{children:"importmeta"},void 0,!1,void 0,this),`
`,n("p",{children:n("em",{children:"2024-11-02 17:23:06 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:`搞了个应用，有前端，Node 后端，Redis, Postgres, Nginx, Grafana Loki Promtail.
用 Docker Compose 启动了一下，每次发现改点代码都要手动把文件传上去构建镜像，老麻烦了.
一看阿里云容器镜像服务，收费还很贵，不适合我.
谢谢了。`},void 0,!1,void 0,this),`
`,n("h2",{children:"agagega"},void 0,!1,void 0,this),`
`,n("p",{children:n("em",{children:"2024-11-02 17:23:58 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:"Buildbot ？"},void 0,!1,void 0,this),`
`,n("h2",{children:"tms"},void 0,!1,void 0,this),`
`,n("p",{children:n("em",{children:"2024-11-02 17:42:19 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:"Gitea ？"},void 0,!1,void 0,this),`
`,n("h2",{children:"RightHand"},void 0,!1,void 0,this),`
`,n("p",{children:n("em",{children:"2024-11-02 17:46:30 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:"gitea+Jenkins 配合 docker 基本满足"},void 0,!1,void 0,this),`
`,n("h2",{children:"iminto"},void 0,!1,void 0,this),`
`,n("p",{children:n("em",{children:"2024-11-02 17:47:57 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:"jenkins，靠谱，不依赖 docker，离线部署"},void 0,!1,void 0,this),`
`,n("h2",{children:"zhcode"},void 0,!1,void 0,this),`
`,n("p",{children:n("em",{children:"2024-11-02 17:54:36 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:"只在公司用过 Jenkins，轻量的话 听说 drone 不错"},void 0,!1,void 0,this),`
`,n("h2",{children:"Livid"},void 0,!1,void 0,this),`
`,n("p",{children:n("em",{children:"2024-11-02 17:55:42 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:"GitHub Action + 本地 runner"},void 0,!1,void 0,this),`
`,n("h2",{children:"Cola98"},void 0,!1,void 0,this),`
`,n("p",{children:n("em",{children:"2024-11-02 17:57:10 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:"makefile ？"},void 0,!1,void 0,this),`
`,n("h2",{children:"crackidz"},void 0,!1,void 0,this),`
`,n("p",{children:n("em",{children:"2024-11-02 18:06:25 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:"Github Action / GitLab Runner"},void 0,!1,void 0,this),`
`,n("h2",{children:"XiLingHost"},void 0,!1,void 0,this),`
`,n("p",{children:n("em",{children:"2024-11-02 18:07:49 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:"gitea+gitea runner，兼容 GitHub Action 语法"},void 0,!1,void 0,this),`
`,n("p",{children:"参考写法"},void 0,!1,void 0,this),`
`,n("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:n("code",{children:[n("span",{className:"line",children:[n("span",{style:{color:"#85E89D"},children:"services"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:":"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#85E89D"},children:"  server"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:":"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#85E89D"},children:"    image"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:": "},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:"gitea/gitea:latest"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#85E89D"},children:"    restart"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:": "},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:"always"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#85E89D"},children:"    ports"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:":"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"      - "},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:"'3000:3000'"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"      - "},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:"'127.0.0.1:2222:22'"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#85E89D"},children:"    environment"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:":"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"      - "},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:"USER_UID=998"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"      - "},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:"USER_GID=974"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#85E89D"},children:"    volumes"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:":"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"      - "},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:"./data:/data"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"      - "},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:"/home/git/.ssh/:/data/git/.ssh"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"      - "},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:"/etc/timezone:/etc/timezone:ro"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"      - "},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:"/etc/localtime:/etc/localtime:ro"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#85E89D"},children:"  runner"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:":"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#85E89D"},children:"    image"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:": "},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:"gitea/act_runner:latest"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#85E89D"},children:"    restart"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:": "},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:"always"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#85E89D"},children:"    depends_on"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:":"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"      - "},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:"server"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#85E89D"},children:"    ports"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:":"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"      - "},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:"'8088:8088'"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#85E89D"},children:"    volumes"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:":"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"      - "},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:"./runner_data:/data"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"      - "},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:"./runner_config.yaml:/config.yaml"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"      - "},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:"/etc/localtime:/etc/localtime:ro"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"      - "},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:"/var/run/docker.sock:/var/run/docker.sock"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#85E89D"},children:"    environment"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:":"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"      - "},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:"CONFIG_FILE=/config.yaml"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"      - "},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:"GITEA_INSTANCE_URL=[redacted]"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"      - "},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:"GITEA_RUNNER_REGISTRATION_TOKEN=[redacted]"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"      - "},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:"GITEA_RUNNER_NAME=default"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:"其中 runner_config.yaml 是用于处理 cache 的，其内容类似于"},void 0,!1,void 0,this),`
`,n("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:n("code",{children:[n("span",{className:"line",children:[n("span",{style:{color:"#85E89D"},children:"cache"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:":"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#85E89D"},children:"  enabled"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:": "},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"true"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#6A737D"},children:'  #  dir: ""'},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#6A737D"},children:"  # Use the LAN IP obtained in step 1"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#85E89D"},children:"  host"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:": "},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:"'10.10.10.12'"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#6A737D"},children:"  # Use the port number obtained in step 2"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#85E89D"},children:"  port"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:": "},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"8088"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:["如果遇到问题可以参考 ",n("a",{href:"https://docs.gitea.com/zh-cn/usage/actions/overview",children:"https://docs.gitea.com/zh-cn/usage/actions/overview"},void 0,!1,void 0,this)," 这里"]},void 0,!0,void 0,this),`
`,n("p",{children:"另外有时候默认的标签会有问题，可以考虑修改./runner_data/.runner 里面的 labels 为"},void 0,!1,void 0,this),`
`,n("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:n("code",{children:[n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#9ECBFF"},children:'"labels"'},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:": ["},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#9ECBFF"},children:'    "ubuntu-latest:docker://catthehacker/ubuntu:act-latest"'},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:","},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#9ECBFF"},children:'    "ubuntu-22.04:docker://catthehacker/ubuntu:act-22.04"'},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:","},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#9ECBFF"},children:'    "ubuntu-20.04:docker://catthehacker/ubuntu:act-20.04"'},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:","},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#9ECBFF"},children:'    "ubuntu-18.04:docker://catthehacker/ubuntu:act-20.04"'},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"  ]"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,n("h2",{children:"XiLingHost"},void 0,!1,void 0,this),`
`,n("p",{children:n("em",{children:"2024-11-02 18:12:08 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:"@Livid 站长可以考虑给评论区加上 markdown 支持吗，或者至少加个不会破坏缩进的代码块语法支持？"},void 0,!1,void 0,this),`
`,n("h2",{children:"Ipsum"},void 0,!1,void 0,this),`
`,n("p",{children:n("em",{children:"2024-11-02 18:24:18 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:"我都是 makefile 一把梭，本地构建然后 push 过去部署"},void 0,!1,void 0,this),`
`,n("h2",{children:"yveJohn"},void 0,!1,void 0,this),`
`,n("p",{children:n("em",{children:"2024-11-02 18:47:29 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:"gitea+drone 轻量又丝滑"},void 0,!1,void 0,this),`
`,n("h2",{children:"bbchannails"},void 0,!1,void 0,this),`
`,n("p",{children:n("em",{children:"2024-11-02 18:54:32 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:"idea 同步代码，sync to remote 就行。特别适合解释型的语言，java 也可以，但是要解开容器不要用 fat jar"},void 0,!1,void 0,this),`
`,n("h2",{children:"FlytoSirius"},void 0,!1,void 0,this),`
`,n("p",{children:n("em",{children:"2024-11-02 19:18:37 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:"别 Jenkins 了，你会费心死的，还是直接用 GitLab 吧"},void 0,!1,void 0,this),`
`,n("h2",{children:"james122333"},void 0,!1,void 0,this),`
`,n("p",{children:n("em",{children:"2024-11-02 19:23:22 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:"git hook scripts + shell"},void 0,!1,void 0,this),`
`,n("p",{children:"最迷你没有之一"},void 0,!1,void 0,this),`
`,n("p",{children:n("a",{href:"https://githooks.com",children:"https://githooks.com"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("h2",{children:"gongquanlin"},void 0,!1,void 0,this),`
`,n("p",{children:n("em",{children:"2024-11-02 19:28:39 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:"直接写 shell；"},void 0,!1,void 0,this),`
`,n("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:n("code",{children:[n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#6A737D"},children:"#!/bin/bash"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#6A737D"},children:"# 指定目标 IP 和用户"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"TARGET_IP"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"="},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:'"127.0.0.1"'},void 0,!1,void 0,this),n("span",{style:{color:"#6A737D"},children:"  # 替换为目标服务器的 IP 地址"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"USER"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"="},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:'"root"'},void 0,!1,void 0,this),n("span",{style:{color:"#6A737D"},children:"         # 替换为你的 SSH 用户名"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"PASSWORD"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"="},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:'"aasdf"'},void 0,!1,void 0,this),n("span",{style:{color:"#6A737D"},children:"            # SSH 密码"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#6A737D"},children:"# 本地文件路径"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"LOCAL_FILE"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"="},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:'"./dist/linux/main"'},void 0,!1,void 0,this),n("span",{style:{color:"#6A737D"},children:"  # 本地文件路径"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"REMOTE_FILE"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"="},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:'"/home/opt/helloworld"'},void 0,!1,void 0,this),n("span",{style:{color:"#6A737D"},children:"  # 远程文件路径"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#B392F0"},children:"sshpass"},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:" -p"},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:' "${'},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"PASSWORD"},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:'}"'},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:" scp"},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:" -O"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" ${LOCAL_FILE} ${USER}"},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:"@"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"${TARGET_IP}"},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:":"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"${REMOTE_FILE}"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#79B8FF"},children:"echo"},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:' "upload ${'},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"TARGET_IP"},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:'} success"'},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#6A737D"},children:"# 使用 sshpass 连接到指定 IP"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#B392F0"},children:"sshpass"},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:" -p"},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:' "${'},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"PASSWORD"},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:'}"'},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:" ssh"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" ${USER}"},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:"@"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"${TARGET_IP} "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"<<"},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:" EOF"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#9ECBFF"},children:"  # 进入指定目录"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#9ECBFF"},children:"  cd /home/opt/"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#9ECBFF"},children:"  # 停止 Docker 容器"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#9ECBFF"},children:"  docker compose down"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#9ECBFF"},children:"  # 替换文件"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#9ECBFF"},children:"  cp ${"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"REMOTE_FILE"},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:"} main"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#9ECBFF"},children:"  # 启动 Docker 容器"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#9ECBFF"},children:"  docker compose up -d"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#9ECBFF"},children:"EOF"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#79B8FF"},children:"echo"},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:' "deploy ${'},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"TARGET_IP"},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:'} success"'},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,n("h2",{children:"james122333"},void 0,!1,void 0,this),`
`,n("p",{children:n("em",{children:"2024-11-02 19:29:36 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:"懂这个差不多就可以自己做一个类似 gitlab jenkins 的出来了"},void 0,!1,void 0,this),`
`,n("h2",{children:"james122333"},void 0,!1,void 0,this),`
`,n("p",{children:n("em",{children:"2024-11-02 19:47:49 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:"当有人讲 gitlab jenkins 等东西有多屌"},void 0,!1,void 0,this),`
`,n("p",{children:'你就可以跟他说 "少年 你对力量 一无所知"'},void 0,!1,void 0,this),`
`,n("h2",{children:"hb0730"},void 0,!1,void 0,this),`
`,n("p",{children:n("em",{children:"2024-11-02 19:50:59 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:"drone 还不错"},void 0,!1,void 0,this),`
`,n("h2",{children:"seth19960929"},void 0,!1,void 0,this),`
`,n("p",{children:n("em",{children:"2024-11-02 20:01:00 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:"试试免费的 coding, 每个月好像有免费的机器给你构建，基本都够我用。"},void 0,!1,void 0,this),`
`,n("p",{children:"像我的博客用 hugo, 在 coding 构建好 HTML, 直接部署"},void 0,!1,void 0,this),`
`,n("h2",{children:"XuHuan1025"},void 0,!1,void 0,this),`
`,n("p",{children:n("em",{children:"2024-11-02 21:32:19 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:"@XiLingHost #10"},void 0,!1,void 0,this),`
`,n("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:n("code",{children:[n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"chmod -R "},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"777"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,n("h2",{children:"XuHuan1025"},void 0,!1,void 0,this),`
`,n("p",{children:n("em",{children:"2024-11-02 21:33:53 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:"兄弟们 问题来了 内网怎么 ci/cd 用的 jenkins-nexus-docker 导包啥的真恶心啊"},void 0,!1,void 0,this),`
`,n("h2",{children:"jeesk"},void 0,!1,void 0,this),`
`,n("p",{children:n("em",{children:"2024-11-02 21:36:42 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:"啥项目？个人项目，直接本地构建，公司项目，当然是 jenkins，舍得花钱直接买付费的 ci 就行了"},void 0,!1,void 0,this),`
`,n("h2",{children:"iminto"},void 0,!1,void 0,this),`
`,n("p",{children:n("em",{children:"2024-11-02 21:41:36 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:'当有人说 jenkins 多 low 多古董的话，你就可以跟他说 "少年 你对力量 一无所知"'},void 0,!1,void 0,this),`
`,n("p",{children:"jenkins 之外，皆是歪门邪道。"},void 0,!1,void 0,this),`
`,n("p",{children:"要么依赖 docker，让环境部署变得异常复杂，要么功能和概念过于复杂。"},void 0,!1,void 0,this),`
`,n("p",{children:"你说依赖 docker，首先 docker 在中国大陆就很难下载，就算解决了网络问题，还得配离线仓库，把问题搞那么复杂。"},void 0,!1,void 0,this),`
`,n("p",{children:"jenkins 就是一个 war 包，傻瓜式部署，简单到不能再简单。"},void 0,!1,void 0,this),`
`,n("h2",{children:"XiLingHost"},void 0,!1,void 0,this),`
`,n("p",{children:n("em",{children:"2024-11-02 21:51:50 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:"@iminto 建议多用用，Jenkins 光是各种插件依赖要管理起来就很麻烦了，到时候照样要走梯子"},void 0,!1,void 0,this),`
`,n("p",{children:"纯写 ssh 又要管理脚本，然后你 pipeline 是不是还要额外的仓库来存储，凭据怎么管理，是不是要做统一身份认证，要不要和 git 服务做整合"},void 0,!1,void 0,this),`
`,n("p",{children:"还有你怎么处理 workspace 的环境干净，最后还不是要引入容器化甚至虚拟化确保构建可重复性？"},void 0,!1,void 0,this),`
`,n("p",{children:"然后你要事件触发是不是还要额外配置 Jenkins 项目里的轮询，每次改构建流程和参数是不是要改 3 个地方，一个是项目本身的代码，一个是 pipeline 的 jenkinsfile，然后还要在界面上配置 job 的参数修改和触发时机，这不是引入了更多的复杂度？"},void 0,!1,void 0,this),`
`,n("h2",{children:"XiLingHost"},void 0,!1,void 0,this),`
`,n("p",{children:n("em",{children:"2024-11-02 21:55:29 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:"@iminto Jenkins 确实很好用，功能也很强大，在某些特定的场景下是最佳的选择（比如你要传递很多复杂的参数并且需要界面跟随你的选择调整可选择的参数），但是并不能覆盖所有的场景，比如本主题提到的“单服务器最小规模 CI/CD”，Jenkins 的资源消耗并不低，同时它的部署和管理以及使用也没有想象中的那么简单和方便，要实现和 GitHub Action 一样的便利性还是有相当的差距。"},void 0,!1,void 0,this),`
`,n("h2",{children:"wangee"},void 0,!1,void 0,this),`
`,n("p",{children:n("em",{children:"2024-11-02 21:56:19 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:"如果现有的代码可以依托于 Gitea 的话，Gitea + Gitea Runner 足够了，如果喜欢 GitLab CI/CD 的语法，可以用 DroneCI。"},void 0,!1,void 0,this),`
`,n("p",{children:"如果现在的代码在 GitLab 上，那么 GitLab Runner 或者 DroneCI 都不错。"},void 0,!1,void 0,this),`
`,n("h2",{children:"esee"},void 0,!1,void 0,this),`
`,n("p",{children:n("em",{children:"2024-11-02 23:09:56 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:"以前也配置一套流程，后来发现我们用不到那么复杂的流程，自己写个 shell 脚本，远端程序备份，本地编译，打包压缩上传，解压后上线运行。就结束了。"},void 0,!1,void 0,this),`
`,n("h2",{children:"lgh"},void 0,!1,void 0,this),`
`,n("p",{children:n("em",{children:"2024-11-03 00:20:02 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:"可以试试 caprover，底层是 docker swarm"},void 0,!1,void 0,this),`
`,n("h2",{children:"echo0x000001"},void 0,!1,void 0,this),`
`,n("p",{children:n("em",{children:"2024-11-03 00:49:07 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:"阿里的 docker 服务不是有免费的吗"},void 0,!1,void 0,this),`
`,n("h2",{children:"echo0x000001"},void 0,!1,void 0,this),`
`,n("p",{children:n("em",{children:"2024-11-03 00:52:12 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:"看了下阿里的容器服务个人版，300 个免费仓库，完全够用了"},void 0,!1,void 0,this),`
`,n("h2",{children:"Trim21"},void 0,!1,void 0,this),`
`,n("p",{children:n("em",{children:"2024-11-03 01:06:36 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:"最简单/简陋的办法是用 gitea 的 hooks"},void 0,!1,void 0,this),`
`,n("h2",{children:"cdlnls"},void 0,!1,void 0,this),`
`,n("p",{children:n("em",{children:"2024-11-03 01:30:34 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:"单服务器，并且就一个前端＋后端的应用，我觉得没必要再单独整个 cicd 服务。"},void 0,!1,void 0,this),`
`,n("p",{children:"如果你的诉求只是“每次发现改点代码都要手动把文件传上去构建镜像，老麻烦了.”"},void 0,!1,void 0,this),`
`,n("p",{children:"那你可能缺的是代码 push 后，配置触发自动构建，这个基本上常见的代码托管平台都支持 webhook。"},void 0,!1,void 0,this),`
`,n("p",{children:"要说最小规模的，手写个脚本应该是最快最简单的成本最低的方法。"},void 0,!1,void 0,this),`
`,n("h2",{children:"devopsdogdog"},void 0,!1,void 0,this),`
`,n("p",{children:n("em",{children:"2024-11-03 03:03:26 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:"从运维或者架构角度，你这做法就不对吧。"},void 0,!1,void 0,this),`
`,n("ol",{children:[`
`,n("li",{children:[`
`,n("p",{children:"镜像和代码产物应该分开，减少编译和进行版本控制，环境代码解耦"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("li",{children:[`
`,n("p",{children:"为啥不考虑挂载。。。"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("h2",{children:"darrh00"},void 0,!1,void 0,this),`
`,n("p",{children:n("em",{children:"2024-11-03 03:22:06 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:"gitea+act runner"},void 0,!1,void 0,this),`
`,n("h2",{children:"amlee"},void 0,!1,void 0,this),`
`,n("p",{children:n("em",{children:"2024-11-03 03:45:59 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:"dokploy 就够了"},void 0,!1,void 0,this),`
`,n("h2",{children:"mayli"},void 0,!1,void 0,this),`
`,n("p",{children:n("em",{children:"2024-11-03 04:29:17 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:"最小的大概 cronjob git pull"},void 0,!1,void 0,this),`
`,n("h2",{children:"james122333"},void 0,!1,void 0,this),`
`,n("p",{children:n("em",{children:"2024-11-03 06:51:01 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:"@iminto"},void 0,!1,void 0,this),`
`,n("p",{children:"现在每个上层应用都是过于复杂的 gitlab jenkins 或其它有的没的都是 命令行才是直觉暴力的工具 基本教义才是最直面问题的"},void 0,!1,void 0,this),`
`,n("h2",{children:"muxinqi"},void 0,!1,void 0,this),`
`,n("p",{children:n("em",{children:"2024-11-03 07:34:23 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:["Kamal - ",n("a",{href:"https://kamal-deploy.org",children:"https://kamal-deploy.org"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("h2",{children:"JustDoIt221"},void 0,!1,void 0,this),`
`,n("p",{children:n("em",{children:"2024-11-03 08:15:01 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:["我来说一个 onedev ",n("a",{href:"https://github.com/theonedev/onedev",children:"https://github.com/theonedev/onedev"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("h2",{children:"NX2023"},void 0,!1,void 0,this),`
`,n("p",{children:n("em",{children:"2024-11-03 09:53:13 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:"@echo0x000001 对哇我记得个人版很够用了，再在 docker compose 里加个 watchtower，只用在 cicd 里推镜像就好了，那边会自动拉取"},void 0,!1,void 0,this),`
`,n("h2",{children:"wuoty"},void 0,!1,void 0,this),`
`,n("p",{children:n("em",{children:"2024-11-03 10:01:14 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:"阿里云容器镜像服务个人版不是免费的么，300 个仓库+Webhook 应该能完成 CICD 的流程了"},void 0,!1,void 0,this),`
`,n("h2",{children:"wangyzj"},void 0,!1,void 0,this),`
`,n("p",{children:n("em",{children:"2024-11-03 10:38:52 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:"一个 jenkins 够了"},void 0,!1,void 0,this),`
`,n("h2",{children:"windcode"},void 0,!1,void 0,this),`
`,n("p",{children:n("em",{children:"2024-11-03 11:11:03 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:"只要使用了 docker，构建镜像这一步是少不了的，区别是自动构建还是手动构建。"},void 0,!1,void 0,this),`
`,n("p",{children:"你的例子里最简单的就是 Git + Docker Compose，本地代码开发完 git push，然后在 VPS 上 git pull + docker compose 自动构建，对于小型应用来说足够了。"},void 0,!1,void 0,this),`
`,n("p",{children:"如果想进一步自动化，Github Action + 本地 runner 足够。"},void 0,!1,void 0,this),`
`,n("h2",{children:"realpg"},void 0,!1,void 0,this),`
`,n("p",{children:n("em",{children:"2024-11-03 13:25:35 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:"直接基于 git webhook 自己写处理脚本 不需要任何成型系统"},void 0,!1,void 0,this),`
`,n("h2",{children:"COW"},void 0,!1,void 0,this),`
`,n("p",{children:n("em",{children:"2024-11-03 13:36:30 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:"不在乎用户体验的话，前后端别 docker 了，直接远程连到服务器上写代码，直接服务器上构建发布就得了"},void 0,!1,void 0,this),`
`,n("h2",{children:"Dragonphy"},void 0,!1,void 0,this),`
`,n("p",{children:n("em",{children:"2024-11-03 13:46:17 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:"用 Gitea Actions 怎么解决网络问题？全都是 pull github 的。"},void 0,!1,void 0,this),`
`,n("h2",{children:"github2020"},void 0,!1,void 0,this),`
`,n("p",{children:n("em",{children:"2024-11-03 15:17:26 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:"Gitea + ActRunner 最节约资源，兼容 Github Actions"},void 0,!1,void 0,this),`
`,n("p",{children:n("a",{href:"https://docs.gitea.com/usage/actions/act-runner",children:"https://docs.gitea.com/usage/actions/act-runner"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("h2",{children:"anjv"},void 0,!1,void 0,this),`
`,n("p",{children:n("em",{children:"2024-11-03 15:24:43 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:"git 有 hook 功能。"},void 0,!1,void 0,this),`
`,n("p",{children:"ssh 服务器可以当作是 git 服务器。"},void 0,!1,void 0,this),`
`,n("p",{children:"远程服务器上创建裸仓库"},void 0,!1,void 0,this),`
`,n("p",{children:"cd && git init --bare test.git"},void 0,!1,void 0,this),`
`,n("p",{children:"本地"},void 0,!1,void 0,this),`
`,n("p",{children:"git clone ssh://用户名 @地址:/home/用户名/test.git"},void 0,!1,void 0,this),`
`,n("p",{children:"服务器上配置好编译环境，写 githook。"},void 0,!1,void 0,this),`
`,n("p",{children:"git push 的时候就调用 hook 脚本帮你编译代码。"},void 0,!1,void 0,this),`
`,n("h2",{children:"forevam"},void 0,!1,void 0,this),`
`,n("p",{children:n("em",{children:"2024-11-03 17:20:25 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:"coding 每个月 10 小时免费。看看能覆盖不？"},void 0,!1,void 0,this),`
`,n("h2",{children:"shenyuzhi"},void 0,!1,void 0,this),`
`,n("p",{children:n("em",{children:"2024-11-03 17:30:59 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:"一个 shell 脚本的事情"},void 0,!1,void 0,this),`
`,n("h2",{children:"ByteCat"},void 0,!1,void 0,this),`
`,n("p",{children:n("em",{children:"2024-11-03 18:59:24 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:"之前用 Gitea+Drone，现在 Gitea 出 Actions 了就用 Gitea Actions，基本兼容 GitHub Actions，但用得多的话有些功能还没实现，简单的都可以代替了，还不错"},void 0,!1,void 0,this),`
`,n("h2",{children:"shimada666"},void 0,!1,void 0,this),`
`,n("p",{children:n("em",{children:"2024-11-03 19:37:18 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:"可以用阿里云云效，不用自己维护 cicd 服务"},void 0,!1,void 0,this),`
`,n("h2",{children:"version"},void 0,!1,void 0,this),`
`,n("p",{children:n("em",{children:"2024-11-03 19:46:40 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:"gitLab-ci 是不错的。可以当 cicd 镜像编译工具....可以当运行器..跑 sh 或者 自己编译私有 docker run 来跑脚本..."},void 0,!1,void 0,this),`
`,n("p",{children:"也可以当运维工具..定时器也有..ssh 密钥等可以放在 cicd 的变量里面加密.."},void 0,!1,void 0,this),`
`,n("p",{children:"说真的 jenins 基本我都卸载了。有点老套"},void 0,!1,void 0,this),`
`,n("h2",{children:"aaronnum7"},void 0,!1,void 0,this),`
`,n("p",{children:n("em",{children:"2024-11-03 21:07:16 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:"参考我之前的技术栈"},void 0,!1,void 0,this),`
`,n("h2",{children:"aaronnum7"},void 0,!1,void 0,this),`
`,n("p",{children:n("em",{children:"2024-11-03 21:09:26 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:"@aaronnum7 点错了，我也是单服务器的，技术栈是"},void 0,!1,void 0,this),`
`,n("p",{children:"运行系统：k3s"},void 0,!1,void 0,this),`
`,n("p",{children:"镜像管理：免费的 Dockerhub"},void 0,!1,void 0,this),`
`,n("p",{children:"CI/CD：dagger，Docker 创始人新项目。非常好用，支持用编程语言写 CI/CD 代码。最后一个命令，直接本地构建推送部署。"},void 0,!1,void 0,this),`
`,n("h2",{children:"sampeng"},void 0,!1,void 0,this),`
`,n("p",{children:n("em",{children:"2024-11-03 21:21:16 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:"哪那么麻烦。。gitlab 你装上啥都有了。。写 gitlab-ci.yaml 就完事了"},void 0,!1,void 0,this),`
`,n("hr",{},void 0,!1,void 0,this),`
`,n("ul",{children:[`
`,n("li",{children:"2024 年 11 月 3 日，转载"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)}export{p as default};
