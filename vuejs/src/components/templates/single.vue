
<template>
	<div class="section-wrap">
		<div class="clear"></div>
			
			<div class="content-single">
				<div>
					<img class="image-single" :src="this.post.thumb">
				</div>
				<div class="single-text-post "> 
					<h2 class="montserrat-bold title-single-fromagerie">Colis</h2>
				
						<p>Composition :</p>
					<div v-html="this.post.acf_fields.list_colis" class="list-colis">
					</div>
					<div>				
						<!-- <p v-html="this.post.metas._regular_price +' €' " class="price-single montserrat-bold"> </p> -->
						<p>Taxes incluses</p>
					</div>

					<div>				
						<p class="nbrpersonne">Nombre de personnes :</p>
						<input type="number"  name="">
						
					</div>
<!-- 
					<div>
						<p>Retrait en magasin ( gratuit )</p>
					</div>	 -->			
					<div>
						<img class="bancontact"  src="http://greaty.digital.brussels/wp-content/uploads/2020/10/BC_logo_ORGNL_RGB.png">
					</div>

					<h2 class="montserrat-bold title-single-fromagerie">Commandes et demandes spéciales</h2>
					
					<div class="contener-single">
						<form action="" method="get" class="form-example"  >
							<input v-html="" class="input-single-title"    type="" name="">
							<input class="input-single"  placeholder="Prénom"  type="" name="">
							<input class="input-single" placeholder="E-mail" type="" name="">
							<input class="input-single" placeholder="Téléphone" type="" name="">
							<input class="input-single" placeholder="Nombre de personnes" type="" name="">
							<input class="input-single" placeholder="Assortiments en plat ou dessert " type="" name="">
							<textarea class="input-single" placeholder="Message" type="" name=""></textarea>
							<button class="button-envoyer">Envoyer</button>
						</form>
					</div>
					<div   class="retour">
						<a :href="this.wp.sections">
							<p> Retour </p>
						</a>	
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
		mounted (){
			// var $ = this.$

			// $('.retour').html('[add_to_cart id="99"]')
			
			this.$emit('template_mounted')

			console.log(this.wp);

			smart_fonts({
	
				'.input-single' : 18,
			})


		}
	}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;1,100;1,200;1,300;1,400&display=swap');
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

		width: 60vw;

	}
	.image-single{

		/*height: 30vw !important;*/
		width: 35vw;
	}

	.single-text-post  p{

		margin: 0px;
		/*padding-top: 16px;*/
	}


	.single-text-post  div{

		/*margin: 0px;*/
		padding-top: 16px;
	}

	.single-text-post {

		/*height: 30vw !important;*/
		/*width: 30vw;*/
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

	.content-single textarea{
		
		min-width: 20vw;
	}


	.content-single *{

		text-align: left;
		color: #4D4D4D;
		
	}

	.montserrat-bold{

		font-family: 'Montserrat', sans-serif !important;
		font-weight: bold !important;
	}

	.price-single{

		font-size: 20px !important;
	}

	.title-single-fromagerie{

		font-size: 25px !important;
	}

	.content-single input{
		margin-top: 5px;
		height: 30px;
		width: 20vw;
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

		padding-top: 40px !important;
	}

	.retour a{

		text-decoration-line: none;
		color: #A59890;

	}



	@media screen and (max-width: 1100px) and (min-width: 600px ) {

		.content-single{

			display: flex;
			flex-direction: column;
			margin-top: 150px;
			margin-bottom: 150px;
		}

		.content-single input{
		
			width: auto;
		}

		.single-text-post {

		padding-left: 0;
		padding-top: 5vh;

		}

		.image-single {
			height: 60vw !important;
			width: 60vw;
		}

		.single-text-post  div{


			padding-top: 20px;
		}
		.button-contener p{

			width: 50%;
			/*padding: 10px 0px;*/

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
		}

		.single-text-post {

			padding-left: 0;
			padding-top: 2.5vh;

		}
		.image-single {

			height: 85vw !important;
			width: 85vw;

		}

		.button-contener p{

			width: 50%;
			/*padding: 10px 0px;*/

		}
		.button-contener a{

			width: 100%;
			/*padding: 10px 0px;*/

		}

	}


</style>

<style scoped>

	.woocommerce #respond input#submit, .woocommerce a.button, .woocommerce button.button, .woocommerce input.button{

		text-align: center;
	}

	.content-single del{

		display: none !important;
	}

	.content-single bdi {

		display: none !important;
	}

	a{
		text-decoration-line: none;
		color: #666666;
	}

	input{

		border: 1px solid #A59890 !important;
		margin-top: 15px;
		padding-top: 10px;
		padding-bottom: 10px;
		color: #666666;
		padding-left: 15px;

	}

	textarea{
		padding-top: 10px;
		border: 1px solid #A59890 !important;
		margin-top: 15px;
		min-height: 100px;
		padding-left: 15px;
	}

	button{

		margin-top: 20px;
		padding-top: 10px;
		padding-bottom: 10px;
		background: #A59890;
		color: white;
		border: solid #A59890;
		border-width: 1px;
		font-weight: bold;

	}

	button:hover{

		color: #A59890;
		background: white;
		/*border: 1px ;*/
	/*	border: solid #A59890;
		border-width: 1px;*/
		transition-delay: 200;
	}

	@media screen and (max-width: 1100px) and (min-width: 600px){

		h5{

			font-size: 26px !important;
		}
	}

	@media screen and (max-width: 600px){


	}

	.contener-single form{

		display: flex;
		flex-direction: column;
		max-width: 20vw;
		/*justify-content: space-between;*/
	}
	


	@media screen and (max-width: 1100px) and (min-width: 600px){


		.contener-single form{

			max-width: 80% !important;
			/*justify-content: space-between;*/
		}



	}

	@media screen and (max-width: 600px){


		.contener-single form{

			max-width: 100%;
			/*justify-content: space-between;*/
		}

	}



</style>










