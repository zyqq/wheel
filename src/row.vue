<template>
  <div class="row" :style="{marginLeft: -gutter / 2 + 'px', marginRight: -gutter / 2 + 'px'}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'WheelRow',
  props: {
    gutter: {
      type: [Number, String]
    }
  },
  mounted() {
    console.log(this.$children)
    this.$children.forEach((vm) => {
      vm.gutter = this.gutter
    })
  },
}
</script>

<style lang="scss" scoped>
  .row {
    display: flex;
  }
</style>
