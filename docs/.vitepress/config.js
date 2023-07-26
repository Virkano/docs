import { defineConfig } from 'vitepress'
import algolia from './algolia.js'
import sidebar from './sidebar.js'

export default defineConfig({
  title: '小破站 🍉', //站点标题
  titleTemplate: ":title - Kano's little shitty station",
  description: '前端小破站 🍉', //mate标签description，多用于搜索引擎抓取摘要
  head: [['link', { rel: 'icon', href: '/Kano.jpg' }]],
  lastUpdated: true,
  markdown: {
    lineNumbers: true,
  },
  locales: {
    root: { label: '简体中文', lang: 'zh-CN' },
  },
  themeConfig: {
    siteTitle: 'Kano',
    logo: '/Kano.jpg',
    outline: 'deep',
    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },
    returnToTopLabel: '返回顶部',
    outlineTitle: '导航栏',
    darkModeSwitchLabel: '外观',
    sidebarMenuLabel: '归档',
    lastUpdatedText: '最后一次更新于',
    nav: [
      { text: '💭 开始阅读', link: '/guide' },
      {
        text: '🔥 专栏',
        items: [
          { text: '🔥 前端算法', link: '/algorithm/guide/' },
          { text: '🔥 设计模式', link: '/patterns/guide/' },
          { text: '📋 面试大全', link: '/interview/' },
        ],
      },
      {
        text: '编程',
        items: [
          { text: '⭐ 资源导航', link: '/favorites' },
          { text: '💻 编程学习', link: '/program/' },
          { text: '🔧 编程工具', link: '/tool/' },
        ],
      },
      {
        text: '洞见',
        items: [
          { text: '✏️ 随笔', link: '/essay/' },
          { text: '🌱 青葱岁月', link: '/green/ch' },
        ],
      },
    ],
    socialLinks: [{ icon: 'github', link: 'https://github.com/Virkano' }],
    sidebar,
    algolia,
  },
})
