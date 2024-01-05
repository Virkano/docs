---
author: 'Kano Zhao'
date: 2023-11-15
---

# UnoCSS 使用指北

一切以官网为准，文档错误看官网去 👀 <CustomLink title="UnoCSS官网" href="https://unocss.dev/" />

## 准备工作

首先，使用 vite 创建一个最基础的 vue 模板

```bash
pnpm create vite
```

安装依赖 unocss，@unocss/reset

```bash
pnpm i unocss, @unocss/reset -D
```

修改 `vite.config.js`,添加 unocss plugin

```js {3,7}
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import unocss from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), unocss()],
})
```

修改 `main.ts`

```js
import { createApp } from 'vue'

/** 重置样式 这里引入自定义的重置样式也可 */
import '@unocss/reset/tailwind.css'
/**
 *  项目内的样式，
 *  注意：最好放在重置样式后，uno.css前
 */
import './styles/main.css'
/** 引入uno.css，不引入不生效 */
import 'uno.css'

import App from './App.vue'

createApp(App).mount('#app')
```

css 样式

```css
:root {
  --primary-color: #316c72;
  --dark-bg: #18181c;
}
/* 方便unocss计算：1单位 = 0.25rem = 1px */
html {
  font-size: 4px;
}

body {
  font-size: 16px;
}

html,
body,
#app {
  height: 100%;
  margin: 0;
  padding: 0;
}

html.dark {
  background: var(--dark-bg);
}
```

然后如果需要使用 UnoCSS 的图标预设，还需要安装`@iconify/json`

```bash
pnpm i @iconify/json -D
```

如果需要使用 UnoCSS 的深色模式，最好再安装一下`@vueuse/core`，方便切换深色模式

```bash
pnpm i @vueuse/core -D
```

新增 `unocss.config.js`

```js
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    [
      'btn',
      'px-4 py-1 rounded inline-block bg-teal-700 text-white cursor-pointer !outline-none hover:bg-teal-800 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50',
    ],
    [
      'icon-btn',
      'inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600',
    ],
  ],
  //   https://unocss.dev/presets/attributify
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  safelist: 'prose m-auto text-left'.split(' '),
  rules: [['card-shadow', { 'box-shadow': '0 1px 2px -2px #00000029, 0 3px 6px #0000001f, 0 5px 12px 4px #00000017' }]],
  theme: {
    colors: {
      primary: 'var(--primary-color)',
      dark_bg: 'var(--dark-bg)',
    },
  },
})
```

icon 搭配网址 <CustomLink title="UnoCSS 搭配icon" href="https://icones.js.org/" />

## 使用 UnoCSS

修改`app.vue`

```vue
<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <main px-16 py-40 text-center>
    <i i-logos-unocss text-48 inline-block />
    <p mt-15 text-20 font-bold color-gray-400>UnoCSS</p>

    <p text-16 mt-15 inline-flex gap-10>
      <i @click="toggleDark()" icon-btn dark:i-carbon-moon i-carbon-sun />
      <a icon-btn i-carbon-logo-github href="https://github.com/virkano" target="_blank" title="GitHub" />
    </p>

    <section mt-20 w-360 mx-auto flex flex-wrap justify-around p-10 card-shadow rounded-10 dark:b>
      <div w-50 h-50 b-1 rounded-5 flex justify-center items-center p-10 m-20>
        <span w-6 h-6 rounded-3 bg-black dark:bg-white />
      </div>
      <div w-50 h-50 b-1 rounded-5 flex justify-between p-10 m-20>
        <span w-6 h-6 rounded-3 bg-black dark:bg-white />
        <span w-6 h-6 rounded-3 self-end bg-black dark:bg-white />
      </div>
      <div w-50 h-50 b-1 rounded-5 flex justify-between p-10 m-20>
        <span w-6 h-6 rounded-3 bg-black dark:bg-white />
        <span w-6 h-6 rounded-3 self-center bg-black dark:bg-white />
        <span w-6 h-6 rounded-3 self-end bg-black dark:bg-white />
      </div>
      <div w-50 h-50 b-1 rounded-5 flex justify-between p-10 m-20>
        <div flex flex-col justify-between>
          <span w-6 h-6 rounded-3 bg-black dark:bg-white />
          <span w-6 h-6 rounded-3 bg-black dark:bg-white />
        </div>
        <div flex flex-col justify-between>
          <span w-6 h-6 rounded-3 bg-black dark:bg-white />
          <span w-6 h-6 rounded-3 bg-black dark:bg-white />
        </div>
      </div>
      <div w-50 h-50 b-1 rounded-5 flex flex-col justify-between items-center p-10 m-20>
        <div flex w-full justify-between>
          <span w-6 h-6 rounded-3 bg-black dark:bg-white />
          <span w-6 h-6 rounded-3 bg-black dark:bg-white />
        </div>
        <div w-6 h-6 rounded-3 bg-black dark:bg-white />
        <div flex w-full justify-between>
          <span w-6 h-6 rounded-3 bg-black dark:bg-white />
          <span w-6 h-6 rounded-3 bg-black dark:bg-white />
        </div>
      </div>
      <div w-50 h-50 b-1 rounded-5 flex flex-col justify-between p-10 m-20>
        <div flex w-full justify-between>
          <span w-6 h-6 rounded-3 bg-black dark:bg-white />
          <span w-6 h-6 rounded-3 bg-black dark:bg-white />
        </div>
        <div flex w-full justify-between>
          <span w-6 h-6 rounded-3 bg-black dark:bg-white />
          <span w-6 h-6 rounded-3 bg-black dark:bg-white />
        </div>
        <div flex w-full justify-between>
          <span w-6 h-6 rounded-3 bg-black dark:bg-white />
          <span w-6 h-6 rounded-3 bg-black dark:bg-white />
        </div>
      </div>
    </section>

    <p mt-20 text-14 color-gray-400>Flex骰子</p>
  </main>
</template>
```

一个字 爽 ！！！

<PageInfo/>

## Contributors

<Contributors/>

<CopyRight/>

<Person/>
