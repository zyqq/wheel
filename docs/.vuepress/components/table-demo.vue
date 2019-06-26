<template>
  <div class="demo">
    <h2>📌 简单用法</h2>
    <p>
      <strong>预览</strong>
    </p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <w-table :data-source="dataSource" bordered :selected-items.sync="selected" :order-by.sync="orderBy"
          @update:orderBy="x" :loading="loading" :height="400" expend-field="description" checkable>
          <w-table-column text="姓名" field="name" :width="100">
            <template slot-scope="props">
              <a :href="`/users/${props.value}`">{{props.value}}</a>
            </template>
          </w-table-column>
          <w-table-column text="分数" field="score"></w-table-column>
        </w-table>
      </div>
      <div class="code-content" v-highlight style="height: 0;">
        <div class="code-content-height">
          <pre><code class="html">{{codeStr}}</code></pre>
        </div>
      </div>
      <div class="lock-code" @click="showCode(0)" ref="xxx">
        <w-icon class="icon-down" :name="isShow[0] === false ? 'down' : 'up'"></w-icon>
        <span class="lock-code-word">{{isShow[0] === false ? '显示代码' : '隐藏代码'}}</span>
      </div>
    </div>
  </div>
</template>
<script>
  import WTable from '../../../src/table/table'
  import WTableColumn from '../../../src/table/table-column'
  import WIcon from '../../../src/icon/icon'
  import mixin from '../mixin'

  export default {
    components: {
      WTable,WTableColumn, WIcon
    },
    mixins: [mixin],
    data () {
      return {
        currentPage: 1,
        selected: [],
        // columns: [
        //   {text: '姓名', field: 'name', width: 100}, // 1
        //   {text: '分数', field: 'score'},
        // ],
        orderBy: { // true - 开启排序，但是不确定asc desc
          score: 'desc'
        },
        loading: false,
        dataSource: [
          {id: 1, name: '方方', score: 100, description: 'xxxx xxxx'},
          {id: 2, name: '圆圆', score: 99, description: 'yyyy yyyy'},
          {id: 3, name: '张三', score: 100},
          {id: 4, name: '李四', score: 99},
          {id: 5, name: '超人', score: 100},
          {id: 6, name: '蝙蝠侠', score: 99},
          {id: 7, name: '蜘蛛侠', score: 100},
          {id: 8, name: '钢铁侠', score: 99},
          {id: 9, name: '方方', score: 100},
          {id: 10, name: '圆圆', score: 99},
          {id: 11, name: '张三', score: 100},
          {id: 12, name: '李四', score: 99},
          {id: 13, name: '超人', score: 100},
          {id: 14, name: '蝙蝠侠', score: 99},
          {id: 15, name: '蜘蛛侠', score: 100},
          {id: 16, name: '钢铁侠', score: 99},
          {id: 17, name: '蜘蛛侠', score: 100},
          {id: 18, name: '钢铁侠', score: 99},
          {id: 19, name: '方方', score: 100},
          {id: 20, name: '圆圆', score: 99},
        ],
        codeStr: `
          <w-sticky :distance="100">
            <div style="border:1px solid green;text-align:center;">粘滞内容</div>
          </w-sticky>`.replace(/^ {8}/gm, '').trim()
      }
    },
    methods: {
      edit(item){
        alert(`开始编辑${item.id}`)
      },
      view(item){
        alert(`开始查看${item.id}`)
      },
      x() {
        this.loading = true
        setTimeout(() => {
          this.dataSource = this.dataSource.sort((a, b) => a.score - b.score)
          this.loading = false
        }, 3000);
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import 'var';
  .box{
    height: 300px;
    background: $blue;
    color: white;
    font-size: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  } 
</style>