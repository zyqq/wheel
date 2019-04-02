---
title: Collapse 折叠面板
---

# Collapse 折叠面板 <Badge text="beta" type="warn"/> <Badge text="0.0.3+"/>

<ClientOnly>
  <collapse-demo-1></collapse-demo-1>
</ClientOnly>

```html
<w-collapse :selected.sync="slectedTabs">
  <w-collapse-item title="标题1" name="1">内容1</w-collapse-item>
  <w-collapse-item title="标题2" name="2">内容2</w-collapse-item>
  <w-collapse-item title="标题3" name="3">内容3</w-collapse-item>
</w-collapse>
```

<ClientOnly>
  <collapse-demo-2></collapse-demo-2>
</ClientOnly>

```html
<w-collapse :selected.sync="slectedTabs" single>
  <w-collapse-item title="标题1" name="1">内容1</w-collapse-item>
  <w-collapse-item title="标题2" name="2">内容2</w-collapse-item>
  <w-collapse-item title="标题3" name="3">内容3</w-collapse-item>
</w-collapse>
```

<collapse-attributes></collapse-attributes>
<collapse-item-attributes></collapse-item-attributes>
