<template>
    <div class="section-wrap">
		<div class="clear"></div>

		<div class="globale-plateaux-fromages">
		
			<div class="section-plateaux-fromages-plateaux-fromages">

				<h5 class="title-section-plateaux-fromages">Plateaux</h5>

				<swiper class="swiper3" :options="swiperOption10">

					<swiper-slide  class="slide-plateaux-fromages"  v-for="child in wp.plateaux_fromages" :key="child.ID"  >

						<a target="_blank" :href="child.permalink">
							<div class="image-plateaux-fromages swiper-lazy"  v-bind:data-background="child.thumb" height="300" width="100%" ></div>					
						</a>
						<p v-html="child.post_title" class="name-plateau-fromage"></p>
						<p v-html="child.metas._price + ' €' " class="prix-plateau-fromage"></p>
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
				},

		}
	}

}
}



</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;1,100;1,200;1,300;1,400&display=swap');



    
	.image-plateaux-fromages{

		height: 100%;
		/*height: 33vh; */

	}

	.swiper-container-plateaux-fromages{

		height: 40vh;
	}

	.section-plateaux-fromages-plateaux-fromages{

	}

	.prix-plateau-fromage{
		font-size: 18px !important;
		/*font-family: Montserrat-Bold !important;*/
		color: #4D4D4D !important;
		font-weight: 600;
	}

	.image-plateaux-fromages{

		width: 95%;
		/*margin-left: auto;*/
		margin-right: auto;


	}

	.globale-plateaux-fromages{

		display: flex;
		flex-direction: column;

	}
	.title-section-plateaux-fromages{

		text-align: left;
		margin-left: 140px;
		margin-bottom: 5vh;
		/*margin-top: 0px !important;*/
		margin-top: 100px;
		padding-top: 5vh;
		color: #70625B;


	}
	.title-section-les-asortiments-de-fromages{

		text-align: left;
		margin-left: 140px;
		margin-bottom: 5vh;
		color: #70625B;
		/*margin-top: 0px !important;*/
		margin-top: 5vh;
		/*padding-top: 4vh;*/


	}

	@media screen and (max-width: 4000px) and (min-width: 1700px){

		.title-section-les-asortiments-de-fromages{

			margin-bottom: 7vh;
			margin-top: 7vh;


		}

		.title-section-plateaux-fromages{

			margin-bottom: 7vh;
			padding-top: 7vh;

		}

	}

	.name-plateau-fromage{

		font-size: 18px !important;
		color: #666666 !important;
		margin-bottom: 0px
	}



	.swiper-container{

		margin-left: 140px;

	}

	@media screen and (max-width: 4000px) and (min-width: 1400px){

		.title-section-plateaux-fromages{
			padding-top: 100px;
			margin-bottom: 7vh;
			margin-top: 7vh;

		}
		.title-section-les-asortiments-de-fromages{
			margin-bottom: 7vh;
			margin-top: 7vh;

		}

	}


	@media screen and (max-width: 1100px) and (min-width: 600px){

		.swiper-container{

			margin-left: 0px
		}
		.title-section-les-asortiments-de-fromages{
			margin-left: 70px !important;
			text-align: left !important;
		}
		.title-section-plateaux-fromages{

			margin-left: 70px !important;
			text-align: left !important;

		}


	}

	@media screen and (max-width: 600px){

		.title-section{

			text-align: left;
			margin-left: 30px
		}

		.swiper-container{

			margin-left: 0px
		}

		.title-section{

			/*text-align: left;*/
			margin-left: 30px;
			margin-bottom: 5vh;
			margin-top: 120px;
			padding-top: 5vh;
		}

		.title-section{

			font-size: 22px !important;
		}

		.title-section-plateaux-fromages{
			font-size: 22px !important;
			margin-left: 30px;
		}
		.title-section-les-asortiments-de-fromages{
			font-size: 22px !important;
			margin-left: 30px;
		}



	}

	.slide-plateaux-fromages p {

		text-align: left;
		margin-top: 5px;
		margin-bottom: 5px;

	}

	.slide-plateaux-fromages {

		flex-direction: column;

		display: flex;

	}


	.image-plateaux-fromages {
		margin-bottom: 15px;
		text-align: left !important;
	}

	.ajouter-au-panier{

		font-size: 14px !important;
		color: #666666 !important;
	}
	.ajouter-au-panier a{

		text-decoration: none;
		color: #666666;

	}

	#les-plateaux-fromages{

		min-height: auto !important;

	}

	#les-plateaux{

		min-height: auto !important;
	}

</style>

<style scoped >

@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;1,300;1,400&display=swap');
	
	.section-wrap{
		min-height: auto !important;
		background-color: #fff;
	}

/*	.section{

		min-height: auto !important;

	}*/

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





