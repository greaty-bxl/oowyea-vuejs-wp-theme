<template>

	<div>
	<h5 class="title-conditions-politique">Politique de confidentialité</h5>

	<div class="parent-text-politique">
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
			'.title-conditions-politique' : 25,
		})

	},

}



</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;1,100;1,200;1,300;1,400&display=swap');


	#conditions-generales-de-vente {

	background-color: white;
	}

	.parent-text-politique{

	margin: 30px 70px;
	color: #666666;
	text-align: left;
	padding-bottom: 100px;

	}
	.parent-text-politique li {

	margin-bottom: 30px;
	font-size: 18px;
	width: 60%;
	margin-left: auto;
	margin-right: auto;
	line-height: 30px;

	}

	.parent-text-politique a {

	margin-bottom: 30px;
	font-size: 18px;
	width: 60%;
	margin-left: auto;
	margin-right: auto;
	line-height: 30px;

	}

	.parent-text-politique p {

	margin-bottom: 30px;
	font-size: 18px;
	width: 60%;
	margin-left: auto;
	margin-right: auto;
	line-height: 30px;

	}

	.title-conditions-politique{

	color: #666666 !important;

	}



	@media screen and (max-width: 600px){

		.title-conditions-politique{

			font-size: 22px !important;
			margin-left: 30px !important;
		}

		.parent-text-politique{
			margin: 30px 30px; 
			font-size: 18px;
		}

		.parent-text-politique li {

			margin-bottom: 20px;
			font-size: 18px;
			width: 100%;

		}
		#conditions-generales-de-vente ol{

			margin-top: 0px;
			padding-left: 0px;
			margin-left: 20px;

		}

		.parent-text-politique p {

		margin-bottom: 30px;
		font-size: 18px;
		width: auto;
		margin-left: auto;
		margin-right: auto;
		line-height: 30px;
		width: 100%;

		}

	}
	@media screen and (max-width: 1100px) and (min-width: 600px){


		.title-conditions-politique{

			margin-left: 70px !important;
			text-align: left !important;

		}

		.parent-text-politique li {

			margin-bottom: 20px;
			font-size: 18px;
			width: 80%;
		}

		.parent-text-politique{

			margin: 30px 70px; 
		}

		.parent-text-politique li {

			width: 80%;
		}

		.parent-text-politique a {

			width: 80%;

		}

		.parent-text-politique p {

			width: 80%;

		}


	}

	.title-conditions-politique{

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

		.title-conditions-politique{

			margin-bottom: 7vh;
			padding-top: 7vh;

		}

	}


</style>

<style scoped >



</style>





