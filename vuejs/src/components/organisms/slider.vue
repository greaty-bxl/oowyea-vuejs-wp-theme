<template>	
	<swiper class="swiper-wrap" :options="swiper" v-if="sildes.length > 0" >
		<swiper-slide v-for="(silde, index) in sildes" :key="index" class="swiper-slide" data-scroll :data-scroll-speed="silde.speed" :data-img="silde.large">
			<div data-scroll :data-scroll-offset="silde.offset" class="img-bg-100" :style="{backgroundImage: 'url('+silde.img+')'}">&nbsp;</div>
		</swiper-slide>
	</swiper>
</template>

<script>

	import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
	import 'swiper/css/swiper.css';
	import is from "is_js"

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
				swiper : {
					preloadImages: true,
					lazy: false,
					loop: true,
					
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

						/*100: {
						slidesPerView: 1.8,
						spaceBetween: 20,
						},*/
					},

					on: {
						click: (swiper) => {
							if( is.desktop() )
							{
								this.open_img( this.$(swiper.target).parent().data('img') )	
							}							
						},
						afterInit: () => {
							this.$store.state.locomotive.update()
						}
					}


				}
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

					/*this.sildes[index] = {
						img: item.sizes.medium_large,
						large: item.sizes.large,
						offset: offsets[index_offsets],
						speed: speeds[index_offsets]
					}*/
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

				console.log('slider', this.sildes);
			}
			
		},
		methods : {
			open_img (url) {
				this.$store.state.fullImg = url
			}
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
		cursor: url('http://dev.alpiccolomondo.be/assets/mouse-plus.svg') 30 30, auto;
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


</style>