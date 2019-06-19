<template>
  <div class="wheel-date-picker" style="border: 1px solid red;" ref="wrapper">
    <w-popover position="bottom" :container="x">
      <w-input type="text"/>
      <template slot="content">
        <div class="wheel-date-picker-pop">
          <div class="wheel-date-picker-nav">
            <span><w-icon name="leftleft"/></span>
            <span><w-icon name="left"/></span>
            <span @click="onClickYear">2012年</span>
            <span @click="onClickMonth">8月</span>
            <span><w-icon name="right"/></span>
            <span><w-icon name="rightright"/></span>
          </div>
          <div class="wheel-date-picker-panels">
            <div v-if="mode==='years'" class="wheel-date-picker-content">年</div>
            <div v-else-if="mode==='months'" class="wheel-date-picker-content">月</div>
            <div v-else class="wheel-date-picker-content">
              <div :class="c('weekdays')">
                <span v-for="i in [1,2,3,4,5,6,0]" :key="i">
                  {{weekdays[i]}}
                </span>
              </div>
              <div :class="c('row')" v-for="i in helper.range(1, 7)" :key="i">
                <span :class="c('col')" v-for="j in helper.range(1,8)" :key="j">
                  {{visibleDays[(i-1)*7+j-1].getDate()}}
                </span>
              </div>
            </div>
          </div>
          <div class="wheel-date-picker-actions">
            <button>清除</button>
          </div>
        </div>
      </template>
    </w-popover>
  </div>
</template>

<script>
  import WInput from '../input/input'
  import WIcon from '../icon/icon'
  import WPopover from '../popover/popover'
  import ClickOutside from '../click-outside'
  import helper from './helper'
  export default {
    components: {WInput, WIcon, WPopover},
    directives: {ClickOutside},
    name: "WheelDatePicker",
    props: {
      firstDayOfWeek: 0 | 1
    },
    data () {
      return {
        mode: 'days',
        value: new Date(),
        helper: helper,
        x: null,
        weekdays: ['日', '一', '二', '三', '四', '五', '六']
      }
    },
    mounted () {
      this.x = this.$refs.wrapper
    },
    methods: {
      c (className) {
        return `wheel-date-picker-${className}`
      },
      onClickMonth () {
        this.mode = 'months'
      },
      onClickYear () {
        this.mode = 'years'
      }
    },
    computed: {
      visibleDays () {
        let date = this.value
        let first = helper.firstDayOfMonth(date)
        let last = helper.lastDayOfMonth(date)
        let array = []
        let [year, month, day] = helper.getYearMonthDate(date)
        for (let i = first.getDate(); i <= last.getDate(); i++) {
          array.push(new Date(year, month, i))
        }
        let n = first.getDay() === 0 ? 6 : first.getDay() - 1
        let array2 = []
        for (let i = 0; i < n; i++) {
          array2.push(new Date(year, month, -i))
        }
        array2 = array2.reverse()
        let m = 42 - array.length - array2.length
        let array3 = []
        for (let i = 1; i <= m; i++) {
          array3.push(new Date(year, month + 1, i))
        }
        return [...array2, ...array, ...array3]
      }
    }
  }
</script>

<style scoped lang="scss">
  .wheel-date-picker {
    &-nav {
      // background: red;
    }
    &-popWrapper {
      padding: 0;
    }
    ::v-deep .wheel-popover-content-wrapper {
      padding: 0;
    }
  }
</style> 