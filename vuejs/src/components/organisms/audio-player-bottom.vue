<template>
	<transition name="fade">
		<div :class="classes" v-if="show">{{section.template}}</div>
	</transition>
</template>

<script>
//v-if="!excludes.includes(section.template)"

export default{
	data(){
		return{
			section: {
				template: null
			},
			excludes: [
				'radio'
			],
			classes:{},
			show: true
		}
	}, 
	mounted(){
		//let acfOptions = this.$store.state.wp.acf.options 
		
		this.classes[ this.$style['audio-player-bottom'] ] = true

		this.$store.subscribe((mutation) => {
			if( mutation.payload.current_section )
			{
				this.section = mutation.payload.current_section
				if( this.excludes.includes(this.section.template) )
				{
					console.log('radio excludes');
					this.show = false
				}
				else
				{
					this.show = true
				}
			}
		})
	},
}
</script>

<style module>
	.audio-player-bottom{
		position: fixed;
		bottom: 0;
		height: 50px;
		width: 100%;
		background: #E95656;
		opacity: 1;
		z-index: 3000;
		transition: transform 0.250s;
	}
</style>

<style>
	.fade-enter-active, .fade-leave-active {
		transform: translateY(0px);
	}
	.fade-enter, .fade-leave-to {
		transform: translateY(50px);
	}
</style>