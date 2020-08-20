import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import {audio, audio_mutation, audio_getters} from 'Store/audio.js'
import {wp, wp_mutation, wp_getters} from 'Store/wp.js'

export default new Vuex.Store({
	state: {
		audio,
		wp
	},
	mutations: {
		audio_mutation,
		wp_mutation
	},
	getters: {
		audio_getters,
		wp_getters
	}
})