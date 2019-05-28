<template>
  <div style="padding-top: 16px;">
    <h2>📌 按钮组</h2>
    <p>
      <strong>预览</strong>
    </p>
    <w-button-group>
      <w-button icon="left">
        上一页
      </w-button>
      <w-button>
        更多
      </w-button>
      <w-button icon="right">
        下一页
      </w-button>
    </w-button-group>

    <p>
      <strong>代码</strong>
    </p>
    <!-- <pre><code lang="vue">{{content}}</code></pre> -->
  </div>
</template>
<script>
import WButton from '../../../src/button/button'
import WButtonGroup from '../../../src/button/button-group'

export default {
  components: {
    WButton,
    WButtonGroup
  },
  data() {
    return {
      content: `
        <w-button-group>
          <w-button icon="left">
            上一页
          </w-button>
          <w-button>
            更多
          </w-button>
          <w-button icon="right">
            下一页
          </w-button>
        </w-button-group>
      `.replace(/^ {8}/gm, '').trim()
    }
  }
}
</script>