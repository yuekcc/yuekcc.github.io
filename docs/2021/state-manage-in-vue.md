# Vue 组件状态管理笔记

这里记录一下对状态管理的想法。

UI 组件通常是有状态的。所谓状态就是组件可以保存用户此时此刻的一些操作。比如，常见的开关组件。开关的状态至少有
【开】、【关】、【禁用】三种状态。这些状态的产生可能是基于数据生成，也可能是因为用户点击触发而发生改变。无论是何种原因
初始化或改变了原来状态，程序也需要记录相应的状态。

组件也有无状态的类型。【无状态】本身已经是一种状态，只是无需进行管理。无状态组件可以认为是纯粹的数据驱动。

但是 UI 本身总是有状态的。因为 UI 需要响应用户的操作，让组件维持在某些状态下。随着组件的规模增加，这就需要引入状态管理。

## 基于 vuex 的状态管理

Vuex 是 vue 官方出品的状态管理工具。Vuex 可以理解为一个中心仓库，各个组件可以读取中心仓库的内容。Vuex 基于单向
数据流的设计思想，将数据的获取、更新统一交由 Vuex 去管理。通过 Vuex 提供的 modules 功能可以将状态管制在某个领域内。

![Vuex 核心概念](images/vuex-core-concepts.png)

但是在实际的项目中，我认为 Vuex 的这种设计会带来不少问题。首先是 Vuex 的概念是基于约定编写的。就是 Vuex 中 `getter`、
`Mutations`、`Actions` 更多是开发人员之间互相约定。但是这种约定很容易会因为被项目的进度打破。由于 JavaScript 的协变特性，
在 Vuex 的 state 中定义的内容，很容易被直接更改。

当然在启动 Vuex 的严格模式后，理应可以解决这些问题。只是开发人员在项目进度、加班、优秀代码之间往往会选择项目进步，而进行
【飞线】操作。比如从某个 module 中获取状态：`this.$store.module1.domain.someSubject.someField.someKey`。
按 Vuex 的思想，应该使用 `getter` 来解决这样的问题。但是往往会选择直接获取，因为这样写更好理解。

对于新接手项目的开发人员，Vuex 的代码也是雾里看花，不知所云。因为 Vuex 的模板代码太多了。而且 Vuex 在使用 JavaScript 的
动态特性实现注入组件中，更添神秘色彩。即使有 TypeScript 这样的工具，依然没有办法解决 Vuex，基于 Vue 的一些类型提示问题。
 
在书写【高水平代码】与【好理解代码】之间，我更倾向后者。而这样的选择也导致我在项目中不会主动去引入 Vuex 来解决所谓的多级
组件间的状态同步问题。尽量减少三方库的依赖也是我的追求。

## 基于 createContext 实现的多领域状态管理

Vue 是没有提供 useContext 这样的 API，只能自己实现。npm 有可以用的库。createContext 源自 React。Vue 版本的 createContext 可以使用 provide/inject API 和 renderless 方式实现。

所谓 renderless 的组件是会直接渲染子功能，作为父组件，只用于实现部分逻辑功能。如：

```js
export default {
    render(h) {
        return this.$scopedSlots.default()
    }
}
```

这样就可以得到一个 renderless 组件。然后通过 provide API 可以向其子组件中注入部分状态，以实现逻辑、状态共享。

一个复杂的例子：

```js
// token.js
export const CONTEXT_TOKEN = Symbol('SOME_DOMAIN')

// context.js
export default {
    data() {
        return {
            name: 'tom',
            age: 10,
        }
    }，
    provide() {
        const vm = this;
        return {
            [CONTEXT_TOKEN]: {
                // 使用 get，保护数据不会被随意修改
                get name() {
                    return vm.name;
                },
                get age() {
                    return vm.age;
                }
            }
        }
    },
    render(h) {
        return this.$scopedSlots.default()
    }
}

// app.js
import {CONTEXT_TOKEN} from './token'

export default {
    // 需要使用 context 时，需要注入 CONTEXT_TOKEN
    inject: {
        context: CONTEXT_TOKEN
    }
    render(h) {
        return h('div', null, `${this.context.name} is ${this.context.age} year(s) old`)
    }
}

// some-domain-entry.js
import Context from './context'
import App from './app'

export default {
    components: {Context},
    render(h) {
        return h(Context, null, App)
    }
}

```

与中心化的 Vuex 不同，createContext 风格的状态管理需要自行实现不少代码，也需要考虑如何保持数据不被子组件直接修改。比起
Vuex 的几个概念，Context Provider 也只是一个普通的 Vue 组件，并没有修改太多新的东西。

在实践上，我更认中这种分不同 domain 的状态管理风格。一是状态不会扩散到全局中，二是状态的影响范围更加好控制。


## 基于 Composition API 的状态管理

上面是使用 Vue2 实现的 domain 范围内的状态管理。事实上使用 Vue3 提供的 composition api 可以写出更优秀的 api。vue2 可以引入 composition api 插件实现类似的 api。

composition api 的优势是一是更好的类型推导，二是保持响应特性的同时可以减少无谓的干扰代码。如上面的 provide 实现。在 vue3 的 setup 函数中可以简化为：

```js
// context.js
function createContext(token) {
    const provideContext = (initValue) => {
        const context = reactive(initValue)
        provide(token, context)

        return context
    } 

    const useContext = () => {
        return inject(token)
    }

    return {
        provideContext,
        useContext,
    }
}

const {provideContext, useContext} = createContext(Symbol('SOME_DOMAIN'))

// parent.js
export default {
    setup(props) {
        const context = provideContext({
            name: 'tom',
            age: 11
        })

        return () => context.slots.default
    }
    // ...
}

// app.js
export default {
    component: {Parent}
    setup(props, context) {
        const state = useContext()
        return {
            state
        }
    }
}
```

----
2021 年 9 月 6 日
