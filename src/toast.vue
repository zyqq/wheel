<template>
  <div class="toast">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "WheelToast"
};
</script>
<style lang="scss" scoped>
$font-size: 14px;
$toast-height: 40px;
$toast-bg: rgba(0, 0, 0, 0.75);
.toast {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  font-size: $font-size;
  height: $toast-height;
  line-height: 1.8;
  padding: 0 16px;
  color: white;
  background: $toast-bg;
  border-radius: 4px;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.50);
}
</style>
