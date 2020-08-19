<template>
<div class="section-wrap">
<div class="clear"></div>

<div class="global-descriptif">
<div class="all-description">

	<p>Nom du Client</p>

	<div class="info">
		<p>lorem ipsum </p>
		<p> Client : Lorem ipsum dolor</p>
	</div>

	<p class="notre-service">Services : Lorem ipsum dolor</p>
	
</div>
<!-- <img :src="this.wp.thumb" > -->
 <div class="image"></div>
</div>

<swiper class="swiper1" :options="swiperOption1">

	<swiper-slide  class="slide-full-view" v-for="child in this.wp.projects" :key="child.ID" >

		<h2 v-html="child.post_title"></h2>
		<p v-html="child.post_content"></p>
		<a :href="child.permalink">Read more</a>

	</swiper-slide>

</swiper>

<!-- <h1 v-html="this.wp.title">single</h1>
<div v-html="this.wp.post_content"></div> -->
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
		data () {
			return {
				swiperOption1:{
					slidesPerView: 1,
					initialSlide: 0,
					loop: true,	
					mousewheel: false,
					// allowTouchMove: false,
					runCallbacksOnInit: true,
					setTransition: 2000,
					navigation: {
							nextEl: '.flex-gauche',
							prevEl: '.flex-droite',
					},
				},
			}
		},
		props: {

		'post' : Object
		},
		mounted (){

			var $ = this.$

		console.log( this.wp.ID );
		console.log( this.wp.projects );



		this.$emit('template_mounted', this)

		}
	
}

</script>

<style scoped >

	.swiper1{

		height: 50vh;
	}

	.global-descriptif{

		display: flex;
		flex-direction: row;
		justify-content: center;
		background-color: rgb(25, 26, 28);
		min-height: 100vh;
		width: calc(100% - 200px);
		padding:  70px 100px;
		height: 125vh;

	}

	.all-description{

		height: 100%;
		width: 35%;
		background-color: rgb(25, 26, 28);

	}
	.image{

		height: 100%;
		width: 65%;
		background-color: white;

	}
	p{
		text-align: left;
		margin-bottom: 10%;
		color: white;
	}

	.info p {
		
		margin-bottom: 5%;

	}

	.notre-service{
		
		margin-top: 10%;

	}

   @media (max-width: 1100px) {

		.global-descriptif{

			display: flex;
			flex-direction: column;
			justify-content: center;
			background-color: rgb(25, 26, 28);
			min-height: 100vh;
			width: calc(100% - 200px);
			padding:  70px 100px;
			height: 125vh;

		}
		
		.image{

			height: 100%;
			width: 100%;
			background-color: white;

		}
		.all-description{

			height: 100%;
			width: 100%;
			background-color: rgb(25, 26, 28);

		}

   }





</style>