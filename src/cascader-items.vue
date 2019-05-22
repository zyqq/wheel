<template>
  <div class="cascader-items" :style="{height: height}">
    <div class="left">
      <div class="label" v-for="(item, index) in items" :key="index" @click="onClickLabel(item)">
        <span class="name">
          {{item.name}}
        </span>
        <span class="icons">
          <template v-if="item.name === loadingItem.name">
            <icon class="loading" name="loading" />
          </template>
          <template v-else>
            <icon class="next" name="right" v-if="rightArrowVisible(item)"></icon>
          </template>

        </span>
      </div>
    </div>
    <div class="right" v-if="rightItems">
      <wheel-cascader-items ref="right" :loading-item="loadingItem" :load-data="loadData" :items="rightItems" :height="height" :level="level+1" :selected="selected" @update:selected="onUpdateSelected" ></wheel-cascader-items>
    </div>
  </div>
</template>
<script>
import Icon from './icon'
export default {
  name: 'WheelCascaderItems',
  components: {
    Icon
  },
  props: {
    items: {
      type: Array
    },
    height: {
      type: String
    },
    selected: {
      type: Array,
      default: () => []
    },
    level: {
      type: Number,
      default: 0
    },
    loadData: {
      type: Function
    },
    loadingItem: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      leftSelected: null
    }
  },
  computed: {
    rightItems() {
      if (this.selected[this.level]) {
        let selected = this.items.filter((item) => item.name === this.selected[this.level].name)
        if (selected && selected[0].children && selected[0].children.length > 0) {
          return selected[0].children
        }
      }
    }
  },
  methods: {
    rightArrowVisible(item) {
      return this.loadData ? !(item.isLeaf) : item.children
    },
    onClickLabel(item) {
      let copy = JSON.parse(JSON.stringify(this.selected))
      copy[this.level] = item
      copy.splice(this.level + 1)
      this.$emit('update:selected', copy)
    },
    onUpdateSelected(newSelected) {
      this.$emit('update:selected', newSelected)
    }
  }
}
</script>
<style lang="scss" scoped>
@import "var";
.cascader-items {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  height: 100%;
  .left {
    height: 100%;
    padding: 0.3em 0;
    overflow: auto;
  }
  .right {
    height: 100%;
    border-left: 1px solid $border-color-light;
  }
  .label {
    padding: 0.5em 1em;
    display: flex;
    align-items: center;
    cursor: pointer;
    white-space: nowrap;
    &:hover {
      background: $grey;
    }
    > .name {
      margin-right: 1em;
      user-select: none;
    }
    .icons {
      margin-left: auto;
      .next {
        transform: scale(0.5);
      }
      .loading {
        animation: spin 2s infinite linear;
      }
    }
  }
}
</style>
