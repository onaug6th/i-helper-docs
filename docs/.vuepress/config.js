// 引入多语言配置
const { default: localeZh, theme: localeZhTheme } = require('./locales/zh')
const { default: localeEn, theme: localeEnTheme } = require('./locales/en')

module.exports = {
  head: [
    ['link', { rel: 'icon', href: 'https://web-pet-1253668581.cos.ap-chengdu.myqcloud.com/default.png' }]
  ],

  // 基础路径
  base: '/i-helper-docs/',

  // 输出目录
  dest: 'dist/docs',

  host: 'localhost',

  // 多语言
  locales: {
    '/': localeZh,
    '/en/': localeEn
  },

  // 主题配置
  themeConfig: {
    locales: {
      '/': localeZhTheme,
      '/en/': localeEnTheme
    },

    // Demo路径
    demoUrl: 'https://github.com/onaug6th/i-helper-plugin',

    // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
    repo: 'onaug6th/i-helper',

    repoLabel: 'GitHub',

    docsBranch: 'dev',

    // Algolia 搜索
    algolia: {
      apiKey: 'xxxxxxxxxxx',
      indexName: 'i-helper'
    }
  },

  // markdow 配置
  markdown: {
    lineNumbers: true,
  },

  plugins: {
    '@vuepress/pwa': {
      serviceWorker: true,
      updatePopup: true
    },
    '@vuepress/back-to-top': true
  }
}
