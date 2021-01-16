<template>
	<div class="section-wrap" >
		<div>
			<div class="section-nouvelles">
				
				<h2>Nouveautés @home</h2>
				<div class="div-filtre-nouvelles">
					<button>
						<p>CAFÉS</p>
					</button>
					<button>
						<p>CAFÉS</p>
					</button>
				</div>

				<swiper class="swipernouvelles" :options="swiperNouvelles">

					<swiper-slide v-for="item in posts" :key="item.ID" class="product-santos">
						<div class="div-grey">
							<div>
								
							</div>

								<div class="cadre">
								<img class="image-product" v-bind:src="item.thumb">

							</div>

							<p class="title-product" v-html="item.post_title"></p>

							<div class="div-terms" v-if="has_term(item, 'product_cat', 'cafes')">
								
								<div class="parent-taxonomie-info">
									<p class="titre-taxonomie">Intensité</p>
									<div class="valeur-taxonomie" >
										<div v-for="count_intesity in 5" :key="count_intesity" 
										v-bind:class="{ filled: isFilled( item, count_intesity, 'intensity' ) }">
										</div>
									</div>
								</div>
								
							</div>

							<div class="div-terms" v-if="has_term(item, 'product_cat', 'cafes')">
								
								<div class="parent-taxonomie-info">
									<p class="titre-taxonomie">Acidité</p>
									<div class="valeur-taxonomie" >
										<div v-for="acidity_points in 5" :key="acidity_points" 
										v-bind:class="{ filled: isFilled( item, acidity_points, 'acidity' ) }">
										</div>
									</div>
								</div>
								
							</div>

							<div class="div-terms thes" v-if="has_term(item, 'product_cat', 'thes')">
								
								<div class="parent-taxonomie-info parent-taxonomie-info-thes">
									<p class="titre-taxonomie">Thé</p>
									<div class="valeur-taxonomie" >
										<p class="value-terms-thes">Noir</p>
									</div>
								</div>
								
							</div>

							<div class="div-terms thes" v-if="has_term(item, 'product_cat', 'thes')">
								
								<div class="parent-taxonomie-info parent-taxonomie-info-thes">
									<p class="titre-taxonomie">Thé</p>
									<div class="valeur-taxonomie" >
										<p class="value-terms-thes">Noir</p>
									</div>
								</div>
								
							</div>
							<p class="flavour" >Notes : Floral et Epices</p>
						</div>
						<div class="price"> 22 </div>
					</swiper-slide>

				</swiper>

			</div>
		</div>
	</div>
</template>

<script>

	import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
	import 'swiper/css/swiper.css';
	import {has_term} from 'Libs/wp-functions.js'

	
	export default {
		components: {

			Swiper,
			SwiperSlide,

		},
		props: {
			'post' : Object
		},



		mounted(){

			this.$emit('template_mounted', this);

			// isFilled: function(post, count, keyword){

			// 		if( post.terms[keyword] ) 
			// 		{
			// 			if( post.terms[keyword][0].fields[keyword+'_points'] >= count )
			// 			{
			// 				return true
			// 			}	
			// 		}
			// 	}

			

			has_term


		},

		name: 'swiperNouvelles',
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

<style type="text/css">

	.swipernouvelles{

		width: 75%;
		/*width: 102%;*/
		margin-left: -1%;
		background-color: red;
		margin-right: auto;
		margin-left: auto;
	}

	.div-filtre-nouvelles{

		display: flex;
		flex-direction: row;
		justify-content: center;
		height: 50px;
		margin-bottom: 50px;

	}

	.div-filtre-nouvelles button{

		font-size: 17px;
		padding:  10px 30px;
		border: 1px solid #808080;
		border-right: none;
		display: flex;
		pointer-events: auto !important;
		background-color: white;
		color: #808080;
	}

	.div-filtre-nouvelles button:last-child{

		border-right: 1px solid #808080;
	}

	.div-filtre-nouvelles button p{

		margin-top: auto;
		margin-bottom: auto;
		font-weight: 700;
	}

	.section-nouvelles{

		padding: 70px 0px;
		background-color: white;
		display: flex;
		justify-content: center;
		flex-direction: column;
		font-family: open sans;
		min-height: auto !important;

	}

	.section-nouvelles p {

		font-size: 17px !important;
		margin: 0px auto;
		font-weight: 300;


	}

	.button-section-nouvelles{

		width: 13%;
		margin: 40px auto 0px auto;
		font-size: 17px;
		background-color: white !important;
		color: #422112 !important;
	}

	.button-section-nouvelles:hover{

		background-color: #888320 !important;
		color: white !important
	}

	.section-nouvelles h2 {

		font-size: 2.6vw !important;
		margin: 0px !important;
		padding-bottom: 35px;
		font-weight: 700;
		color: #422112;
	}



	@media screen and ( min-width: 1100px ){


		.section-nouvelles h2 {

			line-height: 2vw !important;

		}

	}

	@media screen and ( max-width: 1100px ) and ( min-width: 600px) {

		.section-nouvelles h2{

			padding-bottom: 30px;
			font-size: 6vw !important;
			line-height: 7vw !important;

		}

		.section-nouvelles p {
			font-size: 3.3vw !important;
			width: 60%;
			margin: 0px auto;
			line-height: 5vw;
		}

		.button-section-nouvelles{
			margin: 30px auto 0px auto;
			width: 23%;

		}


	}

	@media screen and ( max-width: 600px ){

		.section-nouvelles h2{

			font-size: 10vw !important;
			padding-bottom: 30px;
			width: 60%;
			margin: 0px auto !important;
			line-height: 11vw !important;
		}

		.section-nouvelles p {
				/*font-size: 17px !important;*/
				width: 70%;
				margin: 0px auto;
				line-height: 9vw;  
		}

		.button-section-nouvelles{
			margin: 30px auto 0px auto;
			width: 60%;
		
		}




		
	}
		
		
</style>


