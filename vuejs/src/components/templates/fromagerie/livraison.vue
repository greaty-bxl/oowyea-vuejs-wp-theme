<template>

	<div>
	<h5 class="title-conditions">Retrait en magasin</h5>

	<div class="livraison-parent-text">
		<div v-html="post.post_content"> 
	</div>

	</div>	
	</div>

</template>

<script>

import smart_fonts from 'Libs/smart-fonts.js';

export default {
	components: {

	},
	props: {
		'post' : Object
	},

	mounted(){
	
		this.$emit('template_mounted', this);
		console.log(this.wp);
		smart_fonts({
			'.title-conditions' : 25,
		})		

	},

}

</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;1,100;1,200;1,300;1,400&display=swap');


	#livraison {

	background-color: white;
	}
	#livraison h2 {

		margin-bottom: 20px;
		width: 60%;
		margin-right: auto;
		margin-left: auto;
		font-weight: 400;
		font-size: 18.0475px;

	}

	#livraison h3{

		margin-bottom: 20px;
		margin-top: 40px;
		width: 60%;
		margin-right: auto;
		margin-left: auto;
		font-weight: 400;
		font-size: 18.0475px;

	}

	.livraison-parent-text{

	margin: 30px 70px;
	color: #666666;
	text-align: left;
	padding-bottom: 100px;

	}
	.livraison-parent-text li {

	margin-bottom: 30px;
	font-size: 18px;
	width: 60%;
	margin-left: auto;
	margin-right: auto;
	line-height: 30px;

	}

	.livraison-parent-text a {

	margin-bottom: 30px;
	font-size: 18px;
	width: 60%;
	margin-left: auto;
	margin-right: auto;
	line-height: 30px;

	}

	.livraison-parent-text p {

	margin-bottom: 15px;
	font-size: 18px;
	width: 60%;
	margin-left: auto;
	margin-right: auto;
	line-height: 30px;

	}

	.title-conditions{

	color: #666666 !important;

	}



	@media screen and (max-width: 600px){

		.title-conditions{

			font-size: 22px !important;
			margin-left: 30px !important;
		}

		.livraison-parent-text{
			margin: 30px 30px; 
			font-size: 18px;
		}

		.livraison-parent-text li {

			margin-bottom: 20px;
			font-size: 18px;
			width: 100%;

		}
		#livraison ol{

			margin-top: 0px;
			padding-left: 0px;
			margin-left: 20px;

		}

		.livraison-parent-text p{

			width: 100%;

		}
		#livraison h2 {

			width: 100%;

		}

		#livraison h3{


			width: 100%;

		}


	}
	@media screen and (max-width: 1100px) and (min-width: 600px){


		.title-conditions{

			margin-left: 70px !important;
			text-align: left !important;

		}

		.livraison-parent-text li {

			margin-bottom: 20px;
			font-size: 18px;
			width: 80%;
		}

		.livraison-parent-text{

			margin: 30px 70px; 
		}


	}

	.title-conditions{

		text-align: left;
		margin-left: 140px;
		margin-bottom: 5vh;
		/*margin-top: 0px !important;*/
		margin-top: 100px;
		padding-top: 5vh;
		color: white;
		font-weight: 400;


	}


	@media screen and (max-width: 4000px) and (min-width: 1700px){

		.title-conditions{

			margin-bottom: 7vh;
			padding-top: 7vh;

		}

	}


</style>

<style scoped >



</style>





