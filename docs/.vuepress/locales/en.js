const nav = require('./utils/nav').default
const sidebar = require('./utils/sidebar').default

const i18n = {
  path: '/en/',
  guide: 'Guide',
  changelog: 'Changelog',
  essentials: 'Essentials',
  advanced: 'Advanced'
}

// 站点配置
exports.default = {
  lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
  title: 'iHelper',
  description: 'a desktop helper.'
}

// 主题配置
exports.theme = {
  selectText: 'Languages',

  label: 'English',

  ariaLabel: 'Languages',

  editLinkText: 'Edit this page on GitHub',

  lastUpdated: 'Last updated',

  // 页头导航
  nav: nav(i18n),

  // 侧边栏
  sidebar: sidebar(i18n)
}
