<template>
  <div class="tabs-item" :class="classes" @click="onClick" :data-name="name">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'WheelTabsItem',
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    name: {
      type: String | Number,
      required: true
    }
  },
  inject: ['eventBus'],
  data() {
    return {
      active: false
    }
  },
  computed: {
    classes() {
      return {
        active: this.active,
        disabled: this.disabled
      }
    }
  },
  created() {
    this.eventBus && this.eventBus.$on('update:selected', (name) => {
      this.active = name === this.name
    })
  },
  methods: {
    onClick() {
      if (this.disabled) { return }
      this.eventBus && this.eventBus.$emit('update:selected', this.name, this)
    }
  }
};
</script>
<style lang="scss" scoped>
$blue: blue;
$disabled-text-color: grey;
.tabs-item {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  padding: 0 1em;
  height: 100%;
  cursor: pointer;
  &.active {
    color: $blue;
    font-weight: bold;
  }
  &.disabled {
    color: $disabled-text-color;
    cursor: not-allowed;
  }
}
</style>

