<template>
	
	<div>
		<div class="header-home">
			
			<h1>Torréfacteur bruxellois</h1>
			<p>Dernière torréfaction industrielle bruxelloise active sur Bruxelles depuis 1911 !</p>
			<button class="button-santos-vert button-cafe">NOS CAFÉS</button>

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
		background-image: url('http://santospalace.test/bruxelles/wp-content/uploads/sites/2/2021/01/santos-palace_degustation-01.png');
		background-repeat: no-repeat;
		background-size: cover;
		color: white;
		font-family: open sans;
	}

	.header-home{

		padding-top: 300px;
		padding-bottom: 300px;
	}

	.header-home h1 {

		font-size: 7vw !important;
		margin: 0px !important;
		padding-bottom: 30px;
		/*line-height: 7vw;*/
	}
	.header-home p {

		font-size: 1vw !important;
		margin: 0px !important
	
	}

	.button-cafe{

		width: 15%;
		margin: 30px auto 0px auto;
	}
	
</style>


