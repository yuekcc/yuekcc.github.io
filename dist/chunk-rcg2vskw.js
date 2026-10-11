import{s}from"/dist/chunk-6k8ey1xy.js";function n(){return s("div",{class:"markdown-body",dangerouslySetInnerHTML:{__html:`<h1>最小规模的 CI/CD 的技术栈讨论</h1><p>原文地址：<a href="https://v2ex.com/t/1086033#reply58">https://v2ex.com/t/1086033#reply58</a></p><h2>importmeta</h2><p><em>2024-11-02 17:23:06 +08:00</em></p><p>搞了个应用，有前端，Node 后端，Redis, Postgres, Nginx, Grafana Loki Promtail.
用 Docker Compose 启动了一下，每次发现改点代码都要手动把文件传上去构建镜像，老麻烦了.
一看阿里云容器镜像服务，收费还很贵，不适合我.
谢谢了。</p><h2>agagega</h2><p><em>2024-11-02 17:23:58 +08:00</em></p><p>Buildbot ？</p><h2>tms</h2><p><em>2024-11-02 17:42:19 +08:00</em></p><p>Gitea ？</p><h2>RightHand</h2><p><em>2024-11-02 17:46:30 +08:00</em></p><p>gitea+Jenkins 配合 docker 基本满足</p><h2>iminto</h2><p><em>2024-11-02 17:47:57 +08:00</em></p><p>jenkins，靠谱，不依赖 docker，离线部署</p><h2>zhcode</h2><p><em>2024-11-02 17:54:36 +08:00</em></p><p>只在公司用过 Jenkins，轻量的话 听说 drone 不错</p><h2>Livid</h2><p><em>2024-11-02 17:55:42 +08:00</em></p><p>GitHub Action + 本地 runner</p><h2>Cola98</h2><p><em>2024-11-02 17:57:10 +08:00</em></p><p>makefile ？</p><h2>crackidz</h2><p><em>2024-11-02 18:06:25 +08:00</em></p><p>Github Action / GitLab Runner</p><h2>XiLingHost</h2><p><em>2024-11-02 18:07:49 +08:00</em></p><p>gitea+gitea runner，兼容 GitHub Action 语法</p><p>参考写法</p><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8" tabindex="0"><code><span class="line"><span style="color:#85E89D">services</span><span style="color:#E1E4E8">:</span></span>
<span class="line"><span style="color:#85E89D">  server</span><span style="color:#E1E4E8">:</span></span>
<span class="line"><span style="color:#85E89D">    image</span><span style="color:#E1E4E8">: </span><span style="color:#9ECBFF">gitea/gitea:latest</span></span>
<span class="line"></span>
<span class="line"><span style="color:#85E89D">    restart</span><span style="color:#E1E4E8">: </span><span style="color:#9ECBFF">always</span></span>
<span class="line"></span>
<span class="line"><span style="color:#85E89D">    ports</span><span style="color:#E1E4E8">:</span></span>
<span class="line"><span style="color:#E1E4E8">      - </span><span style="color:#9ECBFF">'3000:3000'</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8">      - </span><span style="color:#9ECBFF">'127.0.0.1:2222:22'</span></span>
<span class="line"></span>
<span class="line"><span style="color:#85E89D">    environment</span><span style="color:#E1E4E8">:</span></span>
<span class="line"><span style="color:#E1E4E8">      - </span><span style="color:#9ECBFF">USER_UID=998</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8">      - </span><span style="color:#9ECBFF">USER_GID=974</span></span>
<span class="line"></span>
<span class="line"><span style="color:#85E89D">    volumes</span><span style="color:#E1E4E8">:</span></span>
<span class="line"><span style="color:#E1E4E8">      - </span><span style="color:#9ECBFF">./data:/data</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8">      - </span><span style="color:#9ECBFF">/home/git/.ssh/:/data/git/.ssh</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8">      - </span><span style="color:#9ECBFF">/etc/timezone:/etc/timezone:ro</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8">      - </span><span style="color:#9ECBFF">/etc/localtime:/etc/localtime:ro</span></span>
<span class="line"></span>
<span class="line"><span style="color:#85E89D">  runner</span><span style="color:#E1E4E8">:</span></span>
<span class="line"><span style="color:#85E89D">    image</span><span style="color:#E1E4E8">: </span><span style="color:#9ECBFF">gitea/act_runner:latest</span></span>
<span class="line"></span>
<span class="line"><span style="color:#85E89D">    restart</span><span style="color:#E1E4E8">: </span><span style="color:#9ECBFF">always</span></span>
<span class="line"></span>
<span class="line"><span style="color:#85E89D">    depends_on</span><span style="color:#E1E4E8">:</span></span>
<span class="line"><span style="color:#E1E4E8">      - </span><span style="color:#9ECBFF">server</span></span>
<span class="line"></span>
<span class="line"><span style="color:#85E89D">    ports</span><span style="color:#E1E4E8">:</span></span>
<span class="line"><span style="color:#E1E4E8">      - </span><span style="color:#9ECBFF">'8088:8088'</span></span>
<span class="line"></span>
<span class="line"><span style="color:#85E89D">    volumes</span><span style="color:#E1E4E8">:</span></span>
<span class="line"><span style="color:#E1E4E8">      - </span><span style="color:#9ECBFF">./runner_data:/data</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8">      - </span><span style="color:#9ECBFF">./runner_config.yaml:/config.yaml</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8">      - </span><span style="color:#9ECBFF">/etc/localtime:/etc/localtime:ro</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8">      - </span><span style="color:#9ECBFF">/var/run/docker.sock:/var/run/docker.sock</span></span>
<span class="line"></span>
<span class="line"><span style="color:#85E89D">    environment</span><span style="color:#E1E4E8">:</span></span>
<span class="line"><span style="color:#E1E4E8">      - </span><span style="color:#9ECBFF">CONFIG_FILE=/config.yaml</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8">      - </span><span style="color:#9ECBFF">GITEA_INSTANCE_URL=[redacted]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8">      - </span><span style="color:#9ECBFF">GITEA_RUNNER_REGISTRATION_TOKEN=[redacted]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8">      - </span><span style="color:#9ECBFF">GITEA_RUNNER_NAME=default</span></span>
<span class="line"></span></code></pre><p>其中 runner_config.yaml 是用于处理 cache 的，其内容类似于</p><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8" tabindex="0"><code><span class="line"><span style="color:#85E89D">cache</span><span style="color:#E1E4E8">:</span></span>
<span class="line"><span style="color:#85E89D">  enabled</span><span style="color:#E1E4E8">: </span><span style="color:#79B8FF">true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D">  #  dir: ""</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D">  # Use the LAN IP obtained in step 1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#85E89D">  host</span><span style="color:#E1E4E8">: </span><span style="color:#9ECBFF">'10.10.10.12'</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D">  # Use the port number obtained in step 2</span></span>
<span class="line"></span>
<span class="line"><span style="color:#85E89D">  port</span><span style="color:#E1E4E8">: </span><span style="color:#79B8FF">8088</span></span>
<span class="line"></span></code></pre><p>如果遇到问题可以参考 https://docs.gitea.com/zh-cn/usage/actions/overview 这里</p><p>另外有时候默认的标签会有问题，可以考虑修改./runner_data/.runner 里面的 labels 为</p><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="color:#9ECBFF">"labels"</span><span style="color:#E1E4E8">: [</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9ECBFF">    "ubuntu-latest:docker://catthehacker/ubuntu:act-latest"</span><span style="color:#E1E4E8">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9ECBFF">    "ubuntu-22.04:docker://catthehacker/ubuntu:act-22.04"</span><span style="color:#E1E4E8">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9ECBFF">    "ubuntu-20.04:docker://catthehacker/ubuntu:act-20.04"</span><span style="color:#E1E4E8">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9ECBFF">    "ubuntu-18.04:docker://catthehacker/ubuntu:act-20.04"</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8">  ]</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><h2>XiLingHost</h2><p><em>2024-11-02 18:12:08 +08:00</em></p><p>@Livid 站长可以考虑给评论区加上 markdown 支持吗，或者至少加个不会破坏缩进的代码块语法支持？</p><h2>Ipsum</h2><p><em>2024-11-02 18:24:18 +08:00</em></p><p>我都是 makefile 一把梭，本地构建然后 push 过去部署</p><h2>yveJohn</h2><p><em>2024-11-02 18:47:29 +08:00</em></p><p>gitea+drone 轻量又丝滑</p><h2>bbchannails</h2><p><em>2024-11-02 18:54:32 +08:00</em></p><p>idea 同步代码，sync to remote 就行。特别适合解释型的语言，java 也可以，但是要解开容器不要用 fat jar</p><h2>FlytoSirius</h2><p><em>2024-11-02 19:18:37 +08:00</em></p><p>别 Jenkins 了，你会费心死的，还是直接用 GitLab 吧</p><h2>james122333</h2><p><em>2024-11-02 19:23:22 +08:00</em></p><p>git hook scripts + shell</p><p>最迷你没有之一</p><p>https://githooks.com</p><h2>gongquanlin</h2><p><em>2024-11-02 19:28:39 +08:00</em></p><p>直接写 shell；</p><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="color:#6A737D">#!/bin/bash</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D"># 指定目标 IP 和用户</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8">TARGET_IP</span><span style="color:#F97583">=</span><span style="color:#9ECBFF">"127.0.0.1"</span><span style="color:#6A737D">  # 替换为目标服务器的 IP 地址</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8">USER</span><span style="color:#F97583">=</span><span style="color:#9ECBFF">"root"</span><span style="color:#6A737D">         # 替换为你的 SSH 用户名</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8">PASSWORD</span><span style="color:#F97583">=</span><span style="color:#9ECBFF">"aasdf"</span><span style="color:#6A737D">            # SSH 密码</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D"># 本地文件路径</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8">LOCAL_FILE</span><span style="color:#F97583">=</span><span style="color:#9ECBFF">"./dist/linux/main"</span><span style="color:#6A737D">  # 本地文件路径</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8">REMOTE_FILE</span><span style="color:#F97583">=</span><span style="color:#9ECBFF">"/home/opt/helloworld"</span><span style="color:#6A737D">  # 远程文件路径</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0">sshpass</span><span style="color:#79B8FF"> -p</span><span style="color:#9ECBFF"> "\${</span><span style="color:#E1E4E8">PASSWORD</span><span style="color:#9ECBFF">}"</span><span style="color:#9ECBFF"> scp</span><span style="color:#79B8FF"> -O</span><span style="color:#E1E4E8"> \${LOCAL_FILE} \${USER}</span><span style="color:#9ECBFF">@</span><span style="color:#E1E4E8">\${TARGET_IP}</span><span style="color:#9ECBFF">:</span><span style="color:#E1E4E8">\${REMOTE_FILE}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF">echo</span><span style="color:#9ECBFF"> "upload \${</span><span style="color:#E1E4E8">TARGET_IP</span><span style="color:#9ECBFF">} success"</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D"># 使用 sshpass 连接到指定 IP</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0">sshpass</span><span style="color:#79B8FF"> -p</span><span style="color:#9ECBFF"> "\${</span><span style="color:#E1E4E8">PASSWORD</span><span style="color:#9ECBFF">}"</span><span style="color:#9ECBFF"> ssh</span><span style="color:#E1E4E8"> \${USER}</span><span style="color:#9ECBFF">@</span><span style="color:#E1E4E8">\${TARGET_IP} </span><span style="color:#F97583">&#x3C;&#x3C;</span><span style="color:#9ECBFF"> EOF</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9ECBFF">  # 进入指定目录</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9ECBFF">  cd /home/opt/</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#9ECBFF">  # 停止 Docker 容器</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9ECBFF">  docker compose down</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#9ECBFF">  # 替换文件</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9ECBFF">  cp \${</span><span style="color:#E1E4E8">REMOTE_FILE</span><span style="color:#9ECBFF">} main</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#9ECBFF">  # 启动 Docker 容器</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9ECBFF">  docker compose up -d</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9ECBFF">EOF</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF">echo</span><span style="color:#9ECBFF"> "deploy \${</span><span style="color:#E1E4E8">TARGET_IP</span><span style="color:#9ECBFF">} success"</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><h2>james122333</h2><p><em>2024-11-02 19:29:36 +08:00</em></p><p>懂这个差不多就可以自己做一个类似 gitlab jenkins 的出来了</p><h2>james122333</h2><p><em>2024-11-02 19:47:49 +08:00</em></p><p>当有人讲 gitlab jenkins 等东西有多屌</p><p>你就可以跟他说 "少年 你对力量 一无所知"</p><h2>hb0730</h2><p><em>2024-11-02 19:50:59 +08:00</em></p><p>drone 还不错</p><h2>seth19960929</h2><p><em>2024-11-02 20:01:00 +08:00</em></p><p>试试免费的 coding, 每个月好像有免费的机器给你构建，基本都够我用。</p><p>像我的博客用 hugo, 在 coding 构建好 HTML, 直接部署</p><h2>XuHuan1025</h2><p><em>2024-11-02 21:32:19 +08:00</em></p><p>@XiLingHost #10</p><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="color:#E1E4E8">chmod </span><span style="color:#F97583">-</span><span style="color:#E1E4E8">R </span><span style="color:#79B8FF">777</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><h2>XuHuan1025</h2><p><em>2024-11-02 21:33:53 +08:00</em></p><p>兄弟们 问题来了 内网怎么 ci/cd 用的 jenkins-nexus-docker 导包啥的真恶心啊</p><h2>jeesk</h2><p><em>2024-11-02 21:36:42 +08:00</em></p><p>啥项目？个人项目，直接本地构建，公司项目，当然是 jenkins，舍得花钱直接买付费的 ci 就行了</p><h2>iminto</h2><p><em>2024-11-02 21:41:36 +08:00</em></p><p>当有人说 jenkins 多 low 多古董的话，你就可以跟他说 "少年 你对力量 一无所知"</p><p>jenkins 之外，皆是歪门邪道。</p><p>要么依赖 docker，让环境部署变得异常复杂，要么功能和概念过于复杂。</p><p>你说依赖 docker，首先 docker 在中国大陆就很难下载，就算解决了网络问题，还得配离线仓库，把问题搞那么复杂。</p><p>jenkins 就是一个 war 包，傻瓜式部署，简单到不能再简单。</p><h2>XiLingHost</h2><p><em>2024-11-02 21:51:50 +08:00</em></p><p>@iminto 建议多用用，Jenkins 光是各种插件依赖要管理起来就很麻烦了，到时候照样要走梯子</p><p>纯写 ssh 又要管理脚本，然后你 pipeline 是不是还要额外的仓库来存储，凭据怎么管理，是不是要做统一身份认证，要不要和 git 服务做整合</p><p>还有你怎么处理 workspace 的环境干净，最后还不是要引入容器化甚至虚拟化确保构建可重复性？</p><p>然后你要事件触发是不是还要额外配置 Jenkins 项目里的轮询，每次改构建流程和参数是不是要改 3 个地方，一个是项目本身的代码，一个是 pipeline 的 jenkinsfile，然后还要在界面上配置 job 的参数修改和触发时机，这不是引入了更多的复杂度？</p><h2>XiLingHost</h2><p><em>2024-11-02 21:55:29 +08:00</em></p><p>@iminto Jenkins 确实很好用，功能也很强大，在某些特定的场景下是最佳的选择（比如你要传递很多复杂的参数并且需要界面跟随你的选择调整可选择的参数），但是并不能覆盖所有的场景，比如本主题提到的“单服务器最小规模 CI/CD”，Jenkins 的资源消耗并不低，同时它的部署和管理以及使用也没有想象中的那么简单和方便，要实现和 GitHub Action 一样的便利性还是有相当的差距。</p><h2>wangee</h2><p><em>2024-11-02 21:56:19 +08:00</em></p><p>如果现有的代码可以依托于 Gitea 的话，Gitea + Gitea Runner 足够了，如果喜欢 GitLab CI/CD 的语法，可以用 DroneCI。</p><p>如果现在的代码在 GitLab 上，那么 GitLab Runner 或者 DroneCI 都不错。</p><h2>esee</h2><p><em>2024-11-02 23:09:56 +08:00</em></p><p>以前也配置一套流程，后来发现我们用不到那么复杂的流程，自己写个 shell 脚本，远端程序备份，本地编译，打包压缩上传，解压后上线运行。就结束了。</p><h2>lgh</h2><p><em>2024-11-03 00:20:02 +08:00</em></p><p>可以试试 caprover，底层是 docker swarm</p><h2>echo0x000001</h2><p><em>2024-11-03 00:49:07 +08:00</em></p><p>阿里的 docker 服务不是有免费的吗</p><h2>echo0x000001</h2><p><em>2024-11-03 00:52:12 +08:00</em></p><p>看了下阿里的容器服务个人版，300 个免费仓库，完全够用了</p><h2>Trim21</h2><p><em>2024-11-03 01:06:36 +08:00</em></p><p>最简单/简陋的办法是用 gitea 的 hooks</p><h2>cdlnls</h2><p><em>2024-11-03 01:30:34 +08:00</em></p><p>单服务器，并且就一个前端＋后端的应用，我觉得没必要再单独整个 cicd 服务。</p><p>如果你的诉求只是“每次发现改点代码都要手动把文件传上去构建镜像，老麻烦了.”</p><p>那你可能缺的是代码 push 后，配置触发自动构建，这个基本上常见的代码托管平台都支持 webhook。</p><p>要说最小规模的，手写个脚本应该是最快最简单的成本最低的方法。</p><h2>devopsdogdog</h2><p><em>2024-11-03 03:03:26 +08:00</em></p><p>从运维或者架构角度，你这做法就不对吧。</p><ol><li><p>镜像和代码产物应该分开，减少编译和进行版本控制，环境代码解耦</p></li><li><p>为啥不考虑挂载。。。</p></li></ol><h2>darrh00</h2><p><em>2024-11-03 03:22:06 +08:00</em></p><p>gitea+act runner</p><h2>amlee</h2><p><em>2024-11-03 03:45:59 +08:00</em></p><p>dokploy 就够了</p><h2>mayli</h2><p><em>2024-11-03 04:29:17 +08:00</em></p><p>最小的大概 cronjob git pull</p><h2>james122333</h2><p><em>2024-11-03 06:51:01 +08:00</em></p><p>@iminto</p><p>现在每个上层应用都是过于复杂的 gitlab jenkins 或其它有的没的都是 命令行才是直觉暴力的工具 基本教义才是最直面问题的</p><h2>muxinqi</h2><p><em>2024-11-03 07:34:23 +08:00</em></p><p>Kamal - https://kamal-deploy.org</p><h2>JustDoIt221</h2><p><em>2024-11-03 08:15:01 +08:00</em></p><p>我来说一个 onedev https://github.com/theonedev/onedev</p><h2>NX2023</h2><p><em>2024-11-03 09:53:13 +08:00</em></p><p>@echo0x000001 对哇我记得个人版很够用了，再在 docker compose 里加个 watchtower，只用在 cicd 里推镜像就好了，那边会自动拉取</p><h2>wuoty</h2><p><em>2024-11-03 10:01:14 +08:00</em></p><p>阿里云容器镜像服务个人版不是免费的么，300 个仓库+Webhook 应该能完成 CICD 的流程了</p><h2>wangyzj</h2><p><em>2024-11-03 10:38:52 +08:00</em></p><p>一个 jenkins 够了</p><h2>windcode</h2><p><em>2024-11-03 11:11:03 +08:00</em></p><p>只要使用了 docker，构建镜像这一步是少不了的，区别是自动构建还是手动构建。</p><p>你的例子里最简单的就是 Git + Docker Compose，本地代码开发完 git push，然后在 VPS 上 git pull + docker compose 自动构建，对于小型应用来说足够了。</p><p>如果想进一步自动化，Github Action + 本地 runner 足够。</p><h2>realpg</h2><p><em>2024-11-03 13:25:35 +08:00</em></p><p>直接基于 git webhook 自己写处理脚本 不需要任何成型系统</p><h2>COW</h2><p><em>2024-11-03 13:36:30 +08:00</em></p><p>不在乎用户体验的话，前后端别 docker 了，直接远程连到服务器上写代码，直接服务器上构建发布就得了</p><h2>Dragonphy</h2><p><em>2024-11-03 13:46:17 +08:00</em></p><p>用 Gitea Actions 怎么解决网络问题？全都是 pull github 的。</p><h2>github2020</h2><p><em>2024-11-03 15:17:26 +08:00</em></p><p>Gitea + ActRunner 最节约资源，兼容 Github Actions</p><p>https://docs.gitea.com/usage/actions/act-runner</p><h2>anjv</h2><p><em>2024-11-03 15:24:43 +08:00</em></p><p>git 有 hook 功能。</p><p>ssh 服务器可以当作是 git 服务器。</p><p>远程服务器上创建裸仓库</p><p>cd &amp;&amp; git init --bare test.git</p><p>本地</p><p>git clone ssh://用户名 @地址:/home/用户名/test.git</p><p>服务器上配置好编译环境，写 githook。</p><p>git push 的时候就调用 hook 脚本帮你编译代码。</p><h2>forevam</h2><p><em>2024-11-03 17:20:25 +08:00</em></p><p>coding 每个月 10 小时免费。看看能覆盖不？</p><h2>shenyuzhi</h2><p><em>2024-11-03 17:30:59 +08:00</em></p><p>一个 shell 脚本的事情</p><h2>ByteCat</h2><p><em>2024-11-03 18:59:24 +08:00</em></p><p>之前用 Gitea+Drone，现在 Gitea 出 Actions 了就用 Gitea Actions，基本兼容 GitHub Actions，但用得多的话有些功能还没实现，简单的都可以代替了，还不错</p><h2>shimada666</h2><p><em>2024-11-03 19:37:18 +08:00</em></p><p>可以用阿里云云效，不用自己维护 cicd 服务</p><h2>version</h2><p><em>2024-11-03 19:46:40 +08:00</em></p><p>gitLab-ci 是不错的。可以当 cicd 镜像编译工具....可以当运行器..跑 sh 或者 自己编译私有 docker run 来跑脚本...</p><p>也可以当运维工具..定时器也有..ssh 密钥等可以放在 cicd 的变量里面加密..</p><p>说真的 jenins 基本我都卸载了。有点老套</p><h2>aaronnum7</h2><p><em>2024-11-03 21:07:16 +08:00</em></p><p>参考我之前的技术栈</p><h2>aaronnum7</h2><p><em>2024-11-03 21:09:26 +08:00</em></p><p>@aaronnum7 点错了，我也是单服务器的，技术栈是</p><p>运行系统：k3s</p><p>镜像管理：免费的 Dockerhub</p><p>CI/CD：dagger，Docker 创始人新项目。非常好用，支持用编程语言写 CI/CD 代码。最后一个命令，直接本地构建推送部署。</p><h2>sampeng</h2><p><em>2024-11-03 21:21:16 +08:00</em></p><p>哪那么麻烦。。gitlab 你装上啥都有了。。写 gitlab-ci.yaml 就完事了</p><hr /><ul><li>2024 年 11 月 3 日，转载</li></ul>`}},void 0,!1,void 0,this)}export{n as default};
