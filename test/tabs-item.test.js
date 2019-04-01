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

describe('TabsItem', () => {
  it('存在.', () => {
    expect(TabsItem).to.exist
  })

  describe('验证 props', () => {
    const Constructor = Vue.extend(TabsItem)
    let vm
    afterEach(() => {
      vm.$el.remove()
      vm.$destroy()
    })

    it('接收 name 属性', () => {
      vm = new Constructor({
        propsData: {
          name: 'xxx'
        }
      }).$mount()
      expect(vm.$el.getAttribute('data-name')).to.eq('xxx')

    })

    it('接受 disabled 属性', () => {
      vm = new Constructor({
        propsData: {
          disabled: true,
          name: 'xxx'
        }
      }).$mount()
      expect(vm.$el.classList.contains('disabled')).to.be.true
      const callback = sinon.fake()
      vm.$el.click()
      expect(callback).to.have.been.not.called
    })
  })
})