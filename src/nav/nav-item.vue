<template>
  <div class="w-nav-item" :class="{selected}" @click="onClick">
    <slot></slot>
    
  </div>
</template>
<script>
export default {
  name: 'WheelNavItem',
  inject: ['root'],
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
  created () {
    this.root.addItem(this)
  },
  methods: {
    onClick() {
      this.root.namePath = []
      this.$parent.updateNamePath && this.$parent.updateNamePath()
      this.$emit('add:selected', this.name)
    }
  },
}
</script>
<style lang="scss" scoped>
  @import '../../styles/_var.scss';
  .w-nav-item {
    padding: 10px 20px;
    position: relative;
    &.selected {
      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        border-bottom: 2px solid $blue;
        width: 100%;
      }
    }
  }
  .w-sub-nav .w-nav-item {
    &.selected {
      color: $color;
      background: $grey;
      &::after {
        display: none;
      }
    }
  }
</style>
