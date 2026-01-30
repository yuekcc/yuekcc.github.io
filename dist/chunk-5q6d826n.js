import{d as n,g as p}from"/dist/chunk-9xt68df4.js";function e(){return p("div",{class:"markdown-body",children:p(n,{children:[p("h1",{children:"从微服务走向单体化"},void 0,!1,void 0,this),`
`,p("p",{children:["原文地址：",p("a",{href:"https://v2ex.com/t/1106152#reply86",children:"https://v2ex.com/t/1106152#reply86"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,p("blockquote",{children:[`
`,p("p",{children:"微服务的两个最大的意义：独立发布和独立伸缩"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,p("h2",{children:"xhwdy26"},void 0,!1,void 0,this),`
`,p("p",{children:p("em",{children:"2025-01-18 22:26:53 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,p("p",{children:`CEO 觉得微服务部署极其繁琐，什么 nacos、mq、redis 都好复杂，远不如零几年的开发一条龙从后台到前端那么简单。
要求把十来个微服务 (用户、订单、后台、网关等）合并成一个。
简化部署，只一台机器搞定。
试问，这种单体程序最后以怎样的方式崩溃。`},void 0,!1,void 0,this),`
`,p("h2",{children:"ruxuan1306"},void 0,!1,void 0,this),`
`,p("p",{children:p("em",{children:"2025-01-18 22:30:24 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,p("p",{children:"系统架构本质是组织架构的表现。"},void 0,!1,void 0,this),`
`,p("h2",{children:"lucasj"},void 0,!1,void 0,this),`
`,p("p",{children:p("em",{children:"2025-01-18 22:33:37 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,p("p",{children:"降本增效"},void 0,!1,void 0,this),`
`,p("h2",{children:"loveyu"},void 0,!1,void 0,this),`
`,p("p",{children:p("em",{children:"2025-01-18 22:51:48 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,p("p",{children:"挺好的，崩溃无非就是某段代码 cpu 或内存占用过高，然后 boom。微服务崩了也没啥差别。"},void 0,!1,void 0,this),`
`,p("h2",{children:"sagaxu"},void 0,!1,void 0,this),`
`,p("p",{children:p("em",{children:"2025-01-18 22:53:15 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,p("p",{children:"2020 年之后，确实涌现出一堆从微服务回归单体的尝试，其中包括 amazon 这样的微服务先锋大厂。在提出微服务概念之前，就有大量比你们系统复杂十倍甚至一百倍以上的单体系统，一个单体程序几个 GB，启动时间按十分钟为基本单位，他们崩溃了吗？"},void 0,!1,void 0,this),`
`,p("h2",{children:"yinmin"},void 0,!1,void 0,this),`
`,p("p",{children:p("em",{children:"2025-01-18 22:57:46 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,p("p",{children:"看用户量和并发量，如果用户量在几百万量级，每秒并发在 1000 以下，单体还是很好用的。"},void 0,!1,void 0,this),`
`,p("p",{children:"如果找网红直播，同一时间突发上万人在线，单体大概率会崩溃。因为，单体通常不会用消息队列，高并发无法转化为队列依次处理，然后就堵塞崩溃了。"},void 0,!1,void 0,this),`
`,p("h2",{children:"lqw3030"},void 0,!1,void 0,this),`
`,p("p",{children:p("em",{children:"2025-01-18 23:00:53 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,p("p",{children:"提供一个思路，你建立一个独立 moduel 把所有模块都引了，然后 scan 里扫所有子模块的包，这样就可以快速实现“单体服务”，并且在想要水平扩容时仍可以模块独立打包"},void 0,!1,void 0,this),`
`,p("h2",{children:"mbeoliero123"},void 0,!1,void 0,this),`
`,p("p",{children:p("em",{children:"2025-01-18 23:01:49 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,p("p",{children:"@yinmin 几百万，单体扛不住吧"},void 0,!1,void 0,this),`
`,p("h2",{children:"csys"},void 0,!1,void 0,this),`
`,p("p",{children:p("em",{children:"2025-01-18 23:02:06 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,p("p",{children:"微服务的两个最大的意义：独立发布和独立伸缩"},void 0,!1,void 0,this),`
`,p("p",{children:"你们如果不需要，就可以不搞微服务呗"},void 0,!1,void 0,this),`
`,p("p",{children:"不过我觉得你们 CEO 大概率只是因为“零几年的开发一条龙”是他认知的舒适区，而你们没有一个有能力的 CTO 或者架构师来把 DevOps 和基础设施做起来？"},void 0,!1,void 0,this),`
`,p("h2",{children:"yinmin"},void 0,!1,void 0,this),`
`,p("p",{children:p("em",{children:"2025-01-18 23:03:21 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,p("p",{children:"@xhwdy26 你问问领导： (1) 会不会找网红直播 (2) 会不会同一时间突发上万人在线下单 (3) 要不要用消息队列应对高并发。如果都是 NO，改单体问题不大。"},void 0,!1,void 0,this),`
`,p("h2",{children:"csys"},void 0,!1,void 0,this),`
`,p("p",{children:p("em",{children:"2025-01-18 23:05:10 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,p("p",{children:"等等"},void 0,!1,void 0,this),`
`,p("blockquote",{children:[`
`,p("p",{children:"简化部署，只一台机器搞定。"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,p("p",{children:"???是字面意义的一台机器吗？"},void 0,!1,void 0,this),`
`,p("p",{children:"我以为是要从微服务转向分布式同构单体，合着你们是直接退分布式回归单机吗？啥业务啊，这么不要求可用性的"},void 0,!1,void 0,this),`
`,p("h2",{children:"yinmin"},void 0,!1,void 0,this),`
`,p("p",{children:p("em",{children:"2025-01-18 23:11:52 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,p("p",{children:"@mbeoliero123 #7 单体是否能扛住，主要看每秒并发，用户总量百万只是参考值。每秒并发 1000 以下，大致上限是 5000-1 万人同时在用系统，单体大致也就这个量级了，并发再上一个量级，就需要用消息队列 mq 将并发事务转换成队列，而单体基本上是不太会用 mq 的。"},void 0,!1,void 0,this),`
`,p("h2",{children:"me1onsoda"},void 0,!1,void 0,this),`
`,p("p",{children:p("em",{children:"2025-01-18 23:14:02 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,p("p",{children:"@yinmin 这跟单体微服务有什么关系？会不会崩溃取决于内存，配置不够微服务也崩给你看"},void 0,!1,void 0,this),`
`,p("h2",{children:"mbeoliero123"},void 0,!1,void 0,this),`
`,p("p",{children:p("em",{children:"2025-01-18 23:14:50 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,p("p",{children:"@yinmin #11 单体服务怎么部署？还是走 k8s 那套吗？好像没有必要？"},void 0,!1,void 0,this),`
`,p("h2",{children:"xhwdy26"},void 0,!1,void 0,this),`
`,p("p",{children:p("em",{children:"2025-01-18 23:19:46 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,p("p",{children:"单体部署就是一个超级 jar 包加启动脚本加大内存"},void 0,!1,void 0,this),`
`,p("p",{children:"我觉得苦了开发人员，因为每个人都负责不同的模块，有的负责订单，有的负责后台等等"},void 0,!1,void 0,this),`
`,p("h2",{children:"me1onsoda"},void 0,!1,void 0,this),`
`,p("p",{children:p("em",{children:"2025-01-18 23:23:40 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,p("p",{children:"Java 搞微服务是最傻 X 的，本身就重再加上 spring 这个庞然大物，还要分开搞微服务，每一个服务冗余了这么重基础设施，浪费了不知道多少内存。历史问题属于没办法，现在还这么干真是没苦硬吃"},void 0,!1,void 0,this),`
`,p("h2",{children:"cj323"},void 0,!1,void 0,this),`
`,p("p",{children:p("em",{children:"2025-01-18 23:24:04 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,p("ol",{children:[`
`,p("li",{children:[`
`,p("p",{children:"IO 或 CPU 扛不住"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,p("li",{children:[`
`,p("p",{children:"服务器硬件问题"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,p("li",{children:[`
`,p("p",{children:"网络问题"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,p("li",{children:[`
`,p("p",{children:"受到攻击"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,p("h2",{children:"yinmin"},void 0,!1,void 0,this),`
`,p("p",{children:p("em",{children:"2025-01-18 23:27:48 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,p("p",{children:"@me1onsoda #12 微服务有同步通讯 (API) 和异步通讯 (MQ)，如果在高并发下使用异步通讯 (MQ)，系统是不会崩溃的，通过微服务伸缩机制能够在秒级快速克隆出几十/上百个容器 (微服务) 去处理队列，最坏情况就是队列过长 timeout 直接抛弃掉部分。如果微服务使用同步通讯 (API)，就和单体区别不大了，高并发延时导致雪崩，重启服务引发更高并发再次崩溃。"},void 0,!1,void 0,this),`
`,p("h2",{children:"cj323"},void 0,!1,void 0,this),`
`,p("p",{children:p("em",{children:"2025-01-18 23:30:04 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,p("p",{children:"朋友公司就是，单体转分布式又转回单体，垂直扩展转水平又转垂直，代码从集中到分开又集中。"},void 0,!1,void 0,this),`
`,p("p",{children:"不同时期有不同需求，分久必合合久必分。"},void 0,!1,void 0,this),`
`,p("h2",{children:"NotLongNil"},void 0,!1,void 0,this),`
`,p("p",{children:p("em",{children:"2025-01-18 23:35:39 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,p("p",{children:"你们并发多少？"},void 0,!1,void 0,this),`
`,p("h2",{children:"yinmin"},void 0,!1,void 0,this),`
`,p("p",{children:p("em",{children:"2025-01-18 23:38:45 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,p("p",{children:"@xhwdy26 #15 CEO 又不会上机直接操刀，“简化部署，只一台机器搞定”，你就一台机器装 docker，为每个微服务写一个 compose file，汇报的时候说：已经微服务改成子系统模块了，程序基本不用改。"},void 0,!1,void 0,this),`
`,p("h2",{children:"NotLongNil"},void 0,!1,void 0,this),`
`,p("p",{children:p("em",{children:"2025-01-18 23:39:14 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,p("p",{children:"抛开具体场景，谈架构，就是刷流氓"},void 0,!1,void 0,this),`
`,p("h2",{children:"cj323"},void 0,!1,void 0,this),`
`,p("p",{children:p("em",{children:"2025-01-18 23:39:58 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,p("p",{children:"@me1onsoda 微服务确实浪费计算机资源，但是可以分散团队各自独立开发微服务。当然后续也有各自独立开发不好集中管理的问题。"},void 0,!1,void 0,this),`
`,p("h2",{children:"cobbage"},void 0,!1,void 0,this),`
`,p("p",{children:p("em",{children:"2025-01-18 23:40:45 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,p("p",{children:"我是企业项目没搞过互联网。该看并发量评估，单体可以集群啊。"},void 0,!1,void 0,this),`
`,p("h2",{children:"ZRS"},void 0,!1,void 0,this),`
`,p("p",{children:p("em",{children:"2025-01-18 23:47:24 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,p("p",{children:"技术选型取决于你们的业务"},void 0,!1,void 0,this),`
`,p("h2",{children:"Perry"},void 0,!1,void 0,this),`
`,p("p",{children:p("em",{children:"2025-01-18 23:51:36 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,p("p",{children:"不要最后楼主说他们公司用户量在十万以内，并发 100 以下"},void 0,!1,void 0,this),`
`,p("h2",{children:"yinmin"},void 0,!1,void 0,this),`
`,p("p",{children:p("em",{children:"2025-01-18 23:52:46 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,p("p",{children:"@cobbage #23 企业项目不会出现突发高并发，单体可以集群 (多服务器负载均衡)，应付企业项目绰绰有余。"},void 0,!1,void 0,this),`
`,p("p",{children:"互联网项目不一样，一个朋友的商城平时最多就几百人同时在线，有一次老板做推广，花了几十万请大网红做直播，然后 5 万多人同时涌入系统直接宕机，几十万软妹币打水漂了。"},void 0,!1,void 0,this),`
`,p("p",{children:"高并发的架构是不一样的，微服务是独立的，通过消息队列异步通讯，会根据消息队列情况自动伸缩微服务，消息队列过长超阈值直接抛弃掉，保证系统不崩溃。单体用集群就有点力不从心了。"},void 0,!1,void 0,this),`
`,p("h2",{children:"beneo"},void 0,!1,void 0,this),`
`,p("p",{children:p("em",{children:"2025-01-18 23:54:23 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,p("p",{children:"世界微服务的爆发，说实话，最经典、最具代表性的例子就是淘宝的“五彩石”项目。在五彩石之前，有多个团队共享一个 Tomcat 环境进行发布，硬是支撑起了一年 1000 亿 GMV 的业务量。所以，实话实说，CEO 这样做的原因，估计是是商业行为而不是技术思考，也就是单体应用架构并没有限制了你们的发展，而是对公司未来的不确定性，而产生了强烈的降本需求"},void 0,!1,void 0,this),`
`,p("h2",{children:"sagaxu"},void 0,!1,void 0,this),`
`,p("p",{children:p("em",{children:"2025-01-18 23:56:09 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,p("p",{children:"@yinmin 5# 你这看法跟现实不符，单体不是单机，早在 Nginx 开源之前的上个世纪末，F5 的 Big IP 就支持负载均衡了，当时就有一些公司用上单体集群部署。在 Redis 开源之前，单体服务早就用上 memcached 了，当年做 Web 的那波人，人均读过 memcached 源码和 C10K 论文。"},void 0,!1,void 0,this),`
`,p("p",{children:"单体其实也用消息队列，ActiveMQ 是二十年前的东西了，之后还有 qpid，都是微服务兴起之前就有的。十多年前，还有很多现在很少人提及的常用组件，比如 Beanstalkd，Tokyo Tyrant 等等。"},void 0,!1,void 0,this),`
`,p("p",{children:"在微服务兴起之前，把大单体部署很多份，然后从网关做负载均衡是很普遍的事情，性能扩展性是不如微服务，但是不至于性能跟单机划等号。"},void 0,!1,void 0,this),`
`,p("h2",{children:"yinmin"},void 0,!1,void 0,this),`
`,p("p",{children:p("em",{children:"2025-01-19 00:10:18 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,p("p",{children:"@sagaxu #28 我同意你的看法。只是技术发展到现在，如果需要用到消息队列，优选微服务；如果单体用消息队列，开发复杂性、部署复杂性、伸缩性都不如微服务。"},void 0,!1,void 0,this),`
`,p("h2",{children:"cobbage"},void 0,!1,void 0,this),`
`,p("p",{children:p("em",{children:"2025-01-19 00:29:10 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,p("p",{children:"@yinmin 这个事情怎么看的成本问题，流量不是经常性的。我刚工作时候遇到过类似的事情，提前准备应对了，当时好像是有部分网络没切过去。"},void 0,!1,void 0,this),`
`,p("h2",{children:"sagaxu"},void 0,!1,void 0,this),`
`,p("p",{children:p("em",{children:"2025-01-19 00:42:04 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,p("p",{children:"@yinmin 29# 单体的伸缩性肯定不如微服务，微服务可以很方便的实现根据负载动态扩容，单体就比较费力，最多用脚本临时租 VM 自动部署。但微服务设施是有附加成本的，无论是自建还是租 IaaS 都价格不菲，面对偶尔扩容这种事情，老板更希望员工加加班哪怕手动完成。"},void 0,!1,void 0,this),`
`,p("h2",{children:"mooyo"},void 0,!1,void 0,this),`
`,p("p",{children:p("em",{children:"2025-01-19 00:58:30 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,p("p",{children:"微服务最大的好处是提高了服务的可维护性，划分合理的话可以直接把过于老旧的服务 drop 掉对照接口重写一个。"},void 0,!1,void 0,this),`
`,p("h2",{children:"kk2syc"},void 0,!1,void 0,this),`
`,p("p",{children:p("em",{children:"2025-01-19 01:54:56 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,p("p",{children:"讲个笑话，"},void 0,!1,void 0,this),`
`,p("hr",{},void 0,!1,void 0,this),`
`,p("p",{children:"快 10 年前，在卫浴厂子写的 CRM，一梭子原生 PHP 直接放在办公室的 dell 工作站上（印象里是 4 核 8G），全国几百家代理商、服务点，每天集中并发至少上万，从来没崩过（也可能不知道，毕竟 F5 就能重试，还能甩锅网络问题）。"},void 0,!1,void 0,this),`
`,p("hr",{},void 0,!1,void 0,this),`
`,p("p",{children:"前年副总找人搞的微服务，接入抖音和微信，一天崩 30 次，老同事又联系我，说副总让他从仓库把那台 dell 又拿出来了，但是不知道怎么把新数据导入，哈哈哈，真自豪"},void 0,!1,void 0,this),`
`,p("h2",{children:"IvanLi127"},void 0,!1,void 0,this),`
`,p("p",{children:p("em",{children:"2025-01-19 02:47:01 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,p("p",{children:"你们这套微服务全部部署到一台机器上，能有多少种崩溃的姿势，那单体程序能命中其中一部分，不会超过的，放心。"},void 0,!1,void 0,this),`
`,p("p",{children:"单体应用很好，就是单台机器配不上它，只能拆掉跑。至于高可用，这和单不单体没太大关系。单体应用也能互连成集群。"},void 0,!1,void 0,this),`
`,p("h2",{children:"silentsky"},void 0,!1,void 0,this),`
`,p("p",{children:p("em",{children:"2025-01-19 08:25:32 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,p("p",{children:"上面很多人提到单体不能用 mq 不懂瞎说？"},void 0,!1,void 0,this),`
`,p("h2",{children:"qinxi"},void 0,!1,void 0,this),`
`,p("p",{children:p("em",{children:"2025-01-19 08:29:25 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,p("p",{children:"我们就是百万用户的单体应用。单体跟异步和队列又不冲突。不考虑团队后端开发才几个人，把后端拆得比员工数还多，天天净在那切换项目了。"},void 0,!1,void 0,this),`
`,p("h2",{children:"miscnote"},void 0,!1,void 0,this),`
`,p("p",{children:p("em",{children:"2025-01-19 09:00:53 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,p("p",{children:"早些年没有微服务，同一个服务部署多个实例，简单的做 scaling out，也能过的不错。比如某邮箱的 webmail（java 写的，里面集成了很多功能，按现在观点看，都可以拆成 micro service），就是几百个物理实例，靠 dns 做的 scailing out，照样撑起数千万用户并发。"},void 0,!1,void 0,this),`
`,p("h2",{children:"seansong"},void 0,!1,void 0,this),`
`,p("p",{children:p("em",{children:"2025-01-19 09:09:11 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,p("p",{children:"微服务在目前大部分场景里面，属于政治 kpi 吧，其实技术层面的需求并不大"},void 0,!1,void 0,this),`
`,p("h2",{children:"jeffw"},void 0,!1,void 0,this),`
`,p("p",{children:p("em",{children:"2025-01-19 09:19:15 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,p("p",{children:"我觉得单体应用挺好的，一直比较反感微服务。"},void 0,!1,void 0,this),`
`,p("h2",{children:"irisdev"},void 0,!1,void 0,this),`
`,p("p",{children:p("em",{children:"2025-01-19 09:38:08 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,p("p",{children:"单体挺好的，单机顶不住吧"},void 0,!1,void 0,this),`
`,p("h2",{children:"RotkPPP"},void 0,!1,void 0,this),`
`,p("p",{children:p("em",{children:"2025-01-19 09:46:54 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,p("p",{children:"坐标某大厂 C 端产品的开发，我们就是分布式单体应用，用户量千万级，虽然没有像淘宝那样子有几十万的并发，但是高峰的时候几万和十几万是有的。我们系统也没崩过，开发起来也没啥问题。"},void 0,!1,void 0,this),`
`,p("p",{children:"我觉得选什么架构，技术选什么难道不应该是应用场景决定么。"},void 0,!1,void 0,this),`
`,p("h2",{children:"xhwdy26"},void 0,!1,void 0,this),`
`,p("p",{children:p("em",{children:"2025-01-19 09:54:20 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,p("p",{children:"感谢各位的回复，三个最大的疑问："},void 0,!1,void 0,this),`
`,p("p",{children:"如何合并成单体，几个人同时在一个项目上开发的冲突怎么解决？"},void 0,!1,void 0,this),`
`,p("p",{children:"如果合并成单体，启动时间会增加，开发调试不方便，怎么面对这个问题？"},void 0,!1,void 0,this),`
`,p("p",{children:"如果合并成单体，某个模块要拉分支，应该怎么处理这个问题？"},void 0,!1,void 0,this),`
`,p("h2",{children:"henix"},void 0,!1,void 0,this),`
`,p("p",{children:p("em",{children:"2025-01-19 10:00:44 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,p("p",{children:"我理解单体应用 vs 微服务只是部署运维的差别，跟 git 和代码怎么管理没关系"},void 0,!1,void 0,this),`
`,p("p",{children:"至于开发环境，可能是每个人自己电脑上 wsl2 或虚拟机？"},void 0,!1,void 0,this),`
`,p("h2",{children:"tonytonychopper"},void 0,!1,void 0,this),`
`,p("p",{children:p("em",{children:"2025-01-19 10:07:03 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,p("p",{children:"@xhwdy26 #42 那就用 monorepo"},void 0,!1,void 0,this),`
`,p("h2",{children:"xuanbg"},void 0,!1,void 0,this),`
`,p("p",{children:p("em",{children:"2025-01-19 10:14:24 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,p("p",{children:"但凡是微服务合并单体的，十个里面有十个，全都是因为服务没有拆分好。你想啊，重新拆分多麻烦，不如干脆就别拆啦。一锅炖不就完了吗！"},void 0,!1,void 0,this),`
`,p("p",{children:"啥？你说微服务更好？你就说一锅炖能不能吃吧。"},void 0,!1,void 0,this),`
`,p("h2",{children:"yeqizhang"},void 0,!1,void 0,this),`
`,p("p",{children:p("em",{children:"2025-01-19 10:19:56 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,p("p",{children:"除了你说的 nacos 是微服务时出现的，其它又不是单体不能用，单体又不是不能集群负载均衡"},void 0,!1,void 0,this),`
`,p("h2",{children:"demoplayer88"},void 0,!1,void 0,this),`
`,p("p",{children:p("em",{children:"2025-01-19 10:33:54 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,p("p",{children:"上面有人说的单体和 mq 有什么关系？我们一直都是单体 一直都用 mq 单体又不是单机 举个最简单的例子 一台跑正常请求 一台跑队列 一台跑任务 有并发就上集群 动态扩容"},void 0,!1,void 0,this),`
`,p("h2",{children:"Charlie17Li"},void 0,!1,void 0,this),`
`,p("p",{children:p("em",{children:"2025-01-19 10:44:05 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,p("p",{children:"@RotkPPP 一个单体实例配置多少资源（cpu，内存），平均水位是多少？\uD83E\uDD14"},void 0,!1,void 0,this),`
`,p("h2",{children:"guanzhangzhang"},void 0,!1,void 0,this),`
`,p("p",{children:p("em",{children:"2025-01-19 10:57:25 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,p("p",{children:"去看看腾讯和抖音的单体化，小微服务 + 多机"},void 0,!1,void 0,this),`
`,p("h2",{children:"yinmin"},void 0,!1,void 0,this),`
`,p("p",{children:p("em",{children:"2025-01-19 10:57:38 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,p("p",{children:"@demoplayer88 #47 OP 的单体是指一个 jar"},void 0,!1,void 0,this),`
`,p("h2",{children:"yinmin"},void 0,!1,void 0,this),`
`,p("p",{children:p("em",{children:"2025-01-19 11:00:04 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,p("p",{children:"@demoplayer88 #47 OP 的单体是指一个超级 jar 包（见#14），一个 jar 包里跑 mq 应该不常见吧。"},void 0,!1,void 0,this),`
`,p("h2",{children:"jacketma"},void 0,!1,void 0,this),`
`,p("p",{children:p("em",{children:"2025-01-19 11:08:12 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,p("p",{children:"只要把数据库单独拎出来部署，单体再克隆一个备用服务器，前端搞一个负载分流，这种架构进可攻退可守"},void 0,!1,void 0,this),`
`,p("h2",{children:"SageXiong"},void 0,!1,void 0,this),`
`,p("p",{children:p("em",{children:"2025-01-19 11:09:05 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,p("p",{children:"微服务和单体都有自己的应用场景，而且架构是慢慢演变的，不是一开始就定死我要用微服务或者我只能用单体，要看具体的场合来确定。"},void 0,!1,void 0,this),`
`,p("p",{children:"不管是单体还是微服务都遵循康威定律，软件系统最后崩溃的根本原因是软件不匹配业务。"},void 0,!1,void 0,this),`
`,p("h2",{children:"qinxi"},void 0,!1,void 0,this),`
`,p("p",{children:p("em",{children:"2025-01-19 11:10:34 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,p("p",{children:"@xhwdy26 #41"},void 0,!1,void 0,this),`
`,p("p",{children:"1,3 微服务都存在一样的问题。"},void 0,!1,void 0,this),`
`,p("ol",{start:"2",children:[`
`,p("li",{children:"你的微服务启动比单体快多少？你调试的时候本地要启动多少服务？微服务的调试更不方便才是"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,p("h2",{children:"hangszhang"},void 0,!1,void 0,this),`
`,p("p",{children:p("em",{children:"2025-01-19 11:18:39 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,p("p",{children:"这个和你们的组织架构有关系"},void 0,!1,void 0,this),`
`,p("h2",{children:"logic2"},void 0,!1,void 0,this),`
`,p("p",{children:p("em",{children:"2025-01-19 11:22:07 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,p("p",{children:"@yinmin #17 这个跟微服务没啥关系，以前单体的服务也是无状态的，也可以前面用 nginx 负载均衡，后台直接扩容一堆单体实例，另外单体也可以用 MQ，很多事务没必要立即完成，丢进 MQ 慢慢消费就好，关键在于思路，而不是微服务包打一切，不过这样搞下来，也差不多算得上是单体式微服务了，临时应对一下流量并发还是可以的"},void 0,!1,void 0,this),`
`,p("h2",{children:"0xD800"},void 0,!1,void 0,this),`
`,p("p",{children:p("em",{children:"2025-01-19 11:28:10 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,p("p",{children:"遇到一个很实在的问题，系统有两大核心接口，有一个接口耗时长，有一个耗时短。"},void 0,!1,void 0,this),`
`,p("p",{children:"如果耗时长的接口占用了 io 线程，另一个耗时短的接口就没法处理，这时候应该把耗时长的单独部署出来"},void 0,!1,void 0,this),`
`,p("h2",{children:"blmdz521"},void 0,!1,void 0,this),`
`,p("p",{children:p("em",{children:"2025-01-19 11:30:53 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,p("p",{children:"微服务做的好，合成单体也简单，配置改改，直接合并。为了微而拆，直接 boom"},void 0,!1,void 0,this),`
`,p("h2",{children:"Genshin2020"},void 0,!1,void 0,this),`
`,p("p",{children:p("em",{children:"2025-01-19 11:33:44 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,p("p",{children:"我入职一家公司，干的最狠的事情就是把各种功能模块给拆成单体了，比如交易系统，订单系统，配送系统，都是独立部署的，以前都在一起，崩一个，所有服务都噶。"},void 0,!1,void 0,this),`
`,p("p",{children:"交易系统因为银行那边的原因，总是出现延迟问题，然后导致支付系统积压，最后内存狂增，最后 boom。"},void 0,!1,void 0,this),`
`,p("p",{children:"现在合理化服务器资源，使用突发实例的运服务器支持支付系统，虽然我离职了，但是那个公司现在也没有因为支付高并发崩溃过。"},void 0,!1,void 0,this),`
`,p("h2",{children:"blmdz521"},void 0,!1,void 0,this),`
`,p("p",{children:p("em",{children:"2025-01-19 11:39:49 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,p("p",{children:"@xhwdy26 1 和 3 都是 git 版本管理，微服务和单体没啥区别，严格遵守管理就行了。2 如果只是几个十几个服务，启动时间没你想象的那么差，可能原来 20 现在 2 分钟，最差拆分多包选择启动呗，这得看业务场景多模块调用，还不如等 2 分钟呢"},void 0,!1,void 0,this),`
`,p("h2",{children:"whusnoopy"},void 0,!1,void 0,this),`
`,p("p",{children:p("em",{children:"2025-01-19 11:55:58 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,p("p",{children:"@xhwdy26 #42"},void 0,!1,void 0,this),`
`,p("p",{children:"提的这三个问题，单体和微服务都没有本质区别，Google Meta 这些还全公司一个 repo 呢"},void 0,!1,void 0,this),`
`,p("ol",{children:[`
`,p("li",{children:[`
`,p("p",{children:"几个人同时在一个项目上开发的冲突怎么解决。如果几个人开发的是项目的不同模块（之前的不同微服务），那代码就是不会存在冲突的，如果会冲突，说明之前也在同一个微服务内，之前怎么解决冲突的现在就怎么解决"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,p("li",{children:[`
`,p("p",{children:"合并成单体为什么就一定会启动时间增加？能加多少？原来启动一大堆微服务不也要时间？还是说分拆得够好只用重启自己改的这一个？一两分钟的话那就刚好站起来去喝口水活动一下。而且很多东西就应该先想好再写，写好一次过"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,p("li",{children:[`
`,p("p",{children:"某个模块拉分支，和把全局拉分支然后合回去也没区别啊，同问题一，如果是各改各的，合回去其他人有冲突的直接接受，自己改的用自己的覆盖。或者更极端一点，就不该有分支，Google 那么大个公司都不拉分支，开发过程中用参数做好隔离，旧的依然跑，新的只在参数开关打开的情况下生效，等新的全量部署后再清旧代码"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,p("h2",{children:"KongLiu"},void 0,!1,void 0,this),`
`,p("p",{children:p("em",{children:"2025-01-19 11:59:41 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,p("p",{children:"我们之前有个项目，就是通过负载均衡实现单体水平扩展的，也不是不能用"},void 0,!1,void 0,this),`
`,p("h2",{children:"sagaxu"},void 0,!1,void 0,this),`
`,p("p",{children:p("em",{children:"2025-01-19 12:50:27 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,p("p",{children:"@mooyo 32#"},void 0,!1,void 0,this),`
`,p("p",{children:"单体的 interface 替换 implementation 有何不便？单体和微服务，只是调用方式不同，在模块划分和抽象封装上并没有什么不同。"},void 0,!1,void 0,this),`
`,p("p",{children:"@yinmin 51#"},void 0,!1,void 0,this),`
`,p("p",{children:"我干过的所有单个 jar 包的服务，都有 mq，都有 redis，甚至有专门的配置中心。单体在设计的时候，也是按照集群设计的，一般至少部署 2-3 台，并假定其中一台随时会挂，所以基本上也会按照无状态设计。我还遇到过那种大单体，但每个部门只负责其中 1-2 个 jar，以插件形式发布，只有核心 team 有完整代码库权限。"},void 0,!1,void 0,this),`
`,p("p",{children:"@0xD800 57#"},void 0,!1,void 0,this),`
`,p("ol",{children:[`
`,p("li",{children:[`
`,p("p",{children:"耗时长的和耗时短的，可以用不同的线程池。"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,p("li",{children:[`
`,p("p",{children:"单体也可以模块化，部署的时候只启用部分模块。"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,p("p",{children:"@Genshin2020 59#"},void 0,!1,void 0,this),`
`,p("p",{children:"崩一个怎么会所有服务都噶？负载均衡网关不能自动从集群中拆除？服务监控不能自动重启？银行交易接口延迟大，改成异步，就算单机处理 10 万并发交易也 boom 不了。"},void 0,!1,void 0,this),`
`,p("h2",{children:"IamUNICODE"},void 0,!1,void 0,this),`
`,p("p",{children:p("em",{children:"2025-01-19 12:59:49 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,p("p",{children:"降本增效 +1"},void 0,!1,void 0,this),`
`,p("h2",{children:"xiyy02"},void 0,!1,void 0,this),`
`,p("p",{children:p("em",{children:"2025-01-19 13:04:33 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,p("p",{children:"微服务更像是「鸡蛋不放一个篮子里」，各种服务不会一起挂，局部服务挂了直接熔断降级，不影响其他 p0 服务正常就行；但是单体应用就会受木桶理论影响，一堆的服务要为某一个短板服务买单。"},void 0,!1,void 0,this),`
`,p("p",{children:"但本着「又不是不能用」的原则，看你们的取舍咯"},void 0,!1,void 0,this),`
`,p("h2",{children:"Genshin2020"},void 0,!1,void 0,this),`
`,p("p",{children:p("em",{children:"2025-01-19 13:06:32 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,p("p",{children:"@sagaxu 我去的时候，整个项目的服务只有一个入口，大概只能这么解释了，如果有你说的这些，这个项目也不会节假日人流高的时候就崩一下。"},void 0,!1,void 0,this),`
`,p("p",{children:"崩一个就全崩的描述不准确，但是你可以理解为所有的车辆进城的时候都走的是一个主干道，但是西城那边没有停车位了，导致去西城的车把所有的车道都占满了，去其他城区的车进都进不来，所以看起来就是全崩了。"},void 0,!1,void 0,this),`
`,p("p",{children:"已经是一个很早的项目的，可能当时的架构设计没到位，也没有想到公司会因为那三年突然发展起来。"},void 0,!1,void 0,this),`
`,p("p",{children:"导致技术债太多了。"},void 0,!1,void 0,this),`
`,p("p",{children:"我去的小 2 年也没有完全解决技术债，我的反感都是治标不治本，核心还是基础架构问题。"},void 0,!1,void 0,this),`
`,p("h2",{children:"IamUNICODE"},void 0,!1,void 0,this),`
`,p("p",{children:p("em",{children:"2025-01-19 13:06:33 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,p("p",{children:"我的建议是，按照功能分出去一部分服务，但是千万不要搞得满地都是，摊子铺越大危险越多"},void 0,!1,void 0,this),`
`,p("h2",{children:"keller"},void 0,!1,void 0,this),`
`,p("p",{children:p("em",{children:"2025-01-19 13:11:45 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,p("p",{children:"很多人是不是对单体应用有什么误解？认为单体应用只能运行一个实例吗？"},void 0,!1,void 0,this),`
`,p("h2",{children:"a398058068"},void 0,!1,void 0,this),`
`,p("p",{children:p("em",{children:"2025-01-19 13:33:23 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,p("p",{children:"单体服务不一定是字面意思 好多公司转单体是因为微服务理念拆分的的太开，难于管理 最终合成几个大单体 然后 云原生网关托底 保留微服务架构功能的同时 应用也更易于开发了，比如 istio + spring boot 单体"},void 0,!1,void 0,this),`
`,p("h2",{children:"LPJD"},void 0,!1,void 0,this),`
`,p("p",{children:p("em",{children:"2025-01-19 13:43:22 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,p("ol",{children:[`
`,p("li",{children:"几个人同时在一个项目上开发的冲突怎么解决？"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,p("p",{children:"使用 git merge 方式合并，代码冲突了，两个开发人员一起解决问题。避免干掉别人代码。"},void 0,!1,void 0,this),`
`,p("ol",{start:"2",children:[`
`,p("li",{children:"启动时间会增加"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,p("p",{children:"Idea 使用 Jrebel 热更新，避免了频繁重启。"},void 0,!1,void 0,this),`
`,p("ol",{start:"3",children:[`
`,p("li",{children:"如果合并成单体，某个模块要拉分支，应该怎么处理这个问题"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,p("p",{children:"单体应用代码在同一个仓库"},void 0,!1,void 0,this),`
`,p("hr",{},void 0,!1,void 0,this),`
`,p("p",{children:"1、3 问题是 git 使用问题。"},void 0,!1,void 0,this),`
`,p("hr",{},void 0,!1,void 0,this),`
`,p("p",{children:"单体和微服务看应用场景使用。需要综合考虑项目预算、业务量、硬件资源。就像通行工具也分自行车和汽车，选错了，整个团队都得加班加点，产出效率还低"},void 0,!1,void 0,this),`
`,p("h2",{children:"kenvix"},void 0,!1,void 0,this),`
`,p("p",{children:p("em",{children:"2025-01-19 13:50:19 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,p("p",{children:"迷信微服务本来就不可取。低成本小微企业完全不该考虑这种东西"},void 0,!1,void 0,this),`
`,p("h2",{children:"hxndg"},void 0,!1,void 0,this),`
`,p("p",{children:p("em",{children:"2025-01-19 14:02:15 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,p("p",{children:"不提本质区别，天天就是某种技术手段就是微服务，不这种技术就是单体。"},void 0,!1,void 0,this),`
`,p("p",{children:"而且最荒谬的是，为了解决问题而选择技术手段和体系架构，而不是因为用了某种技术手段，选择了微服务"},void 0,!1,void 0,this),`
`,p("p",{children:"如果连有状态，无状态，同步，异步还有微服务，单体的认识不到位。建议看看“凤凰架构”这本书"},void 0,!1,void 0,this),`
`,p("h2",{children:"akira"},void 0,!1,void 0,this),`
`,p("p",{children:p("em",{children:"2025-01-19 14:16:25 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,p("p",{children:"大部分公司的 业务体量，其实 单体更合适"},void 0,!1,void 0,this),`
`,p("h2",{children:"zhywang"},void 0,!1,void 0,this),`
`,p("p",{children:p("em",{children:"2025-01-19 17:27:23 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,p("p",{children:"业务量不大，团队也不大的情况下，确实单体比微服务更合适，技术是手段，业务是目的"},void 0,!1,void 0,this),`
`,p("h2",{children:"error0"},void 0,!1,void 0,this),`
`,p("p",{children:p("em",{children:"2025-01-19 18:18:22 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,p("p",{children:"自动化部署啊"},void 0,!1,void 0,this),`
`,p("h2",{children:"HaibaraDP"},void 0,!1,void 0,this),`
`,p("p",{children:p("em",{children:"2025-01-19 18:26:11 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,p("p",{children:"nacos、mq、redis 这些基础设施业务上需要的话改成单体也要部署吧"},void 0,!1,void 0,this),`
`,p("h2",{children:"shmilypeter"},void 0,!1,void 0,this),`
`,p("p",{children:p("em",{children:"2025-01-19 18:30:58 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,p("p",{children:"你这个微服务拆得也不多啊，我以为是跟以前一样过度拆分呢。"},void 0,!1,void 0,this),`
`,p("p",{children:"事实上拆分几个微服务，nacos 注册中心，mq 消息队列，redis 做缓存，然后上 gitlab 管理代码，还是有道理的。"},void 0,!1,void 0,this),`
`,p("p",{children:"像过去一样就一个工程，前端放在 resource 里，然后打 war 包丢服务器里直接启动 tomcat，首先配置文件得一个一个改并且有泄漏的风险，第二就是万一日志级别调错或者内存泄漏，那么一挂全挂。第三就是别人可以一键删库也可以一 U 盘拷走所有工程直接在自己服务器跑起来。如果是微服务，不太可能一挂全挂，并且只给相应仓库的权限就行了，不太可能一下子拷走你的全部工程，即便是拷走了也不可能自己服务器直接跑起来。"},void 0,!1,void 0,this),`
`,p("h2",{children:"coala"},void 0,!1,void 0,this),`
`,p("p",{children:p("em",{children:"2025-01-19 19:04:39 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,p("p",{children:"这玩意还是看需求，可靠性要求高又迭代频繁的话单体就是找死...."},void 0,!1,void 0,this),`
`,p("h2",{children:"000sitereg"},void 0,!1,void 0,this),`
`,p("p",{children:p("em",{children:"2025-01-19 19:17:50 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,p("p",{children:"套用黑猴的话 要我说都是屁。而且是彩虹屁。都是为了绩效，为了就业。"},void 0,!1,void 0,this),`
`,p("p",{children:"我现在的外包项目，8 小时请求量一两百左右。大概拆了 6 个微服务。哈哈。理由当然是楼上各位说的，职责，扩展，健壮....嘿嘿"},void 0,!1,void 0,this),`
`,p("h2",{children:"wangxiaoer"},void 0,!1,void 0,this),`
`,p("p",{children:p("em",{children:"2025-01-19 19:34:45 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,p("p",{children:"@yinmin #11 单体或者微服务的选择重点并不是简单看并发数，因为单体也可以用集群的模式。我的理解是拆不拆分还是看业务之间关联度。"},void 0,!1,void 0,this),`
`,p("h2",{children:"highkay"},void 0,!1,void 0,this),`
`,p("p",{children:p("em",{children:"2025-01-19 19:49:37 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,p("p",{children:"一般性来讲最佳实践是先上单体，然后在某个也许永远不会到来的节点升级成微服务。"},void 0,!1,void 0,this),`
`,p("p",{children:"spring 有一个 modulith 项目解决单体模块化的问题，也就是为微服务铺路。"},void 0,!1,void 0,this),`
`,p("p",{children:"微服务崩一个需要良好的架构设计，不然就是全都崩，没区别的。"},void 0,!1,void 0,this),`
`,p("p",{children:"性能问题前面讲了很多了，如果抛开软件层面的水平差异，硬件部分只是 scale up 和 scale out 的区别，注意是区别，而非高低。"},void 0,!1,void 0,this),`
`,p("p",{children:"开发管理（比如代码分支管理，基础设施）问题取决于你们团队的成熟度（或者说平均开发水平），自动化，devops，devex 这些都和架构无关。"},void 0,!1,void 0,this),`
`,p("p",{children:"所以最根本的不是微服务架构和单体架构，而是需要一个良好的架构设计。"},void 0,!1,void 0,this),`
`,p("p",{children:"成功的架构是从你们团队中生长出来的，而非 copy 出来的。"},void 0,!1,void 0,this),`
`,p("p",{children:"真理越辩越明。"},void 0,!1,void 0,this),`
`,p("h2",{children:"userdhf"},void 0,!1,void 0,this),`
`,p("p",{children:p("em",{children:"2025-01-19 20:00:00 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,p("p",{children:"微单体？新出的照相机吗？"},void 0,!1,void 0,this),`
`,p("h2",{children:"facebook47"},void 0,!1,void 0,this),`
`,p("p",{children:p("em",{children:"2025-01-19 20:10:39 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,p("p",{children:"好奇怎么好多在说并发的？单体服务，又不是只部署一台服务器 \uD83E\uDD23\uD83E\uDD23\uD83E\uDD23 如果业务不是特别复杂，单体没啥问题，\uD83C\uDE36 性能问题，升级服务器就行"},void 0,!1,void 0,this),`
`,p("h2",{children:"jjx"},void 0,!1,void 0,this),`
`,p("p",{children:p("em",{children:"2025-01-19 20:18:51 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,p("p",{children:"主要是内存 爆"},void 0,!1,void 0,this),`
`,p("p",{children:"数据库连接也会到上限，但估算好了不多，而且这个不会奔溃，只是提示异常"},void 0,!1,void 0,this),`
`,p("h2",{children:"extrem"},void 0,!1,void 0,this),`
`,p("p",{children:p("em",{children:"2025-01-19 20:38:51 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,p("p",{children:"确实很多业务根本没到依赖微服务才能 hold 住的地步，但你们这不是从 0 做起，为了解决发布繁琐的问题而要把微服务合并这是个昏招，不是应该优化一下你们的 cicd 流程吗"},void 0,!1,void 0,this),`
`,p("h2",{children:"extrem"},void 0,!1,void 0,this),`
`,p("p",{children:p("em",{children:"2025-01-19 20:42:18 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,p("p",{children:"@whusnoopy 大公司的单 repo 不是一般的单 repo 啊，别人的版本管理整个从存储到网络都是自主开发的一套软件去做的"},void 0,!1,void 0,this),`
`,p("hr",{},void 0,!1,void 0,this),`
`,p("ul",{children:[`
`,p("li",{children:"2025 年 1 月 19 日，转载"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)}export{e as default};
