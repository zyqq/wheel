---
title: Toast 提示
---

# Toast 提示 <Badge text="pass" type="success"/> <Badge text="0.0.3+"/>

<ClientOnly>
  <toast-demo-1></toast-demo-1>
</ClientOnly>

```html
<style>
  .gulu-toast {
    z-index: 30;
  }
</style>
<w-button @click="$toast('点击弹出提示'), {position:'top'}">上方弹出</w-button>
<w-button @click="$toast('点击弹出提示', {position:'middle'})">中间弹出</w-button>
<w-button @click="$toast('点击弹出提示', {position:'bottom'})">下方弹出</w-button>
```

<ClientOnly>
  <toast-demo-2></toast-demo-2>
</ClientOnly>

```html
<style>
  .gulu-toast {
    z-index: 30;
  }
</style>

<div>
  <w-button @click="onClickButton">上方弹出</w-button>
</div>
```

```js
methods: {
  onClickButton () {
    this.$toast('你知道我在等你吗？', {
      closeButton: {
        text: '知道了',
        callback: () => {
          console.log('他说知道了')
        }
      }
    })
  }
},
```

<ClientOnly>
  <toast-demo-3></toast-demo-3>
</ClientOnly>

```html
<style>
  .gulu-toast {
    z-index: 30;
  }
</style>

<div>
  <w-button @click="onClickButton">上方弹出</w-button>
</div>
```

```js
methods: {
  onClickButton () {
    this.$toast('你知道我在等你吗？', {
      closeButton: {
        text: '知道了',
        callback: () => {
          console.log('他说知道了')
        }
      }
    })
  }
},
```

<toast-attributes></toast-attributes>