<template>
	<div id="header" class="header-greaty">
        <header>
			<nav id="main-navbar-1" class="navbar navbar-default navbar-fixed-top">
			<div class=" navbar-container">
			<img class="navbar-brand" src="http://greaty.digital.brussels/wp-content/uploads/2020/10/logo-brun.svg">
			<div id="navbar" class="navbar-collapse collapse">
			<div class="menu_link" v-html="wp.menus['burger-menu']" ></div>
			</div>
				<div class="button-header close-simple">
					<p>X</p>
				</div>
			</div>
			</nav>
			</header>
		<div class="clear"></div>

	</div>
</template>

<script>
// import Acf from 'Organisms/acf.vue'
// import anime from 'animejs/lib/anime.es.js';


export default {


	mounted(){

		var $ = this.$

		this.$emit('template_mounted', this)

	$('.button-header').click(function() {

		if ($(this).hasClass('close-simple')) {

			$(this).removeClass('close-simple')

			$(this).addClass('open-simple')

			$('.menu_link').animate({
			
				left: '0',
				easing: 'easeInOutSine',
				duration: 200,
			});


		}
	
		else {

			$('.menu_link').animate({
				// targets: $('.menu_link').target,
				left: '50vh',
				easing: 'easeInOutSine',
				duration: 200,
			});


			$(this).removeClass('open-simple')
			$(this).addClass('close-simple')

		}

	});

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
		z-index: 1000;
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

		height: 70px !important;
	}
	nav ul li {

		/*line-height: 0;*/
		margin-bottom: 15px;
		margin-left: 10px;
		margin-right: 10px;
		font-size: 15px;
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
		color: white;
		font-size: 50px;
		display: none;
	}


	.menu_link{

		display: block;
	}

		@media screen and (max-width: 600px){

			nav img{

				height: 50px !important;
			}

			.button-header{

				display: block;
			}

		/*	.menu_link{

				display: none;
			}*/

			.menu{

				flex-direction: column !important;
				top: 50px;
				left: 50vw;
			}

			#navbar div {
				position: absolute;
				top: 50px;
			}
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
	/*		.menu_link{

			left: 50vh;

			}*/
		}


   
</style>

