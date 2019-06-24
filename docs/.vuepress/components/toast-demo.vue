<template>
  <div class="demo">
    <h2>📌 this.$toast</h2>
    <p>
      <strong>预览</strong>
    </p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <w-button @click="$toast('点击弹出提示', {position:'top'})">上方弹出</w-button>
        <w-button @click="$toast('点击弹出提示', {position:'middle'})">中间弹出</w-button>
        <w-button @click="$toast('点击弹出提示', {position:'bottom'})">下方弹出</w-button>        
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

    <h2>📌 设置关闭按钮</h2>
    <p>
      <strong>预览</strong>
    </p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <w-button @click="onClickButton">中间弹出</w-button>
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

    <h2>📌 支持 HTML</h2>
    <p>
      <strong>预览</strong>
    </p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <w-button @click="onClickButton2">中间弹出</w-button>
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
<style>
  .wrapper.position-top {
    z-index: 999999!important;
  }
</style>
<style scoped>
  * {
    box-sizing: border-box;
  }

</style>
<script>
  import plugin from '../../../src/plugin'
  import WButton from '../../../src/button/button'
  import Vue from 'vue'
  import WIcon from '../../../src/icon/icon'
  import mixin from '../mixin'
  Vue.use(plugin)

  export default {
    components: {WButton,WIcon},
    mixins: [mixin],
    data () {
      return {
        codeStr: `
          <w-button @click="$toast('点击弹出提示'), {position:'top'}">上方弹出</w-button>
          <w-button @click="$toast('点击弹出提示', {position:'middle'})">中间弹出</w-button>
          <w-button @click="$toast('点击弹出提示', {position:'bottom'})">下方弹出</w-button>
      `.replace(/^ {8}/gm, '').trim(),
        codeStr2: `
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
        `.replace(/^ {8}/gm, '').trim(),
        codeStr3: `
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
        this.$toast('你知道我在等你吗？', {
          closeButton: {
            text: '知道了',
            callback: () => {
              console.log('他说知道了')
            }
          }
        })
      },
      onClickButton2 () {
        this.$toast('<strong style="color:red;">加粗的提示</strong>', {
          enableHtml: true
        })
      }
    },
  }
</script>