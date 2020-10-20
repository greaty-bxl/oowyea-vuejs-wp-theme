<template>
	<div class="section-wrap">
		<div class="clear"></div>

			<div class="div-members">
				<div class="post-client">
				<div class="member" v-for="child in wp.members" :key="child.ID">
					<img class="image on-screen" width="100%" :src="child.thumb">
					<p class="nom" v-html="child.post_title"></p>
					<p class="fuction" v-html="child.post_content"></p>
				</div>
					
				</div>
			</div>
				<!-- <div class="div-text-homepage">

					<div class="center-flex" >

						<Alpl class="text-homepage"><h1 class="title-page">Clients</h1>

						Nous travaillons avec les petits et les grands. Marques en difficulté de reconnaissance et leaders du marché.

						</Alpl>

					</div>

				</div> -->

	<!-- 			<div class="globales-client-list section-wrap">
		
					<div class="clientrow" v-for="child in wp.clients" :key="child.ID">
						<p class="clientText" v-html="child.post_title" ></p>
					</div>

				</div> -->
			<div>
		<!-- 	<textcotact>
			</textcotact> -->
		</div>
	</div>	
</template>

<script>
import smart_fonts from "Libs/smart-fonts.js"
import is from "is_js"
// import textcotact from './components/text-contact'
// import Alpl from 'Molecules/animation-line-per-line';
export default {
	components: {
		// textcotact,
		// Alpl,
	},
	props: {
		'post' : Object
	},
	mounted (){


		var $ = this.$

		console.log(this.wp.members);
		
		$(this.$el).css({
			'justify-content':'center'
		})
		smart_fonts({
		'.text-homepage' : 52.8
		})

		if(  is.not.mobile() && is.not.tablet() )
		{

			$('.member .image').on('enter-screen', (event) => {
				//console.log('enter-screen', event.target);
				$(event.target).stop().animate({
					'opacity': 1,
					},
					650, function() {
					/* stuff to do after animation is complete */
				});
				//console.log(event.target);

				$({blurRadius: 10, translateY: 50}).stop().animate({blurRadius: 0, translateY: 0}, {
					duration: 700,
					easing: 'easeInOutQuad', // or "linear"
					// use jQuery UI or Easing plugin for more options
					step: function() {
						//console.log(this.blurRadius);
						$(event.target).css({
							"-webkit-filter": "blur("+this.blurRadius+"px)",
							"filter": "blur("+this.blurRadius+"px)",
							"transform": "translateY("+ this.translateY +"px)"
						});
					},

				});
			})

			//on leave screen (also tiggered on init)
			$('.member .image').on('leave-screen', (event) => {

				$(event.target).stop().animate({
					'opacity': 0,
					},
					800, function() {
					/* stuff to do after animation is complete */
				});
				//console.log(event.target);

				$({blurRadius: 0, translateY: 0}).stop().animate({blurRadius: 10, translateY: 50}, {
					duration: 700,
					easing: 'easeInOutQuad', // or "linear"
					// use jQuery UI or Easing plugin for more options
					step: function() {
						//console.log(this.blurRadius);
						$(event.target).css({
							"-webkit-filter": "blur("+this.blurRadius+"px)",
							"filter": "blur("+this.blurRadius+"px)",
							"transform": "translateY("+ this.translateY +"px)"
						});
					},

				});
			})

		}
		else{

			$('.member img').css('opacity', '1');
			$('.member img').css('-webkit-filter', 'blur(0px)');
		

		}

		//Important to let works basic functions
		this.$emit('template_mounted', this)
	
	}
}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;600&display=swap');
	
	.member{
		color: #e1e1e1;
		padding-left: 5px;
		padding-right: 5px;

	}

	.member .image{
		opacity: 0
	}


	.div-members{

		min-height: 100vh;
		background-color: #282828;

	}

	.div-members p {

		color: #282828;
		font-family:'Montserrat', sans-serif !important;
		/*font-weight: 600;*/
	}

	.text-homepage{

		font-family:'Montserrat', sans-serif !important; 
	}


	.globales-client-list{
		display: flex;
		flex-direction: column;
		margin: 70px 70px;
		font-family: 'Montserrat', sans-serif !important;
		font-weight: lighter;
	}

	.globales-client-list div:last-child{

		border-bottom-style: solid;
		border-width: 0.5px 0.5px;
	}

	.clientrow{

		/*width: calc(100% - 140px);*/
		border-top-style: solid;
		border-color: #e1e1e1b0;
		border-width: 0.5px 0.5px;

	}


	.clientText{

		padding-left: 35%;
		color: #e1e1e1;

	}

	.title-page{
		text-align: left;
	}

    .nom{

		margin-top: 10% !important;
		margin-bottom: 10px !important;
		color: #e1e1e1 !important;
		font-weight: bold;
		font-size: 18px !important;


	}

	.fuction{

		margin-top: 4% !important;
		color: #e1e1e1 !important;
		font-weight: lighter;
		font-size: 16px !important;

	}

	.fuction p{


		color: #e1e1e1 !important;



	}

	@media screen and (max-width: 1100px min-width: 600px ){

		.member{

			margin-bottom: 35px !important ; 
			margin-top: 35px !important;

		}


	}


	@media screen and (max-width: 600px ){

		.globales-client-list{
			display: flex;
			flex-direction: column;
			align-content: flex-end;
			margin: 30px 30px;
		}

		.member{

			margin-bottom: 35px;
			margin-top: 35px;

		}


	.clientText{

		padding-left: 0%;
		color: #e1e1e1;

	}

	.title-page{

		font-size: 10px !important;
		padding-bottom: 5%;
		text-transform: capitalize;
		letter-spacing: 10px;
		color: #e1e1e1;
	}


	}



