import Toast from './toast/toast.vue'

let currentToast
export default {
  install(Vue, options) {
    Vue.prototype.$toast = (message, toastOptions) => {
      // 避免出现多个 toast 重叠
      if(currentToast) {
        currentToast.close()
      }

      currentToast = createToast({
        Vue,
        message,
        propsData: toastOptions,
        onClose: () => {
          currentToast = null
        }
      })
    }
  }
}

function createToast({ Vue, message, propsData, onClose }) {
  const Constructor = Vue.extend(Toast)
  let toast = new Constructor({
    propsData
  })
  toast.$slots.default = [message]
  toast.$mount()
  toast.$on('close', onClose)
  document.body.appendChild(toast.$el)
  return toast
}