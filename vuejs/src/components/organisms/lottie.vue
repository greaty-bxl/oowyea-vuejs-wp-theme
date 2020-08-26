<template>
	<div :style="{ 'width': width, 'height': height }" v-on:click="click"></div>
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
				loop: false,
				autoplay: false,
				animationData: require('Assets/star-anim.json'),
			});
		},
		methods:{
			click: function(){

				if( this.selected == false )
				{
					this.anim.pause()
					this.selected = true
					//this.animating = true
					this.anim.setSpeed(3)
					this.anim.setDirection(1)
					this.anim.play()
				}
				else if( this.animating == false )
				{
					this.anim.pause()
					this.selected = false
					//this.animating = true
					this.anim.setSpeed(5)
					this.anim.setDirection(-1)
					this.anim.play()
				}
			}
		}
	}
</script>