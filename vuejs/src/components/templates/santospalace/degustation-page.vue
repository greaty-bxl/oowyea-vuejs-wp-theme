<template>

	<div class="section-wrap">
		<div class="image-degustation-page">
			<h3 v-html="pll__('@ Work')"></h3>
			<h1 v-html="pll__('Dégustation')"></h1>
		</div>

		<div class="degustation-page-vue">
			<div class="text-degustation-page">
				<div class="colonne-degustation" v-html="post.post_content">
				</div>
			</div>
			<div class="formulaire-container">
				
				<div class="formulaire" v-html="post.degustation_form">					
				
				</div>
			</div>

		</div>

	</div>

</template>

<script>

	import init_styled_form from 'Libs/styled-form.js'
	
	export default {
		props: {
			'post' : Object
		},
		mounted()
		{
			init_styled_form('.acfe-form input , .acfe-form textarea ')
		}



	}

</script>

<style>



.degustation-page-vue{

	/*min-height: 100vh;*/
	width: 100%;
	display: flex;
	flex-direction: row;
	font-family: 'Montserrat', sans-serif; 
	padding-top: 150px;
	padding-bottom: 150px;
	box-sizing: border-box;

}

.formulaire-container{

	width: 50%;
	min-height: 100%;
	display: flex;

}

.text-degustation-page{

	width: 50%;	
	min-height: 100%;
	display: flex;
	flex-direction: column;
	/*justify-content: center;*/
	
}

.formulaire{

	margin-right: auto;
	margin-bottom: auto;
	/*margin-top: auto;*/
	margin-left: 7%;
	width: 70%;
	text-align: left;

}


.text-degustation-page li{

	list-style: none;
	color: #666666;
	text-align: left;
	font-size: 16px;
	line-height: 24px;
	display: flex;

}

.text-degustation-page li::before {

	content: "-\00a0";

}

.text-degustation-page h2 {

	color: #422112;
	text-align: left;
	font-size: 40px;
	/*width: 75%;*/
	line-height: 120%;
	margin: 0px;
	font-weight: 400;
}

.text-degustation-page h3 {

	color: #422112;
	text-align: left;
	font-size: 40px;
	/*width: 75%;*/
	line-height: 120%;
	margin: 0px;
	font-weight: 400;
}

.text-degustation-page h4 {

	color: #422112;
	text-align: left;
	font-size: 40px;
	/*width: 75%;*/
	line-height: 120%;
	margin: 0px;
	font-weight: 400;
}





.text-degustation-page button{

	/*margin-top: 40px;*/
	/*text-align: left;*/
}

.button-santos-vert{

	width: 30%;
}

.text-degustation-page ul{
	font-size: 50px;
	padding-left: 0px;
	text-align: left;
	margin:  50px 0px;
	width: 80%;
	
}

.image-degustation-page{

	color: white;
	background-image: url('https://demo-santospalace.greaty.be/bruxelles/wp-content/uploads/sites/2/2021/01/santos-palace_degustation-01.png');
	background-position: center;
	background-size: cover; 
/*	margin-top: 100px;*/
	background-color: #FAFAFA;
	padding-bottom: 50px;
	display: flex;
	justify-content: center;
	flex-direction: column;
}

.image-degustation-page{
	padding-top: 143px;
	padding-bottom: 143px;
}

.image-degustation-page h1{
	
	font-weight: bold;
}

.colonne-degustation{

	margin-left: auto;
	width: 70%;
}


.formulaire-container input.acf-button.button.button-primary.button-large.paddingTop-animation-acf{

	font-weight: 700;
	font-size: 16px !important;
}



