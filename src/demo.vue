<template>
  <div style="margin: 20px;">
    {{error}}
    <br>
    {{fileList}}
    <div>只能上传 300kb 以内的 png、jpeg 文件</div>
    <w-uploader accept="image/*" method="POST" action="http://127.0.0.1:3000/upload" name="file"
      @update:fileList="y" :parseResponse="parseResponse" 
      :file-list.sync="fileList"  @error="error=$event" :size-limit="1024*1024">
      <w-button icon="upload">上传</w-button>
    </w-uploader>
  </div>
</template>
<script>
  import WUploader from './uploader/uploader'
  import WButton from './button/button'

  export default {
    name: "demo",
    components: {
      WUploader,
      WButton
    },
    data() {
      return {
        fileList: [],
        error: ''
      }
    },
    methods: {
      alert (error) {
        window.alert(error || '上传失败')
      },
      parseResponse (response) {
        let url = `http://127.0.0.1:3000/preview/${response}`
        return url
      },      
      y(newFileList){
        this.fileList = newFileList
      }
    },
  };
</script>
<style lang="scss" scoped>
  * {margin: 0; padding: 0; box-sizing: border-box;}
  body {background:white;}
</style> 