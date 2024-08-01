---
author: "Kano"
date: 2023-04-18
---

# ChoDocs 的 VitePress 插件折腾记录

如果你也想拥有和 [前端杂货铺](https://docs.virkano.com/) 一样的 vitepress 文档效果，不妨从这篇文章看起。

> 事先声明：在自己配置之前查看一下是否版本和我目前是一致的，一般而言版本号相差个位数影响不大，如果相差较大建议升级一下 vitepress 版本并结合官方文档修改。

> 另：本文档目前是开源的，一些改动可能会在未来的更新中被修改。其次，因为个人时间有限，如果你发现了一些问题或者相关配置文档难以理解不清楚怎么配置，欢迎提 issue 或者 pr。代码其实已经开源了，我想爱折腾的各位根据文件引用关系即可完成 cv 操作。

## 相关说明

对于下文中的一些 npm 包，如果你有时间可以来提提 pr 写上安装代码，方便自己也帮助他人，我会非常感谢的。

> **TODO**
>
> - 一些 npm 包的安装代码
> - 详细说明

## 配置 Vite

核心文件源代码在这里:

[vite.config.js 源码](https://github.com/Virkano/docs/blob/main/docs/vite.config.js)

### 示例代码

以下是示例代码，也许是过去的某个版本的，并非一定是最新的，最新代码请查看上述源代码。

文件路径 `docs/vite.config.ts`，如下：

> 遇到提示说需要安装的包，可参考 docs 的 `package.json` 文件中的 `devDependencies` 部分，按需安装即可。

```ts
import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import UnoCSS from 'unocss/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Components from 'unplugin-vue-components/vite'
import { MarkdownTransform } from './.vitepress/plugins/markdownTransform'

export default defineConfig(async () => {
  return {
    server: {
      hmr: {
        overlay: false,
      },
      fs: {
        allow: [resolve(__dirname, '..')],
      },
    },
    plugins: [
      // custom
      MarkdownTransform(),
      // plugins
      Components({
        dirs: resolve(__dirname, '.vitepress/theme/components'),
        include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
        resolvers: [
          IconsResolver({
            componentPrefix: '',
          }),
        ],
        dts: './.vitepress/components.d.ts',
        transformer: 'vue3',
      }),
      Icons({
        compiler: 'vue3',
        autoInstall: true,
        defaultStyle: 'display: inline-block',
      }),
      UnoCSS(),
    ],
  }
})
```

## 配置 UnoCSS

本文档几乎 95% 以上的样式都是使用 UnoCSS，在上述配置文件中已经配置好了，如果你有特殊样式配置，可以参考项目根目录下的 `unocss.config.ts`，可进行相关修改。

目前 UnoCSS 官网上线了，地址在：

[UnoCSS 官网地址](https://unocss.dev/)

可查阅官方文档使用。

### Contributors 组件

这个组件是用来显示贡献者信息的，核心文件源代码在这里：

[Contributors.vue](https://github.com/Virkano/docs/blob/main/docs/.vitepress/theme/components/Contributors.vue)

### CopyRight 组件

这个组件是用来显示版权信息的，核心文件源代码在这里：

[CopyRight.vue](https://github.com/Virkano/docs/blob/main/docs/.vitepress/theme/components/CopyRight.vue)

## 文档页面的顶部信息组件

这个组件用来显示阅读时间和字数等，核心文件源代码在这里：

[PageInfo.vue](https://github.com/Virkano/docs/blob/main/docs/.vitepress/theme/components/PageInfo.vue)

## 文章阅读数统计

在上述的文档页面顶部信息组件里面其实已经看到了，如下代码所示：

```html
<div class="flex gap-[4px] items-center">
  <ph:eye-fill />
  阅读量:<span id="busuanzi_container_page_pv">
    <span id="busuanzi_value_page_pv" />
  </span>
</div>
```

我这里使用的是 `busuanzi`，不过有时候会出现不稳定情况，即不显示阅读数据，小问题。

我们需要在 `docs/.vitepress/theme/index.ts` 路径下引入 `busuanzi`，如下：

```ts {2,10}
// xxx
import busuanzi from 'busuanzi.pure.js'

const theme: Theme = {
  ...DefaultTheme,
  enhanceApp({ router }: EnhanceAppContext) {
    // ...
    if (inBrowser) {
      router.onAfterRouteChanged = (to) => {
        busuanzi.fetch()
      }
    }
  },
  // xxx
}

export default theme
```

这样也是希望能够在路由切换的时候重新获取阅读数据。

## 文档内图片放大镜 🔍 效果

核心插件使用的是 `mediumZoom`，具体引入方式同样也是在 `docs/.vitepress/theme/index.ts`下，如下所示：

```ts {2,11-19}
// xxx
import mediumZoom from 'medium-zoom'

const theme: Theme = {
  ...DefaultTheme,
  enhanceApp({ router }: EnhanceAppContext) {
    // ...
  },
  setup() {
    const route = useRoute()
    const initZoom = () => {
      mediumZoom('.main img', { background: 'var(--vp-c-bg)' })
    }
    onMounted(() => {
      initZoom()
    })
    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    )
  },
}

export default theme
```

## 文档支持 pwa

pwa 使用的是 `vite-plugin-pwa`，具体引入方式可见这里:

[plugins/pwa.ts](https://github.com/chodocs/chodocs/blob/main/docs/.vitepress/theme/plugins/pwa.ts)

```ts
import fg from 'fast-glob'
import { resolve } from 'pathe'
import type { VitePWAOptions } from 'vite-plugin-pwa'
import {
  description,
  githubSourceContentRegex,
  googleFontRegex,
  googleStaticFontRegex,
  jsdelivrCDNRegex,
  name,
} from '../meta'

/**
 * Vite Plugin PWA uses Workbox  library to build the service worker
 * can find more information on Workbox section.
 * @see https://vite-plugin-pwa.netlify.app/
 */
export const pwa: Partial<VitePWAOptions> = {
  outDir: '../dist',
  registerType: 'autoUpdate',
  // include all static assets under public/
  includeAssets: fg.sync('**/*.{png,svg,gif,ico,txt}', {
    cwd: resolve(__dirname, '../../public'),
  }),
  manifest: {
    id: '/',
    name,
    short_name: name,
    description,
    theme_color: '#06f',
    icons: [
      {
        src: '/images/icons/apple-touch-120x120.png',
        sizes: '120x120',
        type: 'image/png',
      },
      {
        src: '/images/icons/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/images/icons/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  },
  workbox: {
    navigateFallbackDenylist: [/^\/new$/],
    globPatterns: ['**/*.{js,css,webp,png,svg,gif,ico,woff2}'],
    navigateFallback: null,
    runtimeCaching: [
      {
        urlPattern: googleFontRegex,
        handler: 'CacheFirst',
        options: {
          cacheName: 'google-font-style-cache',
          expiration: {
            maxEntries: 10,
            maxAgeSeconds: 60 * 60 * 24 * 365, // <== 365 days
          },
          cacheableResponse: {
            statuses: [0, 200],
          },
        },
      },
      {
        urlPattern: googleStaticFontRegex,
        handler: 'CacheFirst',
        options: {
          cacheName: 'google-fonts-cache',
          expiration: {
            maxEntries: 10,
            maxAgeSeconds: 60 * 60 * 24 * 365, // <== 365 days
          },
          cacheableResponse: {
            statuses: [0, 200],
          },
        },
      },
      {
        urlPattern: jsdelivrCDNRegex,
        handler: 'CacheFirst',
        options: {
          cacheName: 'jsdelivr-cdn-cache',
          expiration: {
            maxEntries: 10,
            maxAgeSeconds: 60 * 60 * 24 * 365, // <== 365 days
          },
          cacheableResponse: {
            statuses: [0, 200],
          },
        },
      },
      {
        urlPattern: githubSourceContentRegex,
        handler: 'CacheFirst',
        options: {
          cacheName: 'githubusercontent-images-cache',
          expiration: {
            maxEntries: 10,
            maxAgeSeconds: 60 * 60 * 24 * 365, // <== 365 days
          },
          cacheableResponse: {
            statuses: [0, 200],
          },
        },
      },
    ],
  },
}
```

基本上你只需要修改部分文件以及描述信息即可，文档内通用。

## 文档支持 rss 订阅

这个是前不久做好的功能，核心是使用的 `feed` 库生成的，具体效果可见 `https://chodocs.cn/feed.xml`。

核心代码可见这里:

[genFeed.ts](https://github.com/chodocs/chodocs/blob/main/docs/.vitepress/plugins/genFeed.ts)

以下是示例代码：

```ts
import path from 'node:path'
import { writeFileSync } from 'node:fs'
import { Feed } from 'feed'
import { type SiteConfig, createContentLoader } from 'vitepress'
import { site as baseUrl, description, name } from '../meta'

function reName(name: string) {
  if (!name)
    name = 'Choi Yang'
  return name === 'Choi Yang' ? 'Chocolate1999' : name
}

function getGithubLink(name: string) {
  return `https://github.com/${reName(name)}`
}

export async function genFeed(config: SiteConfig) {
  const feed = new Feed({
    title: name,
    description,
    id: baseUrl,
    link: baseUrl,
    language: 'zh-CN',
    image: 'https://chodocs.cn/chodocs-logo.svg',
    favicon: `${baseUrl}/favicon.ico`,
    copyright: 'Copyright (c) 2022-present, Chocolate and ChoDocs contributors',
  })

  const posts = await createContentLoader('**/*.md', {
    excerpt: true,
    render: true,
  }).load()

  posts.sort(
    (a, b) =>
      +new Date(b.frontmatter?.date as string)
      - +new Date(a.frontmatter?.date as string)
  )

  for (const { url, frontmatter, html } of posts) {
    let postTitle = '无题'
    postTitle = html?.match(/<h1 id=(.*)>(.*?)<a .*?>/)?.[2] || postTitle
    feed.addItem({
      title: frontmatter?.title || postTitle,
      id: `${baseUrl}${url.slice(1)}`,
      link: `${baseUrl}${url.slice(1)}`,
      guid: `${baseUrl}${url.slice(1)}`,
      description: html,
      content: html,
      author: [
        {
          name: frontmatter?.author || 'Choi Yang',
          link: frontmatter?.author
            ? getGithubLink(frontmatter?.author)
            : undefined,
        },
      ],
      date: frontmatter?.date || new Date('2021-07-01'),
    })
  }

  writeFileSync(path.join(config.outDir, 'feed.xml'), feed.rss2())
}
```

核心思路是读取文件，根据文件内容生成 `feed`，然后写入到 `feed.xml` 文件中，关键是相关字段一定要完整，缺一不可，不然生成的 xml 文件能显示但是无法订阅。

## 谷歌分析和百度统计

这个主要是观察网站数据使用，当然 ChoDocs 之后还会集成 umami，以下提供一下对应的文件路径：

- 谷歌分析：`docs/.vitepress/theme/plugins/googleAnalytics.ts`
- 百度统计：`docs/.vitepress/theme/plugins/baidutongji.ts`

## 结语

目前文档还在不断完善，主要还是提供一点思路，如果你在配置过程中遇到了问题，还请提相关 issue，如果解决了也欢迎来提交 pr，参与这个项目在首页会有贡献者头像展示。
