<template>
  <div>
    {{selected}}
    <div style="margin: 20px;">
      <w-table :columns="columns" :data-source="dataSource" bordered :selected-items.sync="selected"
        :order-by.sync="orderBy" @update:orderBy="x" :loading="loading"
      ></w-table>
    </div>
    <div style="margin: 20px;">
      <w-table :columns="columns" :data-source="dataSource" bordered compact :striped="false"></w-table>
    </div>
    <div style="margin: 20px;">
      <w-pager :total-page="10" :current-page.sync="currentPage"></w-pager>
    </div>
  </div>
</template>
<script>
  import WPager from './pager/pager'
  import WTable from './table/table'

  export default {
    name: "demo",
    components: {
      WPager,
      WTable
    },
    data() {
      return {
        currentPage: 1,
        selected: [],
        loading: false,
        orderBy: { // true 表示开启排序，但是不确定asc、desc，不传则关闭
          score: 'desc'
        },
        columns: [
          {text: '姓名', field: 'name'},
          {text: '分数', field: 'score'},
        ],
        dataSource: [
          {id: 1, name: '方方', score: 100},
          {id: 2, name: '圆圆', score: 99},
          {id: 3, name: '张三', score: 100},
          {id: 4, name: '李四', score: 99},
          {id: 5, name: '超人', score: 100},
          {id: 6, name: '蝙蝠侠', score: 99},
          {id: 7, name: '蜘蛛侠', score: 100},
          {id: 8, name: '钢铁侠', score: 99},
        ]
      }
    },
    methods: {
      x() {
        this.loading = true
        setTimeout(() => {
          this.dataSource = this.dataSource.sort((a, b) => a.score - b.score)
          this.loading = false
        }, 3000);
      }
    },
  };
</script>
<style lang="scss" scoped>
  * {margin: 0; padding: 0; box-sizing: border-box;}
  body {background:white;}
</style> 