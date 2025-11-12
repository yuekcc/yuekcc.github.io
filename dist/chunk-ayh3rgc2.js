import{e as a,h as n}from"/dist/chunk-0936xbxf.js";function l(){return n("div",{class:"markdown-body",children:n(a,{children:[n("h1",{children:"WIP 大文件上传"},void 0,!1,void 0,this),`
`,n("h2",{children:"原理"},void 0,!1,void 0,this),`
`,n("h2",{children:"文件 HASHING"},void 0,!1,void 0,this),`
`,n("p",{children:"主流的文件 hash 算法有 md5、sha1、sha256。"},void 0,!1,void 0,this),`
`,n("p",{children:"md5、sha1 已经被证明为一个不安全的 hash 算法。但是不代表所有场景下不安全！就文件 hash 的场景，md5、sha1 基本上不会有大问题。主流是使用 sha256 代替 md5、sha1。极端情况下，应该使用 sha512。"},void 0,!1,void 0,this),`
`,n("p",{children:"其他 hash 算法也可以使用，比如 sha3-256。计算 sha3-256 比计算 sha256 更节省资源而且速度更快。"},void 0,!1,void 0,this),`
`,n("p",{children:"一个文件的 hash 应该是独一无二的，也可以形容为文件指纹。如果两个文件有相同的 hash，则表示这两个文件的内容完全一致。可以判断为源自同一个文件的 clone。"},void 0,!1,void 0,this),`
`,n("h2",{children:"前端实现"},void 0,!1,void 0,this),`
`,n("p",{children:"四个二进制处理 API："},void 0,!1,void 0,this),`
`,n("ul",{children:[`
`,n("li",{children:n("code",{children:"Blob"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("li",{children:n("code",{children:"File"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("li",{children:n("code",{children:"ArrayBuffer"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("li",{children:n("code",{children:"Uint8Array"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("h3",{children:"Blob/File"},void 0,!1,void 0,this),`
`,n("p",{children:[n("code",{children:"Blob"},void 0,!1,void 0,this)," 表示一个只读的类文件对象，",n("code",{children:"Blob"},void 0,!1,void 0,this)," 对象的数据可以按文本、二进制进行读取，也可以转换为 ",n("code",{children:"ReadableStream"},void 0,!1,void 0,this),"。"]},void 0,!0,void 0,this),`
`,n("p",{children:[n("code",{children:"File"},void 0,!1,void 0,this)," 类型实际是 ",n("code",{children:"Blob"},void 0,!1,void 0,this)," 的子类，表示一个文件对象。",n("code",{children:"File"},void 0,!1,void 0,this)," 增加了 ",n("code",{children:"name"},void 0,!1,void 0,this)," 文件名称、",n("code",{children:"type"},void 0,!1,void 0,this)," 文件 MIME 类型、",n("code",{children:"lastModified"},void 0,!1,void 0,this)," 最后修改时间、",n("code",{children:"lastModifiedDate"},void 0,!1,void 0,this)," 最后修改日期 等多个常见的文件状态数据。"]},void 0,!0,void 0,this),`
`,n("p",{children:["可以处理 ",n("code",{children:"Blob"},void 0,!1,void 0,this)," 对象的 API，基本上也支持处理 ",n("code",{children:"File"},void 0,!1,void 0,this)," 对象。"]},void 0,!0,void 0,this),`
`,n("p",{children:["在浏览器环境，常见的 ",n("code",{children:'input[type="file"]'},void 0,!1,void 0,this)," 标签，选择一个文件后，就会获取一个 File 对象。"]},void 0,!0,void 0,this),`
`,n("h3",{children:"ArrayBuffer"},void 0,!1,void 0,this),`
`,n("p",{children:[n("code",{children:"ArrayBuffer"},void 0,!1,void 0,this)," 表示一个二进制数据缓冲区。",n("code",{children:"ArrayBuffer"},void 0,!1,void 0,this)," 只用作表示数据源，具体要如何处理 ",n("code",{children:"ArrayBuffer"},void 0,!1,void 0,this),"，需要使用视图类型。"]},void 0,!0,void 0,this),`
`,n("p",{children:["视图类型包括 ",n("code",{children:"Uint8Array"},void 0,!1,void 0,this),"、",n("code",{children:"Uint32Array"},void 0,!1,void 0,this)," 等类型数组对象或 ",n("code",{children:"DataView"},void 0,!1,void 0,this)," 对象。"]},void 0,!0,void 0,this),`
`,n("h3",{children:"Uint8Array"},void 0,!1,void 0,this),`
`,n("p",{children:[n("code",{children:"Uint8Array"},void 0,!1,void 0,this)," 是类型数组的一种，表示一个字节数组。"]},void 0,!0,void 0,this),`
`,n("h3",{children:"相互转换"},void 0,!1,void 0,this),`
`,n("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:n("code",{children:[n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"const"},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:" text"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" ="},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:" 'hello, world'"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:";"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"const"},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:" blob"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" ="},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" new"},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:" Blob"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"([text]); "},void 0,!1,void 0,this),n("span",{style:{color:"#6A737D"},children:"// 使用文件创建 Blob 对象"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"const"},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:" buf"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" ="},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" await"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" blob."},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:"arrayBuffer"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"(); "},void 0,!1,void 0,this),n("span",{style:{color:"#6A737D"},children:"// 读出为 ArrayBuffer"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"const"},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:" u8Arr"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" ="},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" new"},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:" Uint8Array"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"(arrayBuffer); "},void 0,!1,void 0,this),n("span",{style:{color:"#6A737D"},children:"// 使用 Uint8Array 类型数组处理 ArrayBuffer"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"const"},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:" buf2"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" ="},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" u8Arr.buffer; "},void 0,!1,void 0,this),n("span",{style:{color:"#6A737D"},children:"// 只读属性，表示构造时传入的 ArrayBuffer 对象"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"const"},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:" blob2"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" ="},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" new"},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:" Blob"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"([arrayBuffer2]); "},void 0,!1,void 0,this),n("span",{style:{color:"#6A737D"},children:"// 从 ArrayBuffer 构建 Blob 对象"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"const"},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:" text2"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" ="},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" await"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" blob2."},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:"text"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"(); "},void 0,!1,void 0,this),n("span",{style:{color:"#6A737D"},children:"// 使用 text 方法读出 Blob 对象的数据"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"console."},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:"log"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"(text2); "},void 0,!1,void 0,this),n("span",{style:{color:"#6A737D"},children:"// => hello, world"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,n("h3",{children:"文件上传流程"},void 0,!1,void 0,this),`
`,n("ol",{children:[`
`,n("li",{children:"用户选择文件"},void 0,!1,void 0,this),`
`,n("li",{children:"计算文件 hash，用于秒传功能实现"},void 0,!1,void 0,this),`
`,n("li",{children:"将文件按适合的大小进行分块，同时需要保存块的位置"},void 0,!1,void 0,this),`
`,n("li",{children:"将文件块并发 POST 到后台"},void 0,!1,void 0,this),`
`,n("li",{children:"所有块上传完成后，表示上传结束"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("h2",{children:"后端实现"},void 0,!1,void 0,this),`
`,n("p",{children:"接口"},void 0,!1,void 0,this),`
`,n("ul",{children:[`
`,n("li",{children:["get /file/",n("hash",{children:"/state"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("li",{children:["get /file/",n("hash",{},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("li",{children:"post /file"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("h2",{children:"文件存储"},void 0,!1,void 0,this),`
`,n("h2",{children:"秒传功能实现"},void 0,!1,void 0,this),`
`,n("p",{children:"秒传在实现是先检查服务器上已经还有相同 hash 的文件。由上面文件 Hashing 一段描述的，一个文件的指纹数据是唯一的，如果后台已经存在相同的 hash 就可以判断为已经有用户（可能是其他用户）上传了相同的文件。前端就可以直接表示为上传完成，然后结束流程。"},void 0,!1,void 0,this),`
`,n("h2",{children:"参考"},void 0,!1,void 0,this),`
`,n("ul",{children:[`
`,n("li",{children:n("a",{href:"https://juejin.cn/post/6870837414852886542",children:"前端大文件上传深入研究和实现"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)}export{l as default};
