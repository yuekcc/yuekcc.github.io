import{e as n,h as p}from"/dist/chunk-scq2q67j.js";function e(){return p("div",{class:"markdown-body",children:p(n,{children:[p("h1",{children:"你们是怎么防止云服务被刷的，例如对象存储"},void 0,!1,void 0,this),`
`,p("p",{children:["原文地址：",p("a",{href:"https://v2ex.com/t/995478#reply51",children:"https://v2ex.com/t/995478#reply51"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,p("h2",{children:[p("em",{children:"2023-11-27 10:39:31 +08:00"},void 0,!1,void 0,this)," SculptureSand"]},void 0,!0,void 0,this),`
`,p("p",{children:"其实我有几个可行的思路"},void 0,!1,void 0,this),`
`,p("p",{children:"先简单说下我会用到的云服务"},void 0,!1,void 0,this),`
`,p("p",{children:"我准备写一个文件分享网站，类似文叔叔、轻松传、空投"},void 0,!1,void 0,this),`
`,p("p",{children:"前端：Vue3，部署到 Vercel"},void 0,!1,void 0,this),`
`,p("p",{children:"后端：Flask，部署到函数计算 FC(阿里云)"},void 0,!1,void 0,this),`
`,p("p",{children:"存储：对象存储 OSS(阿里云)"},void 0,!1,void 0,this),`
`,p("p",{children:"数据库：SQLite，部署到文件存储 NAS(阿里云)"},void 0,!1,void 0,this),`
`,p("p",{children:"已知阿里云默认无法暂停 OSS、函数计算，OSS 支持单链接限速，除此外只有访问相关的限制"},void 0,!1,void 0,this),`
`,p("p",{children:"一旦被刷，只能依靠不靠谱告警"},void 0,!1,void 0,this),`
`,p("p",{children:"我的解决方案"},void 0,!1,void 0,this),`
`,p("ol",{children:[`
`,p("li",{children:[`
`,p("p",{children:"API 网关 + 云监控 (可选)"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,p("li",{children:[`
`,p("p",{children:"OpenAPI+ 自写监控"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,p("p",{children:"函数计算里写一个检测，一旦达到检测值则调用 OpenAPI，关闭对应 DNS 解析，达到更危险的值则删除服务（前提做好备份）"},void 0,!1,void 0,this),`
`,p("p",{children:"这两种方式都是低成本对抗恶意盗刷，采取的做法是暂停、删除服务，适合个人开发者和不考虑可用性的项目"},void 0,!1,void 0,this),`
`,p("p",{children:"除此外有什么好的方式吗，DDOS 防护、WAF 防护、其他防护，低需数百，高则数万每月，实在不是个人开发者能考虑的"},void 0,!1,void 0,this),`
`,p("h2",{children:[p("em",{children:"2023-11-27 10:44:32 +08:00"},void 0,!1,void 0,this)," pol"]},void 0,!0,void 0,this),`
`,p("p",{children:"阿里云的防盗链如何"},void 0,!1,void 0,this),`
`,p("h2",{children:[p("em",{children:"2023-11-27 10:44:47 +08:00"},void 0,!1,void 0,this)," linyimin520812"]},void 0,!0,void 0,this),`
`,p("p",{children:"对象存储的话可以考虑加一层 CDN"},void 0,!1,void 0,this),`
`,p("h2",{children:[p("em",{children:"2023-11-27 10:47:22 +08:00"},void 0,!1,void 0,this)," iomect"]},void 0,!0,void 0,this),`
`,p("p",{children:"文件分享用这一套怕是你成本遭不住哦"},void 0,!1,void 0,this),`
`,p("h2",{children:[p("em",{children:"2023-11-27 10:49:54 +08:00"},void 0,!1,void 0,this)," stevenshum"]},void 0,!0,void 0,this),`
`,p("p",{children:"一般都是开启防盗链吧"},void 0,!1,void 0,this),`
`,p("h2",{children:[p("em",{children:"2023-11-27 10:53:44 +08:00"},void 0,!1,void 0,this)," Puteulanus"]},void 0,!0,void 0,this),`
`,p("p",{children:"有些云账单会延迟出，监控不一定靠谱"},void 0,!1,void 0,this),`
`,p("p",{children:"要是实时扣账不允许欠费，被刷的风险就低多了，至少不会突然欠一大笔债"},void 0,!1,void 0,this),`
`,p("h2",{children:[p("em",{children:"2023-11-27 10:55:11 +08:00"},void 0,!1,void 0,this)," GooMS"]},void 0,!0,void 0,this),`
`,p("p",{children:"成本太高了，自己托管"},void 0,!1,void 0,this),`
`,p("h2",{children:[p("em",{children:"2023-11-27 11:03:35 +08:00"},void 0,!1,void 0,this)," Byzliu"]},void 0,!0,void 0,this),`
`,p("p",{children:"对象存储肯定要加一层 cdn 的，cdn 的流量也便宜，规则也多。"},void 0,!1,void 0,this),`
`,p("h2",{children:[p("em",{children:"2023-11-27 11:04:43 +08:00"},void 0,!1,void 0,this)," leaflxh"]},void 0,!0,void 0,this),`
`,p("p",{children:"开个大公司，报案，，CDN 拒绝境外 IP 访问，用非法入侵计算机系统罪治他"},void 0,!1,void 0,this),`
`,p("h2",{children:[p("em",{children:"2023-11-27 11:07:08 +08:00"},void 0,!1,void 0,this)," leaflxh"]},void 0,!0,void 0,this),`
`,p("p",{children:"文件分享本质上就是跑流量，下场跟视频网站差不多，参考优酷土豆，bilibili 等没有自建机房需要套 PCDN 的"},void 0,!1,void 0,this),`
`,p("h2",{children:[p("em",{children:"2023-11-27 11:08:08 +08:00"},void 0,!1,void 0,this)," leaflxh"]},void 0,!0,void 0,this),`
`,p("p",{children:"以及境外不合规视频网站（"},void 0,!1,void 0,this),`
`,p("h2",{children:[p("em",{children:"2023-11-27 11:09:01 +08:00"},void 0,!1,void 0,this)," leaflxh"]},void 0,!0,void 0,this),`
`,p("p",{children:"@leaflxh #9"},void 0,!1,void 0,this),`
`,p("p",{children:"以及各网盘"},void 0,!1,void 0,this),`
`,p("h2",{children:[p("em",{children:"2023-11-27 11:22:32 +08:00"},void 0,!1,void 0,this)," wongskay"]},void 0,!0,void 0,this),`
`,p("p",{children:"阿里云的 OSS 的话，开启防盗链外加 CDN 就可以了。"},void 0,!1,void 0,this),`
`,p("h2",{children:[p("em",{children:"2023-11-27 11:22:55 +08:00"},void 0,!1,void 0,this)," wongskay"]},void 0,!0,void 0,this),`
`,p("p",{children:"当然了，最好能做一些鉴权的话就好了"},void 0,!1,void 0,this),`
`,p("h2",{children:[p("em",{children:"2023-11-27 11:25:09 +08:00"},void 0,!1,void 0,this)," vueli"]},void 0,!0,void 0,this),`
`,p("p",{children:"我遇到过一个人，他所有的图片，包括视频全都放到别人的图床里面的（盗刷）。关键是，他开的就是视频网站。天天自己去下载盗版视频，通过手段放到别人的 oss 里面，然后 m3u8 等等。。。"},void 0,!1,void 0,this),`
`,p("h2",{children:[p("em",{children:"2023-11-27 11:25:46 +08:00"},void 0,!1,void 0,this)," SuperGeorge"]},void 0,!0,void 0,this),`
`,p("p",{children:"OSS 套 CDN，配置防盗链，然后配置流量和带宽告警就好。"},void 0,!1,void 0,this),`
`,p("h2",{children:[p("em",{children:"2023-11-27 11:25:49 +08:00"},void 0,!1,void 0,this)," vueli"]},void 0,!0,void 0,this),`
`,p("p",{children:"@vueli 不理解，我比较看不起这种人。"},void 0,!1,void 0,this),`
`,p("h2",{children:[p("em",{children:"2023-11-27 11:27:29 +08:00"},void 0,!1,void 0,this)," SculptureSand"]},void 0,!0,void 0,this),`
`,p("p",{children:"谢谢各位，CDN 和防盗链已经 mark 了，抽空研究下"},void 0,!1,void 0,this),`
`,p("p",{children:"我这个网站肯定会做各种限制，只供自己和朋友们使用，公开但不宣传"},void 0,!1,void 0,this),`
`,p("p",{children:"怕的是总有接口能被刷，有公开的接口，晚上哪里睡得着"},void 0,!1,void 0,this),`
`,p("p",{children:"挡得住 OSS 攻击，挡不住函数计算的攻击"},void 0,!1,void 0,this),`
`,p("p",{children:"看起来我想到的两种策略还是最稳妥的，成本也低，毕竟我不考虑多高的可用性，遭攻击我直接闭站甚至删服务"},void 0,!1,void 0,this),`
`,p("h2",{children:[p("em",{children:"2023-11-27 11:28:20 +08:00"},void 0,!1,void 0,this)," wangliran1121"]},void 0,!0,void 0,this),`
`,p("p",{children:"@vueli 我也遇到过，黑产来的"},void 0,!1,void 0,this),`
`,p("h2",{children:[p("em",{children:"2023-11-27 11:28:31 +08:00"},void 0,!1,void 0,this)," lujiaosama"]},void 0,!0,void 0,this),`
`,p("p",{children:"套 CDN, CDN 有封顶暂停。"},void 0,!1,void 0,this),`
`,p("h2",{children:[p("em",{children:"2023-11-27 11:29:04 +08:00"},void 0,!1,void 0,this)," liuidetmks"]},void 0,!0,void 0,this),`
`,p("p",{children:"@vueli 可是人家也不需要你看得起，搞到钱了。在丛林（墙内）里面活着（搞钱）才是第一位的。"},void 0,!1,void 0,this),`
`,p("h2",{children:[p("em",{children:"2023-11-27 11:29:50 +08:00"},void 0,!1,void 0,this)," SculptureSand"]},void 0,!0,void 0,this),`
`,p("p",{children:"@vueli 这也太恶心了，所以公益图床这种真的难做"},void 0,!1,void 0,this),`
`,p("h2",{children:[p("em",{children:"2023-11-27 11:30:41 +08:00"},void 0,!1,void 0,this)," NX2023"]},void 0,!0,void 0,this),`
`,p("p",{children:"我使用 Cloudflare R2，免费量大管饱，就是国内很慢（（"},void 0,!1,void 0,this),`
`,p("h2",{children:[p("em",{children:"2023-11-27 11:31:03 +08:00"},void 0,!1,void 0,this)," hongfs"]},void 0,!0,void 0,this),`
`,p("ol",{children:[`
`,p("li",{children:[`
`,p("p",{children:"函数计算可以设置实例上限，比如设置成 1. 另外我们压测的结果，开了 300 个实例，QPS 也只能到 1W，同一个程序在低配 ECS 可以跑到 40W/QPS。。（fc3 还没办法使用 jwt 验证，fc2 是正常的，jwt 验证不通过是不收钱的）"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,p("li",{children:[`
`,p("p",{children:"OSS 一定要套一层 CDN，成本下降是非常明显的，除非你访问就只有一次。另外有程序通过 CDN DescribeDomainRealTimeTrafficData API 接口来获取五分钟内的流量，达到告警值后发送告警信息，达到两倍告警值后直接下架域名。"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,p("h2",{children:[p("em",{children:"2023-11-27 11:31:03 +08:00"},void 0,!1,void 0,this)," woshinide300yuan"]},void 0,!0,void 0,this),`
`,p("p",{children:"我选择晚上睡得着的方式，backblaze+cloudfare 组合，1TB 每月存储花 6 刀，不计费流量。"},void 0,!1,void 0,this),`
`,p("p",{children:"免费的服务我不想整的太积极，还套国内 CDN，都是白嫖的，不至于不至于。"},void 0,!1,void 0,this),`
`,p("h2",{children:[p("em",{children:"2023-11-27 11:35:29 +08:00"},void 0,!1,void 0,this)," SculptureSand"]},void 0,!0,void 0,this),`
`,p("p",{children:"@hongfs 设置成一也挡不住鼠标连点器在大半夜点我哈哈哈哈，不过这样应该也刷不了多少，感谢数据"},void 0,!1,void 0,this),`
`,p("p",{children:"另外达到两倍告警下架域名是怎么操作的，告警触发函数计算，调用 OpenAPI 让制定记录暂停，这样吗"},void 0,!1,void 0,this),`
`,p("h2",{children:[p("em",{children:"2023-11-27 11:38:26 +08:00"},void 0,!1,void 0,this)," zhusimaji"]},void 0,!0,void 0,this),`
`,p("p",{children:"目前是防盗链"},void 0,!1,void 0,this),`
`,p("h2",{children:[p("em",{children:"2023-11-27 11:40:46 +08:00"},void 0,!1,void 0,this)," SculptureSand"]},void 0,!0,void 0,this),`
`,p("p",{children:"@woshinide300yuan 我比较向往文叔叔那样的网站。文件分享部分做好限制，公开，自然状态也不太可能被广泛知道，以后开发出网盘部分也最多是邀请制"},void 0,!1,void 0,this),`
`,p("p",{children:"主要函数计算默认域名无法关闭，他默认公网域名虽然会强制变成下载返回值，但只要泄漏了还是能刷，身边到处被阿里云埋了炸弹是真睡不着啊"},void 0,!1,void 0,this),`
`,p("h2",{children:[p("em",{children:"2023-11-27 11:42:00 +08:00"},void 0,!1,void 0,this)," hongfs"]},void 0,!0,void 0,this),`
`,p("p",{children:"@SculptureSand #25 类似你 FC 有个一分钟的定时器，触发后会去查询 CDN 的数据，下架也是 openapi 接口。。"},void 0,!1,void 0,this),`
`,p("p",{children:["主动告警只能在云监控那边配置，但它有十分钟的延迟。",p("a",{href:"https://next.api.aliyun.com/api/Cdn/2018-05-10/DescribeDomainRealTimeTrafficData",children:"https://next.api.aliyun.com/api/Cdn/2018-05-10/DescribeDomainRealTimeTrafficData"},void 0,!1,void 0,this)," 这个可以查到前一分钟的。"]},void 0,!0,void 0,this),`
`,p("h2",{children:[p("em",{children:"2023-11-27 11:47:49 +08:00"},void 0,!1,void 0,this)," SculptureSand"]},void 0,!0,void 0,this),`
`,p("p",{children:"@hongfs 函数计算也有主动告警，比较简易。云监控应该功能更强大"},void 0,!1,void 0,this),`
`,p("p",{children:"这和我上面讲的两种方式看起来原理一样，感谢"},void 0,!1,void 0,this),`
`,p("p",{children:"看起来 CDN、防盗链、单链接限速、自写监控/API 网关，这几个就是付费服务外最好的防刷策略了"},void 0,!1,void 0,this),`
`,p("h2",{children:[p("em",{children:"2023-11-27 11:52:28 +08:00"},void 0,!1,void 0,this)," myqoo"]},void 0,!0,void 0,this),`
`,p("p",{children:"网站发出来让大家压一压，验证能不能抗住 - -"},void 0,!1,void 0,this),`
`,p("h2",{children:[p("em",{children:"2023-11-27 11:53:20 +08:00"},void 0,!1,void 0,this)," SculptureSand"]},void 0,!0,void 0,this),`
`,p("p",{children:"@myqoo 站里搜 OSS，有个老哥压一压被刷了 4.7T 流量，我真的没蚌住"},void 0,!1,void 0,this),`
`,p("h2",{children:[p("em",{children:"2023-11-27 11:54:35 +08:00"},void 0,!1,void 0,this)," zliea"]},void 0,!0,void 0,this),`
`,p("p",{children:"“只供自己和朋友们使用，公开但不宣传。”"},void 0,!1,void 0,this),`
`,p("p",{children:"oss 那就设置为私有，生成过期的链接使用不行么？"},void 0,!1,void 0,this),`
`,p("h2",{children:[p("em",{children:"2023-11-27 11:56:56 +08:00"},void 0,!1,void 0,this)," zliea"]},void 0,!0,void 0,this),`
`,p("p",{children:"理论上“文件分享网站”如果仅是几个人使用，OneDrive 了解一下？"},void 0,!1,void 0,this),`
`,p("h2",{children:[p("em",{children:"2023-11-27 11:57:26 +08:00"},void 0,!1,void 0,this)," leaflxh"]},void 0,!0,void 0,this),`
`,p("p",{children:"说点有用的"},void 0,!1,void 0,this),`
`,p("ol",{children:[`
`,p("li",{children:[`
`,p("p",{children:"用腾讯云/阿里云的 CDN，回源 OSS。同时 OSS 必须设置私有访问（防 OSS 被刷爆）"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,p("li",{children:[`
`,p("p",{children:"CDN 开启禁止国外 IP 访问（国外带宽大，用个几台 vps 就可以刷爆 CDN。增加攻击门槛）"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,p("p",{children:"3.开 Referer 检查，禁止空 Referer（防止别人用工具一键刷爆，但作用有限）"},void 0,!1,void 0,this),`
`,p("p",{children:"4.设置单 IP QPS，设置单线程下行带宽峰值。QPS 以视单页面最大的资源数为主（防止几个 IP 刷爆 CDN。增加攻击门槛）"},void 0,!1,void 0,this),`
`,p("p",{children:"5.开启单位时间内流量超额下线 CDN，比如 5 分钟内流量消耗 5G 则下线 CDN（防止不知道被刷，让人连续刷上几个小时）"},void 0,!1,void 0,this),`
`,p("p",{children:"最后再祈祷云厂商的统计周期没有延迟（你的账单仍然握在云厂商的手中）"},void 0,!1,void 0,this),`
`,p("p",{children:"烈士墙：(以下均没做好以上措施（不代表以上措施完美无缺））"},void 0,!1,void 0,this),`
`,p("p",{children:"让帮我测试发消息，确给我 oss 刷了 4.7TB 的流量"},void 0,!1,void 0,this),`
`,p("p",{children:p("a",{href:"https://www.v2ex.com/t/993823",children:"https://www.v2ex.com/t/993823"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,p("p",{children:"被刷 7Tb+.追根溯源，找到凶手，谨防 LOC 论坛小人。长图文"},void 0,!1,void 0,this),`
`,p("p",{children:p("a",{href:"https://hostloc.com/thread-1224989-1-1.html",children:"https://hostloc.com/thread-1224989-1-1.html"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,p("p",{children:"连续剧"},void 0,!1,void 0,this),`
`,p("p",{children:p("a",{href:"https://hostloc.com/thread-999175-1-1.html",children:"https://hostloc.com/thread-999175-1-1.html"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,p("p",{children:p("a",{href:"https://hostloc.com/thread-1003459-1-1.html",children:"https://hostloc.com/thread-1003459-1-1.html"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,p("p",{children:p("a",{href:"https://hostloc.com/thread-1016347-1-1.html",children:"https://hostloc.com/thread-1016347-1-1.html"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,p("p",{children:p("a",{href:"https://hostloc.com/thread-1225063-1-1.html",children:"https://hostloc.com/thread-1225063-1-1.html"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,p("h2",{children:[p("em",{children:"2023-11-27 11:59:43 +08:00"},void 0,!1,void 0,this)," dcsuibian"]},void 0,!0,void 0,this),`
`,p("p",{children:"用腾讯云呗，腾讯云支持暂停 COS/CDN 的"},void 0,!1,void 0,this),`
`,p("h2",{children:[p("em",{children:"2023-11-27 12:32:28 +08:00"},void 0,!1,void 0,this)," YDCHYD"]},void 0,!0,void 0,this),`
`,p("p",{children:"你用 cdn 的话，请求次数也是收费的。而且防 cdn 被刷太难了"},void 0,!1,void 0,this),`
`,p("h2",{children:[p("em",{children:"2023-11-27 12:34:29 +08:00"},void 0,!1,void 0,this)," myqoo"]},void 0,!0,void 0,this),`
`,p("p",{children:"CDN 不限速的话，用 TCP 漏洞单机就可以每秒可以刷几 GB，一天可以刷几百 TB。（当然很快就会欠费停机~）"},void 0,!1,void 0,this),`
`,p("h2",{children:[p("em",{children:"2023-11-27 12:45:39 +08:00"},void 0,!1,void 0,this)," iamwin"]},void 0,!0,void 0,this),`
`,p("p",{children:"对象存储桶设置成私有，然后后端用 api 去调，你就可以随意加限制了，开共有早晚会被刷爆的"},void 0,!1,void 0,this),`
`,p("h2",{children:[p("em",{children:"2023-11-27 12:56:09 +08:00"},void 0,!1,void 0,this)," zictos"]},void 0,!0,void 0,this),`
`,p("p",{children:"有点不敢用，既不支持用量限制，也不支持实时计费，只能尽量不用了。本来如果计费足够实时的话少充点钱就行，尽量不要造成欠费太多"},void 0,!1,void 0,this),`
`,p("h2",{children:[p("em",{children:"2023-11-27 13:10:17 +08:00"},void 0,!1,void 0,this)," n18255447846"]},void 0,!0,void 0,this),`
`,p("ul",{children:[`
`,p("li",{children:[`
`,p("p",{children:"cdn，流量不要钱的嘛"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,p("li",{children:[`
`,p("p",{children:"防盗链，还分享个鬼"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,p("h2",{children:[p("em",{children:"2023-11-27 13:46:10 +08:00"},void 0,!1,void 0,this)," bianhui"]},void 0,!0,void 0,this),`
`,p("p",{children:"没看懂。如果你自己和自己朋友用，加个密码不就行了么。如果给公众用，限制下 ip 就行了。"},void 0,!1,void 0,this),`
`,p("h2",{children:[p("em",{children:"2023-11-27 13:59:27 +08:00"},void 0,!1,void 0,this)," weibin0227"]},void 0,!0,void 0,this),`
`,p("p",{children:"@vueli 这个真是人才 不怕被删吗？"},void 0,!1,void 0,this),`
`,p("h2",{children:[p("em",{children:"2023-11-27 14:16:18 +08:00"},void 0,!1,void 0,this)," GeekGao"]},void 0,!0,void 0,this),`
`,p("p",{children:"说个都没提到的点吧：每次发起下载请求前要获取有失效期限的 access token，发起请求的过程中就可以对来源用户或 IP 做合法性校验（例如是不是重复请求该文件多次、是不是某个时间段内被异常大量的请求、IP 信誉或者 header 存在问题等等，甚至还可以在 js 侧增加 captcha 只有通过验证码的才可以继续执行请求 accees token 过程）"},void 0,!1,void 0,this),`
`,p("p",{children:"当然，这些可能需要你自己写 nginx 模块实现或者用 apisix、kong 这类的可以容易实现插件的网关。"},void 0,!1,void 0,this),`
`,p("h2",{children:[p("em",{children:"2023-11-27 15:38:12 +08:00"},void 0,!1,void 0,this)," Masoud2023"]},void 0,!0,void 0,this),`
`,p("p",{children:"看了个分享说可以造一个轮子发 token，每次访问 cdn 时候都发 token 下去，同#43，不知道实际效果怎么样"},void 0,!1,void 0,this),`
`,p("h2",{children:[p("em",{children:"2023-11-27 15:42:41 +08:00"},void 0,!1,void 0,this)," zoharSoul"]},void 0,!0,void 0,this),`
`,p("p",{children:"@pol #1 没用"},void 0,!1,void 0,this),`
`,p("h2",{children:[p("em",{children:"2023-11-27 15:56:19 +08:00"},void 0,!1,void 0,this)," hiceo"]},void 0,!0,void 0,this),`
`,p("p",{children:"我准备搞个公益图床，用 tg 当网盘，图片限制 10M，文件限制 50M，应该足够用了"},void 0,!1,void 0,this),`
`,p("h2",{children:[p("em",{children:"2023-11-27 15:57:04 +08:00"},void 0,!1,void 0,this)," hiceo"]},void 0,!0,void 0,this),`
`,p("p",{children:"用的海外服务器流量无限制，挂个 cf，用优选 ip，够用就行"},void 0,!1,void 0,this),`
`,p("h2",{children:[p("em",{children:"2023-11-27 16:03:03 +08:00"},void 0,!1,void 0,this)," element90"]},void 0,!0,void 0,this),`
`,p("p",{children:"防盗链，但这个仅对 web 图片有效。"},void 0,!1,void 0,this),`
`,p("p",{children:"如果是文件分享的话，可以加一个请求授权流程，每次都向你的服务请求授权链接，然后你可以按需要给 oss 文件生成有时效的访问 URL，这样你可以在你的服务端做相关的检查了"},void 0,!1,void 0,this),`
`,p("h2",{children:[p("em",{children:"2023-11-27 16:10:07 +08:00"},void 0,!1,void 0,this)," lishei"]},void 0,!0,void 0,this),`
`,p("p",{children:"@weibin0227 为什么要怕，找多个免费的接口上传多份，删了就换一个源"},void 0,!1,void 0,this),`
`,p("h2",{children:[p("em",{children:"2023-11-27 17:03:07 +08:00"},void 0,!1,void 0,this)," coreki"]},void 0,!0,void 0,this),`
`,p("p",{children:"@leaflxh 你这几个 oss 防刷建议还挺不错，特别是禁止国外 ip 这点"},void 0,!1,void 0,this),`
`,p("h2",{children:[p("em",{children:"2023-11-27 18:06:41 +08:00"},void 0,!1,void 0,this)," myqoo"]},void 0,!0,void 0,this),`
`,p("p",{children:"@leaflxh 建议不错，不过还是很难避坑。"},void 0,!1,void 0,this),`
`,p("ol",{children:[`
`,p("li",{children:"用腾讯云/阿里云的 CDN，回源 OSS。同时 OSS 必须设置私有访问（防 OSS 被刷爆）"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,p("blockquote",{children:[`
`,p("p",{children:"虽然 CDN 比 OSS 便宜，但每 GB 也要几毛钱。每天被刷个几十几百 TB 还是很肉疼的。"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,p("ol",{start:"2",children:[`
`,p("li",{children:"CDN 开启禁止国外 IP 访问（国外带宽大，用个几台 vps 就可以刷爆 CDN。增加攻击门槛）"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,p("blockquote",{children:[`
`,p("p",{children:"国内现在很多都是千兆带宽，攻击者搞些肉鸡就可以使劲刷。如果利用 HTTP/TCP 漏洞的话，甚至百兆带宽也可以刷出万兆带宽的效果。"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,p("p",{children:"3.开 Referer 检查，禁止空 Referer（防止别人用工具一键刷爆，但作用有限）"},void 0,!1,void 0,this),`
`,p("blockquote",{children:[`
`,p("p",{children:"这种只是防基于 web 的恶意刷（类似之前 gfw 的 great cannon 这种），基于本地程序的请求就无效了。"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,p("p",{children:"4.设置单 IP QPS，设置单线程下行带宽峰值。QPS 以视单页面最大的资源数为主（防止几个 IP 刷爆 CDN。增加攻击门槛）"},void 0,!1,void 0,this),`
`,p("blockquote",{children:[`
`,p("p",{children:"虽然每个 CDN 节点可限速，但同时对所有节点刷就统计不过来了。（可能在统计周期的延迟里，就欠下不少钱了）"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,p("p",{children:"最后点比较有意义，及时下线止损。国内带宽垄断导致的超高攻击费用最终还是用户买单。"},void 0,!1,void 0,this),`
`,p("h2",{children:[p("em",{children:"2023-11-27 22:51:42 +08:00"},void 0,!1,void 0,this)," Liang"]},void 0,!0,void 0,this),`
`,p("p",{children:"双十一买了台 99 元 3m 的 ecs，做 oss 内网反代"},void 0,!1,void 0,this),`
`,p("h2",{children:[p("em",{children:"2023-11-27 23:19:18 +08:00"},void 0,!1,void 0,this)," SculptureSand"]},void 0,!0,void 0,this),`
`,p("p",{children:"感谢上面几个长文回复，我注册时间太短，没法多次 @，字数好像也有限制，写了好多只能删了。"},void 0,!1,void 0,this),`
`,p("p",{children:"另外，我 OSS 是私有，用签名 URL 去发布。网站公开，但是不做 SEO 不宣传不会火起来，不限制路人使用"},void 0,!1,void 0,this),`
`,p("p",{children:"这个被我选为毕业设计，求职也有用处，同时我自己也有需求，这个项目对我来说肯定有理由"},void 0,!1,void 0,this),`
`,p("p",{children:"今天已经实现了用 OpenAPI 控制 DNS 解析，之后还会尝试最狠的，就是达到极大量时直接删除服务 (例如直接删掉存储桶或者函数，当然，会做备份)"},void 0,!1,void 0,this),`
`,p("h2",{children:[p("em",{children:"2023-11-28 01:11:55 +08:00"},void 0,!1,void 0,this)," SculptureSand"]},void 0,!0,void 0,this),`
`,p("p",{children:"@myqoo 半夜回来看了一眼，这种盗刷手段也太吓人了"},void 0,!1,void 0,this),`
`,p("h2",{children:[p("em",{children:"2023-11-28 01:19:03 +08:00"},void 0,!1,void 0,this)," Goat121"]},void 0,!0,void 0,this),`
`,p("p",{children:"你反正不套 CDN，也谈不上啥访问速度，那换 aws 啊，为啥要抱死阿里云？国内的带宽流量这一块贵得要死，特别是阿里云最坑爹。只有千日做贼，哪有千日防贼，你本身没啥访问，结果防贼的精力比开发还多，一个不小心还是可能几大万出去了，图啥？"},void 0,!1,void 0,this),`
`,p("p",{children:"tg 上一大堆 VISA 虚拟信用卡的，aws 代充的，随便找个就搞定 aws 充值了。还有个更便宜的 linode，大概只有 aws 一半的价格，和 S3 的接口也是一样的，不过这个充值支持可能没那么多了。"},void 0,!1,void 0,this),`
`,p("p",{children:"总之，不是商业项目速度要求很高，服务器必须在国内的话，完全不需要国内 XX 云。举个例子吧，基础款的 4c8g 服务器，阿里云和 aws 价格相差不大，但是阿里云带宽 100M，aws 是 10G。阿里云一被 ddos 就黑洞模式 (不得不佩服阿里的造词能力，实际上就是不愿意拿自己网络给你扛 DDOS 把服务器直接关机且几小时内无法恢复，愣是掰了个高大上的名字黑洞模式出来)，aws 是无上限的硬扛 ddos。具体到 oss 费用，阿里云光国内都是 aws 的 3 倍左右，国外更是高到离谱，你再怎么防，光是国外肉鸡在你检测到之前刷那一波流量也够你受了"},void 0,!1,void 0,this),`
`,p("h2",{children:[p("em",{children:"2023-11-28 01:36:44 +08:00"},void 0,!1,void 0,this)," Goat121"]},void 0,!0,void 0,this),`
`,p("p",{children:"而且你都准备遭攻击就删服务了，说明也不是啥重要数据，那为啥还要用 oss？直接写硬盘不香么，又便宜一大截。"},void 0,!1,void 0,this),`
`,p("p",{children:"还有 cloudflare 完全可以套一个，虽然国内的 cf 慢了点，也总比没有好，最重要的是，他免费啊！不但免费给你用还免费提供无上限的 ddos 防护，不香么"},void 0,!1,void 0,this),`
`,p("h2",{children:[p("em",{children:"2023-11-28 11:38:39 +08:00"},void 0,!1,void 0,this)," SculptureSand"]},void 0,!0,void 0,this),`
`,p("p",{children:"@Goat121"},void 0,!1,void 0,this),`
`,p("p",{children:"cloud flare mark 了，查询了下可以防护后端，我以前以为只能防前端，感谢"},void 0,!1,void 0,this),`
`,p("p",{children:"这和 API 网关有些类似"},void 0,!1,void 0,this),`
`,p("p",{children:"我用阿里云的理由有二，一是我熟悉阿里云、腾讯云，不同云厂商间理念不太一样，文档风格也不同，除非经验老道，切一个云厂商挺费劲的。二是阿里云这边几个服务我确定能支持我的项目，并且均为按量付费，没有门槛费。"},void 0,!1,void 0,this),`
`,p("p",{children:"我做各种防护不会耗太大精力，都是基础内容"},void 0,!1,void 0,this),`
`,p("p",{children:"OSS 默认支持万兆上下，速度不慢了"},void 0,!1,void 0,this),`
`,p("p",{children:"各种服务、数据肯定做好备份才删，这是最终策略。不代表数据不重要"},void 0,!1,void 0,this),`
`,p("p",{children:"另外我的网站功能是 A 用户上传文件得到取件码，持有取件码的任意用户可下载该文件"},void 0,!1,void 0,this),`
`,p("p",{children:"如果直接放硬盘，权限不好控制。而且似乎回归到安装个 NextCloud 了，直接能实现我的所有功能"},void 0,!1,void 0,this),`
`,p("p",{children:"当然这不是否定你，aws 我也 mark 了，说不定我其他项目就用到了，只是这次不适合我。再次感谢"},void 0,!1,void 0,this),`
`,p("h2",{children:[p("em",{children:"2023-11-30 11:27:04 +08:00"},void 0,!1,void 0,this)," GarethChu"]},void 0,!0,void 0,this),`
`,p("p",{children:"@leaflxh mark 了"},void 0,!1,void 0,this),`
`,p("hr",{},void 0,!1,void 0,this),`
`,p("ul",{children:[`
`,p("li",{children:"2023 年 11 月 27 日 导出"},void 0,!1,void 0,this),`
`,p("li",{children:"2023 年 12 月 2 日 更新"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)}export{e as default};
