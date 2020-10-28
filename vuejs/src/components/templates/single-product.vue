
<template>
	<div class="section-wrap">
		<div class="clear"></div>
			
			<div class="content-single">
				<div>
					<img class="image-single" :src="this.post.thumb">
				</div>
				<div class="single-text"> 
					<h2 class="montserrat-bold title-single-fromagerie">Colis</h2>
				
					<p class="composition">Composition :</p>
					<div v-html="this.post.acf_fields.list_colis" class="list-colis">
					</div>
					<div>				
						<p v-html="this.post.metas._price +' €' " class="price-single montserrat-bold"> </p>
						<p>Taxes incluses</p>
					</div>

					<div>
						<p>Retrait en magasin ( gratuit )</p>
					</div>				
					<div>
						<img class="bancontact"  src="http://greaty.digital.brussels/wp-content/uploads/2020/10/BC_logo_ORGNL_RGB.png">
					</div>

					<div>				
						<p class="nbrpersonne">Nombre de personnes :</p>	
					</div>

					<div class="button-contener" v-html="add_to_cart">

					</div>

					<div   class="retour">
						<a >
							<p> Retour </p>
						</a>	
					</div>
					
				</div>
			</div>
		
		<div class="clear"></div>
	</div>
</template>

<script>
	export default {
		components: {
			
		},
		props: {
			'post' : Object
		},
		mounted (){
			var $ = this.$

			// $('.retour').html('[add_to_cart id="99"]')
			console.log( this.$store.state.wp.cart );
			console.log( this.wp);



		if ( this.post.terms[0].slug === "plateau-fromage" ) {
			console.log('');
		}
		else{

		$('.nbrpersonne').html("Quantité")

		}
			
			this.$emit('template_mounted')
		},
		computed: {
			add_to_cart () {
				return this.$store.state.wp.add_to_cart
			}
		}
	}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;1,100;1,200;1,300;1,400&display=swap');

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

	.composition{

		margin-bottom: 15px !important;
	}



	.woocommerce #respond input#submit.alt, .woocommerce a.button.alt, .woocommerce button.button.alt, .woocommerce input.button.alt{

	background-color: #70625B;
	color: white;
	border-width: 0;
	margin-top: 16px;
	border: solid #70625B;
	border-width: 1px;
	min-width: 200px;
	width: 40%;
	padding-top: 20px;
	padding-bottom: 20px;


	}

	.woocommerce #respond input#submit.alt:hover, .woocommerce a.button.alt:hover, .woocommerce button.button.alt:hover, .woocommerce input.button.alt:hover{

		background-color: white;
		color: #70625B;
		transition: 200;

	} 


	.button-contener button{

		text-align: center;
		padding: 20px 0px;

	}
	
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

	.single-text p{

		margin: 0px;
		/*padding-top: 16px;*/
	}


	.single-text div{

		/*margin: 0px;*/
		padding-top: 16px;
	}

	.single-text{

		/*height: 30vw !important;*/
		/*width: 30vw;*/
		padding-left: 5vh;
	}
	.single-text p {

		font-size: 16px !important;
		font-weight: 400;

	}

	.single-text li {

		font-size: 16px !important;
		font-weight: 500;
	}

	.content-single ul li{

		list-style: none;

	}
	.content-single ul{

		padding-left: 0;
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
		width: 30%;
	}

	.single-text div p:nth-child(2){

		padding-top: 10px;
	}

	.single-text ul li{

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

	.woocommerce .quantity .qty{

		width: 8vw;
	}

	



	@media screen and (max-width: 1100px) and (min-width: 600px ) {

		.content-single{

			display: flex;
			flex-direction: column;
			margin-top: 150px;
			margin-bottom: 150px;
		}

		.single-text{

		padding-left: 0;
		padding-top: 5vh;

		}

		.image-single {
			height: 60vw !important;
			width: 60vw;
		}

		.single-text div{


			padding-top: 20px;
		}
		.button-contener p{

			width: 50%;
			/*padding: 10px 0px;*/

		}

		.woocommerce .quantity .qty{

			width: 140px;
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

		.single-text{

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

		.woocommerce .quantity .qty{

			width: 70px;
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


</style>