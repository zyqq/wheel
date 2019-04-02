---
title: Popover 弹出层
---

# Popover 弹出层 <Badge text="pass" type="success"/> <Badge text="0.0.3+"/>

<ClientOnly>
  <popover-demo-1>
  </popover-demo-1>
</ClientOnly>

```html
<w-popover>
  <w-button>上方弹出</w-button>
  <template slot="content">
    弹出内容
  </template>
</w-popover>
<w-popover position="bottom">
  <w-button>下方弹出</w-button>
  <template slot="content">
    弹出内容
  </template>
</w-popover>
<w-popover position="left">
  <w-button>左边弹出</w-button>
  <template slot="content">
    弹出内容
  </template>
</w-popover>
<w-popover position="right">
  <w-button>右边弹出</w-button>
  <template slot="content">
    弹出内容
  </template>
</w-popover>
```

<ClientOnly>
  <popover-demo-2>
  </popover-demo-2>
</ClientOnly>

```html
<w-popover trigger="hover">
  <w-button>上方弹出</w-button>
  <template slot="content">
    弹出内容
  </template>
</w-popover>
<w-popover position="bottom" trigger="hover">
  <w-button>下方弹出</w-button>
  <template slot="content">
    弹出内容
  </template>
</w-popover>
<w-popover position="left" trigger="hover">
  <w-button>左边弹出</w-button>
  <template slot="content">
    弹出内容
  </template>
</w-popover>
<w-popover position="right" trigger="hover">
  <w-button>右边弹出</w-button>
  <template slot="content">
    弹出内容
  </template>
</w-popover>
```

<popover-attributes></popover-attributes>