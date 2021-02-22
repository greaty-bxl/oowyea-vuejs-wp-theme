<template>

	<div class="section-wrap">

		<div class="degustation-section-home">
			<div class="image-degustation"></div>
			<div class="text-degustation">
			
				<div class="colonne-degustation-section" v-html="post.post_content">
				</div>

				<a class="button-santos-vert" :href="pll__('URL J’ESSAIE')"
			v-html="pll__('J’ESSAIE')" >J’ESSAIE</a>

			</div>
		</div>

	</div>

</template>

<script>
	
	export default {

		props: {
			'post' : Object
		},

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
		box-sizing: border-box;
	}


	.button-santos-vert{
		font-size: 17px;
		text-decoration: none;
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
		}

		.text-degustation{

			width: 100%;	
			padding: 100px 70px;
			display: flex;
			
		}

	}

		@media screen and (max-width: 600px) {

			.button-santos-vert{

				width: 60%;
			}

			.text-degustation{

				padding-left: 0px;
				box-sizing: border-box;
				padding: 70px 30px;
				display: flex;
			}

			.image-degustation{
				
				margin-left: auto;
				margin-right: auto;
				width: calc(100% - 60px)
			}

		}

</style>

<style type="text/css">

	
	@media only screen and (max-width: 1400px) and (min-width: 1100px){

		.text-degustation h2{

			color: #422112;
			text-align: left;
			font-size: 30px;
			width: 80%;
			line-height: 120%;
			margin: 0px;
		}


	}


	
	@media screen and (max-width: 1300px) and (min-width: 1100px){


		.text-degustation h2{

			width: 80%;
		
		}


		.text-degustation ul{
		
			width: 80%;
			
		}

	}


	.text-degustation ul{
		font-size: 50px;
		padding-left: 0px;
		text-align: left;
		margin:  50px 0px;
		width: 80%;
		
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
		font-size: 40px;
		width: 75%;
		line-height: 120%;
		margin: 0px;
		font-weight: 400;
	}



	@media screen and (max-width: 1100px) {
		

		.text-degustation h2{

			margin: 0px;
		}

	}

	@media screen and (max-width: 600px) {


		.text-degustation ul{

			font-size: 5vw !important;
			padding-left: 0px;
			width: 100%;

		}

		.text-degustation h2{

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

	

	}

</style>