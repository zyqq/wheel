<template>
  <div class="wheel-sticky-wrapper" ref="wrapper" :style="{height}">
    <div class="wheel-sticky" :class="classes" :style="{left, width, top}">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'WheelSticky',
  props: {
    distance: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      sticky: false,
      left: undefined,
      height: undefined,
      width: undefined,
      top: undefined
    }
  },
  computed: {
    classes() {
      return {
        sticky: this.sticky
      }
    }
  },
  mounted() {
    this.windowScrollHandler = this._windowScrollHandler.bind(this)
    window.addEventListener('scroll', this.windowScrollHandler)
  },
  beforeDestroy(){
    window.removeEventListener('scroll', this.windowScrollHandler)
  },
  methods: {
    offsetTop() {
      let { top } = this.$refs.wrapper.getBoundingClientRect()
      let t = window.scrollY
      return t + top
    },
    _windowScrollHandler(){
      // top 多次获取会改变，因此只能获取一次
      let top = this.offsetTop()
      if(window.scrollY > top - this.distance) {
        let { height, width, left } = this.$refs.wrapper.getBoundingClientRect()
        // 需要给最外层div加高度让他占位置，否则会出现不能滚动的情况
        this.height = `${height}px`
        // 有可能sticky内容是延迟加载的，所以宽度会变，应该浮起来的时候再赋值
        this.width = `${width}px`
        // 有可能居中，因此left会变
        this.left = `${left}px`
        this.top = `${this.distance}px`
        this.sticky = true
      } else {
        this.height = undefined
        this.width = undefined
        this.left = undefined
        this.top = undefined
        this.sticky = false
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  .wheel-sticky-wrapper {
    .sticky {
      position: fixed;
    }
  }
</style>
