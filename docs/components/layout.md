---
title: Layout 布局
---
# Layout 布局 <Badge text="pass" type="success"/> <Badge text="0.0.3+"/>

<ClientOnly>
  <layout-demo-1></layout-demo-1>
</ClientOnly>

```html
<w-layout style="color: white; margin-bottom:50px;">
  <w-header style="display:flex;justify-content: center;align-items: center;height: 50px; background:lightskyblue;">
    header
  </w-header>
  <w-content style="display:flex;justify-content: center;align-items: center;height: 100px; background:deepskyblue;">
    content
  </w-content>
  <w-footer style="display:flex;justify-content: center;align-items: center;height: 50px; background:lightskyblue;">
    footer
  </w-footer>
</w-layout>
```

<ClientOnly>
  <layout-demo-2></layout-demo-2>
</ClientOnly>

```html
<w-layout style="color: white; overflow:hidden; margin-bottom:50px;">
  <w-header style="display:flex;justify-content: center;align-items: center;height: 50px; background:lightskyblue;">
    header
  </w-header>
  <w-layout>
    <w-sider style="display:flex;justify-content: center;align-items: center;height: 100px; background:#03a9f4d9; width:200px; color: black;">
      sider
    </w-sider>
    <w-content style="display:flex;justify-content: center;align-items: center;height: 100px; background:deepskyblue;">
      content
    </w-content>
  </w-layout>
  <w-footer style="display:flex;justify-content: center;align-items: center;height: 50px; background:lightskyblue;">
    footer
  </w-footer>
</w-layout>
```

<ClientOnly>
  <layout-demo-3></layout-demo-3>
</ClientOnly>

```html
<w-layout style="color: white; overflow:hidden; margin-bottom:50px;">
  <w-sider style="display:flex;justify-content: center;align-items: center; background:#03a9f4d9; width:200px; color: white;">
    sider
  </w-sider>
  <w-layout>
    <w-header style="display:flex;justify-content: center;align-items: center;height: 50px; background:lightskyblue;">
      header
    </w-header>
    <w-content style="display:flex;justify-content: center;align-items: center;height: 100px; background:deepskyblue;">
      content
    </w-content>
    <w-footer style="display:flex;justify-content: center;align-items: center;height: 50px; background:lightskyblue;">
      footer
    </w-footer>
  </w-layout>
</w-layout>
```