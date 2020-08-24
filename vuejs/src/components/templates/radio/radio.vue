<template>
	<div class="section-wrap">
		
		<VideoBg type="youtube" />

		<div class="clear"></div>
		<div>
			<h1 v-html="post.post_title"></h1>
			<div><em>Indie P2P Web Radio</em></div>	
		</div>
		<div v-html="post.post_content"></div>

		<RadioPlayer />

		<!-- <AudioPlayerBottom /> -->

		<AudioVisualizer />		
	</div>
</template>

<script>
import VideoBg from 'Organisms/radio-youtube-background.vue'
import RadioPlayer from 'Organisms/radio-centered-player.vue'
import AudioVisualizer from 'Organisms/audio-visualizer.vue'
//import AudioPlayerBottom from 'Organisms/audio-player-bottom.vue'

export default{
	components:{
		VideoBg,
		RadioPlayer,
		AudioVisualizer,
		//AudioPlayerBottom
	},
	props: {
		'post' : Object
	},
	mounted() {
		this.$emit('template_mounted', this)
	},
}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Libre+Caslon+Display&family=Open+Sans+Condensed:wght@300&display=swap');

body{
	font-family: 'Libre Caslon Display', serif;
}
	
</style>

<style>

h1{
	color: #fff;
	margin-top: 10vh;
	margin-bottom: 0;
	font-family: 'Libre Caslon Display', serif;
}
em{
	font-family: 'Libre Caslon Display', serif;
}
h2{
	font-family: 'Open Sans Condensed', sans-serif;
}

.section-wrap{
	background-color: #000;
	color: #fff;
}
	
</style>