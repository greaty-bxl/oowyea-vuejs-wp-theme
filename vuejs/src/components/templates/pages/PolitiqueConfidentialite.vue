<template>
	<div class="section-wrap">
		<div class="clear"></div>

	
		<div class="wp-content">
			<div data-scroll data-scroll-speed="2" class="col-xl-12 col-lg-12 px-6" style="text-align: left;margin-top: 300px;">
				<h1 data-scroll data-scroll-offset="10%" class="title">
					<div data-scroll data-scroll-speed="-0.3" data-scroll-direction="horizontal">POLITIQUE DE</div>
					<div data-scroll data-scroll-speed="0.3" data-scroll-direction="horizontal">CONFIDENTIALITÉ</div>
				</h1>
			</div>
			<div data-scroll class="post_content col-xl-8 col-lg-12 px-6" style="text-align: left;" v-html="post.post_content"></div>		
		</div>
		<div class="clear"></div>
	</div>
</template>

<script>
	export default {
		components: {
			
		},
		props: {
			'post' : Object
		},
		mounted (){
			this.$store.state.menu_degrade = false
		},
	}
</script>