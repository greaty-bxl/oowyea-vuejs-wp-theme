<template>
    <div class="section-wrap">
		<ProductFilter/>
		<div class="clear"></div>
			<div class="image-shop">
				<h3>Cafés</h3>
				<h1>Nos Cafés</h1>
			</div>

			<div class="global-container">
				
				<div class="child-container">
					
					<div class="filtre-parent-div">
						<div> <p class="title-page-boutique">Cafes</p>  </div>
						<div><button class="button-santos-vert" v-on:click="open_filter">FILTRER PAR</button></div>
						<p class="mobile-filtre" v-on:click="open_filter">FILTRE</p>
					</div>

					<div class="parent-product">

						<div v-for="item in posts" :key="item.ID" class="product-santos">
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
import {has_term} from 'Libs/wp-functions.js'

export default {
	components: {
		ProductFilter
	},
	props: {
		'post' : Object,
		'posts' : Array
	},

	mounted(){

		console.log( 'wc-shop', this.post, this.posts);

		smart_fonts({
			'.titre-home' : 85 ,
		})

		this.$emit('template_mounted', this);

		// var $ = this.$

	},
	destroyed(){
		console.log('shop destroyed');
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

		has_term,

		isFilled: function(post, count, keyword){

				if( post.terms[keyword] ) 
				{
					if( post.terms[keyword][0].fields[keyword+'_points'] >= count )
					{
						return true
					}	
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

	.div-grey{

		background-color: #FAFAFA;
		padding-bottom: 30px;

	}

	.image-product{

	width: 100%;
	}

	.price {

	    text-align: left;
	    color: #422112;
	    font-size: 15px;
	    font-weight: 700;
	    padding-top: 20px;

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
		background-color: #FAFAFA;
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

	.title-product{

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


	.titre-taxonomie{
		font-weight: 700;
		color: #666666;
		font-size: 14px;
		line-height: 14px
	}

	.valeur-taxonomie{

		display: flex;
		flex-direction: row;

	}
	
	.valeur-taxonomie div{

		border: 1px solid #888320;
		border-radius: 100%;
		height: 10px;
		width: 10px;
		margin-left: 11px; 

	}

	.valeur-taxonomie div.filled{
		background-color: #888320;
	}

	.flavour{
		font-size: 14px;
		color: #666666;
	}

	.parent-taxonomie-info-thes{
		font-weight: 600;
	
	}

	.value-terms-thes{
		font-size: 14px;
		line-height: 14px;
	}

	@media screen and (min-width: 1100px){


		.title-product{

			font-size: 15px;
			margin-bottom: 25px;
		}

		.cadre{

		padding: 30px 30px 25px 30px;
		}

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
		}
						
		.child-container{

			width: 100%;
			height: 50vh;
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

		.title-product{

			font-size: 16px;
			margin-bottom: 25px;
		}
		

		.filtre-parent-div{
			padding-top: 40px;
			padding-bottom: 40px;
			
		}

		.image-shop h1 {

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


		.cadre{

			padding: 30px 30px 25px 30px;
		}

		.product-santos{

			width: 40% ;
			background-color: #FAFAFA;
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
		}

		.image-shop h3 {

			font-size: 6vw !important ;
			margin: 0px !important;
			padding-bottom: 20px;
		}

		.title-product{

			font-size: 14px;
			margin-bottom: 25px;
		}
		
		.global-container{

			margin-top: 0px;
		}


		.product-santos{

			width: calc( 100% - 56px);
			padding-bottom: 30px;
			margin: 30px auto;
		
		}

		.cadre{

			padding: 30px 30px 20px 30px ;
		}

		.parent-product{

			padding-top: 20px;	
			padding-bottom: 20px;

		}

		.mobile-filtre{

			color: #422112;
			font-size: 15px;
			font-weight: 700; 
		}

		.parent-taxonomie-info{

			margin-bottom: 15px;
		}

	}
</style>


<style scoped >
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap');
	
</style>






