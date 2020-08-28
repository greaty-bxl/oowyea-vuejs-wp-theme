<template>
	<div id="header" class="header-greaty">
		<div class="clear"></div>
		<div id="header-logo"><Acf field="logo"/></div>
		<!-- <div id="header-menu"></div> -->
		<div id="right-panel">
			<div class="headerButton" style="pointer-events: auto;">
				<div class="headerMore"><span></span><span></span><span></span></div>
				<div class="headerBody">
					<div class="topBody">
						<div v-html="wp.menus['burger-menu']" ></div>
					</div>
					<ul class="bottomBody">
						<li>ENTRER EN CONTACT</li><br>
						<li><a href="tel:88002011486">8 800 201 1486</a></li>
						<li><a href="mailto:hello@roky.rocks">hello@roky.rocks</a></li><br>
						<li><a href="https://www.instagram.com/rokystudio/" target="_blank">Instagram</a></li>
						<li><a href="https://www.facebook.com/rokystudio/" target="_blank">Facebook</a></li>
						<li><a href="https://www.linkedin.com/company/rokyrocks/" target="_blank">LinkedIn</a></li>
					</ul>
				</div>
			</div>		
		</div>
		<div class="clear"></div>
	</div>
</template>

<script>
import Acf from 'Organisms/acf.vue'


export default {
	components:{
		Acf
	},
	data(){
		return {
			sideEl : ''
		}
	},
	mounted(){
		var $ = this.$


		$('.header-greaty').css('background-color', 'rgb(25, 26, 28)');

		// console.log('header', this.wp.acf);

		var height_origin_taille = $('.headerButton').height()



		var height_total = $('.headerMore').height()

		// var animation_rajouter =  parseInt(height_petit_point) - parseInt(height_total)

		$('.headerButton').css('overflow', 'hidden');

		$('.headerButton').addClass('close')

		$('.headerButton').height(height_total);

		var width_button =   parseInt($('.headerMore').width()) + parseInt($('.headerMore').css('padding-left')) + parseInt($('.headerMore').css('padding-right'))

		var width_origin_taille = $('.headerBody').width()

		$('.headerButton').width(width_button);

		// $('.headerBody').find('a').css('color', 'red');

		var color = $('.headerBody').css('background-color');

		$('.headerBody').find('a').css('color', color);

		$('.headerButton').css('backdrop-filter', 'blur(20px)');
		// backdrop-filter: blur(20px);


		$('.headerMore').click(function() {

			var height_total = $(this).height()

			$('.headerBody').find('a').css('color', color);

			$('.headerButton').css('overflow', 'hidden');

			if ( $('.headerButton').hasClass( 'close' )) {

			$('.headerBody').find('a').css('color', 'white');
			// .animate({"color":  'white !important'  }, "fast", "swing");

			$('.headerButton').removeClass('close')

			$('.headerButton').addClass('open')

			$('.headerButton ').css('width', 'a');

			$('.headerButton').animate({"width":  width_origin_taille  }, "fast", "swing");

			setTimeout(function() {

			$('.headerButton').animate({"height":  height_origin_taille  }, "fast", "swing");

			}, 400);

			$('.headerBody').find('ul').fadeTo('show/400/fast', 200, function() {

			});

			// timer_close_menu = "";


			// //hover timer animation

			// var timer_close_menu ;

			// console.log(timer_close_menu);

			// $(".headerButton").hover(function() {

			// 	if ($(".headerButton").hasClass('open')) {

			// 		timer_close_menu = setTimeout(function() {

			// 		close()

			// 		}, 2000 );
			// 	}
			// 	else{

			// 		timer_close_menu = "";
			// 	}


			// }, function() {

			// 			timer_close_menu = setTimeout(function() {

			// 		close()

			// 		}, 2000 );
		
			// });


		}

		else { 

			close()

		}

		function close(){

			
			$('.headerBody').find('a').animate({"color":  color  }, "fast", "swing");

			$('.headerButton').removeClass('open')

			$('.headerButton').addClass('close')

			$('.headerBody').find('ul').fadeTo('hide/400/fast', 200, function() {

			});

			$('.headerButton').animate({"height":  height_total  }, "fast", "swing");

			setTimeout(function() {

			$('.headerButton').animate({"width":  width_button  }, "fast", "swing");

			}, 150);

		}

		// click external than the parents class menu function close
      
			// $(function() {
			// 	$(".headerButton").on("click", function() {
			// 	// e.stopPropagation()
			// 	});
			// 	$(document).on("click", function(e) {
			// 	if ($(e.target).is(".headerButton") === false) {

			// 		if ($(".headerButton").hasClass('open')) {

			// 			close()
			// 		}
					
			// 	}
			// 	});
			// });

		// click external than the parents class menu function close



		});






		$('.headerMore').hover(function() {


		$('.headerMore').animate({"justify-content": 'space-between' }, "fast", "swing");


		}, function() {

			$('.headerMore ').animate({"justify-content": 'center' }, "fast", "swing");

		});

		// var reload = true;


		// $(window).scroll(function() {

		// 	var scroll = $(window).scrollTop();

		// if (scroll == '0') {

		// 	$('.logo').css('display', 'flex');
		// }
		// if (scroll >= '100') {

		// 	if (reload == true) {

		// 		reload = false

		// 	}
		// 	$('.logo').css('display', 'none');

		// }

		// });

		
	}
}
</script>

