# docutil 开发笔记

docutil 是一个纯前端博客应用。通过 docutil 可以高效地部署一个网站，而且无需后台服务支持。

传统的静态网站生成工具，比如 hugo、hexo，用户需要先在本地生成 html 文件，然后才能部署。docutil 是完全运行在浏览器侧，仅需要一个 HTTP 服务。

用户按约定的目录编写 markdown 文件，导入 index.html 及 dist 目录下的三个文件即完成网站部署。文章从编写到最终上线，完全可以在浏览器上完成。

![lambdadriver_space](images/lambdadriver_space.png)

## 核心

docutil 源于一次“小作业”——使用 vanilla js 实山寨一个 [docsify][docsify]。那次“小作业”的成果便是 [marknote][marknote-project]。演进到后面，想法慢慢就变成为使用 wasm 实现一个相同功能的应用。

[marknote-project]: https://github.com/yuekcc/marknote
[docsify]: https://docsify.js.org/

docutil 核心是使用 rust + sycamore 实现的 markdown 渲染，页面路由处理引擎。样式使用了 unocss 的 css-in-js 版本。

sycamore 是一个纯 rust 实现的前端框架，具有 vdomless、响应式的特点。rust 是一门没有 gc 的编程语言，以安全、高性能、学习曲线徒著称。rust 着非常优秀的 wasm 工具链。通过 wasm-bindgen，rust 代码可以很方便地调用 DOM API、JS API。

## 代码量 pk：rust vs js

marknote

```sh
===============================================================================
 Language            Files        Lines         Code     Comments       Blanks
===============================================================================
 CSS                     4          269          221            2           46
 JavaScript              3          333          259           11           63
 SVG                     3            3            3            0            0
===============================================================================
 Total                  10          605          483           13          109
===============================================================================

```

docutil

```sh
===============================================================================
 Language            Files        Lines         Code     Comments       Blanks
===============================================================================
 Rust                    8          580          498            3           79
===============================================================================
 Total                   8          580          498            3           79
===============================================================================
```

docutil 比 marknote 多实现一个搜索的弹窗，大概 100 行代码。虽然 docutil 本身复杂度不高，但是可以看出 rust 的表达能力并不比 js 低多少。

## 默认 unmutable，默认 move

rust 中默认是 move 语义。我理解是一个值会绑定到一个变量。变量可以声明为是否有权限修改这个值的数据。

比如声明一个 `String` 类型变量：`let s = String::from("hello, world")`。这时会将 `String::from("hello, world")` 这个函数的返回值绑定到变量 `s`，并且 `s` 对数据有只读的权限。如果需要修改数据的内容，则需要显式地使用 `let mut` 声明：`let mut s = String::from("hello, world")`。

move 又是如何理解。比如下面一段代码：

```rust
fn get_something() -> String {
	let result = String::from("something");
	result
}

fn main() {
	let a = get_something();
	let b = a;
	let c = b;

	println!("{} {} {}", a, b, c);
}
```

`get_somthing` 函数返回一个 `somthing` 字符串，先是绑定到 `a`，然后将 `a` 绑定到 `b`，再将 `b` 绑定到 `c`，最后在打印 `a`、`b`、`c` 的值。而事实上无法通过编译！

为什么是这样？这一点就是 rust 与其他编程语言最大的区别。特别现在流行的 java、js 这些语言。

将上面的代码改为 js，代码可以正常执行。

```js
function get_something() {
  let result = 'something';
  return result;
}

function main() {
  let a = get_something();
  let b = a;
  let c = b;

  console.log(a, b, c);
}

main(); // => something something something
```

从内存分配的角度就可以简单的理解这个问题。

首先 `get_something` 函数，返回了一个字符串对象，在 v8 的角度其实是返回了一个指针。这个指针指向堆内存中的一个地址，这个地址保存了 `something` 字符串。当函数赋值给 `a` 时，只是将这个指针复制了一次。当 `b` 赋值时，将 `a` 复制了一次；当 `c` 赋值时，又将 `b` 复制了一次。所以这些指针都指向了同一个内存地址。这就是 **copy 语义** 。

copy 语义会造成 **“一鱼多食”** 的局面。js 是单线程的系统，一般不会出现问题。在多线程系统中，比如 java，可能会造成数据竞争。

