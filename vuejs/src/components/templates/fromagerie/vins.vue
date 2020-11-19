<template>
    <div class="section-wrap">
		<div class="clear"></div>

		<div class="globale-plateaux-fromages">
		
			<div class="section-plateaux-fromages-plateaux-fromages">

				<h5 class="title-section-les-asortiments-de-fromages">Vins</h5>

				<swiper class="swiper3" :options="swiperOption10">

					<swiper-slide  class="slide-plateaux-fromages"  v-for="child in wp.les_vins" :key="child.ID"  >

						<a target="_blank" :href="child.permalink">
							<div class="image-plateaux-fromages swiper-lazy"  v-bind:data-background="child.thumb" height="300" width="100%" ></div>
						</a>
						<p v-html="child.post_title" class="name-plateau-fromage"></p>
						<p v-html="child.price" class="prix-plateau-fromage"></p>
						<p class="ajouter-au-panier"><a target="_blank" :href="child.permalink">En savoir plus</a>  </p>


					</swiper-slide>

				</swiper>

			</div>

		</div>

		<div class="clear"></div>
    </div>
 
</template>

<script>

import smart_fonts from 'Libs/smart-fonts.js';
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



	mounted(){

		console.log(this.wp.plateaux_fromages);

		// var $ = this.$

		smart_fonts({
			'.title-section-plateaux-fromages' : 25,
			'.title-section-les-asortiments-de-fromages' : 25,
		})

        // console.log(this.wp.sections[2].acf_fields.a_propos_plateaux-fromages);
        

		this.$emit('template_mounted', this);

	},

	name: 'swiper-example-default',
	title: 'Default',
	init: false,
	
	data () {
		return {

			swiperOption10: {
				initialSlide: 0,	

				// Disable preloading of all images
				// Enable lazy loading
				preloadImages: false,
				lazy: true,

				loop: false,
				allowTouchMove: true,
				runCallbacksOnInit: true,
				watchSlidesProgress: true,
				watchSlidesVisibility: true,
				speed: 700,
				reachEnd: true,
		
				breakpoints: {
					// when window width is >= 320px
					1100: {
					slidesPerView: 3.5,

					},

					400: {
					slidesPerView: 1.7,
					},

					100: {
					slidesPerView: 1.1,
					},
				},

				on : {
					init : function(){

						let $ = window.jquery

						$(this.$el).find('.swiper-slide').css('visibility', 'visible').animate({'opacity':1}, 500);

					}
				}

		}
	}

}
}



</script>

<style>
   
	#vins{

		min-height: auto !important;

	}

	#vins .section-wrap{

		padding-bottom: 120px;
	}


</style>

<style scoped >

@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;1,300;1,400&display=swap');

	.section-wrap{
		min-height: auto;
		background-color: #fff;
	}

@media screen and (max-width: 1100px) and (min-width: 600px){

	.swiper-container-horizontal{

		margin-left: 70px;
	}

	h5{

		font-size: 26px !important;
	}

}

@media screen and (max-width: 600px){

	.swiper-container-horizontal{

		margin-left: 30px;
	}


}

a {
	display: flex;	
}



</style>





