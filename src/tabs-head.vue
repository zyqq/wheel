<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'WheelTabsHead',
  inject: ['eventBus']
}
</script>
<style lang="scss" scoped>
$height: 40px;
.tabs-head {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: $height;
  border: 1px solid red;
  .actions-wrapper {
    margin-left: auto;
  }
}
</style>

