<template>
  <div class="demo">
    <h2>📌 支持 HTML</h2>
    <p>
      <strong>预览</strong>
    </p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">   
        <w-popover>
          <w-button>上方弹出</w-button>
          <template slot="content">
            弹出内容
          </template>
        </w-popover>
        <w-popover position="bottom">
          <w-button>下方弹出</w-button>
          <template slot="content">
            弹出内容
          </template>
        </w-popover>
        <w-popover position="left">
          <w-button>左边弹出</w-button>
          <template slot="content">
            弹出内容
          </template>
        </w-popover>
        <w-popover position="right">
          <w-button>右边弹出</w-button>
          <template slot="content">
            弹出内容
          </template>
        </w-popover> 
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

    <h2>📌 将触发方式改为 hover</h2>
    <p>
      <strong>预览</strong>
    </p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">   
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
  </div>
</template>
<script>
  import WButton from '../../../src/button/button'
  import WPopover from '../../../src/popover/popover'
  import WIcon from '../../../src/icon/icon'
  import mixin from '../mixin'

  export default {
    components: {WButton, WPopover, WIcon},
    mixins: [mixin],
    data () {
      return {
        codeStr: `
          <w-popover>
            <w-button>上方弹出</w-button>
            <template slot="content">
              弹出内容
            </template>
          </w-popover>
          <w-popover position="bottom">
            <w-button>下方弹出</w-button>
            <template slot="content">
              弹出内容
            </template>
          </w-popover>
          <w-popover position="left">
            <w-button>左边弹出</w-button>
            <template slot="content">
              弹出内容
            </template>
          </w-popover>
          <w-popover position="right">
            <w-button>右边弹出</w-button>
            <template slot="content">
              弹出内容
            </template>
          </w-popover>
      `.replace(/^ {8}/gm, '').trim(),
        codeStr2: `
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
    }
  }
</script>