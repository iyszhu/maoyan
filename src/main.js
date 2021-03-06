import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'animate.css'

import request from '@/utils/request'

import "./assets/reset.css"

Vue.config.productionTip = false

Vue.prototype.$request = new request()

import '@/filters/img'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
