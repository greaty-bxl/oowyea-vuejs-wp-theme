<template>
        <div class="section-wrap">
        <div class="clear"></div>
			<div class="title mainSection" >
				<h1>Dès qu'il s'agit de creativité, nous<br> sommes là ! Dans le web,
						dans le print,<br> nous prenons notre pied.</h1>
				</div>
				</div>
</template>

<script>

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

	

		//Important to let works basic functions
		this.$emit('template_mounted')

			console.log(this.wp);
	}
}

</script>


<style>
body, html { 
    padding:0;
	margin: 0 ;
	font-family: 'Myriad pro', sans-serif; 
	color: #e1e1e1;
	box-sizing: border-box;
	}

.mainSection {
    padding: 12rem 4.5rem;
}

.title {
    font-size: 4.5rem;
	font-family: 'Gotham Book Regular', sans-serif;
    text-align: left;
    color: white;
}
</style>