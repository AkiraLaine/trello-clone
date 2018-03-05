import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from '@/routes'
import App from '@/App'
import axios from 'axios'
import store from '@/store'

Vue.config.productionTip = false

Vue.use(VueRouter)

axios.defaults.baseURL = 'http://localhost:3000'

Vue.prototype.$http = Vue.$http = axios

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
