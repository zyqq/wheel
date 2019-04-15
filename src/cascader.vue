<template>
  <div class="cascader">
    <div class="trigger" @click="popoverVisible = !popoverVisible">
      <slot></slot>
    </div>
    <div class="popover-wrapper" v-if="popoverVisible">
      <cascader-items class="popover" :items="source" :height="popoverHeight"></cascader-items>
    </div>
  </div>
</template>
<script>
import CascaderItems from './cascader-items'
export default {
  name: 'WheelCascader',
  components: { CascaderItems },
  props: {
    source: {
      type: Array
    },
    popoverHeight: {
      type: String
    }
  },
  data() {
    return {
      popoverVisible: false
    }
  },
}
</script>
<style lang="scss" scoped>
  @import 'var';
  .cascader {
    position: relative;
    .trigger {
      border: 1px solid black;
      height: 32px;
      width: 100px;
    }
    .popover-wrapper {
      position: absolute; 
      display: flex;
      top: 100%; 
      left: 0; 
      @extend .box-shadow;
      background: white; 
    }
  }
</style>
