
<template>
	<div class="section-wrap">
		<div class="clear"></div>
			
			<div class="content-blog">

				<h1 class="title-post-blog" v-html="post.post_title" ></h1>
				<img style="margin-top: 50px" class="image-blog-post" :src="this.post.thumb">
				
				<div class="clear_content_blog post" v-html="post.post_content">
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

	.content-blog{

		width: 60%;
		margin: 100px auto 100px auto;
		box-sizing: content-box;
		font-size: 16px;

	}

	.clear_content_blog a{

		color: #666666;

	}

	.clear_content_blog h1, .clear_content_blog h2, .clear_content_blog h3{

		color: black;
		font-weight: 600;
		text-align: left;
		width: 70%;
		margin-left: auto;
		margin-right: auto;

		
	}

	.content-blog img{

		height: 63vh;
		width: 95vh;

	}

	.title-post-blog{

		color:#888320;
		font-size: 40px;
		font-weight: 600;
		text-align: center;
		margin-top: 100px;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 0;

	}

	.content-blog p{
		margin-left: auto;
		margin-right: auto;
		width: 70%;
		line-height: 200%;
		font-size: 20px !important;
	}

	@media screen and ( max-width: 1300px ) and ( min-width: 1150px ){


		.content-blog p{

			width: 80%;
	
		}

		.clear_content_blog h1, .clear_content_blog h2, .clear_content_blog h3{

			width: 80%;
			
		}

	}


	@media screen and ( max-width: 1150px ) and ( min-width: 600px ){

		.content-blog{

			width: 100%;
			box-sizing: border-box;
			padding-left: 70px;
			padding-right: 70px;
			margin: 100px 0px;

		}

		.content-blog img{

			width: 100%;
			height: auto;
		}

		.title-post-blog{

			font-size: 35px
		}

		.content-blog p{

			width: 100%;
			padding: 0px;
		}

		.content-blog{

			margin: 70px auto 100px auto;
		
		}

		.clear_content_blog h1, .clear_content_blog h2, .clear_content_blog h3{

			width: 100%;
			
		}
	}

	@media screen and ( max-width: 600px ){


		.title-post-blog{

			width: auto;
		}

		.content-blog p{

			width: 100%;
			padding: 0px;
		}

		.content-blog{

			width: 100%;
			box-sizing: border-box;
			padding-left: 30px;
			padding-right: 30px;
			margin: 73px 0px;

		}

		.title-post-blog{

			font-size: 25px
		}

		.content-blog img{

			width: 100%;
			height: auto;
		}

		.clear_content_blog h1, .clear_content_blog h2, .clear_content_blog h3{
			
			width: 100%;
			
		}


	}



</style>










