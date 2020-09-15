<template>
	<div id="header" class="header-greaty">
		<div class="clear"></div>
		<div id="header-logo"><a href="http://localhost/template_greaty/wordpress/"><Acf field="logo"/></a></div>
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
						<li><a href="tel:+32 (0) 471 72 18 08">+32 (0) 471 72 18 08</a></li>
						<li><a href="mailto:i[at]greaty.be">i[at]greaty.be</a></li><br>
						<li><a href="https://www.instagram.com/greaty_studio/" target="_blank">Instagram</a></li>
						<li><a href="https://www.facebook.com/greaty.be" target="_blank">Facebook</a></li>
						<li><a href="https://www.linkedin.com/company/9386991/admin/" target="_blank">LinkedIn</a></li>
						<!-- <li><a href="https://www.linkedin.com/company/rokyrocks/" target="_blank">GitHub</a></li> -->


						
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
        
        // console.log(this.wp.menus);

		this.$emit('template_mounted', this)

		// $('.header-greaty').css('background-color', 'rgb(25, 26, 28)');

		var height_origin_taille = $('.headerButton').outerHeight()

		var height_total = $('.headerMore').outerHeight()
 

		// console.log(height_total);

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

		// $('.headerButton').css('backdrop-filter', 'blur(20px)');
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

				$('.headerButton').animate({"height":  height_origin_taille  }, "fast", "swing");

			}

			else {

			close()

			}

		function close(){

			
			$('.headerBody').find('a').animate({"color":  color  }, "fast", "swing");

			$('.headerButton').removeClass('open')

			$('.headerButton').addClass('close')

			$('.headerBody').find('ul').fadeTo('hide/400/fast', 10, function() {

			});


			$('.headerButton').animate({"height":  height_total  }, "fast", "swing");


			$('.headerButton').animate({"width":  width_button  }, "fast", "swing");
	



		}

		$(document).on('click', function() {

			// console.log(event.target);

		if($(event.target).parents('.headerButton').length != 0) {
		// return false; // if you want to ignore the click completely
		// return; // else

		// console.log('1');
		}
		else {
		close()

		}

		});

		});
			$('.current-menu-item').find('a').css({
					borderBottom: '1px solid white',
				});

			// $('.menu-item').click(function() {
			// 	setTimeout(function() {

			// 		$('.current-menu-item').find('a').css({
			// 				borderBottom: '1px solid white',
			// 			});

			// 	}, 10);
				
			// });

				

			
			


	
		// click external than the parents class menu function close



		// $(document).click(function(){
		//     var x = $(this).children('selector')();
		//     if (!x.is('body')) {
		//         console.log("It has it!");
		//     } else {
		//         console.log("It does not have it!");
		//     }
		// });

		// $(document).click(function(event) {

		// 	// $(this)
			
		// 	if ($(event.srcElement).has('.bottomBody')) {

		// 	// 	console.log("PAS FErMER");

		// 	}
		// 	else{



		// 	// 	close()
		// 		console.log("n'a pas");
		// 	}

		// 	console.log($(this));


		// });

		// click external than the parents class menu function close

		

		// $('.headerMore').hover(function() {


		// $('.headerMore').animate({"justify-content": 'space-between' }, "fast", "swing");


		// }, function() {

		// 	$('.headerMore ').animate({"justify-content": 'center' }, "fast", "swing");

		// });

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

<style>



	#header-logo img{

		height: 70px;
	}


		@media (min-width: 1100px) {

			#header-logo {

				padding-top: 25px;
				height: 70px;	

			}

			.header-greaty{

				margin: 0px 70px;

			}

			.headerButton{
				/*padding-right: 30px;*/
				top: 25px;

			}
			.bottomBody li {
				font-size: 14px;
				padding-bottom: 5px;
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

			padding-left: 30px !important;
			padding-top: 25px;
			height: 70px;	

		}

		.bottomBody{
			
			font-size: 14px;
			padding-right: 25px;
		}

		.bottomBody li {
			font-size: 14px;
			padding-bottom: 10px;
		}

			.headerButton{

			right: 35px !important;
			}

		}



.bottomBody li {

	margin-bottom: 3px;
}

.header-greaty{
	/*position: fixed;*/
}
.menu{
	
	padding-left: 0px !important;

}

/*li{
	color: #e1e1e1;;
}*/

.headerButton{
    
	position: fixed;
	left: auto;
	top: 20px;
	right: 40px;
	border-radius: 15px;
	background-color: #6e6e6e !important;
	width: auto;
    min-width: 30px;
    z-index: 10000;
    display: flex;
    flex-direction: row;
    align-content: center;
    width: 45px ;

}

.headerMore span {
    width: 5px;
    height: 5px;
    -webkit-border-radius: 50%;
    border-radius: 50%;
    background-color: #fff;
    display: block;
    font-family: 'Montserrat', sans-serif;

/*    -webkit-transition: .15s cubic-bezier(.445,.05,.55,.95);
    -o-transition: .15s cubic-bezier(.445,.05,.55,.95);
    transition: .15s cubic-bezier(.445,.05,.55,.95);*/
}

.headerMore {

    width: 27px;
    height: 27px;
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

	/*justify-content: center;*/
	transition: ease;
	/*transition-property: all;*/
	/*transition-delay: 1s;*/
	animation: moveAnim .7s alternate 1;
	
}
@keyframes moveAnim {
  from { justify-content: space-between }
  to{ justify-content: center }
}

.headerMore :nth-child(2){

	margin: 3px;
}
.headerBody {
    /*position: absolute;*/
    left: 30px;
    top: 30px;
    /*min-width: 200px;*/
    width: auto;
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
    /*-webkit-justify-content: space-between;*/
    -ms-flex-pack: justify;
    text-align: left;
    /* justify-content: space-between; */
}

.headerBody .topBody li {

    list-style: none;
    font-size: 1.8rem;
    line-height: 1.5;
    text-align: left;
    text-decoration: none;
    font-family: 'Montserrat', sans-serif;
    font-weight: lighter;
    
}


.headerBody .topBody li a:hover {
    opacity: .75;
}

li{

color: #e1e1e1;;
font-family: 'Montserrat', sans-serif;
font-weight: lighter;
}

.headerBody .topBody li a{

  font-weight: 200;
  text-decoration: none;
  font-family: 'Montserrat', sans-serif;
  font-weight: lighter;
}

.topBody{

padding-left: 25px;
padding-right: 75px;
padding-top: 30px;
padding-bottom: 10px;

}

.bottomBody{

    padding-left: 25px;
    /*padding-bottom: 25px;*/
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
	font-family: 'Montserrat', sans-serif;
	font-weight: lighter;
	
}

 .menu ul{

	list-style-type: none !important;
	font-family: 'Montserrat', sans-serif;
	font-weight: lighter;
	
}



</style>

<style scoped>
	
	a{

		text-decoration: none;
	}
</style>