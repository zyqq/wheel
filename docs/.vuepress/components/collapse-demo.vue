<template>
  <div class="demo">
    <h2>📌 简单用法</h2>
    <p>
      <strong>预览</strong>
    </p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <w-collapse :selected.sync="slectedTabs">
          <w-collapse-item title="标题1" name="1">内容1</w-collapse-item>
          <w-collapse-item title="标题2" name="2">内容2</w-collapse-item>
          <w-collapse-item title="标题3" name="3">内容3</w-collapse-item>
        </w-collapse>
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
    <h2>📌 手风琴效果</h2>
    <p>
      <strong>预览</strong>
    </p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <w-collapse :selected.sync="slectedTabs2" single>
          <w-collapse-item title="标题1" name="1">内容1</w-collapse-item>
          <w-collapse-item title="标题2" name="2">内容2</w-collapse-item>
          <w-collapse-item title="标题3" name="3">内容3</w-collapse-item>
        </w-collapse>
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
  import WCollapse from '../../../src/collapse/collapse'
  import WCollapseItem from '../../../src/collapse/collapse-item'
  import WIcon from '../../../src/icon/icon'
  import mixin from '../mixin'
  export default {
    components: {
      WCollapse,
      WCollapseItem
    },
    mixins: [mixin],
    data () {
      return {
        codeStr: `
          <w-collapse :selected.sync="slectedTabs">
            <w-collapse-item title="标题1" name="1">内容1</w-collapse-item>
            <w-collapse-item title="标题2" name="2">内容2</w-collapse-item>
            <w-collapse-item title="标题3" name="3">内容3</w-collapse-item>
          </w-collapse>
      `.replace(/^ {8}/gm, '').trim(),
        slectedTabs: [],
        codeStr2: `
          <w-collapse :selected.sync="slectedTabs" single>
            <w-collapse-item title="标题1" name="1">内容1</w-collapse-item>
            <w-collapse-item title="标题2" name="2">内容2</w-collapse-item>
            <w-collapse-item title="标题3" name="3">内容3</w-collapse-item>
          </w-collapse>
      `.replace(/^ {8}/gm, '').trim(),
        slectedTabs2: []
      }
    }
  }
</script>