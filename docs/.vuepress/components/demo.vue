<template>
  <div class="demo">
    <h2>📌 简单用法</h2>
    <p>
      <strong>预览</strong>
    </p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <w-button>默认按钮</w-button>
        <w-button icon="setting">带 icon 按钮</w-button>
        <w-button :loading="true">加载按钮</w-button>
        <w-button disabled>禁用按钮</w-button>
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
          <w-button>默认按钮</w-button>
          <w-button icon="settings">默认按钮</w-button>
          <w-button :loading="true">默认按钮</w-button>
          <w-button disabled>默认按钮</w-button>
        `.replace(/^ {8}/gm, '').trim()
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
