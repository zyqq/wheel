<template>
  <div class="wheel-table-wrapper" ref="wrapper">
    <div :style="{height, overflow: 'auto'}" ref="tableWrapper">
      <table ref="table" class="wheel-table" :class="{bordered, compact, striped: striped}">
        <thead>
        <tr>
          <th v-if="expendField" :style="{width: '50px'}" class="wheel-table-center"></th>
          <th v-if="checkable" :style="{width: '50px'}" class="wheel-table-center">
            <input type="checkbox" @change="onChangeAllItems" ref="allChecked" :checked="areAllItemsSelected"/></th>
          <th :style="{width: '50px'}" v-if="numberVisible">#</th>
          <th :style="{width: column.width + 'px'}" v-for="column in columns" :key="column.field">
            <div class="wheel-table-header">
              {{column.text}}
              <span v-if="column.field in orderBy" class="wheel-table-sorter" @click="changeOrderBy(column.field)">
                <w-icon name="asc" :class="{active: orderBy[column.field] === 'asc'}"/>
                <w-icon name="desc" :class="{active: orderBy[column.field] === 'desc'}"/>
              </span>
            </div>
          </th>
          <!-- <th ref="actionsHeader" v-if="$scopedSlots.default"></th> -->
        </tr>
        </thead>
        <tbody ref="tbody">
          <template v-for="(item,index) in dataSource">
            <tr :key="item.id">
              <td v-if="expendField" :style="{width: '50px'}" class="wheel-table-center">
                <w-icon class="wheel-table-expendIcon" name="right" :class="{expended: expendedIds.indexOf(item.id) >= 0}"
                  @click="expendItem(item.id)"/>
              </td>
              <td v-if="checkable" :style="{width: '50px'}" class="wheel-table-center">
                <input type="checkbox" @change="onChangeItem(item, index, $event)"
                  :checked="inSelectedItems(item)"
                /></td>
              <td :style="{width: '50px'}" v-if="numberVisible">{{index+1}}</td>
              <template v-for="column in columns">
                <!-- <td :style="{width: column.width + 'px'}" :key="column.field">{{item[column.field]}}</td> -->
                <td :style="{width: column.width + 'px'}" :key="column.field">
                  <template v-if="column.render">
                    <vnodes :vnodes="column.render({value: item[column.field]})"></vnodes>
                  </template>
                  <template v-else>
                    {{ item[column.field] }}
                  </template>
                </td>
              </template>
              <!-- <td v-if="$scopedSlots.default">
                <div ref="actions" style="display: inline-block;">
                  <slot :item="item"></slot>
                </div>
              </td> -->
            </tr>
            <tr v-if="inExpendedIds(item.id)" :key="`${item.id}-expend`">
              <td :colspan="columns.length + expendedCellColSpan">
                {{item[expendField] || '空'}}
              </td>
            </tr>
          </template>
        </tbody>
      </table>
    </div>
    <div class="wheel-table-loading" v-if="loading">
      <w-icon name="loading" />
    </div>
  </div>
</template>

