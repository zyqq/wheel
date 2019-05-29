<template>
  <div class="w-sub-nav" :class="{active}" v-click-outside="close">
    <span class="w-sub-nav-label" @click="onClick">
      <slot name="title"></slot>
      <span class="w-sub-nav-icon" :class="{open}">
        <w-icon name="right"></w-icon>
      </span>
    </span>
    <transition @enter="enter" @leave="leave" @after-leave="afterLeave"
      @after-enter="afterEnter">
      <div class="w-sub-nav-popover" v-show="open" :class="{vertical}">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>
<script>
import ClickOutside from '../click-outside'
import WIcon from '../icon/icon'
export default {
  directives: {ClickOutside},
  name: 'WheelSubNav',
  components: {
    WIcon
  },
  inject: ['root', 'vertical'],
  props: {
    name: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      open: false
    }
  },
  computed: {
    active() {
      return this.root.namePath.indexOf(this.name) >= 0 ? true : false
    }
  },
  methods: {
    enter (el, done) {
      let {height} = el.getBoundingClientRect()
      el.style.height = 0
      el.getBoundingClientRect() // 浏览器会自动合并height的设置，因此加此一行计算height高度使得上一行代码生效
      el.style.height = `${height}px`
      el.addEventListener('transitionend', () => {
        done()
      })
    },
    afterEnter (el) {
      el.style.height = 'auto'
    },
    leave: function (el, done) {
      let {height} = el.getBoundingClientRect()
      el.style.height = `${height}px`
      el.getBoundingClientRect()
      el.style.height = 0
      el.addEventListener('transitionend', () => {
        done()
      })
    },
    afterLeave: function (el) {
      el.style.height = 'auto'
    },
    onClick() {
      this.open = !this.open
    },
    close() {
      this.open = false
    },
    updateNamePath() {
      this.root.namePath.unshift(this.name)
      this.$parent.updateNamePath && this.$parent.updateNamePath()
    }
  }
}
</script>
<style lang="scss" scoped>
  @import "../../styles/_var.scss";
  .w-sub-nav {
    position: relative;
    &.active {
      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        border-bottom: 2px solid $blue;
        width: 100%;
      }
    }
    &-label { padding: 10px 20px; display: block; }
    &-icon { display: none; }
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
      &.vertical {
        position: static;
        border-radius: 0;
        border: none;
        box-shadow: none;
        transition: height 250ms;
        overflow: hidden;
      }
    }
  }
  .w-sub-nav .w-sub-nav {
    &.active {
      &::after {
        display: none;
      }
    }
    .w-sub-nav-popover {
    top: 0;
    left: 100%;
    margin-left: 8px;
    }
    .w-sub-nav-label {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .w-sub-nav-icon {
      transition: transform 250ms;
      display: inline-flex; margin-left: 1em;
      svg {fill: $light-color;}
      &.open {
        transform: rotate(180deg);
      }
    }
  }
</style>
