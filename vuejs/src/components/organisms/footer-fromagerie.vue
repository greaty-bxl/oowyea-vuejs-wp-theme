<template>
	<div id="footer" class="section">
		<div class="clear"></div>


			<div class="contener-header">
				<div>
					<p>Fromagerie Westland <br> Bd. Sylvain Dupuis 373<br> 1070 Bruxelles</p> 
				</div>
				<div> 
					<p>Lun Sam : 9h - 19h <br> Vendredi : 9h - 20h</p>
				</div>
				<div> 
					<a href="https://www.facebook.com/fromageriewestland">Facebook</a>
					<a href="https://www.instagram.com/fromageriewestland/?hl=fr">Instagram</a>
				</div>
				<div>
					<a target="_blank" href="http://greaty.digital.brussels/livraison/">Retrait en magasin</a>
					<a target="_blank" href="http://greaty.digital.brussels/politique-de-confidentialite-2/">Politique de confidentialité</a>
					<a target="_blank" href="http://greaty.digital.brussels/conditions-generales-de-vente/">Conditions générales de vente</a>
					<p>Fromagerie Westland © 2020</p>

				</div>
			</div>

	
		<div class="clear"></div>
	</div>
</template>

<script>

	import smart_fonts from "Libs/smart-fonts.js"
	// import Alpl from 'Molecules/animation-line-per-line';
	// import anime from 'animejs/lib/anime.es.js';
	export default {

		components:{
		
		},
		

		mounted(){



			this.$emit('template_mounted', this);

		
			smart_fonts({
				'.text-contact' : 52.8,
			})

		}
	}


</script>

<style>


	.contener-header a{

		text-decoration-line: none;

	}
	.contener-header *{

		color: #70625B;
		text-align: left;
		font-weight: 500;
	
	}

	.contener-header{

		display: flex;
		flex-direction: row;
		justify-content: space-between;
		padding-bottom: 50px;
		padding-top: 50px;
	}

	.contener-header div{

		display: flex;
		flex-direction: column;
		margin-top: 20px;

	}

	#footer{

		padding-left: 70px;
		padding-right: 70px;
		font-size: 14px;
		min-height: auto !important;
	}

	#footer *{

		font-size: 14px !important;
		line-height: 25px;
	}

	div p {

		margin: 0px;
	}

	@media screen and ( max-width: 600px){

		#footer{

			padding-left: 30px;
			padding-right: 30px;
			padding-bottom: 30px;
		}

		.contener-header{

			display: flex;
			flex-direction: column;
			justify-content: space-between;
			
		}

		
	}

	@media screen and ( max-width: 1100px) and ( min-width: 600px){

		.contener-header{

			flex-direction: column;
			padding-bottom: 70px;
		}

	}

</style>

<style scoped>
	
/*	.section-footer{

		min-height: auto;
		opacity: 1;
	}*/


</style>
