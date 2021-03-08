import * as Vue from "vue";
import App from './App.vue'
import store from './store/index.js'

const app = Vue.createApp(App);

import serializeObject from 'Libs/jquery/serializeObject.js'
window.jquery.fn.serializeObject = serializeObject

app.config.globalProperties.jquery = window.jquery


app.config.globalProperties.ajaxurl = window.ajaxurl
app.config.globalProperties.wp = window.owy_wp
app.config.globalProperties.acf = window.acf


app.use(store);

app.mount('#editor')