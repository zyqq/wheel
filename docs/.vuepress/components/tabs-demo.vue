<template>
  <div class="demo">
    <h2>📌 简单用法</h2>
    <p>
      <strong>预览</strong>
    </p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <w-tabs :selected="selected">
          <w-tabs-head>
            <w-tabs-item name="1">1</w-tabs-item>
            <w-tabs-item name="2">2</w-tabs-item>
          </w-tabs-head>
          <w-tabs-body>
            <w-tabs-pane name="1">content 1</w-tabs-pane>
            <w-tabs-pane name="2">content 2</w-tabs-pane>
          </w-tabs-body>
        </w-tabs>
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
  import WTabs from '../../../src/tabs/tabs'
  import WTabsBody from '../../../src/tabs/tabs-body'
  import WTabsHead from '../../../src/tabs/tabs-head'
  import WTabsItem from '../../../src/tabs/tabs-item'
  import WTabsPane from '../../../src/tabs/tabs-pane'
  import WIcon from '../../../src/icon/icon'
  import mixin from '../mixin'

  export default {
    components: {WTabs, WTabsBody, WTabsHead, WTabsItem, WTabsPane, WIcon},
    mixins: [mixin],
    data () {
      return {
        selected: '1',
        codeStr: `
          data:{
            selected: '1'
          }

          <w-tabs :selected="selected">
            <w-tabs-head>
              <w-tabs-item name="1">1</w-tabs-item>
              <w-tabs-item name="2">2</w-tabs-item>
            </w-tabs-head>
            <w-tabs-body>
              <w-tabs-pane name="1">content 1</w-tabs-pane>
              <w-tabs-pane name="2">content 2</w-tabs-pane>
            </w-tabs-body>
          </w-tabs>
      `.replace(/^ {8}/gm, '').trim()
      }
    }
  }
</script>