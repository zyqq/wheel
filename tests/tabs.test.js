const expect = chai.expect;
import Vue from 'vue'
import Tabs from '../src/tabs'
import TabsHead from '../src/tabs-head'
import TabsBody from '../src/tabs-body'
import TabsItem from '../src/tabs-item'
import TabsPane from '../src/tabs-pane'

Vue.component('w-tabs', Tabs)
Vue.component('w-tabs-head', TabsHead)
Vue.component('w-tabs-body', TabsBody)
Vue.component('w-tabs-item', TabsItem)
Vue.component('w-tabs-pane', TabsPane)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Tabs', () => {
  it('存在.', () => {
    expect(Tabs).to.exist
  })

  describe('验证 props', () => {
    const div = document.createElement('div')
    let vm
    afterEach(() => {
      vm.$el.remove()
      vm.$destroy()
    })

    it('接收 selected 属性', (done) => {
      div.innerHTML = `
        <w-tabs selected="finance">
          <w-tabs-head>
            <w-tabs-item name="woman"> 美女 </w-tabs-item>
            <w-tabs-item name="finance"> 财经 </w-tabs-item>
            <w-tabs-item name="sports"> 体育 </w-tabs-item>
          </w-tabs-head>
          <w-tabs-body>
            <w-tabs-pane name="woman"> 美女相关资讯 </w-tabs-pane>
            <w-tabs-pane name="finance"> 财经相关资讯 </w-tabs-pane>
            <w-tabs-pane name="sports"> 体育相关资讯 </w-tabs-pane>
          </w-tabs-body>
        </w-tabs>        
      `
      vm = new Vue({
        el: div
      })
      vm.$nextTick(() => {
        let itemElement = vm.$el.querySelector('.tabs-item[data-name="finance"]')
        expect(itemElement.classList.contains('active')).to.be.true
        done()
      })
    })

    it('可以接受 direction prop', () => {

    })
  })
})