<template>


	<div  class="section-wrap" >
		<div class="clear"></div>
<!-- 				<h1 v-html="title"></h1>
				<p>Archive template</p> -->
			<div class="div-parent-slide-text">	
				<swiper class="swiper1" :options="swiperOption1"  @slide-change-start="onSlideChangeStart"
        @slide-change-end="onSlideChangeEnd">
				<!-- <swiper-slide>Slide 1</swiper-slide> -->

					<swiper-slide  class="slide-full-view" v-for="child in wp.wp_query.posts" :key="child.ID" >

						<h2 v-html="child.post_title"></h2>
						<p v-html="child.post_content"></p>
						<a :href="child.permalink">Read more</a>

						<vue-aos animation-class="fadeIn animated">
						<div>lalallalallaall</div>
						</vue-aos>

					</swiper-slide>
				
				</swiper>
				<div class="fleches">

				<div class="flex-gauche">G</div> 
				<!-- <div class="flex-droite">D</div>  -->

				</div>
			</div>
			<div class="fleches"> 

				<!-- <div class="flex-gauche">G</div>  -->
				<div class="flex-droite">D</div> 

			</div>

			<swiper class="swiper" :options="swiperOption">
			<!-- <swiper-slide>Slide 1</swiper-slide> -->
			<swiper-slide v-for="child in wp.wp_query.posts" :key="child.ID" :src="child.thumb" >
				<img height="100%" width="100%" :src="child.thumb"> 
			<!-- 	<h2 v-html="child.post_title"></h2>
				<p v-html="child.post_content"></p>
				<a :href="child.permalink">Read more</a> -->

			</swiper-slide>

			</swiper>

		<div class="clear"></div>
	</div>
</template>

<script>
	
	import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
	import 'swiper/css/swiper.css';

	export default {

		props: {	
			'title': String,
			'posts' : Array,
		},
		mounted (){

			console.log( this.wp.wp_query.posts );
			this.$emit('template_mounted');
			// AOS.init();
		},
				
		name: 'swiper-example-default',
		title: 'Default',
		init: true,
		
		components: {
		Swiper,
		SwiperSlide,

		},

		data() {

			return {

				swiperOption: {

					slidesPerView: 3,
					initialSlide: 0,
					loop: true,
					allowTouchMove: false,
					runCallbacksOnInit: true,

					navigation: {
							nextEl: '.flex-gauche',
							prevEl: '.flex-droite',
					},


				},

				swiperOption1:{

					slidesPerView: 1,
					initialSlide: 0,
					loop: true,	
					mousewheel: false,
					allowTouchMove: false,
					runCallbacksOnInit: true,
					setTransition: 2000,


					navigation: {
							nextEl: '.flex-gauche',
							prevEl: '.flex-droite',
					},

				},

			}
		}

	
	}



</script>
<style>

.div-parent-slide-text{

	display: flex;
	flex-direction: row;
}

.section-wrap{

	display: flex;
	flex-direction: row;
	height: 80vh;

}
.swiper1{

	width: 25%;
	position: absolute;
	left: 15%;
	z-index: 5;
	background: white;
	height: 100%;
	display: flex;
	flex-direction: column;


}

.swiper{

	width: 100%;
}

.fleches{
	display: flex;
	flex-direction: row;
	align-content: center;
	justify-content: center;
	margin-top: auto;
	margin-bottom: auto;

}

.fleches div {

	padding: 5px 5px;
	color: white;
	background: black;
	height: 25px;
	width: 25px;
	z-index: 10;
}

.flex-gauche{

	position: absolute;
	left: 35%;
}

.flex-droite{

	position: absolute;
	left: 40%;
}




.section-wrap{

	padding-top: 150px
}

/*.slide-full-view  {
  
  display: flex;
}
*/
</style>

