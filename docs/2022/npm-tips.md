# npm 小技巧

## binary_host

npm 支持为每个需要 binary 的包指定下载地址。所谓的 binary 是指基于 napi 开发的模块，通过使用 c/c++ 实现，后续一般是 `.node`。

例如有一个包 `better-sqlite3`，那么它需要的二进制文件下载可以通过 `<包名>_binary_host` 环境变量来指定。`better-sqlite3` 的 binary_host 应该是 `better-sqlite3_binary_host`。虽说是环境变量，也可以直接写在 `.npmrc` 中，全局或当前仓库也可以。我通常使用本地仓库的 `.npmrc`，这样不会污染全局的配置。

另外，这个 binary_host 是通过 http/https 访问，因此也可以使用 ghproxy.com 的代理地址。比如上面的 `better-sqlite3_binary_host`，可以设置为：

```sh
better-sqlite3_binary_host=https://ghproxy.com/https://github.com/WiseLibs/better-sqlite3/releases/download
npm_config_better_sqlite3_binary_host=https://ghproxy.com/https://github.com/WiseLibs/better-sqlite3/releases/download

# 如果通过指定 tag，可以使用下面这种形式：
uWebSockets.js_binary_host=https://ghproxy.com/https://github.com/uNetworking/uWebSockets.js/tree/v20.10.0
```

安装 .node 模块一般是通过 prebuild-install 包实现，在 `prebuild-install@^7.0.0` 按照下面的函数生成环境变量名：

```js
// node_modules/prebuild-install/util.js
function getEnvPrefix (pkgName) {
  return 'npm_config_' + (pkgName || '').replace(/[^a-zA-Z0-9]/g, '_').replace(/^_/, '')
}

function getHostMirrorUrl (opts) {
  const propName = getEnvPrefix(opts.pkg.name) + '_binary_host'
  return process.env[propName] || process.env[propName + '_mirror']
}
```

有一点需要补充。如果 npm 包官方已经提供的环境变更用于下载 `.node` 文件。应该按照官方的说明操作。

## git+https 包地址

有一些包，只发布到 github。因为需要使用 github 为下载地址。比如 `uWebSockets.js`，为其官方的说明，npm install 实现是增加了一个 github 地址。考虑到国内的网络环境。可以使用 `git+https` 来代替：

```jsonc
{
  // ...
  "dependencies": {
    "uWebSockets.js": "git+https://ghproxy.com/https://github.com/uNetworking/uWebSockets.js#v20.10.0",
    // ...
  }
}
```

----

2022 年 10 月 03 日 