<template>
	<div class="section-wrap">
		<div class="clear"></div>

		<div style="min-height: 100vh;" class="wp-content d-flex align-items-center justify-content-center row">
			<div data-scroll data-scroll-speed="2" class="col-xl-6 col-lg-12 p-6" style="text-align: left;">
				<h1>
					<div data-scroll data-scroll-speed="-0.3" data-scroll-direction="horizontal">ORGANISEZ</div> 
					<div data-scroll data-scroll-speed="0.3" data-scroll-direction="horizontal">VOTRE</div>
					<div data-scroll data-scroll-speed="-0.3" data-scroll-direction="horizontal">BANQUET</div>
				</h1>
				<div v-html="post.post_content"></div>
				<div data-scroll data-scroll-speed="0.7" data-scroll-direction="horizontal" >
					<a class="section-link" href="#">>> EN SAVOIR PLUS</a>
				</div>
			</div>
			<div style="min-height: 100vh; background-size: cover;" class="col-xl-6 col-lg-12" :style="{backgroundImage: 'url(assets/49-al-Piccolo-Mondo-Bruxelles.jpg)'}">
				
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			'post' : Object
		},
		mounted () {
			this.$emit('template_mounted')
		}
	}
</script>