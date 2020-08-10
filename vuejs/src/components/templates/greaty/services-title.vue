<template>
	<div class="section-wrap">
        <div class="clear"></div>
		<div class="titleServices" >
			<div >Greaty est spécialisée dans la communication, 
			l’élaboration d’images de marque, les solutions digitales 
			et les supports imprimés.
			</div>
		</div>
	</div>
</template>

<script>
import smart_fonts from "Libs/smart-fonts.js"
export default {
	components: {

	},
	props: {
		'post' : Object
	},
	mounted (){


		var $ = this.$

		$(this.$el).parents('.section').css({
			'background-color': this.post.metas.background_color[0],

			
		});

		$(this.$el).css({
			'justify-content':'center'
		})


		//Important to let works basic functions
		this.$emit('template_mounted')


		smart_fonts({
			'.titleServices' :54
		})
	

	}
}

</script>


<style lang="scss" scoped>

.titleServices {
	font-family: 'Gotham-Bold';
    text-align: left;
    color: #E1E1E1;
	padding: 0 5.5rem;
}



</style>