<template>
	<div :class="$style['audio-player-bottom']"></div>
</template>

<script>
export default{
	mounted(){
		let acfOptions = this.$store.state.wp.acf.options 
		
		console.log(acfOptions.active_radio, acfOptions.auto_start_everywhere);

	}
}
</script>

<style module>
	.audio-player-bottom{
		position: fixed;
		bottom: 0;
		height: 50px;
		width: 100%;
		background: #E95656
	}
</style>