<template>
	
	<div class="section-global-project">

			<div class="content-project on-screen"  v-for="(item, index) in wp.projects" :key="index"  >
				<a :href="item.permalink">
					<img v-if="is" :src="item.thumb">	
					<div v-else class="background-project" :style= "{'background-image': 'url('+item.thumb+')' }" ></div>
					<div class="animation-title" >
						<p v-html="item.post_title"></p>
					</div>
				</a>
			</div>
	</div>	

	

</template>


<script type="text/javascript">

	import is from 'is_js'

	export default{

	data(){

		// currentRoute: window.location.pathname
		return {
			is : is.mobile(),
			// showButton : window.location.toString()
		}
	},


	mounted(){
		this.$emit('template_mounted')

		let $ = this.$

		$('[data-state="current"] .content-project').on('enter-screen', () => {
			console.log('enter-screen');

			$('.header-tomu-container').css('color', '#9fade1');
			$('.header-tomu-container a').css('color', 'black');

			var href = $('#projets').attr('data-permalink');
			this.pushHistory( href )
			$('a[href="'+ href +'"]').css('color', '#9fade1');
		})

		$('.section-global-project').on('leave-screen', () => {
			//console.log('leave screen', event.target);
			console.log('leave-screen');
		})

		}
	}


</script>

<style lang="scss">

	* {
		box-sizing: border-box;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
	}

	*, *:before, *:after {
		box-sizing: inherit;
	}


	.content-project {

	&:hover {

		.animation-title {
			opacity: 1;

		}
		.background-project {
			opacity: 1;
			transform: scale(1.15,1.15);
			-webkit-transform:scale(1.15,1.15);
			-moz-transform:scale(1.15,1.15);
			-ms-transform:scale(1.15,1.15);
			-o-transform:scale(1.15,1.15);
		}
	}
	}

</style>

<style type="text/css">

	.content-project{

		position: relative;
		overflow: hidden;
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
		font-size: 22px; 
	
	}

	.content-project a{

		text-decoration: none;
	}

	.animation-title p{

		width: 50%;
		margin-left: auto;
		margin-right: 25px;
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

		width: calc( 100% - 245px ) !important;
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
		display: block !important;
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
			width: calc( 100% - 180px ) !important;
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
			padding-top: 50px;
			width: calc( 100% - 60px ) !important;
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