import Toast from './toast.vue'
export default {
  install(Vue, options) {
    Vue.prototype.$toast = (message, toastOptions) => {
      const Constructor = Vue.extend(Toast)
      let toast = new Constructor({
        propsData: {
          closeButton: toastOptions && toastOptions.closeButton
        }
      })
      toast.$slots.default = message
      toast.$mount()
      document.body.appendChild(toast.$el)
    }
  }
}