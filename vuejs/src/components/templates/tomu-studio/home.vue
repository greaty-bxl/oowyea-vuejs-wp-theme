<template>
    <div class="section-wrap home-url">
    <div class="clear"></div>
		<div class="home-section">

				<div style="height: auto;" class="div-home logo-mobile">
			
					<svg xmlns="http://www.w3.org/2000/svg" id="Calque_1" data-name="Calque 1" viewBox="0 0 85.22 85.22" fill="currentColor" ><defs>
					</defs>
					<path class="cls-1" d="M20.25,32.48V73a10,10,0,0,1-1,3.87A5.91,5.91,0,0,1,16.1,80a9.78,9.78,0,0,1-3.86,1,9.79,9.79,0,0,1-3.87-1A5.93,5.93,0,0,1,5.2,76.85a9.83,9.83,0,0,1-1-3.87V32.48a9.78,9.78,0,0,1,1-3.86,6,6,0,0,1,3.17-3.18,9.93,9.93,0,0,1,3.87-1,9.93,9.93,0,0,1,3.86,1,6,6,0,0,1,3.18,3.18,10,10,0,0,1,1,3.86M8,21a12.14,12.14,0,0,0-3.72,2.22v-19H81V73a9.83,9.83,0,0,1-1,3.87A5.93,5.93,0,0,1,76.85,80,9.83,9.83,0,0,1,73,81a9.78,9.78,0,0,1-3.86-1,5.91,5.91,0,0,1-3.18-3.17A9.83,9.83,0,0,1,65,73V32.48a12.26,12.26,0,0,0-7.55-11.31,11.26,11.26,0,0,0-4.26-.92,14.3,14.3,0,0,0-3.59.41,12.56,12.56,0,0,0-2.94,1.21,12.3,12.3,0,0,0-2.22,1.65,12,12,0,0,0-1.8,2.09,12,12,0,0,0-1.8-2.09,12.3,12.3,0,0,0-2.22-1.65,12.35,12.35,0,0,0-9.27-1.21,11.75,11.75,0,0,0-2.84,1.16,12.28,12.28,0,0,0-2.32,1.7,12,12,0,0,0-1.8,2.09,12,12,0,0,0-1.8-2.09,12,12,0,0,0-5.16-2.86,13.82,13.82,0,0,0-3.47-.41A11.38,11.38,0,0,0,8,21M81.63,81.64A12.19,12.19,0,0,0,85.22,73V0H0V73a12.08,12.08,0,0,0,.93,4.69,11.86,11.86,0,0,0,2.66,4,11.86,11.86,0,0,0,4,2.66,12.08,12.08,0,0,0,4.69.93,12.26,12.26,0,0,0,11.31-7.55A12.06,12.06,0,0,0,24.48,73V32.48a9.93,9.93,0,0,1,1-3.86,6,6,0,0,1,3.18-3.18,9.93,9.93,0,0,1,3.86-1,9.93,9.93,0,0,1,3.87,1,6,6,0,0,1,3.18,3.18,9.93,9.93,0,0,1,1,3.86V78.84a3.48,3.48,0,0,0,0,.46,1.7,1.7,0,0,0,.62,1.07,2.06,2.06,0,0,0,1.5.62,2,2,0,0,0,1.49-.62,2,2,0,0,0,.62-1.5V32.48a10,10,0,0,1,1-3.86,6,6,0,0,1,3.18-3.18,9.93,9.93,0,0,1,3.86-1,9.93,9.93,0,0,1,3.87,1,6,6,0,0,1,3.17,3.18,9.78,9.78,0,0,1,1,3.86V73a12.08,12.08,0,0,0,.93,4.69,12.38,12.38,0,0,0,6.62,6.62,12.08,12.08,0,0,0,4.69.93,12.13,12.13,0,0,0,8.65-3.58" />
					</svg>
				
				</div>
				<div class="div-home" >
					<p>TOMU STUDIO</p>
					<p>IS A CREATIVE OFFICE</p>
					<p>BASED IN BRUSSELS</p>
					<p>A CITY WE LOVE</p>
					<div class="we-do" style="text-align: left; margin-bottom: 40px;">WE DO <br>
					<p class="on-screen spin" > <a href=""><span id="spin"></span></a>  </p>
				<!-- 	<p class='center'>

					  <p class="awesome">ISN'T THIS AWESOME!</p>

					</p> -->
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

			$('.header-tomu-container').css('color', 'black');
			$('.header-tomu-container a').css('color', 'black');
			$('.header-tomu-container svg').css('color', 'black');
			var href =  $('.home-url').parent().attr('data-permalink');

			if( !this.$store.state.is_history ) this.pushHistory( href )

			$('.href-home-logo').attr('href', href); 
			$('a[href="'+ href +'"]').css('color', 'black');

		})

			$('[data-state="current"] .spin').on('leave-screen', () => {})


		},

		beforeDestroy(){

			this.on = false
			console.log('beforeDestroy');

		}

	}

