
<template>
  <div class="wheel-content">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'WheelContent'
}
</script>
<style lang="scss" scoped>
  .wheel-content {
    flex-grow: 1;
  }
</style>


