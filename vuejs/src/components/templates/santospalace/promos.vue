<template>

	<div class="section-wrap section-promos-page" >

			<div class="image-background-promo" :style="{'background-image':'url('+ post.thumb +')'}"></div>
			<div class="text-global-promo-page">
				
				<h2  v-html="post.post_title"></h2>
				<div class="page-promos-content"  v-html="post.post_content">
				</div>

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
			console.log( this.post);



		}

	}
</script>

<style type="text/css">
	
	.text-global-promo-page{

		width: 50%;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 10vw;
	}

	.section-promos-page h2{

		color: #422112;
		line-height: 120%;
		margin-top: 50px;
		margin-bottom: 40px;
		font-size: 3vw;
		text-align: left;
		font-weight: bold;

	}

	.page-promos-content{

		color: #666666;
		line-height: 140%;
		text-align: left;
		font-size: 17px;

	}


	.image-background-promo{	

		height: 33vw;
		width: 50vw;
		margin-top: 100px;
		margin-left: auto;
		margin-right: auto;
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		
	}

	@media screen and ( max-width: 1125px ) and ( min-width: 600px) {

		.image-background-promo{	

			height: 55vh;
			width: calc(100% - 140px);
			margin-top: 100px;
		
		}

		.text-global-promo-page{

			width: calc(100% - 140px);
			margin-bottom: 100px;
		}

		.section-promos-page h2{

			font-size: 7vw;

		}

	}

	@media screen and ( max-width: 600px ){

		.section-promos-page h2{
			
			font-size: 10vw;

		}
		.image-background-promo{	

			height: 55vh;
			width: calc(100% - 60px);
			margin-top: 73px;
	
		}

		.text-global-promo-page{

			width: calc(100% - 60px);
			margin-bottom: 70px;
		}
	
	}
	
	
</style>


