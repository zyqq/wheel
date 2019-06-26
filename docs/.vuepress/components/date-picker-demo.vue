<template>
  <div class="demo">
    <h2>📌 简单用法</h2>
    <p>
      <strong>预览</strong>
    </p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <w-date-picker v-model="value"></w-date-picker>
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
import WDatePicker from '../../../src/date-picker/date-picker'
import WIcon from '../../../src/icon/icon'
import mixin from '../mixin'
export default {
  name: 'demo',
  mixins: [mixin],
  components: {
    WDatePicker,
    WIcon
  },
  data() {
    return {
      value: new Date(),
      codeStr: `
        <w-date-picker v-model="value"></w-date-picker>
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
