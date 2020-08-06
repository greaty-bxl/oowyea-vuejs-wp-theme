<template>
	<span>
		<AcfImg v-if="acf_field.type == 'image'" :value="acf_field.value"/>
		<div v-else v-html="acf_field.value"></div>
	</span>
</template>

<script>
import acf_get_field from 'Libs/acf-get-field.js'

import AcfImg from 'Molecules/acf-image.vue'

export default{
	components:{
		AcfImg
	},
	props:{
		field: null,
	},
	data(){
		return {
			acf_field: {
				value:'',
				type: ''
			}
		}
	},
	mounted(){
		let $ = this.$
		let section =  $(this.$el).parents('.section')

		if( $(this.$el).parents('#header').length )
		{
			//console.log( 'ACF header' )
			$('#app').on('section-top-ready scroll', () => {
				let new_section = this.wp.sections[window.current_section_index]
				if( new_section != section )
				{
					//console.log( 'ACF update header' )
					section = new_section
					this.acf_field = acf_get_field( this.field, section )
				}
			});
		}
		else if( $(this.$el).parents('#footer').length )
		{
			//console.log( 'ACF footer' )
			this.acf_field = acf_get_field( this.field, section )
		}
		else if( section.length )
		{
			//console.log( 'ACF section' )
			this.acf_field = acf_get_field( this.field, section )
		}
	}
}
</script>