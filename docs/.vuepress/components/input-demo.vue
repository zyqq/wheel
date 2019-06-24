<template>
  <div class="demo">
    <h2>📌 简单用法</h2>
    <p>
      <strong>预览</strong>
    </p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <w-input></w-input>
        <w-input value="中文"></w-input>
        <w-input value="中文" disabled></w-input>
        <w-input value="中文" readonly></w-input>      
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

    <h2>📌 双向绑定</h2>
    <p>
      <strong>预览</strong>
    </p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <w-input v-model="value"></w-input>
        <div style="margin-top: 20px">
          value: {{value}}
        </div>
      </div>
      <div class="code-content" v-highlight style="height: 0;">
        <div class="code-content-height">
          <pre><code class="html">{{codeStr2}}</code></pre>
        </div>
      </div>
      <div class="lock-code" @click="showCode(1)" ref="xxx">
        <w-icon class="icon-down" :name="isShow[1] === false ? 'down' : 'up'"></w-icon>
        <span class="lock-code-word">{{isShow[1] === false ? '显示代码' : '隐藏代码'}}</span>
      </div>
    </div>
  </div>
</template>
<script>
  import WInput from '../../../src/input/input'
  import WIcon from '../../../src/icon/icon'
  import mixin from '../mixin'

  export default {
    components: {WInput, WIcon},
    mixins: [mixin],
    data () {
      return {
        value: '1',
        selected: '1',
        codeStr: `
          <w-input></w-input>
          <w-input value="中文"></w-input>
          <w-input value="中文" disabled></w-input>
          <w-input value="中文" readonly></w-input>
        `.replace(/^ {8}/gm, '').trim(),
        codeStr2: `
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