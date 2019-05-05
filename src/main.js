import Vue from 'vue'
import App from './App'
import routes from './routes'
import store from './store'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  routes,
  components: { App },
  template: '<App/>',
  store
})
