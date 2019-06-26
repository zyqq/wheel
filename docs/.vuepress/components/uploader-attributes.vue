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
              <td>name</td>
              <td class="des">必填，上传的文件字段名</td>
              <td class="type">String</td>
              <td>——</td>
              <td>--</td>
            </tr>
            <tr>
              <td>action</td>
              <td class="des">必选参数，上传的地址</td>
              <td class="type">String</td>
              <td>——</td>
              <td>--</td>
            </tr>
            <tr>
              <td>method</td>
              <td class="des">上传的请求方法</td>
              <td class="type">String</td>
              <td>GET, POST</td>
              <td>POST</td>
            </tr>
            <tr>
              <td>fileList</td>
              <td class="des">上传的文件列表</td>
              <td class="type">Array</td>
              <td>——</td>
              <td>[]</td>
            </tr>
            <tr>
              <td>sizeLimit</td>
              <td class="des">上传文件的数量限制</td>
              <td class="type">Number</td>
              <td>——</td>
              <td>--</td>
            </tr>
            <tr>
              <td>accept</td>
              <td class="des">上传文件类型</td>
              <td class="type">String</td>
              <td>——</td>
              <td>image/*</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>📌 Methods</h2>
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
              <td>parseResponse</td>
              <td class="des">必填，成功上传的回调</td>
              <td class="type">Function</td>
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