</style>

<style lang="scss" scoped>

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;600&display=swap');



.div-text-homepage{

	min-height: 100vh;
}




.image {
	background-image: url("	");
}

.div-text-homepage{

	display: flex;
	// flex-direction: column;
	justify-content: center;

}

.title-page{

	font-size: 10px !important;
	padding-bottom: 5%;
	text-transform: capitalize;
	letter-spacing: 10px;
	color: #e1e1e1;
	font-family: 'Montserrat', sans-serif !important;
}

p{
	text-align: left;
}

@media screen and (min-width: 1100px   ) {


		.center-flex{

		min-height: 100vh;
		display: flex;
		flex-direction: row;
		justify-content: center;

		}

		.post-client{

		min-height: 100vh;

		// padding:  30px 35px;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-content: center;
		}

		.text-homepage{

		// padding-top: 70px;
		/*padding-bottom: 150px;*/
		width: 70% ;
		margin: auto 70px;
		/*width: 100%;*/
		font-size: 3.3em;
		color: #e1e1e1;
		font-family: 'Montserrat', sans-serif;
		font-weight: lighter;
		text-align: left;

		}


		.member{
				width: 20% !important;
				// display: inline-block;
				margin: auto 0px;
				// margin: 0px 35px;
		}







}

@media screen and (max-width: 1100px) and  (min-width: 600px) {

		.member{
			width: calc(50% - 70px) !important;
			display: inline-block;
			margin-bottom: 10%;
			margin: 35px;


		}
		.image{

		// height: 60vh;
		width: 100%;
		}

		.content {
			display: flex;
			flex-direction: row;
			justify-content: center;
		}

		.text-homepage{

			font-family: 'Montserrat', sans-serif !important;
			font-weight: lighter;
			color: #e1e1e1;
			/*padding-left: 5%;*/
			height: auto;
			text-align: left;
			/*padding-top: 20%;*/
			font-size: 35px;
			display: block;
			margin-top: 0px;
			padding-left: 70px;
			padding-right: 70px;
			width: auto;
			min-height: 4em;
			width: 80% ;

		}

		.clientrow{

			// width: calc( 100% - 140px ) ;
			border-top-style: solid;
			border-color: #e1e1e1b0;
			border-width: 0.5px 0.5px;

		}



		.client{

			width: 100% !important;
			margin-left: auto;
			margin-right: auto;


		}

		.global-project{

			z-index: 10;
			width: 100% !important;

		}

		.image-client{

			height: 100%;
			background-color: #e1e1e1;
		}

		.row{
		width: 100%;
		display: flex;
		flex-direction: column;
		}

		.div-text-project{ 

		height: 100vh;
		min-height: 100vh;
		padding-top: auto;
		padding-left: auto;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-content: center;
		padding-top: 0px;
		}


		.reseaux-sociaux{
		display: flex;
		flex-direction: column;
		justify-content: center;

		}

		.reseaux-sociaux p {
		margin: 4px  0px;
		}

		.confidentialite{

		display: flex;
		flex-direction: column;

		}

		.confidentialite p {
		margin: 5px  0px;
		text-align: left;
		}
		.div-text-homepage{

			height: 100vh;
		}

		.post-client{

			display: flex;
			flex-direction: column;
		}

		.image{

			// height: 60vh;
		}
		.center-flex{

			height: 100%;
			display: flex;
			flex-direction: column;
			justify-content: center;
		}

		.post-client{

			margin: 35px 35px;
			display: inline-block;
		}

		.member p{

			color: #e1e1e1;
		}

		.div-text-studio{
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-content: center;
			min-height: 100vh;

		}

}


@media screen and (max-width: 600px) {

		.global-project{
		z-index: 10;
		width: 100% !important;


		}

		.member{

			width: calc(100% - 60px) !important;
			height: auto;
			display: inline-block;
			padding-right: 30px;
			padding-left: 30px;

		}
		.div-text-project{

			width:100%;

		}

		.title-page{

			padding-top: 20%;
		}



		.client img{

			width: 100% !important;
			/*height: 60vh;*/
			// min-height: 200px;
			/*background-color: #e1e1e1;*/

		}



		.row{

			padding:  30px 30px;
			display: flex;
			flex-direction: row;
			justify-content: space-between;

		}

		.text-homepage{

			padding-top: 100px;
			padding-bottom: 5%;
			/*width: 100% !important;*/
			margin: auto 30px;
			
			font-size: 3.1em;
			color: #e1e1e1;
			font-family: 'Montserrat', sans-serif !important;
			font-weight: lighter;
			text-align: left;

		}

		.textbox{

			margin: 50px 30px !important;
			height: 70vh;


		}

	/*	.post-client{

			padding-top: 100px;
			padding-bottom: 120px;

		}*/

		.clientrow{

			width: 100%;
		

		}



}


</style>