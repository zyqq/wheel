<template>
  <div class="cascader-items">
    <div class="left">
      <div class="label" v-for="(item, index) in items" :key="index" @click="leftSelected=item">
        {{item.name}}
      </div>
    </div>
    <div class="right" v-if="rightItems">
      <wheel-cascader-items :items="rightItems"></wheel-cascader-items>
    </div>
  </div>
</template>
<script>
export default {
  name: 'WheelCascaderItems',
  props: {
    items: {
      type: Array
    }
  },
  data() {
    return {
      leftSelected: null
    }
  },
  computed: {
    rightItems() {
      if(this.leftSelected && this.leftSelected.children) {
        return this.leftSelected.children
      } else {
        return null
      }
    }
  },
}
</script>
<style lang="scss" scoped>
  @import 'var';
  .cascader-items {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    .left {
      border: 1px solid red;
    }
    .right {
      margin-top: -1px;
    }
  }
</style>
