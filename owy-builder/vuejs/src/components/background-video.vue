<template>
	<div id="background-video">
		<video playsinline autoplay muted loop poster>
			<source :src="src" type="video/mp4">
			<p>Your browser doesn't support HTML5 video. Here is a <a href="#">link to the video</a> instead.</p>
		</video>
	</div>
</template>

<script type="text/javascript">
	let max_video = Math.floor( Math.random() * Math.floor(5) ) + 1;

	export default {
		data(){
			return {
				src: 'http://localhost:8081/' + require('../assets/video-'+max_video+'.mp4')
			}
		},
		mounted(){
			console.log( 'random 6',  );
		}
	}
</script>
<style lang="scss">
	#background-video {
		overflow: hidden;
	}
	#background-video video{
		
		object-fit: cover;
		width: 100vw;
		height: 100vh;
		position: fixed;
		top: 0;
		left: 0;
	}
</style>