<template>
	<div class="section-wrap">
		<div class="clear"></div>

		<div class="container-fluid min-vh-100 top-bg" :style="{backgroundImage: 'url('+post.thumb+')' }"></div>
		<div class="wp-content">
			<div class="row">
				<div class="col-xl-6 col-lg-12 px-6 my-6" style="text-align: left; border-right: 1px solid rgba(0, 0, 0, 0.2);">
					<h1 data-scroll data-scroll-offset="10%" class="title">
						<div>RÉSERVATION</div> 
					</h1>
					<div data-scroll class="post_content" v-html="post.post_content"></div>
					<div data-scroll class="section-link-container">
						<div data-scroll data-scroll-speed="0.2" data-scroll-direction="horizontal" >
							<a class="section-link" target="_blank" href="#">>> RÉSERVER UNE TABLE</a>
						</div>	
					</div>
					<div data-scroll class="section-link-container">
						<div data-scroll data-scroll-speed="0.2" data-scroll-direction="horizontal" >
							<a class="section-link" target="_blank" href="#">>> RÉSERVER VOTRE BANQUET</a>
						</div>	
					</div>
				</div>
				<div class="col-xl-6 col-lg-12 px-6 my-6" style="text-align: left;">
					<h1 data-scroll data-scroll-offset="10%" class="title">
						<div>DÉTAILS</div> 
					</h1>
					<div data-scroll class="post_content">
						<p>Consultez nos questions les plus fréquemment posées ici.</p>
						<p>Si vous préférez parler avec quelqu'un en personne ou faire une réservation plus importante, veuillez nous appeler ou nous envoyer un courriel.</p>
						<p>
							<b>Votre demande de réservation sera examinée par nos équipes qui vous répondront dans les meilleurs délais.</b>
						</p>
						<p>
							+32 2 538 87 94 <br>
							info@alpiccolomondo.com
						</p>
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
		}
	}
</script>