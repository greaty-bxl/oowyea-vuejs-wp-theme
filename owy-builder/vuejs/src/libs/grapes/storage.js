import wp_ajax from 'Libs/wp-ajax.js';

export default function (Vue) {

	let store = Vue.$store.state

	return {
		// New logic for the local storage
		load(keys, clb, clbErr) {
			console.log('Grapes load', keys, clb, clbErr);

			let result = []
			result['gjs-html'] = Vue.html
			result['gjs-css'] = Vue.css
			result['gjs-js'] = Vue.js

			clb(result);
		},

		store() {
			console.log('Grapes ajax save');

			if( !store.ajax_template_saving )
			{
				store.ajax_template_saving = true

				let grapes_template = store.grapes_template 

				grapes_template.metas.html[0] = Vue.editor.getHtml()
				grapes_template.metas.css[0] = Vue.editor.getCss()
				grapes_template.metas.js[0] = Vue.editor.getJs()

				wp_ajax('owy_save_template', {
					'post': grapes_template,
					'html' : Vue.editor.getHtml(),
					'css' : Vue.editor.getCss(),
					'js' : Vue.editor.getJs()
				}, (result) => {

					store.ajax_template_saving = false

					Vue.jquery.each(store.wp.owy_templates, function(index1, group) {
						
						Vue.jquery.each(group, function(index2, template) {
							if( grapes_template['ID'] == template['ID'] )
							{
								console.log('replace in store', grapes_template);
								Vue.$store.state.wp.owy_templates[index1][index2] = grapes_template
							}
						});
					});

					if( store.ajax_template_saving_queue )
					{
						store.ajax_template_saving_queue = false
						this.store()
					}

					console.log(result, this);
				})
			}
			else
			{
				store.ajax_template_saving_queue = true
			}
		},
	}
} 