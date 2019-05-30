import chai, {expect} from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import {mount} from '@vue/test-utils'
import Nav from '../../src/nav/nav'
import NavItem from '../../src/nav/nav-item'
import SubNav from '../../src/nav/sub-nav'
import Vue from 'vue'
chai.use(sinonChai)

describe('Nav.vue', () => {
  it('存在.', () => {
    expect(Nav).to.exist
  })

  it('支持 selected 属性', (done) => {
    Vue.component('WNavItem', NavItem)
    Vue.component('WSubNav', SubNav)
    const wrapper = mount(Nav, {
      propsData: {
        selected: 'home'
      },
      slots: {
        default: `
        <w-nav-item name="home">首页</w-nav-item>
        <w-sub-nav name="about">
          <template slot="title">关于</template>
          <w-nav-item name="culture">企业文化</w-nav-item>
        </w-sub-nav>
        `
      }
    })
    setTimeout(()=> {
      expect(wrapper.find('[data-name="home"].selected').exists()).to.be.true
      done()
    }) 
  })

  it('会触发 update:selected 事件', (done) => {
    Vue.component('WNavItem', NavItem)
    Vue.component('WSubNav', SubNav)
    const callback = sinon.fake()
    const wrapper = mount(Nav, {
      propsData: {
        selected: 'home'
      },
      slots: {
        default: `
        <w-nav-item name="home">首页</w-nav-item>
        <w-sub-nav name="about">
          <template slot="title">关于</template>
          <w-nav-item name="culture">企业文化</w-nav-item>
        </w-sub-nav>
        `
      },
      listeners: {
        'update:selected': callback
      }
    })
    wrapper.find('[data-name="culture"]').trigger('click')
    expect(callback).to.have.been.calledWith('culture')
    done()
  })
})
