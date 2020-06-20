<template>
	<div class="section-wrap">
		<div class="clear"></div>
		<h1 class="on-screen title-demo2">{{post.post_title}}</h1>
		<p>Demo 2 template</p>
		<div class="clear"></div>
	</div>
</template>

<script>
	//import {wp_content_filter} from 'Libs/wp.js'

	export default {
		components: {
			
		},
		props: {
			'post' : Object
		},
		mounted (){
			var $ = this.$

			$(this.$el).css('height', '200vh')

			this.$emit('template_mounted')

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
					delay = 50
				}

				$('.title-demo2')
					.css('opacity', '0')
					.stop()
					.delay(delay)
					.animate({opacity: 1}, 500)
			})

			$('.title-demo2').on('leave-screen', () => {
				$('.title-demo2').css('opacity', '0')
			})
		}
	}
</script>