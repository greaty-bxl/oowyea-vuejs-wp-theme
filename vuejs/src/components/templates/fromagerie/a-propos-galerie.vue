
<template>
    <div class="section-wrap">
		<div class="clear"></div>

		<div class="globale-galerie">
		
			<div class="section-a-propos-galerie">

				<h5 class="title-section-galerie"> A propos de nous</h5>

				<swiper class="swiper2" :options="swiperOption10">

					<swiper-slide  class="slide-a-propos"  v-for="child in post.acf_fields.a_propos_galerie" :key="child.ID"  >

						<div class="image-a-propos" height="100%" width="100%"  v-bind:style="{ 'background-image': 'url(' + child.url + ')' }"></div>

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
			'.title-section-galerie' : 25,
		})

        // console.log(this.wp.sections[2].acf_fields.a_propos_galerie);
// 
		this.$emit('template_mounted', this);

	},

	name: 'swiper-example-default',
	title: 'Default',
	init: true,
	
	data () {
		return {

			swiperOption10: {
			initialSlide: 0,		
			allowTouchMove: true,
			runCallbacksOnInit: true,
			watchSlidesProgress: true,
			watchSlidesVisibility: true,
			speed: 700,
			reachEnd: true,
	
			breakpoints: {
				// when window width is >= 320px
				1100: {
				slidesPerView: 4.2,

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



	#a-propos-galerie * {

	font-weight: 400;
	/*color: white;*/

	}

	.image-a-propos{

	height: 100%;
	background-size: cover;
	background-repeat: no-repeat;
	/*background: center;*/

	}

	.section-a-propos-galerie{

	/* 	margin-left: auto;
		margin-right: auto;*/
		

	}

	.image-a-propos{

		width: 90%;
		/*margin-left: auto;*/
		margin-right: auto;

	}

	.globale-galerie{
		min-height: 100vh;
		display: flex;
		flex-direction: column;
	/*	margin-top: auto;
		margin-bottom: auto;*/

	}
	.title-section-galerie{

		text-align: left;
		margin-left: 140px;
		margin-bottom: 7vh;
		margin-top: 100px;
		padding-top: 7vh;
		color: #70625b;

	}


	.swiper-container{

		margin-left: 140px;

	}


	@media screen and (max-width: 1100px) and (min-width: 600px){

		.swiper-container{

			margin-left: 0px
		}

		.swiper2{

			margin-left: 70px;
		}

		.title-section-galerie{

			text-align: left;
			margin-left: 70px
		}

	}

	@media screen and (max-width: 600px){

		.title-section-galerie{

			text-align: left;
			margin-left: 30px
		}

		.swiper-container{

			margin-left: 0px
		}

		.title-section-galerie{

			/*text-align: left;*/
			margin-left: 30px;
			margin-bottom: 5vh;
			margin-top: 100px;
			padding-top: 5vh;
		}

		.title-section-galerie{

			font-size: 22px !important;
		}

		.section-a-propos-galerie{

			padding-bottom: 70px;
		}



	}

</style>


<style scoped >

@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;1,300;1,400&display=swap');

.swiper-container-horizontal{

	height: 55vh;

}

	@media screen and (max-width: 1100px) and (min-width: 600px){

		.swiper-container-horizontal{

			margin-left: 70px;
		}
	}

	@media screen and (max-width: 600px){

		.swiper-container-horizontal{

			margin-left: 30px;
		}

	}

</style>






