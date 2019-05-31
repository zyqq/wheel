<template>
  <div style="margin: 20px;">
    <w-pager :total-page="20" :current-page="3"></w-pager>
  </div>
</template>
<script>
  import WPager from './pager/pager'

  export default {
    name: "demo",
    components: {
      WPager
    }
  };
</script>
<style lang="scss" scoped>
  * {margin: 0; padding: 0; box-sizing: border-box;}
  body {background:white;}
</style> 