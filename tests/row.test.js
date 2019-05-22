const expect = chai.expect;
import Vue from 'vue'
import Row from '../src/row'
import Col from '../src/col'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Row', () => {
  let div
  beforeEach(() => {
    div = document.createElement('div')
    document.body.appendChild(div)
  })
  it('存在.', () => {
    expect(Row).to.exist

  })
  it('接收 gutter 属性.', (done) => {
    Vue.component('w-row', Row)
    Vue.component('w-col', Col)
    div.innerHTML = `
      <w-row gutter="20">
        <w-col span="12"></w-col>
        <w-col span="12"></w-col>
      </w-row>
    `
    const vm = new Vue({
      el: div
    })
    // 获取 html 元素需要在 mounted 之后，这是个异步获取，因此要用 setTimeout，并且要用 done 使测试框架等待event loop
    setTimeout(() => {
      const row = vm.$el.querySelector('.row')
      expect(getComputedStyle(row).marginLeft).to.eq('-10px')
      expect(getComputedStyle(row).marginRight).to.eq('-10px')
      const col = vm.$el.querySelectorAll('.col')
      expect(getComputedStyle(col[0]).paddingRight).to.eq('10px')
      expect(getComputedStyle(col[1]).paddingLeft).to.eq('10px')
      vm.$el.remove()
      vm.$destroy()
      done()
    })
  })

  it('接收 align 属性.', () => {
    const Constructor = Vue.extend(Row)
    const vm = new Constructor({
      propsData: {
        align: 'right'
      }
    }).$mount(div)
    const element = vm.$el
    expect(getComputedStyle(element).justifyContent).to.eq('flex-end')
    div.remove()
    vm.$destroy()
  })
})