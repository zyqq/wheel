<template>
  <div class="demo">
    <h2>📌 简单用法</h2>
    <p>
      <strong>预览</strong>
    </p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <form class="form" @submit.prevent="onSubmit">
          <h1>登录</h1>
          <demo-form-row label="邮箱" :error="errors.email">
            <w-input type="text" v-model="user.email"></w-input>
          </demo-form-row>
          <demo-form-row label="密码" :error="errors.password">
            <w-input type="password" v-model="user.password"></w-input>
          </demo-form-row>
          <div>
            <w-button class="ok" type="submit">提交</w-button>
          </div>
        </form>
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
  import DemoFormRow from '../../../src/validate/demo-form-row'
  import formMixin from '../../../src/validate/form-mixin'
  import WButton from '../../../src/button/button'
  import WInput from '../../../src/input/input'
  import WIcon from '../../../src/icon/icon'
  import mixin from '../mixin'

  export default {
    components: {
      WInput, WIcon, WButton, DemoFormRow
    },
    mixins: [mixin, formMixin],
    data () {
      return {
        user: {
          email: '',
          password: ''
        },
        rules: [
          {key: 'email', pattern: 'email', required: true},
          {key: 'password', minLength: 6, required: true}
        ],
        codeStr: `
          <form class="form" @submit.prevent="onSubmit">
            <h1>登录</h1>
            <demo-form-row label="邮箱" :error="errors.email">
              <w-input type="text" v-model="user.email"></w-input>
            </demo-form-row>
            <demo-form-row label="密码" :error="errors.password">
              <w-input type="password" v-model="user.password"></w-input>
            </demo-form-row>
            <div>
              <w-button class="ok" type="submit">提交</w-button>
            </div>
          </form>

          import DemoFormRow from '../../../src/validate/demo-form-row'
          import formMixin from '../../../src/validate/form-mixin'
          import WButton from '../../../src/button/button'
          import WInput from '../../../src/input/input'

          data() {
            return {
              user: {
                email: '',
                password: ''
              },
              rules: [
                {key: 'email', pattern: 'email', required: true},
                {key: 'password', minLength: 6, required: true}
              ]
            }
          },
          methods: {
            onSubmit () {
              this.validate(this.user)
              console.log(this.errors)
            }
          }
      `.replace(/^ {8}/gm, '').trim()
      }
    },
    methods: {
      onSubmit () {
        this.validate(this.user)
        console.log(this.errors)
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
  .form {
    background: white;
    padding:0 24px ;
    border-radius: 8px;
    min-height: 20vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
  align-items: center;
    &-wrapper {
      display: flex;justify-content: center;
    }
    .ok {
      display: block;
      width: 100%;
      margin-top: 24px;
    }
  }
</style>