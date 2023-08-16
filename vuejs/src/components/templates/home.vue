<template>
	<div class="section-wrap">
		<div class="clear"></div>

		
		<div class="wp-content vue-page ">

			<VideoBackground src="video/al_piccolo_mondo_Original.mp4" class="video-container"/>

			<h1 v-html="post.post_title"></h1>
			<div v-html="post.post_content"></div>
		
		</div>
		<div class="clear"></div>
	</div>
</template>

<script>
	import VideoBackground from 'Organisms/VideoBackground'
	export default {
		components: {
			VideoBackground
		},
		props: {
			'post' : Object
		},
		mounted (){
			this.$emit('template_mounted')
		}
	}
</script>

<style type="text/css">
	.video-container{
		height: 100vh;
	}
</style>