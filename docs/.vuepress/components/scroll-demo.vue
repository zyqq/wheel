<template>
  <div class="demo">
    <h2>📌 简单用法</h2>
    <p>
      <strong>预览</strong>
    </p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <w-scroll style="width: 300px; height: 300px;border: 1px solid green;">
          <img src="https://www.guidedogs.org/wp-content/uploads/2017/07/2O17-8819-purple-2-min-400x400.jpg" alt="">              
          <p id="test2">123456789_10_11_12_13_14_15_16_17_189</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
          <p>5</p>
          <p>6</p>
          <p>7</p>
          <p>8</p>
          <p>9</p>
          <p>10</p>
          <p>11</p>
          <p>12</p>
          <p>13</p>
          <p>14</p>
          <p>15</p>
          <p>16</p>
          <p>17</p>
          <p>18</p>
          <p>19</p>
          <p>20</p>
        </w-scroll>
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
  import WScroll from '../../../src/scroll/scroll'
  import WIcon from '../../../src/icon/icon'
  import mixin from '../mixin'

  export default {
    components: {
      WScroll, WIcon
    },
    mixins: [mixin],
    data () {
      return {
        codeStr: `
          <w-scroll style="width: 300px; height: 300px;border: 1px solid green;">
            <img src="https://www.guidedogs.org/wp-content/uploads/2017/07/2O17-8819-purple-2-min-400x400.jpg" alt="">              
            <p id="test2">123456789_10_11_12_13_14_15_16_17_189</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>5</p>
            <p>6</p>
            <p>7</p>
            <p>8</p>
            <p>9</p>
            <p>10</p>
            <p>11</p>
            <p>12</p>
            <p>13</p>
            <p>14</p>
            <p>15</p>
            <p>16</p>
            <p>17</p>
            <p>18</p>
            <p>19</p>
            <p>20</p>
          </w-scroll>
      `.replace(/^ {8}/gm, '').trim()
      }
    }
  }
</script>