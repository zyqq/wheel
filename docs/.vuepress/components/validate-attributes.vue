<template>
  <div class="base">
    <section>
      <h2>📌 验证规则 rules Attributes</h2>
      <p class="des">
        在提交表单时通过<span class="code"> this.validate(Object)</span>, 调用验证插件，其中 <span class="code">Object</span>对象包含验证的字段;
        验证字段所需规则是一个数组，数组中每一项是一个对象，可配置的字段名如下
      </p>
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
              <td>key</td>
              <td class="des">需验证规则的字段名</td>
              <td class="type">String</td>
              <td>——</td>
              <td>--</td>
            </tr>
            <tr>
              <td>pattern</td>
              <td class="des">验证格式</td>
              <td class="type">String</td>
              <td>email</td>
              <td>--</td>
            </tr>
            <tr>
              <td>required</td>
              <td class="des">是否必填</td>
              <td class="type">Boolean</td>
              <td>true, false</td>
              <td>--</td>
            </tr>
            <tr>
              <td>minLength</td>
              <td class="des">字段最小长度</td>
              <td class="type">Number</td>
              <td>——</td>
              <td>--</td>
            </tr>
            <tr>
              <td>maxLength</td>
              <td class="des">字段最大长度</td>
              <td class="type">Number</td>
              <td>——</td>
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