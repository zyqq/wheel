<template>
  <div class="page" style="position:relative;">
    <w-date-range-picker :value="d" @input="d = $event" :scope="scope"></w-date-range-picker>    
    <p>其他内容</p>
  </div>
</template>
<script>
  import WDatePicker from './date-picker/date-picker'
  import WDateRangePicker from './date-picker/date-range-picker'

  export default {
    name: "demo",
    components: {
      WDatePicker,
      WDateRangePicker
    },
    data () {
      return {
        d: [],
        scope: [new Date(1958, 1), new Date(2118, 5)]
      }
    },
    methods: {
      edit (item) {
        alert(`开始编辑${item.id}`)
      },
      view (item) {
        alert(`开始查看${item.id}`)
      },
      x () {
        this.loading = true
        setTimeout(() => {
          this.dataSource = this.dataSource.sort((a, b) => a.score - b.score)
          this.loading = false
        }, 3000)
      }
    }    
  };
</script>
<style lang="scss" scoped>
  * {margin: 0; padding: 0; box-sizing: border-box;}
  body {background:white;}
  .page {
    padding: 100px;
  }
</style> 