# 预览 Sycamore 全新的响应式原语

[原文][original_post]，机翻 + 个人修订

>2022 年 05 月 01 日更新，sycamore 0.8.0-beta.4 对响应式 API 又做了修改。

[original_post]: https://github.com/sycamore-rs/sycamore/blob/master/docs/posts/new-reactive-primitives.md

_下一版本的 Sycamore 如何拥抱更好的开发体验_

Sycamore 是一个基于 Rust、WebAssembly 技术开发的 Rust 同构 Web 应用的库。

Sycamore 的核心是构建在响应式原语之上。这些原语会追踪数据（状态）的变化并通知到系统。最为基本的原语就是 `Signal`。

因为 Sycamore 中的所有内容都与它的响应式系统相关联，这使我们能够使用更简单的声明式 API 和组件渲染模型。在 React Hooks 中，函数组件每次状态变化都需要重新执行；而 Sycamore 的组件只会执行一次。在 Sycamore 中用于创建组件的函数更像是组件的 Builder，其他部分则由响应式系统则负责。

也就是说在 Sycamore 中不需要重新执行全部组件函数，只需要重新计算数据发生了变化的组件函数。我们通过 Rust 的闭包实现这个功能。但是开发体验却成了主要的问题——`Signal` 只实现了 `Clone` 无法实现 `Copy`。如果需要将 `Signal` 放到一个闭包使用时，都需要先 `Clone`，然后才能 move 到闭包中。

```rust
let data = Signal::new(...);
let callback = {
    let data = data.clone(); // 先 Clone 一次
    move || {
        // 处理 `data` 中的数据
    }
}
```

作为折衷，我们提供了 `cloned!` 宏来减少这些形式化的代码，显然这不是最好的方案。

```rust
let data = Signal::new(...);
let callback = cloned!(data => move || { // `cloned!` 宏会展示为上面的形式代码
    // 处理 `data` 中的数据
})
```

`Cloned!` 宏虽然能用但是不好用！在 Sycamore，`view!` 宏用来描述 UI，如同 JSX 之于 React。问题是一旦在 `view!` 宏中使用动态数据都需要包裹一层闭包。例如下面的代码，实际上是不能执行：

```rust
let data = Signal::new(...);
view! {
    p { (data.get()) }
    //   ^^^^ -> `data` is moved into a closure here
    p { (data.get()) }
    //   ^^^^ -> ERROR: `data` already moved
}
```

要解决这个问题，我们只能编写丑陋的代码，将数据 `clone` 到只一个变量中：

```rust
let data = Signal::new(...);
let data_cloned = data.clone();
view! {
    p { (data.get()) }
    //   ^^^^ -> `data` is moved into a closure here
    p { (data_cloned.get()) }
    //   ^^^^ -> Ok. We are using `data_cloned`, not `data`.
}
```

这样的实现奇丑无比。响应式系统在设计上应该是非常优雅，但是在 Rust 中实现时，它有一些意想不到的难题。

**好消息是，在下一个版本中（v0.8）将修复这个问题。**

这个问题的核心是 `Signal` 内部使用了引用计数，闭包需要其为 `'static`，而且没有办法标记 `Signal` 的生命周期。大多数情况下，一系列 `Signal` 层层叠加会组成一座高塔，生命周期最长的在塔底，生命周期短的在更上层。这样也可以更好地应用 Rust 的借用检查器。

使用新的响应式原语，`Signal` 默认不再基于引用计数实现，而是与创建它的 Scope 的生命周期相关联。

```rust
// 旧版本：
let data = Signal::new(...);
// 新版本：
let data = ctx.create_signal(...);
```

`ctx` 指向当前响应式 `Scope`。在旧的方案中，响应式 `Scope` 由内部的一套复杂、本地线程绑定的方案进行管理 ，而现在则改为显式的引用。这个改变非常重要，否则无法将 `Signal` 关联到 `Scope` 中。

那么，这个方案如何实现？答案就在 `Signal::new` 和 `ctx.create_signal` 的返回值中。

`Signal::new` 返回了一个 `Signal`（只实现了 `Clone`，不能实现 `Copy`）。它在 `Scope` 中里的的工作方式类似于 [arena allocator](https://en.wikipedia.org/wiki/Region-based_memory_management)。`Signal` 在 `Scope` 中创建，并在内部的内存分配器分配空间，从而使用 `Signal` 与 `Scope` 有相同的生命周期。

就是说，现在可以在各个闭包中使用 `Signal`，而且不需要 `Clone`。

```rust
let data = ctx.create_signal(...);
let callback = || data.get();
//             ^^ -> 现在已不需要 Clone
let another_callback = || data.get();
ctx.create_effect(|| {
    log::info!("{data}");
});
```

显式使用 `scope` 也带来了另一个好处：可以直接支持 `async`/`await`。在旧版本中这是不被支持的特性。原因是 `async` 破坏了代码的执行顺序。在调用 `.await` 后，我们代码得知当前位于哪个 `Scope`。现在我们可以直接访问 `ctx`，这样可以实现更直观的业务逻辑。

```rust
#[component]
async fn AsyncFetch<G: Html>(ctx: ScopeRef) -> View<G> {
    let data = fetch_data().await;
    let derived = ctx.create_memo(|| data);
    //            ^^^ -> We can still access `ctx`, even after the `.await` suspension point.
    view! {
        (derived)
    }
}
```

在 UI 中使用 `suspense`、`async` 将有更好的开发体验。

虽然有不少优点，但这个新方案也存在一些缺点。

第一点，arena allocators 只有在其创建的对象被销毁时才会释放内存。当 arena allocators 依然存在时，将无法释放内存。这意味着 `Signal` 的生命周长和 `Scope` 一样长，需要谨慎处理内存泄漏问题。比如在循环中多次使用 `ctx.create_signal` 创建对象。 

在一些场景下，需要使用一个基于引用计数的 `RcSignal`，用于覆盖使用旧 `Signal` 方案的一些场景。

第二次点是 `Signal` 现在绑定到 `Scope`，`Signal` 将无法超出 `Scope` 的生命周期。例如下面的代码，这些代码无法通过编译。

```rust
let mut outer = None;
// Crete a new reactive scope and allow access to it through `ctx`.
create_scope(|ctx| {
    let data = ctx.create_signal(0);
    outer = Some(data);
    //           ^^^^ -> ERROR: `data` cannot escape
});
```

这些场景可能需要 `RcSignal`。

上面就是 Sycamore 新的响应式原语。如果需要尝试，请安装 `v0.8` beta 版本。这个版本包含了一些破坏性更新，除了新的响应式原语，也包括其他一些功能（比如函数组件的写法）。

---

- 2022 年 03 月 09 日，第一版
- 2022 年 03 月 12 日，修改部分文字
- 2022 年 05 月 01 日，修改部分文字，增加 0.8.0-beta.4 的说明

