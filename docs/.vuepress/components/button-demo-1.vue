<template>
  <div style="padding-top: 16px;">
    <h2>简单用法</h2>
    <p>
      <strong>预览</strong>
    </p>
    <w-button>默认按钮</w-button>
    <w-button icon="setting">带 icon 按钮</w-button>
    <w-button :loading="true">加载按钮</w-button>
    <w-button disabled>禁用按钮</w-button>

    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
  import Button from '../../../src/button'

  export default {
    components: {
      'w-button': Button
    },
    data () {
      return {
        content: `
          <w-button>默认按钮</w-button>
          <w-button icon="settings">默认按钮</w-button>
          <w-button :loading="true">默认按钮</w-button>
          <w-button disabled>默认按钮</w-button>
      `.replace(/^ {8}/gm, '').trim()
      }
    }
  }
</script>