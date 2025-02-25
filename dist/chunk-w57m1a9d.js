import{e,h as n}from"/dist/chunk-scq2q67j.js";function p(){return n("div",{class:"markdown-body",children:n(e,{children:[n("h1",{children:"MySQL 数据上亿以后，查询分页问题"},void 0,!1,void 0,this),`
`,n("p",{children:["原文地址：",n("a",{href:"https://v2ex.com/t/1008741#reply36",children:"https://v2ex.com/t/1008741#reply36"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("h2",{children:[n("em",{children:"2024-01-15 13:32:37 +08:00"},void 0,!1,void 0,this)," Features"]},void 0,!0,void 0,this),`
`,n("p",{children:"查询分页一般要最少要执行两条 SQL 语句"},void 0,!1,void 0,this),`
`,n("p",{children:n("code",{children:"SELECT COUNT(*) FROM tablename WHERE columnName = 'xx'"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:n("code",{children:" SELECT * FROM tablename WHERE columnName = 'xx' limit 0,10"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:"因为查询条件是动态的，所以不太可能做缓存"},void 0,!1,void 0,this),`
`,n("p",{children:"这种情况应该是必须要分表了吧？"},void 0,!1,void 0,this),`
`,n("p",{children:"有什么数据库能在不分表，走索引的情况下实现良好的体验呢？"},void 0,!1,void 0,this),`
`,n("h2",{children:[n("em",{children:"2024-01-15 13:37:47 +08:00"},void 0,!1,void 0,this)," changdy"]},void 0,!0,void 0,this),`
`,n("p",{children:n("a",{href:"https://juejin.cn/post/7207410405786484796",children:"https://juejin.cn/post/7207410405786484796"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:n("a",{href:"https://juejin.cn/post/7323570678690185242",children:"https://juejin.cn/post/7323570678690185242"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:"我自己做过一个订单查询的优化 ..场景复杂得多 ."},void 0,!1,void 0,this),`
`,n("p",{children:"不知道楼主是已经有了具体的场景，还是只是猜想将来的维护情况"},void 0,!1,void 0,this),`
`,n("h2",{children:[n("em",{children:"2024-01-15 13:38:23 +08:00"},void 0,!1,void 0,this)," Pythoner666666"]},void 0,!0,void 0,this),`
`,n("p",{children:"瓶颈在你这个 count(*)，下面一条走索引不会慢，所以解决办法就是跟 PM 沟通下，要么把时间筛选加上，要么就加缓存允许一定的延迟。"},void 0,!1,void 0,this),`
`,n("h2",{children:[n("em",{children:"2024-01-15 13:42:12 +08:00"},void 0,!1,void 0,this)," vacuitym"]},void 0,!0,void 0,this),`
`,n("p",{children:"不然做一张表单纯存数据的 count，然后去定时刷新"},void 0,!1,void 0,this),`
`,n("h2",{children:[n("em",{children:"2024-01-15 13:47:46 +08:00"},void 0,!1,void 0,this)," nice2cu"]},void 0,!0,void 0,this),`
`,n("p",{children:"limit 页数大了也会慢的，试试业务上能不能处理下，比如必填条件数增多，分页量大时不然看 1000 页之后的"},void 0,!1,void 0,this),`
`,n("h2",{children:[n("em",{children:"2024-01-15 14:17:08 +08:00"},void 0,!1,void 0,this)," tonghuashuai"]},void 0,!0,void 0,this),`
`,n("p",{children:"数据量大以后使用 limit offset, size 会有性能问题，可以使用 id 作为 cursor。"},void 0,!1,void 0,this),`
`,n("h2",{children:[n("em",{children:"2024-01-15 14:18:15 +08:00"},void 0,!1,void 0,this)," june4"]},void 0,!0,void 0,this),`
`,n("p",{children:"先确定有没有准确实时的大数据集总数这个需求吧"},void 0,!1,void 0,this),`
`,n("h2",{children:[n("em",{children:"2024-01-15 14:21:34 +08:00"},void 0,!1,void 0,this)," opengps"]},void 0,!0,void 0,this),`
`,n("p",{children:"我们这里要求的是分两步走：先执行第二句，有信息返回再执行第一句，否则第一句直接就用返回值 0 代替"},void 0,!1,void 0,this),`
`,n("h2",{children:[n("em",{children:"2024-01-15 14:47:00 +08:00"},void 0,!1,void 0,this)," JackCh3ng"]},void 0,!0,void 0,this),`
`,n("p",{children:"如果你的查询条件不复杂，数据量基本固定不会再增加，可以用缓存计数的方式，否则就乖乖上 es 吧，而且就算上 es 也还是解决不了深度分页的问题（es 只能查询一万条数据，也就是说 10 条一页，只能 1000 页，后面的也查不出来了）。如果觉得 es 成本太高，在没有复杂查询条件的情况下也可以尝试列式存储，但具体效率要看数据量和查询字段，使用列式存储仍然需要一个事务数据库，同样是需要数据同步的方案，或者在代码里进行双写。"},void 0,!1,void 0,this),`
`,n("h2",{children:[n("em",{children:"2024-01-15 14:53:31 +08:00"},void 0,!1,void 0,this)," silentsky"]},void 0,!0,void 0,this),`
`,n("p",{children:"如果是内部使用 换 olap 数据库，否则不要 count"},void 0,!1,void 0,this),`
`,n("h2",{children:[n("em",{children:"2024-01-15 14:56:17 +08:00"},void 0,!1,void 0,this)," zhuoyue100"]},void 0,!0,void 0,this),`
`,n("p",{children:"数据量比较大的时候，这类查询一般不走业务表，可以异步写一份到分析型数据库来实现"},void 0,!1,void 0,this),`
`,n("h2",{children:[n("em",{children:"2024-01-15 15:04:10 +08:00"},void 0,!1,void 0,this)," ShuA1"]},void 0,!0,void 0,this),`
`,n("p",{children:"别用 count 用 EXPLAIN，快很多，测试一下吧"},void 0,!1,void 0,this),`
`,n("h2",{children:[n("em",{children:"2024-01-15 15:05:04 +08:00"},void 0,!1,void 0,this)," iyiluo"]},void 0,!0,void 0,this),`
`,n("p",{children:"最好和业务商量一下，看看能不能限制一下查询范围，例如对外展示的数据限制前面 100 页"},void 0,!1,void 0,this),`
`,n("h2",{children:[n("em",{children:"2024-01-15 15:09:01 +08:00"},void 0,!1,void 0,this)," FreeEx"]},void 0,!0,void 0,this),`
`,n("ol",{children:[`
`,n("li",{children:[`
`,n("p",{children:"非要有总数量的话就得加上一个时间范围的选择。"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("li",{children:[`
`,n("p",{children:"不要总数量的话就可以用游标分页，这种需要数据结构中有一个字段是带顺序且唯一。"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("p",{children:["第二种可以参考 ",n("a",{href:"https://bojithapiyathilake.medium.com/pagination-offset-vs-cursor-in-mysql-92cbf1a02cfa",children:"https://bojithapiyathilake.medium.com/pagination-offset-vs-cursor-in-mysql-92cbf1a02cfa"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("h2",{children:[n("em",{children:"2024-01-15 15:14:05 +08:00"},void 0,!1,void 0,this)," realNewBee"]},void 0,!0,void 0,this),`
`,n("p",{children:"如果想通过技术手段来解决，那就不能使用 MySQL，得使用其他的数据库。否则只能通过业务方案来解决。"},void 0,!1,void 0,this),`
`,n("p",{children:"数据量超过百万，count 和 limit 都有性能问题。所以肯定不能用。在不改变数据库的情况下，我能想到的就是用 ID 来做滚动分页 + 索引搜索的业务方案来解决。"},void 0,!1,void 0,this),`
`,n("h2",{children:[n("em",{children:"2024-01-15 15:19:05 +08:00"},void 0,!1,void 0,this)," coderzhangsan"]},void 0,!0,void 0,this),`
`,n("p",{children:"上亿数据分页查询，楼上已经说明了存在的问题，我帮你简单汇总下："},void 0,!1,void 0,this),`
`,n("ol",{children:[`
`,n("li",{children:"innodb 引擎，count 查询会很慢，优化的重点将是这里。"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("p",{children:"a. 统计精度不精准的前提下，可以使用 explain select count(*) from tablename where columnName = 'xx' ."},void 0,!1,void 0,this),`
`,n("p",{children:"b. 统计精度要求精准的话，由于存在各类场景的查询，innodb 引擎不适合去做这类聚合统计查询的业务，冗余一张 myisam 引擎的表去查询或者更换数据库"},void 0,!1,void 0,this),`
`,n("p",{children:"2.分页语句，limit 偏移量越大，查询愈慢，可以使用唯一索引做偏移量查询，常见的就是自增 id，示例"},void 0,!1,void 0,this),`
`,n("p",{children:"SELECT id FROM tablename WHERE id > 10000 order by id desc limit 10."},void 0,!1,void 0,this),`
`,n("h2",{children:[n("em",{children:"2024-01-15 15:31:51 +08:00"},void 0,!1,void 0,this)," me1onsoda"]},void 0,!0,void 0,this),`
`,n("p",{children:"游标？"},void 0,!1,void 0,this),`
`,n("h2",{children:[n("em",{children:"2024-01-15 15:45:38 +08:00"},void 0,!1,void 0,this)," encro"]},void 0,!0,void 0,this),`
`,n("p",{children:"我们就是默认只差最近 3 天的，时间建立一个索引。"},void 0,!1,void 0,this),`
`,n("h2",{children:[n("em",{children:"2024-01-15 16:02:12 +08:00"},void 0,!1,void 0,this)," catamaran"]},void 0,!0,void 0,this),`
`,n("p",{children:"列数据库性能是真的快，比如 clickhouse，但是对于数据的修改很不友好，不知道 oceanbase 怎么样，正在了解中。"},void 0,!1,void 0,this),`
`,n("h2",{children:[n("em",{children:"2024-01-15 16:09:04 +08:00"},void 0,!1,void 0,this)," Features"]},void 0,!0,void 0,this),`
`,n("p",{children:"@ShuA1 用 explain 确实快很多，但是返回的 rows 应该是有问题的"},void 0,!1,void 0,this),`
`,n("p",{children:"我这里测试，mysql5.7，设置 WHERE 条件以后，这个 rows 最大只能到 52618055"},void 0,!1,void 0,this),`
`,n("p",{children:"不知道是索引问题还是什么情况"},void 0,!1,void 0,this),`
`,n("h2",{children:[n("em",{children:"2024-01-15 16:10:08 +08:00"},void 0,!1,void 0,this)," Pastsong"]},void 0,!0,void 0,this),`
`,n("p",{children:"用 cursor"},void 0,!1,void 0,this),`
`,n("h2",{children:[n("em",{children:"2024-01-15 16:14:36 +08:00"},void 0,!1,void 0,this)," sch1111878"]},void 0,!0,void 0,this),`
`,n("p",{children:"最近也遇到了这个问题，mysql 已经分表，单表 2000 万数据，聚合查询要 20 多分钟，中间改用过 es, 但是不熟，其他同事写的也乱，实在不行就准备换 clickhouse 了，"},void 0,!1,void 0,this),`
`,n("p",{children:"上面也有说业务表和聚合查询应该要分开的，不然锁表或者慢 sql 都会业务影响比较大"},void 0,!1,void 0,this),`
`,n("h2",{children:[n("em",{children:"2024-01-15 16:15:35 +08:00"},void 0,!1,void 0,this)," thinkershare"]},void 0,!0,void 0,this),`
`,n("p",{children:"@Features explain 完全不能用来统计行数量，高频更新下返回的数据属于基本不可用垃圾数据。如果需要精确的分页。而且有复杂的查询，我的使用经验是 2000W+ 后就需要分表（如果是机械硬盘 500w，有高频写入就需要分表了)."},void 0,!1,void 0,this),`
`,n("p",{children:"如果数据库是只读的 (包括软删除）模式，使用自增 id 是一个解。其它模式我也没找到好办法再 mysql 中实现靠谱的分页。"},void 0,!1,void 0,this),`
`,n("h2",{children:[n("em",{children:"2024-01-15 16:23:12 +08:00"},void 0,!1,void 0,this)," sampeng"]},void 0,!0,void 0,this),`
`,n("p",{children:"1.cursor 法，上亿的数据，就算你 20 一页吧，产品经理麻烦你来给我翻到第 1234567 页谢谢。。。其实都这么多数据了。total 返回一个固定值估计都没人发现。。哈哈哈哈哈"},void 0,!1,void 0,this),`
`,n("p",{children:"2.分区。哦。不好意思。。窜台了。mysql 没分区。那就只能分表了。"},void 0,!1,void 0,this),`
`,n("p",{children:"3.外置表。也就是其他的解决方案，这就可以随意脑洞大开的想方案了。问题是很容易成另一坨屎山。任何新技术的引进都会导致复杂度的上升，我相信绝大多数用 mysql 到几亿了才想到分页怎么搞的 team，玩 clickhouse 好，玩 es 也罢，都是会踩你没踩过的其他的雷的。"},void 0,!1,void 0,this),`
`,n("h2",{children:[n("em",{children:"2024-01-15 16:24:08 +08:00"},void 0,!1,void 0,this)," sampeng"]},void 0,!0,void 0,this),`
`,n("p",{children:"如果是可以迁移库。。有一说一，迁移 pg 保平安。。最少一个分区下去就能解决你大部分问题。。"},void 0,!1,void 0,this),`
`,n("h2",{children:[n("em",{children:"2024-01-15 16:31:48 +08:00"},void 0,!1,void 0,this)," ShuA1"]},void 0,!0,void 0,this),`
`,n("p",{children:"@Features 看业务吧，一般业务用 explain 就够了，不需要太精确"},void 0,!1,void 0,this),`
`,n("h2",{children:[n("em",{children:"2024-01-15 16:43:17 +08:00"},void 0,!1,void 0,this)," NickX"]},void 0,!0,void 0,this),`
`,n("p",{children:"如果数据量大，第一条 count 做实时其实没太大必要（目测只是展示作用，可以接受一段时间的延迟），可以缓存起来定时查询。第二条，columnName 字段加索引一下子能查出来。"},void 0,!1,void 0,this),`
`,n("h2",{children:[n("em",{children:"2024-01-15 16:52:47 +08:00"},void 0,!1,void 0,this)," fiveStarLaoliang"]},void 0,!0,void 0,this),`
`,n("p",{children:"可以 count 上缓存，再上分表，旧数据分表存储，还可以加个冗余表，存储对应时间范围的主键，尽量降低表数据量，尽量走主键索引"},void 0,!1,void 0,this),`
`,n("h2",{children:[n("em",{children:"2024-01-15 16:56:55 +08:00"},void 0,!1,void 0,this)," ninjashixuan"]},void 0,!0,void 0,this),`
`,n("p",{children:"百万以上大 offset 就很慢了吧"},void 0,!1,void 0,this),`
`,n("h2",{children:[n("em",{children:"2024-01-15 16:57:48 +08:00"},void 0,!1,void 0,this)," edk24"]},void 0,!0,void 0,this),`
`,n("p",{children:"用 es 查询关联索引，分页结果拿到后再取数据库结果补充完整信息"},void 0,!1,void 0,this),`
`,n("p",{children:"用 es 的话，会存在 count 不准确的情况 好像是超过 10w 条还是多少就不准确，但这个不重要 提高搜索精度比如手机号，身份证类似的减少这种情况的发生"},void 0,!1,void 0,this),`
`,n("p",{children:"数据量大一点的系统都没有去搞 count 这个事情，都是直接偏移游标查下一个位置的数据，那玩意太耗时了"},void 0,!1,void 0,this),`
`,n("h2",{children:[n("em",{children:"2024-01-15 17:01:07 +08:00"},void 0,!1,void 0,this)," edk24"]},void 0,!0,void 0,this),`
`,n("p",{children:"@edk24 这个是我们维护贵州核酸系统总结来的经验，用 es 来查索引很快"},void 0,!1,void 0,this),`
`,n("p",{children:"你每页也就大不了 100 条数据，用 id 去数据库查出来补充其他展示数据 很快的"},void 0,!1,void 0,this),`
`,n("h2",{children:[n("em",{children:"2024-01-15 17:34:28 +08:00"},void 0,!1,void 0,this)," Matthew66"]},void 0,!0,void 0,this),`
`,n("p",{children:"@ShuA1 可以啊 这骚操作学会了"},void 0,!1,void 0,this),`
`,n("h2",{children:[n("em",{children:"2024-01-15 17:53:23 +08:00"},void 0,!1,void 0,this)," heliotrope"]},void 0,!0,void 0,this),`
`,n("p",{children:"我是先执行第二条 SQL 分页前端异步查"},void 0,!1,void 0,this),`
`,n("p",{children:"场景是 亿级别的数据量 自用的 有各种筛选条件要过滤"},void 0,!1,void 0,this),`
`,n("p",{children:"目前是查列表"},void 0,!1,void 0,this),`
`,n("p",{children:"第一页几乎无感 count 要 16 秒左右"},void 0,!1,void 0,this),`
`,n("p",{children:"用户能接受 先显示出列表 主要是看列表总数用户愿意等"},void 0,!1,void 0,this),`
`,n("p",{children:"主要是他不愿意花钱上 ES"},void 0,!1,void 0,this),`
`,n("p",{children:"业务不允许切割的情况下几乎无解 缓存之类的 用户输入的搜索词每次都不一样根本就没办法缓存"},void 0,!1,void 0,this),`
`,n("p",{children:"EXPLAIN 完全不准 不加任何条件都不准 能差出一个数量级"},void 0,!1,void 0,this),`
`,n("h2",{children:[n("em",{children:"2024-01-15 18:13:06 +08:00"},void 0,!1,void 0,this)," illbehere"]},void 0,!0,void 0,this),`
`,n("p",{children:"搞个 mpp 数据库做从库吧"},void 0,!1,void 0,this),`
`,n("h2",{children:[n("em",{children:"2024-01-15 18:14:48 +08:00"},void 0,!1,void 0,this)," dzdh"]},void 0,!0,void 0,this),`
`,n("p",{children:"zincsearch 、manticoresearch 、sphinx 、solr 、es 、opensearch"},void 0,!1,void 0,this),`
`,n("h2",{children:[n("em",{children:"2024-01-15 18:22:42 +08:00"},void 0,!1,void 0,this)," akinoowari"]},void 0,!0,void 0,this),`
`,n("p",{children:'@edk24 "track_total_hits":true 用这个不会不准，不然默认最大 10000'},void 0,!1,void 0,this),`
`,n("h2",{children:[n("em",{children:"2024-01-15 18:49:47 +08:00"},void 0,!1,void 0,this)," MineDog"]},void 0,!0,void 0,this),`
`,n("p",{children:["记得大学时候还是用 mysql SQL_CALC_FOUND_ROWS 返回总计行，当时理解查一遍开销应该更小才对，后来在工作中就好像都是查两遍了。看了文档，原来 8.0 都废弃了 ",n("a",{href:"https://dev.mysql.com/worklog/task/?id=12615",children:"https://dev.mysql.com/worklog/task/?id=12615"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("hr",{},void 0,!1,void 0,this),`
`,n("ul",{children:[`
`,n("li",{children:"2024 年 1 月 16 日，copy from v2ex"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)}export{p as default};
