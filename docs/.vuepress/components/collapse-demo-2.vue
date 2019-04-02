<template>
  <div style="padding-top: 16px;">
    <h2>📌 手风琴效果</h2>
    <p>
      <strong>预览</strong>
    </p>
    <w-collapse :selected.sync="slectedTabs" single>
      <w-collapse-item title="标题1" name="1">内容1</w-collapse-item>
      <w-collapse-item title="标题2" name="2">内容2</w-collapse-item>
      <w-collapse-item title="标题3" name="3">内容3</w-collapse-item>
    </w-collapse>

    <p>
      <strong>代码</strong>
    </p>
    <!-- <pre><code>{{content}}</code></pre> -->
  </div>
</template>
<script>
  import WCollapse from '../../../src/collapse'
  import WCollapseItem from '../../../src/collapse-item'

  export default {
    components: {
      WCollapse,
      WCollapseItem
    },
    data () {
      return {
        content: `
          <w-collapse :selected.sync="slectedTabs" single>
            <w-collapse-item title="标题1" name="1">内容1</w-collapse-item>
            <w-collapse-item title="标题2" name="2">内容2</w-collapse-item>
            <w-collapse-item title="标题3" name="3">内容3</w-collapse-item>
          </w-collapse>
      `.replace(/^ {8}/gm, '').trim(),
        slectedTabs: []
      }
    }
  }
</script>