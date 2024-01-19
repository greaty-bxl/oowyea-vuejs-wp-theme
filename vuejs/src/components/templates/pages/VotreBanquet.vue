<template>
	<div class="section-wrap">
		<div class="clear"></div>

		<div style="min-height: 100vh; height: auto; position: relative;" class="wp-content d-flex align-items-start justify-content-center row">
			<div data-scroll data-scroll-speed="2" class="col-xl-6 col-lg-12 p-6" style="text-align: left;">
				<h1 data-scroll data-scroll-offset="10%">
					<div v-for="(item, i) in splitAndTrim(post.post_title)" :key="i" 
						data-scroll :data-scroll-speed="item.speed" 
						data-scroll-direction="horizontal" v-html="item.text">
					</div>
				</h1>
				<div data-scroll class="post_content" v-html="post.post_content"></div>
				<div data-scroll class="section-link-container">
					<div data-scroll data-scroll-speed="0.7" data-scroll-direction="horizontal" >
						<a class="section-link" :href="banquet_page" v-html="pll__('>> EN SAVOIR PLUS')"></a>
					</div>
				</div>
			</div>
			<div class="img-bg-banquet-container col-xl-6 col-lg-12 no-padding">
				<div data-scroll data-scroll-offset="50%" class="img-bg-banquet" :style="{backgroundImage: 'url('+post.acf_fields.image_droite+')'}">
				</div>
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
		},
		computed : {
			banquet_page () {
				return this.$store.state.wp.banquet_page.permalink
			}
		}
	}
</script>

<style type="text/css">
	

</style>