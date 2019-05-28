<template>
  <div style="padding-top: 16px;">
    <h2>📌 简单用法</h2>
    <p>
      <strong>预览</strong>
    </p>
    <w-input value="中文"></w-input>
    <w-input value="中文" disabled></w-input>
    <w-input value="中文" readonly></w-input>

    <p>
      <strong>代码</strong>
    </p>
    <!-- <pre><code>{{content}}</code></pre> -->
  </div>
</template>
<script>
  import WInput from '../../../src/input/input'

  export default {
    components: {WInput},
    data () {
      return {
        selected: '1',
        content: `
          <w-input></w-input>
          <w-input value="中文"></w-input>
          <w-input value="中文" disabled></w-input>
          <w-input value="中文" readonly></w-input>
      `.replace(/^ {8}/gm, '').trim()
      }
    }
  }
</script>