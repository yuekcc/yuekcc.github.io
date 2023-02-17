# nodejs 上实现 AES 解密实现

这篇文章只有解密部分，原因是业务上的需求是使用 Java 实现了 AES 加密、解密工具，需要使用 nodejs 实现相应的解密功能。

## 算法选择

密钥使用 `PBKDF2WithHmacSHA256` 算法进行派生。

加密使用 AES 算法，GCM 模式，补码为 NoPadding。在 Java 一般写为 `AES/GCM/NoPadding`。

## 工作流程

加密的算法是公开的，但是如何去使用这些算法进行数据处理则属于各个项目的设计问题。通过不同的工作流程，可以增加安全性。

比如这样的一个流程：

![AES 解密流程](images/aes-decrypt-workflow.svg)

AES 解密是需要密码明文，需要设计一个流程用于获取密码明文，直接将密码的明文放到系统中就增加了泄密的风险。比如上面的流程就使用了二次解密的方法。

根据 PBKDF2 算法的特点，在使用相同初始数据的情况，PBKDF2 算法可以得到相同的密钥，可以将这个密钥称为**根密钥**。用根密钥将工作数据加密用的
密码明文进行加密，就可以得到**工作密钥的密文**。

使用时，先在应用中配置相应的**密钥因子**、**初始向量**和**工作密钥的密文**。所谓初始向量实际是一段由安全随机数生成的随机字节数据。
通过密钥因子和初始向量，生成根密钥；然后用根密钥、初始向量将工作密钥密文进行解密，得到工作密钥明文；然后用工作密钥明文对数据密文进行解密。
这样就可以得到数据的原文。

通过上面的设计，数据密文解密的影响因子起码增加了 3 个，而且有了一个更为复杂的流程。就是攻击者需要同时得到这面三个因子和具体的流程才可以成功解密
出敏感数据，无疑是增加了破解的难度。

## 代码

这里就不贴上完整的代码，只有关键步骤的代码，具体按流程一步一步实现即可。

### pbkdf2 密钥派生

crypto 模块自带 pbkdf2 算法实现，而且 hash 算法只支持 hmac 族的各种 hash，比如上面的 sha256。

```js
const crypto = require('crypto');

function getUtf8Bytes(str) {
  return Buffer.from(str, 'utf-8');
}

function getKey(password, salt) {
  return crypto.pbkdf2Sync(getUtf8Bytes(password), getUtf8Bytes(salt), 10000, KEY_LEN_IN_BYTES, 'sha256');
}
```

### AES/GCM/NoPadding

nodejs 的 crypto 模块是基于 OpenSSL 封装的模块，基本上使用了 OpenSSL 的领域名词。比如 128 位 AES 算法叫 `id-aes128-gcm` 等。
对于 AES 算法的 GCM 模式，本身是对补码没有相应要求的。因此 Java 中的 `AES/GCM/NoPadding` 可以使用 `id-aes128-gcm` 的兼容处理。
按密钥的长度，可以使用不同位数的 AES 算法。比如长度为 16 字节的密钥，可以使用 `id-aes128-gcm`；长度为 32 字节的密钥，应该使用 `id-aes256-gcm` 进行
处理。

另外 AES 解密时有一个 AuthTag 的问题需要处理。

```js
function decrypt(contentBytes, key) {
  const decipher = crypto.createDecipheriv('id-aes128-gcm', key, getUtf8Bytes(iv));
  decipher.setAuthTag(contentBytes.slice(contentBytes.byteLength - 16));

  return decipher.update(contentBytes.slice(0, contentBytes.byteLength - 16), null, 'utf-8') + decipher.final('utf-8');
}
```

---

2021 年 12 月 01 日
