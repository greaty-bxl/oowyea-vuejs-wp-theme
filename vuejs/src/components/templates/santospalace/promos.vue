<template>
	<div class="section-wrap section-promos" >

			<h2>Promo</h2>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
			quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
			consequat.</p>
			<button class="button-santos-vert button-section-promos">EN SAVOIR PLUS</button>
	
	</div>
</template>

<script>
	
	export default {


	mounted()
	{


	}

	}
</script>

<style type="text/css">

	.section-promos{
		padding: 70px 0px;
		background-color: #FAFAFA;
		display: flex;
		justify-content: center;
		flex-direction: column;
		background-color: #888320;
		color: white;
		font-family: open sans;
		min-height: auto !important;
	}

	.section-promos h2 {
	
		font-size: 2.6vw !important;
		margin: 0px !important;
		padding-bottom: 20px;
		font-weight: 700;
		line-height: 2vw;

	}
	.section-promos p {

		font-size: 1.2vw !important;
		margin: 0px auto;
		font-weight: 300;
		width: 50%

	}

	.button-section-promos{

		width: 13%;
		margin: 40px auto 0px auto;
		font-size: 17px;
		background-color: white !important;
		color: #422112 !important;

	}

	.button-section-promos:hover{

		background-color: #888320 !important;
		color: white !important;
		border-color: white;
	}

	@media screen and ( max-width: 1100px ) and ( min-width: 600px) {

		.section-promos h2{

			padding-bottom: 30px;
			font-size: 6vw !important;
			line-height:  5vw !important;

		}

		.section-promos p {
			font-size: 3.3vw !important;
			width: 80%;
			margin: 0px auto;
			line-height: 5vw;
		}

		.button-section-promos{
			margin: 40px auto 0px auto;
			width: 23%;
	
		}


	}

	@media screen and ( max-width: 600px ){

		.section-promos h2{

			font-size: 10vw !important;
			padding-bottom: 30px;
			width: 60%;
			margin: 0px auto !important;
			line-height: 9vw !important;
		}

		.section-promos p {

				font-size: 5vw !important;
				width: calc( 100% - 60px) ;
				margin: 0px auto;
				padding-left: 30px;
				padding-right: 30px;
				line-height: 9vw;  
		}

		.button-section-promos{
			margin: 40px auto 0px auto;
			width: 60%;
		
		}




		
	}
	
	
</style>


