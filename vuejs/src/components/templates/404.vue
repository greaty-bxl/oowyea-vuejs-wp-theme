<template>
	<div class="section-wrap section-404">
		<div class="clear"></div>
		<!-- <h1>404</h1>
		<p>...</p> -->
		<p>
			<video autoplay muted loop width="500">
				<!-- <source src="/media/cc0-videos/flower.webm"
				type="video/webm"> -->

				<source src="http://greaty.be/error-404.mp4" type="video/mp4">

				Sorry, your browser doesn't support embedded videos.
			</video>
			<br/>
			<a :href="$store.state.wp.options.siteurl">Back to home</a>
		</p>
		<div class="clear"></div>
	</div>
</template>

<script>

	export default {
		components: {
			//lottie
		},
		props: {
			'post' : Object
		},
		mounted (){
			console.log(this.$store.state.wp.options.siteurl);
			this.$emit('template_mounted')
		}
	}
</script>

<style type="text/css">
	.section-404{
		justify-content: space-between;
	}

	.section-404 a {
		color: #fff;
	}

</style>