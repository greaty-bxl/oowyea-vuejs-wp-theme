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

					if( template.post_name == 'owy-template-'+store.grapes_template.metas.header )
					{
						header_html = template.metas.owy_html
					}
					else if( template.post_name == 'owy-template-'+store.grapes_template.metas.footer )
					{
						footer_html = template.metas.owy_html
					}
					else {
						otherHtml += template.metas.owy_html
					}
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

			result['gjs-css'] = store.wp.owy_builder_css


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
				let header_html = null
				let footer_html = null

				if( type == 'header' )
				{
					selector = 'header'
				}
				else if( type == 'footer' )
				{
					selector = 'footer'
				}
				else if( type == 'hierarchy' || type == 'page' )
				{
					console.log('save header and footer');
					header_html = jhtml.find('header').html()
					footer_html = jhtml.find('footer').html()
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
					'header_html' : header_html,
					'footer_html' : footer_html
					//'js' : Vue.editor.getJs()
				}, (result) => {

					console.log('result', result);

					store.ajax_template_saving = false

					let hf_names = ['header', 'footer']
					let hf_html = ''

					Vue.jquery.each(store.wp.owy_templates, function(index1, group) {
						
						Vue.jquery.each(group, function(index2, template) {

							Vue.jquery.each(hf_names, function(index3, hf_name) {

								if( template['post_name'] == 'owy-template-'+ grapes_template['metas'][hf_name])
								{
									console.log('replace '+hf_name+' in store', template);
									if( hf_name == 'header' ) hf_html = header_html
									else hf_html = footer_html

									Vue.$store.state.wp.owy_templates[index1][index2]['metas']['owy_html'] = hf_html
								}
							})

							if( grapes_template['ID'] == template['ID'] )
							{								
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