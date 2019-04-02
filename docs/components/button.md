---
title: Button 按钮
---

# Button 按钮 <Badge text="pass" type="success"/> <Badge text="0.0.1+"/>

<ClientOnly>
  <button-demo-1></button-demo-1>
</ClientOnly>

```html
<w-button>默认按钮</w-button>
<w-button icon="settings">默认按钮</w-button>
<w-button :loading="true">默认按钮</w-button>
<w-button disabled>默认按钮</w-button>
```

<ClientOnly>
  <button-demo-2></button-demo-2>
</ClientOnly>

```html
<w-button-group>
  <w-button icon="left">
    上一页
  </w-button>
  <w-button>
    更多
  </w-button>
  <w-button icon="right">
    下一页
  </w-button>
</w-button-group>
```

<button-attributes>
</button-attributes>
