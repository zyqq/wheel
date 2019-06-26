<template>
  <div class="demo">
    <h2>📌 基础表格</h2>
    <p>
      <strong>预览</strong>
    </p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <w-table :data-source="dataSource1" :selected-items.sync="selected" :loading="loading" :height="400">
          <w-table-column text="姓名" field="name" :width="100">
          </w-table-column>
          <w-table-column text="分数" :width="50" field="score"></w-table-column>
          <w-table-column text="班级" :width="100" field="class"></w-table-column>
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

    <h2>📌 带斑马纹表格</h2>
    <p>
      <strong>预览</strong>
    </p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <w-table :data-source="dataSource1" striped :selected-items.sync="selected" :loading="loading" :height="400">
          <w-table-column text="姓名" field="name" :width="100">
          </w-table-column>
          <w-table-column text="分数" :width="50" field="score"></w-table-column>
          <w-table-column text="班级" :width="100" field="class"></w-table-column>
        </w-table>
      </div>
      <div class="code-content" v-highlight style="height: 0;">
        <div class="code-content-height">
          <pre><code class="html">{{codeStr1}}</code></pre>
        </div>
      </div>
      <div class="lock-code" @click="showCode(1)" ref="xxx">
        <w-icon class="icon-down" :name="isShow[1] === false ? 'down' : 'up'"></w-icon>
        <span class="lock-code-word">{{isShow[1] === false ? '显示代码' : '隐藏代码'}}</span>
      </div>
    </div>

    <h2>📌 可排序表格</h2>
    <p>
      <strong>预览</strong>
    </p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <w-table :data-source="dataSource" bordered :selected-items.sync="selected" :order-by.sync="orderBy"
          @update:orderBy="x" :loading="loading" :height="400">
          <w-table-column text="姓名" field="name" :width="100">
            <template slot-scope="props">
              <a :href="`/users/${props.value}`">{{props.value}}</a>
            </template>
          </w-table-column>
          <w-table-column text="分数" :width="50" field="score"></w-table-column>
          <w-table-column text="操作" :width="100">
            <template slot-scope="scope">
              <button @click="edit(scope.item)">编辑</button>
              <button @click="view(scope.item)">查看</button>
            </template>
          </w-table-column>
        </w-table>
      </div>
      <div class="code-content" v-highlight style="height: 0;">
        <div class="code-content-height">
          <pre><code class="html">{{codeStr2}}</code></pre>
        </div>
      </div>
      <div class="lock-code" @click="showCode(2)" ref="xxx">
        <w-icon class="icon-down" :name="isShow[2] === false ? 'down' : 'up'"></w-icon>
        <span class="lock-code-word">{{isShow[2] === false ? '显示代码' : '隐藏代码'}}</span>
      </div>
    </div>

    <h2>📌 可选择表格</h2>
    <p>
      <strong>预览</strong>
    </p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <w-table :data-source="dataSource" bordered :selected-items.sync="selected" :order-by.sync="orderBy"
          @update:orderBy="x" :loading="loading" :height="400" checkable>
          <w-table-column text="姓名" field="name" :width="100">
            <template slot-scope="props">
              <a :href="`/users/${props.value}`">{{props.value}}</a>
            </template>
          </w-table-column>
          <w-table-column text="分数" :width="50" field="score"></w-table-column>
          <w-table-column text="操作" :width="100">
            <template slot-scope="scope">
              <button @click="edit(scope.item)">编辑</button>
              <button @click="view(scope.item)">查看</button>
            </template>
          </w-table-column>
        </w-table>
      </div>
      <div class="code-content" v-highlight style="height: 0;">
        <div class="code-content-height">
          <pre><code class="html">{{codeStr3}}</code></pre>
        </div>
      </div>
      <div class="lock-code" @click="showCode(3)" ref="xxx">
        <w-icon class="icon-down" :name="isShow[3] === false ? 'down' : 'up'"></w-icon>
        <span class="lock-code-word">{{isShow[3] === false ? '显示代码' : '隐藏代码'}}</span>
      </div>
    </div>

    <h2>📌 可展开表格</h2>
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
          <w-table-column text="分数" :width="50" field="score"></w-table-column>
          <w-table-column text="操作" :width="100">
            <template slot-scope="scope">
              <button @click="edit(scope.item)">编辑</button>
              <button @click="view(scope.item)">查看</button>
            </template>
          </w-table-column>
        </w-table>
      </div>
      <div class="code-content" v-highlight style="height: 0;">
        <div class="code-content-height">
          <pre><code class="html">{{codeStr4}}</code></pre>
        </div>
      </div>
      <div class="lock-code" @click="showCode(4)" ref="xxx">
        <w-icon class="icon-down" :name="isShow[4] === false ? 'down' : 'up'"></w-icon>
        <span class="lock-code-word">{{isShow[4] === false ? '显示代码' : '隐藏代码'}}</span>
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
        dataSource1: [
          {id: 1, name: '方方', score: 100, class: '通信 1 班'},
          {id: 2, name: '圆圆', score: 99, class: '通信 1 班'},
          {id: 3, name: '张三', score: 100, class: '通信 1 班'},
          {id: 4, name: '李四', score: 99, class: '通信 1 班'},
          {id: 5, name: '超人', score: 100, class: '通信 1 班'},
          {id: 6, name: '蝙蝠侠', score: 99, class: '通信 1 班'},
          {id: 7, name: '蜘蛛侠', score: 100, class: '通信 1 班'},
          {id: 8, name: '钢铁侠', score: 99, class: '通信 1 班'},
          {id: 9, name: '钢铁侠', score: 99, class: '通信 1 班'},
          {id: 10, name: '钢铁侠', score: 99, class: '通信 1 班'},
        ],
        dataSource: [
          {id: 1, name: '方方', score: 100, description: 'xxxx xxxx'},
          {id: 2, name: '圆圆', score: 99, description: 'yyyy yyyy'},
          {id: 3, name: '张三', score: 100},
          {id: 4, name: '李四', score: 99},
          {id: 5, name: '超人', score: 100},
          {id: 6, name: '蝙蝠侠', score: 99},
          {id: 7, name: '蜘蛛侠', score: 100},
          {id: 8, name: '钢铁侠', score: 99},
        ],
        codeStr: `
          <w-table :data-source="dataSource1" :selected-items.sync="selected" :loading="loading" :height="400">
            <w-table-column text="姓名" field="name" :width="100">
            </w-table-column>
            <w-table-column text="分数" :width="50" field="score"></w-table-column>
            <w-table-column text="班级" :width="100" field="class"></w-table-column>
          </w-table>

          data() {
            return {
              dataSource: [
                {id: 1, name: '方方', score: 100, class: '通信 1 班'},
                {id: 2, name: '圆圆', score: 99, class: '通信 1 班'},
                {id: 3, name: '张三', score: 100, class: '通信 1 班'},
                {id: 4, name: '李四', score: 99, class: '通信 1 班'},
                {id: 5, name: '超人', score: 100, class: '通信 1 班'},
                {id: 6, name: '蝙蝠侠', score: 99, class: '通信 1 班'},
                {id: 7, name: '蜘蛛侠', score: 100, class: '通信 1 班'},
                {id: 8, name: '钢铁侠', score: 99, class: '通信 1 班'},
                {id: 9, name: '钢铁侠', score: 99, class: '通信 1 班'},
                {id: 10, name: '钢铁侠', score: 99, class: '通信 1 班'},
              ]
            }
          }
        `.replace(/^ {8}/gm, '').trim(),
        codeStr1: `
          <w-table :data-source="dataSource1" striped :selected-items.sync="selected" :loading="loading" :height="400">
            <w-table-column text="姓名" field="name" :width="100">
            </w-table-column>
            <w-table-column text="分数" :width="50" field="score"></w-table-column>
            <w-table-column text="班级" :width="100" field="class"></w-table-column>
          </w-table>

          data() {
            return {
              dataSource: [
                {id: 1, name: '方方', score: 100, class: '通信 1 班'},
                {id: 2, name: '圆圆', score: 99, class: '通信 1 班'},
                {id: 3, name: '张三', score: 100, class: '通信 1 班'},
                {id: 4, name: '李四', score: 99, class: '通信 1 班'},
                {id: 5, name: '超人', score: 100, class: '通信 1 班'},
                {id: 6, name: '蝙蝠侠', score: 99, class: '通信 1 班'},
                {id: 7, name: '蜘蛛侠', score: 100, class: '通信 1 班'},
                {id: 8, name: '钢铁侠', score: 99, class: '通信 1 班'},
                {id: 9, name: '钢铁侠', score: 99, class: '通信 1 班'},
                {id: 10, name: '钢铁侠', score: 99, class: '通信 1 班'},
              ]
            }
          }
        `.replace(/^ {8}/gm, '').trim(),
        codeStr2: `
          <w-table :data-source="dataSource" bordered :selected-items.sync="selected" :order-by.sync="orderBy"
            @update:orderBy="x" :loading="loading" :height="400">
            <w-table-column text="姓名" field="name" :width="100">
              <template slot-scope="props">
                <a :href="'/users/'+ props.value">{{props.value}}</a>
              </template>
            </w-table-column>
            <w-table-column text="分数" :width="50" field="score"></w-table-column>
            <w-table-column text="操作" :width="100">
              <template slot-scope="scope">
                <button @click="edit(scope.item)">编辑</button>
                <button @click="view(scope.item)">查看</button>
              </template>
            </w-table-column>
          </w-table>

          data() {
            return {
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
          }
        `.replace(/^ {8}/gm, '').trim(),
        codeStr3: `
          <w-table :data-source="dataSource" bordered :selected-items.sync="selected" :order-by.sync="orderBy"
            @update:orderBy="x" :loading="loading" :height="400" expend-field="description" checkable>
            <w-table-column text="姓名" field="name" :width="100">
              <template slot-scope="props">
                <a :href="'/users/' + props.value">{{props.value}}</a>
              </template>
            </w-table-column>
            <w-table-column text="分数" :width="50" field="score"></w-table-column>
            <w-table-column text="操作" :width="100">
              <template slot-scope="scope">
                <button @click="edit(scope.item)">编辑</button>
                <button @click="view(scope.item)">查看</button>
              </template>
            </w-table-column>
          </w-table>

          data() {
            return {
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
          }
        `.replace(/^ {8}/gm, '').trim(),
        codeStr4: `
          <w-table :data-source="dataSource" bordered :selected-items.sync="selected" :order-by.sync="orderBy"
            @update:orderBy="x" :loading="loading" :height="400" checkable>
            <w-table-column text="姓名" field="name" :width="100">
              <template slot-scope="props">
                <a :href="'/users/' + props.value">{{props.value}}</a>
              </template>
            </w-table-column>
            <w-table-column text="分数" :width="50" field="score"></w-table-column>
            <w-table-column text="操作" :width="100">
              <template slot-scope="scope">
                <button @click="edit(scope.item)">编辑</button>
                <button @click="view(scope.item)">查看</button>
              </template>
            </w-table-column>
          </w-table>

          data() {
            return {
              dataSource: [
                {id: 1, name: '方方', score: 100, description: 'xxxx xxxx'},
                {id: 2, name: '圆圆', score: 99, description: 'yyyy yyyy'},
                {id: 3, name: '张三', score: 100},
                {id: 4, name: '李四', score: 99},
                {id: 5, name: '超人', score: 100},
                {id: 6, name: '蝙蝠侠', score: 99},
                {id: 7, name: '蜘蛛侠', score: 100},
                {id: 8, name: '钢铁侠', score: 99},
              ]
            }
          }
        `.replace(/^ {8}/gm, '').trim()
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