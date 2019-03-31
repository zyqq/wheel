<template>
  <div class="toast" ref="wrapper">
    <div class="message">
      <slot v-if="!enableHtml"></slot>
      <div v-else v-html="$slots.default[0]"></div>
    </div>
    <div class="line" ref="line"></div>
    <span class="close" v-if="closeButton" @click="onClickClose">{{closeButton.text}}</span>
  </div>
</template>
<script>
export default {
  name: "WheelToast",
  props: {
    autoClose: {
      type: Boolean,
      default: true
    },
    autoCloseDelay: {
      type: Number,
      default: 3
    },
    closeButton: {
      type: Object,
      // 传 object 时得用函数返回，不然属性会被覆盖,跟 data 一个道理
      default() {
        return {
          text: "关闭",
          // 点击关闭按钮的回调函数
          callback: undefined
        };
      }
    },
    enableHtml: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    this.updateStyle()
    this.execAutoClose()
  },
  methods: {
    updateStyle() {
      // 实现多行文字父元素需要用到 min-height，此时子元素 height 为 100% 获取不到父元素 height，因此异步获取父元素高
      this.$nextTick(() => {
        this.$refs.line.style.height = `${this.$refs.wrapper.getBoundingClientRect().height}px`
      })
    },
    execAutoClose() {
      if (this.autoClose) {
        setTimeout(() => {
          this.close();
        }, this.autoCloseDelay * 1000)
      }
    },
    close() {
      this.$el.remove()
      this.$destroy()
    },
    log() {
      console.log('调用了 toast 的 log 方法')
    },
    onClickClose() {
      this.close()
      if(this.closeButton && typeof this.closeButton.callback === 'function') {
        // 调用 callback 传入 this 可让调用回调时拿到 toast 实例，从而调用实例里的方法
        this.closeButton.callback(this)
      }
    }
  }
};
</script>
<style lang="scss" scoped>
$font-size: 14px;
$toast-min-height: 40px;
$toast-bg: rgba(0, 0, 0, 0.75);
.toast {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  font-size: $font-size;
  min-height: $toast-min-height;
  line-height: 1.8;
  padding: 0 16px;
  color: white;
  background: $toast-bg;
  border-radius: 4px;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
  .message {
    padding: 8px 0;
  }
  .close {
    padding-left: 16px;
    cursor: pointer;
    flex-shrink: 0;
  }
  .line {
    margin-left: 16px;
    height: 100%;
    border-left: 1px solid #666;
  }
}
</style>
