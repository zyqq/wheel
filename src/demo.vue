<template>
  <div>    
    <w-nav :selected.sync="selected">
      <w-nav-item name="home">首页</w-nav-item>
      <w-nav-item name="about">关于</w-nav-item>
      <w-nav-item name="hire">招聘</w-nav-item>
    </w-nav>
  </div>
</template>
<script>
  import WNav from './nav/nav'
  import WNavItem from './nav/nav-item'
  import WSubNav from './nav/sub-nav'

  export default {
    name: "demo",
    components: {
      WNav,
      WNavItem,
      WSubNav
    },
    data () {
      return {
        selected: ['home']
      };
    },
    methods: {
    }
  };
</script>
<style>
  * {margin: 0; padding: 0; box-sizing: border-box;}
  .wrapper {
    margin: 40px;
  }
  .box {
    width: 100%;
    height: 350px;
    background: #ddd;    
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
  }
</style> 