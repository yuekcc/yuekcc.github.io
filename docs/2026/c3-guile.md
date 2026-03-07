# C3 语言入门教程

By [D 老师](https://chat.deepseek.com/share/ibkdkn0veay6xmehc1)

另有 [C3 SKILL.md](./c3/SKILL.md)

## 1. 引言

C3 是一种系统编程语言，它是 C 语言的进化版，旨在保持 C 的简洁性和性能的同时，引入更现代的编程特性。C3 的设计目标包括：

- **保持接近 C**：C 程序员可以快速上手。
- **C ABI 兼容**：与 C 代码无缝互操作。
- **零成本抽象**：错误处理、泛型、编译时执行等特性不会引入运行时开销。
- **实用性**：提供模块、契约、宏、类型推断等现代特性，同时保持语言简单。

C3 不是 C++ 的替代品，也不是 Rust 那样的激进语言，它更像是一个打磨过的 C，适合系统编程、嵌入式、游戏开发等场景。

## 2. 安装 C3 编译器

C3 的官方编译器是 `c3c`，支持 Windows、macOS、Linux 等平台。你可以从 [c3-lang.org](https://c3-lang.org) 下载预编译的二进制文件，也可以从源码构建。

### 快速安装（以 Linux/macOS 为例）

```bash
# 下载最新版二进制（以 0.7.10 为例）
wget https://github.com/c3lang/c3c/releases/download/0.7.10/c3c-linux-x64.tar.gz
tar -xzf c3c-linux-x64.tar.gz
sudo mv c3c /usr/local/bin/
```

或者使用包管理器（如果可用）：

```bash
# 在 macOS 上使用 Homebrew
brew install c3c
```

### 验证安装

```bash
c3c --version
```

如果看到版本号，说明安装成功。

## 3. 第一个程序：Hello World

创建一个文件 `hello.c3`：

```c3
import std::io;

fn void main()
{
    io::printn("Hello, World!");
}
```

编译并运行：

```bash
c3c compile-run hello.c3
```

输出：

```
Hello, World!
```

### 代码解析

- `import std::io;` 导入标准库的 `io` 模块，这样我们就可以使用 `io::printn` 函数。
- `fn void main()` 定义程序入口函数，`fn` 是函数关键字，`void` 表示无返回值。
- `io::printn` 是 `std::io` 模块中的一个函数，`n` 后缀表示打印后换行。
- 字符串字面量用双引号包围，支持常见的转义序列如 `\n`。

## 4. 基础语法

### 4.1 变量与类型

C3 提供了明确的整数和浮点类型，没有 C 中的 `int` 大小不明确的问题。所有变量默认零初始化，但可以使用 `@noinit` 跳过初始化。

```c3
fn void main()
{
    int a = 10;          // 32 位有符号整数
    uint b = 20;          // 32 位无符号整数
    long c = 30;          // 64 位有符号整数
    float d = 3.14;       // 32 位浮点数
    double e = 2.718;     // 64 位浮点数
    bool f = true;        // 布尔值
    char g = 'A';         // 8 位无符号字符
    ichar h = -128;       // 8 位有符号字符

    // 类型推断（仅限局部变量）
    var x = 42;           // x 类型为 int
    var y = 3.14f;        // y 类型为 float

    // 零初始化
    int z;                // z = 0
    // 跳过初始化（需谨慎使用）
    int w @noinit;        // w 未初始化，必须在使用前赋值
}
```

**常量**使用 `const` 声明，命名必须全大写：

```c3
const MAX_SIZE = 1024;
const PI: double = 3.1415926535;
```

### 4.2 控制流

**if 语句**：

```c3
if (x > 0)
{
    io::printn("positive");
}
else if (x == 0)
{
    io::printn("zero");
}
else
{
    io::printn("negative");
}
```

**循环**：`while`、`for`、`do` 与 C 类似，但 `for` 支持多个初始化声明（需指定类型）：

```c3
for (int i = 0; i < 10; i++)
{
    io::printfn("%d", i);
}

// 多个声明
for (int i = 0, int j = 10; i < j; i++, j--)
{
    // ...
}
```

**switch**：与 C 不同，case 默认有隐式 `break`，需要使用 `nextcase` 来贯穿：

```c3
switch (x)
{
    case 1:
        io::printn("one");
    case 2:
        io::printn("two");
        nextcase;          // 贯穿到下一个 case
    case 3:
        io::printn("three");
        // 自动 break
    default:
        io::printn("other");
}
```

也可以使用范围：

```c3
switch (x)
{
    case 1..5:
        io::printn("between 1 and 5");
    case 6..10:
        io::printn("between 6 and 10");
    default:
        io::printn("other");
}
```

### 4.3 数组与切片

**固定大小数组**：类型为 `T[N]`，作为值类型，赋值会复制整个数组。

```c3
int[4] a = { 1, 2, 3, 4 };
int[4] b = a;              // 复制
a[0] = 100;
io::printn(b[0]);          // 输出 1
```

**切片**：类型为 `T[]`，是一个视图（指针+长度），可以指向数组、其他切片或动态分配的内存。

```c3
int[4] arr = { 1, 2, 3, 4 };
int[] slice = &arr;        // 转换为切片
io::printfn("%d", slice.len);  // 4
slice = arr[1..3];         // 子切片，包含索引 1 和 2
```

可以使用 `..` 语法创建子切片：

```c3
int[] s1 = arr[1..];       // 从索引 1 到末尾
int[] s2 = arr[..2];       // 从开头到索引 2（包含）
int[] s3 = arr[1..^1];     // 从索引 1 到倒数第二个
```

**数组初始化推断**：使用 `[*]` 让编译器自动推断长度：

```c3
int[*] c = { 1, 2, 3 };    // c 的类型为 int[3]
```

### 4.4 字符串

C3 有内置的 `String` 类型，实际上是 `char[]` 的别名，可以方便地操作。

```c3
import std::io;

fn void main()
{
    String s = "Hello";
    s += " World";          // 拼接（需要分配内存，见内存管理部分）
    io::printn(s);
}
```

`String` 支持许多方法：`.len`、`.contains`、`.split` 等。

C 兼容的以 `\0` 结尾的字符串类型是 `ZString`（`char*` 的别名），用于与 C 代码交互。

## 5. 函数

函数定义以 `fn` 开头，返回类型在参数列表之前。

```c3
fn int add(int a, int b)
{
    return a + b;
}

// 短函数语法（单表达式）
fn int mul(int a, int b) => a * b;
```

### 5.1 默认参数与命名参数

```c3
fn int power(int base, int exp = 2)
{
    int result = 1;
    for (int i = 0; i < exp; i++)
    {
        result *= base;
    }
    return result;
}

fn void main()
{
    io::printfn("%d", power(3));      // 9 (3^2)
    io::printfn("%d", power(3, 4));   // 81
    io::printfn("%d", power(exp: 5, base: 2)); // 32，命名参数可乱序
}
```

### 5.2 方法

可以为任何类型定义方法，通过点号调用：

```c3
struct Point
{
    int x;
    int y;
}

fn void Point.move(&self, int dx, int dy)
{
    self.x += dx;
    self.y += dy;
}

fn void main()
{
    Point p = { 1, 2 };
    p.move(3, 4);
    io::printfn("%d, %d", p.x, p.y); // 4, 6
}
```

第一个参数如果是 `&self`，表示指针接收者（可修改）；如果是 `self`，表示值接收者（不可修改，复制）。

### 5.3 函数指针

函数指针必须通过 `alias` 定义：

```c3
alias IntBinOp = fn int(int, int);

fn int add(int a, int b) => a + b;

fn void main()
{
    IntBinOp op = &add;
    io::printfn("%d", op(3, 5)); // 8
}
```

## 6. 模块与导入

C3 使用模块组织代码。每个文件开头需声明所属模块：

```c3
module mylib::math;

fn int square(int x) => x * x;
```

另一个文件可以使用 `import` 导入：

```c3
module main;
import mylib::math;   // 导入模块
import std::io;        // 标准库

fn void main()
{
    io::printfn("%d", square(5)); // 25
}
```

### 6.1 导入规则

- 导入模块后，可以直接使用其子模块的**类型**（无需前缀），但**函数、常量、变量**需要带子模块名（如 `math::square`）。
- 如果两个模块有同名类型，可以用全限定名消除歧义。

### 6.2 可见性

默认所有顶层声明都是 `@public`（对外可见）。可以使用 `@private` 使声明仅在当前模块内可见，`@local` 仅限当前文件。

```c3
module mylib;

fn void internal() @private { ... }  // 本模块内可见
fn void hidden() @local { ... }      // 仅本文件可见
```

## 7. 错误处理

C3 使用 **Optional 类型**处理可能失败的操作，语法是类型后加 `?`。函数返回 `T?` 表示要么返回一个 `T` 值，要么返回一个 `fault`（错误原因）。

### 7.1 定义故障（fault）

使用 `faultdef` 定义可能的错误：

```c3
faultdef DIVISION_BY_ZERO, INVALID_INPUT;
```

### 7.2 返回 Optional

```c3
fn double? divide(int a, int b)
{
    if (b == 0) return DIVISION_BY_ZERO~;  // 使用 ~ 将 fault 转为 Optional
    return (double)a / b;
}
```

### 7.3 处理 Optional

- **`if (catch err = expr)`**：如果 Optional 为空（即包含 fault），则执行 then 分支，并将 fault 赋值给 `err`。
- **`if (try val = expr)`**：如果 Optional 有值，则执行 then 分支，并将值赋值给 `val`，之后 `val` 在分支内是非 Optional 类型。
- **`??`**：提供默认值。
- **`!`**：如果 Optional 为空，则立即从当前函数返回该 fault（隐式传播错误）。
- **`!!`**：如果 Optional 为空，则触发 panic（程序终止）。

示例：

```c3
fn void? test()
{
    double? result = divide(10, 0);

    if (catch err = result)
    {
        io::printfn("Error: %s", err);
        return err~;   // 重新抛出错误
    }

    // 此时 result 已自动展开为普通 double
    io::printfn("Result: %f", result);
    return void;       // 正常返回
}

fn void main()
{
    test()!!;          // 如果 test 返回 fault，则 panic
}
```

使用 `??` 提供默认值：

```c3
double x = divide(10, 0) ?? 0.0;   // 如果错误，x = 0.0
```

## 8. 内存管理

C3 采用手动内存管理，但提供了临时分配器（`tmem`）简化短期内存的清理。

### 8.1 堆分配

标准库提供 `mem` 模块中的 `new`、`alloc`、`new_array` 等函数进行堆分配。使用 `mem` 分配的内存需要显式释放。

```c3
import std::core::mem;

fn void test()
{
    int* p = mem::new(int);       // 分配并零初始化一个 int
    *p = 42;
    // 使用 ...
    mem::free(p);                  // 释放

    int[] arr = mem::new_array(int, 10); // 分配 int[10]
    // 使用 ...
    mem::free(arr);                 // 释放切片（即释放底层数组）
}
```

### 8.2 临时分配（tmem）

临时分配器（`tmem`）自动释放内存，当退出 `@pool` 作用域时，所有通过 `tmem` 分配的内存都会被回收。适合函数内部的临时数据。

```c3
import std::core::mem;

fn void process()
{
    @pool()
    {
        int* p = mem::tnew(int);    // 使用临时分配器
        *p = 123;
        // 使用 p ...
    }; // p 在此释放
}
```

许多标准库函数提供 `t` 前缀的版本（如 `string::tformat`）来使用临时分配器。

### 8.3 容器与默认分配器

容器（如 `List`、`HashMap`）如果不显式初始化，默认使用临时分配器。如果希望它们使用堆分配，需要显式初始化：

```c3
import std::collections::list;

fn void test()
{
    List{int} list;                // 未初始化，将隐式使用临时分配器
    list.push(1);                   // 在临时作用域内分配

    @pool()                        // 确保临时内存被释放
    {
        // ...
    };
}
```

要在全局或长期使用容器，应使用堆分配器初始化：

```c3
List{int} list = list::ONHEAP{int}; // 使用堆分配器
list.init(mem);                     // 或者显式初始化
```

## 9. 自定义类型

### 9.1 结构体

```c3
struct Person
{
    String name;
    int age;
}

fn void main()
{
    Person p = { "Alice", 30 };          // 初始化
    io::printfn("%s is %d", p.name, p.age);

    Person* ptr = &p;
    ptr.age = 31;                         // 箭头操作符 -> 被替换为点号（自动解引用）
}
```

支持匿名结构体嵌套和子类型（`inline`）。

### 9.2 枚举

C3 的枚举是强类型的，其值从 0 开始连续递增。枚举可以关联静态数据。

```c3
enum Color : int (String name)
{
    RED { "red" },
    GREEN { "green" },
    BLUE { "blue" }
}

fn void main()
{
    Color c = Color.GREEN;
    io::printfn("%s: %s", c.name, c.ordinal); // green: 1
}
```

如果希望枚举值任意指定（像 C 中的常量组），可以使用 `constdef`。

### 9.3 联合体

与 C 类似：

```c3
union Value
{
    int i;
    double d;
}

fn void main()
{
    Value v;
    v.i = 42;
    double d = v.d;   // 未定义行为（因为当前存储的是 int）
}
```

### 9.4 Bitstruct

用于精确控制位布局，替代 C 的位域：

```c3
bitstruct Flags : char
{
    bool flag1 : 0;
    bool flag2 : 1;
    bool flag3 : 2;
}

fn void main()
{
    Flags f = { .flag1, .flag3 };
    io::printfn("%x", (char)f); // 输出 5 (二进制 101)
}
```

### 9.5 Typedef 与 Alias

- `alias`：创建类型别名，与原有类型等价。
- `typedef`：创建新类型，与底层类型不兼容（需显式转换），适合用于增强类型安全。

```c3
alias IntPtr = int*;          // 别名
typedef UserId = int;         // 新类型

fn void test()
{
    IntPtr p = null;          // 等价于 int*
    UserId id = 123;          // 隐式转换允许（字面量）
    int x = id;               // 错误：不能隐式转换
}
```

## 10. 编译时特性

C3 提供了丰富的编译时编程能力，允许在编译期执行代码、反射类型信息。

### 10.1 编译时条件与循环

使用 `$if`、`$for`、`$foreach` 在编译时生成代码。

```c3
fn int square(int x) => x * x;

fn void test()
{
    $if $defined(square):
        io::printn("square is defined");
    $else
        io::printn("square is not defined");
    $endif
}
```

编译时循环：

```c3
macro void print_numbers(int $n)
{
    $for var $i = 0; $i < $n; $i++:
        io::printfn("%d", $i);
    $endfor
}
```

### 10.2 编译时反射

可以通过类型属性获取类型信息：

```c3
import std::io;

struct Point
{
    int x;
    int y;
}

fn void main()
{
    io::printfn("size: %d", Point.sizeof);          // 8 (假设 int 4 字节)
    io::printfn("align: %d", Point.alignof);        // 4

    // 遍历成员
    $foreach m : Point.membersof:
        io::printfn("field %s at offset %d", m.nameof, m.offsetof);
    $endforeach
}
```

### 10.3 宏

C3 的宏是一种强大的代码生成工具。简单宏：

```c3
macro square(x)
{
    return x * x;
}

fn void main()
{
    int a = square(5);   // 展开为 5 * 5
}
```

带延迟求值的宏（使用 `#` 参数）和代码块宏（使用 `@body`）可以实现类似控制结构的效果：

```c3
macro void @repeat(int times; @body)
{
    for (int i = 0; i < times; i++)
    {
        @body();
    }
}

fn void main()
{
    @repeat(3)
    {
        io::printn("Hello");
    };
}
```

## 11. 构建系统

C3 自带构建系统，通过 `project.json` 配置项目。初始化项目：

```bash
c3c init my_project
cd my_project
```

典型的 `project.json`：

```json
{
  "langrev": "1",
  "authors": ["Your Name"],
  "version": "0.1.0",
  "sources": ["src/**"],
  "targets": {
    "my_app": {
      "type": "executable"
    }
  }
}
```

编译：

```bash
c3c build
c3c run my_app
```

运行测试：

```bash
c3c test
```

## 12. 下一步

- **标准库文档**：查看 [c3-lang.org/stdlib](https://c3-lang.org/stdlib) 获取更多模块信息。
- **社区**：加入 [C3 Discord](https://discord.gg/qN76R87) 与其他开发者交流。
- **示例**：阅读官方仓库中的示例代码。
- **进阶主题**：学习泛型、契约、接口、内联汇编等高级特性。

C3 是一门仍在积极发展的语言，但已经足够稳定用于实际项目。祝你学习愉快！

---

- 2026-03-08 by DeepSeek
