# Junit、Mockito DT 实战

编写高质量的 Java 代码，单元测试是不可或缺的一环。**JUnit 5** 是 Java 测试的标准框架，而 **Mockito** 则是最流行的 Mock 框架，两者结合可以轻松实现对业务逻辑的隔离测试。

这篇指南将通过一个经典的“转账服务”案例，带你快速上手。

---

## 1. 核心概念：为什么需要 Mockito？

在复杂的系统中，一个类（Service）通常依赖于其他类（Repository 或外部 API）。

- **JUnit 5**：负责运行测试、断言结果（判断对错）。
- **Mockito**：负责模拟（Mock）那些复杂的依赖项，让你只关注当前被测试类的逻辑。

---

## 2. 环境准备 (Maven)

在 `pom.xml` 中引入必要的依赖。JUnit 5 建议使用 `junit-jupiter`。

```xml
<dependencies>
    <dependency>
        <groupId>org.junit.jupiter</groupId>
        <artifactId>junit-jupiter-engine</artifactId>
        <version>5.10.0</version>
        <scope>test</scope>
    </dependency>
    <dependency>
        <groupId>org.mockito</groupId>
        <artifactId>mockito-junit-jupiter</artifactId>
        <version>5.5.0</version>
        <scope>test</scope>
    </dependency>
</dependencies>

```

---

## 3. 实战案例：用户服务测试

假设我们有一个 `UserService`，它依赖 `UserRepository` 来获取用户信息。我们要测试 `getDisplayName` 方法，该方法会根据 ID 查找用户并返回“姓名 (角色)”。

### 被测代码 (Service & Repository)

```java
// 用户实体
public record User(Long id, String name, String role) {}

// 数据访问接口
public interface UserRepository {
    User findById(Long id);
}

// 业务逻辑类 (我们要测试的对象)
public class UserService {
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public String getDisplayName(Long id) {
        User user = userRepository.findById(id);
        if (user == null) return "Unknown User";
        return user.name() + " (" + user.role() + ")";
    }
}

```

### 编写测试用例

```java
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class) // 启用 Mockito 扩展
class UserServiceTest {

    @Mock
    private UserRepository userRepository; // 模拟一个数据库仓库

    @InjectMocks
    private UserService userService; // 自动将上面的 Mock 注入到这个 Service 中

    @Test
    void shouldReturnFormattedDisplayName() {
        // 1. 准备数据 (Given)
        User mockUser = new User(1L, "Alice", "Admin");

        // 2. 设定 Mock 行为 (When)
        // 当调用 userRepository.findById(1) 时，返回 mockUser
        when(userRepository.findById(1L)).thenReturn(mockUser);

        // 3. 执行测试方法 (Act)
        String displayName = userService.getDisplayName(1L);

        // 4. 断言结果 (Assert)
        assertEquals("Alice (Admin)", displayName);

        // 5. 验证行为 (Verify) - 确保 findById 真的被调用了一次
        verify(userRepository, times(1)).findById(1L);
    }

    @Test
    void shouldReturnUnknownWhenUserNotFound() {
        // 设定当找不到用户时返回 null
        when(userRepository.findById(99L)).thenReturn(null);

        String displayName = userService.getDisplayName(99L);

        assertEquals("Unknown User", displayName);
    }
}

```

---

## 4. 常用注解与技巧速查

为了方便你后续开发，这里总结了最常用的功能：

| 注解 / 方法                               | 作用                                              |
| ----------------------------------------- | ------------------------------------------------- |
| **`@ExtendWith(MockitoExtension.class)`** | 在 JUnit 5 中初始化 Mockito 环境。                |
| **`@Mock`**                               | 创建一个虚假的模拟对象。                          |
| **`@InjectMocks`**                        | 创建一个实例，并将标记了 `@Mock` 的对象注入其中。 |
| **`when(...).thenReturn(...)`**           | 设定桩模块（Stubbing），规定 Mock 对象的行为。    |
| **`assertThrows(...)`**                   | JUnit 5 断言，用于检查代码是否按预期抛出异常。    |
| **`verify(...)`**                         | 检查某个 Mock 方法是否被调用，调用了多少次。      |

---

## 5. 编写测试的黄金守则 (AAA 原则)

一个优秀的单元测试通常遵循 **AAA 结构**，这让代码非常易读：

1. **Arrange (准备)**: 初始化对象、Mock 行为和输入参数。
2. **Act (执行)**: 调用你需要测试的那个方法。
3. **Assert (断言)**: 检查输出结果或对象状态是否符合预期。

> **小贴士**：单元测试应该运行飞快，且不应该连接真实的数据库或网络。如果你发现测试很慢，检查一下是不是忘记 Mock 掉外部调用了。

---

**你想尝试为一个包含复杂逻辑（比如带 `if-else` 或循环）的方法编写测试吗？我可以帮你针对具体的代码逻辑设计测试方案。**

---

- 2026-01-08 by Gemini 3
