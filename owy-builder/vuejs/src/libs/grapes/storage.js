import wp_ajax from 'Libs/wp-ajax.js';

export default function (Vue) {

	let store = Vue.$store.state
	let otherTclass = 'owy-protected-other-templates'
	return {
		// New logic for the local storage
		load(keys, clb) {
			

			let result = []
			result['gjs-html'] = Vue.owy_html

			let otherHtml = ''
			Vue.jquery.each(store.wp.owy_templates, function(index, group) {
				Vue.jquery.each(group, function(index, template) {
					otherHtml += template.metas.owy_html
				});
			});

			result['gjs-html'] += '<div data-gjs-type="other-templates" class="'+otherTclass+'">'+otherHtml+'<style>.'+otherTclass+'{display:none}</style></div>'

			result['gjs-css'] = store.wp.owy_builder_css

			//console.log('Grapes load', store.wp.owy_builder_css);
			//result['gjs-js'] = Vue.js


			Vue.editor.DomComponents.clear(); // Clear components
			Vue.editor.CssComposer.clear(); 

			Vue.editor.select(null)
			clb(result);

			Vue.editor.UndoManager.clear();


		},

		store() {
			//console.log('Grapes ajax save');

			if( !store.ajax_template_saving )
			{
				store.ajax_template_saving = true

				let grapes_template = store.grapes_template 
				let html = Vue.editor.getHtml()

				let jhtml = Vue.jquery('<div>'+html+'</div>')
				jhtml.find('.'+otherTclass).remove()

				html = jhtml.html()

				grapes_template.metas.owy_html = html//Vue.editor.getHtml()
				let css = Vue.editor.getCss()

				css = css.replace('body', '#wrapper')

				//console.log('save css', css);

				Vue.$store.state.wp.owy_builder_css = css
				//grapes_template.metas.css[0] = Vue.editor.getCss()
				//grapes_template.metas.js[0] = Vue.editor.getJs()

				

				wp_ajax('owy_save_template', {
					'post': grapes_template,
					'owy_html' : html,
					'css' : css,
					//'js' : Vue.editor.getJs()
				}, (/*result*/) => {

					store.ajax_template_saving = false

					Vue.jquery.each(store.wp.owy_templates, function(index1, group) {
						
						Vue.jquery.each(group, function(index2, template) {
							if( grapes_template['ID'] == template['ID'] )
							{
								//console.log('replace in store', grapes_template);
								Vue.$store.state.wp.owy_templates[index1][index2] = grapes_template
							}
						});
					});

					if( store.ajax_template_saving_queue )
					{
						store.ajax_template_saving_queue = false
						this.store()
					}

					//console.log(result, this);
				})
			}
			else
			{
				store.ajax_template_saving_queue = true
			}
		},
	}
} 