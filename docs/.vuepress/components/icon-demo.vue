<template>
  <div class="demo">
    <h2>📌 简单用法</h2>
    <p>
      <strong>预览</strong>
    </p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <w-icon name="success"></w-icon>
        <w-icon name="thumbs-up"></w-icon>
        <w-icon name="setting"></w-icon> 
        <w-button icon="download">下载</w-button>        
      </div>
      <div class="code-content" v-highlight style="height: 0;">
        <div class="code-content-height">
          <pre><code class="html">{{codeStr}}</code></pre>
        </div>
      </div>
      <div class="lock-code" @click="showCode(0)" ref="xxx">
        <w-icon class="icon-down" :name="isShow[0] === false ? 'down' : 'up'"></w-icon>
        <span class="lock-code-word">{{isShow[0] === false ? '显示代码' : '隐藏代码'}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  import WButton from '../../../src/button/button'
  import WIcon from '../../../src/icon/icon'
  import mixin from '../mixin'
  export default {
    name: 'demo',
    mixins: [mixin],
    components: {
      WButton,
      WIcon
    },
    data() {
      return {
        codeStr: `
          <w-icon name="success"></w-icon>
          <w-icon name="thumbs-up"></w-icon>
          <w-icon name="setting"></w-icon> 
          <w-button icon="download">下载</w-button>  
        `.replace(/^ {8}/gm, '').trim()
      }
    }
  }
</script>

<style lang="scss" scoped>
.component-wrapper-demo {
  display: flex;
  align-items: center;
  svg {
    font-size: 24px;
    margin: 0 10px;
  }
  button {
    margin: 0 10px;
  }
}
</style>
