<template>
  <div class="base">
    <section>
      <h2>📌 Attributes</h2>
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
              <td>source</td>
              <td class="des">级联选择器的数据源，格式较严格</td>
              <td class="type">Array</td>
              <td>--</td>
              <td>--</td>
            </tr>
            <tr>
              <td>selected</td>
              <td class="des">当前选中的数据 value 值的集合，按层级次序排序，用 .sync 绑定</td>
              <td class="type">Array</td>
              <td>--</td>
              <td>--</td>
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