<template>
	<div v-html="html">
		
	</div>
</template>

<script>

	import Vue from 'vue'

	function recursive_replace($, $html, blocks)
	{
		//console.log( 'recursive_replace' , $html , blocks )

		if( $html.attr('data-owy-block') )
		{

			var ComponentClass = Vue.extend(blocks[$html.attr('data-owy-block')].vue)
			var instance = new ComponentClass()
			instance.$mount() // pass nothing

			$html.replaceWith( instance.$el )
			
			console.log('is blocks', instance );
		}



		if( $html.contents() )
		{
			$html.contents().each(function(index, el) {

				if( el.nodeName != '#text' )
				{
					el = recursive_replace($, $(el), blocks, 1)
					//$html[0].children[index] = el
					//$html.find(el).replaceWith(el);
					console.log( 'el', el, $html.find(el) )
				}

				if( el.nodeName == '#text' )
				{
					//$(el)[0].textContent = 'replace text'
					console.log( 'el text', el, $html.find(el) )
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

				let $html = recursive_replace( $, $(html), this.$store.state.blocks)

				

				return $html.html()
			}
		}
	}
</script>