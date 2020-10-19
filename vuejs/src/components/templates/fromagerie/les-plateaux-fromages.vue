
<template>
    <div class="section-wrap">
		<div class="clear"></div>

		<div class="globale-plateaux-fromages">
		
			<div class="section-plateaux-fromages-plateaux-fromages">

				<h5 class="title-section-plateaux-fromages">> Les Plateaux fromages</h5>

				<swiper class="swiper1" :options="swiperOption10">

					<swiper-slide  class="slide-plateaux-fromages"  v-for="child in wp.plateaux_fromages" :key="child.ID"  >

						<img  class="image-plateaux-fromages" height="100%" width="100%" :src="child.thumb">
						<p v-html="child.metas._price[0] + ' €' " class="name-plateau-fromage"></p>
						<p v-html="child.post_title" class="prix-plateau-fromage"></p>
						<p class="ajouter-au-panier"><a target="_blank" :href="child.permalink">Ajouter au panier</a>  </p>


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

		// console.log(smart_fonts);

		// var $ = this.$

		smart_fonts({
			'.title-section-plateaux-fromages' : 25,
		})

        // console.log(this.wp.sections[2].acf_fields.a_propos_plateaux-fromages);
        

		this.$emit('template_mounted', this);

	},

	name: 'swiper-example-default',
	title: 'Default',
	init: true,
	
	data () {
		return {

			swiperOption10: {
			initialSlide: 0,		
			loop: true,
			allowTouchMove: true,
			runCallbacksOnInit: true,
			watchSlidesProgress: true,
			watchSlidesVisibility: true,
			speed: 700,
			reachEnd: true,
	
			breakpoints: {
			// when window width is >= 320px
			1100: {
			slidesPerView: 3.2,

			},

			400: {
			slidesPerView: 1.7,
			},

			100: {
			slidesPerView: 1.1,
			},


			}

		}
	}

}
}



</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;1,100;1,200;1,300;1,400&display=swap');
    
	.image-plateaux-fromages{

		height: 100%;
		/*background-size: cover;
		background-repeat: no-repeat;
		background: center;*/
		height: 40vh; 

	}

	.swiper-container-plateaux-fromages{

		height: 40vh;
	}

	.section-plateaux-fromages-plateaux-fromages{

	}

	.prix-plateau-fromage{

		font-family: Montserrat-Bold !important;
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
		margin-left: 70px;
		margin-bottom: 7vh;
		margin-top: 120px;
		padding-top: 7vh;

	}


	.swiper-container{

		margin-left: 170px;

	}


	@media screen and (max-width: 1100px) and (min-width: 600px){

		.swiper-container{

			margin-left: 0px
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



	}

	.slide-plateaux-fromages p {

		text-align: left;
		margin-top: 7px;
		margin-bottom: 7px;

	}

	.slide-plateaux-fromages {

		flex-direction: column;

		display: flex;

	}


	.image-plateaux-fromages {
		margin-bottom: 15px;
		text-align: left !important;
	}

	.ajouter-au-panier a{

		text-decoration: none;
		color: #666666;

	}



</style>


<style scoped >

@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;1,300;1,400&display=swap');


</style>






