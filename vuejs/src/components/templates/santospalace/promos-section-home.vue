<template>
	<div class="section-wrap section-promos" >

			<h2  v-html="post.post_title"></h2>
			<div  v-html="post.post_content" ></div>
			<a :href="pll__('URL EN SAVOIR PLUS')"  class="button-santos-vert button-section-promos"
			v-html="pll__('EN SAVOIR PLUS')" ></a>
	
	</div>
</template>

<script>
	
	export default {

		props: {
			'post' : Object
		},

		mounted()
		{
			// console.log(post);
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
		min-height: auto !important;
	}

	.section-promos h2 {
	
		font-size: 40px !important;
		margin: 0px !important;
		padding-bottom: 20px;
		font-weight: 700;
		line-height: 2vw;

	}
	.section-promos p {

		font-size: 20px !important;
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
		text-decoration: none;
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
				line-height: 130%;  
		}

		.button-section-promos{
			margin: 40px auto 0px auto;
			width: 60%;
		
		}




		
	}
	
	
</style>


