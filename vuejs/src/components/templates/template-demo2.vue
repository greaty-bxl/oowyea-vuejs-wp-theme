<template>
	<div class="section-wrap">
		<div class="clear"></div>

		<div id="fixit1">Fixed element: auto</div>
		<div id="fixit2">Fixed element: limited</div>
		<h1 class="on-screen title-demo2">{{post.post_title}}</h1>
		<p>Demo 2 template</p>
		
		<div class="clear"></div>
	</div>
</template>

<script>

import fixit from 'Libs/fix-it.js'

export default {
	components: {
		
	},
	props: {
		'post' : Object
	},
	mounted (){
		var $ = this.$

		this.$emit('template_mounted')

		$(this.$el).css('height', '200vh')

		$(this.$el).parents('.section').css({
			'background-color': this.post.metas.background_color[0],
		});

		//animate the title on enter in screen
		$('.title-demo2').on('enter-screen', (event) => {

			var delay

			//scroll down or on load
			if( ( event.sens == 1 || event.sens == 0 )
				&& event.scrollingType != "links-and-anchors") 
			{
				delay = 500
			}
			//scroll up
			else 
			{
				delay = 12
			}

			$('.title-demo2')
				.css('opacity', '0')
				.stop()
				.delay(delay)
				.animate({opacity: 1}, 500)
		})

		//if out of screen state
		$('.title-demo2').on('leave-screen', () => {
			$('.title-demo2').stop().css('opacity', '0')
		})
		
		//fix div in section
		fixit(this, '#fixit1', '80vh', '0')
		//fix div in section
		fixit(this, '#fixit2', '80vh', '50%', 'limited')
		
	}
}
</script>

<style>
	#fixit1, #fixit2{
		color: #FF0000;
		background-color: #624343;
		height: 20vh;
		width: 50%;
	}
</style>