import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.prototype.$ = window.jquery
Vue.prototype.ajaxurl = window.ajaxurl
Vue.prototype.wp = window.wp

import pushHistory from 'Libs/push-history.js'
Vue.prototype.pushHistory = pushHistory

if(process.env.NODE_ENV === 'development') console.log('development mode')

new Vue({
  render: h => h(App),
}).$mount('#app')