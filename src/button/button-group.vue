<template>
  <div class="wheel-button-group">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'WheelButtonGroup',
  mounted () {
    for(let node of this.$el.children) {
      let name = node.nodeName.toLowerCase()
      if (name === 'div') {
        console.warn(`wheel-button-group 的子元素必须是 wheel-button-group ，而你用的是 ${name}`)
      }
    }
  }
}
</script>


<style lang="scss" scoped>
  @import '../../styles/_var.scss';
  .wheel-button-group {
    display: inline-flex;
    vertical-align: middle;
    > .wheel-button {
      border-radius: 0;
      &:not(:first-child) {
        margin-left: -1px;
      }
      &:first-child {
        border-top-left-radius: $border-radius;
        border-bottom-left-radius: $border-radius;
      }
      &:last-child {
        border-top-right-radius: $border-radius;
        border-bottom-right-radius: $border-radius;
      }
      &:hover {
        position: relative;
        z-index: 1;
      }
    }
  }
</style>

