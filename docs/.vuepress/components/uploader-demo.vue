<template>
  <div class="demo">
    <h2>📌 简单用法</h2>
    <p>
      <strong>预览</strong>
    </p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <w-uploader accept="image/*" method="POST" action="http://127.0.0.1:3000/upload" name="file"
          @update:fileList="updateFileList" :parseResponse="parseResponse" 
          :file-list.sync="fileList"  @error="error=$event" :size-limit="1024*1024">
          <w-button icon="upload">上传</w-button>
        </w-uploader>
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
  import WUploader from '../../../src/uploader/uploader'
  import WButton from '../../../src/button/button'
  import WIcon from '../../../src/icon/icon'
  import mixin from '../mixin'

  export default {
    components: {
      WUploader, WIcon, WButton
    },
    mixins: [mixin],
    data () {
      return {
        fileList: [],
        error: '',
        codeStr: `
          <w-uploader accept="image/*" method="POST" action="http://127.0.0.1:3000/upload" name="file"
            @update:fileList="y" :parseResponse="parseResponse" 
            :file-list.sync="fileList"  @error="error=$event" :size-limit="1024*1024">
            <w-button icon="upload">上传</w-button>
          </w-uploader>

          data() {
            return {
              fileList: [],
              error: '',             
            }
          },
          methods: {
            parseResponse (response) {
              let object = JSON.parse(response)
              let url = 'http://127.0.0.1:3000/preview/'+object.id
              return url
            },      
            updateFileList(newFileList){
              this.fileList = newFileList
            }            
          }
      `.replace(/^ {8}/gm, '').trim()
      }
    },
    methods: {
      parseResponse (response) {
        let object = JSON.parse(response)
        let url = `http://127.0.0.1:3000/preview/${object.id}`
        return url
      },      
      updateFileList(newFileList){
        this.fileList = newFileList
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