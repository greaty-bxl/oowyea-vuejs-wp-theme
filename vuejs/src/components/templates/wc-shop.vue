
<template>
    <div class="section-wrap">
		<div class="clear"></div>

			<ProductFilter />

			<div class="image-shop">
				<h3>Cafés</h3>
				<h1>Nos Cafés</h1>
			</div>

			<div class="global-container">
				
				<div class="child-container">
					
					<div class="filtre-parent-div">
						<div> <p class="title-page-boutique">Cafes</p>  </div>
						<div><button class="button-santos-vert" v-on:click="open_filter">FILTRER PAR</button></div>
						<p class="mobile-filtre">FILTRE</p>
					</div>

					<div class="parent-product">

						<div class="product-santos">
							<div class="div-grey">
								<img class="image-product" src="http://santospalace.test/wp-content/uploads/2021/01/paquet-de-cafe-01.png">
								<p class="title-product">LOREM IPSUM</p>
								<div>
									
									<div class="parent-taxonomie-info">
										<p class="titre-taxonomie">Intensité</p>
										<div class="valeur-taxonomie" >
											<div></div>
											<div></div>
											<div></div>
											<div></div>
											<div></div>
										</div>
									</div>

									<div class="parent-taxonomie-info">
										<p class="titre-taxonomie">Intensité</p>
										<div class="valeur-taxonomie" >
											<div></div>
											<div></div>
											<div></div>
											<div></div>
											<div></div>
										</div>
									</div>
									<p class="flavour" >Notes : Floral et Epices</p>


								</div>
							</div>
							<div class="price" ></div>
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

	methods: {
		open_filter: function(){

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

	.flavour{

		color: #666666;
	}


/*	.product-santos{


	}*/
/*	.div-#FAFAFA
	.price
*/
	@media screen and (min-width: 1100px){

		.title-product{

			font-size: 15px;
			margin-bottom: 25px;
		}

		.image-product{

			margin-bottom: 25px;
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

			width: 24%;
			margin-top: 45px;
			background-color: #FAFAFA;
			padding-top: 35px;
			padding-bottom: 35px;
		}

		.parent-product{

			display: flex;
			justify-content: space-between;
			width: 100%;

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


		.title-product{

			font-size: 16px;
			margin-bottom: 25px;
		}
		
		.image-product{

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

		.global-container{


		}

		.product-santos{

			width: 40% ;
			background-color: #FAFAFA;
/*			height: 40vh;*/
			margin-top: 40px;
			padding-top: 35px;
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
		
		.image-product{

			margin-bottom: 20px;
		}

		.global-container{

			margin-top: 0px;
		}


		.product-santos{

			width: calc( 100% - 56px);
			padding-top: 30px;	
			padding-bottom: 30px;
			background-color: #FAFAFA;
			margin: 30px auto;
		
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






