<template>
  <div style="padding-top: 16px;">
    <h2>📌 设置 gutter</h2>
    <p>
      <strong>预览</strong>
    </p>
    <w-row class="demoRow" gutter="10">
      <w-col span="8">
        <div class="demoCol">8</div>
      </w-col>
      <w-col span="8">
        <div class="demoCol">8</div>
      </w-col>
      <w-col span="8">
        <div class="demoCol">8</div>
      </w-col>
    </w-row>
    <w-row class="demoRow" gutter="10">
      <w-col span="6">
        <div class="demoCol">6</div>
      </w-col>
      <w-col span="6">
        <div class="demoCol">6</div>
      </w-col>
      <w-col span="6">
        <div class="demoCol">6</div>
      </w-col>
      <w-col span="6">
        <div class="demoCol">6</div>
      </w-col>
    </w-row>

    <p>
      <strong>代码</strong>
    </p>
    <!-- <pre><code>{{content}}</code></pre> -->
  </div>
</template>
<style scoped>
  * {
    box-sizing: border-box;
  }
  .demoRow{
    margin: 10px 0;
  }
  .demoCol {
    height: 50px;
    border: 1px solid #ccc;
    background: #eee;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
<script>
  import WRow from '../../../src/row'
  import WCol from '../../../src/col'

  export default {
    components: {WRow, WCol},
    data () {
      return {
        content: `
          * {
            box-sizing: border-box;
          }

          <w-row class="demoRow" gutter="10">
            <w-col span="8">
              <div class="demoCol">8</div>
            </w-col>
            <w-col span="8">
              <div class="demoCol">8</div>
            </w-col>
            <w-col span="8">
              <div class="demoCol">8</div>
            </w-col>
          </w-row>

          <w-row class="demoRow" gutter="10">
            <w-col span="6">
              <div class="demoCol">6</div>
            </w-col>
            <w-col span="6">
              <div class="demoCol">6</div>
            </w-col>
            <w-col span="6">
              <div class="demoCol">6</div>
            </w-col>
            <w-col span="6">
              <div class="demoCol">6</div>
            </w-col>
          </w-row>



      `.replace(/^ {8}/gm, '').trim()
      }
    }
  }
</script>