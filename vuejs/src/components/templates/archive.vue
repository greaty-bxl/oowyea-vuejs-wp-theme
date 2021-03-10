<template>
	<div class="section-wrap section-blog">

		<div class="clear"></div>
		
		<div class="image-blog">
			<h3 v-html="pll__('Blog')"></h3>
			<h1>Santos Palace</h1>
		</div>

		<div class="container-info-blog">
			
		<vue-masonry-wall :items="posts" :options="{width: 500 , padding: 12}" >
		<template v-slot:default="{item}">

			<div class="item">
				<a :href="item.permalink">
					<img :src="item.thumb">
				</a>
				<a :href="item.permalink">
					<h4 v-html="item.post_title"></h4>	        
				</a>
			</div>			     

		</template>
		</vue-masonry-wall>
			

		</div>
		
		<div class="clear"></div>
	</div>
</template>

<script>

import VueMasonryWall from "vue-masonry-wall";

export default {

	components: {
		
		VueMasonryWall
	},
	props: {	
		'title': String,
		'post': Object,
		'posts' : Array,

	},
	mounted () {

		console.log( this.posts );
		// console.log(VueMasonryPlugin);
		this.$emit('template_mounted');
	},	
	data () {
		return {
			items: this.posts
		}
	}
}
</script>

<style type="text/css">

	.section-blog .image-blog{
		color: white;
		background-image: url('https://demo-santospalace.greaty.be/bruxelles/wp-content/uploads/sites/2/2021/01/santos-palace_contact.png');
		background-position: center;
		background-size: cover; 
		margin-top: 100px;
		background-color: #FAFAFA;
		padding-bottom: 50px;
		display: flex;
		justify-content: center;
		flex-direction: column;
	}

	.section-blog .image-blog{
		padding-top: 143px;
		padding-bottom: 143px;
	}

	.section-blog .container-info-blog ul{

		list-style: none;
		padding-left: 7vw;
		padding-bottom: 0px;
		margin-bottom: 30px;
		display: flex;
	}

	.section-blog .container-info-blog{
		width: 100%;
		margin-left: auto;
		margin-right: auto;
		margin-top: 50px;
		margin-top: 75px;
		/*margin-bottom: 100px;*/
		width: 100%;

		text-align: left;
		font-size: 16px;
	}

	.section-blog .item img{

		width: 100%;
	}

	.section-blog a{

		color: #666666;
		line-height: 130%;
		text-decoration: none;
	}

	.section-blog .item a *:hover{

		color: #888320

	}

	.section-blog h4{
		font-size: 18px;
		font-weight: 400;
		margin-top: 16px;
		margin-bottom: 16px;
	}

	.section-blog p{

		font-size: 16px;
	}


	.section-blog .image-blog h1 {

		font-size: 6vw !important ;
		padding:  0px 30px  !important;
		margin: 0px  !important;
	}

	.section-blog .image-blog h3 {

		font-size: 2vw !important

	}

	.section-blog .masonry-wall.ready{

		width: 85%;
		margin-right: auto !important;
		margin-left: auto !important;
	}


	.masonry-item{

		margin-bottom: 25px;
		margin-top: 25px;

	}


	@media screen and (min-width: 1100px){

		.section-blog .container-info-blog h1 {

			font-size: 7vw !important ;
			margin: 0px !important;
		}

		.section-blog .container-info-blog h3 {

			font-size: 2vw !important ;
			margin: 0px !important;
			padding-bottom: 25px;
		}


		.section-blog .image-blog h3 {

			margin-top: 0px !important;

		}



	}

	@media screen and (max-width: 1000px){



	}


	@media screen and ( max-width: 1150px ) and ( min-width: 600px ) {


		.section-blog .image-blog{

			margin-top: 100px;
		}

		.section-blog  .image-blog h3 {

			font-size: 4vw !important ;
			margin: 0px !important;
			padding-bottom: 20px;
		}

		.section-blog  .container-info-blog{
		
			/*width: calc( 100% - 140px)		*/
		}

		.section-blog  .image-blog h1 {

			font-size: 10vw !important ;
			padding:  0px 30px  !important;
			margin: 0px  !important;
		}


	}

	@media screen and ( max-width: 600px ){

		.section-blog  .container-info-blog{
		
			/*width: calc( 100% - 60px)		*/
		}

		.masonry-item{

			padding: 0px !important;
		}

		.section-blog  .image-blog h1 {

			font-size: 12vw !important ;
			padding:  0px 30px  !important;
			margin: 0px  !important;
		}

		.section-blog  .image-blog h3 {

			font-size: 6vw !important ;
			padding-left: 30px  !important;
			padding-right: 30px  !important;
			margin: 0px !important;
			padding-bottom: 20px;
		}

		.section-blog  .container-info-blog ul{

			padding-left: 15px;
		}

		.section-blog  .image-blog{

			margin-top: 73px;
		}

		.section-blog .container-info-blog{

			margin-bottom: 0px;
		}
	
	}
	
	
</style>


