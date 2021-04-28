<template>
	<div class="section-wrap" >
		<div>
			<div class="section-nouvelles">
				
				<h2 v-html="pll__('Nouveautés @home')"></h2>
				<div class="div-filtre-nouvelles">


					
						<swiper class="swiperNouvellesbutton" :options="swiperMenu"  :pagination="{ clickable: true }">

							<swiper-slide v-for="(v_slide, index) in last_products_slider" :key="index"  >

								<button v-bind:class="{ active: index == active }" v-on:click="change_slider(index)">
									<p v-html="v_slide.term.name"></p>
								</button>

							</swiper-slide>

						
						</swiper>
					
				</div>

				<div class="swiperProductcontent">

				<div v-for="(v_slide, index) in last_products_slider" :key="index" v-show="index == active">
					<div class="swiper-button-prev" :id="'swiper-button-prev-'+index"></div>

					<swiper  
					
					
					class="swipernouvelles" 
					:options="swiperNouvelles"    
					:pagination="{ clickable: true }">
						
							<swiper-slide v-for="post in v_slide.posts" :key="post.ID"  class="product-santos">
								
								<Item  :item="post" />

							</swiper-slide>
					</swiper>

					<div class="swiper-button-next" :id="'swiper-button-next-'+index"></div>
					
				</div>	


					<div class="swiper-pagination"></div>

				</div>
				
			</div>

		</div>
	</div>
</template>

<script>

	import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
	import 'swiper/css/swiper.css';
	import Item from 'Molecules/item-product.vue'
	//import {has_term} from 'Libs/wp-functions.js'
	import is from 'is_js'


	let SwiperArray = []

	export default {
		components: {
			Item,
			Swiper,
			SwiperSlide,

		},
		
		props: {
			'post' : Object,
			'posts' : Array
		},

		mounted(){
		
			SwiperArray = []

			console.log('mounted');

		},

		methods: {
			change_slider : function(index){
				this.active = index

				console.log('change_slider', index);
			}
		},

		data () {
			return {
				active: 0,
				//last_products_slider: this.$store.state.wp.last_products_slider,
				swiperMenu: {
					initialSlide: 0,
					loop: false,
					slidesPerView: 'auto',
					
					on : {
						init : function(){
							
							setTimeout( ()=>{
								if ( is.desktop() ){
									this.destroy()
								}
							}, 1 )
						}
					},			
				},

				swiperNouvelles: {
					initialSlide: 0,	

					preloadImages: false,
					lazy: true,
					type: 'bullets',
					
					progress: true,

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
						slidesPerView: 	0.9,
						},
					},

					pagination: {

						el: ".swiper-pagination",
						type: 'bullets',
						clickable: true,
						renderBullet: function (index, className) {
							return '<span class="' + className + '"></span>';
						}
					},

					/*navigation: {
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev',
					},*/

					on : {
						init : function(){

							console.log('init');
							let $ = window.jquery
							let index = SwiperArray.length
							console.log('index' , index);

							SwiperArray[index] = this

							console.log('this' , this);
							
							this.params.navigation.nextEl = '#swiper-button-next-'+index
							this.params.navigation.prevEl = '#swiper-button-prev-'+index
							
							this.update();
							$(this.$el).find('.swiper-slide').css('visibility', 'visible').animate({'opacity':1}, 500);

						}
					},
				},
			}
		},
		computed: {
			last_products_slider () {
				return this.$store.state.wp.last_products_slider
			}
		}
	}
</script>

