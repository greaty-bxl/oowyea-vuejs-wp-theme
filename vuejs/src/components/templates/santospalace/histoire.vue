<template>

	<div class="section-wrap histoire-globale">

	<div class="image-histoire">
		<h3>Histoire</h3>
		<h1>Santos Palace</h1>
	</div>	

	<div class="histoire-row">
		<div class="parent-relative">
			
			<img src="http://santospalace.test/bruxelles/wp-content/uploads/sites/2/2021/01/santos-palace_histoire_04.png">

		</div>
		
		<div class="text-historique">

			<p>En 1911 Monsieur Raymaekers et Gallendyn constituent la société en nom collectif Compagnie Brésilienne. La firme s’installe alors dans les spacieux locaux du 32-34 Rue de Manchester qu’elle occupe encore actuellement. Spécialisé dans la torréfaction de cafés fins, l’activité de l’entreprise cessa presque totalement durant la guerre de 1914-1918 par manque de matière première</p>

		</div>
		
	</div>

	<div class="histoire-row-reverse">
		<div class="parent-relative">
			
			<img src="http://santospalace.test/bruxelles/wp-content/uploads/sites/2/2021/01/santos-palace_histoire_04.png">

		</div>
		
		<div class="text-historique">

			<p>En 1911 Monsieur Raymaekers et Gallendyn constituent la société en nom collectif Compagnie Brésilienne. La firme s’installe alors dans les spacieux locaux du 32-34 Rue de Manchester qu’elle occupe encore actuellement. Spécialisé dans la torréfaction de cafés fins, l’activité de l’entreprise cessa presque totalement durant la guerre de 1914-1918 par manque de matière première</p>

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
	

	.histoire-row{

		margin-left: 15%;
		margin-right: 15%;
		margin-top: 164px;
		height: 50vh;
		display: flex;
		flex-direction: row;
	    text-align: left !important;

	}
	.histoire-row-reverse{

		margin-left: 15%;
		margin-right: 15%;
		display: flex;
		flex-direction: row-reverse;
		height: 50vh;
    	text-align: right !important;
	}

	.text-historique{

		display: flex;
		width: 50%;

	}

	.histoire-row-reverse p{

		margin-top: auto;
		margin-bottom: auto;
		width: 80%;
		font-size: 16px;
		text-align: left;
		/*margin-left: 15%;*/
		/*height: 35vw;*/

	}

	

	.histoire-row-reverse img{

		background-color: white;
		box-shadow: 1px 1px 12px #555555d9;
		width: 60%;
		text-align: right !important;
		margin-top: -50px;
				/*left: 30%;*/
		/*top: -5vw;*/

	}

	.histoire-row p{

		width: 80%;
		font-size: 16px;
		text-align: left;
		margin-top: auto;
		margin-bottom: auto;
		/*margin-left: auto;*/
		margin-left: auto;
		

	}

	.parent-relative img{

		background-color: white;
		box-shadow: 1px 1px 12px #555555d9;
		width: 80%;
		left: 30%;

	}
	.parent-relative-reverse img{

		background-color: white;
		box-shadow: 1px 1px 12px #555555d9;
		width: 70%;
		left: 30%;
	}

	.parent-relative-reverse{

		width: 50vw;
	}


	.parent-relative{

		width: 50%;
	}

	.image-histoire{
		color: white;
		background-image: url('http://santospalace.test/bruxelles/wp-content/uploads/sites/2/2021/01/santos-palace_histoire_06.png');
		background-position: center;
		background-size: cover; 
		margin-top: 114px;
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

			font-size: 7vw !important ;
			margin: 0px !important;
		}

		.image-histoire h3 {

			font-size: 2vw !important ;
			margin: 0px !important;
			padding-bottom: 25px;
		}
	}

	@media screen and (max-width: 1100px){

		.image-histoire h1 {

			font-size: 7vw !important ;
			margin: 0px !important;
		}


	}

	@media only screen and (max-width: 1100px) and (min-width: 600px){


		.image-histoire h1 {

			font-size: 10vw !important ;
			margin: 0px !important;
		}

		.image-histoire h3 {

			font-size: 4vw !important ;
			margin: 0px !important;
			padding-bottom: 20px;
		}

	}


	@media only screen and (max-width: 600px){


		.image-histoire h1 {

			font-size: 15vw !important ;
			margin: 0px !important;
		}

		.image-histoire h3 {

			font-size: 6vw !important ;
			margin: 0px !important;
			padding-bottom: 20px;
		}

	}




	


	



</style>