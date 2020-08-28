<template>
<div class="section-wrap">
<div class="clear"></div>

<div class="global-descriptif">
<div class="all-description">

	<div class="info">
		<p><strong class="text-client-sigle">Client : </strong> <span class="text-client-sigle-span" v-html="this.wp.title"></span> </p>
	<p class="text-client-sigle-span" v-html="post.fields.description_client"></p>
		
	</div>
		<p class="notre-service"><strong>Ce que nous avons réalisé :</strong> </p>
	<div class="services-fourni" v-html="post.fields.liste_services"></div>
	
</div>
<!-- <img :src="this.wp.thumb" > -->
 <img class="image" :src="post.fields.image_projet.url " >
</div>

<div class="post-client">

</div>

<div class="div-parent-slide-text">	
	<swiper class="swiper1" :options="swiperOption1">

		<swiper-slide  class="slide-full-view" v-for="child in wp.projects" :key="child.ID" >
			<a :href="child.permalink" >
								<div class="client-swiper">

									<img class="image-client-swiper" height="100%" width="100%" :src="child.thumb" >
									<p class="name-client-swiper" v-html="child.post_title" ></p>
									<p class="role-greaty-swiper">Corporated Website</p>

								</div>
							</a>
		</swiper-slide>
	
	</swiper>

</div>

<textcotact>
</textcotact>

<!-- <h1 v-html="this.wp.title">single</h1>
<div v-html="this.wp.post_content"></div> -->
<div class="clear"></div>
</div>

 
</template>

<script>

	/*import Alpl from 'Molecules/animation-line-per-line';
	import anime from 'animejs/lib/anime.es.js';*/
	import textcotact from './greaty/components/text-contact';
	// import Anime3d from 'Molecules/animation-3d';
	import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
	import 'swiper/css/swiper.css';
	import smart_fonts from 'Libs/smart-fonts.js';

