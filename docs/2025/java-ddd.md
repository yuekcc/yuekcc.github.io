# JAVA DDD 示例

以下是一个基于 Spring Boot 2.7、JPA 和 JDK 8 的 DDD 示例实现，包含核心领域模型、分层架构和代码实现：

---

### **1. 项目结构（分层架构）**

```plaintext
src/
├── main/
│   ├── java/
│   │   └── com/
│   │       └── example/
│   │           ├── application/      # 应用层（应用服务）
│   │           │   └── OrderAppService.java
│   │           ├── domain/           # 领域层
│   │           │   ├── model/        # 领域模型
│   │           │   │   ├── Order.java
│   │           │   │   ├── OrderItem.java
│   │           │   │   └── Address.java
│   │           │   └── service/      # 领域服务
│   │           │       └── OrderService.java
│   │           ├── infrastructure/  # 基础设施层
│   │           │   ├── repository/
│   │           │   │   └── OrderRepositoryImpl.java
│   │           │   └── event/
│   │           │       └── OrderCreatedEventPublisher.java
│   │           └── interfaces/       # 用户接口层
│   │               └── web/
│   │                   └── OrderController.java
│   └── resources/
│       └── application.yml
```

---

### **2. 核心领域模型实现**

#### **2.1 实体（Entity）与聚合根**

```java
// Order.java（聚合根）
@Entity
@Table(name = "orders")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Embedded
    private Address address;  // 值对象

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "order_id")
    private List<OrderItem> items = new ArrayList<>();

    // 业务方法：添加订单项
    public void addItem(String productId, BigDecimal price, int quantity) {
        items.add(new OrderItem(productId, price, quantity));
    }

    // 计算总金额
    public BigDecimal calculateTotal() {
        return items.stream()
            .map(OrderItem::getSubtotal)
            .reduce(BigDecimal.ZERO, BigDecimal::add);
    }
}

// OrderItem.java（实体）
@Entity
@Table(name = "order_items")
public class OrderItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String productId;
    private BigDecimal price;
    private int quantity;

    // 计算单项金额
    public BigDecimal getSubtotal() {
        return price.multiply(BigDecimal.valueOf(quantity));
    }
}

// Address.java（值对象）
@Embeddable
public class Address {
    private String province;
    private String city;
    private String street;
}
```

#### **2.2 领域服务**

```java
// OrderService.java
@Service
public class OrderService {
    public void validateOrder(Order order) {
        if (order.getItems().isEmpty()) {
            throw new IllegalArgumentException("订单必须包含至少一个商品");
        }
    }
}
```

---

### **3. 基础设施层实现**

#### **3.1 仓储接口与实现**

```java
// 仓储接口（领域层定义）
public interface OrderRepository {
    Order save(Order order);
    Optional<Order> findById(Long id);
}

// 仓储实现（基础设施层）
@Repository
public class OrderRepositoryImpl implements OrderRepository {
    @PersistenceContext
    private EntityManager entityManager;

    @Override
    @Transactional
    public Order save(Order order) {
        entityManager.persist(order);
        return order;
    }

    @Override
    public Optional<Order> findById(Long id) {
        return Optional.ofNullable(entityManager.find(Order.class, id));
    }
}
```

#### **3.2 领域事件发布**

```java
// OrderCreatedEventPublisher.java
@Component
public class OrderCreatedEventPublisher {
    @Autowired
    private ApplicationEventPublisher eventPublisher;

    public void publish(Order order) {
        eventPublisher.publishEvent(new OrderCreatedEvent(this, order.getId()));
    }
}
```

---

### **4. 应用层与用户接口层**

#### **4.1 应用服务**

```java
// OrderAppService.java
@Service
@RequiredArgsConstructor
public class OrderAppService {
    private final OrderRepository orderRepository;
    private final OrderService orderService;
    private final OrderCreatedEventPublisher eventPublisher;

    @Transactional
    public void createOrder(Address address, List<OrderItemRequest> items) {
        Order order = new Order();
        order.setAddress(address);
        items.forEach(item ->
            order.addItem(item.getProductId(), item.getPrice(), item.getQuantity())
        );

        orderService.validateOrder(order);
        orderRepository.save(order);
        eventPublisher.publish(order);  // 发布领域事件
    }
}
```

#### **4.2 REST API**

```java
// OrderController.java
@RestController
@RequestMapping("/orders")
@RequiredArgsConstructor
public class OrderController {
    private final OrderAppService appService;

    @PostMapping
    public ResponseEntity<?> createOrder(@RequestBody OrderRequest request) {
        appService.createOrder(request.getAddress(), request.getItems());
        return ResponseEntity.ok().build();
    }
}
```

---

### **5. 配置与依赖**

#### **5.1 application.yml**

```yaml
spring:
  datasource:
    url: jdbc:mysql://localhost:3306/ddd_demo
    username: root
    password: root
    driver-class-name: com.mysql.cj.jdbc.Driver
  jpa:
    hibernate:
      ddl-auto: update
    show-sql: true
    properties:
      hibernate:
        dialect: org.hibernate.dialect.MySQL8Dialect
```

#### **5.2 Maven 依赖**

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-jpa</artifactId>
</dependency>
<dependency>
    <groupId>mysql</groupId>
    <artifactId>mysql-connector-java</artifactId>
    <scope>runtime</scope>
</dependency>
```

---

### **6. 关键设计说明**

1. **聚合根设计**
   • `Order`作为聚合根管理`OrderItem`的生命周期，通过`CascadeType.ALL`实现级联操作。
   • 值对象`Address`使用`@Embeddable`映射到数据库表。

2. **领域事件**
   • 使用 Spring 的`ApplicationEventPublisher`实现事件驱动架构。

3. **事务管理**
   • 应用层通过`@Transactional`控制事务边界，确保业务一致性。

4. **分层解耦**
   • 基础设施层通过实现领域层定义的仓储接口，实现依赖倒置。

---

### **7. 扩展建议**

• **CQRS 优化查询**：对复杂查询可分离命令与查询模型。
• **限界上下文拆分**：将订单、库存拆分为独立微服务。
• **集成测试**：使用`@DataJpaTest`验证仓储实现。

完整代码可参考[Spring Data JPA 配置示例]。

---

- 2025-04-12 by DeepSeek R1
