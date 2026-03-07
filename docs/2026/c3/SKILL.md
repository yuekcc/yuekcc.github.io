# C3 Language Skills

This document provides essential knowledge for working with the **C3 programming language** in a code agent context. It summarizes syntax, standard library, common patterns, and best practices to assist in generating, debugging, and explaining C3 code.

---

## 1. Overview

C3 is an evolution of C designed for systems programming. It maintains C ABI compatibility and low-level control while adding modern features:

- Modules and imports (no header files)
- Stronger type system (fixed-size integers, slices, vectors)
- Error handling via **optional types** (`T?`) and **faults**
- Manual memory management with temporary allocators (`tmem`, `@pool`)
- Compile-time evaluation and hygienic macros
- Operator overloading, generics, interfaces
- Built-in slices, strings, and containers in the standard library

C3 code uses `fn` for functions, `struct`/`union`/`enum` for types, and follows strict naming rules (types: `PascalCase`, constants: `SCREAMING_SNAKE_CASE`, everything else: `snake_case`).

---

## 2. Basic Syntax

### 2.1 Variables

```c3
int a = 10;                // explicit type
var b = 20;                // type inference (local only)
const MAX = 100;           // compile-time constant
int c @noinit;             // skip zero-initialization
```

All variables are zero-initialized by default (opt-out with `@noinit`).

### 2.2 Functions

```c3
fn int add(int x, int y) { return x + y; }
fn int square(int x) => x * x;          // short syntax
fn void greet(String name) { io::printn("Hello " + name); }
```

### 2.3 Control Flow

```c3
if (x > 0) { ... } else { ... }

for (int i = 0; i < 10; i++) { ... }
while (cond) { ... }
do { ... } while (cond);

switch (x) {
    case 1:  ...;          // implicit break
    case 2:  ...; nextcase; // fall through to next case
    case 3:  ...;
    default: ...;
}
```

### 2.4 Arrays and Slices

```c3
int[4] arr = {1, 2, 3, 4};      // fixed-size array (value type)
int[] slice = &arr;              // slice view
int[] sub = arr[1..3];           // sub-slice (indices inclusive)
int[*] inferred = {1,2,3};       // size inferred: int[3]
```

Slices have `.ptr` and `.len` fields.

### 2.5 Strings

```c3
String s = "Hello";               // alias of char[]
ZString z = s.zstr_copy(mem);     // null-terminated C string
```

`String` is a built‑in type with many methods: `.len`, `.contains`, `.split`, `.to_int()`, etc.

---

## 3. Modules and Imports

- Every file declares a module: `module mylib::sub;`
- Import modules: `import std::io;`
- Imports are **recursive**: `import mylib` also imports `mylib::sub`.
- Visibility: `@public` (default), `@private` (module‑only), `@local` (file‑only).

```c3
module foo;
import std::io, std::math;   // multiple imports
```

**Note:** Types can be used without prefix; functions/variables require the last segment (`io::printn`).

---

## 4. Error Handling

C3 uses **optional types** (`T?`) that either hold a value of type `T` or a `fault` (error).

### 4.1 Defining Faults

```c3
faultdef NOT_FOUND, PERMISSION_DENIED;
```

### 4.2 Returning Optionals

```c3
fn int? read_int(String s) {
    if (s.len == 0) return NOT_FOUND~;   // ~ converts fault to optional
    return s.to_int()!;                    // ! unwraps or returns fault
}
```

### 4.3 Handling Optionals

- `if (catch err = expr) { ... }` — handles empty case (fault)
- `if (try val = expr) { ... }` — handles success case, `val` is unwrapped
- `expr ?? default` — provides a default value if empty
- `expr!` — rethrows the fault (exits function)
- `expr!!` — panics if empty

```c3
if (catch err = read_int("123")) {
    io::printfn("error: %s", err);
} else {
    // `read_int` result is automatically unwrapped here
    int x = read_int("123");   // safe because we already checked
}
```

---

## 5. Memory Management

- **Heap allocator**: `mem` (global) – `mem::new(T)`, `mem::free(ptr)`
- **Temporary allocator**: `tmem` – allocations freed when exiting `@pool` scope.

```c3
@pool() {
    int* p = mem::tnew(int);   // temp allocation
    *p = 42;
}; // p is automatically freed
```

- Standard library functions often have `t`‑prefixed versions (e.g., `string::tformat`).
- Containers like `List` default to `tmem` unless initialized with a specific allocator.

```c3
List{int} list = list::ONHEAP{int};   // use heap allocator
list.init(mem);
list.push(1);
list.free();                           // manual free
```

---

## 6. Standard Library Overview

### 6.1 Core Modules

