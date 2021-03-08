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
	grapes functions
*/
import init_owy_panels from 'PluginLib/grapes/init-panels.js'
glProps.init_owy_panels = init_owy_panels

import init_owy_blocks from 'PluginLib/grapes/init-blocks.js'
glProps.init_owy_blocks = init_owy_blocks

import data_simulate from 'PluginLib/grapes/wp-data-simulate.js'
glProps.data_simulate = data_simulate

/*
	Init App
*/
app.use(store);
app.mount('#editor')