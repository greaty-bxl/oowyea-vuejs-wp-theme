
<template>
    <div class="section-wrap">
		<div class="clear"></div>

		<div class="section-a-propos-galerie">

			<h5 class="title-section">> A propos de nous</h5>

			<swiper class="swiper1" :options="swiperOption">

				<swiper-slide  class="slide-a-propos"  v-for="child in wp.projects" :key="child.ID"  >

					<div class="image-a-propos" height="100%" width="100%"  v-bind:style="{ 'background-image': 'url(' + child.thumb + ')' }"></div>

				</swiper-slide>

			</swiper>

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
			'.titre-a-propos' : 50,
		})

        // console.log(this.wp.sections[2].acf_fields.a_propos_galerie);
        

		this.$emit('template_mounted', this);

	},

	name: 'swiper-example-default',
	title: 'Default',
	init: true,
	
	data () {
		return {
			swiperOption: {
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
			slidesPerView: 18,

			},
			1000: {
			slidesPerView: 1,
			},

			600: {
			slidesPerView: 1,
			}
			}
			},

		}
	}

}



</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;1,100;1,200;1,300;1,400&display=swap');


	*:focus {
		outline: 0;
	}

	.title-section{
		margin-top: 0px;
		text-align: left;
		padding-left: 70px;
		font-size: 22px;
		margin-bottom: 60px;

	}

	.section-a-propos-galerie{

		height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-content: center;


	}

	.titre-a-propos-section{
		margin-top: auto;
		margin-bottom: auto;
		width: 70%;
		line-height: 70px;
	}

	/*style swiper*/

	.slide-a-propos{

		height: 60vh;
		width: 20vh;
	}
	.image-a-propos{

		height: 100%;
		width: 90%;

	}

	.a-propos-swiper{

		height: 100%;
	}

	.swiper-wrapper{

		height: 60vh;
	}

	.swiper-container{

		margin-left: 10%;
	}



	@media screen and (max-width: 900px) and (min-width: 600px){


		.titre-a-propos-section{

			margin-left: 30px;
			margin-right: 30px;
		}

		.swiper-container{

			margin-left: 70px;
		}


	}

	@media screen and (max-width: 600px) {



		.titre-a-propos-section{

			margin-left: 30px;
			margin-right: 30px;
		}

		.swiper-container{

			margin-left: 30px;
		}

	}


/*	.section-a-propos{

		height: 100vh;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-content: center;


	}
*/


</style>


<style scoped >

@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;1,300;1,400&display=swap');


</style>






