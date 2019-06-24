<template>
  <div class="demo">
    <h2>📌 24格网格</h2>
    <p>
      <strong>预览</strong>
    </p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <w-row class="demoRow">
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
        <w-row class="demoRow">
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
        <w-row class="demoRow">
          <w-col span="4">
            <div class="demoCol">4</div>
          </w-col>
          <w-col span="4">
            <div class="demoCol">4</div>
          </w-col>
          <w-col span="4">
            <div class="demoCol">4</div>
          </w-col>
          <w-col span="4">
            <div class="demoCol">4</div>
          </w-col>
          <w-col span="4">
            <div class="demoCol">4</div>
          </w-col>
          <w-col span="4">
            <div class="demoCol">4</div>
          </w-col>
        </w-row>
        <w-row class="demoRow">
          <w-col span="2">
            <div class="demoCol">2</div>
          </w-col>
          <w-col span="2">
            <div class="demoCol">2</div>
          </w-col>
          <w-col span="2">
            <div class="demoCol">2</div>
          </w-col>
          <w-col span="2">
            <div class="demoCol">2</div>
          </w-col>
          <w-col span="2">
            <div class="demoCol">2</div>
          </w-col>
          <w-col span="2">
            <div class="demoCol">2</div>
          </w-col>
          <w-col span="2">
            <div class="demoCol">2</div>
          </w-col>
          <w-col span="2">
            <div class="demoCol">2</div>
          </w-col>
          <w-col span="2">
            <div class="demoCol">2</div>
          </w-col>
          <w-col span="2">
            <div class="demoCol">2</div>
          </w-col>
          <w-col span="2">
            <div class="demoCol">2</div>
          </w-col>
          <w-col span="2">
            <div class="demoCol">2</div>
          </w-col>
        </w-row>
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

    <h2>📌 设置 gutter</h2>
    <p>
      <strong>预览</strong>
    </p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
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


    <h2>📌 设置空隙</h2>
    <p>
      <strong>预览</strong>
    </p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <w-row class="demoRow" gutter="10">
          <w-col span="8">
            <div class="demoCol">8</div>
          </w-col>
          <w-col span="8" offset="8">
            <div class="demoCol">8</div>
          </w-col>
        </w-row>
        <w-row class="demoRow" gutter="10">
          <w-col span="6" offset="6">
            <div class="demoCol">6</div>
          </w-col>
          <w-col span="6" offset="6">
            <div class="demoCol">6</div>
          </w-col>
        </w-row>
        <w-row class="demoRow" gutter="10">
          <w-col span="4">
            <div class="demoCol">4</div>
          </w-col>
          <w-col span="4" offset="4">
            <div class="demoCol">4</div>
          </w-col>
          <w-col span="4" offset="8">
            <div class="demoCol">4</div>
          </w-col>
        </w-row>
        <w-row class="demoRow" gutter="10">
          <w-col span="2">
            <div class="demoCol">2</div>
          </w-col>
          <w-col span="2" offset="2">
            <div class="demoCol">2</div>
          </w-col>
          <w-col span="2">
            <div class="demoCol">2</div>
          </w-col>
          <w-col span="2" offset="2">
            <div class="demoCol">2</div>
          </w-col>
          <w-col span="2">
            <div class="demoCol">2</div>
          </w-col>
          <w-col span="2" offset="2">
            <div class="demoCol">2</div>
          </w-col>
          <w-col span="2">
            <div class="demoCol">2</div>
          </w-col>
          <w-col span="2" offset="2">
            <div class="demoCol">2</div>
          </w-col>
        </w-row>
      </div>
      <div class="code-content" v-highlight style="height: 0;">
        <div class="code-content-height">
          <pre><code class="html">{{codeStr3}}</code></pre>
        </div>
      </div>
      <div class="lock-code" @click="showCode(2)" ref="xxx">
        <w-icon class="icon-down" :name="isShow[2] === false ? 'down' : 'up'"></w-icon>
        <span class="lock-code-word">{{isShow[2] === false ? '显示代码' : '隐藏代码'}}</span>
      </div>
    </div>    
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
  import WRow from '../../../src/grid/row'
  import WCol from '../../../src/grid/col'
  import WIcon from '../../../src/icon/icon'
  import mixin from '../mixin'

  export default {
    components: {WRow, WCol, WIcon},
    mixins: [mixin],
    data () {
      return {
        codeStr: `
          * {
            box-sizing: border-box;
          }

          <w-row class="demoRow">
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

          <w-row class="demoRow">
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

          <w-row class="demoRow">
            <w-col span="4">
              <div class="demoCol">4</div>
            </w-col>
            <w-col span="4">
              <div class="demoCol">4</div>
            </w-col>
            <w-col span="4">
              <div class="demoCol">4</div>
            </w-col>
            <w-col span="4">
              <div class="demoCol">4</div>
            </w-col>
            <w-col span="4">
              <div class="demoCol">4</div>
            </w-col>
            <w-col span="4">
              <div class="demoCol">4</div>
            </w-col>
          </w-row>

          <w-row class="demoRow">
            <w-col span="2">
              <div class="demoCol">2</div>
            </w-col>
            <w-col span="2">
              <div class="demoCol">2</div>
            </w-col>
            <w-col span="2">
              <div class="demoCol">2</div>
            </w-col>
            <w-col span="2">
              <div class="demoCol">2</div>
            </w-col>
            <w-col span="2">
              <div class="demoCol">2</div>
            </w-col>
            <w-col span="2">
              <div class="demoCol">2</div>
            </w-col>
            <w-col span="2">
              <div class="demoCol">2</div>
            </w-col>
            <w-col span="2">
              <div class="demoCol">2</div>
            </w-col>
            <w-col span="2">
              <div class="demoCol">2</div>
            </w-col>
            <w-col span="2">
              <div class="demoCol">2</div>
            </w-col>
            <w-col span="2">
              <div class="demoCol">2</div>
            </w-col>
            <w-col span="2">
              <div class="demoCol">2</div>
            </w-col>
          </w-row>
        `.replace(/^ {8}/gm, '').trim(),
        codeStr2: `
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



        `.replace(/^ {8}/gm, '').trim(),
        codeStr3: `
          * {
            box-sizing: border-box;
          }

          <w-row class="demoRow" gutter="10">
            <w-col span="8">
              <div class="demoCol">8</div>
            </w-col>
            <w-col span="8" offset="8">
              <div class="demoCol">8</div>
            </w-col>
          </w-row>
          <w-row class="demoRow" gutter="10">
            <w-col span="6" offset="6">
              <div class="demoCol">6</div>
            </w-col>
            <w-col span="6" offset="6">
              <div class="demoCol">6</div>
            </w-col>
          </w-row>
          <w-row class="demoRow" gutter="10">
            <w-col span="4">
              <div class="demoCol">4</div>
            </w-col>
            <w-col span="4" offset="4">
              <div class="demoCol">4</div>
            </w-col>
            <w-col span="4" offset="8">
              <div class="demoCol">4</div>
            </w-col>
          </w-row>
          <w-row class="demoRow" gutter="10">
            <w-col span="2">
              <div class="demoCol">2</div>
            </w-col>
            <w-col span="2" offset="2">
              <div class="demoCol">2</div>
            </w-col>
            <w-col span="2">
              <div class="demoCol">2</div>
            </w-col>
            <w-col span="2" offset="2">
              <div class="demoCol">2</div>
            </w-col>
            <w-col span="2">
              <div class="demoCol">2</div>
            </w-col>
            <w-col span="2" offset="2">
              <div class="demoCol">2</div>
            </w-col>
            <w-col span="2">
              <div class="demoCol">2</div>
            </w-col>
            <w-col span="2" offset="2">
              <div class="demoCol">2</div>
            </w-col>
          </w-row>
      `.replace(/^ {8}/gm, '').trim()
      }
    }
  }
</script>
