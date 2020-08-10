<template>
    <div class="section-wrap">
        <div class="clear"></div>
		<div class="titleStudio">Greaty, c’est de la création graphique et digital sur 
            mesure depuis 2013 mais surtout une expérience 
            professionnelle dans le domaine graphique et digital 
            depuis plus de 10 ans ce qui nous permet de nous adapter 
            facilement et rapidement aux diverses demandes de nos clients.
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

		smart_fonts({
			'.titleStudio' :54
		})
	

		//Important to let works basic functions
		this.$emit('template_mounted')
	

	}
}

</script>

<style lang="scss" scoped>

.titleStudio {
	font-family: 'Gotham-Bold';
    text-align: left;
    color: #E1E1E1;
    padding: 0 3rem;
}
</style>