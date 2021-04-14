import Vue from 'vue'
import App from './App.vue'
import store from './store/index.js'

Vue.config.productionTip = false

Vue.prototype.$ = window.jquery
Vue.prototype.jquery = window.jquery
Vue.prototype.ajaxurl = window.ajaxurl
Vue.prototype.wp = window.owy_wp

import pushHistory from 'Libs/push-history.js'
Vue.prototype.pushHistory = pushHistory

/* Wp data synch */
import wp_options_synch from 'Libs/wp-options-synch.js'
Vue.prototype.wp_options_synch = wp_options_synch

/* Colors */
import generate_schemes from 'Libs/generate-schemes.js'
Vue.prototype.generate_schemes = generate_schemes

/* WP Ajax */
import wp_ajax from 'Libs/wp-ajax.js'
Vue.prototype.wp_ajax = wp_ajax

/* PLL Translate function */
import pll__ from 'Libs/pll__.js'
Vue.prototype.pll__ = pll__

/* Fontawesome-icon */
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon' 
// globally
Vue.component('v-icon', Icon)
/* end Fontawesome-icon */

/* Actions & Filters */
import {wpdk_do_action, wpdk_add_action, wpdk_apply_filters, wpdk_add_filter} from 'Libs/action-filter.js'
Vue.prototype.do_action = wpdk_do_action
Vue.prototype.add_action = wpdk_add_action
Vue.prototype.apply_filters = wpdk_apply_filters
Vue.prototype.add_filter = wpdk_add_filter


if( process.env.NODE_ENV === 'development' ) console.log('development mode')

new Vue({
	store,
	render: h => h(App),
}).$mount('#app')

window.vue = Vue