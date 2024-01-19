<template>
	<div class="section-wrap">
		<div class="clear"></div>

		<div class="container-fluid min-vh-100 top-bg" :style="{backgroundImage: 'url('+post.thumb+')' }"></div>
		<div class="wp-content">
			<div class="row">
				<div class="col-xl-6 col-lg-12 px-6 my-6" style="text-align: left; border-right: 1px solid rgba(0, 0, 0, 0.2);">
					<h1 data-scroll data-scroll-offset="10%" class="title">
						<div v-html="post.post_title"></div> 
					</h1>
					<div data-scroll class="post_content" v-html="post.post_content"></div>
					<div data-scroll class="section-link-container">
						<div data-scroll data-scroll-speed="0.2" data-scroll-direction="horizontal" >
							<a class="section-link" href="#" @click="open_res('restaurant')" v-html="pll__('>> RÉSERVER UNE TABLE')"></a>
						</div>	
					</div>
					<div data-scroll class="section-link-container">
						<div data-scroll data-scroll-speed="0.2" data-scroll-direction="horizontal" >
							<a class="section-link" href="#" @click="open_res('banquet')" v-html="pll__('>> RÉSERVER VOTRE BANQUET')"></a>
						</div>	
					</div>
				</div>
				<div class="col-xl-6 col-lg-12 px-6 my-6" style="text-align: left;">
					<h1 data-scroll data-scroll-offset="10%" class="title">
						<div v-html="pll__('DÉTAILS')"></div>
					</h1>
					<div data-scroll class="post_content" v-html="post.acf_fields.col_droite_text">
						
					</div>
				</div>
			</div>		
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
			console.log('post', this.post);
		},
		methods : {
			open_res(type){
				this.$store.state.reservation = true
				this.$store.state.res_type = type
			}
		}
	}
</script>