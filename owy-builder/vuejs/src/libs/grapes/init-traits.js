import * as Vue from "vue";
import title from './traits/title.vue'
import separator from './traits/separator.vue'
import events from './traits/events.js'
import wp_query from './traits/wp-query.js'

export default function () {

	

	this.editor.TraitManager.addType('grp-title', {
		// Expects as return a simple HTML string or an HTML element
		createInput() {
			
			// Create a new element container and add some content
			let el = document.createElement('div');
			Vue.createApp(title).mount(el)
			return el;
		},
	});

	this.editor.TraitManager.addType('separator', {
		// Expects as return a simple HTML string or an HTML element
		createInput() {
			
			// Create a new element container and add some content
			let el = document.createElement('div');
			Vue.createApp(separator).mount(el)
			return el;
		},
	});


	events( this.editor )

	wp_query( this.editor )
	
	
}