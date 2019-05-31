<template>
  <div style="margin: 20px;">
    <w-pager :total-page="10" :current-page.sync="currentPage"></w-pager>
  </div>
</template>
<script>
  import WPager from './pager/pager'

  export default {
    name: "demo",
    components: {
      WPager
    },
    data() {
      return {
        currentPage: 1
      }
    },
  };
</script>
<style lang="scss" scoped>
  * {margin: 0; padding: 0; box-sizing: border-box;}
  body {background:white;}
</style> 