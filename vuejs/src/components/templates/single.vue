
<template>
	<div class="section-wrap">
		<div class="clear"></div>
			<div class="section-global-project on-screen">

				<div class="content-single-1">

					<div class="content-project"  v-for="(item, index) in post.acf_fields.galery" :key="index">

							<div v-if="index === 1 " class="desciption-tomu-project" v-html="post.post_content"></div>
							<span v-else>
								
							<img v-if="is" :src="item">	
							<div v-else class="background-project" :style= "{'background-image': 'url('+item+')' }" >
								
							</div>

							</span>
		
					</div>
		
				</div>

			</div>
		
		<div class="clear"></div>
	</div>
</template>


<script>

	import smart_fonts from 'Libs/smart-fonts.js';
	import is from 'is_js'
	export default {

		data(){

			// currentRoute: window.location.pathname
			return {
				is : is.mobile(),
				// showButton : window.location.toString()
			}
		},

		components: {
			
		},
		props: {
			'post' : Object
		},
		mounted (){
			var $ = this.$

			// $('.retour').html('[add_to_cart id="99"]')
			console.log(this.post);

			

			$('.title-21').attr('placeholder', this.post.post_title );
			$('.title-21').attr('value', this.post.post_title );

				$('.section-global-project').on('enter-screen', () => {
			console.log('enter-screen');

			$('.header-tomu-container').css('color', '#BBB5D6');
			$('.current-page').css('color', '#BBB5D6');
			// $('.title-filter:contains("Origines")').text('Afkomst')
			
			
		})


			
			this.$emit('template_mounted')

			console.log(this.wp);

			smart_fonts({
	
				'.input-single' : 18,
			})


		}
	}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;1,100;1,200;1,300;1,400&display=swap');
	
	input:focus {
	color: #70625b !important;
	}

		.desciption-tomu-project{

			margin-top: auto;
			margin-bottom: auto;
			display: flex;
			justify-content: center;
			flex-direction: column;
			
			

		}

		.desciption-tomu-project p{

			height: auto;
			font-size: 16px;
			text-align: left;
			/*font-weight: 400;*/

		}


		.content-project{

			position: relative;
			/*overflow: hidden;*/
		}

		.animation-title *{

			all: unset;
		}
		.animation-title{

			height: 100%;
			position: absolute;
			width: 100%;
			left: 0;
			top: 0;
			background-color: #ffffffb0;
			display: flex;
			align-items: start;
			opacity:0;
			-webkit-transition:all 0.45s ease-in-out;
			-moz-transition:all 0.45s ease-in-out;
			-o-transition:all 0.45s ease-in-out;
			-ms-transition:all 0.45s ease-in-out;
			transition:all 0.45s ease-in-out;
			color: black;
			font-size: 25px; 
		
		}

		.content-project a{

			text-decoration: none;
		}

		.animation-title p{

			width: 50%;
			margin-left: auto;
			margin-right: 20px;
			text-align: right;
			font-weight: 500;
			padding-top: 20px;

		}

		.background-project{

			height: 100%;
			width: 100%;
			background: no-repeat;
			background-size: cover;
			background-position: center;
			-webkit-transition:all 0.25s ease-in-out;
			-moz-transition:all 0.25s ease-in-out;
			-o-transition:all 0.25s ease-in-out;
			-ms-transition:all 0.25s ease-in-out;
			transition:all 0.25s ease-in-out;
			/*-webkit-filter: grayscale(100%) contrast(120%);*/
			/*filter: grayscale(100%) contrast(120%);*/


		}

		.section-global-project{

			width: calc( 100% - 245px );
			position: relative;
		}
		
		.content-project:nth-child(odd) { 

			/*display: flex;*/
			justify-content: flex-end;

		}



		.section-global-project {

			padding-top: 100px;
			padding-bottom: 100px;
			box-sizing: border-box;
			padding-left: 70px;
		}

		.content-project:nth-child(16n+1){

			width: 30vw;
			height: 40vw;
		}	

		.content-project:nth-child(16n+2){
			width: 30vw;
			margin-top: -22.5vw;
			height: 40vw;
			margin-left : calc( 30vw + 70px );
			margin-bottom: 70px;
			display: flex;
		}

		.content-project:nth-child(16n+3){

			margin-top: -17.5vw;
			margin-bottom: 100px;
			width: 30vw;
			height: 25vw;
		}

		.content-project:nth-child(16n+4){

			width: 47vw;
			height: 33vw;
			margin-left: auto;
			margin-bottom: 70px;

		}

		.content-project:nth-child(16n+5){

			width: 30vw;
			height: 40vw;
			margin-left: auto;

		}

		.content-project:nth-child(16n+6){

			width: 35vw;
			height: 22.5vw;
			margin-right: 70px;
			margin-left: calc( 100% - 65vw - 70px );
			margin-top: -40vw;

		}

		.content-project:nth-child(16n+7){

			width: calc( 50vw - 140px)  ;
			height: 50vw;
			margin-right: 70px;
			margin-top: calc(  17.5vw + 100px );
			box-sizing: content-box;

		}

		.content-project:nth-child(16n+8){

			width: 25vw;
			height: 35vw;
			margin-right: 70px;
			margin-top: -35vw;
			margin-bottom: 70px;
			box-sizing: content-box;
			margin-left: calc( 50vw - 70px);

		}

		.content-project:nth-child(16n+9){

			width: 25vw;
			height: 35vw;
			margin-right: 70px;
			/*margin-top: -35vw;*/
			box-sizing: content-box;
			margin-left: calc( 37.5vw - 70px);

		}

		.content-project:nth-child(16n+10){

			width: 30vw;
			margin-top: 100px;
			height: 25vw;
			
		}	

		.content-project:nth-child(16n+11){

			width: calc( 100% - 30vw - 70px );
			margin-top: -12.5vw;
			height: 40vw;	
			margin-left : calc( 30vw + 70px );
			margin-bottom: 70px;
		}

		.content-project:nth-child(16n+12){

			margin-top: -27.5vw;
			margin-bottom: 70px;

			width: 30vw;
			/*margin-left: 70px;*/
			height: 40vw;
		}

		.content-project:nth-child(16n+13){

			width: calc( 100% - 30vw - 70px );
			height: 50vw;
			margin-left: auto;
			/*margin-top: calc(  17.5vw + 100px );*/
			box-sizing: content-box;

		}

		.content-project:nth-child(16n+14){

			width: 30vw;
			margin-top: 100px;
			height: 25vw;

		}

		.content-project:nth-child(16n+15){
		
			width: 30vw;
			margin-top: -25vw;
			margin-bottom: 70px;
			height: 40vw;
			margin-left : calc( 30vw + 70px );

		}

		.content-project:nth-child(16n+16){
		
			width: 30vw;
			/*margin-left: 70px;*/
			height: 33vw;
			margin-left : calc( 30vw + 70px );
			width: calc( 100% - 30vw - 70px );

		}

	/*	.section-global-project div{

			display: flex;
			flex-direction: column;
		}
	*/
		.section-global-project img{

			height: 50px;
			width: 50px;
		}

		@media screen and ( max-width: 1125px ) and ( min-width: 600px){


			.section-global-project {
				width: calc( 100% - 180px );
				padding-left: 50px;
			}



			.content-project:nth-child(16n+1){

				width: 30vw;
				height: 40vw;
			}	

			.content-project:nth-child(16n+2){
				width: 30vw;
				margin-top: -22.5vw;
				height: 40vw;
				margin-left : calc( 30vw + 30px );
				margin-bottom: 30px;
			}

			.content-project:nth-child(16n+3){

				margin-top: -17.5vw;
				margin-bottom: 30px;
				width: 30vw;
				height: 25vw;
			}

			.content-project:nth-child(16n+4){

				width: 47vw;
				height: 33vw;
				margin-left: auto;
				margin-bottom: 30px;

			}

			.content-project:nth-child(16n+5){

				width: 30vw;
				height: 40vw;
				margin-left: auto;

			}

			.content-project:nth-child(16n+6){

				width: 35vw;
				height: 22.5vw;
				margin-right: 30px;
				margin-left: calc( 100% - 65vw - 30px );
				margin-top: -40vw;

			}

			.content-project:nth-child(16n+7){

				width: calc( 43.9vw - 30px);
				height: 50vw;
				margin-right: 30px;
				margin-top: calc(  17.5vw + 100px );
				box-sizing: content-box;

			}

			.content-project:nth-child(16n+8){

				width: 25vw;
				height: 35vw;
				margin-right: 30px;
				margin-top: -35vw;
				margin-bottom: 30px;
				box-sizing: content-box;
				margin-left: 43.9vw;

			}

			.content-project:nth-child(16n+9){

				width: 25vw;
				height: 35vw;
				margin-right: 30px;
				box-sizing: content-box;
				margin-left: calc( 37.5vw - 30px);

			}

			.content-project:nth-child(16n+10){

				width: 30vw;
				margin-top: 100px;
				height: 25vw;
				
			}	

			.content-project:nth-child(16n+11){

				width: calc( 100% - 30vw - 30px );
				margin-top: -12.5vw;
				height: 40vw;	
				margin-left : calc( 30vw + 30px );
				margin-bottom: 30px;
			}

			.content-project:nth-child(16n+12){

				margin-top: -27.5vw;
				margin-bottom: 30px;

				width: 30vw;
				/*margin-left: 30px;*/
				height: 40vw;
			}

			.content-project:nth-child(16n+13){

				width: calc( 100% - 30vw - 30px );
				height: 50vw;
				margin-left: auto;
				/*margin-top: calc(  17.5vw + 100px );*/
				box-sizing: content-box;

			}

			.content-project:nth-child(16n+14){

				width: 30vw;
				margin-top: 100px;
				height: 25vw;

			}

			.content-project:nth-child(16n+15){
			
				width: 30vw;
				margin-top: -25vw;
				margin-bottom: 30px;
				height: 40vw;
				margin-left : calc( 30vw + 30px );

			}

			.content-project:nth-child(16n+16){
			
				width: 30vw;
				/*margin-left: 30px;*/
				height: 33vw;
				margin-left : calc( 30vw + 30px );
				width: calc( 100% - 30vw - 30px );

			}

			
		}

		@media screen and ( max-width: 600px ){

			.section-global-project img{

				width: 100% !important;
				height: auto !important;

			}

			.section-global-project{

				width: calc( 100% - 60px );
				padding-left: 0px;
				margin-left: auto;
				margin-right: auto;
			}

			.content-project{

				width: 100% !important;
				margin: 0px 0px 15px 0px !important;
				height: auto !important;
			}

			.animation-title {
				font-size: 18px ;
				padding: 15px 0px;
				height: auto;
				display: block;
				position: initial;
				width: 100%;
				left: 0;
				top: 0;
				background-color: white;
				display: flex;
				align-items: center;
				opacity: 1;
				transition: all 0.45s ease-in-out;
				color: black;

			}

			.animation-title p{

				padding-top: 0px;
				width: calc( 100% - 60px  );
				margin-left: auto;
				text-align: right;

			}

		}




</style>

<style scoped>

</style>










