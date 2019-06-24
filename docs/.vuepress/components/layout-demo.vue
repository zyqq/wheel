<template>
  <div class="demo">
    <h2>📌 圣杯布局</h2>
    <p>
      <strong>预览</strong>
    </p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <w-layout style="color: white; margin-bottom:50px;">
          <w-header style="display:flex;justify-content: center;align-items: center;height: 50px; background:lightskyblue;">
            header
          </w-header>
          <w-content style="display:flex;justify-content: center;align-items: center;height: 100px; background:deepskyblue;">
            content
          </w-content>
          <w-footer style="display:flex;justify-content: center;align-items: center;height: 50px; background:lightskyblue;">
            footer
          </w-footer>
        </w-layout>        
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

    <h2>📌 多栏布局 1</h2>
    <p>
      <strong>预览</strong>
    </p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <w-layout style="color: white; overflow:hidden; margin-bottom:50px;">
          <w-header style="display:flex;justify-content: center;align-items: center;height: 50px; background:lightskyblue;">
            header
          </w-header>
          <w-layout>
            <w-sider style="display:flex;justify-content: center;align-items: center;height: 100px; background:#03a9f4d9; width:200px; color: white;">
              sider
            </w-sider>
            <w-content style="display:flex;justify-content: center;align-items: center;height: 100px; background:deepskyblue;">
              content
            </w-content>
          </w-layout>
          <w-footer style="display:flex;justify-content: center;align-items: center;height: 50px; background:lightskyblue;">
            footer
          </w-footer>
        </w-layout>
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


    <h2>📌 多栏布局 2</h2>
    <p>
      <strong>预览</strong>
    </p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <w-layout style="color: white; overflow:hidden; margin-bottom:50px;">
          <w-sider style=" display:flex;justify-content: center;align-items: center;background:#03a9f4d9; width:200px; color: white;">
            sider
          </w-sider>
          <w-layout>
            <w-header style="display:flex;justify-content: center;align-items: center;height: 50px; background:lightskyblue;">
              header
            </w-header>
            <w-content style="display:flex;justify-content: center;align-items: center;height: 100px; background:deepskyblue;">
              content
            </w-content>
            <w-footer style="display:flex;justify-content: center;align-items: center;height: 50px; background:lightskyblue;">
              footer
            </w-footer>
          </w-layout>
        </w-layout>
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
</style>
<script>
  import WLayout from '../../../src/layout/layout'
  import WHeader from '../../../src/layout/header'
  import WFooter from '../../../src/layout/footer'
  import WContent from '../../../src/layout/content'
  import WSider from '../../../src/layout/sider'
  import WIcon from '../../../src/icon/icon'
  import mixin from '../mixin'

  export default {
    components: {WLayout, WHeader, WFooter, WContent, WSider, WIcon},
    mixins: [mixin],
    data () {
      return {
        codeStr: `
          <w-layout style="color: white; margin-bottom:50px;">
            <w-header style="display:flex;justify-content: center;align-items: center;height: 50px; background:lightskyblue;">
              header
            </w-header>
            <w-content style="display:flex;justify-content: center;align-items: center;height: 100px; background:deepskyblue;">
              content
            </w-content>
            <w-footer style="display:flex;justify-content: center;align-items: center;height: 50px; background:lightskyblue;">
              footer
            </w-footer>
          </w-layout>
        `.replace(/^ {8}/gm, '').trim(),
        codeStr2: `
            <w-layout style="color: white; overflow:hidden; margin-bottom:50px;">
              <w-header style="display:flex;justify-content: center;align-items: center;height: 50px; background:lightskyblue;">
                header
              </w-header>
              <w-layout>
                <w-sider style="display:flex;justify-content: center;align-items: center;height: 100px; background:#03a9f4d9; width:200px; color: black;">
                  sider
                </w-sider>
                <w-content style="display:flex;justify-content: center;align-items: center;height: 100px; background:deepskyblue;">
                  content
                </w-content>
              </w-layout>
              <w-footer style="display:flex;justify-content: center;align-items: center;height: 50px; background:lightskyblue;">
                footer
              </w-footer>
            </w-layout>
        `.replace(/^ {8}/gm, '').trim(),
        codeStr3: `
          <w-layout style="color: white; overflow:hidden; margin-bottom:50px;">
            <w-sider style="display:flex;justify-content: center;align-items: center; background:#03a9f4d9; width:200px; color: white;">
              sider
            </w-sider>
            <w-layout>
              <w-header style="display:flex;justify-content: center;align-items: center;height: 50px; background:lightskyblue;">
                header
              </w-header>
              <w-content style="display:flex;justify-content: center;align-items: center;height: 100px; background:deepskyblue;">
                content
              </w-content>
              <w-footer style="display:flex;justify-content: center;align-items: center;height: 50px; background:lightskyblue;">
                footer
              </w-footer>
            </w-layout>
          </w-layout>

        `.replace(/^ {8}/gm, '').trim()
      }
    }
  }
</script>