<template>
	<div :class="$style['section-wrap']" class="section-wrap">
		
		<VideoBg type="youtube" :bgcolor="bgYt" />

		<div class="clear"></div>
		<div>
			<h1 v-html="post.post_title"></h1>
			<div><em>Indie P2P Web Radio</em></div>	
		</div>
		<div v-html="post.post_content"></div>

		<RadioPlayer />

		<AudioVisualizer />		
	</div>
</template>

<script>
import VideoBg from 'Organisms/radio-youtube-background.vue'
import RadioPlayer from 'Organisms/radio-centered-player.vue'
import AudioVisualizer from 'Organisms/audio-visualizer.vue'

export default{
	data(){
		return {
			bgYt: null
		}
	},
	components:{
		VideoBg,
		RadioPlayer,
		AudioVisualizer,
	},
	props: {
		'post' : Object,
		'section' : Object
	},
	mounted() {
		console.log(this.section.style.background);

		this.bgYt = this.section.style.background
		this.$emit('template_mounted', this)
	},
}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Libre+Caslon+Display&family=Open+Sans+Condensed:wght@300&display=swap');

/*body{
	font-family: 'Libre Caslon Display', serif;
}*/
</style>

<style module>

.section-wrap h1{
	color: #fff;
	margin-top: 10vh;
	margin-bottom: 0;
	font-family: 'Libre Caslon Display', serif;
}
.section-wrap em{
	font-family: 'Libre Caslon Display', serif;
}
.section-wrap h2{
	font-family: 'Open Sans Condensed', sans-serif;
}

.section-wrap{
	color: #fff;
}

</style>