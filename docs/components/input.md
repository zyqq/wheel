---
title: Input 输入框
---
# Input 输入框 <Badge text="pass" type="success"/> <Badge text="0.0.2+"/>

<ClientOnly>
  <input-demo-1></input-demo-1>
</ClientOnly>

```html
<w-input></w-input>
<w-input value="中文"></w-input>
<w-input value="中文" disabled></w-input>
<w-input value="中文" readonly></w-input>
```

<ClientOnly>
  <input-demo-2></input-demo-2>
</ClientOnly>

```html
data(){
  return {
    value: '1'
  }
}

<w-input v-model="value"></w-input>
<div style="margin-top: 20px">
  value: {{value}}
</div>
```

<input-attributes></input-attributes>