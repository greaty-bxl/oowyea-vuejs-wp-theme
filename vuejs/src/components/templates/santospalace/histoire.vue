<template>

	<div class="section-wrap">

	<div class="image-histoire">
		<h3 v-html="pll__('Histoire')"></h3>
		<h1>Santos Palace</h1>
	</div>

	<div class="histoire-globale" >
		
		<div class="histoire-row-first">
			<div class="parent-relative">
				
				<img src="https://demo-santospalace.greaty.be/bruxelles/wp-content/uploads/sites/2/2021/01/santos-palace_histoire_02.png">

			</div>
			
			<div class="text-historique">

				<p v-html="pll__('paragraphe 1 histoire')" >En 1911 Monsieur Raymaekers et Gallendyn constituent la société en nom collectif Compagnie Brésilienne. La firme s’installe alors dans les spacieux locaux du 32-34 Rue de Manchester qu’elle occupe encore actuellement. Spécialisé dans la torréfaction de cafés fins, l’activité de l’entreprise cessa presque totalement durant la guerre de 1914-1918 par manque de matière première</p>

			</div>
			
		</div>

		<div class="histoire-row-reverse">
			<div class="parent-relative">
				
				<img src="https://demo-santospalace.greaty.be/bruxelles/wp-content/uploads/sites/2/2021/01/santos-palace_histoire_03.png">

			</div>
			
			<div class="text-historique">

				<p v-html="pll__('paragraphe 2 histoire')" >Dès 1919 l’activité repris normalement et en 1925 Monsieur Raymaekers en compagnie de ses fils formèrent la société anonyme, forme juridique sous laquelle elle poursuit encore ses activités de nos jours.</p>

			</div>
			
		</div>

		<div class="histoire-row">
			<div class="parent-relative">
				
				<img src="https://demo-santospalace.greaty.be/bruxelles/wp-content/uploads/sites/2/2021/01/santos-palace_histoire_04.png">

			</div>
			
			<div class="text-historique">

				<p v-html="pll__('paragraphe 3 histoire')" >Durant les quarante premières années la marque FEVDOR commercialisée par la Cie Brésilienne se spécialisa dans la vente par correspondance, mais les mœurs évoluant, ce système de distribution fut abandonné après la première guerre mondiale, pour être remplacé par la vente aux restaurants, cafés, collectivités et autres institutions (Horeca).</p>

			</div>
			
		</div>

		<div class="histoire-row-reverse">
			<div class="parent-relative">
				
				<img src="https://demo-santospalace.greaty.be/bruxelles/wp-content/uploads/sites/2/2021/01/santos-palace_histoire_05.png">

			</div>
			
			<div class="text-historique">

				<p v-html="pll__('paragraphe 4 histoire')" >C’est en 1971 que monsieur Noël Blondeel, mon père, racheta la Cie brésilienne et s’installa dans les locaux de la rue de Manchester. Deux départements constituent alors l’activité de la Cie Brésilienne; SANTOS PALACE pour ce qui est de la torréfaction, la vente et la distribution du café et CLARY qui est spécialisé dans la vente et l’entretien des machines à café (percolateur, achine espresso etc.), lave vaisselle et pièces de rechange.</p>
			</div>
			
		</div>


		<div class="histoire-row">
			<div class="parent-relative">

				<img src="https://demo-santospalace.greaty.be/bruxelles/wp-content/uploads/sites/2/2021/01/santos-palace_histoire_06-1.png">
			</div>
			
			<div class="text-historique">

				<p v-html="pll__('paragraphe 5 histoire')" >De nos jours nous vendons toujours ces articles ainsi que les accompagnements du café : lait, sucre, biscuits, chocolats, thés divers ainsi que le savon destiné aux lave-vaisselle. La Cie Brésilienne possède également un magasin de vente au détail dans le centre ville Rue Marché aux Poulets, 3.</p>

			</div>
			
		</div>


		<div class="histoire-row-reverse">
			<div class="parent-relative">
				
				<img src="https://demo-santospalace.greaty.be/bruxelles/wp-content/uploads/sites/2/2021/01/santos-palace_histoire_07.png">

			</div>
			
			<div class="text-historique padding-bottom-0">

				<p v-html="pll__('paragraphe 6 histoire')" >Pour l’élaboration du café nous possédons un torréfacteur d’une capacité de 120kg, deux moulins industriels, un système de stockage en silo avec transport par soufflement d’air pour l’alimentation ainsi qu’une peseuse ensacheuse verticale pneumatique.</p>

			</div>
			
		</div>

	</div>



	</div>

</template>

<script>

	export default {

		mounted(){


		}
	}
	
</script>