</script>

<style type="text/css">


	
	.center {
	  
	  margin: 0 auto;
	  
	}

	.awesome {
	  
	  font-family: futura;
	  font-style: italic;
	  
	  width:100%;
	  
	  margin: 0 auto;
	  text-align: center;
	  
	  color:#313131;
	  font-size:45px;
	  font-weight: bold;
	  position: absolute;
	  -webkit-animation:colorchange 20s infinite alternate;
	  
	  
	}

	@-webkit-keyframes colorchange {
	  0% {
	    
	    color: blue !important;
	  }
	  
	  10% {
	    
	    color: #8e44ad;
	  }
	  
	  20% {
	    
	    color: #1abc9c;
	  }
	  
	  30% {
	    
	    color: #d35400;
	  }
	  
	  40% {
	    
	    color: blue;
	  }
	  
	  50% {
	    
	    color: #34495e;
	  }
	  
	  60% {
	    
	    color: blue;
	  }
	  
	  70% {
	    
	    color: #2980b9;
	  }
	  80% {
	 
	    color: #f1c40f;
	  }
	  
	  90% {
	 
	    color: #2980b9;
	  }
	  
	  100% {
	    
	    color: pink;
	  }
	}


	.home-section{

		position: relative;
	}

	.div-lang{

		font-weight: bold;
		display: flex;
		flex-direction: column;
		width: 100vw;
		margin-left: -275px;
		margin-top: -13vw;

	}

	.spin a{

		text-decoration: none;
	}

	#spin:before{
		-webkit-animation:spin 20s infinite alternate;
	}

	@-webkit-keyframes spin {
		14% {content: "DESIGN"; color:#bdb5d9;}
		28% {content: "SPACES"; color:#fddaa7;}
		42% {content: "INTERIOR"; color:#e6b4e6;}
		57% {content: "FURNITURE"; color:#86dadc;}
		71% {content: "HOSPITALITY"; color:#e6b1c2; }
		85% {content: "RESTAURANT"; color:#dbcdbe;}
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
	.div-home{
		font-weight: 700;
		font-size: 4vw;
	}

	.home-section p{
		all: unset;
		text-align: left;
		line-height: 95%;
	}

	.we-do{
		line-height: 100%;
		display: flex;
		flex-direction: row;
		
	}
	
	.div-home{

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

		.div-home{
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

		.div-lang{

			margin-left: -70px;
			margin-top: -250px;
		}
	}
	

	@media screen and ( max-width: 740px ){

		.lang-item{

			/*padding-left: 0px !important;*/
			text-align: left;
		}

		.logo-mobile{

			position: absolute;
			top: 30px;
			width: 70px;
		}

		#contact .contact-tomu{

			min-height: auto !important;
		}

		.div-lang{

			font-weight: bold;
			display: flex;
			flex-direction: column;
			width: auto;
			margin-left: -30px;
			margin-top: -150px;
			align-items: center;

		}

		.lang-item:nth-child(16n+2){

			padding-left: 15px;

		}

		.lang-item:nth-child(16n+3){

			padding-left: 30px;

		}

		.lang-item:nth-child(16n+4){

			padding-left: 60px;

		}

		.home-section{

			width: calc( 100% - 60px );
			padding-left: 30px;

		}

		.div-home{

			font-size: 30px;
		}

		.we-do{
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