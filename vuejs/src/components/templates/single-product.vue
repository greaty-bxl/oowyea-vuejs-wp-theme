
<template>
	<div class="section-wrap">
		<div class="clear"></div>
		
			<div class="content-single">
				<div  class="retour">
					
						<button onclick="window.history.back()">Retour</button>
					
				</div>
				<div class="contenu-single">

					<div class="div-image-single">
						<img class="image-single" :src="post.thumb">
					</div>
					<div class="single-text"> 
						<h2 class="open-sans title-single-santospalace" v-html="post.post_title">Colis</h2>
						<p class="approximate-price"><span v-html="post.price"  ></span></p>

						<div>
							
							<div class="description-padding">
								<div class="cafes" v-if="has_term(post, 'product_cat', 'cafes')">
									<div class="parent-taxonomie-info-single">
										<p class="titre-taxonomie">Intensité</p>
										<div class="valeur-taxonomie" >
											<div v-for="count_intesity in 5" :key="count_intesity" 
											v-bind:class="{ filled: isFilled(post, count_intesity, 'intensity') }">
											</div>
										</div>
									</div>
								</div>

								<div class="cafes" v-if="has_term(post, 'product_cat', 'cafes')">
									<div class="parent-taxonomie-info-single">
										<p class="titre-taxonomie">Acidité</p>
										<div class="valeur-taxonomie"  >
											<div v-for="acidity_points in 5" :key="acidity_points" 
											v-bind:class="{ filled: isFilled(post, acidity_points, 'acidity') }">
											</div>
										</div>
									</div>
									
								</div>

								<div>
									<p class="flavour" >Notes : Floral et Epices</p>
								</div>
								
								<div>
									<p class="descriptif">Mélange subtil de Santos Brésilien doux et d’Haïti au goût puissant des hauts plateaux de l’Amérique Central, vous donnerons un compromis entre force et douceur..</p>
								</div>
							</div>

						

						</div>
						

									
						<div class="div-parent-icons" v-html="this.wp.payment_methods_images">
							
						</div>

						<div v-if="post.is_in_stock" class="button-contener" v-html="post.add_to_cart">

						</div>
						
					</div>
					
				</div>
				
			</div>
		
		<div class="clear"></div>
	</div>
</template>