<style>
	
	.histoire-globale{

		margin-top: 10vw;
		margin-bottom: 10vw;
	}

	.histoire-row-first {

		margin-left: 15%;
		margin-right: 15%;
		display: flex;
		flex-direction: row;
		text-align: left !important;

	}

	.histoire-row {

		margin-left: 15%;
		margin-right: 15%;
		display: flex;
		flex-direction: row;
		text-align: left !important;
		margin-top: -5vw;

	}

	.histoire-row-reverse{

		margin-left: 15%;
		margin-right: 15%;
		display: flex;
		flex-direction: row-reverse;
		text-align: right !important;
		margin-top: -5vw;
	}

	.text-historique{

		display: flex;
		width: 50%;
		line-height: 24px;

	}

	.histoire-row-reverse p{

		margin-top: auto;
		margin-bottom: auto;
		width: 90%;
		font-size: 16px;
		text-align: left;

	}

	.image-histoire h1{
		
		font-weight: bold;
	}


	.histoire-row-reverse img{

		background-color: white;
		box-shadow: 1px 1px 12px #555555d9;
		width: 60%;
		text-align: right !important;
	
	}

	.histoire-row-first p{

		width: 90%;
		font-size: 16px;
		text-align: left;
		margin-top: auto;
		margin-bottom: auto;
		margin-left: auto;
		
	}

	.histoire-row p{

		width: 90%;
		font-size: 16px;
		text-align: left;
		margin-top: auto;
		margin-bottom: auto;
		margin-left: auto;
		

	}

	.parent-relative img{

		background-color: white;
		box-shadow: 1px 1px 12px #555555d9;
		width: 90%;
		left: 30%;

	}

	.parent-relative{

		width: 50%;
	}

	.image-histoire{
		color: white;
		background-image: url('https://demo-santospalace.greaty.be/bruxelles/wp-content/uploads/sites/2/2021/01/santos-palace_histoire_01.png');
		background-position: center;
		background-size: cover; 
		margin-top: 100px;
		background-color: #FAFAFA;
		padding-bottom: 50px;
		display: flex;
		justify-content: center;
		flex-direction: column;
	}

	.image-histoire{
		padding-top: 143px;
		padding-bottom: 143px;
	}



	@media screen and (min-width: 1100px){

		.image-histoire h1 {

			font-size: 4vw !important ;
			margin: 0px !important;
		}

		.image-histoire h3 {

			font-size: 2vw !important ;
			margin: 0px !important;
			padding-bottom: 25px;
		}
	}

	@media screen and (max-width: 1000px){

		.image-histoire h1 {

			font-size: 7vw !important ;
			margin: 0px !important;
		}

		.histoire-row-first{

			flex-direction: column;
			margin-left: auto; 
			margin-right: auto;

		}

		.histoire-row-reverse{

			flex-direction: column;
			margin-top: 0px;
			margin-left: auto; 
			margin-right: auto;

		}

		.histoire-row{

			flex-direction: column;
			margin-top: 0px;
			margin-left: auto; 
			margin-right: auto;

		}

		.histoire-row-first{

			margin-left: auto; 
			margin-right: auto;
		}

		.parent-relative img{

			width: 100%;
		}

		.histoire-globale{

			width: calc(100% - 140px);
			margin-left: auto;
			margin-right: auto;
		}

		.parent-relative{

			width: 100%;
		}

		.histoire-row-first p{

			width: 100%;
			margin-left: 0px;
			
		}

		.histoire-row p{

			margin-left: 0px;

		}


		.histoire-row-reverse p{

			margin-left: 0px;

		}

		.padding-bottom-0{

			margin-bottom: 0px !important;
		}


	}

	@media only screen and (max-width: 1370px) and (min-width: 1025px){


		.image-histoire h1 {

			font-size: 4vw !important ;
			margin: 0px !important;
		}

		.image-histoire h3 {

			font-size: 2vw !important ;
			margin: 0px !important;
			padding-bottom: 20px;
		}

		.image-histoire{

			margin-top: 100px;

		}

		.histoire-globale{

			margin-top: 100px;
			margin-bottom: 100px;
		}

		.text-historique{

			margin-top: 30px;
			margin-bottom: 50px;
			/*width: auto;*/
		}

		.histoire-row-reverse{

			margin-top: -1vw
		}

		.histoire-row {

			margin-top: -1vw;

		}

	}

	@media only screen and (max-width: 1025px ) and (min-width: 600px){


		.image-histoire h1 {

			font-size: 7vw !important ;
			padding:  0px 30px  !important;
			margin: 0px  !important;
		}

		.image-histoire h3 {

			font-size: 4vw !important ;
			padding-left: 30px  !important;
			padding-right: 30px  !important;
			margin: 0px !important;
			padding-bottom: 20px;
		}

		.histoire-globale {

			width: calc(100% - 140px);
			margin-top: 70px;
			margin-bottom: 70px;

		}

		.text-historique{
			width: 100%;
			margin-top: 30px;
			margin-bottom: 50px;
		}

		.image-histoire{

			margin-top: 73px;
			
		}


	}


	@media only screen and (max-width: 600px){

		.image-histoire h1 {

			font-size: 15vw !important ;
			padding:  0px 30px  !important;
			margin: 0px  !important;
		}

		.image-histoire h3 {

			font-size: 6vw !important ;
			padding-left: 30px  !important;
			padding-right: 30px  !important;
			margin: 0px !important;
			padding-bottom: 20px;
		}

		.histoire-globale {

			width: calc(100% - 60px);
			margin-top: 70px;
			margin-bottom: 70px;

		}

			.text-historique{
				width: 100%;
				margin-top: 30px;
				margin-bottom: 50px;
			}

		.image-histoire{

			margin-top: 73px;
			
		}



	}




</style>

<style scoped >
	
/*	p:last-child{

			margin-bottom: 0px; 
		}*/
	
</style>