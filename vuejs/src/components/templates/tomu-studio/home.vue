<template>
    <div class="section-wrap home-url">
    <div class="clear"></div>
		<div class="home-section">

				<div style="height: auto;" class="logo-mobile">
			
					<svg xmlns="http://www.w3.org/2000/svg" id="Calque_1" data-name="Calque 1" viewBox="0 0 85.22 85.22" fill="currentColor" ><defs>
					</defs>
					<path class="cls-1" d="M20.25,32.48V73a10,10,0,0,1-1,3.87A5.91,5.91,0,0,1,16.1,80a9.78,9.78,0,0,1-3.86,1,9.79,9.79,0,0,1-3.87-1A5.93,5.93,0,0,1,5.2,76.85a9.83,9.83,0,0,1-1-3.87V32.48a9.78,9.78,0,0,1,1-3.86,6,6,0,0,1,3.17-3.18,9.93,9.93,0,0,1,3.87-1,9.93,9.93,0,0,1,3.86,1,6,6,0,0,1,3.18,3.18,10,10,0,0,1,1,3.86M8,21a12.14,12.14,0,0,0-3.72,2.22v-19H81V73a9.83,9.83,0,0,1-1,3.87A5.93,5.93,0,0,1,76.85,80,9.83,9.83,0,0,1,73,81a9.78,9.78,0,0,1-3.86-1,5.91,5.91,0,0,1-3.18-3.17A9.83,9.83,0,0,1,65,73V32.48a12.26,12.26,0,0,0-7.55-11.31,11.26,11.26,0,0,0-4.26-.92,14.3,14.3,0,0,0-3.59.41,12.56,12.56,0,0,0-2.94,1.21,12.3,12.3,0,0,0-2.22,1.65,12,12,0,0,0-1.8,2.09,12,12,0,0,0-1.8-2.09,12.3,12.3,0,0,0-2.22-1.65,12.35,12.35,0,0,0-9.27-1.21,11.75,11.75,0,0,0-2.84,1.16,12.28,12.28,0,0,0-2.32,1.7,12,12,0,0,0-1.8,2.09,12,12,0,0,0-1.8-2.09,12,12,0,0,0-5.16-2.86,13.82,13.82,0,0,0-3.47-.41A11.38,11.38,0,0,0,8,21M81.63,81.64A12.19,12.19,0,0,0,85.22,73V0H0V73a12.08,12.08,0,0,0,.93,4.69,11.86,11.86,0,0,0,2.66,4,11.86,11.86,0,0,0,4,2.66,12.08,12.08,0,0,0,4.69.93,12.26,12.26,0,0,0,11.31-7.55A12.06,12.06,0,0,0,24.48,73V32.48a9.93,9.93,0,0,1,1-3.86,6,6,0,0,1,3.18-3.18,9.93,9.93,0,0,1,3.86-1,9.93,9.93,0,0,1,3.87,1,6,6,0,0,1,3.18,3.18,9.93,9.93,0,0,1,1,3.86V78.84a3.48,3.48,0,0,0,0,.46,1.7,1.7,0,0,0,.62,1.07,2.06,2.06,0,0,0,1.5.62,2,2,0,0,0,1.49-.62,2,2,0,0,0,.62-1.5V32.48a10,10,0,0,1,1-3.86,6,6,0,0,1,3.18-3.18,9.93,9.93,0,0,1,3.86-1,9.93,9.93,0,0,1,3.87,1,6,6,0,0,1,3.17,3.18,9.78,9.78,0,0,1,1,3.86V73a12.08,12.08,0,0,0,.93,4.69,12.38,12.38,0,0,0,6.62,6.62,12.08,12.08,0,0,0,4.69.93,12.13,12.13,0,0,0,8.65-3.58" />
					</svg>
				
				</div>
				<div>
					<p>TOMU STUDIO</p>
					<p>IS A CREATIVE OFFICE</p>
					<p>BASED IN BRUSSELS</p>
					<p>A CITY WE LOVE</p>
					<div class="we-do" style="text-align: left; margin-bottom: 40px;">WE DO <br>
					<p class="on-screen spin" > <a href=""><span id="spin"></span></a>  </p>
					</div>
				</div>
				<div style="color: black !important;" class="div-lang" v-html="$store.state.wp.switcher_lagage"></div>
		</div>
	<div class="clear"></div>
	</div>

</template>


