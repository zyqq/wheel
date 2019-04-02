<template>
  <div style="padding-top: 16px;">
    <h2>📌 简单用法</h2>
    <p>
      <strong>预览</strong>
    </p>
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

    <p>
      <strong>代码</strong>
    </p>
    <!-- <pre><code>{{content}}</code></pre> -->
  </div>
</template>
<script>
  import WTabs from '../../../src/tabs'
  import WTabsBody from '../../../src/tabs-body'
  import WTabsHead from '../../../src/tabs-head'
  import WTabsItem from '../../../src/tabs-item'
  import WTabsPane from '../../../src/tabs-pane'

  export default {
    components: {WTabs, WTabsBody, WTabsHead, WTabsItem, WTabsPane},
    data () {
      return {
        selected: '1',
        content: `
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