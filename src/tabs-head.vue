<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="line" ref="line"></div>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'WheelTabsHead',
  inject: ['eventBus'],
  mounted () {
    this.eventBus && this.eventBus.$on('update:selected', (name, vm) => {
      let { width, left } = vm.$el.getBoundingClientRect()
      this.$refs.line.style.width = `${width}px`
      this.$refs.line.style.left = `${left}px`
    })
  }
}
</script>
<style lang="scss" scoped>
$height: 40px;
$blue: blue;
$border-color: #ddd;
.tabs-head {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: $height;
  border-bottom: 1px solid $border-color;
  position: relative;
  .actions-wrapper {
    margin-left: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 1em;
  }
  .line {
    position: absolute;
    bottom: 0;
    border-bottom: 1px solid $blue;
    transition: all 350ms;
  }
}
</style>

