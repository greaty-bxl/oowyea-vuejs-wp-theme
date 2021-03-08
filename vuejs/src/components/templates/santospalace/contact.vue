<template>
	<div class="section-wrap contact-santos" >

		<div class="image-contact">
			<h3 v-html="pll__('Contact')"></h3>
			<h1 v-html="pll__('Nous contacter')" ></h1>
		</div>

		<div class="container-info-contact">

			<div v-html="post.post_content"></div>

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

<style type="text/css">

	.image-contact{
		color: white;
		background-image: url('https://demo-santospalace.greaty.be/bruxelles/wp-content/uploads/sites/2/2021/01/santos-palace_contact.png');
		background-position: center;
		background-size: cover; 
		margin-top: 100px;
		background-color: #FAFAFA;
		padding-bottom: 50px;
		display: flex;
		justify-content: center;
		flex-direction: column;
	}

	.image-contact{
		padding-top: 143px;
		padding-bottom: 143px;
	}

	.container-info-contact ul{

		list-style: none;
		padding-left: 7vw;
		padding-bottom: 0px;
		margin-bottom: 30px;
	}

	.container-info-contact{
		margin-left: auto;
		margin-right: auto;
		margin-top: 50px;
		margin-top: 75px;
		margin-bottom: 100px;
		width: 50%;
		text-align: left;
		font-size: 16px;
	}


	.container-info-contact *{

		font-size: 16px;
	}

	.container-info-contact h5{
		margin-top: 0px;
		margin-bottom: 30px;
		color: #878220;
		font-size: 16px;
		line-height: 24px;
		font-weight: 500;
	}

	.container-info-contact h4{
		margin-top: 30px;
		margin-bottom: 0px;
		color: #878220;
		font-size: 16px;
		line-height: 24px;
		font-weight: bold;
	}
	.container-info-contact h1 {

		font-weight: bold;
	}

	.container-info-contact ul *{

		color: #666666;
		font-size: 16px;
		line-height: 24px;
	}
	.container-info-contact ul{

		padding-left: 70px;
	}

	.container-info-contact p:first-child{

			color: #878220;
			font-weight: 500;
			line-height: 24px;

	}

	.image-contact h1 {

		font-size: 6vw !important ;
		padding:  0px 30px  !important;
		margin: 0px  !important;
	}

	.image-contact h3 {

		font-size: 2vw !important

	}


	@media screen and (min-width: 1100px){

		.container-info-contact h1 {

			font-size: 7vw !important ;
			margin: 0px !important;
		}

		.container-info-contact h3 {

			font-size: 2vw !important ;
			margin: 0px !important;
			padding-bottom: 25px;
		}


		.image-contact h3 {

			margin-top: 0px !important;

		}







	}

	@media screen and (max-width: 1000px){

		.container-info-contact h1 {

			font-size: 7vw !important ;
			margin: 0px !important;
		}

	}


	@media screen and ( max-width: 1150px ) and ( min-width: 600px ) {

		.container-info-contact h1 {

			font-size: 10vw !important ;
			margin: 0px !important;
		}

		.image-contact{

			margin-top: 100px;
		}

		.image-contact h3 {

			font-size: 4vw !important ;
			margin: 0px !important;
			padding-bottom: 20px;
		}

		.container-info-contact{
		
			width: calc( 100% - 140px)		
		}

		.image-contact h1 {

			font-size: 10vw !important ;
			padding:  0px 30px  !important;
			margin: 0px  !important;
		}


	}

	@media screen and ( max-width: 600px ){

		.container-info-contact{
		
			width: calc( 100% - 60px)		
		}

		.image-contact h1 {

			font-size: 10vw !important ;
			padding:  0px 30px  !important;
			margin: 0px  !important;
		}

		.image-contact h3 {

			font-size: 6vw !important ;
			padding-left: 30px  !important;
			padding-right: 30px  !important;
			margin: 0px !important;
			padding-bottom: 20px;
		}

		.container-info-contact ul{

			padding-left: 15px;
		}

		.image-contact{

			margin-top: 73px;
		}
	
	}
	
	
</style>


