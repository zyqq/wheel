import Vue from 'vue'
import Button from './buttone.vue'
import Icon from './icon.vue'
import ButtonGroup from './button-group.vue'

Vue.component('w-button', Button)
Vue.component('w-icon', Icon)
Vue.component('w-button-group', ButtonGroup)

new Vue({
  el: '#app',
  data: {
    loading1: false,
    loading2: true,
    loading3: false
  }
})

// 单元测试
import chai from 'chai'
const expect = chai.expect
{
  // 测试传入icon
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'setting'
    }
  })
  vm.$mount()
  let useElement = vm.$el.querySelector('use')
  let href = useElement.getAttribute('xlink:href')
  expect(href).to.eq('#i-setting')
  vm.$el.remove()
  vm.$destroy()
}
{
  // 测试loading与icon同时传入
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'setting',
      loading: true
    }
  })
  vm.$mount()
  let useElement = vm.$el.querySelector('use')
  let href = useElement.getAttribute('xlink:href')
  expect(href).to.eq('#i-loading')
  vm.$el.remove()
  vm.$destroy()
}
{
  // 测试传入iconPosition
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'setting',
      iconPosition: 'right'
    }
  })
  // 挂载到具体实例上才能取到css样式
  const div = document.createElement('div')
  document.body.appendChild(div)
  vm.$mount(div)
  let useElement = vm.$el.querySelector('svg')
  let { order } = window.getComputedStyle(useElement)
  expect(order).to.eq("2")
  // 销毁测试实例，防止内存泄露
  vm.$el.remove()
  vm.$destroy()
}