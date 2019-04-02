<template>
  <div style="padding-top: 16px;">
    <h2>将触发方式改为 hover</h2>
    <p>
      <strong>预览</strong>
    </p>

    <w-popover trigger="hover">
      <w-button>上方弹出</w-button>
      <template slot="content">
        弹出内容
      </template>
    </w-popover>
    <w-popover position="bottom" trigger="hover">
      <w-button>下方弹出</w-button>
      <template slot="content">
        弹出内容
      </template>
    </w-popover>
    <w-popover position="left" trigger="hover">
      <w-button>左边弹出</w-button>
      <template slot="content">
        弹出内容
      </template>
    </w-popover>
    <w-popover position="right" trigger="hover">
      <w-button>右边弹出</w-button>
      <template slot="content">
        弹出内容
      </template>
    </w-popover>

    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<style>
</style>
<style scoped>
</style>
<script>
  import WButton from '../../../src/button'
  import WPopover from '../../../src/popover'


  export default {
    components: {WButton, WPopover},
    data () {
      return {
        content: `
          <w-popover trigger="hover">
            <w-button>上方弹出</w-button>
            <template slot="content">
              弹出内容
            </template>
          </w-popover>
          <w-popover position="bottom" trigger="hover">
            <w-button>下方弹出</w-button>
            <template slot="content">
              弹出内容
            </template>
          </w-popover>
          <w-popover position="left" trigger="hover">
            <w-button>左边弹出</w-button>
            <template slot="content">
              弹出内容
            </template>
          </w-popover>
          <w-popover position="right" trigger="hover">
            <w-button>右边弹出</w-button>
            <template slot="content">
              弹出内容
            </template>
          </w-popover>
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