import{e as n,h as p}from"/dist/chunk-0936xbxf.js";function e(){return p("div",{class:"markdown-body",children:p(n,{children:[p("h1",{children:"在数据库设计时，部分统计字段或者需要计算的字段，要增加一个字段单独存吗"},void 0,!1,void 0,this),`
`,p("p",{children:["原文地址：",p("a",{href:"https://v2ex.com/t/1082546#reply11",children:"https://v2ex.com/t/1082546#reply11"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,p("h2",{children:"Renco"},void 0,!1,void 0,this),`
`,p("p",{children:p("em",{children:"2024-10-22 13:56:40 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,p("p",{children:`类似于用户的消息数，已读数和未读数，这种能直接通过表数据状态 count 查询的。
还有是类似于库存计算的，例如有某个设备数量 10 个，其他用户可购买，有使购买数量记录，这个时候，是否还需要单独给这个设备加一个剩余数量字段在每次用户使用的时候计算存一遍。还是直接通过购买记录去计算设备的剩余数量。
这个开发过程经常能遇到，但是每一位开发同事的处理方式都不一样，有的喜欢增加字段去统计，每次做业务逻辑的时候，对这个字段进行加减或者计算。还有的是喜欢通过 sql 直接做计算处理，或者通过 sql 查询出来后，在业务层里去做计算处理。`},void 0,!1,void 0,this),`
`,p("h2",{children:"yor1g"},void 0,!1,void 0,this),`
`,p("p",{children:p("em",{children:"2024-10-22 14:03:48 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,p("p",{children:"能算就不要存. 除非性能不行计算太费时. 出 bug 修数据真的很麻烦"},void 0,!1,void 0,this),`
`,p("h2",{children:"AoEiuV020JP"},void 0,!1,void 0,this),`
`,p("p",{children:p("em",{children:"2024-10-22 14:04:36 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,p("p",{children:"按我理解这种属于“优化”， 空间换时间， 插入时间换查询时间， 看业务看性能瓶颈决定，反正封装好确保就算换了方案对前端也没影响就是了，"},void 0,!1,void 0,this),`
`,p("h2",{children:"b821025551b"},void 0,!1,void 0,this),`
`,p("p",{children:p("em",{children:"2024-10-22 14:14:29 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,p("p",{children:"具体还是要根据业务情景来选择，比如你这个例子中："},void 0,!1,void 0,this),`
`,p("p",{children:"用户消息数，这个可能涉及到很频繁的写入，这种就不建议用单独字段去存数据库了，都是走缓存；"},void 0,!1,void 0,this),`
`,p("p",{children:"库存计算，这个要看你这个统计用在什么场景、并发性如何，假如仅仅是展示，单独字段没什么问题；但是涉及到抢购，要防止超售，就不推荐用字段去存数量；"},void 0,!1,void 0,this),`
`,p("p",{children:"另外，你举例的这几种常用方法中，sql 里查询再由业务层计算，在高并发场景下很可能出现问题吧？"},void 0,!1,void 0,this),`
`,p("h2",{children:"lasuar"},void 0,!1,void 0,this),`
`,p("p",{children:p("em",{children:"2024-10-22 14:14:56 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,p("p",{children:"这个要看情况的，如果可以通过 [简单] 的代码逻辑通过事务保证一致性，那就可以冗余字段。"},void 0,!1,void 0,this),`
`,p("h2",{children:"1018ji"},void 0,!1,void 0,this),`
`,p("p",{children:p("em",{children:"2024-10-22 14:19:54 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,p("p",{children:"我第一时间想到的就是物化视图"},void 0,!1,void 0,this),`
`,p("h2",{children:"wu00"},void 0,!1,void 0,this),`
`,p("p",{children:p("em",{children:"2024-10-22 14:21:31 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,p("p",{children:"看情况"},void 0,!1,void 0,this),`
`,p("p",{children:"查要考虑性能，存要考虑一致性"},void 0,!1,void 0,this),`
`,p("h2",{children:"suuuch"},void 0,!1,void 0,this),`
`,p("p",{children:p("em",{children:"2024-10-22 14:29:03 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,p("p",{children:"各种设计其实是一个多方取舍的过程，没有万能的设计。"},void 0,!1,void 0,this),`
`,p("p",{children:"这个设计我一般是在看数据重要程度的，像库存、金额，这一类的计算结果必然需要落到实体表里面，优先保证数据可回溯性，并确保数据可以被完整校验和二次核查，否则程序出 bug 的情况下，损失定位都很花时间。在这个基础上再去考虑成本和性能。"},void 0,!1,void 0,this),`
`,p("p",{children:"像消息已读未读这种的，优先考虑性能和成本，并不考虑其它的。"},void 0,!1,void 0,this),`
`,p("h2",{children:"woodfizky"},void 0,!1,void 0,this),`
`,p("p",{children:p("em",{children:"2024-10-22 15:08:29 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,p("p",{children:"数据量大、计算量大的场景，可以考虑增加一个这样的数据表字段，或者是缓存，实现方式具体看情况嘛。"},void 0,!1,void 0,this),`
`,p("p",{children:"但是这个数据的准确度就看影响这个实际数据的业务是不是都闭环了，都会有效更新这个字段了。"},void 0,!1,void 0,this),`
`,p("p",{children:"甚至有的情况，维护这个字段的值本身的性能开销还比实时查询 count 大，比如说业务过于频繁，过于频繁的更新这个字段，那这个就没必要了。"},void 0,!1,void 0,this),`
`,p("h2",{children:"wangritian"},void 0,!1,void 0,this),`
`,p("p",{children:p("em",{children:"2024-10-22 15:10:20 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,p("p",{children:"第一版上线前实时算，代码加个 todo 后面用户多了再缓存"},void 0,!1,void 0,this),`
`,p("h2",{children:"IdJoel"},void 0,!1,void 0,this),`
`,p("p",{children:p("em",{children:"2024-10-22 15:16:42 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,p("p",{children:"已读数和未读数 肯定要存一下的，因为用户消息量应该会很大，单独用户的消息也会很多，不存的压力会很大吧？"},void 0,!1,void 0,this),`
`,p("p",{children:"库存计算 这个一般肯定也是算的，一般库存就直接同步到 redis 里面了"},void 0,!1,void 0,this),`
`,p("p",{children:"主要还是看计算的数量，如果列表显示、展示的次数很多写的次数很少，那一定单独弄个字段"},void 0,!1,void 0,this),`
`,p("p",{children:"如果不需要列表显示，低频的数据可以每次都算"},void 0,!1,void 0,this),`
`,p("p",{children:"关于 “能算就不要存. 除非性能不行计算太费时. 出 bug 修数据真的很麻烦” 的理论，我只能说，你代码都有 BUG 了，你不考虑修 bug ，而是考虑牺牲性能取处理这个东西，我觉得这个思路是完全不对的"},void 0,!1,void 0,this),`
`,p("h2",{children:"RandomJoke"},void 0,!1,void 0,this),`
`,p("p",{children:p("em",{children:"2024-10-23 15:05:37 +08:00"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,p("p",{children:"@IdJoel 性能能满足业务场景，确实就没必要存，要存大多都是因为性能满足不了场景，这里的出 bug ，他的意思应该是加入字段存储，提升了复杂度，修数据需要去动存储，而实时计算则不需要"},void 0,!1,void 0,this),`
`,p("hr",{},void 0,!1,void 0,this),`
`,p("ul",{children:[`
`,p("li",{children:"2025 年 10 月 4 日，转载"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)}export{e as default};
