
<template>
    <div class="section-wrap">
		<div class="clear"></div>

			<div class="image-shop">
				<h3>Cafés</h3>
				<h1>Nos Cafés</h1>
			</div>

			<div class="global-container">
				
				<div class="child-container">
					
					<div class="filtre-parent-div">
						<div> <p>Cafes</p>  </div>
						<div><button>FILTRER PAR</button></div>
						<p class="mobile-filtre">FILTRE</p>
					</div>

					<div class="parent-product">

						<div class="product-santos">
							<div class="div-grey"></div>
							<div class="price" ></div>
						</div>

						<div class="product-santos">
							<div class="div-grey"></div>
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


export default {
	components: {

	},
	props: {
		'post' : Object
	},

	mounted(){


		smart_fonts({
			'.titre-home' : 85 ,
		})

		this.$emit('template_mounted', this);

		// var $ = this.$



	}

}



</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap');

	.image-shop{

		margin-top: 114px;
		background-color: grey;
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



/*	.product-santos{


	}*/
/*	.div-grey
	.price
*/
	@media screen and (min-width: 1100px){


		.image-shop h1 {

			font-size: 7vw !important ;
			margin: 0px !important;
		}

		.image-shop h3 {

			font-size: 2vw !important ;
			margin: 0px !important;
			padding-bottom: 30px;
		}


		.global-container{

			display: flex;
			justify-content: center;
			align-content: center;
			margin-top: 50px;
		}
						
		.child-container{

			width: 75%;
			height: 50vh;
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
			
			height: 40vh;
			width: 25%;
			background-color: grey;
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
			/*border-bottom: 1px solid #dddddd;*/

		}

		.filtre-parent-div{

			padding-bottom: 30px;
		}

		.parent-product{

			display: flex;
			justify-content: center;
			width: 100%;

		}


	}

	@media only screen and (max-width: 1100px) and (min-width: 600px){


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

			width: 30% ;
			background-color: grey;
			height: 40vh;
		}


	}

	@media only screen and (max-width: 600px) {


		.filtre-parent-div div{

			display: none;
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

		.mobile-filtre{

			padding-top: 20px;
			padding-bottom: 20px;
		}

		.global-container{

			margin-top: 0px;
		}


		.product-santos{

			width: calc( 100% - 56px);
			background-color: grey;
			height: 40vh;
			margin: 30px auto;
		
		}

	}
</style>


<style scoped >
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap');
	

/*h1 {
font-size: 250px;
margin: .67em 0;
}*/



</style>






