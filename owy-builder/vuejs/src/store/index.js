import { createStore } from "vuex" 

import wp from 'Store/wp.js'
import option from 'Store/option.js'

const store = createStore({
	state:{
		grapes_template: null,
		ajax_template_saving: false,
		ajax_template_saving_queue: false,
		examples_vars : {},
		modal_wp_data_attrs: {},
		right_menu : null,
		wp: wp.state,		
	},
	mutations: {
		/* WP */
		update_wp: wp.update_wp,
		sections_load: wp.sections_load,
		section_change: wp.section_change,
		/* Option */
		set_option: option.set_option,
		get_option: option.get_option,
	}
})

export default store