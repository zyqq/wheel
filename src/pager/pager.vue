<template>
  <div class="wheel-pager">
    <span v-for="page in pages" :key="page" class="wheel-pager-item" 
    :class="{active: page===currentPage, separator: page === '...'}">
    {{page}}
    </span>
  </div>
</template>
<script>
export default {
  name: 'WheelPager',
  props: {
    currentPage: {
      type: Number,
      required: true
    },
    totalPage: {
      type: Number,
      required: true
    },
    hideIfOnePage: {
      type: Boolean,
      default: true
    }
  },
  data() {
    let {currentPage, totalPage} = this
    let pages = unique([1, currentPage,currentPage-1, currentPage-2, currentPage +1, currentPage +1, totalPage])
                .sort((a, b) => a-b)
                .reduce((prev, current, index, array) => {
                  prev.push(current)
                  array[index+1] && array[index+1] - array[index-1] > 1 && array.push('...')
                  return prev
                }, [])
    return {
      pages
    }
  }
}
function unique(array) {
  const obj = {}
  array.map((number) => {
    obj[number] = true
  })
  return Object.keys(obj).map((s) => parseInt(s, 10))
}
</script>
<style scoped lang="scss">
  @import "../../styles/_var.scss";
  .wheel-pager {
    &-item {
      border: 1px solid #e1e1e1; border-radius: $border-radius; padding: 0 4px; display: inline-flex; justify-content: center;
      align-items: center; font-size: 12px; min-width: 20px; height: 20px; margin: 0 4px; cursor: pointer;
      &.separator {
        border: none;
      }
      &.active, &:hover {
        border-color: $blue;
      }
      &.active {
        cursor: default;
      }
    }
  }
</style>
