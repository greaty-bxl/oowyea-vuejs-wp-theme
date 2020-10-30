<template>
	<div id="header" class="header-greaty">
        <header>
			<nav id="main-navbar-1" class="navbar navbar-default navbar-fixed-top">
			<div class=" navbar-container">
			<a class="logo-link"><Acf field="logo" /></a>

			<div id="navbar" class="navbar-collapse collapse">
				<div class="menu_link" v-html="wp.menus['burger-menu']" >
				</div>
			</div>

	<div class="icon button-header close-simple">
	<div class="burger"></div>
	</div>

			</div>
			</nav>
			</header>
		<div class="clear"></div>

	</div>
</template>
	
<script>
// import is from "is_js"
import Acf from "Organisms/acf"
import smart_fonts from 'Libs/smart-fonts.js';



export default {

	components:{
		Acf
	},

	mounted(){

	var $ = this.$

	this.$emit('template_mounted', this)

	var width = $(window).width()

	$(window).on('resize', function(){
		setTimeout(function() {

		width = $(window).width()

		}, 50);

	});

	$('.menu-item').click(function() {

		if ($(this).hasClass('close-simple')){

			console.log('qhsd');
		}

		else{

			$('.menu_link').animate({
				// targets: $('.menu_link').target,
				left: '100vw',
				easing: 'easeInOutSine',
				duration: 200,
			});


			$('.button-header').removeClass('open-simple')
			$('.button-header').removeClass('active')
			$('.button-header').addClass('close-simple')
		}

	});

	$('.button-header').click(function() {

		$(this).toggleClass('active');

		if ($(this).hasClass('close-simple')) {

			$(this).removeClass('close-simple')

			$(this).addClass('open-simple')

		

			if ( width > 1100 ) {

				$('.menu_link').animate({
					// targets: $('.menu_link').target,
					left: '70vw',
					easing: 'easeInOutSine',
					duration: 200,
				});

			}
			else{

				$('.menu_link').animate({
					
						left: '0',
						easing: 'easeInOutSine',
						duration: 200,
					});
			}

		}
	
		else {

			$('.menu_link').animate({
				// targets: $('.menu_link').target,
				left: '100vw',
				easing: 'easeInOutSine',
				duration: 200,
			});


			$(this).removeClass('open-simple')
			$(this).addClass('close-simple')

		}

	});
	
// add link home to logo

   var href_home = $('.menu-item-home').find('a').attr('href');

   console.log(href_home);

   $('.logo-link').attr('href', href_home);


// end link home to logo


	smart_fonts({
		'.menu-item-type-post_type' : 22,
		
	})

	}

}
</script>

<style type="text/css">
	@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');



	body *{

		font-family: Montserrat,sans-serif!important;
		/*position: absolute;*/
	}
	nav{
		position: fixed;
		/*z-index: 1000;*/
		/*width: 100%;*/
	}

	.navbar-collapse a{

		color: #70625B;
	}
	.navbar-collapse ul{

		display: flex;
		flex-direction: row;
	}
	nav img{

		height: 50px !important;
	}
	nav ul li {

		/*line-height: 0;*/
		margin-bottom: 15px;
		margin-left: 10px;
		margin-right: 10px;
		font-size: 18px !important;
		list-style: none;
	}

	#navbar div {

	}
	.menu{
		margin-top: 0px;
	}
	nav ul li a{

		color: #FFFFFF;
		text-decoration-line: none;

	}
	.button-header{
		color: black;
		font-size: 50px;
		/*display: none;*/
	}


	.menu{
		padding-left: 0px;

	}

		

	nav img{

		height: 50px !important;

	}

	.button-header{

		display: block;
		/*z-index: 1000;*/
	}

	.menu_link{

		width: 30vw;
		background-color: white;
		left: 100vw;
		height: 100vh;
		bottom: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #70625b;
		/*z-index: 10000;*/

	}


	.menu{

		flex-direction: column !important;
		display: flex;
		align-items: center;
		justify-content: center;
		left: 50vw;
		
	}

	.menu a {

		color: white !important;

	}

			#navbar div {
				position: fixed;
				/*display: none*/
				/*top: 50px;*/
			}
		@media screen and (max-width: 1100px) and (min-width: 600px) {

			.menu_link{

				min-width: 100vw;

			}

			nav ul li{

				font-size: 20px !important;
			}

			nav{
				position: static;
				/*z-index: 1000;*/
				margin: 0px !important; 
			}

			nav img
			{
				max-width: 100%;
				position: absolute;
				top: 70px !important;
				left: 70px !important;
				margin: 0px !important;
			}

			nav .icon
			{

				position: fixed !important;
				left: calc( 100% - 115px ) !important;
				left: 100%;
				top: 70px;

			}

			.menu_link{

				width: 100vw;
			}

		}


		@media screen and (max-width: 600px){

			nav{
				position: static;
				z-index: 1000;
				margin: 0px !important; 
			}

			nav img
			{
				max-width: 100%;
				position: absolute;
				top: 30px !important;
				left: 30px !important;
				margin: 0px !important;
			}

			nav .icon
			{

				position: fixed !important;
				left: calc( 100% - 75px ) !important;
				left: 100%;
				top: 30px;

			}

			
			.menu_link{

				width: 100vw;
			}



		}





		.menu li:nth-child(9){

			padding-bottom: 50px;
		}


</style>

<style scoped>
 
	ul{

	display: flex;
	flex-direction: row;

	}
	.navbar-container{
		display: flex;
		justify-content: space-between;
		width: 100%;

	}
	nav{
		margin:  50px 70px;
		width: calc(100% - 140px);
		/*background-color: black;*/
	}

	#navbar{

		display: flex;
		justify-content: center;
		align-content: center;
		flex-direction: row;
	}
		@media screen and (max-width: 600px) {

			nav{
			margin:  30px 30px;
			width: calc(100% - 60px);
			}
	

			

			.icon{

				margin-right: 20px;
			}

		}

		/*@media screen and (max-width: 600px) {*/



		.icon{

		position: absolute;
		display: block;
		left: calc( 100% - 45px );
		width: 45px;
		height: 40px;
		cursor: pointer;
		background-color: #70625b;
		z-index: 11000;
		
		/*margin-top: 20px;*/
		}
		.burger{
		width: 30px;
		height: 4px;
		background-color: #fff;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
		box-shadow: 0 2px 5px rgba(0,0,0,0.2);
		transition: 0.5s;
		}
		.burger::before,
		.burger::after{
		content: '';
		position: absolute;
		width: 30px;
		height: 3.3px;
		left: 0;
		background: #fff;
		box-shadow: 0 2px 5px rgba(0,0,0,0.2);
		transition: 0.5s;
		}
		.burger::before{
		top: -8px;
		}
		.burger::after{
		top: 9px;
		}

		.icon.active .burger{
		background: rgba(0,0,0,0);
		}
		.icon.active .burger::before{
		top: 0;
		transform: rotate(45deg);
		}
		.icon.active .burger::after{
		top: 0;
		transform: rotate(135deg);
		}


		
   
</style>

