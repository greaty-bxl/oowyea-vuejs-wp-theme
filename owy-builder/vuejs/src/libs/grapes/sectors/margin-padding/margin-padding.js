import * as Vue from "vue";

import padding from "./padding.vue";

export default function(editor){

	console.log(padding, 'padding');

	console.log(Vue , 'Vue');

	console.log(editor , 'margin-padding');

		const styleManager = editor.StyleManager;

	

		styleManager.addType('margin', {
		create() {

			const el = document.createElement('div');
			console.log('el', el);
			Vue.createApp(padding).mount(el)
			// const inputEl = el.querySelector('.my-input');
			// inputEl.addEventListener('change', event => change({ event })); // change will trigger the emit
			// inputEl.addEventListener('input', event => change({ event, complete: false }));
			return el;

		},
		emit({  updateStyle }, { event, complete }) {

			const { value } = event.target;
			const valueRes = value + 'px';
			// Pass a string value for the exact CSS property or an object containing multiple properties
			// eg. updateStyle({ [props.property]: valueRes, color: 'red' });
			updateStyle(valueRes, { complete });

		},
		update({ value, el }) {

			el.querySelector('.my-input').value = parseInt(value, 10);

		},
		destroy() {
		// In order to prevent memory leaks, use this method to clean, eventually, created instances, global event listeners, etc.
		}

		})

		styleManager.addSector('spacing',{

			name: 'Spacing',
			open: true,
			properties: [{ name: 'My property' , type: 'margin' }]

		}, { at: 0 });
}