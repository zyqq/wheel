const path = require('path')
module.exports = {
  base: '/wheel/',
  title: '🚲 EchoWheel UI',
  description: '一套为开发者学习准备的基于 Vue 2.0 的移动端和 PC 端组件库',
  head: [
    ['link', { rel: 'icon', href: '/img/wheel.png', type: 'image/png' }]
  ],
  themeConfig: {
    repo: 'zyqq/wheel',// 默认是 false, 设置为 true 来启用
    lastUpdated: 'Last Updated',
    // editLinks: true,
    nav: [
      {text: '主页', link: '/'},
      {text: '指南', link: '/guide/'},
      {text: '交流', link: 'https://github.com/zyqq/wheel/issues'},
    ],
    sidebarDepth: 2,
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
          '/components/icon',
          '/components/button',
          '/components/tabs',
          '/components/input',
          '/components/grid',
          '/components/layout',
          '/components/toast',
          '/components/popover',
          '/components/collapse',
          '/components/slides',
          '/components/cascader',
          '/components/date-picker',
          '/components/sticky',
          '/components/pager',
          '/components/nav',
          '/components/uploader',
          '/components/validate',
          '/components/scroll',
          '/components/table',
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