@media only screen and (max-width: 1400px) and (min-width: 1100px){

	.text-degustation-page h2{

		color: #422112;
		text-align: left;
		font-size: 30px;
		/*width: 80%;*/
		line-height: 120%;
		margin: 0px;
	}


	.text-degustation-page h3{

		color: #422112;
		text-align: left;
		font-size: 30px;
		/*width: 80%;*/
		line-height: 120%;
		margin: 0px;
	}

	.text-degustation-page h4{

		color: #422112;
		text-align: left;
		font-size: 30px;
		/*width: 80%;*/
		line-height: 120%;
		margin: 0px;
	}


	.colonne-degustation{

		margin-left: auto;
		width: 80%;
	}

	.formulaire{

		width: 80%;
	}

	.image-degustation-page{

		/*margin-top: 100px;*/
	}

}

@media screen and (min-width: 1100px){

	.image-degustation-page h1 {

		font-size: 6vw !important ;
		margin: 0px !important;
	}

	.image-degustation-page {

		margin-top: 100px;
	}

	.image-degustation-page h3 {

		font-size: 2vw !important ;
		/*margin: 0px !important;*/
		/*padding-bottom: 25px;*/
	}

	.colonne-degustation{

		margin-right: 7%;
	}

}


@media screen and (max-width: 1300px) and (min-width: 1100px){


	.text-degustation-page ul{
	
		width: 80%;
		
	}

}

@media screen and (max-width: 1100px) and (min-width: 600px){

	.formulaire{

		height: 100%;
		width: calc(100% - 140px); 
		margin-left: auto;
		margin-bottom: 100px;
	}

	.text-degustation-page ul{

		margin-bottom: 0px;
	}

	.degustation-page-vue{

		width: calc(100% - 140px);
	}

	.image-degustation-page h1 {

		font-size: 10vw !important ;
		margin: 0px !important;
	}

	.image-degustation-page h3 {

		font-size: 4vw !important ;
		margin: 0px !important;
		padding-bottom: 20px;
	}


	.text-degustation-page{

		width: calc(100% - 140px);	
		padding: 100px 70px;
		display: flex;
		
	}
	
}

@media screen and (max-width: 1100px) {
	
	.degustation-page-vue{

		padding-top: 0px;
		padding-bottom: 0px;
		box-sizing: border-box;
	}

	.image-degustation-page{

		margin-top: 100px;
	}

	.degustation-page-vue{

		width: 100%;
		display: flex;
		flex-direction: column;
		height: auto;
	}

	.formulaire-container{
		width: 100%;
		min-height: 50vh;
	}

	.text-degustation-page{

		width: calc(100% - 140px);	
		display: flex;
		
	}

	.colonne-degustation{

		width: 100%;
	}

	.text-degustation-page h2{

		margin: 0px;
	}

}

	@media screen and (max-width: 600px) {


		.formulaire{

			margin-left: 0px;
			margin-bottom: 70px;
		}

		.image-degustation-page{

			margin-top: 73px;
		}

		.formulaire{

			width: 100%;
			height: 100%;
		}

		.image-degustation-page h1 {

			font-size: 12vw !important ;
			padding:  0px 30px  !important;
			margin: 0px  !important;

		}

		.image-degustation-page h3 {

			font-size: 6vw !important ;
			padding-left: 30px  !important;
			padding-right: 30px  !important;
			margin: 0px !important;
			padding-bottom: 20px;
		}

		.text-degustation-page{

			width: calc( 100% - 60px);
			padding-left: 30px;
			padding-right: 30px;
			padding-top: 70px;	
			padding-top: 70px;
			display: flex;
		}

		.text-degustation-page ul{
			font-size: 5vw !important;
			padding-left: 0px;
			/*margin:  50px auto;*/
			width: 100%;
			/*width: calc( 100% - 60px);	*/

		}

		.text-degustation-page h2{
			/*text-align: center;*/
			width: 100%;	
			font-size: 10vw !important;
			line-height: 12vw;
		}

		.text-degustation-page button{

			font-size: 17px;
			margin-left: auto;
			margin-right: auto;
			width: 50%;
		}

		.formulaire-container{
			margin-left: auto;
			margin-right: auto;
			width: calc(100% - 60px)
		}

	}
	

</style>

<style  scoped >
	




</style>