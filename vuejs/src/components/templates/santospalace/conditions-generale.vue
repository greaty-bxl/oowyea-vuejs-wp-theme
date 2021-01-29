<template>

	<div>
	

	<div class="parent-text">
		<h1 class="title-conditions">Politique de Confidentialité

		</h1>
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


	#conditions-generales-de-vente {

	background-color: white;
	}

	.parent-text{

		text-align: left;
		width: 70%;
		margin: 150px auto;

	}
	.parent-text h2{

		color: #888320 !important;
		font-size: 30px;
		

	}

	.parent-text h1{

		color: #888320 !important;
		font-size: 40px !important;

	}

	.parent-text h3{

		color: #888320 !important;

	}

	.parent-text p{

		font-size: 17px;
		line-height: 170%;

	}


	@media screen and (max-width: 600px){

		.parent-text{

			text-align: left;
			width: calc(100% - 60px);
			margin: 150px 30px;

		}
	
	}


	@media screen and (max-width: 1125px) and (min-width: 600px){


			.parent-text{

			text-align: left;
			width: calc(100% - 140px);
			margin: 150px 70px;

		}

	}

	

	@media screen and (max-width: 4000px) and (min-width: 1700px){

	

	}


</style>






