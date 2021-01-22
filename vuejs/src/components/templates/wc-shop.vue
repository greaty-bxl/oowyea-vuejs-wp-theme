<template>
    <div class="section-wrap">
		<ProductFilter/>
		<div class="clear"></div>
			<div  :style="{ backgroundImage: 'url(\'' + shop_header.img + '\')', color: 'white', }" class="image-shop">
				<h3 v-html="shop_header.parent_label"></h3>
				<h1 style="font-weight: bold;" v-html="shop_header.label">Nos Cafés</h1>
			</div>

			<div class="global-container">
				
				<div class="child-container">
					
					<div class="filtre-parent-div">
						<div><p class="title-page-boutique" v-html="shop_header.label"></p> </div>
						<div><button class="button-santos-vert" style="padding: 15px 25px;" v-on:click="open_filter">FILTRER</button></div>
						<p class="mobile-filtre" v-on:click="open_filter">FILTRE</p>
					</div>

					<div class="parent-product">
						<div v-for="item in posts" :key="item.ID" class="product-santos">
							<ItemProduct :item="item"/>
						</div>		
					</div>

				</div>

			</div>

		<div class="clear"></div>
    </div>
 
</template>

<script>

import smart_fonts from 'Libs/smart-fonts.js';
import ProductFilter from 'Organisms/product-filter.vue'
import ItemProduct from 'Molecules/item-product.vue'
//import {has_term} from 'Libs/wp-functions.js'

export default {
	components: {
		ProductFilter,
		ItemProduct
	},
	props: {
		'post' : Object,
		'posts' : Array
	},
	mounted(){

		console.log( 'wc-shop', this.wp);

		smart_fonts({
			'.titre-home' : 85 ,
		})

		this.$emit('template_mounted', this);

		// var $ = this.$

	},
	methods: {

		open_filter: function(){

			var $ = this.$

			$('[data-state="current"] .filtre-container').animate({
				top: '0',
				left: '0',
				backgroundColor : 'rgba(255,255,255,0.9)',
				easing: 'easeInOutSine',
				duration: 200,
			});

			// $('.filtre-container').css('background-color', 'rgba(255,255,255,0.9)');

			$('#app').data('scrolling', 'filter')

		},

	},
	computed: {
		shop_header () {
			let shop_header = this.$store.state.wp.shop_header

			if( typeof shop_header === 'object' && shop_header !== null )
			{
				return shop_header
			}
			else
			{
				return {}
			}
			
		}
	}

}



