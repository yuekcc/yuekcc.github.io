# Marknote 全文搜索的想法

Marknote 是纯前端渲染的 spa。要想被百度之类索引到估计不可能的。一是托管在 github.io；二是没有生成 html，爬虫也不一定能获取到数据。

如果需要实现文章内容搜索，只能自己实现。游客们手工 ctrl+f 当然也是可以的，但是就没有意义了。

## 想法

全文搜索关键是建立一个索引。对于创建索引，应该是 elasticsearch 这种组件的内置功能。因为是中文内容，也涉及到中文的分词问题。不过我相信
elasticsearch 应该会有配合使用的组件。所以创建索引的问题就变成了另一个问题——如果向全文搜索引擎传入数据。

我想的是利用 webhooks 实现。github 是支持 webhooks 功能。用户向 git 仓库推送代码后，可以触发一个 http post 操作，调用特定的服务。
这样就可以搜索服务去更新索引。于是再次变成另一个问题——创建一个服务响应 webhooks，然后向搜索引擎推送更新的内容。

## 设计

![架构](docs/202111/images/fulltext-search-for-marknote-arch.svg)

### 作者视角审视搜索功能

从作者视角审批搜索功能。作者就是 marknote 的用户。对于作者而言，搜索功能主要涉及索引创建的功能。流程：

1. 作者写好文章，然后 push 到 github
2. github 触发 pages 部署的 webhooks，将新 push 的文章部署到 github.io
3. 同时 github 也触发 search server 的 webhooks
4. search server 在接收到 github 请求后，触发内部的索引更新 hook，接收方是 data collector 服务
5. data collector 调用 git pull，拉取作者最新的版本，然后通过增量方式，向 meilisearch 推送新的数据，用于更新全文检索的索引
6. 索引创建结束

### 访客视角使用搜索功能

对于访客而言，搜索功能用于快速找到自己感兴趣的内容。流程：

1. 访客访问 xxxx.github.io，打开页面后，在搜索栏输入关键字
2. 搜索栏将关键字发送到 search server 搜索接口
3. search server 转发请求到 meilisearch
4. meilisearch 返回搜索结果给 search server
5. search server 返回结果到访客的浏览器
6. 浏览器渲染结果
7. 搜索结束

### 开发角度审视搜索服务

整个系统的关键是全文搜索引擎。首先是考虑开源产品。最为著名的可能是 elasticsearch。考虑到 marknote search 的使用场景，使用 elasticsearch 绝对是大才小用。
而且维护一个 elasticsearch 也不是一个简单的事。所以在搜索引擎方式，我更倾向于 go 或 rust 实现小型引擎。我认为，我需要的只是一个可以用、支持中文、性能一般但资源消耗少的引擎。
于是就是找到了 meilisearch。

meilisearch 使用了 jieba-rs 分词，对中文也有足够的支持和性能。最重要是部署也简单。

search server 并不需要特别多的接口，目前打算使用 go 实现，追求的还是的部署简单。

## 实现

~~有生之年~~

有一个[MVP 实现](mn-search)了，目前已经实现：

- [x] 响应接口，自动调用 git clone/pull 更新文章仓库
- [x] 推送文章数据到搜索引擎
- [x] 有一个接口，用于搜索
- [ ] 有一个组件，集成到 marknote 中

[mn-search]: https://github.com/yuekcc/marknote-search-mvp

----

- 2021.11.14，初始稿
- 2021.12.13，增加 mvp 实现的连接
- 2022.01.02，修复 MVP 实现的 URL 错误
