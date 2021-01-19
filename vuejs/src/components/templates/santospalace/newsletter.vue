<template>
	<div class="section-wrap section-promos" >

		<div class="message-newsletter" v-html="post.post_content"></div>
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
	
	
	.newsletter{

		color: black;
	}

	.message-newsletter{

		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 25px;
		margin: 0px 25%;
		line-height: 35px; 
	}



	@media screen and ( max-width: 1100px ) and ( min-width: 600px) {

		
		.message-newsletter{

			font-size: 25px;
			line-height: 35px; 
			margin: 0px 70px; 
		}

	}

	@media screen and ( max-width: 600px ){

		.message-newsletter{

			font-size: 17px;
			line-height: 27px; 
			margin: 0px 30px; 
		}
	}
	
	
</style>


