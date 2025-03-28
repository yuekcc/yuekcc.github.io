# zig

最近在学习 Zig。

Zig 是一种号称要代替 C 的编程语言。最初在一些科技新闻网站看到 Zig 的介绍时，我觉得无所谓。因为想要代替 C 的语言太多了，但大多是口号响亮努力太少。直到 Bun 出现。

Bun 是 Zig + Webkit + JavaScriptCore 的全新 JavaScript 运行环境，性能可谓是比 Nodejs 强大很多。Bun 也会营销，开局就是 xx 倍强于 Node.js。Bun 另一个特性是试图兼容 Node.js 的生态，这些就比同是 Node.js killer 的 Deno 友善多了。

> Deno 本来是打着推翻 Node.js 口号而来的。可能因为 Bun 的出现，Deno 也加速开发，很快就推出了 NPM 包兼容模式。

Bun 大概是 Zig 第一次产品级的应用，另一款是一个数据库产品。此时 Zig 还是 0.9.1。作为日间使用 JavaScript 的开发者，我希望手上工具箱有 JS 和另一种不带 GC 的编程语言。所以我也开始更深入了解 Zig。

## Zig 实际上是什么

虽然 Zig 号称要代替 C。但是 Zig 本身就是从 C 发展而来，主要就是解决 C 的问题。

C 是一门很小巧的语言，接近底层，应用广泛。早年在学习编程的时候，我是从 C 入门。

Zig 创作者认为 C 有三个最大的问题：

1. C 编译器实现有太多魔法，甚至是硬编码实现的功能；
2. C 的预处理器和 C 本身实际上没有关系，是两种不同的语言而且无法交互；
3. 使用 C 编写软件，还需要学习大量 C 无关的东西，比如编译系统等。

Zig 就试图解决这些问题。

首先，C 编译器的黑魔法主要源自于 C 标准中的大量 undefined 行为，不同的 C 编译器会以各种方式对这些内容进行处理。例如，常见的 printf 格式错误问题就是一个硬编码的例子。Zig 的解决方案是将开放式编译器能力延伸到用户代码，减少编译器硬编码。

其次，C 预处理器实际上是一个模板工具，用于生成代码。C 预处理器有自己语法，而且它不具备与 C 代码交互的能力。为了解决这个问题，Zig 在编译器内部实现了一个 Zig 解释器，使得编译期可以执行 Zig 代码，从而与任意 Zig 代码交互。这种特性使 Zig 可以实现一套宏系统和编译期泛型系统。虽然这种特性不是完全原创的，但它仍然是一个非常有用的功能。

最后，C 有很多丰富的相关工具，例如 cmake、autoconf、make 等。每个工具都使用不同的语法解决不同的问题，但它们的最终目标都是将 C 代码编译成应用程序。这种情况导致每个 C 项目使用不同的编译工具，因此 C 项目之间共享代码变得非常困难。为了解决这个问题，Zig 通过内置 Zig build system 尝试解决这个问题，并计划在未来实现内置 package manager 来处理代码复用的场景。

## Zig 还有什么有趣的特性

defer、Option 类型、Error Set、基于 struct 的模块系统、@aaaBBB 内置函数、if/for/while/switch 表达式、inline for/switch、type 类型、async/await。这些都是比较有趣的功能。一门现代语言（2000 后出现）有的很多特性，Zig 都有提供。细心对比一下，就会发布 Zig 的这些功能确实是围绕 C 的痛点展开的。我相信喜欢 C 的人也会喜欢 Zig。

Zig 有一个独特的特点是可以显式地指定内存分配器，这对于这种需要手动管理内存的编程语言来说非常重要。相比于其他类似的语言，Zig 可以让开发者为不同的模块指定内存分配器，从而提高内存利用率和应用性能。在 C 语言中，手动分配内存通常使用 malloc/free 函数，但实际上这是使用全局的内存分配器；Rust 也是采用类似的设计。当然，这些语言可以通过使用第三方库或设置全局分配器来应对不同的使用场景，但 Zig 的设计更加彻底。

尽管 Zig 的内存分配器设计有很多优点，但同时也存在一些缺点。显式引入内存分配器参数会在代码层面引入一些干扰，类似于 Go 语言的错误处理方式。在最糟糕的情况下，调用多个函数需要每个都传入分配器，使用完后还需要调用 allocator.free() 方法。这是因为 Zig 遵循没有隐式调用的原则。相比于 Rust 的 RAII 内存管理方式，Zig 的这种方式显得比较原始。

> Rust 的内存管理是一种半自动的管理方式，通过生命周期分析，Rust 编译器会在对象的生命周期结束后自动插入 drop 语句，释放内存。所以很多时候，Rust 代码中不需要手工写 drop 语句。

Zig 代码示例：

```zig
pub fn findRepoRoot(allocator: std.mem.Allocator, start: []const u8) ![]const u8 {
    var current = start;
    var dir: fs.Dir = undefined;

    while (true) {
        // 设置一个代码块，用于释放 git_dir
        {
            var git_dir = try path.resolve(allocator, &[_][]const u8{ current, ".git" });
            defer allocator.free(git_dir);

            dir = fs.openDirAbsolute(git_dir, .{}) catch {
                var parent_dir = path.dirname(current);

                // 如果 current 是根目录，parent_dir = null
                if (parent_dir == null) {
                    return RepoError.NotFound;
                }

                // 设置为父目录，继续查找 .git 目录
                current = parent_dir.?;
                continue;
            };
        }
        dir.close();
        break;
    }

    return allocator.dupe(u8, current);
}
```

Zig 支持集成 C/C++ 代码。Zig 通过开放内置的 clang 为 `zig cc`，使得 Zig 也成了一个优秀的 C/C++ 编译器，而且是一个跨平台的编程器。Zig 编译器的跨平台是通过集成各平台的 libc Headers 来实现多平台支持。`zig cc` 也可以驱动 Rust、Nim 编译。即使 Zig 语言本身小众。

## Zig vs Rust

Rust 是一门 2000 年后出现的现代编程语言，然而它的发展速度非常迅速。如果 Zig 是更好的 C，那么 Rust 可能就是正确的 C++。现在，Rust 的生态已经发展起来了，有很多常用的功能都有第三方库，并且有越来越多的公司使用 Rust 来实现产品级软件。最近几个月，Rust 还成功地加入了 Linux 内核的开发工具链。相信 Rust 将取代 Go、C/C++ 在许多方面的应用。此外，Rust 还可以与 Node.js 和 Python 配合使用，为这些语言提供计算密集型应用的解决方案。

Rust 的目标是面向高性能编程和高安全性编程，这与 Zig 高度重合。因此，有人认为 Zig 是 Rust 的"小号"。我一直在学习 Rust，但只用于实现一些小工具。

与 Rust 相比，Zig 的优势在于编程速度更快，C 代码集成更方便；Rust 则有更成熟的生态、相当好用的 Cargo，以及大型公司的支持，只是编译速度实在感人。

语法方面，Rust 更具有函数式味道，而 Zig 则更传统。Rust 在生命周期分析、泛型、动态分发都有大量创新；Zig 在编译期运行、struct、enum 等有不少创新。现在，Zig 和 Rust 都已经实现了自举。Zig 0.11.dev 的自举方法比较创新，引入了 WASM 技术来实现多平台的自举支持。

## 后续

现在我最喜欢的语言依次是 JavaScript、Zig、Rust。Zig 还在发展中，计划 2025 年能实现 1.0。保持关注，可能有惊喜。

---

- 2022-12-27
- 2023-02-18 更新部分文本。有一些段落由 ChatGPT 润色
