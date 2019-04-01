<template>
  <div class="popover" @click.stop="showPopover">
    <div class="content-wrapper" v-if="visible" @click.stop>
      <slot name="content"></slot>
    </div>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'WheelPopover',
  data() {
    return {
      visible: false
    }
  },
  methods: {
    showPopover() {
      this.visible = !this.visible
      if (this.visible) {
        this.$nextTick(() => {
          // 需要给 click 事件命名，否则移除不了
          // 但是不能直接在 removeEventListener 里用 function xxx().bind(this)，因为 bind 返回的是一个新函数，移除的就不是同一个函数了
          let eventHandler = () => {
            this.visible = false
            console.log('document 隐藏 popover')
            // popover 关闭后需要移除监听器，否则会累计添加监听器
            document.removeEventListener('click', eventHandler)
          }
          // 得监听 document 不能监听 body，因为 body 高度可能没有覆盖整个页面
          document.addEventListener('click', eventHandler)
        })
      } else {
          console.log('vm 隐藏 popover')
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.popover {
  display: inline-block;
  position: relative;
  vertical-align: top;
  .content-wrapper {
    position: absolute;
    bottom: 100%;
    left: 0;
    border: 1px solid red;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5)
  }
}
</style>
