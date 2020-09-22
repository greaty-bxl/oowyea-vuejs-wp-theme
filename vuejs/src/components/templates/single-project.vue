<template>
<div class="section-wrap">
<div class="clear"></div>

<div class="on-screen">

	<div class="global-descriptif">
	<div class="all-description">

		<div class="info">
			<p><strong class="text-client-sigle">Client : </strong> <span class="text-client-sigle-span" v-html="post.post_title"></span> </p>
		<p class="text-client-sigle-span"  v-html="post.fields.description_client"></p>
			
		</div>
			<p class="notre-service"><strong>Ce que nous avons réalisé :</strong> </p>
		<div class="services-fourni" v-html="post.fields.liste_services"></div>
	</div>	

	<div class='div-images'>
		<img class="image" v-for="item in post.acf_fields.image_projet"  :key="item.ID" :src="item.url" >
	</div>


	<div class="div-parent-slide-text">	
		<swiper class="swiper1" :options="swiperOption1">
			
			<swiper-slide   class="slide-full-view" v-for="child in wp.projects" :key="child.ID"  >

				<a :href="child.permalink" >
									<div class="client-swiper">
<!-- wp.projects -->
										<img class="image-client" height="100%" width="100%"  v-if="child.thumb" :src="child.thumb" >

										<video class="image-client" height="100%" width="100%" loop autoplay="true" :src="child.fields.video" v-else></video>										<p class="name-client-swiper" v-html="child.post_title" ></p>
										<p class="role-greaty-swiper" v-html="child.post_content"></p>

									</div>
								</a>
			</swiper-slide>
		
		</swiper>

	</div>
</div>
<!-- 
<textcotact>
</textcotact> -->

<!-- <h1 v-html="this.wp.title">single</h1>
<div v-html="this.wp.post_content"></div> -->
<div class="clear"></div>
</div>
</div>

 
</template>

<script>

	/*import Alpl from 'Molecules/animation-line-per-line';
	import anime from 'animejs/lib/anime.es.js';*/
	// import textcotact from './greaty/components/text-contact';
	// import Anime3d from 'Molecules/animation-3d';
	import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
	import 'swiper/css/swiper.css';
	import smart_fonts from 'Libs/smart-fonts.js';

