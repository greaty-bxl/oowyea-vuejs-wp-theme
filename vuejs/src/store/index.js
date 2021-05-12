import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

/* using class as import for clearer code, take care than this in the class is the store instead of the class itself */
import main_audio from 'Store/audio.js'
//import {wp, wp_mutation, wp_getters} from 'Store/wp.js'
import wp from 'Store/wp.js'
import radio from 'Store/radio.js'
import option from 'Store/option.js'

export default new Vuex.Store({
	state: {
		main_audio: main_audio.state,
		wp: wp.state,
		radio: radio.state,
		option: option.state,
		is_history: false,
		history_scroll: {}
	},
	mutations: {
		/* WP */
		sections_load: wp.sections_load,
		section_change: wp.section_change,
		/* Audio */
		update_main_audio_src: main_audio.update_main_audio_src,
		play_pause: main_audio.play_pause,
		/* Radio */
		init_radio: radio.init_radio,
		/* Option */
		set_option: option.set_option,
		get_option: option.get_option,
	},
	getters: {
		//wp_getters,
		/*radio_getters: (state) =>{
			this.state.radio = radio_getters(state)
		}*/
	}
})