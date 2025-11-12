import{e as n,h as p}from"/dist/chunk-0936xbxf.js";function e(){return p("div",{class:"markdown-body",children:p(n,{children:[p("h1",{children:"问下站内大神们 成千上万的小说 - 存储方案"},void 0,!1,void 0,this),`
`,p("p",{children:["原文地址：",p("a",{href:"https://v2ex.com/t/1076073#reply34",children:"https://v2ex.com/t/1076073#reply34"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,p("h2",{children:"wuhao1"},void 0,!1,void 0,this),`
`,p("p",{children:p("em",{children:"2024-09-26 17:54:27 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,p("p",{children:`1.数据库存储 2.磁盘存储
3.oss 存储 4. ？
结合 速度和成本 最好的会是那种方案呢？
个人倾向于磁盘 速度快成本低
团队倾向于 oss`},void 0,!1,void 0,this),`
`,p("h2",{children:"Kinnice"},void 0,!1,void 0,this),`
`,p("p",{children:p("em",{children:"2024-09-26 18:02:28 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,p("p",{children:"有分布式要求吗？没有就磁盘，有就对象存储"},void 0,!1,void 0,this),`
`,p("p",{children:"数据库只在你需要大量全文检索的时候再说"},void 0,!1,void 0,this),`
`,p("h2",{children:"dynastysea"},void 0,!1,void 0,this),`
`,p("p",{children:p("em",{children:"2024-09-26 18:03:45 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,p("p",{children:"你团队是对的，磁盘你怎么管理元数据？"},void 0,!1,void 0,this),`
`,p("h2",{children:"MoYi123"},void 0,!1,void 0,this),`
`,p("p",{children:p("em",{children:"2024-09-26 18:11:15 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,p("p",{children:"怎么可能直接存磁盘啊，打算自己造几年轮子啊。"},void 0,!1,void 0,this),`
`,p("h2",{children:"shadowyue"},void 0,!1,void 0,this),`
`,p("p",{children:p("em",{children:"2024-09-26 18:14:00 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,p("p",{children:"当然是现成的 OSS，你估计下各种方案最终落地需要的时间"},void 0,!1,void 0,this),`
`,p("h2",{children:"13240284671"},void 0,!1,void 0,this),`
`,p("p",{children:p("em",{children:"2024-09-26 18:20:03 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,p("p",{children:"不都是存数据库吗？一本小说 20M，存 oss 咋打开？"},void 0,!1,void 0,this),`
`,p("h2",{children:"wuhao1"},void 0,!1,void 0,this),`
`,p("p",{children:p("em",{children:"2024-09-26 18:29:24 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,p("p",{children:"oss 对于密集操作，很不友好，网络 IO 开销太大了"},void 0,!1,void 0,this),`
`,p("p",{children:"@Kinnice 暂时没有分布式要求"},void 0,!1,void 0,this),`
`,p("p",{children:"@dynastysea 磁盘只要存 章节内容就行了，章节的元数据存数据库"},void 0,!1,void 0,this),`
`,p("p",{children:"@MoYi123 用磁盘主要是 方便 和 性能的考虑"},void 0,!1,void 0,this),`
`,p("p",{children:"@shadowyue oss 其实成本应该比磁盘贵"},void 0,!1,void 0,this),`
`,p("p",{children:"@13240284671 书少确实存数据库，但是海量的书存数据库就不合适宜了，主要是数据库的存储太贵了"},void 0,!1,void 0,this),`
`,p("h2",{children:"Pitttttt"},void 0,!1,void 0,this),`
`,p("p",{children:p("em",{children:"2024-09-26 22:27:00 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,p("p",{children:"什么需求需要存数据库呢？数据库存元数据（名字大小目录之类的），本地盘存实际文本会不会好些"},void 0,!1,void 0,this),`
`,p("h2",{children:"rui6ye"},void 0,!1,void 0,this),`
`,p("p",{children:p("em",{children:"2024-09-26 23:35:17 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,p("p",{children:"好巧 我的小说文章网（只是一个工具的部分功能）也正在收录，刚发布完。资源来源 pdd 的几十块的 U 盘，大部分格式是 pdf 的，其他是 txt 等，偷个懒我直接传诚通网盘了，直接下载。要兼容这么多格式，工作量太繁琐。"},void 0,!1,void 0,this),`
`,p("p",{children:"3 天时间一口气发布了 4w 多篇文章。"},void 0,!1,void 0,this),`
`,p("p",{children:p("a",{href:"https://li2345.com/read",children:"https://li2345.com/read"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,p("h2",{children:"dode"},void 0,!1,void 0,this),`
`,p("p",{children:p("em",{children:"2024-09-27 09:20:28 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,p("p",{children:"暂时没有分布式要求，单机网络开销多大？现在网络已经存在性能瓶颈了吗？"},void 0,!1,void 0,this),`
`,p("h2",{children:"abersheeran"},void 0,!1,void 0,this),`
`,p("p",{children:p("em",{children:"2024-09-27 09:52:19 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,p("p",{children:"我还真做过，我的做法是一本小说压缩后分章节存入 sqlite。这里有几个原因，第一是可以让细碎的章节文件合并起来，还有是查 sqlite 要比直接从文件系统读取更快，以及当用户阅读一本书的时候，应该是连续的，要把后续章节提前拉到本地做缓存，而不是只把当前章节拉到本地做缓存。当时我抓了压缩后接近一个 T 的小说数据。"},void 0,!1,void 0,this),`
`,p("h2",{children:"abersheeran"},void 0,!1,void 0,this),`
`,p("p",{children:p("em",{children:"2024-09-27 09:54:49 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,p("p",{children:"sqlite 文件放在 OSS 上进行保存。本地做一个缓存机制，100GB 硬盘可以缓存几万本书，对于小站点来说完全够了。普通的 CC 攻击打不死。"},void 0,!1,void 0,this),`
`,p("h2",{children:"sincw"},void 0,!1,void 0,this),`
`,p("p",{children:p("em",{children:"2024-09-27 10:17:28 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,p("p",{children:"小说网站感觉基本 99% 的小说都是在吃灰状态。oss+ 本地热缓。oss 主要节约时间来着"},void 0,!1,void 0,this),`
`,p("h2",{children:"elboble"},void 0,!1,void 0,this),`
`,p("p",{children:p("em",{children:"2024-09-27 11:31:16 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,p("p",{children:"磁盘存文件，meta 存 mongo，字段包括书名作者概要及文件路径等等。关键 meta 元素的提取怎么来。"},void 0,!1,void 0,this),`
`,p("p",{children:"如果全文检索只能都进数据库了吧。"},void 0,!1,void 0,this),`
`,p("p",{children:"没用过 oss，认知范围内只会这样。"},void 0,!1,void 0,this),`
`,p("h2",{children:"baijiahei"},void 0,!1,void 0,this),`
`,p("p",{children:p("em",{children:"2024-09-27 11:53:43 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,p("p",{children:"成熟方案"},void 0,!1,void 0,this),`
`,p("p",{children:"参考杰奇小说"},void 0,!1,void 0,this),`
`,p("p",{children:"元数据 mysql 小说 txt 扔硬盘"},void 0,!1,void 0,this),`
`,p("p",{children:"生成纯静态 html"},void 0,!1,void 0,this),`
`,p("p",{children:"热文件扔 ssd 什么压力都没有"},void 0,!1,void 0,this),`
`,p("h2",{children:"wuhao1"},void 0,!1,void 0,this),`
`,p("p",{children:p("em",{children:"2024-09-27 13:46:09 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,p("p",{children:"oss 确实不失是一个好方法，但是在集中密集操作就暴露缺点了，如果我要读完整的一本书的内容，网络开销太大了"},void 0,!1,void 0,this),`
`,p("p",{children:"还有就是如果是免费小说那么静态化再加上 CDN 毫无压力，可是如果是收费呢？"},void 0,!1,void 0,this),`
`,p("p",{children:"总结：把磁盘和 oss 的优点集中起来，既存 oss 又存磁盘，有没有就好很多 ……^_^"},void 0,!1,void 0,this),`
`,p("p",{children:"不存数据库的话全文检索又是一个问题。"},void 0,!1,void 0,this),`
`,p("h2",{children:"815979670"},void 0,!1,void 0,this),`
`,p("p",{children:p("em",{children:"2024-09-27 13:57:43 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,p("p",{children:"如果没有全文检索需求的话可以压缩存储，web 场景下 cpu 资源很多都是被浪费了（常年在 20% 以下），可以通过压缩利用起来"},void 0,!1,void 0,this),`
`,p("h2",{children:"815979670"},void 0,!1,void 0,this),`
`,p("p",{children:p("em",{children:"2024-09-27 15:43:55 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,p("p",{children:"@abersheeran 能详细说说怎么存的吗，一本小说一个 sqlite 文件 还是 1T 数据全是同一个 sqlite 文件 或者时按照其他规则拆分的？压缩算法用的时 zip 吗？我之前有尝试用 zip 算法压缩文本 然后存入 sqlite 体积只有原来的四分之一"},void 0,!1,void 0,this),`
`,p("h2",{children:"ytmsdy"},void 0,!1,void 0,this),`
`,p("p",{children:p("em",{children:"2024-09-27 20:34:01 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,p("p",{children:"如果预算够，直接上 oss，如果做磁盘存储的话，备份是一个很大的问题。小说文件都是小文本，小文件备份效率非常低。"},void 0,!1,void 0,this),`
`,p("p",{children:"oss 除了费钱以外，其他都挺好的。oss+cdn，基本上不用这么管。"},void 0,!1,void 0,this),`
`,p("h2",{children:"wuhao1"},void 0,!1,void 0,this),`
`,p("p",{children:p("em",{children:"2024-09-29 09:16:13 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,p("p",{children:"@ytmsdy OSS 应对密集操作不友好，网络 IO 太高"},void 0,!1,void 0,this),`
`,p("h2",{children:"wxf666"},void 0,!1,void 0,this),`
`,p("p",{children:p("em",{children:"2024-10-01 04:31:17 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,p("p",{children:"@815979670 #17 全是一个 SQLite 文件，应该也没啥不妥吧。。"},void 0,!1,void 0,this),`
`,p("p",{children:"我在隔壁帖，测试了单表 1.3 亿 100 GB 数据，六七年前轻薄本上，还能上万随机读/写事务并发。。"},void 0,!1,void 0,this),`
`,p("p",{children:"压缩存储，感觉用 zstd 较好？压缩率接近 lzma，但解压速度快 7 倍。。"},void 0,!1,void 0,this),`
`,p("p",{children:"可以测试一下，每 N 个章节一起压缩后总大小 S0，与整本小说压缩后大小 S1，的关系。"},void 0,!1,void 0,this),`
`,p("p",{children:"选 N 尽量小（只读取一章时，不用浪费太多力气解压更多章节），S0 又尽可能逼近 S1 的（N 太小，会浪费很多空间，反复存储词典啥的？导致 S0 远大于 S1。。）"},void 0,!1,void 0,this),`
`,p("p",{children:["或者试试，行级别的 zstd 压缩插件（",p("a",{href:"https://github.com/phiresky/sqlite-zstd%EF%BC%89%EF%BC%8C%E6%88%96%E8%80%85%E9%A1%B5%E7%BA%A7%E5%88%AB%E7%9A%84%EF%BC%88https://github.com/mlin/sqlite_zstd_vfs%EF%BC%89%EF%BC%8C%E6%88%96%E8%80%85%E5%AE%98%E6%96%B9",children:"https://github.com/phiresky/sqlite-zstd），或者页级别的（https://github.com/mlin/sqlite_zstd_vfs），或者官方"},void 0,!1,void 0,this)," $4000 的（",p("a",{href:"https://sqlite.org/purchase/zipvfs%EF%BC%89",children:"https://sqlite.org/purchase/zipvfs）"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,p("p",{children:"对了，中文内容的话，换成 UTF-16 存储，能直接省 1/3 空间。。"},void 0,!1,void 0,this),`
`,p("h2",{children:"wxf666"},void 0,!1,void 0,this),`
`,p("p",{children:p("em",{children:"2024-10-01 05:02:53 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,p("p",{children:"@wuhao1 相比磁盘存储，为嘛不选 SQLite 数据库呢？感觉优点还行呀："},void 0,!1,void 0,this),`
`,p("ol",{children:[`
`,p("li",{children:[`
`,p("p",{children:["单表 1.3 亿 100 GB 大小时，六七年前轻薄本上，仍能上万随机读/写事务并发。且只占用 16 MB 内存。",p("a",{href:"/t/1075881#reply65",children:"源码在隔壁帖"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,p("li",{children:[`
`,p("p",{children:["官方宣称，相比文件系统，10 KB 文件存数据库里，能快 35%，节省 20% 空间。",p("a",{href:"https://sqlite.org/fasterthanfs.html",children:"文章"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,p("p",{children:"你按章节来存的话，假设每章 5000 汉字，UTF-16 存，恰好 10 KB。"},void 0,!1,void 0,this),`
`,p("ol",{start:"3",children:[`
`,p("li",{children:"支持全文索引，甚至拼音/首字母/多音字。可无限搜索事务同时进行。"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,p("p",{children:["微信宣称，手机端百万百字聊天记录，搜三字词，只需 0.0029 秒。10 秒全文索引完毕。",p("a",{href:"https://mp.weixin.qq.com/s/Ph0jykLr5CMF-xFgoJw5UQ",children:"文章"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,p("ol",{start:"4",children:[`
`,p("li",{children:"备份迁移时，没有天量小文件烦恼。"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,p("p",{children:["两周后，SQLite 会发布一个，",p("a",{href:"https://sqlite.org/draft/rsync.html",children:"远程增量同步工具"},void 0,!1,void 0,this),"。"]},void 0,!0,void 0,this),`
`,p("h2",{children:"wxf666"},void 0,!1,void 0,this),`
`,p("p",{children:p("em",{children:"2024-10-02 15:27:51 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,p("p",{children:"@abersheeran #10"},void 0,!1,void 0,this),`
`,p("p",{children:"@815979670 #17"},void 0,!1,void 0,this),`
`,p("p",{children:"我用近 14000 章的《带着农场混异界》，试了一下 zstd 的预训练词典，感觉很适合分章节压缩存储，"},void 0,!1,void 0,this),`
`,p("p",{children:"因为 UTF-8 时，整本压缩率 20%，分章节总压缩率也才 22% ~ 28%，还能快速随机选取章节。"},void 0,!1,void 0,this),`
`,p("p",{children:"如果独立压缩章节，总压缩率飙到 38%。"},void 0,!1,void 0,this),`
`,p("ol",{children:[`
`,p("li",{children:"压缩后，UTF-16 没有明显优势。所以采取 UTF-8 就好。"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,p("p",{children:"UTF-8 时 137.4 MB"},void 0,!1,void 0,this),`
`,p("ul",{children:[`
`,p("li",{children:[`
`,p("p",{children:"gzip 压缩 43.5 MB（31.7%）"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,p("li",{children:[`
`,p("p",{children:"zstd 压缩 28.7 MB（20.9%）"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,p("li",{children:[`
`,p("p",{children:"lzma 压缩 26.8 MB（19.5%）"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,p("p",{children:"UTF-16 时 96.9 MB，"},void 0,!1,void 0,this),`
`,p("ul",{children:[`
`,p("li",{children:[`
`,p("p",{children:"gzip 压缩 39.0 MB（少 10.5%，相比 UTF-8 压缩后）"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,p("li",{children:[`
`,p("p",{children:"zstd 压缩 27.6 MB（少 3.9%）"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,p("li",{children:[`
`,p("p",{children:"lzma 压缩 25.2 MB（少 6.2%）"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,p("ol",{start:"2",children:[`
`,p("li",{children:"分章节后，所有压缩算法表现都很差。可选择多章节压缩，或分离词典。"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,p("ul",{children:[`
`,p("li",{children:[`
`,p("p",{children:"gzip 后共 55.6 MB（40.5%）"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,p("li",{children:[`
`,p("p",{children:"zstd 后共 51.8 MB（37.7%）"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,p("li",{children:[`
`,p("p",{children:"lzma 后共 52.4 MB（38.2 %）"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,p("ol",{start:"3",children:[`
`,p("li",{children:"只有 zstd 支持预训练词典，且不同词典大小，分章节总压缩率也不同。"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,p("ul",{children:[`
`,p("li",{children:[`
`,p("p",{children:"32 KB 词典（压缩后 12.6 KB），压缩后 + 词典 39.6 MB（28.8%）"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,p("li",{children:[`
`,p("p",{children:"64 KB 词典（压缩后 24.7 KB），压缩后 + 词典 37.8 MB（27.5%）"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,p("li",{children:[`
`,p("p",{children:"110 KB 词典（压缩后 41.9 KB），压缩后 + 词典 36.6 MB（26.7%）← 默认词典大小"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,p("li",{children:[`
`,p("p",{children:"128 KB 词典（压缩后 48.7 KB），压缩后 + 词典 36.3 MB（26.4%）"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,p("li",{children:[`
`,p("p",{children:"256 KB 词典（压缩后 97.8 KB），压缩后 + 词典 35.0 MB（25.5%）"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,p("li",{children:[`
`,p("p",{children:"512 KB 词典（压缩后 197.2 KB），压缩后 + 词典 34.1 MB（24.8%）"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,p("li",{children:[`
`,p("p",{children:"1024 KB 词典（压缩后 315.3 KB），压缩后 + 词典 33.0 MB（24%）"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,p("li",{children:[`
`,p("p",{children:"2048 KB 词典（压缩后 611.2 KB），压缩后 + 词典 32.1 MB（23.3%）"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,p("li",{children:[`
`,p("p",{children:"4096 KB 词典（压缩后 1164.8 KB），压缩后 + 词典 31.2 MB（22.7%）"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,p("li",{children:[`
`,p("p",{children:"8192 KB 词典（压缩后 2328.5 KB），压缩后 + 词典 32.4 MB（23.6%）"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,p("ol",{start:"4",children:[`
`,p("li",{children:"个人认为，不同场景的选择。"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,p("ul",{children:[`
`,p("li",{children:[`
`,p("p",{children:"如果本地收藏，追求极致压缩，每次查看，接受解压全本，应该选 UTF-16 + lzma，压缩率 18%"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,p("li",{children:[`
`,p("p",{children:"如果本地收藏，但要求快速任意跳转章节，选 UTF-8 + zstd + 大词典，压缩率 23%"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,p("li",{children:[`
`,p("p",{children:"如果对外提供服务，选 UTF-8 + zstd + 小词典，压缩率 27%"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,p("p",{children:"第三点考虑如下："},void 0,!1,void 0,this),`
`,p("ul",{children:[`
`,p("li",{children:[`
`,p("p",{children:"若服务器本地解压，再传给用户，每次选取章节后，再取对应词典压力较小，缓存词典所需内存也少"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,p("li",{children:[`
`,p("p",{children:"若要求客户端先拿词典，再本地解压呈现章节。面对只看几章就弃书的用户，沉没成本较低（20 ~ 40 KB）"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,p("h2",{children:"815979670"},void 0,!1,void 0,this),`
`,p("p",{children:p("em",{children:"2024-10-02 17:06:13 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,p("p",{children:"@wxf666 问一下 压缩后的数据存 text 类型还是 blob 类型？"},void 0,!1,void 0,this),`
`,p("h2",{children:"wxf666"},void 0,!1,void 0,this),`
`,p("p",{children:p("em",{children:"2024-10-02 20:00:59 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,p("p",{children:"@815979670 #23"},void 0,!1,void 0,this),`
`,p("p",{children:"BLOB，存的是 zstd 压缩后的二进制数据。"},void 0,!1,void 0,this),`
`,p("p",{children:"噢，如果要全文搜索，存压缩后数据也没关系的。SQLite 的 FTS 支持无内容表，只要你添加/删除时，提供了压缩前的章节内容，就行。"},void 0,!1,void 0,this),`
`,p("p",{children:["但搜索结果只有 ",p("code",{children:"章节 ID"},void 0,!1,void 0,this),"，还需要回 ",p("code",{children:"章节表"},void 0,!1,void 0,this)," 取数据解压。但搜索服务，一般都会分页呈现结果，所以不会一下子解压几万个章节出来。。"]},void 0,!0,void 0,this),`
`,p("p",{children:"一下子解压几万个章节。。可能也没事？过亿数据，都能四五万随机读并发，命令行里 zstd 用词典，单线程解压那 14000 章节文件，也才 0.9 秒。。还是六七年前的轻薄本了。。"},void 0,!1,void 0,this),`
`,p("h2",{children:"infinet"},void 0,!1,void 0,this),`
`,p("p",{children:p("em",{children:"2024-10-02 22:40:14 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,p("p",{children:"@wxf666 14000 章！键盘都磨平了吧"},void 0,!1,void 0,this),`
`,p("h2",{children:"815979670"},void 0,!1,void 0,this),`
`,p("p",{children:p("em",{children:"2024-10-03 02:57:06 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,p("p",{children:"@wxf666 谢谢 回复非常有参考价值，我计划用 sqlite 存日志，配合压缩使用 目前未压缩数据一个月有 400G 左右，压缩后体积应该能小压缩到 35% ~30% 左右"},void 0,!1,void 0,this),`
`,p("p",{children:"第一次了解到外置压缩字典的用法，对于高度重复，量又大的日志文件应该很有用（任务单次日志输出 3MB），之前我还在担心每行独立压缩，压缩率可能不高的问题"},void 0,!1,void 0,this),`
`,p("h2",{children:"cyoking"},void 0,!1,void 0,this),`
`,p("p",{children:p("em",{children:"2024-10-03 10:27:13 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,p("p",{children:"@rui6ye 你这个不会被被人追究版权吗"},void 0,!1,void 0,this),`
`,p("h2",{children:"wxf666"},void 0,!1,void 0,this),`
`,p("p",{children:p("em",{children:"2024-10-03 14:17:31 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,p("p",{children:"@infinet #25"},void 0,!1,void 0,this),`
`,p("p",{children:"要是不换键盘，估计都能磨成粉了吧。。"},void 0,!1,void 0,this),`
`,p("p",{children:"其实网上冲着《字数较多网文》随便搜的，"},void 0,!1,void 0,this),`
`,p("p",{children:"看了下，这小说连载十来年了，应该换好几套键盘了吧。。"},void 0,!1,void 0,this),`
`,p("p",{children:"@815979670 #26"},void 0,!1,void 0,this),`
`,p("p",{children:"我还没试过日志存数据库诶。。"},void 0,!1,void 0,this),`
`,p("p",{children:"日志可以调整成，边压缩，边流式存到硬盘上吗？"},void 0,!1,void 0,this),`
`,p("p",{children:"要搜索的话，zstdgrep 就能搜了。。"},void 0,!1,void 0,this),`
`,p("p",{children:"如果你确实想试试数据库存日志，也推荐你 DuckDB 对比下，"},void 0,!1,void 0,this),`
`,p("p",{children:"这货是列式数据库，默认就带压缩。同一列相同类型，压缩效果应该也更好些。。"},void 0,!1,void 0,this),`
`,p("p",{children:"而且功能、计算速度也比 SQLite 丰富/快很多。"},void 0,!1,void 0,this),`
`,p("p",{children:"就是不知道读写速度，比得上 SQLite 不。。"},void 0,!1,void 0,this),`
`,p("h2",{children:"815979670"},void 0,!1,void 0,this),`
`,p("p",{children:p("em",{children:"2024-10-04 00:11:21 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,p("p",{children:"DuckDB 挺早就注意到了，出于两个考虑没有考虑使用："},void 0,!1,void 0,this),`
`,p("ol",{children:[`
`,p("li",{children:[`
`,p("p",{children:["项目的开发使用的是 Go 语言，主流的 Go-duckdb 库 ( ",p("a",{href:"https://github.com/marcboeker/go-duckdb",children:"https://github.com/marcboeker/go-duckdb"},void 0,!1,void 0,this),") 依赖 CGO（无法跨平台编译 这个对我很重要），有一个不依赖 CGO 的 ( ",p("a",{href:"https://github.com/scottlepp/go-duck",children:"https://github.com/scottlepp/go-duck"},void 0,!1,void 0,this),") 但目前只有 8 个 Star 不太敢用在项目中。"]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,p("li",{children:[`
`,p("p",{children:"SQLite 发展时间很长，经过了时间的检验，并且官方也提到了对损坏的数据库文件也尽可能的提供了读取的支持，无论从性能、兼容性、生态 等多方面考虑，它仍然很能打 并且在我这个场景中够用。而 DuckDB 我自己做一些新技术探索时也尝试过 性能确实可以（2000w 行 csv，就纯 csv 没索引那种，汇总数据特别快 只用了 0.2 毫秒），但毕竟是一个新东西，可能 一两年后的项目中会考虑使用吧（让子弹飞一会）。"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,p("p",{children:["日志存储倒不是流式存储，项目中会有一个专门写日志的组件，不管哪里的日志都丢给 这个组件，先缓存起来，再按照一定的规则批量写入 SQLite 落盘（我之前测试过 SQLite 批量写入性能 ",p("a",{href:"https://www.dbkuaizi.com/archives/154.html",children:"https://www.dbkuaizi.com/archives/154.html"},void 0,!1,void 0,this)," 15w 数据耗时 5.13 s），所以写入不存在问题。"]},void 0,!0,void 0,this),`
`,p("h2",{children:"815979670"},void 0,!1,void 0,this),`
`,p("p",{children:p("em",{children:"2024-10-04 00:12:20 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,p("p",{children:"@wxf666 忘了 @了 看 29 楼"},void 0,!1,void 0,this),`
`,p("h2",{children:"815979670"},void 0,!1,void 0,this),`
`,p("p",{children:p("em",{children:"2024-10-04 00:14:04 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,p("p",{children:"29 楼更正一个错误 DuckDB 汇总数据是 200ms 0.2 秒"},void 0,!1,void 0,this),`
`,p("h2",{children:"mayli"},void 0,!1,void 0,this),`
`,p("p",{children:p("em",{children:"2024-10-04 06:07:10 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,p("p",{children:"@wuhao1 oss 压缩存放，外加服务器本地缓存下。"},void 0,!1,void 0,this),`
`,p("h2",{children:"mayli"},void 0,!1,void 0,this),`
`,p("p",{children:p("em",{children:"2024-10-04 06:15:21 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,p("p",{children:"上万的小说 -> 也就 10K"},void 0,!1,void 0,this),`
`,p("p",{children:"平均每本 10MB"},void 0,!1,void 0,this),`
`,p("p",{children:"oss = 100 GB"},void 0,!1,void 0,this),`
`,p("p",{children:"完全没有压力。"},void 0,!1,void 0,this),`
`,p("h2",{children:"tushan"},void 0,!1,void 0,this),`
`,p("p",{children:p("em",{children:"2024-10-04 15:43:54 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,p("p",{children:"建议使用 oss 储存，对于冷门小说还可以走存档的套餐，成本更低，"},void 0,!1,void 0,this),`
`,p("hr",{},void 0,!1,void 0,this),`
`,p("ul",{children:[`
`,p("li",{children:"2024 年 10 月 5 日，转载"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)}export{e as default};
