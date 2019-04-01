const expect = chai.expect;
import Vue from 'vue'
import Popover from '../src/popover'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Popover', () => {
  it('存在.', () => {
    expect(Popover).to.exist
  })

  describe('验证 props', () => {
    const div = document.createElement('div')
    let vm
    beforeEach(() => {
      document.body.appendChild(div)
    })
    afterEach(() => {
      vm.$el.remove()
      vm.$destroy()
    })

    it('可以接受 position 属性', (done) => {
      Vue.component('w-popover', Popover)
      div.innerHTML = `
        <w-popover position="bottom" ref="a">
          <template slot="content">
          弹出内容
          </template>
          <button>点我</button>
        </w-popover>
      `
      vm = new Vue({
        el: div
      })
      vm.$el.querySelector('button').click()
      vm.$nextTick(() => {
        const {contentWrapper} = vm.$refs.a.$refs
        expect(contentWrapper.classList.contains('position-bottom')).to.be.true
        done()
      })
    })

    xit('可以设置 trigger', (done) => {
      Vue.component('w-popover', Popover)
      div.innerHTML = `
        <g-popover trigger="hover" ref="a">
          <template slot="content">
          弹出内容
          </template>
          <button>点我</button>
        </g-popover>
      `
      vm = new Vue({
        el: div
      })
      vm.$nextTick(() => {
        let event = new Event('mouseenter')
        vm.$el.dispatchEvent(event)
        vm.$nextTick(() => {
          const { contentWrapper } = vm.$refs.a.$refs
          expect(contentWrapper).to.exist
          done()
        })
      })
    })
  })
})