export default {

		components: {
			textcotact,
			Swiper,
			SwiperSlide,
		},

		props: {
			'post' : Object
		},
		mounted (){

		console.log( this.wp.projects );

		smart_fonts({
		'.smallTile' :54,
		'.text-homepage' : 45,
		// '.role-greaty-swiper': 27,
		'.name-client-swiper': 22,

		})


		this.$emit('template_mounted', this)

		},
		name: 'swiper-example-default',
		title: 'Default',
		init: true,
		
		data () {
			return {
				swiperOption1: {
				initialSlide: 0,
				loop: true,
				allowTouchMove: true,
				runCallbacksOnInit: true,
				navigation: {
				nextEl: '.flex-gauche',
				prevEl: '.flex-droite',
				},
				breakpoints: {
				// when window width is >= 320px
				1100: {
				slidesPerView: 3,

				},

				700: {
				slidesPerView: 2,
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
	
body div .section-wrap {

font-family: 'Open Sans', regular;
background-color: #282828; ;

}

.services-fourni ul{
 color: #e1e1e1;
 list-style-type: none;
 text-align: left;
 padding-left: 0px;
}

.services-fourni{

	padding-bottom: 5%;
}

.client-swiper{

	width: 100%;
}
.name-client-swiper-swiper{

	margin-bottom: 2% !important;

}
.swiper-slide{

    margin-left: 2.5%;
}

.swiper-container{

	margin-bottom: 75px;
}
.text-client-sigle-span{

	font-size: 16px !important;
}
</style>

<style scoped >

@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;1,300;1,400&display=swap');


	.notre-service{

		font-size: 14px !important;

	}
	.text-client-sigle{

		font-size: 14px !important;
	}



	.global-descriptif{

		display: flex;
		flex-direction: column;
		justify-content: center;
		background-color: #282828;
		min-height: 100vh;
		padding-top: 150px;
		padding-bottom: 150px;

	}

	.services-fourni ul{
		color: #e1e1e1;
		list-style-type: none;
		text-align: left;
		padding-left: 0px;
	}

	.all-description{

		height: 100%;
		width: 80%;
		background-color: #282828;
		margin:  0px 70px;

	}

	.all-description p{

		line-height: 30px;
/*		font-size: 18px !important;*/
	}
	p{
		text-align: left;
		margin-bottom: 10%;
		color: white;
	}


	.info p {
		
		margin-bottom: 2.5%;

	}

	.notre-service{
		
		margin-top: 2.5%;
		margin-bottom: 2.5%;


	}

   a{
   color: #e1e1e1;
   text-decoration: none;
   }

   p{

	color: #e1e1e1 ;
	text-align: left;

   }

   .global-project p{

   text-align: left;
   }



   a{color: #e1e1e1 ;}

   .div-text-homepage{
   display: flex;
   /*height: 100vh;/*/
   width: 80%;
   /*padding-top: 100px;*/
   padding-left: auto;
   padding-right: auto;

   }

   .image-client{

   width: 100%;

   /*background-color: white;*/

   }

   .name-client-swiper{

   /*font-size: 20px;*/
   margin-bottom: 5px;
   font-family: 'Gotham Book Regular', sans-serif; 

   }

   .role-greaty-swiper{

   /*font-size: 12px;*/
   margin-top: 0px;
   font-family: 'Gotham Book Regular', sans-serif; 

   }

	.g-project {
		padding-left: 35px;
		padding-right: 35px;
	}



	/*********/


	/*DESCKTOP*/
  


	/*********/

	@media (min-width: 1100px) {

		.image{

			height: 100%;
			width: calc(100% - 140px);
			/*background-color: white;*/
			background-position: center;
			background-size: cover;
			background-repeat: none;
			margin-left: 70px;
			margin-right: 70px;
		}

		.client img{

		width: 90%;
		height: auto;

		}

		.g-project{
				width: calc(50% - 70px) !important;
				display: inline-block;
				margin-bottom: 3%;
		}


		.post-client{

			margin: 0px 35px;
		}

	}

			/*********/


			/*Tablette*/



			/*********/


	@media screen and (max-width: 1100px) and  (min-width: 600px) {


		.global-descriptif{

			display: flex;
			flex-direction: column;
			justify-content: center;
			background-color: #282828;
			min-height: 100vh;
			padding-left: 70px;
			/*width: calc(100% - 200px);*/
			/*padding:  70px 100px;*/
			/*height: 125vh;*/

		}

		.g-project {
			padding-left: 70px;
			padding-right: 70px;
			padding-bottom: 5%;
			width: calc(100% - 140px) !important;
		}

		.all-description{

			height: 100%;
			width: 80%;
			background-color: #282828;
			margin: 0px 0px;

		}
		.image{
			width: calc(100% - 70px) !important;
			margin: 35px 0px;
		}

		.client{

		width: 90% !important;
		/*height: 60vw;*/

		margin-left: auto;
		margin-right: auto;


		}

		.global-project{
		z-index: 10;
		width: 100% !important;
		/*margin-left: auto;
		margin-right: auto;*/
		/*margin: 20px !important;*/

		}

		.image-client{

		height: 100%;
		/*background-color: white;*/
		}

	}

/*********/


 /*GSM*/



/*********/
	@media screen and (max-width: 600px) {

	.all-description{

		height: 100%;
		width: 80%;
		background-color: #282828;
		margin:  0px 35px;

	}

	.post-client{
		padding-left: 35px;
		padding-right: 35px;
	}

	.g-project{

		z-index: 10;
		width: 100%;
		height: auto;
		/*min-height: 400px;*/
		padding-left: 0px;
		padding-right: 0px;
		padding-bottom: 5%;
		display: inline-block;

	}


	.image{

		width:100%;

	}


	.text-homepage{
	padding-top: 10%;
	padding-bottom: 5%;
	width: 100% !important;
	margin: auto 35px;
	width: 100%;
	font-size: 3.1em;
	color: #e1e1e1;
	font-family: "Open Sans", regular !important;
	font-weight: lighter;
	;
	}
	.post-client{
		padding-left: 35px;
		padding-right: 35px;
		background-color: #282828;
	}

/*	.g-project{
		z-index: 10;
		width: calc(50% - 70px) !important;
		height: auto;
		min-height: 400px;
		display: inline-block;


	}*/

	.client img{

	width: 100% !important;
/*	height: 60vh;
	min-height: 400px;*/
	/*background-color: white;*/

	}

	}



</style>