<script>
	import {has_term} from 'Libs/wp-functions.js'
	export default {
		components: {
			
		},
		props: {
			'post' : Object
		},
		mounted (){
			// var $ = this.$

			// $('.retour').html('[add_to_cart id="99"]')
			console.log( this.$store.state.wp.cart );
			console.log( this.post.terms.acidity[0].fields.acidity_points);

		// $('nav').css('background-color', 'white');
			
			console.log(this.wp.payment_methods_images);

			// if ( this.post.terms[0].slug === "plateau-fromage" ) 
			// {
			// 	console.log('');
			// }
			// else
			// {
			// 	$('.nbrpersonne').html("Quantité")
			// }

			console.log(this.post);
			
			this.$emit('template_mounted')
		},
		methods: {

			has_term,

			isFilled: function(post, count , keyword){

			if( post.terms[keyword] ) 
					{
						if( post.terms[keyword][0].fields[keyword+'_points'] >= count )
						{
							return true
						}	
					}
			}
		},
		computed: {
			add_to_cart () {
				return this.$store.state.wp.add_to_cart
			},
			wp () {
				//console.log(cap);
				return this.$store.state.wp
			}
		}
	}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap');

	.woocommerce img, .woocommerce-page img{

		max-width: auto !important;
	}

	.valeur-taxonomie{

		display: flex;
		flex-direction: row;
		align-items: center;

	}

	.div-parent-icons img{

		border: none;
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

	.wc-stripe-card-icon{

		margin-right: 2px;
	}

	.descriptif{

		font-size: 14px !important;
		/*margin-top: 15px !important;*/
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
		/*padding-top: 0 !important;*/
		display: flex;
		flex-direction: column;

	}
	.button-contener a{

		width: 100%;
		
		padding: 20px 0px !important;
	}

	.input-text{

		border: 1px solid #808080 !important;
		color: #808080;
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

	*:focus {
		outline: none !important;
	}


	.button-contener button{

		text-align: center;
		padding: 20px 0px;

	}
	
	.content-single{

		display: flex;
		flex-direction: column;
		margin-top: 110px;
		margin-bottom: 50px;
		margin-right: auto;
		margin-left: auto;

		width: 60vw;

	}
	.image-single{

		margin-top: auto;
		margin-bottom: auto;
		width: 40vw  !important;
		min-width: 300px;
	}

	.single-text p{

		margin: 0px;

	}


	.single-text > *{

		font-family: 'open sans';
		padding-top: 30px;
	}

	.description-padding > *{

		padding-top: 20px;
	}

	.single-text{

		padding-left: 10vh;
	}
	.single-text p {

		font-size: 16px !important;
		font-weight: 400;
		line-height: 24px;

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

	.content-single{

		text-align: left;
		color: #4D4D4D;
		
	}

	.open-sans{
        color: #70625B;
		font-family: 'open sans';
		font-weight: bold ;
	}

	.price-single{

		font-size: 20px !important;
	}

	.title-single-santospalace{
		padding: 0px 0px 0px 0px;
		margin: 0px;
		font-size: 50px !important;
		color: #422112;
	}

	.approximate-price{
		display: flex;
		color: #808080;
	}

	.approximate-price span{

		color: #422112;
		font-weight: bold;
	}

	.price{

		margin-left: 10px;

	}

	.content-single input{

		/*margin-top: 5px;*/
		/*height: 30px;*/
		/*width: 30%;*/
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

		padding: 47px 0px ;
	}

	.retour button{
		font-size: 16px !important;
		border: none;
		background-color: white;
		text-decoration-line: none;
		color: #888320 !important;
		padding-left: 0px;

	}
	.woocommerce .quantity .qty{

		width: 70px !important;
		padding-top: 20px;
		padding-bottom: 20px;
		font-size: 16px;
	}
	.quantity{

		padding-top: 0px !important;
	}


	.div-image-single{

		background-color: #FAFAFA;
		padding: 30px 50px;
		height: 50vh;
		display: flex;
	}

	.contenu-single{

		display: flex;
		flex-direction: row;
	}

	.button-contener form{

		display: flex;
		flex-direction: column;
	}

	.button-contener input{

		margin-right: 15px;
	}

	.parent-taxonomie-info-single{

		display: flex;
		justify-content: space-between;
		flex-direction: row;
		
	}

	.single-text div:first-child{

		padding-top: 0px;
	}

	.cafes{

		padding-top: 15px;
	}

	@media screen and (min-width: 1100px){

		.parent-taxonomie-info-single{
			/*width: 50%;*/
			max-width: 250px;
		}
	}



	@media screen and (max-width: 1100px) and (min-width: 600px ) {


		.single-text > *{
			padding-top: 30px;
		}

		.parent-taxonomie-info-single{
			max-width: 150px;
			max-width: 200px;
		}

		.content-single{

			display: flex;
			flex-direction: column;
			margin-top: 150px;
			margin-bottom: 150px;
		}

		.single-text{

			padding-top: 5vh;
			padding-left: 0px;

		}

		.image-single {
			min-width: auto !important;
			width: 80vw !important;
			margin-top: auto;
			margin-bottom: auto;
		}

		.button-contener p{

			width: 50%;
		}

		.contenu-single {
			display: flex;
			flex-direction: column;
		}

	}

	@media screen and (max-width: 600px){


		.single-text > *{

			padding-top: 30px;

		}

		.contenu-single{

			flex-direction: column;

		}

		.div-image-single{

			padding: 0px;

		}

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

		.woocommerce .quantity .qty{

			width: 70px;
		}


	}

	.woocommerce #respond input#submit, .woocommerce a.button, .woocommerce button.button, .woocommerce input.button{

		border-radius: 0 !important;
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