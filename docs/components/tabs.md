---
title: Tabs 标签
---
# Tabs 标签 <Badge text="pass" type="success"/> <Badge text="0.0.3+"/>

<ClientOnly>
  <tabs-demo-1></tabs-demo-1>
</ClientOnly>

```html
data:{
  selected: '1'
}

<w-tabs :selected="selected">
  <w-tabs-head>
    <w-tabs-item name="1">1</w-tabs-item>
    <w-tabs-item name="2">2</w-tabs-item>
  </w-tabs-head>
  <w-tabs-body>
    <w-tabs-pane name="1">content 1</w-tabs-pane>
    <w-tabs-pane name="2">content 2</w-tabs-pane>
  </w-tabs-body>
</w-tabs>
```

<tabs-attributes></tabs-attributes>
<tabs-item-attributes></tabs-item-attributes>
<tabs-pane-attributes></tabs-pane-attributes>