<script>
  import WIcon from '../icon/icon'

  export default {
    name: "WheelTable",
    components: {
      WIcon,
      vnodes: {
        functional: true,
        render: (h, context) => context.props.vnodes
      }
    },
    props: {
      height: {
        type: Number
      },
      expendField:{
        type: String
      },
      orderBy: {
        type: Object,
        default: () => ({})
      },
      loading: {
        type: Boolean,
        default: false
      },
      striped: {
        type: Boolean,
        default: false
      },
      selectedItems: {
        type: Array,
        default: () => []
      },
      compact: {
        type: Boolean,
        default: false
      },
      dataSource: {
        type: Array,
        required: true,
        validator (array) {
          return !(array.filter(item => item.id === undefined).length > 0)
        }
      },
      numberVisible: {
        type: Boolean,
        default: false
      },
      bordered: {
        type: Boolean,
        default: false
      },
      checkable: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        expendedIds: [],
        columns: []
      }
    },
    computed: {
      areAllItemsSelected() {
        const a = this.dataSource.map(item => item.id).sort()
        const b = this.selectedItems.map(item => item.id).sort()
        if (a.length !== b.length) { return false }
        let equal = true
        for (let i = 0; i < a.length; i++) if (a[i] !== b[i]) {
          equal = false
          break
        }
        return equal
      },
      expendedCellColSpan () {
        let result = 0
        if (this.checkable) { result += 1 }
        if (this.expendField) { result += 1 }
        return result
      }
    },
    watch: {
      selectedItems () {
        if (this.selectedItems.length === this.dataSource.length) {
          this.$refs.allChecked.indeterminate = false
        } else if (this.selectedItems.length === 0) {
          this.$refs.allChecked.indeterminate = false
        } else {
          this.$refs.allChecked.indeterminate = true
        }
      }
    },
    mounted() {
      // 自己构造column，以提供传入标签的功能
      this.$slots.default = this.$slots.default.filter(node => node.tag)
      this.columns = this.$slots.default.map(node => {
        let { text, field, width } = node.componentOptions.propsData
        let render = node.data.scopedSlots && node.data.scopedSlots.default
        return { text, field, width, render }
      })
      // 将table复制一份，并去掉tbody，复制原来的thead
      let table2 = this.$refs.table.cloneNode(false)
      this.table2 = table2
      table2.classList.add('wheel-table-copy')
      let tHead = this.$refs.table.children[0]
      let {height} = tHead.getBoundingClientRect()
      this.$refs.tableWrapper.style.marginTop = height + 'px'
      this.$refs.tableWrapper.style.height = this.height - height + 'px'
      table2.appendChild(tHead)
      this.$refs.wrapper.appendChild(table2)

      // 手动获取操作按钮的td宽度，给操作列加上此宽度，实现列对齐
      // if (this.$scopedSlots.default) {
      //   let div = this.$refs.actions[0]
      //   let {width} = div.getBoundingClientRect()
      //   let parent = div.parentNode
      //   let styles = getComputedStyle(parent)
      //   let paddingLeft = styles.getPropertyValue('padding-left')
      //   let paddingRight = styles.getPropertyValue('padding-right')
      //   let borderLeft = styles.getPropertyValue('border-left-width')
      //   let borderRight = styles.getPropertyValue('border-right-width')
      //   let width2 = width + parseInt(paddingRight) + parseInt(paddingRight) + parseInt(borderLeft) + parseInt(borderRight) + 'px'
      //   this.$refs.actionsHeader.style.width = parseInt(width2) + this.getScrollWidth() + 'px'
      //   this.$refs.actions.map(div => {
      //     div.parentNode.style.width = width2
      //   })
      // }
    },
    beforeDestroy() {
      this.table2.remove()
    },
    methods: {   
      //思路就是设置一个div没有滚动条的,获取其宽度,然后再让其拥有滚动条,在获取宽度,取差值
      getScrollWidth() {
        var noScroll, scroll, oDiv = document.createElement("DIV");
        oDiv.style.cssText = "position:absolute; top:-1000px; width:100px; height:100px; overflow:hidden;";
        noScroll = document.body.appendChild(oDiv).clientWidth;
        oDiv.style.overflowY = "scroll";
        scroll = oDiv.clientWidth;
        document.body.removeChild(oDiv);
        return noScroll-scroll;
      },
      inExpendedIds (id) {
        return this.expendedIds.indexOf(id) >= 0
      },
      expendItem (id) {
        if (this.inExpendedIds(id)) {
          this.expendedIds.splice(this.expendedIds.indexOf(id), 1)
        } else {
          this.expendedIds.push(id)
        }
      },
      changeOrderBy (key) {
        const copy = JSON.parse(JSON.stringify(this.orderBy))
        let oldValue = copy[key]
        if (oldValue === 'asc') {
          copy[key] = 'desc'
        } else if (oldValue === 'desc') {
          copy[key] = true
        } else {
          copy[key] = 'asc'
        }
        this.$emit('update:orderBy', copy)
      },
      inSelectedItems (item) {
        return this.selectedItems.filter(i => i.id === item.id).length > 0
      },
      onChangeItem (item, index, e) {
        let selected = e.target.checked
        let copy = JSON.parse(JSON.stringify(this.selectedItems))
        if (selected) {
          copy.push(item)
        } else {
          copy = copy.filter(i => i.id !== item.id)
        }
        this.$emit('update:selectedItems', copy)
      },
      onChangeAllItems (e) {
        let selected = e.target.checked
        this.$emit('update:selectedItems', selected ? this.dataSource : [])
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../../styles/_var.scss";
  $grey: darken($grey, 10%);
  .wheel-table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    // border-bottom: 1px solid $grey;
    &.bordered {
      // border: 1px solid $grey;
      td, th {
        border: 1px solid $grey;
      }
    }
    tr {
      background-color: transparent;
    }
    &.compact {
      td, th {
        padding: 4px;
      }
    }
    td, th {
      border-bottom: 1px solid $grey;
      text-align: left;
      padding: 8px;
    }
    &.striped {
      tbody {
        > tr {
          &:nth-child(odd) {
            background: white;
          }
          &:nth-child(even) {
            background: lighten($grey, 10%);
          }
        }
      }
    }
    &-sorter {
      display: inline-flex;
      flex-direction: column;
      margin: 0 4px;
      cursor: pointer;
      svg {
        width: 10px;
        height: 10px;
        fill: $grey;
        &.active {
          fill: red;
        }
        &:first-child {
          position: relative;
          bottom: -1px;
        }
        &:nth-child(2) {
          position: relative;
          top: -1px;
        }
      }
    }
    &-header {
      display: flex;
      align-items: center;
    }
    &-wrapper {
      position: relative;
      overflow: auto;
      overflow-x: hidden;
    }
    &-loading {
      background: rgba(255, 255, 255, 0.8);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      svg {
        width: 50px;
        height: 50px;
        @include spin;
      }
    }
    &-copy {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      background: white;
    }
    &-expendIcon {
      width: 10px;
      height: 10px;
      transition: transform 250ms;
      &.expended{
        transform: rotate(90deg)
      }
    }
    & &-center {
      text-align: center;
    }
  }
</style> 