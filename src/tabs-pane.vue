<template>
  <div class="tabs-pane">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'WheelTabsPane',
  inject: ['eventBus'],
  created () {
    this.eventBus.$on('update:selected', (name) => {
      console.log(name)
    })
  }
}
</script>
<style lang="scss" scoped>
</style>

