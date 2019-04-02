<template>
  <div style="padding-top: 16px;">
    <h2>📌 支持 HTML</h2>
    <p>
      <strong>预览</strong>
    </p>

    <div>
      <w-button @click="onClickButton">中间弹出</w-button>
    </div>

    <p>
      <strong>代码</strong>
    </p>
    <!-- <pre><code>{{content}}</code></pre> -->
  </div>
</template>
<style>
  .gulu-toast {
    z-index: 30 !important;
  }
</style>
<style scoped>
  * {
    box-sizing: border-box;
  }

</style>
<script>
  import plugin from '../../../src/plugin'
  import WButton from '../../../src/button'
  import Vue from 'vue'

  Vue.use(plugin)

  export default {
    components: {WButton},
    data () {
      return {
        content: `
          <style>
            .gulu-toast {
              z-index: 30;
            }
          </style>

          <div>
            <w-button @click="onClickButton">上方弹出</w-button>
          </div>

          methods: {
            onClickButton () {
              this.$toast('你知道我在等你吗？', {
                closeButton: {
                  text: '知道了',
                  callback: () => {
                    console.log('他说知道了')
                  }
                }
              })
            }
          },
      `.replace(/^ {8}/gm, '').trim()
      }
    },
    methods: {
      onClickButton () {
        this.$toast('<strong style="color:red;">加粗的提示</strong>', {
          enableHtml: true
        })
      }
    },
  }
</script>