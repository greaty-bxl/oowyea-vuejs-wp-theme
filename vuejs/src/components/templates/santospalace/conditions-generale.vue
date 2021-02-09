<template>

	<div>
	
	<div class="parent-text">
		
		<div v-html="post.post_content"> 
	</div>

	</div>	
	</div>

</template>

<script>

export default {
	components: {

	},
	props: {
		'post' : Object
	},

	mounted(){
	
		this.$emit('template_mounted', this);
		console.log(this.wp);

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






