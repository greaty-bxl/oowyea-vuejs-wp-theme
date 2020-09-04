<template>
	<div class="dynamic-style"><slot/></div>
</template>
<script>
export default {
	props : {
		id : String
	},
	mounted(){
		/*console.log('dynamic style', this.id)*/
		/*console.log(this.$slots.default[0].text)*/

		this.update()
	},
	methods:{
		update: function(){
			//console.log('slot_change');

			let $ = this.$

			if( $('head').find('#'+this.id).length )
			{
				setTimeout( ()=>{
					$('head').find('#'+this.id).text( this.$slots.default[0].text )
				}, 1 )	
			}
			else
			{
				$('head').append('<style id="'+this.id+'"></style>')
				setTimeout( () => this.update(), 1 )
				
			}
		}
	}
}
</script>

<style>
	.dynamic-style{
		display: none;
	}
</style>