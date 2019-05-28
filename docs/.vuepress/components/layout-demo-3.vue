<template>
  <div style="padding-top: 16px;">
    <h2>📌 布局</h2>
    <p>
      <strong>预览</strong>
    </p>

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
</style>
<script>
  import WLayout from '../../../src/layout/layout'
  import WHeader from '../../../src/layout/header'
  import WFooter from '../../../src/layout/footer'
  import WContent from '../../../src/layout/content'
  import WSider from '../../../src/layout/sider'

  export default {
    components: {WLayout, WHeader, WFooter, WContent, WSider},
    data () {
      return {
        content: `
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