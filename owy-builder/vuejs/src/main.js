import * as Vue from "vue";
import App from './App.vue'
import store from './store/index.js'

const app = Vue.createApp(App);

/*
	JQuery Plugins
*/
import serializeObject from 'Libs/jquery/serializeObject.js'
window.jquery.fn.serializeObject = serializeObject

const glProps = app.config.globalProperties

/* 
	WP Props
*/
glProps.jquery = window.jquery
glProps.ajaxurl = window.ajaxurl
glProps.wp = window.owy_wp
glProps.acf = window.acf

/*
	font awesome	
*/
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
//import { dom } from '@fortawesome/fontawesome-svg-core'

library.add(fas, far, fab)
app.component('font-awesome-icon', FontAwesomeIcon)

//app.config.productionTip = false

/* 
	grapes functions
*/
import init_owy_panels from 'PluginLib/grapes/init-panels.js'
glProps.init_owy_panels = init_owy_panels

import init_owy_blocks from 'PluginLib/grapes/init-blocks.js'
glProps.init_owy_blocks = init_owy_blocks

import init_owy_sectors from 'PluginLib/grapes/init-sectors.js'
glProps.init_owy_sectors = init_owy_sectors

import wp_data from 'PluginLib/grapes/wp-data-funct.js'
let $ = glProps.jquery
$.each(wp_data, (index, val) => {
	glProps[index] = val
});

/*
	Init App
*/
app.use(store);
app.mount('#editor')