<template>
	<div class="section-wrap">
		<div class="clear"></div>
		<h1 class="on-screen title-demo2">{{post.post_title}}</h1>
		<p>Demo 2 template</p>
		<div class="clear"></div>
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
		}
	}
</script>