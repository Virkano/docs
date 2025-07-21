---
author: "Kano Zhao"
date: 2024-2-22
---
# 环境配置

<PageInfo/>

# 向着Vue3进发，Vue2.7升级指南

:::tip
今天又遇到了老项目需要使用vue3写好的组件，总不能重新写一遍vue2的吧，当然生成npm包也是一种方式。

不过如果项目不复杂可以试试升级vue2.7试试，这样以后修改起来也方便。
:::
北京时间7月1号，Vue2.7正式发布，Vue2.7支持你的项目在不升级Vue3的情况下使用Vue3的特性，例如Composition Api、setup、Css v-bind等。

与此同时，Vue2.7也是Vue2.X的最终次要版本，在这个版本之后，Vue2将进入LTS（长期支持），即从现在开始持续18个月，Vue2将不再接收新功能。

对于一些老项目来说，当升级Vue3成本过大而你又垂涎Vue3新的api和代码组织方式时，那Vue2.7无疑是最佳选择，这可以让还在使用Vue2的同学更好的学习并过渡到Vue3。

接下来笔者将以一个Vue2的项目，将其升级到Vue2.7并记录该过程，欢迎感兴趣的小伙伴阅读。

> 升级前版本：vue: 2.6.14，vue-cli: 4.0.0

## 删除node_modules和package-lock.json

为了确保我们后面升级的依赖版本是正确的，在一开始时我们直接先将项目的`node_modules`和`package-lock.josn`删除，避免出现各种缓存问题。

## 升级过程

1. vue-cli脚手架升级

现在我们先按照要求升级脚手架的版本，Vue2.7对于要求vue-cli版本要求如下：
    * 如果你的vue-cli是v4版本的，那么你需要将其升级到~4.5.18
    * 如果你的vue-cli是v5版本的，那么你需要将其升级到~5.0.6

```json{8,9,10}
// package.json
{
    "devDependencies": {
        // "@vue/cli-plugin-babel": "^4.0.0",
        // "@vue/cli-plugin-eslint": "^4.0.0",
        // "@vue/cli-service": "^4.0.0",
        // 修改为
        "@vue/cli-plugin-babel": "^4.5.18",
        "@vue/cli-plugin-eslint": "^4.5.18",
        "@vue/cli-service": "^4.5.18",
    }
}
```

2. vue版本升级

```json {5}
// package.json
{
    "dependencies": {
        // "vue": "2.6.14",
        "vue": "2.7.0",
        // vue2.7 不再需要vue-template-compoler，所以可以将其删除
        // "vue-template-compiler": "2.6.14", 
    }
}
```
3. @vue/composition-api
有些人可能已经在Vue2的项目使用上了@vue/composition-api，这时你需要将项目中所用到的导入更新为vue:

```javascript
// import { ref } from '@vue/composition-api'
import { ref } from 'vue'
```
但@vue/composition-api里的一些API，如createApp，并未完全在Vue2.7里移植，所以如果你用到了这些API，那还是使用继续使用@vue/composition-api，若你用到的API都是Vue2.7里有的，则可以将@vue/composition-api从依赖中删去了。

## 使用
经过上面的改动后，现在可以重新安装依赖并运行起来了，接着就可以品尝Vue3的新写法了。

```vue
<template>
  <div>
    <el-button @click="decrease">-</el-button>
    <el-button>{{ count }}</el-button>
    <el-button @click="increase">+</el-button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

let count = ref(1)

const decrease = () => {
  count.value--
}

const increase = () => {
  count.value++
}
</script>
```

另外，Vue2.7支持在模板表达式中使用ESNext语法，这意味着可以在template里使用可选链了，以往在Vue2中，template里并不支持可选链写法，现在在Vue2.7里的template中则可以愉快的使用可选链了
```vue
<template>
  <div>
    {{ userInfo?.name }}
  </div>
</template>

<script setup>
import { ref } from 'vue'

let userInfo = ref(null)
</script>
```
## eslint问题

解决这个问题我们需要将eslint-plugin-vue版本升级到9+

```bash
pnpm add eslint-plugin-vue@9.0.0 -D 
```

> 当然eslint也不是什么问题，👀。

## Contributors

<Contributors/>

<CopyRight/>

<Person/>
