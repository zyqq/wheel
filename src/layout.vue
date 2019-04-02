<template>
  <div class="layout" :class="layoutClass">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'WheelLayout',
  data() {
    return {
      layoutClass: {
        hasSider: false
      }
    }
  },
  mounted () {
    this.$children.forEach((vm) => {
      if (vm.$options.name === 'WheelSider') {
        this.layoutClass.hasSider = true
      }
    })
  }
}
</script>
<style lang="scss" scoped>
@import 'var';
  .layout {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    &.hasSider {
      flex-direction: row;
    }
  }
</style>


