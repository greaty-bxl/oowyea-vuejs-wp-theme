<template>
	<div class="section-wrap">
		<div class="clear"></div>

		<div style="min-height: 100vh; height: auto; position: relative;" class="wp-content d-flex align-items-start justify-content-center row">
			<div data-scroll data-scroll-speed="2" class="col-xl-6 col-lg-12 p-6" style="text-align: left;">
				<h1 data-scroll data-scroll-offset="10%">
					<div data-scroll data-scroll-speed="-0.3" data-scroll-direction="horizontal">ORGANISEZ</div> 
					<div data-scroll data-scroll-speed="0.3" data-scroll-direction="horizontal">VOTRE</div>
					<div data-scroll data-scroll-speed="-0.3" data-scroll-direction="horizontal">BANQUET</div>
				</h1>
				<div data-scroll class="post_content" v-html="post.post_content"></div>
				<div data-scroll class="section-link-container">
					<div data-scroll data-scroll-speed="0.7" data-scroll-direction="horizontal" >
						<a class="section-link" href="#">>> EN SAVOIR PLUS</a>
					</div>
				</div>
			</div>
			<div class="img-bg-banquet-container col-xl-6 col-lg-12">
				<div data-scroll data-scroll-offset="50%" class="img-bg-banquet" :style="{backgroundImage: 'url(assets/al-Piccolo-Mondo-Bruxelles_banquet.jpg)'}">
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
		}
	}
</script>

<style type="text/css">
	.img-bg-banquet-container{
		height: 900px;
	}

	[data-scroll].img-bg-banquet {
		background-size: cover;
		background-position: center center;
		height: 0;
		transition: all 0.8s ease-in-out;
	} 

	[data-scroll].img-bg-banquet.is-inview {
		height: 900px;
	}

	@media (max-width: 991px) {

		.img-bg-banquet-container{
			height: 50vh;
		}

		[data-scroll].img-bg-banquet.is-inview {
			height: 50vh;
		}
	}

</style>