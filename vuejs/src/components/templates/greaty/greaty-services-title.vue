<template>
        <div class="section-wrap">
        <div class="clear"></div>
			<div class="title js-split-text mainSection" >
				<h1>Dès qu'il s'agit de creativité, nous<br> sommes là ! Dans le web,
						dans le print,<br> nous prenons notre pied.</h1>
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
			'height':'50vh',
			'min-height':'50vh'
		});

		$(this.$el).css({
			'min-height':'50vh'
		})
		smart_fonts({
			'h1' : 30,
			'p' : 14,
		})
	

		//Important to let works basic functions
		this.$emit('template_mounted')


	}
}

</script>


<style lang="scss" scoped>

.mainSection {
    padding: 12rem 4.5rem;
}

.title {
    font-size: 20px !important;
	font-family: 'Gotham-Bold';
    text-align: left;
    color: #E1E1E1;
}



</style>