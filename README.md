# 轮子 -- 一个用 Vue 写的 UI 框架

作者: Echo

## 安装
`npm install echo-wheel` 或者 `yarn add echo-wheel`
使用此框架前，请再 css 中开启 border-box

```
* {
  box-sizing: border-box;
}
```

## 使用

在使用组件的页面中引入所需组件及样式

```
import { Button } from 'echo-wheel'
import 'echo-wheel/dist/index.css'
```

在Vue实例中声明组件
```
export defult {
  components: {
    'w-button': Button
  }
}
```

添加默认主题样式
```
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

之后便可在template中引用组件
```
<w-buttton>欢迎使用轮子组件<w-button>
```
