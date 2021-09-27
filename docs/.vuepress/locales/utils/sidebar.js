exports.default = (i18n) => ({
  [`${i18n.path}guide/`]: [
    '',
    'installation',
    {
      title: i18n.essentials,
      collapsable: false,
      children: [
        'essentials/'
      ]
    },
    {
      title: i18n.advanced,
      collapsable: false,
      children: [
        'advanced/new-plugin',
        'advanced/plugin-config'
      ]
    }
  ]
})