<style  >

		@media (min-width: 1100px) {

			#header-logo {

				/*padding-left: 70px;*/
				padding-top: 25px;
				height: 70px;	

			}

			.header-greaty{

				margin: 0px 70px;

			}

			.headerButton{
				top: 25px;

			}


		}

		@media screen and (max-width: 1100px) and  (min-width: 600px) {


			.header-greaty{

				margin: 0px 70px;

			}

			#header-logo{

				padding-top: 40px;

			}
			.headerButton{

				top: 40px !important;
			}

		}

		@media (max-width: 600px) {


			#header-logo img{

			padding-left: 35px !important;
			padding-top: 25px;
			height: 70px;	

		}




			.headerButton{

			right: 35px !important;
			}

		}





.header-greaty{
	/*position: fixed;*/
}
.menu{
	
	padding-left: 0px !important;

}

/*li{
	color: white;
}*/

.headerButton{
    
	position: fixed;
	left: auto;
	top: 20px;
	right: 40px;
	border-radius: 15px;
	background-color: hsla(0,0%,100%,.2);
	width: auto;
    min-width: 30px;
    z-index: 10000;
    display: flex;
    flex-direction: row;
    align-content: center;

	
}

.headerMore span {
    width: 5px;
    height: 5px;
    -webkit-border-radius: 50%;
    border-radius: 50%;
    background-color: #fff;
    display: block;
    font-family: 'Open Sans', regular;

/*    -webkit-transition: .15s cubic-bezier(.445,.05,.55,.95);
    -o-transition: .15s cubic-bezier(.445,.05,.55,.95);
    transition: .15s cubic-bezier(.445,.05,.55,.95);*/
}

.headerMore {

    width: 30px;
    height: 30px;
    position: absolute;
    top: 0;
    right: 0;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;
}
.headerMore:hover{

	justify-content: center;
	animation-timing-function: ease;
	transition-delay: 0.5s;
}

.headerMore :nth-child(2){

	margin: 0 px;
}
.headerBody {
    /*position: absolute;*/
    left: 30px;
    top: 30px;
    min-width: 200px;
    width: auto;/* height: 340px; */
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    text-align: left;
    /* justify-content: space-between; */
}

.headerBody .topBody li {

    list-style: none;
    font-size: 2.1rem;
    line-height: 1.5;
    text-align: left;
    text-decoration: none;
    font-family: 'Open Sans', regular;
    font-weight: lighter;
    
}

li{

color: white;
font-family: 'Open Sans', regular;
font-weight: lighter;
}

.headerBody .topBody li a{

  font-weight: 200;
  text-decoration: none;
  font-family: 'Open Sans', regular;
  font-weight: lighter;
}

.topBody{

padding-left: 25px;
padding-right: 75px;
padding-top: 30px;
padding-bottom: 20px;

}

.bottomBody{

    padding-left: 25px;
    padding-bottom: 25px;
    list-style-type: none;
}

.header-greaty{

 display: flex;

}

/*@media (max-width: 1250px) { ... }*/
#header-logo {
	position: absolute;
}



.menu a{

	list-style-type: none !important;
	font-family: 'Open Sans', regular;
	font-weight: lighter;
	
}

 .menu ul{

	list-style-type: none !important;
	font-family: 'Open Sans', regular;
	font-weight: lighter;
	
}



</style>