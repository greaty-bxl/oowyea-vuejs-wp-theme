import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

/* using class as import for clearer code, take care than this in the class is the store instead of the class itself */
import main_audio from 'Store/audio.js'
//import {wp, wp_mutation, wp_getters} from 'Store/wp.js'
import wp from 'Store/wp.js'
import radio from 'Store/radio.js'

export default new Vuex.Store({
	state: {
		main_audio: main_audio.state,
		wp: wp.state,
		radio: radio.state,
	},
	mutations: {
		/* WP */
		//wp_mutation,
		/* Audio */
		update_main_audio_src: main_audio.update_main_audio_src,
		play_pause: main_audio.play_pause,
		/* Radio */
		init_radio: radio.init_radio,
	},
	getters: {
		//wp_getters,
		/*radio_getters: (state) =>{
			this.state.radio = radio_getters(state)
		}*/
	}
})