</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap');

	h1 h2 h3 h4 h5 {

		font-family: open sans;
	}

	p{

		font-family: open sans;
	}

	span{

		font-family: open sans;
	}

	.global-container *{

		font-family: open sans;
	}

	.value-terms-thes{

		color:#888320;
	}

	.thes{

		border-bottom: 1px solid #dddddd;
		margin-bottom:10px; 
		margin-left:20px;
		margin-right:20px;

	}

	.filtre-container{

		left: -100%;
	}

	.image-shop{

		margin-top: 114px;
		background-color: #888320;
		background-size: cover;
		background-position: center;
		padding-bottom: 50px;
		display: flex;
		justify-content: center;
		flex-direction: column;
	}

	.image-shop{
		padding-top: 143px;
		padding-bottom: 143px;
	}

	.filtre-parent-div{

		border-bottom: 1px solid #dddddd;

	}

	.title-page-boutique{

		color: #422112;
		font-weight: 700;
	}

	.parent-taxonomie-info{

		display: flex;
		flex-direction: row;
		justify-content: space-between;
		margin-left: auto;
		margin-right: auto;
		width: 80%;

	}

	.parent-taxonomie-info-thes{
		font-weight: 600;
	
	}

	.value-terms-thes{
		font-size: 14px;
		line-height: 14px;
	}

	.global-container{

		margin-bottom: 100px;
	}

	@media screen and (min-width: 1100px){

		.image-shop h1 {

			font-size: 7vw !important ;
			margin: 0px !important;
		}

		.image-shop h3 {

			font-size: 2vw !important ;
			margin: 0px !important;
			padding-bottom: 25px;
		}

		.global-container{

			display: flex;
			justify-content: center;
			align-content: center;
		}
						
		.child-container{

			width: 75%;
			display: flex;
			flex-direction: column;
		}

		.filtre-parent-div{

			display: flex;
			flex-direction: row;

		}

		.mobile-filtre{

			display: none
		}

		.product-santos{

			width: 23%;
			margin-top: 45px;
			padding-bottom: 35px;
			display: inline-table;
			margin-right: 1%;
			margin-left: 1%;
			margin-bottom: 100px;
			
		}

		.parent-product{

			display: flex;
			flex-wrap: wrap;
			justify-content: center;
			width: 102%;
			margin-left: -1%;

		}

		.filtre-parent-div{
			padding-top: 45px;
			padding-bottom: 45px;
		}

		.title-page-boutique{

			font-size: 3vw;

		}

		.parent-taxonomie-info{

			margin-bottom: 20px;
		}

		.parent-taxonomie-info-thes{

			margin-bottom: 10px !important;
		
		}

	}

	@media screen and (max-width: 1100px){

		.image-shop h1 {

			font-size: 7vw !important ;
			margin: 0px !important;
		}

		.global-container{

			display: flex;
			justify-content: center;
			align-content: center;
			margin-top: 50px;
			margin-bottom: 50px;
		}
						
		.child-container{

			width: 100%;
			display: flex;
			flex-direction: column;
		}

	}

	@media only screen and (min-width: 600px){

		.filtre-parent-div{

			display: flex;
			flex-direction: row;
			justify-content: space-between;

		}

	}


@media only screen and (max-width: 1400px) and (min-width: 1100px){


	.product-santos{

		width: 31.2%;
	
	}


}


	

	@media only screen and (max-width: 1100px) and (min-width: 600px){

		.parent-taxonomie-info-thes{

			margin-left: 0px !important;
			margin-right:  0px !important;
			width: 100%;
			margin-bottom: 10px !important;

		}
		.thes{

			margin-left: 10%;
			margin-right: 10%;
		}

		.filtre-parent-div{
			padding-top: 40px;
			padding-bottom: 40px;
			
		}

		.#888320 h1 {

			font-size: 10vw !important ;
			margin: 0px !important;
		}

		.image-shop h3 {

			font-size: 4vw !important ;
			margin: 0px !important;
			padding-bottom: 20px;
		}

		.mobile-filtre{

			display: none
		}

		.filtre-parent-div{

			width: calc( 100% - 56px);
			margin-left: auto;
			margin-right: auto;
		}

		.product-santos{

			width: 40%;
			margin-top: 40px;
			padding-bottom: 35px;

		}

		.parent-product{

			display: flex;
			flex-wrap: wrap;
			justify-content: space-evenly;
			width: 100%;

		}

		.parent-taxonomie-info{

			margin-bottom: 20px;
		}


	}

	@media only screen and (max-width: 600px) {


		.filtre-parent-div div{

			display: none;
		}


		.filtre-parent-div{
			padding-top: 20px;
			padding-bottom: 20px;
		}



		.image-shop h1 {

			font-size: 15vw !important ;
			margin: 0px !important;
			padding:  0px 30px  !important;

		}

		.image-shop h3 {

			font-size: 6vw !important ;
			margin: 0px !important;
			padding-bottom: 20px;
			padding-left: 30px  !important;
			padding-right: 30px  !important;
		}

		.global-container{

			margin-top: 0px;
		}

		.product-santos{

			width: calc( 100% - 56px);
			padding-bottom: 30px;
			margin: 30px auto;
		
		}

		.mobile-filtre{

			color: #422112;
			font-size: 15px;
			font-weight: 700; 
		}

	}

</style>


<style scoped >
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap');
</style>






