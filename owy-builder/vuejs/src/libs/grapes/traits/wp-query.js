import * as Vue from "vue";
import wp_query_form from './wp-query-form.vue'

export default function (editor) {

	editor.TraitManager.addType('wp-query-form', {
		// Expects as return a simple HTML string or an HTML element
		createInput() {
			
			//console.log(this);
			// Create a new element container and add some content
			let el = document.createElement('div');
			Vue.createApp(wp_query_form, {
				editor: editor
			}).mount(el)
			return el;
		},
	});

	editor.on('component:selected', (el) => {
		setTimeout( () => {
			if( !el.getTrait('wp-query'))
			{
				el.addTrait({
					type: 'grp-title',
					name: 'wp-query',
					label: 'WordPress query',
				});

				el.addTrait({
					type: 'wp-query-form',
					name: 'wp-data-query',
					label: false,
				});

			}
		}, 1);
	});	
}