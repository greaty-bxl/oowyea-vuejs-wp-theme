<template>
	<div id="header" class="header-greaty">
        <header>
			<nav id="main-navbar-1" class="navbar navbar-default navbar-fixed-top">
			<div class=" navbar-container">
			<img class="navbar-brand" src="http://localhost/template_greaty/wp-content/uploads/2020/10/logo-blanc.svg">
			<div id="navbar" class="navbar-collapse collapse">
			<div v-html="wp.menus['burger-menu']" ></div>
			</div>

			</div>
			</nav>
			</header>
		<div class="clear"></div>

	</div>
</template>

<script>
// import Acf from 'Organisms/acf.vue'


export default {


	mounted(){

		var $ = this.$

		this.$emit('template_mounted', this)

		$(window).scroll(function () {
			var sc = $(window).scrollTop()
			if (sc > 150) {
				$("#main-navbar-1").addClass("navbar-scroll")
			} 
			else {
				$("#main-navbar-1").removeClass("navbar-scroll")
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
		position: absolute;
		/*width: 100%;*/
	}

	.navbar-collapse a{

		color: #FFFFFF;
	}
	.navbar-collapse ul{

		display: flex;
		flex-direction: row;
	}
	nav img{

		height: 70px;
	}
	nav ul li {

		line-height: 0;
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
	}

	#navbar{

		display: flex;
		justify-content: center;
		align-content: center;
		flex-direction: row;
	}

     @media screen and (max-width: 600px) {

		nav{
		margin:  50px 30px;
		width: calc(100% - 60px);
		}
     }

   
</style>

