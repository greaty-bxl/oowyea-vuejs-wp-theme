import wp_ajax from 'Libs/wp-ajax.js';

export default function (Vue) {

	let store = Vue.$store.state
	let otherTclass = 'owy-protected-other-templates'
	
	return {
		// New logic for the local storage
		load(keys, clb) {
			

			let result = []
			result['gjs-html'] = Vue.owy_html

			let header_html = ''
			let footer_html = ''
			let type = store.grapes_template.metas.type
			

			let otherHtml = ''
			Vue.jquery.each(store.wp.owy_templates, function(index, group) {
				Vue.jquery.each(group, function(index, template) {

					console.log(template.post_name, store.grapes_template.metas.header);

					if( template.post_name == 'owy-template-'+store.grapes_template.metas.header )
					{
						header_html = template.metas.owy_html
					}
					if( template.post_name == 'owy-template-'+store.grapes_template.metas.footer )
					{
						footer_html = template.metas.owy_html
					}
					otherHtml += template.metas.owy_html
				});
			});

			result['gjs-html'] += '<div data-gjs-type="other-templates" style="display:none" class="'+otherTclass+'">'+otherHtml+'<style>.'+otherTclass+'{display:none}</style></div>'
			

			if( type == 'header' )
			{
				header_html = result['gjs-html']
				result['gjs-html'] = ''
			}
			else if( type == 'footer' )
			{
				footer_html = result['gjs-html']
				result['gjs-html'] = ''
			}
			else
			{
				result['gjs-html'] = '<section class="owy-section">'+ result['gjs-html'] +'</section>'
			}

			if( header_html ){
				result['gjs-html'] = '<header>'+header_html+'</header>' + result['gjs-html']
			}

			if( footer_html ){
				result['gjs-html'] += '<footer>'+footer_html+'</footer>'
			}


			console.log('Grapes load', result['gjs-html'] );

			result['gjs-css'] = store.wp.owy_builder_css

			
			//result['gjs-js'] = Vue.js

			

			console.log('load', result);

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
				let type = store.grapes_template.metas.type
				store.ajax_template_saving = true

				let grapes_template = store.grapes_template 
				let html = Vue.editor.getHtml()

				let jhtml = Vue.jquery('<div>'+html+'</div>')
				jhtml.find('.'+otherTclass).remove()


				let selector = '.owy-section'

				if( type == 'header' )
				{
					selector = 'header'
				}

				if( type == 'footer' )
				{
					selector = 'footer'
				}

				html = jhtml.find(selector).html()

				console.log('store', html);
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