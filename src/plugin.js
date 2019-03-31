import Toast from './toast.vue'
export default {
  install(Vue, options) {
    Vue.prototype.$toast = (message) => {
      const Constructor = Vue.extend(Toast)
      let toast = new Constructor()
      toast.$slots.default = message
      toast.$mount()
      document.body.appendChild(toast.$el)
    }
  }
}