<template>
  <div style="padding-top: 16px;">
    <h2>this.$toast</h2>
    <p>
      <strong>预览</strong>
    </p>

    <div>
      <w-button @click="$toast('点击弹出提示', {position:'top'})">上方弹出</w-button>
      <w-button @click="$toast('点击弹出提示', {position:'middle'})">中间弹出</w-button>
      <w-button @click="$toast('点击弹出提示', {position:'bottom'})">下方弹出</w-button>
    </div>

    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
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
          <w-button @click="$toast('点击弹出提示'), {position:'top'}">上方弹出</w-button>
          <w-button @click="$toast('点击弹出提示', {position:'middle'})">中间弹出</w-button>
          <w-button @click="$toast('点击弹出提示', {position:'bottom'})">下方弹出</w-button>
      `.replace(/^ {8}/gm, '').trim()
      }
    }
  }
</script>