<template>
	<div class="section-wrap" data-scroll-section>
		<div class="clear"></div>

	
		<div style="min-height: 100vh" class="wp-content d-flex flex-column align-items-start justify-content-center">

			<h1 class="p-6" data-scroll data-scroll-speed="1">
				NOTRE SAVOIR FAIRE, <br>DEPUIS 1979
			</h1>
			
			<swiper class="swiper-wrap" :options="swiper" >
				<swiper-slide class="swiper-slide" :style="{backgroundImage: 'url(assets/savoir-faire/1.jpg)'}" data-scroll data-scroll-speed="-1"></swiper-slide>
				<swiper-slide class="swiper-slide" :style="{backgroundImage: 'url(assets/savoir-faire/2.jpg)'}" data-scroll data-scroll-speed="0.5"></swiper-slide>
				<swiper-slide class="swiper-slide" :style="{backgroundImage: 'url(assets/savoir-faire/3.jpg)'}" data-scroll data-scroll-speed="-1.2"></swiper-slide>
				<swiper-slide class="swiper-slide" :style="{backgroundImage: 'url(assets/savoir-faire/4.jpg)'}" data-scroll data-scroll-speed="1"></swiper-slide>
				<swiper-slide class="swiper-slide" :style="{backgroundImage: 'url(assets/savoir-faire/5.jpg)'}" data-scroll data-scroll-speed="-0.7"></swiper-slide>
				<swiper-slide class="swiper-slide" :style="{backgroundImage: 'url(assets/savoir-faire/6.jpg)'}" data-scroll data-scroll-speed="1.5"></swiper-slide>
			</swiper>
		</div>

		<div class="row wp-content">
			<div class="col-6 p-6">
				&nbsp;
			</div>
			<div class="col-6" data-scroll data-scroll-speed="-1.5">
				<div class="text-gold p-6">
					<p>Suivez-nous sur : <br></p>
					<p>
						Ouvert 7 jours sur 7 (fermeture annuelle du 1 au 31 août) <br>
						Déjeuner 12:00 - 15:00 <br>
						Dîner 18:00 - 00:00 (fermeture du restaurant à minuit)
					</p>
					<p>19 rue Jourdan, 1060 Bruxelles (Saint-Gilles) – Belgique +32 2 538 87 94 info@alpiccolomondo.com</p>
					<div>
						<a href="#" class="text-gold" style="text-decoration: none;">>> RÉSERVER UNE TABLE</a>
					</div>	
				</div>
			</div>	
		</div>
		
		<div class="clear"></div>
	</div>
</template>

<script>
	import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
	import 'swiper/css/swiper.css';

	export default {
		components: {
			Swiper,
			SwiperSlide,
		},
		props: {
			'post' : Object
		},
		data() {
			return {
				swiper : {
					preloadImages: true,
					lazy: false,
					loop: true,
					spaceBetween: 60,
					breakpoints: {
						// when window width is >= 320px
						1100: {
						slidesPerView: 3.8,

						},

						400: {
						slidesPerView: 1,
						},

						100: {
						slidesPerView: 1,
						},
					},
				}
			}
		},
		mounted (){
			this.$emit('template_mounted')
		}
	}
</script>

<style scoped>
	h1 {
		padding-bottom: 20px;
	}
	.section-wrap {
		text-align: left;
		background-color: #971732;
	}

	.swiper-wrap {
		width: 105%;
		margin-left: -5%;
		padding: 100px 0;
		margin-top: -100px;
	}

	.swiper-slide {
		width: 100%;
		padding-bottom: 25%; /* ceci crée le carré */
		position: relative; /* nécessaire pour positionner le contenu du slide */
		background-color: #FFFFFF;
		background-size: cover;
		background-position: center center;
	}

	.swiper-slide > * { /* tout élément enfant direct du slide */
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		/* Pour le centrer, par exemple: */
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>

<style type="text/css">


</style>