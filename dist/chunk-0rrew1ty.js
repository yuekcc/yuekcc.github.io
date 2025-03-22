import{e as a,h as n}from"/dist/chunk-scq2q67j.js";function l(){return n("div",{class:"markdown-body",children:n(a,{children:[n("h1",{children:"[AI 助学] Java 工程学"},void 0,!1,void 0,this),`
`,n("h2",{children:"一个典型的 spring boot 项目的目录结构应该是怎么样的？"},void 0,!1,void 0,this),`
`,n("p",{children:"一个典型的 Spring Boot 项目目录结构遵循 Maven/Gradle 约定，以下是标准分层结构（以 Maven 为例）："},void 0,!1,void 0,this),`
`,n("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:n("code",{className:"language-log",children:[n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"项目根目录"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"├── src"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"│   ├── main"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"│   │   ├── java                  // 主代码"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"│   │   │   └── com/example/demo // 根包（根据项目自定义）"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"│   │   │       ├── "},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"Application.java"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"      // 主启动类（必须）"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"│   │   │       ├── controller            // 控制器层（API入口）"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"│   │   │       ├── service                // 业务逻辑层"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"│   │   │       ├── repository             // 数据访问层（或dao）"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"│   │   │       ├── model                  // 实体类/DTO"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"│   │   │       ├── config                 // 配置类（如Spring配置）"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"│   │   │       └── exception              // 自定义异常处理"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"│   │   │"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"│   │   └── resources"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"│   │       ├── static            // 静态资源（js/css/images等）"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"│   │       ├── templates         // 模板文件（Thymeleaf等）"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"│   │       ├── "},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"application.yml"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"   // 主配置文件（"},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"或.properties"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"）"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"│   │       └── "},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"banner.txt"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"        // 自定义启动banner（可选）"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"│   │"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"│   └── test"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"│       └── java                  // 测试代码（包结构对应main）"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"│           └── com/example/demo"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"│               └── "},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"ApplicationTests.java"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" // 单元测试示例"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"│"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"├── target                       // Maven构建输出目录（自动生成）"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"├── "},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"pom.xml"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"                      // Maven依赖管理（"},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"或build.gradle"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"）"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"├── .gitignore                   // 版本控制忽略配置"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"└── "},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"README.md"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"                    // 项目文档"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,n("h3",{children:"关键说明："},void 0,!1,void 0,this),`
`,n("ol",{children:[`
`,n("li",{children:[`
`,n("p",{children:n("strong",{children:"分层结构"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("ul",{children:[`
`,n("li",{children:[n("code",{children:"controller"},void 0,!1,void 0,this),": 处理 HTTP 请求（使用",n("code",{children:"@RestController"},void 0,!1,void 0,this),"/",n("code",{children:"@Controller"},void 0,!1,void 0,this),"）"]},void 0,!0,void 0,this),`
`,n("li",{children:[n("code",{children:"service"},void 0,!1,void 0,this),": 业务逻辑实现（",n("code",{children:"@Service"},void 0,!1,void 0,this),"）"]},void 0,!0,void 0,this),`
`,n("li",{children:[n("code",{children:"repository"},void 0,!1,void 0,this),": 数据库操作（",n("code",{children:"@Repository"},void 0,!1,void 0,this),"，JPA 或 MyBatis 接口）"]},void 0,!0,void 0,this),`
`,n("li",{children:[n("code",{children:"model"},void 0,!1,void 0,this),": 数据模型（JPA 实体类、DTO、VO 等）"]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("li",{children:[`
`,n("p",{children:n("strong",{children:"配置文件"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("ul",{children:[`
`,n("li",{children:[n("code",{children:"application.yml"},void 0,!1,void 0,this),"优先级高于",n("code",{children:"application.properties"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("li",{children:["可通过",n("code",{children:"application-{profile}.yml"},void 0,!1,void 0,this),"实现多环境配置（如",n("code",{children:"application-dev.yml"},void 0,!1,void 0,this),"）"]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("li",{children:[`
`,n("p",{children:n("strong",{children:"资源文件"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("ul",{children:[`
`,n("li",{children:[n("code",{children:"static/"},void 0,!1,void 0,this),": 可直接通过 URL 访问（如",n("code",{children:"http://localhost:8080/logo.png"},void 0,!1,void 0,this),"）"]},void 0,!0,void 0,this),`
`,n("li",{children:[n("code",{children:"templates/"},void 0,!1,void 0,this),": 需模板引擎渲染（如 Thymeleaf、Freemarker）"]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("li",{children:[`
`,n("p",{children:n("strong",{children:"测试规范"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("ul",{children:[`
`,n("li",{children:["测试类名通常为",n("code",{children:'被测试类名 + "Tests"'},void 0,!1,void 0,this),"（如",n("code",{children:"UserServiceTests"},void 0,!1,void 0,this),"）"]},void 0,!0,void 0,this),`
`,n("li",{children:["使用",n("code",{children:"@SpringBootTest"},void 0,!1,void 0,this),"进行集成测试"]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("h3",{children:"可选扩展目录："},void 0,!1,void 0,this),`
`,n("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:n("code",{className:"language-log",children:[n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"项目根目录"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"├── docker                       // Dockerfile及相关配置"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"├── scripts                      // 部署/运维脚本"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"├── docs                         // 项目文档"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"└── src/main"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"    ├── resources"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"    │   ├── db/migration         // Flyway数据库迁移脚本"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"    │   └── i18n                 // 国际化资源文件"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"    └── webapp                   // 传统WAR项目web资源（可选）"},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,n("h3",{children:"示例启动类："},void 0,!1,void 0,this),`
`,n("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:n("code",{className:"language-java",children:[n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"package"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" com.example.demo;"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"import"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" org.springframework.boot.SpringApplication;"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"import"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" org.springframework.boot.autoconfigure.SpringBootApplication;"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"@"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"SpringBootApplication"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"public"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" class"},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:" Application"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" {"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"    public"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" static"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" void"},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:" main"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"("},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"String"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"[] "},void 0,!1,void 0,this),n("span",{style:{color:"#FFAB70"},children:"args"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:") {"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"        SpringApplication."},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:"run"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"(Application.class, args);"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"    }"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"}"},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,n("h3",{children:"最佳实践建议："},void 0,!1,void 0,this),`
`,n("ol",{children:[`
`,n("li",{children:"保持包结构扁平化，避免过深的层级"},void 0,!1,void 0,this),`
`,n("li",{children:["按功能模块分包（如",n("code",{children:"user"},void 0,!1,void 0,this),"包下包含 controller/service/repository/model）"]},void 0,!0,void 0,this),`
`,n("li",{children:["使用",n("code",{children:"@ConfigurationProperties"},void 0,!1,void 0,this),"管理自定义配置项"]},void 0,!0,void 0,this),`
`,n("li",{children:"遵循 RESTful API 设计规范"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("p",{children:["根据项目复杂度可调整结构，例如添加",n("code",{children:"util"},void 0,!1,void 0,this),"（工具类）、",n("code",{children:"aspect"},void 0,!1,void 0,this),"（AOP）、",n("code",{children:"security"},void 0,!1,void 0,this),"（安全配置）等包。"]},void 0,!0,void 0,this),`
`,n("h2",{children:"DAO 、VO、 Entity 对象应该如何划分？可不可以都放在一个目录？"},void 0,!1,void 0,this),`
`,n("p",{children:"在分层架构中，DAO、VO、Entity 的职责划分和目录组织对代码可维护性至关重要。以下是详细解析："},void 0,!1,void 0,this),`
`,n("hr",{},void 0,!1,void 0,this),`
`,n("h3",{children:n("strong",{children:"一、核心概念与职责"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("table",{children:[n("thead",{children:n("tr",{children:[n("th",{children:"类型"},void 0,!1,void 0,this),n("th",{children:"作用"},void 0,!1,void 0,this),n("th",{children:"典型特征"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),n("tbody",{children:[n("tr",{children:[n("td",{children:n("strong",{children:"Entity"},void 0,!1,void 0,this)},void 0,!1,void 0,this),n("td",{children:"与数据库表结构一一对应的领域模型"},void 0,!1,void 0,this),n("td",{children:["包含 JPA/Hibernate 注解（如 ",n("code",{children:"@Entity"},void 0,!1,void 0,this),", ",n("code",{children:"@Table"},void 0,!1,void 0,this),"），直接映射数据库字段"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),n("tr",{children:[n("td",{children:n("strong",{children:"DAO"},void 0,!1,void 0,this)},void 0,!1,void 0,this),n("td",{children:"数据访问层接口，定义数据库操作"},void 0,!1,void 0,this),n("td",{children:["接口名称常为 ",n("code",{children:"XxxRepository"},void 0,!1,void 0,this),"（Spring Data JPA）或 ",n("code",{children:"XxxDao"},void 0,!1,void 0,this),"（MyBatis）"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),n("tr",{children:[n("td",{children:n("strong",{children:"VO"},void 0,!1,void 0,this)},void 0,!1,void 0,this),n("td",{children:"视图对象（View Object），用于前端展示数据"},void 0,!1,void 0,this),n("td",{children:["只包含前端需要的字段，可能带有数据格式转换注解（如 Jackson 的 ",n("code",{children:"@JsonFormat"},void 0,!1,void 0,this),"）"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),n("tr",{children:[n("td",{children:n("strong",{children:"DTO"},void 0,!1,void 0,this)},void 0,!1,void 0,this),n("td",{children:"数据传输对象（Data Transfer Object），用于层间数据传输（如 Service 层到 Controller 层）"},void 0,!1,void 0,this),n("td",{children:"可包含业务逻辑字段组合，常用于解耦内部数据模型和外部接口"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),`
`,n("hr",{},void 0,!1,void 0,this),`
`,n("h3",{children:n("strong",{children:"二、目录划分建议"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("h4",{children:n("strong",{children:"方案 1：按类型分包（推荐）"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:n("code",{className:"language-log",children:[n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"src/main/java/com/example/demo/"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"├── model"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"│   ├── entity      // 数据库实体（"},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"UserEntity.java"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"）"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"│   ├── dto         // 数据传输对象（"},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"UserDTO.java"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"）"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"│   └── vo          // 视图对象（"},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"UserVO.java"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"）"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"│"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"├── repository      // DAO 层（"},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"UserRepository.java"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"）"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"└── service         // 业务逻辑层"},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:n("strong",{children:"优点"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("ul",{children:[`
`,n("li",{children:["类型隔离清晰，避免类名冲突（如 ",n("code",{children:"User"},void 0,!1,void 0,this)," 可能同时存在 Entity 和 VO）"]},void 0,!0,void 0,this),`
`,n("li",{children:"便于全局管理同类对象（如统一添加 Jackson 序列化规则到 VO 包）"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("hr",{},void 0,!1,void 0,this),`
`,n("h4",{children:n("strong",{children:"方案 2：按模块分包（适合复杂系统）"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:n("code",{className:"language-log",children:[n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"src/main/java/com/example/demo/"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"└── module"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"    └── user"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"        ├── entity      // "},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"UserEntity.java"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"        ├── dto         // "},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"UserDTO.java"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"        ├── vo          // "},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"UserVO.java"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"        └── repository  // "},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"UserRepository.java"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:n("strong",{children:"优点"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("ul",{children:[`
`,n("li",{children:"高内聚低耦合，模块独立性更强"},void 0,!1,void 0,this),`
`,n("li",{children:"适合微服务或领域驱动设计（DDD）架构"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("hr",{},void 0,!1,void 0,this),`
`,n("h3",{children:n("strong",{children:"三、能否放在同一目录？"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("h4",{children:n("strong",{children:"不推荐场景"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("ol",{children:[`
`,n("li",{children:[`
`,n("p",{children:n("strong",{children:"字段差异大"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("ul",{children:[`
`,n("li",{children:["Entity 可能包含数据库关联字段（如 ",n("code",{children:"@OneToMany"},void 0,!1,void 0,this),"）"]},void 0,!0,void 0,this),`
`,n("li",{children:["VO/DTO 可能包含计算字段（如 ",n("code",{children:"totalOrders"},void 0,!1,void 0,this),"）或脱敏字段（如 ",n("code",{children:"password"},void 0,!1,void 0,this)," → ",n("code",{children:"******"},void 0,!1,void 0,this),"）"]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("li",{children:[`
`,n("p",{children:n("strong",{children:"注解冲突"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("ul",{children:[`
`,n("li",{children:"Entity 需要 JPA 注解，VO/DTO 需要 Jackson 注解，混用会导致类职责不清晰"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("li",{children:[`
`,n("p",{children:n("strong",{children:"协作隐患"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("ul",{children:[`
`,n("li",{children:"团队成员可能误直接操作 Entity 返回给前端，暴露敏感数据"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("hr",{},void 0,!1,void 0,this),`
`,n("h4",{children:n("strong",{children:"可接受场景"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("ul",{children:[`
`,n("li",{children:[n("strong",{children:"小型项目（如 Demo 或快速原型）"},void 0,!1,void 0,this),n("br",{},void 0,!1,void 0,this),`
可临时合并到 `,n("code",{children:"model"},void 0,!1,void 0,this)," 包，但需通过命名区分：",n("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:n("code",{className:"language-java",children:[n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"UserEntity.java  "},void 0,!1,void 0,this),n("span",{style:{color:"#6A737D"},children:"// 实体"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"UserRequest.java "},void 0,!1,void 0,this),n("span",{style:{color:"#6A737D"},children:"// DTO（入参）"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"UserResponse.java "},void 0,!1,void 0,this),n("span",{style:{color:"#6A737D"},children:"// VO（出参）"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("hr",{},void 0,!1,void 0,this),`
`,n("h3",{children:n("strong",{children:"四、典型案例对比"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("h4",{children:n("strong",{children:"Entity（对应数据库表）"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:n("code",{className:"language-java",children:[n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"@"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"Entity"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"@"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"Table"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"("},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"name"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" ="},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:' "users"'},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:")"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"public"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" class"},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:" UserEntity"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" {"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"    @"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"Id"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"    @"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"GeneratedValue"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"("},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"strategy"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" ="},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" GenerationType.IDENTITY)"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"    private"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" Long id;"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"    @"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"Column"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"("},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"nullable"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" ="},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:" false"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:", "},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"unique"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" ="},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:" true"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:")"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"    private"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" String username;"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#6A737D"},children:"    // 数据库敏感字段（需脱敏）"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"    private"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" String password;"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"}"},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,n("h4",{children:n("strong",{children:"DTO（Service 层出入参）"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:n("code",{className:"language-java",children:[n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"public"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" class"},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:" UserDTO"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" {"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"    @"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"NotBlank"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"("},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"message"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" ="},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:' "用户名不能为空"'},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:")"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"    private"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" String username;"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"    @"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"Size"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"("},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"min"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" ="},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:" 6"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:", "},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"message"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" ="},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:' "密码至少6位"'},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:")"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"    private"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" String password;"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"}"},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,n("h4",{children:n("strong",{children:"VO（返回前端的视图）"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:n("code",{className:"language-java",children:[n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"public"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" class"},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:" UserVO"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" {"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"    private"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" Long id;"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"    private"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" String username;"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"    @"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"JsonFormat"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"("},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"pattern"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" ="},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:' "yyyy-MM-dd"'},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:")"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"    private"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" LocalDateTime createTime; "},void 0,!1,void 0,this),n("span",{style:{color:"#6A737D"},children:"// 格式化时间"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"}"},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,n("hr",{},void 0,!1,void 0,this),`
`,n("h3",{children:n("strong",{children:"五、最佳实践总结"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("ol",{children:[`
`,n("li",{children:[`
`,n("p",{children:n("strong",{children:"严格分层"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("ul",{children:[`
`,n("li",{children:["Controller 层使用 ",n("strong",{children:"VO/DTO"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("li",{children:["Service 层内部使用 ",n("strong",{children:"Entity/DTO"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("li",{children:["DAO 层操作 ",n("strong",{children:"Entity"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("li",{children:[`
`,n("p",{children:[n("strong",{children:"转换工具"},void 0,!1,void 0,this),n("br",{},void 0,!1,void 0,this),`
使用 MapStruct 或 ModelMapper 自动转换 Entity/DTO/VO，避免手动 `,n("code",{children:"setter"},void 0,!1,void 0,this)," 代码："]},void 0,!0,void 0,this),`
`,n("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:n("code",{className:"language-java",children:[n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"@"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"Mapper"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"public"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" interface"},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:" UserConverter"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" {"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"    UserVO "},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:"toVO"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"(UserEntity "},void 0,!1,void 0,this),n("span",{style:{color:"#FFAB70"},children:"entity"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:");"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"    UserEntity "},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:"toEntity"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"(UserDTO "},void 0,!1,void 0,this),n("span",{style:{color:"#FFAB70"},children:"dto"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:");"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"}"},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("li",{children:[`
`,n("p",{children:n("strong",{children:"安全规范"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("ul",{children:[`
`,n("li",{children:"永远不要直接返回 Entity 给前端"},void 0,!1,void 0,this),`
`,n("li",{children:"在 Entity 和 VO 之间通过 DTO 实现敏感字段过滤"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("hr",{},void 0,!1,void 0,this),`
`,n("h3",{children:n("strong",{children:"六、常见反模式"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:n("code",{className:"language-java",children:[n("span",{className:"line",children:n("span",{style:{color:"#6A737D"},children:"// 错误示例：在 Entity 中混入 VO 逻辑"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"@"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"Entity"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"public"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" class"},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:" User"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" {"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"    @"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"Id"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"    private"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" Long id;"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#6A737D"},children:"    // 违反单一职责：实体类包含前端注解"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"    @"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"JsonIgnore"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"    private"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" String password;"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#6A737D"},children:"    // 违反分层：实体类包含业务逻辑字段"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"    @"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"Transient"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"    private"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" Integer orderCount;"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"}"},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,n("hr",{},void 0,!1,void 0,this),`
`,n("p",{children:[n("strong",{children:"结论"},void 0,!1,void 0,this),"：",n("strong",{children:"中大型项目必须分开"},void 0,!1,void 0,this),"，小型项目可简化但需通过命名区分。核心原则是保证代码的可读性、可维护性和安全性。"]},void 0,!0,void 0,this),`
`,n("hr",{},void 0,!1,void 0,this),`
`,n("ul",{children:[`
`,n("li",{children:"2025-03-22 by DeepSeek R1"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)}export{l as default};
