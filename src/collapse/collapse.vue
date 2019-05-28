<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>
<script>
import Vue from 'vue'
export default {
  name: 'WheelCollapse',
  provide() {
    return {
      eventBus: this.eventBus
    }
  },
  props: {
    single: {
      type: Boolean,
      default: false
    },
    selected: {
      type: Array
    }
  },
  data() {
    return {
      eventBus: new Vue()
    }
  },
  mounted() {
    // 通知外界选中了什么
    this.eventBus.$emit('update:selected', this.selected)
    // 监听子组件的选中事件
    let selectedCopy = JSON.parse(JSON.stringify(this.selected))
    this.eventBus.$on('update:addSelected', (name) => {
      if(this.single){
        selectedCopy = [name]
      } else {
        selectedCopy.push(name)
      }
      // 通知子组件更新
      this.eventBus.$emit('update:selected', selectedCopy)
      // 通知外界更新
      this.$emit('update:selected', selectedCopy)
    })
    // 监听子组件的关闭事件
    this.eventBus.$on('updata:removeSelected', (name) => {
      let index = selectedCopy.indexOf(name)
      selectedCopy.splice(index, 1)
      this.eventBus.$emit('update:selected', selectedCopy)
      this.$emit('update:selected', selectedCopy)
    })
  },
}
</script>
<style lang="scss" scoped>
@import "../../styles/_var.scss";
.collapse {
  border: 1px solid $grey;
  border-radius: $border-radius;
}
</style>


