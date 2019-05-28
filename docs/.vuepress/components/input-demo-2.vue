<template>
  <div style="padding-top: 16px;">
    <h2>📌 双向绑定</h2>
    <p>
      <strong>预览</strong>
    </p>
    <w-input v-model="value"></w-input>
    <div style="margin-top: 20px">
      value: {{value}}
    </div>

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
        value: '1',
        content: `
          data:{
            value: '1'
          }

          <w-input v-model="value"></w-input>
          <div style="margin-top: 20px">
            value: {{value}}
          </div>
      `.replace(/^ {8}/gm, '').trim()
      }
    }
  }
</script>