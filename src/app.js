import Vue from 'vue'
import Button from './button.vue'
import Icon from './icon.vue'
import ButtonGroup from './button-group.vue'
import Input from './input.vue'
import Row from './row.vue'
import Col from './col.vue'
import Layout from './layout.vue'
import Header from './header.vue'
import Footer from './footer.vue'
import Content from './content.vue'
import Sider from './sider.vue'
import plugin from './plugin'

Vue.component('w-button', Button)
Vue.component('w-icon', Icon)
Vue.component('w-input', Input)
Vue.component('w-button-group', ButtonGroup)
Vue.component('w-row', Row)
Vue.component('w-col', Col)
Vue.component('w-layout', Layout)
Vue.component('w-header', Header)
Vue.component('w-content', Content)
Vue.component('w-footer', Footer)
Vue.component('w-sider', Sider)
Vue.use(plugin)

new Vue({
  el: '#app',
  data: {
    loading1: false,
    loading2: true,
    loading3: false,
    message: ''
  },
  methods: {
    inputChange(e) {
      console.log(e.target.value)
    },
    showToast(){
      this.$toast('我是一个toast')
    }
  }
})

// // 单元测试
// try {
//   import chai from 'chai'
//   import spies from 'chai-spies'
//   chai.use(spies)
//   const expect = chai.expect
//   {
//     // 测试传入icon
//     const Constructor = Vue.extend(Button)
//     const vm = new Constructor({
//       propsData: {
//         icon: 'setting'
//       }
//     })
//     vm.$mount()
//     let useElement = vm.$el.querySelector('use')
//     let href = useElement.getAttribute('xlink:href')
//     expect(href).to.eq('#i-setting')
//     vm.$el.remove()
//     vm.$destroy()
//   }
//   {
//     // 测试loading与icon同时传入
//     const Constructor = Vue.extend(Button)
//     const vm = new Constructor({
//       propsData: {
//         icon: 'setting',
//         loading: true
//       }
//     })
//     vm.$mount()
//     let useElement = vm.$el.querySelector('use')
//     let href = useElement.getAttribute('xlink:href')
//     expect(href).to.eq('#i-loading')
//     vm.$el.remove()
//     vm.$destroy()
//   }
//   {
//     // 测试传入iconPosition
//     const Constructor = Vue.extend(Button)
//     const vm = new Constructor({
//       propsData: {
//         icon: 'setting',
//         iconPosition: 'right'
//       }
//     })
//     // 挂载到具体实例上才能取到css样式
//     const div = document.createElement('div')
//     document.body.appendChild(div)
//     vm.$mount(div)
//     let useElement = vm.$el.querySelector('svg')
//     let { order } = window.getComputedStyle(useElement)
//     expect(order).to.eq("2")
//     // 销毁测试实例，防止内存泄露
//     vm.$el.remove()
//     vm.$destroy()
//   }
  
//   {
//     // 测试 click 事件
//     const Constructor = Vue.extend(Button)
//     const vm = new Constructor({
//       propsData: {
//         icon: 'setting',
//       }
//     })
//     vm.$mount()
//     let spy = chai.spy(() => {})
//     vm.$on('click', spy)
//     // 希望 click 事件被触发
//     let button = vm.$el
//     button.click()
//     expect(spy).to.have.been.called()
//     vm.$el.remove()
//     vm.$destroy()
//   }
// } catch (error) {
//   window.errors = [error]
// } finally {
//   window.errors && window.errors.forEach((error) => {
//     console.error(error.message)
//   })
// }