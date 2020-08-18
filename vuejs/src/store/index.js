import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import {audio_state, audio_mutation, audio_getters} from 'Store/audio.js'

export default new Vuex.Store({
	state: {
		audio_state
	},
	mutations: {
		audio_mutation
	},
	getters: {
		audio_getters
	}
})