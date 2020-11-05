
<template>
    <div class="section-wrap">
		<div class="clear"></div>

		<div class="globale-contact">
		
			<div class="section-a-propos-contact">

				<h5 class="title-section-contact"> Contact</h5>

				<div class="contener-contact">
											
						<div class="contener-contact-child" >

							<div>
								<p class="sous-titre-contact">Magasin</p> 
								<p class="text-sous-titre-contact">Bd. Sylvain Dupuis 373<br>1070 Bruxelles<br>Belgique</p>
							</div>

							<div>
								<p class="sous-titre-contact">Horaires</p> 
								<p class="text-sous-titre-contact">Lun-Sam:9h-19h<br/>Vendredi:9h-20h</p>
							</div>
					
						</div>

			


						
						<div class="contener-contact-child" >
							
							<p class="sous-titre-contact ">Commandes et <br> demandes spéciales</p> 

							<div>
								<form action="" method="get" class="form-example" >
									
									<input class="input-contact"  placeholder="Prénom"  type="" name="">
									<input class="input-contact" placeholder="E-mail" type="" name="">
									<input class="input-contact" placeholder="Téléphone" type="" name="">
									<input class="input-contact" placeholder="Nombre de personnes" type="" name="">
									<textarea class="input-contact" placeholder="Message" type="" name=""></textarea>
									<button class="button-envoyer">Envoyer</button>
								</form>
								
							</div>

						</div>

						<div class="contener-contact-child" >

							<div>
								<p class="sous-titre-contact">Aide</p>
								<a class="text-sous-titre-contact" target="_blank" href="http://greaty.digital.brussels/livraison/">Retrait en magasin</a>
								<a class="text-sous-titre-contact" target="_blank" href="http://greaty.digital.brussels/conditions-generales-de-ventehttp://greaty.digital.brussels/livraison/">Conditions générales de vente</a>
								<a class="text-sous-titre-contact" target="_blank" href="http://greaty.digital.brussels/politique-de-confidentialite-2/">Politique de confidentialité</a>	
							</div>

							<div>
								<p class="sous-titre-contact">Suivez-nous</p> 
								<a class="text-sous-titre-contact" target="_blank"  href="https://www.facebook.com/fromageriewestland">Facebook</a>
								<a class="text-sous-titre-contact" target="_blank" href="https://www.instagram.com/fromageriewestland/?hl=fr">Instagram</a>
							</div>
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

	props: {
		'post' : Object
	},



	mounted(){

		// console.log(smart_fonts);

		// var $ = this.$

		smart_fonts({
			'.title-section-contact' : 25,
			'.sous-titre-contact' : 27,
			'.text-sous-titre-contact' : 18,
			'.button-envoyer' : 18,
			'.input-contact' : 18,
		})

        // console.log(this.wp.sections[2].acf_fields.a_propos_galerie);
// 
		this.$emit('template_mounted', this);

	},

}



</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;1,100;1,200;1,300;1,400&display=swap');
.contener-contact{
width: 65%;
display: flex;
flex-direction: row;
justify-content: space-between;
text-align: left;
margin-left: auto;
margin-right: auto;
}

.section-a-propos-contact{

min-height: 100vh;
}

#contact{

	background-color: white;
}


.title-section-contact{

text-align: left;
margin-left: 70px;
margin-bottom: 5vh;
margin-top: 100px;
padding-top: 5vh;
color: #70625b;
font-weight: 500;

}

.section-a-propos-contact *{

	font-weight: 400;
}


	.contener-contact form{

		display: flex;
		flex-direction: column;
		width: 20vw;
		/*justify-content: space-between;*/
	}
	.contener-contact textarea{


		max-width: 20vw;
		/*justify-content: space-between;*/
	}

	.contener-contact-child div{

		display: flex;
		flex-direction: column;
		margin-bottom: 30px;


	}

	.sous-titre-contact{

		color: #70625B;
		margin-bottom: 10px;
		font-weight: 500;
	}

	.text-sous-titre-contact{

		color: #666666;
		line-height: 25px;
	}
	.globale-contact{

		height: 100vh
	}


	@media screen and (max-width: 4000px) and (min-width: 1700px){

		.title-section-les-asortiments-de-fromages{

			margin-bottom: 7vh;
			margin-top: 7vh;

		}

		.title-section-contact{

			margin-bottom: 7vh;
			padding-top: 7vh;

		}



	}

	@media screen and (max-width: 1100px) and (min-width: 600px){

		.contener-contact{

			/*width: 100%;*/
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			text-align: left;
			margin-left: 70px;
			margin-right: 70px;
		}

		.globale-contact{

			height: auto;
		}

		.contener-contact form{

			max-width: 80% !important;
			font-size: 18px !important;
			width: 50vw;
			max-width: auto !important;

			/*justify-content: space-between;*/
		}
		.contener-contact textarea{

			font-size: 18px !important;
			/*width: 50vw;*/
			max-width: 100% !important;
			/*justify-content: space-between;*/
		}

		.contener-contact-child div{

			margin-bottom: 40px;

		}

		.section-a-propos-contact{

		min-height: auto;
		}

		.text-sous-titre-contact{

			font-size: 18px !important;
		}



	}

	@media screen and (max-width: 600px){

		.contener-contact{

			/*width: 100%;*/
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			text-align: left;
			width: calc( 100% - 60px);
			padding-left: 30px;
			padding-right: 30px;
		}
		.title-section-contact{

			text-align: left;
			padding-left: 30px;
			margin-bottom: 5vh;
			margin-top: 120px;
			padding-top: 5vh;
			font-size: 22px !important;
			margin-left: 0px;
		}

		.globale-contact{

			height: auto;
		}


		.contener-contact form{

			max-width: 100%;
			width: 100%
			/*justify-content: space-between;*/
		}

		.contener-contact textarea {

			/*width: 100%;*/
			max-width: 100%;

		}

		.section-a-propos-contact{

		min-height: auto;
		}

		.text-sous-titre-contact{

			font-size: 14px !important;
		}


	}

</style>


<style scoped >

@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;1,300;1,400&display=swap');

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
		line-height: 30px;

	}

	@media screen and (max-width: 600px){


		input{

			font-size: 14px !important;

		}

		textarea{

			font-size: 14px !important;
		}
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
		padding-top: 20px;
		padding-bottom: 20px;
		background: #70625b;
		color: white;
		border: solid #70625b!important;
		border-width: 1px;
		font-weight: bold;
		font-size: 16px !important;

	}

	input:focus {
	color: #70625b !important;
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


</style>