<style type="text/css">

	.swiperProductcontent{

		position: relative;

	}

	.swiperNouvellesbutton .swiper-slide{

		width: auto;
	
	}

	.section-nouvelles .item-product{

		margin-left: 20px;
	}

	.swipernouvelles{

		min-height: 600px;
		width: 75%;
		margin-left: -1%;
		margin-right: auto;
		margin-left: auto;
		display: flex;
	}

	.div-filtre-nouvelles{

		max-width: 100%;
		margin-right: auto;
		margin-left: auto;

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

	.div-filtre-nouvelles button.active{
		color: #fff;
		background-color: #888320;
		border: 1px solid #888320;
	}

	.div-filtre-nouvelles .swiper-slide:last-child button{

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

		font-size: 36px;
		margin: 0px !important;
		padding-bottom: 35px;
		line-height: 120%;
		font-weight: 700;
		color: #422112;
	}

	.title-product{

		margin-bottom: 20px !important;
	}


	.swiper-wrapper{

		margin-top: auto !important;
		margin-bottom: auto !important;
	}

	@media screen and ( min-width: 1100px ){


		.section-nouvelles{
			padding: 140px 0px;
	
		}


		.section-nouvelles h2 {

			line-height: 2vw !important;

		}

		.swiper-pagination{

			display: none;
		}

		.swiperNouvellesbutton{

			max-width: 700px;
	
		}


		.swiper-button-next{

			right: 50px;

			color: #422112;
		}

		.swiper-button-prev{

			left: 50px;
			color: #422112;
		}



	}

	@media screen and ( max-width: 1100px ){

	

		.swiper-button-next{

			right: 20px;

			color: #422112;
		}

		.swiper-button-prev{

			left: 20px;
			color: #422112;
		}

		.section-nouvelles .item-product{

			margin-left: 0px;
		}

		.swiper-pagination{

				position: unset !important;
			}

		.swiper-pagination-bullet{

			height: 10px;
			width: 10px;
			background-color: white;
			border: 1px solid #422112;
			opacity: 1;
			transition: 0.3s;
			margin-right: 5px;
			margin-left: 5px;
		}

		.swiper-pagination-bullet-active{

			transition: 0.3s;
			background-color: #888320;
			border : 1px solid #888320;
		}


		.swiper-pagination-bullet:focus {
			outline: none;
			box-shadow: none;
		}

		.swiper-pagination-clickable{

			padding-top: 30px;
		}

	}


	@media screen and ( max-width: 1125px ) and ( min-width: 600px) {

		.item-product {

			margin-right: 20px;

		}

		.swiperNouvellesbutton{

			max-width: 100%;
			margin-right: 70px;
			margin-left: 70px;
		}

		.section-nouvelles h2{

			padding-bottom: 30px;
			font-size: 6vw!important;
			line-height: 120% !important;

		}

		.section-nouvelles p {

			/*font-size: 3.3vw !important;*/
			width: auto; 
			margin: 0px auto;
			line-height: 120%;

		}

		.button-section-nouvelles{
			margin: 30px auto 0px auto;
			width: 23%;

		}


	}

	@media screen and ( max-width: 600px ){



		.content-flech{

			margin-bottom: 30px;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			width: 100%

		}

		.swiper-button-next{

			padding: 10px;
			right: 0px;
			color: #422112;
		}

		.swiper-button-prev{

			padding: 10px;
			left: 0px;
			color: #422112;
		}

		.swiperNouvellesbutton{

			max-width: 100%;
			margin-right: 30px;
			margin-left: 30px;
		}

		.swiper-container, .swiper-wrapper, .swiper-slide {
		box-sizing: content-box;
		}

	/*	.item-product {

			margin-right: 15px;

		}*/

		.swipernouvelles{

			min-height: auto;
			width: calc(100% - 60px);
			margin-left: -1%;
			margin-right: 30px;
			margin-left: 30px;
		}


		.section-nouvelles h2{

			/*font-size: 10vw !important;*/
			padding-bottom: 30px;
			width: 90%;
			margin: 0px auto !important;
			line-height: 120% !important;
		}

		.section-nouvelles p {
				/*font-size: 17px !important;*/
				width: 70%;
				margin: 0px auto;
				line-height: 120%;  
		}

		.section-nouvelles button p {
			
				width: auto;
		
		}

		.button-section-nouvelles{
			margin: 30px auto 0px auto;
			width: 60%;
		
		}

	/*	.cadre img{

			height: 250px;
		}*/

	}
		
		
</style>


