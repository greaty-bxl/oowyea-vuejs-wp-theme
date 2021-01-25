<template>

	<div class="section-wrap">

		<div class="degustation-section-home">
			<div class="image-degustation"></div>
			<div class="text-degustation">
				
				<h2>Nous vous proposons une dégustation gratuite dans vos bureaux :</h2>
				<ul class="explication-degustation">

					<li> Dégustation de nos cafés</li>
					<li> Test sur une machine professionnelle automatique à grains</li>
					<li> Découverte de notre univers et de notre savoir faire</li>
					<li> Présentation de notre fonctionnement</li>
					<li> Aperçu de notre gamme complémentaire (Thés, chocolat, consommables…)</li>

				</ul>

				<button class="button-santos-vert">J’ESSAIE</button>

			</div>
		</div>

	</div>

</template>

<script>
	
	export default {

		mounted()
		{


		}

	}

</script>

<style scoped>

	@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap');
	
	.degustation-section-home{

		min-height: 100vh;
		width: 100%;
		display: flex;
		flex-direction: row;
		font-family: 'Montserrat', sans-serif; 

	}

	.image-degustation{

		width: 50%;
		min-height: 100%;
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
		background-image: url('https://demo-santospalace.greaty.be/bruxelles/wp-content/uploads/sites/2/2021/01/santos-palace_degustation.png');
	}



	.text-degustation{
		padding-left: 120px;
		width: 50%;	
		min-height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		
	}

	.text-degustation li{

		list-style: none;
		color: #666666;
		text-align: left;
		font-size: 16px;
		line-height: 24px;
		display: flex;

	}

	.text-degustation li::before {

		content: "-\00a0";

	}

	.text-degustation h2{

		color: #422112;
		text-align: left;
		font-size: 30px;
		width: 75%;
		line-height: 120%;
		margin: 0px;
	}

	.text-degustation button{

		/*margin-top: 40px;*/
		/*text-align: left;*/
	}

	.button-santos-vert{

		width: 30%;
	}

	.text-degustation ul{
		font-size: 50px;
		padding-left: 0px;
		text-align: left;
		margin:  50px 0px;
		width: 60%;
		
	}


	@media screen and (max-width: 1300px) and (min-width: 1100px){


		.text-degustation h2{

			width: 70%;
		
		}


		.text-degustation ul{
		
			width: 70%;
			
		}

	}

	@media screen and (max-width: 1100px) and (min-width: 600px){

		.degustation-section-home{

			width: calc(100% - 140px);
		}
		
	}

	@media screen and (max-width: 1100px) {
		
		.degustation-section-home{

			width: 100%;
			display: flex;
			flex-direction: column;
			height: auto;

		}

		.image-degustation{
			width: 100%;
			height: 50vh;
			background-repeat: no-repeat;
			background-position: center;
			background-size: cover;
			background-image: url('http://santospalace.test/bruxelles/wp-content/uploads/sites/2/2021/01/santos-palace_degustation.png');
		}

		.text-degustation{

			width: 100%;	
			padding: 150px 70px;
			display: flex;
			
		}

		.text-degustation h2{

			margin: 0px;
		}

	}

		@media screen and (max-width: 600px) {

			.text-degustation{
				padding-left: 0px;
				width: calc( 100% - 60px);	
				padding: 100px 30px;
				display: flex;
			}

			.text-degustation ul{
				font-size: 5vw !important;
				padding-left: 0px;
				/*margin:  50px auto;*/
				width: 100%;
				/*width: calc( 100% - 60px);	*/

			}

			.text-degustation h2{
				/*text-align: center;*/
				width: 100%;	
				font-size: 10vw !important;
				line-height: 12vw;
			}

			.text-degustation button{

				font-size: 17px;
				margin-left: auto;
				margin-right: auto;
				width: 50%;
			}

			.image-degustation{
				margin-left: auto;
				margin-right: auto;
				width: calc(100% - 60px)
			}

		}

</style>