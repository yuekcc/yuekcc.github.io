import{e as o,h as n}from"/dist/chunk-n2t7x54v.js";function e(){return n("div",{class:"markdown-body",children:n(o,{children:[n("h1",{children:"关于低码平台的想法"},void 0,!1,void 0,this),`
`,n("p",{children:"公司内部有一个低码平台。支持是 java + js 的实现的平台。"},void 0,!1,void 0,this),`
`,n("p",{children:`我没有在上面直接开发过东西。毕竟是专业开发，用低码平台效率更差。平台支持用户开发自己的接口。接口只支持 js 实现。我没有看过实现的源码。
从外面看，接口通过 rhino 运行。用户代码是非常不可信的，不知道是不是放在独立的线程中运行。接口分为人机接口、机机接口，区别就是拥有不同的权限，
对于不同的资源有不同的权限。实现一个接口需要在平台上填写一些表单，而且只能在平台上填写。填写好之后，可以得到一个配置文件。json 格式的。目前来看，
这个过程只能在平台上完成。`},void 0,!1,void 0,this),`
`,n("p",{children:`ui 开发就比较有意义。平台可以让用户离线完成 ui 部分的开发，然后上传到平台，也支持在平台上直接使用拖拉拽开发。如果使用离线开发模式，就更像是
普通的 spa 程序开发，只是改为多入口的 spa。考虑到一般前端的用人成本，这种模式似乎更节省成本。前段时间在 v2ex 看到一个页面外包，大概 30 个页面，
1.2k 就能整完。一个页面不到 100 rmb。国内的这种环境下，前端由专业人员完成更显得效果好。代码质量估计比拖拉拽生成好太多。`},void 0,!1,void 0,this),`
`,n("p",{children:`由此我想到目前的的 serverless 平台。像 aws 的 lambda 或 deno deploy 这样的服务。接口通过简单上手的 js 实现，性能由于 v8 提供保证，安全可以通过 docker 或
v8 isolate 提供。wasm 也可以成为一个理想的容器平台。毕竟运行 wasm 的虚拟机比 docker 更省资源。serverless 平台的运维由供应商统一提交。完全可以达
到成本最小化。`},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)}export{e as default};