| Module             | Contents                                         |
| ------------------ | ------------------------------------------------ |
| `std::io`          | printing (`print`, `printf`), files, streams     |
| `std::core::mem`   | allocators, `new`/`free`, `tmem`                 |
| `std::collections` | `List`, `HashMap`, `HashSet`, `RingBuffer`, etc. |
| `std::string`      | `String` methods, conversions, formatting        |
| `std::math`        | math functions, vectors, matrices, random        |
| `std::os`          | OS‑specific bindings (process, environment)      |
| `std::thread`      | threading, mutex, condition variables            |
| `std::time`        | time, duration, clocks                           |

### 6.2 Common Patterns

- **Printing**: `io::printn("hello")`, `io::printfn("x=%d", x)`
- **File I/O**:
  ```c3
  File? f = file::open("data.txt", "r");
  if (try f) {
      char[] buffer = f.read(1024)!;
      // ...
      f.close()!!;
  }
  ```
- **Collections**:
  ```c3
  List{int} list;
  list.init(mem);
  list.push(10);
  list.push(20);
  foreach (v : list) io::printn(v);
  list.free();
  ```

---

## 7. Macros and Compile-Time Features

- **Compile‑time variables**: prefix with `$` (e.g., `$x`, `$Type`).
- **Conditional compilation**: `$if cond:` … `$endif`
- **Compile‑time loops**: `$for`, `$foreach`
- **Reflection**: `Type.membersof`, `Type.nameof`, `$defined`, etc.

```c3
macro void print_fields($Type) {
    $foreach f : $Type.membersof:
        io::printfn("%s @ offset %d", f.nameof, f.offsetof);
    $endforeach
}
```

- **@‑macros** can take unevaluated expressions (`#expr`) and trailing bodies.

```c3
macro void @assert(#cond) {
    if (!#cond) {
        io::printfn("Assertion failed: %s", $stringify(#cond));
        abort();
    }
}
```

---

## 8. Common Tasks & Examples

### 8.1 Read a File into a String

```c3
import std::io::file;

fn String? read_file(String path, Allocator alloc) {
    File f = file::open(path, "r")!;
    defer f.close()!!;
    char[] content = f.read_all(alloc)!;
    return (String)content;
}
```

### 8.2 Simple HTTP GET (using sockets)

```c3
import std::net::tcp;

fn void http_get(String host, uint port) {
    TcpSocket sock = tcp::connect(host, port)!;
    defer sock.close()!!;
    sock.write("GET / HTTP/1.0\r\n\r\n")!;
    char[1024] buf;
    usz n = sock.read(buf)!;
    io::print((String)buf[..n]);
}
```

### 8.3 Multi‑threaded Worker

```c3
import std::thread;

fn int worker(void* arg) {
    int id = (int)(iptr)arg;
    io::printfn("Thread %d started", id);
    return id;
}

fn void main() {
    Thread t;
    t.create(&worker, (void*)1)!;
    int result = t.join()!;
    io::printfn("Thread returned %d", result);
}
```

### 8.4 Using Generics

```c3
module stack <Type>;
struct Stack {
    usz capacity;
    usz size;
    Type* elems;
}
fn void Stack.push(&self, Type elem) { ... }
fn Type Stack.pop(&self) { ... }

module main;
import stack;
alias IntStack = Stack{int};
fn void test() {
    IntStack s;
    s.init(mem);
    s.push(10);
    int x = s.pop();
}
```

---

## 9. Best Practices and Gotchas

- **Naming rules**: enforced by compiler. Types: `MyStruct` (starts uppercase, contains lowercase), constants: `MAX_SIZE` (all uppercase), others: `snake_case`.
- **Zero initialization**: locals are zeroed; use `@noinit` only when necessary.
- **Error handling**: Prefer `!` for propagation unless you need to recover; avoid `!!` in production.
- **Temp allocator**: Use `@pool()` for temporary allocations; never return `tmem` pointers from functions.
- **Contracts**: Use `<* @require cond *>` for preconditions; they are checked in safe builds.
- **Testing**: Annotate test functions with `@test` and run `c3c test`.
- **Safety**: Use `--safe` (default) during development; `--fast` for release (disables most checks).
- **Linking C libraries**: Add `-l foo` or use `"linked-libraries"` in `project.json`.
- **Common pitfalls**:
  - Forgetting to initialize containers (they default to `tmem`, which may be too short-lived).
  - Using `&array` when you meant `array` (arrays are values).
  - Confusing `int!` (deprecated) with `int?` (optional).
  - Overlooking that slices are two words, not just pointers.

---

## 10. Project Configuration (`project.json`)

Minimal example:

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

- `dependencies`: list of `.c3l` libraries.
- `linked-libraries`: C libraries to link (e.g., `"m"` for math).
- `cpu`, `opt`, `safe` etc. for compilation flags.

---

This document should equip a code agent with the necessary knowledge to handle C3 programming tasks effectively. For deeper details, refer to the [official C3 documentation](https://c3-lang.org).
