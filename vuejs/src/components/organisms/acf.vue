<template>
	<span>
		<AcfImg v-if="type == 'image'"/>
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
		type: null
	},
	mounted(){
		let $ = this.$

		let section = null

		if( $(this.$el).parents('#header').length )
		{
			console.log( 'ACF header' )
			$('#app').on('section-top-ready scroll', () => {
				let new_section = this.wp.sections[window.current_section_index]
				if( new_section != section )
				{
					console.log( 'ACF update header' )
					section = new_section
					acf_get_field( this.field, section )
				}
			});
			
		}
		else if( $(this.$el).parents('#footer').length )
		{
			console.log( 'ACF footer' )
			acf_get_field( this.field, section )
		}
		else if( section.length )
		{
			console.log( 'ACF section' )
			section = $(this.$el).parents('.section')
			acf_get_field( this.field, section )
		}

		


		

		//console.log( this );
		//console.log( index );
		//console.log( this.wp.acf.field_objects );
		//console.log( acf_get_field() );
	}
}
</script>