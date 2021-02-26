
<template>
	<div class="section-wrap">
		<div class="clear"></div>
			
			<div class="content-single">
				<img class="image-single-post" :src="this.post.thumb">
				<h2 class="title-post-single" v-html="post.post_title" ></h2>
				<div v-html="post.post_content">
				</div>
			</div>
		
		<div class="clear"></div>
	</div>
</template>


<script>

	export default {
		components: {
	
		},
		props: {
			'post' : Object
		},
		mounted (){

			// var $ = this.$

			console.log(this.wp);

		}
	}
</script>

<style>


</style>

<style>
	
	.content-single{

		width: 60%;
		margin: 100px auto 100px auto;
		box-sizing: content-box;
		font-size: 16px;


	}

	.content-single img{

/*		width: 100%;
		height: auto;*/
		height: 50vh;
		width: 75vh;

	}

	.title-post-single{

		font-size: 40px;
		color: black;
		font-weight: 600;
		text-transform: uppercase;
	}


	@media screen and ( max-width: 1150px ) and ( min-width: 600px ){

		.content-single{

			width: 100%;
			box-sizing: border-box;
			padding-left: 70px;
			padding-right: 70px;
			margin: 100px 0px;

		}

		.content-single img{

			width: 100%;
			height: auto;
		}

		.title-post-single{

			font-size: 35px
		}

	}

	@media screen and ( max-width: 600px ){

		.content-single{

			width: 100%;
			box-sizing: border-box;
			padding-left: 30px;
			padding-right: 30px;
			margin: 73px 0px;

		}

		.title-post-single{

			font-size: 25px
		}

		.content-single img{

			width: 100%;
			height: auto;
		}


	}



</style>










