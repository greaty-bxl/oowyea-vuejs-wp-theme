import * as Vue from "vue";
import App from './App.vue'
import store from './store/index.js'

const app = Vue.createApp(App);

app.config.globalProperties.jquery = window.jquery
app.config.globalProperties.ajaxurl = window.ajaxurl
app.config.globalProperties.wp = window.owy_wp

app.use(store);
//import PeerRoom from '../../../../themes/oowyea-vuejs-wp-theme/vuejs/src/libs/peer-room.js'
//import PeerRoom from 'Theme_libs/peer-room.js'

app.mount('#editor')