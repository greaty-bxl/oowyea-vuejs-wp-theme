<template>
	<div :class="$style['section-wrap']" class="section-wrap">
		
		<VideoBg type="youtube" :bgcolor="'#00081D'" />

		<div class="clear"></div>
		<div>
			<h1 v-html="post.post_title"></h1>
			<div><em>Indie P2P Web Radio</em></div>	
		</div>
		<div v-html="post.post_content"></div>

		<RadioPlayer />

		<Lottie class="ico-like-lottie" />

		<AudioVisualizer />		
	</div>
</template>

<script>
import VideoBg from 'Organisms/radio-youtube-background.vue'
import RadioPlayer from 'Organisms/radio-centered-player.vue'
import AudioVisualizer from 'Organisms/audio-visualizer.vue'

import Lottie from 'Organisms/lottie.vue'



export default{
	components:{
		VideoBg,
		RadioPlayer,
		AudioVisualizer,
		Lottie
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

/*body{
	font-family: 'Libre Caslon Display', serif;
}*/
.ico-like-lottie{
	height: 20px;
}
</style>

<style module>

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