<template>
  <div class="base">
    <section>
      <h2>📌 w-table Attributes</h2>
      <div class="attr">
        <table>
          <thead>
            <tr>
              <th>参数</th>
              <th class="des">说明</th>
              <th class="type">类型</th>
              <th>可选值</th>
              <th>默认值</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>height</td>
              <td class="des">表格高度</td>
              <td class="type">Number</td>
              <td>——</td>
              <td>--</td>
            </tr>
            <tr>
              <td>expendField</td>
              <td class="des">展开内容描述文字</td>
              <td class="type">String</td>
              <td>——</td>
              <td>--</td>
            </tr>
            <tr>
              <td>orderBy</td>
              <td class="des">是一个对象，key 值表示排序字段，value 表示升（asc）降（desc），值也可设为 true 表示开启排序</td>
              <td class="type">Object</td>
              <td>——</td>
              <td>--</td>
            </tr>
            <tr>
              <td>loading</td>
              <td class="des">加载图标</td>
              <td class="type">Boolean</td>
              <td>——</td>
              <td>false</td>
            </tr>
            <tr>
              <td>striped</td>
              <td class="des">斑马条纹</td>
              <td class="type">Boolean</td>
              <td>——</td>
              <td>false</td>
            </tr>
            <tr>
              <td>selectedItems</td>
              <td class="des">选择项</td>
              <td class="type">Array</td>
              <td>——</td>
              <td>[]</td>
            </tr>
            <tr>
              <td>dataSource</td>
              <td class="des">必填，表格内容信息</td>
              <td class="type">Array</td>
              <td>——</td>
              <td>--</td>
            </tr>
            <tr>
              <td>checkable</td>
              <td class="des">可选择</td>
              <td class="type">Boolean</td>
              <td>——</td>
              <td>false</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>

<style>
.code {
  background-color: rgba(27, 31, 35, 0.05);
  border-radius: 3px;
  font-size: 85%;
  margin: 0;
  padding: 0.2em 0.4em;
}
</style>