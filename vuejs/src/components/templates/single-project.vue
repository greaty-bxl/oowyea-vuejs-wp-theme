<template>
<div class="section-wrap">
<div class="clear"></div>

<div class="global-descriptif">
<div class="all-description">

	<div class="info">
		<p><strong>Client : </strong>  <span v-html="this.wp.title"></span> </p>
	<p v-html="post.fields.description_client" ></p>
		
	</div>

	<p class="notre-service"><strong>Ce que nous avons réalisé :</strong> </p>
	<div class="services-fourni" v-html="post.fields.liste_services" ></div>
	
</div>
<!-- <img :src="this.wp.thumb" > -->
 <img class="image" :src="post.fields.image_projet.url " >
</div>

<div class="post-client">

<Anime3d class="g-project" v-for="child in wp.projects" :key="child.ID">
	
		<div class="icon global-project test__item on-screen" >
		
				<a :href="child.permalink" >
					<div class="client">

						<img class="image-client" height="100%" width="100%" :src="child.thumb" >
						<p class="name-client" v-html="child.post_title" ></p>
						<p class="role-greaty">Corporated Website</p>

					</div>
				</a>
			
		</div>
	
</Anime3d>

</div>


<!-- <h1 v-html="this.wp.title">single</h1>
<div v-html="this.wp.post_content"></div> -->
<div class="clear"></div>
</div>

 
</template>

<script>

	/*import Alpl from 'Molecules/animation-line-per-line';
	import anime from 'animejs/lib/anime.es.js';*/
	import Anime3d from 'Molecules/animation-3d';

export default {
		components: {

			Anime3d
		},

		props: {

		'post' : Object
		},
		mounted (){


		console.log( this.wp.projects );

		this.$emit('template_mounted', this)

		}
	
}



</script>

<style scope >

@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;1,300;1,400&display=swap');

	.global-descriptif{

		display: flex;
		flex-direction: column;
		justify-content: center;
		background-color: rgb(25, 26, 28);
		min-height: 100vh;
		/*width: calc(100% - 140px);*/
		padding-top: 150px;
		padding-bottom: 150px;

		/*padding-left: 70px;*/
		/* padding-right: 70px; */

		/*height: 125vh;*/

	}

	.all-description{

		height: 100%;
		width: 80%;
		background-color: rgb(25, 26, 28);
		margin:  0px 5%;

	}

	.all-description p{

		line-height: 30px;
		font-size: 18px !important;
	}
	.image{

		height: 100%;
		width: 90%;
		background-color: white;
		background-position: center;
		background-size: cover;
		background-repeat: none;
		margin-left: 5%;
		margin-right: 5%;
	}
	p{
		text-align: left;
		margin-bottom: 10%;
		color: white;
	}

	.info p {
		
		margin-bottom: 5%;

	}

	.notre-service{
		
		margin-top: 5%;
		margin-bottom: 2%;


	}

   @media (max-width: 1100px) {

		.global-descriptif{

			display: flex;
			flex-direction: column;
			justify-content: center;
			background-color: rgb(25, 26, 28);
			min-height: 100vh;
			/*width: calc(100% - 200px);*/
			/*padding:  70px 100px;*/
			/*height: 125vh;*/

		}
		
		.image{

			height: 100%;
			width: 90%;
			/*height: 100vh;*/

		}
		.all-description{

			height: 100%;
			width: 80%;
			background-color: rgb(25, 26, 28);
			margin: 0px 35px;

		}
		.image{

			margin: 35px 35px;
		}

		.client{

		width: 100% !important;
		height: 60vw;

		margin-left: auto;
		margin-right: auto;


		}

		.global-project{
		z-index: 10;
		width: 90% !important;
		/*margin-left: auto;
		margin-right: auto;*/
		margin: 20px !important;

		}

		.image-client{

		height: 100%;
		/*background-color: white;*/
		}

   }

   body {
   margin: 0 !important;
   padding: 0;
   font-family: 'Open Sans', regular;

   }

   a{
   color: #e1e1e1;
   text-decoration: none;
   }



   .global-project p{

   text-align: left;
   }



   a{color: #e1e1e1 ;}

   .div-text-homepage{
   display: flex;
   /*height: 100vh;/*/
   width: 80%;
   /*padding-top: 100px;*/
   padding-left: auto;
   padding-right: auto;

   }

   .image-client{

   width: 100%;

   background-color: white;

   }

@media (min-width: 1100px) {

	.client img{

	width: 45%;
	height: 59vh;

	}
	
}



   .name-client{

   font-size: 20px;
   margin-bottom: 5px;
   font-family: 'Gotham Book Regular', sans-serif; 

   }

   .role-greaty{

   font-size: 12px;
   margin-top: 0px;
   font-family: 'Gotham Book Regular', sans-serif; 

   }

	@media screen and (min-width: 800px) {

	.post-client{
		padding-left: 35px;
		padding-right: 35px;
	}

	.g-project{

	z-index: 10;
	width: calc(50% - 70px) !important;
	height: auto;
	min-height: 400px;
	/*	margin: 35px;*/

	display: inline-block;
	/*padding-right: 5%*/
	}


	.client img{

	width: 100% !important;
	height: 60vh;
	min-height: 400px;
	/*background-color: white;*/

	}


   .text-homepage{
   padding-top: 10%;
   padding-bottom: 5%;
   width: 100% !important;
   margin: auto 70px;
   width: 100%;
   font-size: 3.1em;
   color: #e1e1e1;
   font-family: "Open Sans", regular !important;
   font-weight: lighter;
   ;
   }


   }


	@media screen and (min-width: 800px) {

	.post-client{
		padding-left: 35px;
		padding-right: 35px;
		background-color: rgb(25, 26, 28);
	}

	.g-project{
		z-index: 10;
		width: calc(50% - 70px) !important;
		height: auto;
		min-height: 400px;
		display: inline-block;

	
    }

	.client img{

	width: 100% !important;
	height: 60vh;
	min-height: 400px;
	/*background-color: white;*/

	}

	}

	.g-project {
		padding-left: 35px;
		padding-right: 35px;
	}

	.services-fourni ul{
		
		list-style: none;
		list-style-type: none;
		text-align: left;
		padding-left: 0px;
		margin-bottom: 5%;

	}

	.services-fourni ul li{

     padding-top: 15px;

	}


</style>