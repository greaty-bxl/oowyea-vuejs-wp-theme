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
		let section =  ''

		if( $(this.$el).parents('#header').length )
		{
			//console.log( 'ACF header' )
			/*$('#app').on('section-top-ready scroll after_next_page', () => {
				let new_section = this.wp.sections[window.current_section_index]
				if( new_section != section )
				{
					//console.log( 'ACF update header' )
					section = new_section
					this.acf_field = acf_get_field( this.field, section )
				}
			});*/
			
			this.$store.subscribe( (mutation) => {
				if( mutation.type == 'section_change')
				{
					let new_section = this.$store.state.wp.current_section
					if( new_section != section )
					{
						
						section = new_section

						let new_val = acf_get_field( this.field, section )
						
						if( JSON.stringify(new_val) != JSON.stringify(this.acf_field) ){
							this.acf_field = new_val	
						} 
					}
				}
				//console.log('acf mutation', mutation);
			})

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