import chai, {expect} from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import {shallowMount, mount} from '@vue/test-utils'
import Uploader from '../../src/uploader/uploader'
import http from '../../src/http'


chai.use(sinonChai)

describe('Uploader.vue', () => {
  it('存在.', () => {
    expect(Uploader).to.exist
  })
  it('可以上传一个文件', (done) => {
    // 造假ajax的post方法响应
    let stub = sinon.stub(http, 'post').callsFake((url, options) => {
      setTimeout(function () {
        options.success('{"id": "123123"}')
      }, 100)
    })

    const wrapper = mount(Uploader, {
      propsData: {
        name: 'file',
        action: '/upload',
        method: 'post',
        parseResponse: (response) => {
          let object = JSON.parse(response)
          return `/preview/${object.id}`
        },
        fileList: []
      },
      slots: {default: `<button id="x">click me</button>`},
      listeners: {
        'update:fileList': (fileList) => { wrapper.setProps({fileList}) },
        'uploaded': () => {
          expect(wrapper.find('use').exists()).to.eq(false)
          expect(wrapper.props().fileList[0].url).to.eq('/preview/123123')
          // 恢复为原来的ajax的post函数
          stub.restore()
          done()
        }
      }
    })
    wrapper.find('#x').trigger('click')
    let inputWrapper = wrapper.find('input[type="file"]')
    let input = inputWrapper.element
    let file1 = new File(['xxxxxxxxx'], 'xxx.txt')
    const data = new DataTransfer()
    data.items.add(file1)
    input.files = data.files
    // 改变input值不会触发change，需要手动触发
    inputWrapper.trigger('change')
    let use = wrapper.find('use').element
    expect(use.getAttribute('xlink:href')).to.eq('#i-loading')
  })
})