<template>

	<div class="newsletter-content">
		
		<p style="font-weight: bold;" v-html="pll__('Un mail de confirmation vous a été envoyé')">
		</p>

		<img  src="https://santospalaceshop.be/bruxelles/wp-content/uploads/sites/2/2021/01/logo_marionnette_santos_palace.svg">

	</div>
	

</template>

<script type="text/javascript">
	
	export default {

		mounted(){

			var $ = this.$

			$('.content-newsletter , .contener-footer').css('display', 'none');


		},

		beforeDestroy(){

			var $ = this.$

			$('.content-newsletter , .contener-footer').css('display', 'block');

		}
	}

</script>

<style type="text/css">

	.newsletter-content{

		display: flex;
		align-items: center;
		justify-content: center;
		color: #888320;
	}

	.newsletter-content img{

		margin-top: 30px;
		width: 200px;
	}

	.newsletter-content p{

		font-size: 25px;
	}

	@media screen and (max-width: 600px){

		.newsletter-content img{
			width: 150px;
		}

		.newsletter-content p{

			width: 80%;
			font-size: 20px;
		}


	}




</style>