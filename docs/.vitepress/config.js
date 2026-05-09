import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'keepxtcopen',
  description: '小天才系列设备的封闭机制、权限管控、账号封禁策略、内核闭源现状与生态壁垒问题',
  lang: 'zh-CN',

  base: '/keepxtcopen/',

  head: [
    ['link', { rel: 'alternate', type: 'application/rss+xml', title: 'keepxtcopen 最新消息', href: '/keepxtcopen/news/rss.xml' }],
  ],

  themeConfig: {
    logo: false,

    nav: [
      { text: '首页', link: '/' },
      { text: '最新消息', link: '/news/' },
      { text: 'GPL违规', link: '/gpl-violation' },
      { text: '霸王条款', link: '/eula-tyranny' },
      { text: '云控封号', link: '/cloud-ban' },
      { text: '社交垄断', link: '/social-monopoly' },
      { text: '1.20事件', link: '/jan20-incident' },
      { text: '我该怎么做', link: '/what-to-do' },
    ],

    sidebar: [
      { text: '文档首页', link: '/' },
      {
        text: '最新消息',
        link: '/news/',
        items: [
          { text: '2026-01-20 好友圈功能大改', link: '/news/2026-01-20' },
        ],
      },
      { text: 'GPL违规：闭源安卓内核', link: '/gpl-violation' },
      { text: '用户协议霸王条款', link: '/eula-tyranny' },
      { text: '云控与封号机制', link: '/cloud-ban' },
      { text: '社交垄断与生态壁垒', link: '/social-monopoly' },
      { text: '1.20事件：好友圈功能大改', link: '/jan20-incident' },
      { text: '我该怎么做', link: '/what-to-do' },
      { text: '最后说几句', link: '/closing' },
    ],

    footer: {
      message: '保留所有权利 — 内容采用 CC0 1.0许可',
    },

    search: {
      provider: 'local',
    },
  },

  lastUpdated: true,
  cleanUrls: true,
})
