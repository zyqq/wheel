<template>
  <div>
    <h2>📌 w-collapse Attributes</h2>
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
            <td>selected</td>
            <td class="des">当前展开 item 的 name 组成的数组。可以用 .sync 修饰符绑定。</td>
            <td class="type">Array</td>
            <td>——</td>
            <td>——</td>
          </tr>
          <tr>
            <td>single</td>
            <td class="des">是否允许同时展开多个 item。</td>
            <td class="type">Boolean</td>
            <td>true, false</td>
            <td>false</td>
          </tr>
        </tbody>
      </table>
    </div>
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