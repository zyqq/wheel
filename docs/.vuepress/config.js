const path = require('path')
module.exports = {
  base: '/wheel/',
  title: 'EchoWheel UI',
  description: '一个好用的UI框架',
  head: [
    ['link', { rel: 'shortcut icon', href: '../../img/logo.ico' }]
  ],
  themeConfig: {
    nav: [
      {text: '主页', link: '/home/'},
      {text: '文档', link: '/'},
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
          '/components/popover'
        ]
      },

    ]
  },
  scss:{
    includePaths: [path.join(__dirname, '../../styles')]
  }
}