<script type="text/javascript">

	import Vue from 'vue'
	import SmoothScrollbar from 'vue-smooth-scrollbar'
	Vue.use(SmoothScrollbar)

	export default{

		data(){

			// currentRoute: window.location.pathname
			return {
				on: true,
				// showButton : window.location.toString()
			}
		},


		mounted(){

		let $ = this.$

		var href_project = $('.section-global-project').parent().attr('data-permalink');
		$('.spin a').attr('href', href_project); 
			
		var href_home =  $('.home-url').parent().attr('data-permalink');
		$('.href-home-logo').attr('href', href_home); 


		$('[data-state="current"] .spin').on('enter-screen', () => {
			console.log('enter-screen');

			$('.header-tomu-container').css('color', 'black');
			$('.header-tomu-container a').css('color', 'black');
			$('.header-tomu-container svg').css('color', 'black');


			var href =  $('.home-url').parent().attr('data-permalink');
			this.pushHistory( href )

			$('.href-home-logo').attr('href', href); 


			$('a[href="'+ href +'"]').css('color', 'black');

		})

		$('[data-state="current"] .spin').on('leave-screen', () => {
			//console.log('leave screen', event.target);
			console.log('leave-screen');
		})


		},

		beforeDestroy(){

			this.on = false

			// console.log(set);

			console.log('beforeDestroy');
		}




	}


</script>

<style type="text/css">


	.home-section{

		position: relative;
	}

	.div-lang{

		position: absolute;
		top: 70%;
		left: 60%;
		height: auto !important;

	}


	.spin a{

		text-decoration: none;
	}

	#spin:before{
		animation-name: spin;
		animation-duration: 2s;
		animation-iteration-count: infinite;
		animation: ease-out;
	}

	@keyframes spin {
		0% {content: "DESIGN"; color:#bdb5d9;}
		16% {content: "SPACES"; color:#fddaa7;}
		33% {content: "INTERIOR"; color:#e6b4e6;}
		50% {content: "FURNITURE"; color:#86dadc;}
		66% {content: "HOSPITALITY"; color:#e6b1c2; }
		83% {content: "RESTAURANT"; color:#dbcdbe;}
		100% {content: "SCENOGRAPHY";color:#dbcdbe;}
	}

	.menu-tomu a{

		color: black;
	}

	.lang-item:nth-child(16n+2){

		padding-left: 30px;

	}

	.lang-item:nth-child(16n+3){

		padding-left: 60px;

	}

	.lang-item:nth-child(16n+4){

		padding-left: 90px;

	}
	
	.div-lang{

		top: 70%
	}

	.current-lang a{

		text-decoration: underline !important;
	}

	p#spin{

		line-height: 100%;
	}
	.lang-item{

		all: unset;
		font-size: 30px;
		line-height: 100%;
		
	}
	.lang-item a{

		text-decoration: none;
		color: black;
	}

	#spin {
		padding-top: 3px;
		margin-left: 10px;
		text-align: left;
	}
	#spin:after {
		content:"";
		animation-delay: 2s;
		animation: spin 20s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite;
	}
	.home-section > div{
		font-weight: 700;
		font-size: 70px;
	}

	.home-section p{
		all: unset;
		text-align: left;
		line-height: 95%;
	}

	.home-section > div > div{
		line-height: 100%;
		display: flex;
		flex-direction: row;
		
	}
	
	.home-section > div{

		height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-content: center;
	}

	.home-section{

		padding-left: 245px;
		width: calc( 100vw - 700px)
	}


	@media screen and ( min-width: 600px ){

		.logo-mobile{

			display: none !important;
		}

	}

	@media screen and ( max-width: 1250px ) and ( min-width: 740px ){

		.home-section > div{
			font-size: 50px;
		}

		.home-section{

			padding-left: 70px;
			width: calc( 100vw - 250px);
		}

		.we-do{

			display: flex;
			flex-direction: column !important;
		}
	}
	

	@media screen and ( max-width: 740px ){


		.logo-mobile{

			position: absolute;
			top: 30px;
			width: 70px;
		}

		#contact .contact-tomu{

			min-height: auto !important;
		}

		.div-lang{

			position: inherit;
			margin-top: -150px;
			left: 0px;

		}



		.home-section{

			width: calc( 100% - 60px );
			padding-left: 30px;

		}

		.home-section > div{

			font-size: 30px;
		}

		.home-section > div > div{
			flex-direction: column;
			text-align: left;
		}

		#spin {
			margin-left: 0px;
		}

		.home-section p{
			all: unset;
			text-align: left;
			line-height: 105%;
		}
	}

</style>