<template>
  <div>
    <w-button>默认按钮</w-button>
    <w-button icon="setting">默认按钮</w-button>
    <w-button :loading="true">默认按钮</w-button>
    <w-button disabled>默认按钮</w-button>

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
          <w-button icon="setting">默认按钮</w-button>
          <w-button :loading="true">默认按钮</w-button>
          <w-button disabled>默认按钮</w-button>
      `.replace(/\t+| +/g, '').trim()
      }
    }
  }
</script>
