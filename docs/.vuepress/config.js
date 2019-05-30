const path = require('path')
module.exports = {
  base: '/wheel/',
  title: '🚲 EchoWheel UI',
  description: '一套为开发者学习准备的基于 Vue 2.0 的移动端和 PC 端组件库',
  head: [
    ['link', { rel: 'shortcut icon', href: '../../img/logo.ico' }]
  ],
  themeConfig: {
    repo: 'zyqq/wheel',// 默认是 false, 设置为 true 来启用
    lastUpdated: 'Last Updated',
    // editLinks: true,
    nav: [
      {text: '主页', link: '/'},
      {text: '文档', link: '/guide/'},
      {text: '交流', link: 'https://github.com/zyqq/wheel/issues'},
    ],
    sidebar: [
      {
        title: '入门',
        collapsable: false,
        children: [
          '/install/',
          '/get-started/',
        ]
      },
      {
        title: '组件',
        collapsable: false,
        children: [
          '/components/button',
          '/components/tabs',
          '/components/input',
          '/components/grid',
          '/components/layout',
          '/components/toast',
          '/components/popover',
          '/components/collapse',
          '/components/slides'
        ]
      },

    ]
  },
  scss:{
    includePaths: [path.join(__dirname, '../../styles')]
  },
  markdown: {
    lineNumbers: true
  }
}
