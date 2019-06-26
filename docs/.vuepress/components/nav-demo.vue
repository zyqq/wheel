<template>
  <div class="demo">
    <h2>📌 顶栏</h2>
    <p>
      <strong>预览</strong>
    </p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
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

    <h2>📌 侧栏</h2>
    <p>
      <strong>预览</strong>
    </p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <w-nav :selected.sync="selected" vertical style=" width: 200px;">
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
      </div>
      <div class="code-content" v-highlight style="height: 0;">
        <div class="code-content-height">
          <pre><code class="html">{{codeStr2}}</code></pre>
        </div>
      </div>
      <div class="lock-code" @click="showCode(1)" ref="xxx">
        <w-icon class="icon-down" :name="isShow[1] === false ? 'down' : 'up'"></w-icon>
        <span class="lock-code-word">{{isShow[1] === false ? '显示代码' : '隐藏代码'}}</span>
      </div>
    </div>
  </div>
</template>
<script>
  import WNav from '../../../src/nav/nav'
  import WNavItem from '../../../src/nav/nav-item'
  import WSubNav from '../../../src/nav/sub-nav'
  import WIcon from '../../../src/icon/icon'
  import mixin from '../mixin'

  export default {
    components: {
      WNav, WIcon, WNavItem, WSubNav
    },
    mixins: [mixin],
    data () {
      return {
        selected: 'home',
        codeStr: `
          data () {
            return {
              selected: 'home'
            }
          }

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
          `.replace(/^ {8}/gm, '').trim(),
          codeStr2: `
            data () {
              return {
                selected: 'home'
              }
            }

            <w-nav :selected.sync="selected" vertical style="width: 200px;">
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
            `.replace(/^ {8}/gm, '').trim()
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