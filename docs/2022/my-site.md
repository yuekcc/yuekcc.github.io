# 我的网站

![架构图](images/my-site.svg)

上面的就是我网站的架构。

## CaddyServer

处于中心的是 CaddyServer。

Caddy 是一款新兴的 HTTP 服务器，使用 Go 实现。最大的特点是开箱即用的 AUTO HTTPS 功能；另一个特点应该是配置非常简单；同时内置非常多实用的功能，通过在线编译系统甚至可以直接下载自定义的编译版本。

下面是我网站的一段 Caddy 服务器配置。CaddyServer 的配置文件也称为 Caddyfile，通过简单的配置就可以实现多域名绑定。

```Caddyfile
# 全局配置
{
		# auto https 配置
        email hello@gmail.com
}

www.lambdadriver.space, lambdadriver.space {
        encode {
                br
                gzip
                match {
                        header Content-Type text/*
                        header Content-Type application/json*
                        header Content-Type application/javascript*
                        header Content-Type application/xhtml+xml*
                        header Content-Type application/atom+xml*
                        header Content-Type application/rss+xml*
                        header Content-Type image/svg+xml*
                        header Content-Type application/wasm
                }
        }
        root * /opt/lambdadrivers/www
        file_server
}

# 反向代理1
example1.lambdadriver.space {
        encode br gzip
        reverse_proxy http://127.0.0.1:10000
}

# 反向代理2
example2.lambdadriver.space {
        encode br gzip
        handle_path /api/* {
                rewrite * /api{path}
                reverse_proxy http://127.0.0.1:10010
        }
}
```

br 是 brotli 压缩支持。CaddyServer 由 br 压缩是由[第三方插件](https://github.com/ueffel/caddy-brotli 'View package repo')提供支持。

通过 auto https 功能，可以做到 http2 开箱即用。

性能方式。老实说 CaddyServer 是比不上 Nginx 的。CaddyServer vs Nginx，基本就等于 Go vs C，未经优化的 Go 程序，真的比不过 C。当然，对于我这种个人网站，CaddyServer 已经处理使用。

网站的内容中由 CaddyServer 内置的 file_server 功能对外提供服务。用户（访客）通过浏览器访问我的服务器后就返回 docutil 程序。

## docutil

docutil 是由 rust、javascript 共同驱动的纯前端应用。后台并没有提供数据接口，只是提供静态文件服务。渲染、页面跳转完全在前端完成。完成这些功能的核心是使用 rust 实现的 docutil_core 包。

关于 docutil，可以看[这里](https://github.com/yuekcc/docutil)。

## 全文搜索

docutil 的文章渲染、页面路由都在浏览器上完成。但全文搜索目前只能依赖后台服务。docutil 的全文搜索分为两部分：

1. 搜索接口
2. 索引

其中索引又分为更新、搜索两部分。索引更新通过 mn_search_api 实现。mn_search_api 会将文件的分为段落，再结合 url、文件名等信息喂给 MeiliSearch。MeliSearch 就会建立相应的索引。

检索时也是先通过 mn_search_api，然后转到 MeiliSearch 服务。

索引更新目前是通过 Webhook 回调实现自动触发。

### MeiliSearch

MeiliSearch 是一个 Rust 实现的全文搜索服务器。API 简单、功能足够就是 MeiliSearch 现有版本的特点。MeiliSearch 目前还是单机使用，占用资源特别少，适合自建全文搜索服务器。

关于 MeiliSearch 可以看其[官方网站](https://www.meilisearch.com/)。

关于全文搜索的实现，可以看我的这篇：[# Marknote 全文搜索的想法](https://lambdadriver.space/#/docs/202111/full-text-search-for-marknote.md)

## 网站更新

docutil 是一个完全静态的网站工具，因此需要自行解决更新问题。当前的方案是通过 WebHook 实现触发，再经 git pull 同步网站的内容。这个服务由 [docutil-deploy-hook](https://github.com/yuekcc/docutil-deploy-hook) 提供。

docutil-deploy-hook 功能非常简单：一、响应 GITHUB 的 push webhook 回调；二、执行更新脚本。

## 下一步

网站更新、全文搜索索引更新，这些都算是 Gitops 的一个实现，只是都是基于 pull 方式：由 GITHUB 回调，再主动 GIT PULL 更新数据。

由上面的框架图也可以看出，搜索更新、部署是独立的服务。因此一次更新需要 pull 两次网站。这样明显是一种浪费。二是网站整体部署都比较麻烦， docutil-deploy-hook 和 marknote-search-mvp 当前使用 node.js 实现，都是 MVP 级别的实现，需要进一步完善。三是服务器是支持 docker，可以考虑引入 docker 解决部署的问题。

---

2022 年 05 月 09 日，初稿
