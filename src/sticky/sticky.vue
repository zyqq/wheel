<template>
  <div class="wheel-sticky" :class="classes" ref="wrapper">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'WheelSticky',
  data() {
    return {
      sticky: false
    }
  },
  computed: {
    classes() {
      return {
        sticky: this.sticky
      }
    }
  },
  created() {
    window.addEventListener('scroll', () => {
      if(window.scrollY > this.top()) {
        console.log('滚动过了')
        this.sticky = true
      } else {
        this.sticky = false
        console.log('没滚过')
      }
    })
  },
  methods: {
    top() {
      let { top } = this.$refs.wrapper.getBoundingClientRect()
      let t = window.scrollY
      return t + top
    }
  }
}
</script>
<style lang="scss" scoped>
  .wheel-sticky {
    &.sticky {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
    }
  }
</style>
