<template>
  <div class="demo">
    <h2>📌 简单用法</h2>
    <p>
      <strong>预览</strong>
    </p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <w-slides :selected.sync="selected">
          <w-slides-item name="1">
            <div class="box">1</div>
          </w-slides-item>
          <w-slides-item name="2">
            <div class="box">2</div>
          </w-slides-item>
          <w-slides-item name="3">
            <div class="box">3</div>
          </w-slides-item>
        </w-slides>
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
  import WSlides from '../../../src/slides/slides'
  import WSlidesItem from '../../../src/slides/slides-item'
  import WIcon from '../../../src/icon/icon'
  import mixin from '../mixin'

  export default {
    components: {
      WSlides, WSlidesItem, WIcon
    },
    mixins: [mixin],
    data () {
      return {
        selected: "1",
        codeStr: `
          <w-slides :selected.sync="selected">
            <w-slides-item name="1">
              <div class="box">1</div>
            </w-slides-item>
            <w-slides-item name="2">
              <div class="box">2</div>
            </w-slides-item>
            <w-slides-item name="3">
              <div class="box">3</div>
            </w-slides-item>
          </w-slides>
          data: {
            selected: '1'
          }
          <style lang="scss" scoped>
            .box{
              height: 300px;
              background: blue;
              color: white;
              font-size: 30px;
              display: flex;
              justify-content: center;
              align-items: center;
            } 
          </style>
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