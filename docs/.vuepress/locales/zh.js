const nav = require('./utils/nav').default
const sidebar = require('./utils/sidebar').default

const i18n = {
  path: '/',
  guide: '教程',
  changelog: '更新日志',
  essentials: '使用',
  advanced: '开发者'
}

// 站点配置
exports.default = {
  lang: 'zh-CN',
  title: 'iHelper',
  description: '桌面助手'
}

// 主题配置
exports.theme = {
  // 多语言下拉菜单的标题
  selectText: 'Languages',

  // 该语言在下拉菜单中的标签
  label: '简体中文',

  // 编辑链接文字
  editLinkText: '在 GitHub 上编辑此页',

  lastUpdated: '上次更新',

  // 页头导航
  nav: nav(i18n),

  // 侧边栏
  sidebar: sidebar(i18n)
}
