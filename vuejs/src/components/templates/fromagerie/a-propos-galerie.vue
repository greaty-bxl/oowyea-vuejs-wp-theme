
<template>
    <div class="section-wrap">
		<div class="clear"></div>

		<div class="globale-galerie">
		
			<div class="section-a-propos-galerie">

				<h5 class="title-section">> A propos de nous</h5>

				<swiper class="swiper1" :options="swiperOption10">

					<swiper-slide  class="slide-a-propos"  v-for="child in wp.projects" :key="child.ID"  >

						<div class="image-a-propos" height="100%" width="100%"  v-bind:style="{ 'background-image': 'url(' + child.thumb + ')' }"></div>

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
			'.title-section' : 25,
		})

        // console.log(this.wp.sections[2].acf_fields.a_propos_galerie);
        

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
			slidesPerView: 4,

			},

			400: {
			slidesPerView: 1.2,
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

	.image-a-propos{
		height: 100%;

	}

	.swiper-container-horizontal{

		height: 55vh;
	}

	.section-a-propos-galerie{

	/* 	margin-left: auto;
		margin-right: auto;*/
		

	}

	.image-a-propos{

		width: 90%;
		margin-left: auto;
		margin-right: auto;

	}

	.globale-galerie{

		display: flex;
		flex-direction: column;
	/*	margin-top: auto;
		margin-bottom: auto;*/

	}
	.title-section{

		text-align: left;
		margin-left: 70px;
		margin-bottom: 7vh;
		margin-top: 120px;
		padding-top: 7vh;
	}


	.swiper-container{

		margin-left: 100px

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



	}

</style>


<style scoped >

@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;1,300;1,400&display=swap');


</style>






