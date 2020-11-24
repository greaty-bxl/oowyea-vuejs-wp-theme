
<template>
	<div class="section-wrap">
		<div class="clear"></div>
			
			<div class="content-single">

				<div>
					<img class="image-single-post" :src="this.post.thumb">
				</div>

				<div class="single-text-post "> 

					<h2 class="montserrat-bold title-single-fromagerie" v-html="post.post_title">Colis</h2>

					<div v-html="this.post.acf_fields.list_colis" class="list-colis">

					</div>

					<div>
						<p class="commande-prete"> Si vous commandez après <strong>19h30</strong>, votre commande sera prête le <strong>surlendemain</strong>.</p>
					</div>			

					<h2 class="montserrat-bold title-single-fromagerie-1">Commandes et demandes spéciales</h2>

					<div class="contener-single">

					<formulaire></formulaire>

					</div>

					<div class="retour">

					<button onclick="window.history.back()">Retour</button>

					</div>
					
				</div>
			</div>
		
		<div class="clear"></div>
	</div>
</template>


<script>

	import smart_fonts from 'Libs/smart-fonts.js';
	import formulaire from 'Molecules/formulaire';
	export default {
		components: {
			formulaire
		},
		props: {
			'post' : Object
		},
		mounted (){
			var $ = this.$



			// this.$emit('template_mounted')

			console.log(this.wp);
	
	
			$('.title-21').attr('placeholder', this.post.post_title );
			$('.title-21').attr('value', this.post.post_title );

			

		

			smart_fonts({
	
				'.input-single' : 18,
			})


		}
	}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;1,100;1,200;1,300;1,400&display=swap');
	
	.commande-prete{

		font-style: italic;
		font-size: 14px;
		margin-top: 15px !important;
	}

	.input-single-title{

		display: none;
	}
	#header{

		height: 0px;
	}
	.bancontact{

		height: 40px !important;
	}

	.list-colis{
		padding-top: 0px !important;
	}

	.list-colis p {
		padding-top: 16px !important;
	}
	
	
	.button-contener{

		display: flex;
		flex-direction: column;

	}
	.button-contener a{

		width: 100%;
		
		padding: 20px 0px !important;
	}

	.button-contener p{
		padding: 0px !important;
		margin-top: 15px;
		/*background-color: #A59890;*/
		color: white;
		border-width: 0 ;
		border:0px !important ;
		text-align: center;

	}

	.button-envoyer{

		text-align: center !important;
		padding-top: 15px !important;
		padding-bottom: 15px !important;
		background-color: #70625B !important;
		width: 100%;
		font-size: 15px !important;
	}

	.button-envoyer:hover{

		text-align: center !important;
		padding-top: 15px !important;
		padding-bottom: 15px !important;
		background-color: white !important;
		color: #70625B !important;
		width: 100%
	}




/*	.button-contener button{

		background-color: #70625B;
		color: white;
		border-width: 0 ;
	}*/


/*	.button-contener button{

		text-align: center;
		padding: 20px 0px;

	}*/
	
	.content-single{

		display: flex;
		flex-direction: row;
		margin-top: 150px;
		margin-bottom: 50px;
		margin-right: auto;
		margin-left: auto;

		/*width: 60vw;*/

	}
	.image-single-post{
		min-width: auto !important;
		width: 600px;
	}

	.single-text-post  p{

		margin: 0px;
		font-weight: 400 !important;
		line-height: 24px;
		
		/*padding-top: 16px;*/
	}
.single-text-post li{

	font-weight: 400 !important;

}

	.single-text-post  div{

		/*margin: 0px;*/
		padding-top: 0px;

	}

	.single-text-post {

		/*height: 30vw !important;*/
		width: 20vw;
		padding-left: 5vh;
	}
	.single-text-post  p {

		font-size: 16px !important;
		font-weight: 500;

	}

	.single-text-post  li {

		font-size: 16px !important;
		font-weight: 500;
	}

	.content-single ul li{

		list-style: none;

	}
	.content-single ul{

		padding-left: 0;
	}

	/*.content-single */


	.content-single *{

		text-align: left;
		color: #4D4D4D;
		
	}

	.montserrat-bold{

		font-family: 'Montserrat', sans-serif !important;
		font-weight: bold !important;
		color: #70625B;
	}

	.price-single{

		font-size: 20px !important;
	}

	.title-single-fromagerie{

		font-size: 25px !important;
	}

	.title-single-fromagerie-1{
		padding-top: 20px !important;
		font-size: 20px !important;
	}

	.content-single input{
		margin-top: 5px;
		height: 30px;
		width: auto !important;
	}


	.single-text-post  div p:nth-child(2){

		padding-top: 10px;
	}

	.single-text-post  ul li{

		padding-top: 3px;
	}

	.nbrpersonne{

		padding-bottom: 10px !important;
	}

	.retour{

		padding-top: 30px !important;
		color: #A59890 !important;
	}

	.retour button{
		font-size: 16px !important;
		border: none !important;
		background-color: white !important;
		text-decoration-line: none !important;
		font-weight: 400 !important;
		color: #70625B !important;
		padding-left: 0px !important;
		margin-top: 0px !important;

	}
	


	@media screen and (max-width: 1100px) and (min-width: 600px ) {

		.button-envoyer{
			font-size: 18px !important;
		}

		.retour button{

			font-size: 18px !important;
		}


		.content-single{

			display: flex;
			flex-direction: column;
			margin-top: 150px;
			margin-bottom: 150px;
			margin-right: 70px;
			margin-left: 70px;
			width: auto !important;

		}

		.content-single input{
		
			width: auto;
			font-size: 18px !important;
		}
		.content-single textarea{
		
			font-size: 18px !important;
		}

		.single-text-post {

		padding-left: 0;
		padding-top: 5vh;
		width: auto !important;

		}

		.image-single-post {
			/*height: 60vw;*/
			min-width: 600px !important;
			width: 60vw !important;
		}

		.single-text-post  div{

			padding-top: 0px;
		}
		.button-contener p{

			width: 50%;
			/*padding: 10px 0px;*/

		}

		.single-text p{

			line-height: 24px !important;

		}
	}

	@media screen and (max-width: 600px){

		.content-single{

			display: flex;
			flex-direction: column;
			padding-top: 0vh;
			margin-bottom: 50px;
			margin-top: 130px;
			margin-left: 30px;
			margin-right: 30px;
			width: auto;
		}

		.content-single input{
		
			width: auto;
			font-size: 15px !important;
		}

		.content-single textarea{

			font-size: 15px !important;
		}

		.single-text-post {

			padding-left: 0;
			padding-top: 2.5vh;
			width: auto !important;

		}
		.image-single-post {
			min-width: auto !important;
			width: calc(100vw - 60px) !important;

		}

		.button-contener p{

			width: 50%;
			/*padding: 10px 0px;*/

		}
		.button-contener a{

			width: 100%;
			/*padding: 10px 0px;*/

		}

		.single-text p{

			line-height: 20px !important;

		}

		.woocommerce .quantity .qty{

			width: 70px !important;
		}

	}

	input:focus {
	color: #70625b !important;
	}



</style>

<style scoped>


</style>










