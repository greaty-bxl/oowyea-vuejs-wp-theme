<template>
	<div v-html="html">
		
	</div>
</template>

<script>

	import Vue from 'vue'

	function recursive_replace($, $html, blocks)
	{
		//console.log( 'recursive_replace' , $html , blocks )
		
		//https://css-tricks.com/creating-vue-js-component-instances-programmatically/
		//https://vuejs.org/v2/guide/render-function.html#The-Virtual-DOM

		if( $html.attr('data-owy-block') )
		{

			let content_html = recursive_replace($, $('<div>'+$html.html()+'</div>'), blocks).html()

			var ComponentClass = Vue.extend(blocks[$html.attr('data-owy-block')].vue)
			var instance = new ComponentClass({
				propsData: { 
					//tagname: 'ul',
					innerHTML: content_html
				}		
			})

			instance.$mount()

			$html.replaceWith( instance.$el )
			
			console.log('is blocks', $html.attr('data-owy-block'), instance );
		} 
		else if( $html.contents() )
		{
			$html.contents().each(function(index, el) {

				if( el.nodeName != '#text' )
				{
					el = recursive_replace($, $(el), blocks, 1)
				}			
			});
		}

		return $html

	}

	export default{
		components : {
			
		},
		props : {
			section : Object,
			header_name: String,
			footer_name: String,
		},
		computed : {
			html : function () {
				let templates = this.$store.state.wp.builder_templates_list
				let template_name
				let html
				if( this.header_name )
				{
					template_name = this.header_name
				}
				else if( this.footer_name )
				{
					template_name = this.footer_name
				}
				else
				{
					template_name = this.section.template	
				}

				html = templates[template_name]['metas']['owy_html']

				let $ = this.jquery

				//console.log( 'html' , $(html) , this.$store.state.blocks )

				let $html = recursive_replace( $, $('<div>'+html+'</div>'), this.$store.state.blocks)

				

				return $html.html()
			}
		}
	}
</script>