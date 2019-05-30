<template>
  <div style="padding-top: 16px;">
    <h2>简单用法</h2>
    <p>
      <strong>预览</strong>
    </p>
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

    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
  import WSlides from '../../../src/slides/slides'
  import WSlidesItem from '../../../src/slides/slides-item'
  export default {
    components: {
      WSlides, WSlidesItem
    },
    data () {
      return {
        selected: "1",
        content: `
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