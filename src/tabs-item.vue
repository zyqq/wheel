<template>
  <div class="tabs-item">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'WheelTabsItem',
  disabled: {
    type: Boolean,
    default: false
  }
}
</script>
<style lang="scss" scoped>
</style>

