import * as Vue from "vue";
import title from './traits/title.vue'
import events from './traits/events.js'

export default function () {

	events( this.editor )

	this.editor.TraitManager.addType('title', {
		// Expects as return a simple HTML string or an HTML element
		createInput() {
			
			// Create a new element container and add some content
			let el = document.createElement('div');
			Vue.createApp(title).mount(el)
			console.log('title vue', el);
			return el;
		},
	});


	this.editor.on('component:selected', (el) => {

		if( !el.getTrait('Events'))
		{
			el.addTrait({
				type: 'title',
				name: 'Events',
			});
		}
	});	
	
}