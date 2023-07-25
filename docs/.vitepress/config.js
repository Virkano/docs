import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '小破站 🍉', //站点标题
  titleTemplate: ":title - Kano's little shitty station",
  description: '前端小破站 🍉', //mate标签description，多用于搜索引擎抓取摘要
  head: [['link', { rel: 'icon', href: '/Kano.jpg' }]],

  search: {
    provider: 'local',
  },
  lastUpdated: true,

  themeConfig: {
    siteTitle: 'Kano',
    logo: '/Kano.jpg',
    nav: [
      { text: '首页', link: '/' },
      { text: '开始阅读', link: '/start/index' },
    ],
    socialLinks: [{ icon: 'github', link: 'https://github.com/Virkano' }],
    sidebar: [
      {
        text: '开始阅读',
        link: '/start/index',
      },
      {
        text: '🍎 项目',
        collapsible: true,
        collapsed: true,
        items: [
          {
            text: '摄像头',
            link: '/project/camera',
          },
        ],
      },
      {
        text: '🥚 技术栈',
        items: [
          {
            text: '🍊 Electron',
            collapsible: true,
            collapsed: true,
            items: [
              {
                text: 'Electron 快速入门关键技术点',
                link: '/electron/index',
              },
            ],
          },
          {
            text: '🍇 Node.js',
            collapsible: true,
            collapsed: true,
            items: [
              {
                text: 'Windows 支持 heic 图片显示',
                link: '/node/index',
              },
            ],
          },
          {
            text: '🍒 Vue.js',
            collapsible: true,
            collapsed: true,
            items: [
              {
                text: 'Vue.js 文章',
                link: '/vue/index',
              },
            ],
          },
          {
            text: '🥑 Docker',
            collapsible: true,
            collapsed: true,
            items: [
              {
                text: 'Docker 文章',
                link: '/docker/index',
              },
            ],
          },
          {
            text: '🥭 Git',
            collapsible: true,
            collapsed: true,
            items: [
              {
                text: 'Git 文章',
                link: '/git/index',
              },
            ],
          },
          {
            text: '🥭 Nginx',
            collapsible: true,
            collapsed: true,
            items: [
              {
                text: 'Nginx 文章',
                link: '/nginx/index',
              },
            ],
          },
          {
            text: '🍅 TypeScript',
            collapsible: true,
            collapsed: true,
            items: [
              {
                text: 'TypeScript 文章',
                link: '/typescript/index',
              },
            ],
          },
        ],
      },
      {
        text: '📈 技术调研',
        collapsible: true,
        collapsed: true,
        items: [
          {
            text: '大屏自适应解决方案',
            link: '/findScience/screen',
          },
          {
            text: '约束和统一前端代码规范',
            link: '/findScience/code-specification',
          },
          {
            text: '配置 Git 提交规范',
            link: '/findScience/submit-specification',
          },
        ],
      },
    ],
  },
})
