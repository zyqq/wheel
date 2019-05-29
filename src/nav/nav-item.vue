<template>
  <div class="w-nav-item" :class="{selected}" @click="onClick">
    <slot></slot>
    
  </div>
</template>
<script>
export default {
  name: 'WheelNavItem',
  props: {
    name: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      selected: false
    }
  },
  methods: {
    onClick() {
      this.$emit('add:selected', this.name)
    }
  },
}
</script>
<style lang="scss" scoped>
  .w-nav-item {
    padding: 10px 20px;
    &.selected {
      background: red;
    }
  }
</style>
