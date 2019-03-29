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