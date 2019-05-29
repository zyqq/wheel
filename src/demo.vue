<template>
  <div>    
     <w-nav :selected.sync="selected" style=" margin: 20px;">
      <w-nav-item name="home">首页</w-nav-item>
      <w-sub-nav name="about">
        <template slot="title">关于</template>
        <w-nav-item name="culture">企业文化</w-nav-item>
        <w-nav-item name="developers">开发团队</w-nav-item>
        <w-sub-nav name="contacts">
          <template slot="title">联系方式</template>
          <w-nav-item name="wechat">微信</w-nav-item>
          <w-nav-item name="qq">QQ</w-nav-item>
          <w-sub-nav name="phone">
            <template slot="title">手机</template>
            <w-nav-item name="cm">移动</w-nav-item>
            <w-nav-item name="cu">联通</w-nav-item>
            <w-nav-item name="cn">电信</w-nav-item>
          </w-sub-nav>
        </w-sub-nav>

      </w-sub-nav>
      <w-nav-item name="hire">招聘</w-nav-item>
    </w-nav>
    <w-nav :selected.sync="selected" vertical style="width: 200px; margin: 20px;margin-top:200px;">
      <w-nav-item name="home">首页</w-nav-item>
      <w-sub-nav name="about">
        <template slot="title" >关于</template>
        <w-nav-item name="culture">企业文化</w-nav-item>
        <w-nav-item name="developers">开发团队</w-nav-item>
        <w-sub-nav name="contacts">
          <template slot="title" >联系方式</template>
          <w-nav-item name="wechat">微信</w-nav-item>
          <w-nav-item name="qq">QQ</w-nav-item>
          <w-sub-nav name="phone">
            <template slot="title">手机</template>
            <w-nav-item name="cm">移动</w-nav-item>
            <w-nav-item name="cu">联通</w-nav-item>
            <w-nav-item name="cn">电信</w-nav-item>
          </w-sub-nav>
        </w-sub-nav>

      </w-sub-nav>
      <w-nav-item name="hire">招聘</w-nav-item>
    </w-nav>
    <p>你好，我是中文</p>
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