move 语义则是另一个处理方式，每次数据绑定是移动，将绑定到 `a` 的数据移动到 `b`，然后将绑定到 `b` 的数据移动到 `c`。这样可以保证数据事实上只是被一个变量持有。

move 语义的代码写起来也会比较啰嗦。在需要保持相同的多份数据时，唯有使用 `clone` 方法或使用 `RC`、`ARC` 进行装箱。所以原始类型，rust 也提供了 copy 语义支持，减少 `clone` 方法。原始类型主要就是数值、boolean 这些。

## 代码块、生命周期

rust 没有 gc，主要依赖生命周期实现**自动内存管理**。rust 中大部分场景是可以自动管理 内存。生命周期的一个重要参考范围就是代码块。在 rust 中，一对 `{}` 表示一个代码块。代码块中的变量，当程序离开这个代码块时，就会触发 `drop` 操作，释放内存。

> When a value is no longer needed, Rust will run a “destructor” on that value. The most common way that a value is no longer needed is when it goes out of scope.

在现代的很多编程语言中都有代码块的概念，特别是有闭包的编程语言。顺便一提，rust 也支持闭包。docutil 也使用了不少闭包作为事件的回调函数（这种写法 js 中也非常普遍）。

比如下面这几行代码：

```rust
#[component]
pub fn SearchBox<G: Html>(ctx: ScopeRef<'_>) -> View<G> {
	let keyword = ctx.create_signal(String::new()); // (1)

	let reset = {
		let keyword = keyword.clone(); // (2)
		move || { // (3)
			keyword.set(String::new());
		}
	};

	view! {ctx,
		// ...
	}
}
```

`keyword` 是一个可响应对象引用，类型是 `&Signal<String>`。`reset` 是一个闭包，目标是重置 `keyword` 的值。可以看出 `reset` 是一个代码块返回的结果，在 rust 中，代码块也可以有返回值，属于 rust 的一种表达式。

reset 代码块中，首先是 clone 一次 `keyword`，因为后面的 html 模板中也用到了这个值，不能被直接移动到闭包中（否则无法实现功能），所以这里只是将 clone 出来的 `keyword` 移动到闭包中。注意（1）和（2）的 `keyword` 不是同一个变量，rust 支持变量声明 shadowing，可以出现同名变量。虽然同名，但是也是受到生命周期行为约束。还有就是这里并没有数据竞争问题，因为两个 `keyword` 都在 `SearchBox` 这个函数的内部，也没有 async 块。

## async/await

rust 同时支持多线程和异步编程。浏览器侧异步编程是相当普遍，而且也被（事实）证明了是一种可靠的并发编程技术。async 的本质的状态机，将异步的操作转换为各种状态。`wasm_bindgen_futures` 提供在 wasm 里使用异步的可能。

与 js 的 Promise 不同，rust 的 Future，是一种需要被触发才会操作的异步系统。就是只声明 Future 对象，实际并不是马上就执行内部的代码。这点 js 的 Promise 只要 new 出来，就会马上执行。

## debug

唯有 `console.log` 大法。

## 胶水代码

wasm-bindgen 会自动生成胶水代码。docutil 的核心代码使用 rust 实现，胶水代码主要与 js 或调用 dom api 的部分代码，再就是 unocss 的代码。

rust 中调用 js 函数也比较简单，只需要简单的声明，就可以在 rust 代码只使用：

```rust
#[wasm_bindgen]
extern "C" {
    #[wasm_bindgen(js_namespace = hljs, js_name = highlightAll )]
    pub fn highlight_all(); // 调用 hljs.highlightAll() 方法
}
```

## 小结

rust 上手写简单的应用并不是非常困难。如果有 c++ 或 go（比如我）背景相信会更容易上手。rust 复杂的地方还有生命周期、trait、泛型、unsafe rust。不过对于应用开发程序程序员来说，使用 safe rust 已经足够解决工作需要。

rust 对于来说是一种补充，我主力工作业务是 js，并同时在浏览器、node.js 上开发应用。我也曾经被 go 吸引——自动内存管理、编译型、单文件部署等等吸引我的地方。但是很快我就被 rust 吸引了。原因就是 rust 更适合作为 js 的补充。通过 napi-rs 项目可以很方便地将代码嵌入的 node.js 中，通过 wasm 也可以将代码嵌入到浏览器侧。

当然我是 **always bet on js and wasm**。

---

- 2022 年 03 月 05 日 初稿
