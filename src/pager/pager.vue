<template>
  <div class="wheel-pager" :class="{hide: hideIfOnePage && totalPage <=1 }">
    <span class="wheel-pager-nav prev" :class="{disabled:currentPage===1}" @click="onClickPage(currentPage - 1)">
      <w-icon name="left"></w-icon>
    </span>
    <template v-for="(page, i) in pages">
      <template v-if="page === currentPage">
        <span :key="i" class="wheel-pager-item current">{{page}}</span>
      </template>
      <template v-else-if="page === '...'">
        <w-icon :key="i" class="wheel-pager-separator" name="dots"></w-icon>
      </template>
      <template v-else>
        <span :key="i" class="wheel-pager-item other" @click="onClickPage(page)">{{page}}</span>
      </template>
    </template>
    <span class="wheel-pager-nav next" :class="{disabled: currentPage===totalPage}" @click="onClickPage(currentPage + 1)">
      <w-icon name="right"></w-icon>
    </span>
  </div>
</template>
<script>
import WIcon from '../icon/icon'

export default {
  name: 'WheelPager',
  components: {WIcon},
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
  computed: {
    pages() {
      let {currentPage, totalPage} = this
      return unique([1, currentPage,currentPage-1, currentPage-2, currentPage +1, currentPage +2, totalPage])
                  .filter((n) => n >= 1 && n <= totalPage)
                  .sort((a, b) => a-b)
                  .reduce((prev, current, index, array) => {
                    prev.push(current)
                    array[index+1] && array[index+1] - array[index] > 1 && prev.push('...')
                    return prev
                  }, [])

    }
  },
  methods: {
    onClickPage(n) {
      if(n >=1 && n <= this.totalPage) {
        this.$emit('update:currentPage', n)
      }
    }
  },
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
    display: flex; justify-content: flex-start; align-items: center;
    $width: 20px;
    $height: 20px;
    $font-size: 12px;
    user-select: none;
    &.hide {
      display: none;
    }
    &-separator {
      width: $width;
      font-size: $font-size;
    }
    &-item {
      min-width: $width; height: $height;font-size: $font-size;
      border: 1px solid #e1e1e1; border-radius: $border-radius; padding: 0 4px; display: inline-flex; justify-content: center;
      align-items: center; margin: 0 4px; cursor: pointer;
      &.current, &:hover { border-color: $blue; }
      &.current { cursor: default; }
    }
    &-nav {
      margin: 0 4px; display: inline-flex; justify-content: center; align-items: center;
      background: $grey; height: $height; width: $width; border-radius: $border-radius; font-size: $font-size;
      cursor: pointer;
      &.disabled {
        cursor: default;
        svg { fill: darken($grey, 30%); }
      }
    }
  }
</style>