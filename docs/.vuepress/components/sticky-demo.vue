<template>
  <div class="demo">
    <h2>📌 简单用法</h2>
    <p>
      <strong>预览</strong>
    </p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <w-sticky :distance="100">
          <div style="border:1px solid green;text-align:center;">粘滞内容</div>
        </w-sticky>
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
  import WSticky from '../../../src/sticky/sticky'
  import WIcon from '../../../src/icon/icon'
  import mixin from '../mixin'

  export default {
    components: {
      WSticky, WIcon
    },
    mixins: [mixin],
    data () {
      return {
        codeStr: `
          <w-sticky :distance="100">
            <div style="border:1px solid green;text-align:center;">粘滞内容</div>
          </w-sticky>
      `.replace(/^ {8}/gm, '').trim()
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import 'var';
  .box{
    height: 300px;
    background: $blue;
    color: white;
    font-size: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  } 
</style>