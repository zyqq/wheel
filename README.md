
<p align="center">
  <a href="https://github.com/zyqq/wheel" target="_blank" rel="noopener noreferrer">
    <img width="100" src="img/轮子.png" alt="Echo Wheel logo">
  </a>
</p>

<p align="center">
  <a href="https://travis-ci.org/zyqq/wheel" target="_blank">
    <img src="https://travis-ci.org/zyqq/wheel.svg?branch=master" alt="Build Status">
  </a>
  <a href="https://npmcharts.com/compare/echo-wheel?minimal=true" target="_blank">
    <img src="https://img.shields.io/npm/dm/echo-wheel.svg" alt="Downloads">
  </a>
  <a href="https://www.npmjs.com/package/echo-wheel" target="_blank">
    <img src="https://img.shields.io/npm/v/echo-wheel.svg" alt="Version">
  </a>
  <a href="https://www.npmjs.com/package/echo-wheel" target="_blank">
    <img src="https://img.shields.io/npm/l/echo-wheel.svg" alt="License">
  </a>
</p>

<h2 align="center">Echo Wheel -- 一个用 Vue 写的 UI 框架</h2>

# 介绍

这是我在学习 Vue 中写的一个 UI 框架，希望对你有用。可查看  [官方文档](https://zyqq.github.io/wheel/) 预览 👀

## 开始使用

1. 添加 css 样式

    使用此框架前，请再 css 中开启 border-box

    ```css
    *, *::before, *::after {
      box-sizing: border-box;
    }
    ```

    IE8 及以上浏览器均支持此样式

    你还需要设置默认样式等变量（后续会改为 SCSS 变量）

    ```css
    :root {
      --button-height: 32px;
      --button-bg: white;
      --button-active-bg: #eee;
      --font-size: 14px;
      --border-radius: 4px;
      --color: #999;
      --border-color: #999;
      --border-color-hover: #666;
    }
    ```

    IE15 及以上浏览器均支持此样式

2. 安装 echo-wheel

    `npm install --save echo-wheel` 或者 `yarn add echo-wheel`

3. 引入 echo-wheel

    ```js
    import { Button } from 'echo-wheel'
    import 'echo-wheel/dist/echo-wheel.css'

    export defult {
      components: {
        'w-button': Button
      }
    }
    ```

4. 使用组件

    ```html
      <w-buttton>欢迎使用轮子组件<w-button>
    ```

## 提问

欢迎 [提issue](https://github.com/zyqq/wheel/issues)

## 变更记录

- 简单轮子：按钮、输入框、网格、布局、Toast、Tabs、Popover、手风琴（代码已完成）
- 进阶轮子：级联选择、无缝轮播、响应式导航条、分页、表单验证、Table、图片上传、Sticky（代码已完成）
- 高级轮子：Tree、Suggestion、Datepicker（代码未完成）
- 其他：路由、状态管理（代码未完成）

详情变更记录在 [releases](https://github.com/zyqq/wheel/releases).

## 联系方式

可扫描以下二维码添加本人微信公众号留言😄

<a href="https://github.com/zyqq/wheel/graphs/contributors">
  <img src="/img/Echo_252545095.jpg" width="300" />
</a>

## 贡献代码

每个分支名称代表完成组件名，目前提交顺序是

> `button-and-input` -> `row-and-col` -> `grid-and-layout` -> `toast` -> `tabs` -> `popover` -> `collapse`

可按照此顺序查看分支以获得具体组件完成时的提交记录，按此学习编写组件的源代码。欢迎有想法有需求的小伙伴 [提issue](https://github.com/zyqq/wheel/issues) 或者一起来造轮子 😊

感谢以下贡献者😄：

<a href="https://github.com/zyqq/wheel/graphs/contributors">
  <img src="img/avatar.jpeg" width="40" />
</a>

## 证书

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2019-present, Yiqiu (Echo) Zheng
