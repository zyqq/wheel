<template>
  <div class="w-sub-nav">
    <span @click="onClick">
      <slot name="title"></slot>
    </span>
    <div class="w-sub-nav-popover" v-show="open">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'WheelSubNav',
  data () {
    return {
      open: false
    }
  },
  methods: {
    onClick() {
      this.open = !this.open
    }
  }
}
</script>
<style lang="scss" scoped>
  @import "../../styles/_var.scss";
  .w-sub-nav {
    position: relative;
    > span {
      padding: 10px 20px;
      display: block;
    }
    &-popover {
      background: white;
      position: absolute;
      top: 100%;
      left: 0;
      border: 1px solid $grey;
      margin-top: 4px;
      white-space: nowrap;
      box-shadow: 0 0 3px fade_out(black, 0.8);
      border-radius: $border-radius;
      font-size: $font-size;
      color: $light-color;
      min-width: 8em;
    }
  }
  .w-sub-nav .w-sub-nav .w-sub-nav-popover {
    top: 0;
    left: 100%;
    margin-left: 8px;
  }
</style>
