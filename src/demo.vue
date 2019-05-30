<template>
  <div class="form-wrapper">
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
</template>
<script>
  import WButton from './button/button'
  import WInput from './input/input'
  import DemoFormRow from './validate/demo-form-row'
  import formMixin from './validate/form-mixin'

  export default {
    name: "demo",
    components: {WButton, WInput, DemoFormRow},
    mixins: [formMixin],
    data () {
      return {        
        user: {
          email: '',
          password: ''
        },
        rules: [
          {key: 'email', pattern: 'email', required: true},
          {key: 'password', minLength: 6, required: true}
        ]
      };
    },
    methods: {
      onSubmit () {
        this.validate(this.user)
        console.log(this.errors)
      }
    }
  };
</script>
<style lang="scss" scoped>
  * {margin: 0; padding: 0; box-sizing: border-box;}
  body {background: #888;}
  .form {
    background: white;
    padding: 24px;
    border-radius: 8px;
    margin-top: 36px;
    min-height: 60vh;
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