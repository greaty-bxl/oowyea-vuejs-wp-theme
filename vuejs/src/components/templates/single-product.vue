
<template>
	<div class="section-wrap">
		<div class="clear"></div>
			
			<div class="content-single">
				<div>
					<img class="image-single" :src="this.post.thumb">
				</div>
				<div class="single-text"> 
					<h2 class="montserrat-bold title-single-fromagerie">Colis</h2>
				
						<p>Composition :</p>
					<div v-html="this.post.acf_fields.list_colis" class="list-colis">
					</div>
					<div>				
						<p v-html="this.post.metas._regular_price[0] +' €' " class="price-single montserrat-bold"> </p>
						<p>Taxes incluses</p>
					</div>

					<div>				
						<p class="nbrpersonne">Nombre de personnes :</p>
						<input type="number" name="">
						
					</div>

					<div>
						<p>Retrait en magasin ( gratuit )</p>
					</div>				
					<div>
						<img class="bancontact"  src="http://localhost/template_greaty/wp-content/uploads/2020/10/BC_logo_ORGNL_RGB.png">
					</div>

					<div class="button-contener">

						<button>Ajouter au panier</button>
						<button>Acheter</button>

					</div>

					<div class="retour">
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
	export default {
		components: {
			
		},
		props: {
			'post' : Object
		},
		mounted (){
			//var $ = this.$
			
			this.$emit('template_mounted')

			console.log(this.wp);

		}
	}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;1,100;1,200;1,300;1,400&display=swap');
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
	.button-contener button:nth-child(2){

		margin-top: 15px;
		background-color: #A59890;
		color: white;
		border-width: 0 ;

	}

	.button-contener button:nth-child(1){

		background-color: #70625B;
		color: white;
		border-width: 0 ;
	}


	.button-contener button{

		text-align: center;
		padding: 15px 0px;

	}
	
	.content-single{

		display: flex;
		flex-direction: row;
		margin: auto auto;
		width: 60vw;

	}
	.image-single{

		height: 30vw !important;
		width: 30vw;
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
		font-weight: 600;

	}

	.single-text li {

		font-size: 16px !important;
		font-weight: 600;
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
		.button-contener button{

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

		.single-text{

			padding-left: 0;
			padding-top: 2.5vh;

		}
		.image-single {

			height: 85vw !important;
			width: 85vw;

		}

		.button-contener button{

			width: 50%;
			/*padding: 10px 0px;*/

		}

	}


</style>

<style scoped>



</style>