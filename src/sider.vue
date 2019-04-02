
<template>
  <transition name="slide">
    <div class="sider" v-if="visible">
      <slot></slot>
      <w-button class="close" @click="visible = false">关闭</w-button>
    </div>
  </transition>
</template>
<script>
import WButton from './button'
export default {
  name: "WheelSider",
  components: {WButton},
  data() {
    return {
      visible: true
    }
  }
};
</script>
<style lang="scss" scoped>
.sider {
  position: relative;
  .close {
    position: absolute;
    top: 0;
    right: 0;
  }
}
.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s;
}
.slide-enter, .slide-leave-to {
  margin-left: -200px;
}
</style>


