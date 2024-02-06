<template>	
	<swiper ref="mySwiper" class="swiper-wrap swiper-container-free-mode" :options="swiperOptions" v-if="sildes.length > 0" >
		<swiper-slide v-for="(silde, index) in sildes" :key="index" class="swiper-slide" data-scroll :data-scroll-speed="silde.speed" :data-img="silde.large">
			<div data-scroll :data-scroll-offset="silde.offset" class="img-bg-100" :style="{backgroundImage: 'url('+silde.img+')'}">&nbsp;</div>
		</swiper-slide>
	</swiper>
</template>

<script>

	import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
	import 'swiper/css/swiper.css';
	/*import is from "is_js"*/

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
				percent_test: '15%',
				sildes : [
					],
				swiperOptions : {
					preloadImages: true,
					lazy: false,
					loop: true,
					autoplay: {
						delay: 1,
						disableOnInteraction: false
					},
					freeMode: true,
					freeModeMomentum: true,
					freeModeMomentumRatio: 0.2, 
					/*slidesPerView: 'auto',*/
					speed: 8000,
					grabCursor: true,
					mousewheelControl: true,
					keyboardControl: true,

					breakpoints: {
						// when window width is >= 320px
						1100: {
						slidesPerView: 3.8,
						spaceBetween: 60,
						},

						100: {
						slidesPerView: 2.17,
						spaceBetween: 30,
						},
					},
					on: {
						click: () => {
							/*if( is.desktop() )
							{
								this.open_img( this.$(swiper.target).parent().data('img') )	
							}*/							
						},
						init: () => {
							console.log('swiper init', this.$refs.mySwiper);
						},
						afterInit: (swiper) => {
							console.log('swiper init', swiper);
							this.$store.state.locomotive.update()
						}
					}
				},
				swiper_obj : null,
			}
		},
		mounted (){
			this.$emit('template_mounted')

			if( this.post.acf_fields.images )
			{
				let offsets = ['15%', '30%', '5%', '25%', '10%', '25%']
				let index_offsets = 0
				let speeds = ['-1', '0.5', '-1.2', '1', '-0.7', '1.5']
				let images = this.post.acf_fields.images
				console.log('slider', images);

				images.forEach( (item, index) => {
					console.log('slider', item, index);

					this.$set(this.sildes, index, {
						img: item.sizes.medium_large,
						large: item.sizes.large,
						offset: offsets[index_offsets],
						speed: speeds[index_offsets]
					});

					index_offsets++
					if( index_offsets > 5 )
					{
						index_offsets = 0
					}
				})

				console.log('swiper refs', this.$refs.mySwiper);
			}
			
		},
		methods : {
			open_img (url) {
				this.$store.state.fullImg = url
			}
		},
		watch: {
			// Surveiller la référence $refs.mySwiper
			'$refs.mySwiper': {
				handler() {
					// La fonction handler sera exécutée lorsque la référence $refs.mySwiper change
					// newSwiper est la nouvelle valeur de la référence
					// oldSwiper est la valeur précédente de la référence
					
					setTimeout( () => {
						console.log('La référence $refs.mySwiper a changé ! Nouvelle valeur :', this.$refs.mySwiper);
						this.$refs.mySwiper.options.speed = 1000

						this.swiperOptions.speed = 1000
						this.$refs.mySwiper.updateSwiper()
					}, 10 )
				},
				immediate: true, // Exécuter le watcher immédiatement après la création du composant
			},
		},

	}
</script>

<style scoped>

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
		background-color: #510E1C;
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

	.swiper-slide > *:hover {
		/*cursor: zoom-in;*/
		/*cursor: url('http://dev.alpiccolomondo.be/assets/mouse-plus.svg') 30 30, auto;*/
	}

	

	@media (max-width: 1099px) {
		.swiper-wrap {
			width: 160%;
			margin-left: -60%;
			padding: 100px 0;
			margin-top: -100px;
		}

		.swiper-slide {
			padding-bottom: 48%; /* ceci crée le carré */
		}
	}

	@media (max-width: 399px) {

	}
</style>

<style type="text/css">
	.swiper-container-free-mode > .swiper-wrapper{
		transition-timing-function : linear;
	}

</style>