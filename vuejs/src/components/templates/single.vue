
<template>
	<div class="section-wrap">
		<div class="clear"></div>
			
			<div class="content-blog ">
				<div class="button-rond button-rond-prev" v-if="$store.state.wp.single_prev"  >
					<a :href="$store.state.wp.single_prev" >
						<svg aria-hidden="true" focusable="false" role="presentation" viewBox="0 0 20 38"><path d="M4.068 18.649l15.466 16.105c.31.283.466.629.466 1.039 0 .41-.155.77-.466 1.08a1.412 1.412 0 0 1-1.038.424c-.41 0-.756-.141-1.038-.424L.466 19.708A1.373 1.373 0 0 1 0 18.648c0-.423.155-.776.466-1.059L17.458.424A1.412 1.412 0 0 1 18.496 0c.41 0 .755.141 1.038.424.31.282.466.636.466 1.06 0 .423-.155.776-.466 1.059L4.068 18.649z" fill="currentColor" fill-rule="evenodd"></path></svg>
					 </a>	
				</div>
				
				<div class="button-rond button-rond-next" v-if="$store.state.wp.single_next" >
					<a :href="$store.state.wp.single_next" > <svg aria-hidden="true" focusable="false" role="presentation"  viewBox="0 0 20 38"><path d="M15.932 18.649L.466 2.543A1.35 1.35 0 0 1 0 1.505c0-.41.155-.77.466-1.081A1.412 1.412 0 0 1 1.504 0c.41 0 .756.141 1.038.424l16.992 17.165c.31.283.466.636.466 1.06 0 .423-.155.777-.466 1.06L2.542 36.872a1.412 1.412 0 0 1-1.038.424c-.41 0-.755-.141-1.038-.424A1.373 1.373 0 0 1 0 35.813c0-.423.155-.776.466-1.059L15.932 18.65z" fill="currentColor" fill-rule="evenodd"></path></svg> </a>
				</div>
				

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
	.button-rond{

		display: flex;

	}

	.button-rond svg{
		margin: auto;
		height: 15px !important;

	}

	.button-rond a{

		display: flex;
		position: fixed;
		height: 30px;
		width: 30px;
		/*right: 0px;*/
		/*left: 0px;*/
		background-color: #888320;
		border: 1px solid #888320;
		border-radius: 100%;
		color: white;
		transition: all .1s ease-in-out;
	}

	.button-rond a:hover{
		color: #888320;
		background-color: white;

	}

	.button-rond-next{

		top: 50%;
		right: 70px;
		position: fixed;
		height: 30px;
		width: 30px;

	}

	.button-rond-prev{
		top: 50%;
		left: 70px;
		/*right: 0px;*/
		position: fixed;
		height: 30px;
		width: 30px;
	}

	.content-blog{

		width: 60%;
		margin: 100px auto 100px auto;
		box-sizing: content-box;
		font-size: 16px;
		position: relative;	

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

	@media screen and ( max-width: 1330px ) and ( min-width: 1150px ){


		.content-blog p{

			width: 80%;
	
		}

		.clear_content_blog h1, .clear_content_blog h2, .clear_content_blog h3{

			width: 80%;
			
		}

	}


	@media screen and ( max-width: 1150px ) and ( min-width: 600px ){


		.button-rond-next{
			top: 50%;
			right: 35px;

		}

		.button-rond-prev{
			top: 50%;
			left: 30px;
		}

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

		.button-rond a{

			position: absolute;
		}

		.button-rond-next{

			right: 15px;
			top: 70%;

		}

		.button-rond-prev{

			left: 10px;
			top: 70%;
		
		}


	}



</style>










