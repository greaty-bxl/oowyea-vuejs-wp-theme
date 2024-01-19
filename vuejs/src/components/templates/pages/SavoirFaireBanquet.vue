<template>
	<div class="section-wrap savoir-faire" >
		<div class="clear"></div>

	
		<div style="" class="wp-content d-flex flex-column align-items-start justify-content-center">

			<h1 class="p-6 col-lg-12 col-xl-12" data-scroll data-scroll-offset="10%">
				<div data-scroll data-scroll-speed="1"></div>
			</h1>
			
			<Slider :post="post" />
		</div>

		<div class="row wp-content" >
			<div class="col-xl-6 col-lg-12">
				&nbsp;
			</div>
			<div class="col-xl-6 col-lg-12" data-scroll data-scroll-speed="-1.5">
				<div data-scroll class="post_content text-gold p-6" style="margin-bottom: 70px">
					<p class="follow-us">
						<span v-html="pll__('Suivez-nous sur : ')"></span>
						
						<a target="_blank" href="https://www.instagram.com/alpiccolomondobruxelles/?hl=fr"><img height="16" src="/assets/instagram.svg"></a>
						<a target="_blank" href="https://www.facebook.com/alpiccolomondorestaurant"><img height="16" src="/assets/facebook-f.svg"></a>
						
					</p>
					<p>
						<span v-html="pll__('Ouvert 7 jours sur 7 (fermeture annuelle du 1 au 31 août) ')"></span>
						<br>
						<span v-html="pll__('Déjeuner 12:00 - 15:00 ')"></span>
						<br>
						<span v-html="pll__('Dîner 18:00 - 00:00 (fermeture du restaurant à minuit)')"></span>
					</p>
					<p>
						<a class="text-gold" target="_blank" href="https://goo.gl/maps/GvXUBsJf2VEKwhpW9">19 rue Jourdan, 1060 Bruxelles (Saint-Gilles) – Belgique</a> <br>
						<a class="text-gold" href="tel:003225388794">+32 2 538 87 94</a><br> 
						<a class="text-gold" href="mailto:info@alpiccolomondo.com">info@alpiccolomondo.com</a>
					</p>
					<div data-scroll data-scroll-speed="0.7" data-scroll-direction="horizontal">
						<a :href="reservation_url" class="section-link text-gold" style="text-decoration: none;" v-html="pll__('>> RÉSERVER VOTRE BANQUET')"></a>
					</div>
				</div>
			</div>	
		</div>

		
		
		<div class="clear"></div>
	</div>
</template>

<script>
	import Slider from 'Organisms/slider.vue'

	export default {
		components: {
			Slider
		},
		props: {
			'post' : Object
		},
		data() {
			return {
				
			}
		},
		mounted (){
			this.$emit('template_mounted')
		},
		methods : {

		},
		computed : {
			reservation_url(){
				return this.$store.state.wp.reservation_page.permalink
			},
		}
	}
</script>

<style scoped>
	h1 {
		padding-bottom: 20px;
	}

	p {
		font-weight: 400 !important;
	}

	.savoir-faire .follow-us a {
		display: inline-block;
		margin: 0px 0px 0px 10px;
		transform: translateY(-2px);
	}

	.section-wrap {
		text-align: left;
		background-color: #971732;
	}

	
</style>

<style type="text/css">


</style>