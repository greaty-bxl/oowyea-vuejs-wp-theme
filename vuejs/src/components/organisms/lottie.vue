<template>
	<div :style="{ 'width': width, 'height': height }"></div>
</template>

<script>
	import lottie from 'lottie-web'

	export default{
		props:{
			width: {
				type: String,
				value: 'auto'
			},
			height: {
				type: String,
				value: 'auto'
			},
		},
		mounted(){

			/*let $ = this.$*/
			console.log( window.location.pathname );

			console.log( window.location );
			//console.log( require('Assets/star-anim.json') );

			lottie.loadAnimation({
				container: this.$el, // the dom element that will contain the animation
				renderer: 'svg',
				loop: true,
				autoplay: true,
				animationData: require('Assets/star-anim.json'),
				//path: 'Assets/star-anim.json' // the path to the animation json
			});

		}
	}
</script>