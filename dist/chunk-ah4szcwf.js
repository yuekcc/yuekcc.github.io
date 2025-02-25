import{e as n,h as e}from"/dist/chunk-scq2q67j.js";function p(){return e("div",{class:"markdown-body",children:e(n,{children:[e("h1",{children:"Java 后端生成海报图片遇到了性能压力，求指教~"},void 0,!1,void 0,this),`
`,e("p",{children:["原文地址：",e("a",{href:"https://v2ex.com/t/1030721#reply44",children:"https://v2ex.com/t/1030721#reply44"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,e("h2",{children:[e("em",{children:"2024-04-08 21:08:21 +08:00"},void 0,!1,void 0,this)," acbingo"]},void 0,!0,void 0,this),`
`,e("p",{children:`因为我们服务基本都是 Java 框架，所以当初也是想当然的用 Java 原生的图片编辑能力来画图实现需求，随着业务增长，性能越来越吃紧，而且需求也越来越复杂，需要画越来越复杂的图，Java 越来越难画了
求大家指教，有什么成熟的后端服务方案，画图又快，还能画一些复杂的海报图呢。可以考虑用别的语言`},void 0,!1,void 0,this),`
`,e("h2",{children:[e("em",{children:"2024-04-08 21:10:10 +08:00"},void 0,!1,void 0,this)," cz5424"]},void 0,!0,void 0,this),`
`,e("p",{children:"用前端画，吃用户手机 cpu"},void 0,!1,void 0,this),`
`,e("h2",{children:[e("em",{children:"2024-04-08 21:11:35 +08:00"},void 0,!1,void 0,this)," cz5424"]},void 0,!0,void 0,this),`
`,e("p",{children:"后端画图避免不了性能问题"},void 0,!1,void 0,this),`
`,e("h2",{children:[e("em",{children:"2024-04-08 21:12:00 +08:00"},void 0,!1,void 0,this)," acbingo"]},void 0,!0,void 0,this),`
`,e("p",{children:"@cz5424 哈哈，也考虑过。但是绝大多数需求是需要一下画出来好几张图，让前端画担心用户停留不了那么长时间"},void 0,!1,void 0,this),`
`,e("h2",{children:[e("em",{children:"2024-04-08 21:13:34 +08:00"},void 0,!1,void 0,this)," justNoBody"]},void 0,!0,void 0,this),`
`,e("p",{children:"原生指的是 java.awt.Graphics2D 么？"},void 0,!1,void 0,this),`
`,e("h2",{children:[e("em",{children:"2024-04-08 21:14:20 +08:00"},void 0,!1,void 0,this)," securityCoding"]},void 0,!0,void 0,this),`
`,e("p",{children:"海报用 H5 实现输出 html 文件，后台起一个 headless chrome 进程直接本地渲染最后调用 sdk 截图 api 就好了，封装成服务很方便"},void 0,!1,void 0,this),`
`,e("h2",{children:[e("em",{children:"2024-04-08 21:15:08 +08:00"},void 0,!1,void 0,this)," cz5424"]},void 0,!0,void 0,this),`
`,e("p",{children:"@acbingo 你如果实时显示，后端也要那么久，除非你挂异步任务提前生成"},void 0,!1,void 0,this),`
`,e("h2",{children:[e("em",{children:"2024-04-08 21:16:50 +08:00"},void 0,!1,void 0,this)," acbingo"]},void 0,!0,void 0,this),`
`,e("p",{children:"@cz5424 对就是挂的异步提前生成，用户进活动落地页就去生成了，等到他划到最后去预览海报都过去好几秒了"},void 0,!1,void 0,this),`
`,e("h2",{children:[e("em",{children:"2024-04-08 21:17:09 +08:00"},void 0,!1,void 0,this)," cz5424"]},void 0,!0,void 0,this),`
`,e("p",{children:"@securityCoding Chrome 并发也是一个很大的问题，内存大户"},void 0,!1,void 0,this),`
`,e("h2",{children:[e("em",{children:"2024-04-08 21:17:44 +08:00"},void 0,!1,void 0,this)," acbingo"]},void 0,!0,void 0,this),`
`,e("p",{children:"@securityCoding 也考虑过用 puppeteer，但是 pptr 太吃内存了，而且速度也没快多少。倒是解决了画复杂海报的痛点"},void 0,!1,void 0,this),`
`,e("h2",{children:[e("em",{children:"2024-04-08 21:18:50 +08:00"},void 0,!1,void 0,this)," cz5424"]},void 0,!0,void 0,this),`
`,e("p",{children:"前端画图，像素根据手机宽度生成低分辨率的，速度应该不慢"},void 0,!1,void 0,this),`
`,e("h2",{children:[e("em",{children:"2024-04-08 21:19:43 +08:00"},void 0,!1,void 0,this)," securityCoding"]},void 0,!0,void 0,this),`
`,e("p",{children:"@cz5424 #8"},void 0,!1,void 0,this),`
`,e("p",{children:"@acbingo #9 堆机器就好了啊，一个海报生成服务能有多高并发？"},void 0,!1,void 0,this),`
`,e("h2",{children:[e("em",{children:"2024-04-08 21:21:03 +08:00"},void 0,!1,void 0,this)," acbingo"]},void 0,!0,void 0,this),`
`,e("p",{children:"我甚至在想，能不能上一些 GPU 加速呢 \uD83E\uDD14\uD83E\uDD14，稍微研究了一下，感觉上手成本都比较高 \uD83D\uDE02"},void 0,!1,void 0,this),`
`,e("h2",{children:[e("em",{children:"2024-04-08 21:21:20 +08:00"},void 0,!1,void 0,this)," securityCoding"]},void 0,!0,void 0,this),`
`,e("p",{children:"@acbingo #9 封装成独立服务堆数量就是了，海报别再 java 画了这是条不归路，ui 同学走查能搞死你"},void 0,!1,void 0,this),`
`,e("h2",{children:[e("em",{children:"2024-04-08 21:24:31 +08:00"},void 0,!1,void 0,this)," acbingo"]},void 0,!0,void 0,this),`
`,e("p",{children:"@securityCoding 现在已经部了 20 台了，业务还会有几倍的增长空间，所以还是想看看能不能找到性能更好的方案。。。另外现在业务想画一些复杂的，比如说画些饼图、曲线图，之前用 Java 写写字、拼拼图还行，但是让我生成饼图就有点功力不够了 \uD83D\uDE02"},void 0,!1,void 0,this),`
`,e("h2",{children:[e("em",{children:"2024-04-08 21:26:02 +08:00"},void 0,!1,void 0,this)," acbingo"]},void 0,!0,void 0,this),`
`,e("p",{children:"@securityCoding 一开始就是独立出来的。"},void 0,!1,void 0,this),`
`,e("p",{children:"我也不想用 Java 了，所以这不出来请教大家嘛，用啥方案更合适些"},void 0,!1,void 0,this),`
`,e("h2",{children:[e("em",{children:"2024-04-08 21:35:20 +08:00"},void 0,!1,void 0,this)," darkengine"]},void 0,!0,void 0,this),`
`,e("p",{children:"考虑下把这个活儿胶水给其他适合做图像处理的语言搞吧"},void 0,!1,void 0,this),`
`,e("h2",{children:[e("em",{children:"2024-04-08 21:41:23 +08:00"},void 0,!1,void 0,this)," securityCoding"]},void 0,!0,void 0,this),`
`,e("p",{children:"@acbingo #14 另外就是纯 web 的方案了这个不太了解不过我之前有同事实现过，headless chrome 方案我之前做了一版上线稳如老狗，k8s hpa 一开不需要操啥心"},void 0,!1,void 0,this),`
`,e("h2",{children:[e("em",{children:"2024-04-08 21:44:12 +08:00"},void 0,!1,void 0,this)," insubtemp"]},void 0,!0,void 0,this),`
`,e("p",{children:"前端画，前端也能异步提前生成，这不就省了 20 台服务器"},void 0,!1,void 0,this),`
`,e("h2",{children:[e("em",{children:"2024-04-08 21:57:04 +08:00"},void 0,!1,void 0,this)," night98"]},void 0,!0,void 0,this),`
`,e("p",{children:"你海报是什么类型的海报，这点你要说清楚，你生成的图片是底图加用户信息的这种，还是每次生成的图片都不一样？解决方案也都不一样的"},void 0,!1,void 0,this),`
`,e("h2",{children:[e("em",{children:"2024-04-08 22:19:16 +08:00"},void 0,!1,void 0,this)," openmynet"]},void 0,!0,void 0,this),`
`,e("p",{children:["考虑性能的话最佳选择就是 c++ 或 rust，rs 的话这有个库 ",e("a",{href:"https://crates.io/crates/charts-rs%EF%BC%8C%E6%94%AF%E6%8C%81",children:"https://crates.io/crates/charts-rs，支持"},void 0,!1,void 0,this)," json 格式数据直接生成图表方便对接。或者是用 plotters 实现更复杂的操作。"]},void 0,!0,void 0,this),`
`,e("h2",{children:[e("em",{children:"2024-04-08 22:59:23 +08:00"},void 0,!1,void 0,this)," wingoo"]},void 0,!0,void 0,this),`
`,e("p",{children:"不是太复杂的文字和图片的组合可以考虑直接用公有云的水印功能"},void 0,!1,void 0,this),`
`,e("h2",{children:[e("em",{children:"2024-04-08 23:36:41 +08:00"},void 0,!1,void 0,this)," youknowiam"]},void 0,!0,void 0,this),`
`,e("p",{children:["我之前使用过 headless 浏览器导出过 pdf，内存吃紧，不是个好方案。画图的话我之前写过类似用 Rust ssr 导出 echarts 为 svg 的功能，使用的是 ",e("a",{href:"https://github.com/yuankunzhang/charming",children:"https://github.com/yuankunzhang/charming"},void 0,!1,void 0,this)," 这个库改了下源码支持 html，速度还挺快就几 ms，导出为 png 的话稍微慢点，需要渲染图片。"]},void 0,!0,void 0,this),`
`,e("h2",{children:[e("em",{children:"2024-04-08 23:49:16 +08:00"},void 0,!1,void 0,this)," sketcherly"]},void 0,!0,void 0,this),`
`,e("p",{children:"既然服务端是异步生成的，考虑是不是可以客户端异步，盲猜应该是可以的"},void 0,!1,void 0,this),`
`,e("h2",{children:[e("em",{children:"2024-04-08 23:51:52 +08:00"},void 0,!1,void 0,this)," GreatAuk"]},void 0,!0,void 0,this),`
`,e("p",{children:"@securityCoding 这会感觉性能压力更大"},void 0,!1,void 0,this),`
`,e("h2",{children:[e("em",{children:"2024-04-08 23:55:18 +08:00"},void 0,!1,void 0,this)," leaflxh"]},void 0,!0,void 0,this),`
`,e("p",{children:"让客户端画，实时性要求不高就上队列一个一个处理吧，用户等一会"},void 0,!1,void 0,this),`
`,e("h2",{children:[e("em",{children:"2024-04-09 00:01:39 +08:00"},void 0,!1,void 0,this)," mightybruce"]},void 0,!0,void 0,this),`
`,e("p",{children:"前端画图很快的，用 rust、c++ 等语言编译成 wasm 模块执行可以大大减少服务器的压力。"},void 0,!1,void 0,this),`
`,e("p",{children:"现在 b 站 用 ffmpeg 在客户端处理视频比过去快了很多倍。"},void 0,!1,void 0,this),`
`,e("p",{children:"webgl 和 wasm 比较成熟，推荐几个比如"},void 0,!1,void 0,this),`
`,e("p",{children:e("a",{href:"https://www.scichart.com/blog/surpassing-limits-javascript-bigdata-webassembly/",children:"https://www.scichart.com/blog/surpassing-limits-javascript-bigdata-webassembly/"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,e("p",{children:"更新的技术比如 webgpu 通过直接调用 GPU 方式可以大大加速密集型计算，不过现在这个还处于浏览器实验性的 API"},void 0,!1,void 0,this),`
`,e("h2",{children:[e("em",{children:"2024-04-09 00:03:19 +08:00"},void 0,!1,void 0,this)," cdlnls"]},void 0,!0,void 0,this),`
`,e("p",{children:"如果是因为机器性能和部署的原因的话，看了你的描述，我感觉可以试试把画图这部份抽出来部署到函数计算上。"},void 0,!1,void 0,this),`
`,e("p",{children:"这样成本可能会比现在降低很多（20 台服务器说多也不多，说少也不少了），性能的话可以写个 demo 测测看情况，实例数量可以随着并发增加而增加，而且不需要维护。"},void 0,!1,void 0,this),`
`,e("h2",{children:[e("em",{children:"2024-04-09 00:03:54 +08:00"},void 0,!1,void 0,this)," cdlnls"]},void 0,!0,void 0,this),`
`,e("p",{children:"另外也是建议你先检查一下你这里说的”性能压力“是什么，看看具体性能的瓶颈在哪里，有时候一个代码上的小优化，就可以起到一个立竿见影的效果，也有时候调整一下服务器规格，比如增加内存使用读写更快的磁盘也能在某些情况下大大的缓解性能压力。"},void 0,!1,void 0,this),`
`,e("h2",{children:[e("em",{children:"2024-04-09 00:56:24 +08:00"},void 0,!1,void 0,this)," jiangzm"]},void 0,!0,void 0,this),`
`,e("p",{children:"最优肯定是放前端来处理，web 端通过 html 转 canvas 再转 image，所见即所得。"},void 0,!1,void 0,this),`
`,e("p",{children:"如果是非前端即时生成或者非 web 端（小程序），通过后端 (nodejs) 调用 puppeteer 生成，为了提高效率肯定要加一层对象缓存。"},void 0,!1,void 0,this),`
`,e("p",{children:"根据模板 html+ 渲染数据 json 计算出当次内容 hash 值，判断是否已在对象仓库中，有即返回资源的 CDN 地址，不存在再渲染上传到对象仓库返回对应资源地址。（bucket 根据需求设置过期时间，防止存量过大问题）"},void 0,!1,void 0,this),`
`,e("h2",{children:[e("em",{children:"2024-04-09 01:01:03 +08:00"},void 0,!1,void 0,this)," coolcoffee"]},void 0,!0,void 0,this),`
`,e("p",{children:"就没有人提到 serverless 吗？puppeteer 配合 aws lambda，压测 QPS 有 120 ～ 160，针对大部分场景都足够了。"},void 0,!1,void 0,this),`
`,e("h2",{children:[e("em",{children:"2024-04-09 01:55:14 +08:00"},void 0,!1,void 0,this)," OldCarMan"]},void 0,!0,void 0,this),`
`,e("p",{children:"\uD83E\uDD14 个人觉得可以这样，4 步走："},void 0,!1,void 0,this),`
`,e("p",{children:"1.解决业务可扩展性问题：可以让前端使用图片编辑器生成图片信息，如果业务需求是后续不可编辑可以生成截图保存，如果是可编辑的可以把整个编辑后的图片 html 保存，建议把其上传到对象存储；"},void 0,!1,void 0,this),`
`,e("p",{children:"2.前端将图片编辑结果提交给后端服务，后端将 html 信息 + 业务参数封装，丢到消息队列里面。"},void 0,!1,void 0,this),`
`,e("p",{children:"3.html->图片，这一步可以考虑各种各样的处理方式，根据自己的要求 (比如性能要求) 去搜索相关的库，比如 html to image java/nodejs/c++/rust 等等，生产完将结果上传并丢回消息队列里面，这个胶水层服务提供：消息队列消费，生产；图片处理；图片上传的服务。"},void 0,!1,void 0,this),`
`,e("p",{children:"4.后端服务消费胶水层服务产生的图片 url"},void 0,!1,void 0,this),`
`,e("p",{children:"目的：1.解决扩展性；2.吞吐量；3.图片业务与主业务的解耦，数据量大时，图片业务硬件资源吃的较多，可以单独升级图片处理服务。"},void 0,!1,void 0,this),`
`,e("h2",{children:[e("em",{children:"2024-04-09 09:38:26 +08:00"},void 0,!1,void 0,this)," WashFreshFresh"]},void 0,!0,void 0,this),`
`,e("p",{children:"建议拆分成单独服务部署，任务调度好应该能缓解压力，然后就是优化代码。之前的公司做项目的时候，有个转图生成各种格式各种分辨率海报的功能，做微服务改造的时候就是拆分成了单个服务，部署了 10+ 台机器，然后优化了下代码，效率杠杠的。"},void 0,!1,void 0,this),`
`,e("h2",{children:[e("em",{children:"2024-04-09 09:45:20 +08:00"},void 0,!1,void 0,this)," MrDarnell"]},void 0,!0,void 0,this),`
`,e("p",{children:"@acbingo 不晓得你要画多复杂的图，但正常情况下前端画图都是瞬间完成的，不存在你说的等待，你可以留意你玩的游戏，普遍可以达到 64 帧/s 以上，而一个帧就是一次全屏绘图，你感觉到等待了吗？"},void 0,!1,void 0,this),`
`,e("h2",{children:[e("em",{children:"2024-04-09 10:15:02 +08:00"},void 0,!1,void 0,this)," janus77"]},void 0,!0,void 0,this),`
`,e("p",{children:"改 c++，然后独立部署，外部调用"},void 0,!1,void 0,this),`
`,e("h2",{children:[e("em",{children:"2024-04-09 10:20:37 +08:00"},void 0,!1,void 0,this)," seanlin5"]},void 0,!0,void 0,this),`
`,e("p",{children:"@securityCoding 相当于写好 H5 模板，在服务器起一个 headless chrome 实现截图，然后将截图保存成 url，通过接口方式回传给前端显示？"},void 0,!1,void 0,this),`
`,e("h2",{children:[e("em",{children:"2024-04-09 10:21:42 +08:00"},void 0,!1,void 0,this)," zoharSoul"]},void 0,!0,void 0,this),`
`,e("p",{children:"html 模板 填上动态的文字后，直接渲染就行啊"},void 0,!1,void 0,this),`
`,e("h2",{children:[e("em",{children:"2024-04-09 10:34:10 +08:00"},void 0,!1,void 0,this)," securityCoding"]},void 0,!0,void 0,this),`
`,e("p",{children:"@seanlin5 是的，核心就是 headless chrome 来渲染 H5"},void 0,!1,void 0,this),`
`,e("h2",{children:[e("em",{children:"2024-04-09 10:34:49 +08:00"},void 0,!1,void 0,this)," airqj"]},void 0,!0,void 0,this),`
`,e("p",{children:"用 wasm，让前端来画"},void 0,!1,void 0,this),`
`,e("h2",{children:[e("em",{children:"2024-04-09 10:36:19 +08:00"},void 0,!1,void 0,this)," airqj"]},void 0,!0,void 0,this),`
`,e("p",{children:"而且现在 wasm 是支持多线程的"},void 0,!1,void 0,this),`
`,e("p",{children:"应该慢不了"},void 0,!1,void 0,this),`
`,e("h2",{children:[e("em",{children:"2024-04-09 10:44:45 +08:00"},void 0,!1,void 0,this)," fengpan567"]},void 0,!0,void 0,this),`
`,e("p",{children:"让前端画呗"},void 0,!1,void 0,this),`
`,e("h2",{children:[e("em",{children:"2024-04-09 14:51:42 +08:00"},void 0,!1,void 0,this)," acbingo"]},void 0,!0,void 0,this),`
`,e("p",{children:"十分感谢大家的回复~~"},void 0,!1,void 0,this),`
`,e("p",{children:"我已经有个大概的认知了，目前打算去探索一些让前端去画，再传到后端保存的方案。另外针对前端无法生成的需求场景，先用老场景进行兜底"},void 0,!1,void 0,this),`
`,e("p",{children:"等有余力后，再考虑探索一下后端 html to image 的方案，看能不能做个后台可以用自己运营编辑海报样式并生成 html"},void 0,!1,void 0,this),`
`,e("h2",{children:[e("em",{children:"2024-04-10 08:56:13 +08:00"},void 0,!1,void 0,this)," sunqb"]},void 0,!0,void 0,this),`
`,e("p",{children:"@securityCoding 截图的问题真的很多，奇奇怪怪的问题。特别是如果 html 里面有视频或者动图，但是如果静态的 html 很简单。"},void 0,!1,void 0,this),`
`,e("h2",{children:[e("em",{children:"2024-04-10 11:05:02 +08:00"},void 0,!1,void 0,this)," luozic"]},void 0,!0,void 0,this),`
`,e("p",{children:"——"},void 0,!1,void 0,this),`
`,e("p",{children:"1.缩小后端生成图的场景，"},void 0,!1,void 0,this),`
`,e("p",{children:"————"},void 0,!1,void 0,this),`
`,e("p",{children:"2.解耦，用专门的语言 + 显卡 simd 等支持的加速。这个虽然 B 站恶心，但是 B 站整的客户端 wasm 缩小服务器占用可以参考。 -------- 反正你这个应该是商务的应用吧？不过就看你的顾客骂不骂风扇起飞了"},void 0,!1,void 0,this),`
`,e("p",{children:"——————"},void 0,!1,void 0,this),`
`,e("p",{children:["3.部分情况可以尝试性试试 Java 平台的 simd，gpu 的支持。不过这些要么是 jdk22/graalvm 22 才支持，并且还是 preview，或者是魔改的 jdk---比如 TornadoVM ",e("a",{href:"https://github.com/beehive-lab/TornadoVM",children:"https://github.com/beehive-lab/TornadoVM"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,e("h2",{children:[e("em",{children:"2024-04-10 14:26:27 +08:00"},void 0,!1,void 0,this)," wssy001"]},void 0,!0,void 0,this),`
`,e("p",{children:"@coolcoffee serverless 按需计费的 一个月 750 小时一直跑的话 成本恐怕会是普通包月机器的好几倍"},void 0,!1,void 0,this),`
`,e("hr",{},void 0,!1,void 0,this),`
`,e("ul",{children:[`
`,e("li",{children:"2024 年 5 月 6 日"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)}export{p as default};
