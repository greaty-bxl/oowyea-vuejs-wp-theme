<template>
	<div class="section-wrap" >
		<div>
			<div class="header-home">
				
				<h1>Torréfacteur bruxellois</h1>
				<p>Dernière torréfaction industrielle bruxelloise active sur Bruxelles depuis 1911 !</p>
				<button class="button-santos-vert button-cafe">NOS CAFÉS</button>

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

<style type="text/css">

	.header-home{

		margin-top: 114px;
		background-color: #FAFAFA;
		padding-bottom: 50px;
		display: flex;
		justify-content: center;
		flex-direction: column;
		background-image: url('http://santospalace.test/bruxelles/wp-content/uploads/sites/2/2021/01/santos-palace_torrefaction-01.png');
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
		color: white;
		font-family: open sans;
		height: calc( 100vh - 114px)
	}
/*
	.header-home{

		padding-top: 300px;
		padding-bottom: 300px;
	}*/

	.header-home h1 {

		font-size: 6vw !important;
		margin: 0px !important;
		padding-bottom: 20px;
		font-weight: 700;

	}
	.header-home p {

		font-size: 1.1vw !important;
		margin: 0px;
		font-weight: 500;

	}

	.button-cafe{

		width: 13%;
		margin: 40px auto 0px auto;
		font-size: 17px;
	}

	@media screen and ( max-width: 1100px ) and ( min-width: 600px) {

		.header-home h1{

			padding-bottom: 30px;

		}

		.header-home p {
			font-size: 3.3vw !important;
			width: 80%;
			margin: 0px auto;
			line-height: 5vw;
		}

		.button-cafe{
			margin: 40px auto 0px auto;
			width: 23%;
	
		}

		.header-home{

			height: 100vh;
		}

		
	}

	@media screen and ( max-width: 600px ){

		.header-home h1{

			font-size: 10vw !important;
			padding-bottom: 30px;
			width: 80%;
			margin: 0px auto !important;
			line-height: 10.7vw;
		}

		.header-home p {
			font-size: 5vw !important;
			width: 70%;
			margin: 0px auto;
			line-height: 9vw;  
		}

		.button-cafe{
			margin: 40px auto 0px auto;
			width: 60%;
		
		}

		.header-home{

			height: 100vh;
		}


		
	}
	
	
</style>


