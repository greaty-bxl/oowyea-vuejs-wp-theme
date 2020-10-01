<template>
	<div :style="{ 'margin-to': width, 'width': width, 'height': height }" class="lottie" ></div>
</template>

<script>
	import lottie from 'lottie-web'

	export default{
		data(){
			return {
				anim: null,
				selected: false,
				animating: false
			}
		},
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

			this.anim = lottie.loadAnimation({
				container: this.$el, // the dom element that will contain the animation
				renderer: 'svg',
				loop: true,
				autoplay: true,
				animationData: require('Assets/animation.json'),

			});

			this.anim.setSpeed(0.4)
		},
	}
</script>