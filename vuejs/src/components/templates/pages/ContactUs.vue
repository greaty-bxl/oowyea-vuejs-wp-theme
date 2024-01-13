<template>
	<div class="section-wrap">
		<div class="clear"></div>

		<div class="container-fluid min-vh-100 top-bg" :style="{backgroundImage: 'url('+post.thumb+')' }"></div>
		<div class="wp-content">
			<div class="row">
				<div data-scroll data-scroll-speed="2" class="col-xl-6 col-lg-12 p-6" style="text-align: left;">
					<h1 data-scroll data-scroll-offset="10%" class="title">
						<div data-scroll data-scroll-speed="-0.3" data-scroll-direction="horizontal">CONTACTEZ</div>   
						<div data-scroll data-scroll-speed="0.3" data-scroll-direction="horizontal">AL PICCOLO</div>
						<div data-scroll data-scroll-speed="-0.3" data-scroll-direction="horizontal">MONDO</div>
					</h1>
					<div data-scroll class="section-link-container">
						<div data-scroll data-scroll-speed="0.7" data-scroll-direction="horizontal" >
							<a class="section-link" target="_blank" href="assets/76707-Menu-BR-SC-12.pdf">>> ENVOYER UN MESSAGE</a>
						</div>	
					</div>
					<div data-scroll class="section-link-container">
						<div data-scroll data-scroll-speed="0.7" data-scroll-direction="horizontal" >
							<a class="section-link" target="_blank" href="assets/76707-Menu-BR-SC-12.pdf">>> RÉSERVER UNE TABLE</a>
						</div>	
					</div>
				</div>
			</div>
			<div class="row px-6">
				<div class="col-xl-4 col-lg-12" style="text-align: left;" v-html="post.acf_fields.contact_col_1">
					
				</div>
				<div class="col-xl-4 col-lg-12" style="text-align: left;" v-html="post.acf_fields.contact_col_2">
					
				</div>
				<div class="col-xl-4 col-lg-12" style="text-align: left;" v-html="post.acf_fields.contact_col_3">
					
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
	
		}
	}
</script>