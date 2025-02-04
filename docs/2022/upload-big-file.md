# WIP 大文件上传

## 原理

## 文件 HASHING

主流的文件 hash 算法有 md5、sha1、sha256。

md5、sha1 已经被证明为一个不安全的 hash 算法。但是不代表所有场景下不安全！就文件 hash 的场景，md5、sha1 基本上不会有大问题。主流是使用 sha256 代替 md5、sha1。极端情况下，应该使用 sha512。

其他 hash 算法也可以使用，比如 sha3-256。计算 sha3-256 比计算 sha256 更节省资源而且速度更快。

一个文件的 hash 应该是独一无二的，也可以形容为文件指纹。如果两个文件有相同的 hash，则表示这两个文件的内容完全一致。可以判断为源自同一个文件的 clone。

## 前端实现

四个二进制处理 API：

- `Blob`
- `File`
- `ArrayBuffer`
- `Uint8Array`

### Blob/File

`Blob` 表示一个只读的类文件对象，`Blob` 对象的数据可以按文本、二进制进行读取，也可以转换为 `ReadableStream`。

`File` 类型实际是 `Blob` 的子类，表示一个文件对象。`File` 增加了 `name` 文件名称、`type` 文件 MIME 类型、`lastModified` 最后修改时间、`lastModifiedDate` 最后修改日期 等多个常见的文件状态数据。

可以处理 `Blob` 对象的 API，基本上也支持处理 `File` 对象。

在浏览器环境，常见的 `input[type="file"]` 标签，选择一个文件后，就会获取一个 File 对象。

### ArrayBuffer

`ArrayBuffer` 表示一个二进制数据缓冲区。`ArrayBuffer` 只用作表示数据源，具体要如何处理 `ArrayBuffer`，需要使用视图类型。

视图类型包括 `Uint8Array`、`Uint32Array` 等类型数组对象或 `DataView` 对象。

### Uint8Array

`Uint8Array` 是类型数组的一种，表示一个字节数组。

### 相互转换

```js
const text = 'hello, world';

const blob = new Blob([text]); // 使用文件创建 Blob 对象

const buf = await blob.arrayBuffer(); // 读出为 ArrayBuffer

const u8Arr = new Uint8Array(arrayBuffer); // 使用 Uint8Array 类型数组处理 ArrayBuffer

const buf2 = u8Arr.buffer; // 只读属性，表示构造时传入的 ArrayBuffer 对象

const blob2 = new Blob([arrayBuffer2]); // 从 ArrayBuffer 构建 Blob 对象

const text2 = await blob2.text(); // 使用 text 方法读出 Blob 对象的数据

console.log(text2); // => hello, world
```

### 文件上传流程

1. 用户选择文件
2. 计算文件 hash，用于秒传功能实现
3. 将文件按适合的大小进行分块，同时需要保存块的位置
4. 将文件块并发 POST 到后台
5. 所有块上传完成后，表示上传结束

## 后端实现

接口

- get /file/<hash>/state
- get /file/<hash>
- post /file

## 文件存储

## 秒传功能实现

秒传在实现是先检查服务器上已经还有相同 hash 的文件。由上面文件 Hashing 一段描述的，一个文件的指纹数据是唯一的，如果后台已经存在相同的 hash 就可以判断为已经有用户（可能是其他用户）上传了相同的文件。前端就可以直接表示为上传完成，然后结束流程。

## 参考

- [前端大文件上传深入研究和实现](https://juejin.cn/post/6870837414852886542)