export default {

		components: {
			// textcotact,
			Swiper,
			SwiperSlide,
		},

		props: {
			'post' : Object
		},
		mounted (){


		smart_fonts({
		'.smallTile' :54,
		'.text-homepage' : 45,
		'.name-client-swiper': 22,

		})

		var $ = this.$

		$('.text-client-sigle-span').find('a').attr('target', '_blank');

		console.log(this.wp.title);


// function pour pas afficher le current slide

		this.$emit('template_mounted', this)

		setTimeout(function() {

			$(window).scrollTop(0);

		}, 50);
	

		var single = $('.info').find('span').text()

		var slide_hide

		$('.swiper-slide').each(function() {

			slide_hide  = $(this).find('.name-client-swiper').text()

			if (single === slide_hide ) {

			$(this).hide();

			}

		});

		$('.text-client-sigle-span').find('a').addClass('link')



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
				watchSlidesProgress: true,
				watchSlidesVisibility: true,
				speed: 700,
				reachEnd: true,
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

font-family: 'Montserrat', sans-serif;
background-color: #282828; ;

}

.services-fourni  {

	padding-bottom: 5%;

}


.services-fourni ul li:before {

	content:"· ";
	list-style: inside;
	color: #e1e1e1;
	width: 1px;

}

.div-images{

	display: flex;
	flex-direction: column;
}

a {

color: #e1e1e1;
}
body{

	background-color: #282828;
}

.swiper1{

	padding-top: 5%;
}

.services-fourni ul{
 color: #e1e1e1;
 list-style-type: none;
 text-align: left;
 padding-left: 0px;
}

.services-fourni ul li{

	font-size: 14px;
	line-height: 30px;

}



.client-swiper{

	width: 100%;
	margin-left: 40px
}
.name-client-swiper-swiper{

	margin-bottom: 2% !important;

}

.services-fourni ul li {


}


.swiper-container{

	margin-bottom: 75px;
}
.text-client-sigle-span{

	font-size: 16px !important;
}
.text-client-sigle-span p{

	font-size: 16px !important;
}

@media screen and (max-width: 600px) {

	.client-swiper{

		width: 100%;
		margin-left: 0px
	}

	.swiper-slide-active{

		width: 90%  !important;
		/*margin-left: 30 !important;*/
	}

	.swiper-slide-next{

		width: 90%  !important;
		margin-left: 10px !important;
	}

	.swiper-slide-prev img {

		width: 90%  !important;
		/*margin-left: 10px !important;*/

	}

	.services-fourni{

		padding-bottom: 0px;
	}





}
</style>

<style scoped >

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;600&display=swap');




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
		margin-bottom: 1%;


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
   font-family: 'Montserrat', sans-serif; 

   }

   .role-greaty-swiper{

   /*font-size: 12px;*/
   margin-top: 0px;
   font-family: 'Montserrat', sans-serif; 

   }

	.g-project {
		padding-left: 35px;
		padding-right: 35px;
	}



	/*********/


	/*DESCKTOP*/
  


	/*********/

	@media (min-width: 1100px) {

		.swiper-container{

			margin-bottom: auto;
			margin-top: auto;
		}

			.global-descriptif{

			/*padding-top: 0px;*/
			padding-bottom: 0px;

			}

		.div-parent-slide-text{

			/*height: 100vh;*/
			height: 100vh;
			display: flex;
			flex-direction: row;
			justify-content: center;


		}

		.image{

			height: 100%;
			width: 100%;
			/*background-color: white;*/
			background-position: center;
			background-size: cover;
			background-repeat: none;
	/*		margin-left: 70px;
			margin-right: 70px;*/
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

		.swiper-slide{

			margin-left: 20px;
		}

	}

			/*********/


			/*Tablette*/



			/*********/


	@media screen and (max-width: 1100px) and  (min-width: 600px) {

		.swiper-slide{

			margin-left: 20px;
		}

		.global-descriptif{

			display: flex;
			flex-direction: column;
			justify-content: center;
			background-color: #282828;
			min-height: 100vh;
			padding-bottom: 0px; 
			/*padding-left: 70px;*/	
			/*width: calc(100% - 200px);*/
			/*padding:  70px 100px;*/
			/*height: 125vh;*/

		}
		.swiper-container{

			margin-top: 75px;
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
			width: 100% !important;
			/*margin: 30px 0px;*/
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

		.swiper-slide{

			width: 90%;
		}

		.all-description{

			padding-left: 70px;
		}

	}

/*********/


 /*GSM*/



/*********/
	@media screen and (max-width: 600px) {

	.global-descriptif{


		padding-bottom: 0px;

	}


	.swiper-container{

		margin-bottom: auto;
		margin-top: auto;
	}

	.div-parent-slide-text{
		height: 100vh;
		display: flex;
		padding-left: 30px;


	}

	.client-swiper{

		padding-right: 15px;
	}

	.all-description{

		height: 100%;
		width: 80%;
		background-color: #282828;
		margin:  0px 30px;
		margin-bottom: 70px;

	}

	.post-client{
		padding-left: 30px;
		padding-right: 30px;
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
	margin: auto 30px;
	width: 100%;
	font-size: 3.1em;
	color: #e1e1e1;
	font-family: 'Montserrat', sans-serif!important;
	font-weight: lighter;
	;
	}
	.post-client{
		padding-left: 30px;
		padding-right: 30px;
		background-color: #282828;
	}

	.client img{

	width: 100% !important;
/*	height: 60vh;
	min-height: 400px;*/
	/*background-color: white;*/

	}

	.info p{

		margin-bottom: 10%;
	}

	}

	..swiper-slide{

			margin-left: 20px;
		}{

		margin-left: 0px !important;
	}



</style>