<template>
	<div id="header" class="header-1">
			<div class="clear"></div>
			<div id="header-logo"><Acf options="logo"/></div>
			<!-- <div id="header-menu"></div> -->
			<div id="right-panel">
			
					<ul>
					<div class="headerButton" style="pointer-events: auto; width: 260px; height: 400px;">
					<div class="headerMore"><span></span><span></span><span></span></div>
					<div class="headerBody">
					<ul class="topBody">
					<li class="items"><a href="#">Projects</a></li>
					<li class="items"><a href="#">Services</a></li>
					<li class="items"><a href="#">Studio</a></li>
					<li class="items"><a href="#">Clients</a></li>
					<li class="items"><a href="#">Contact</a></li>
					<li class="btn"><a href="#"><i class="fas fa-bars"></i></a></li>
					</ul>
					<ul class="bottomBody">

					<li>GET IN TOUCH</li><br>
					<li><a href="tel:88002011486">8 800 201 1486</a></li>
					<li><a href="mailto:hello@roky.rocks">hello@roky.rocks</a></li><br>
					<li><a href="https://www.instagram.com/rokystudio/" target="_blank">Instagram</a></li>
					<li><a href="https://www.facebook.com/rokystudio/" target="_blank">Facebook</a></li>
					<li><a href="https://www.linkedin.com/company/rokyrocks/" target="_blank">LinkedIn</a></li>

					</ul>
					</div>
					</div>

					</ul>
					
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

		// console.log(Acf=>options);

		$('.header-1').css('background-color', 'black');

		console.log('header', this.wp);

		var height_origin_taille = $('.headerButton').height()

		console.log(height_origin_taille + 'taille_total');

		// var height_petit_point = $(this).parent('.headerButton').height()

		var height_total = $('.headerMore').height()

		// var animation_rajouter =  parseInt(height_petit_point) - parseInt(height_total)

		$('.headerButton').css('overflow', 'hidden');

		$('.headerButton').addClass('close')

		$('.headerButton').height(height_total);

		var width_button =   parseInt($('.headerMore').width()) + parseInt($('.headerMore').css('padding-left')) + parseInt($('.headerMore').css('padding-right'))

		var width_origin_taille = $('.headerBody').width()

		console.log(width_origin_taille);

		$('.headerButton').width(width_button);

		// $('.headerBody').find('a').css('color', 'red');

		var color = $('.headerBody').css('background-color');

		$('.headerBody').find('a').css('color', color);

		$('.headerButton').css('backdrop-filter', 'blur(20px)');
		// backdrop-filter: blur(20px);


		$('.headerMore').click(function() {

		// var height_petit_point = $(this).parent('.headerButton').height()

		var height_total = $(this).height()

		// var animation_rajouter =  parseInt(height_petit_point) - parseInt(height_total)

		console.log($('.headerButton').width());

		$('.headerBody').find('a').css('color', color);

		$('.headerButton').css('overflow', 'hidden');

		if ( $('.headerButton').hasClass( 'close' )) {

		$('.headerBody').find('a').css('color', 'white');
		// .animate({"color":  'white !important'  }, "fast", "swing");

		$('.headerButton').removeClass('close')

		$('.headerButton').addClass('open')

		$('.headerButton').animate({"width":  width_origin_taille  }, "fast", "swing");

		setTimeout(function() {

		$('.headerButton').animate({"height":  height_origin_taille  }, "fast", "swing");

		}, 400);



		$('.headerBody').find('ul').fadeTo('show/400/fast', 200, function() {

		});

		}

		else {  

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

		});


		var padd_ori =  parseInt( $('.headerMore').css('padding-left') ) 

		var padd =  parseInt( $('.headerMore').css('padding-left') ) + 2


		$('.headerMore').hover(function() {


		$('.headerMore').animate({"padding-left": padd + 'px', "padding-right": padd + 'px'  }, "fast", "swing");


		}, function() {

			$('.headerMore').animate({"padding-left": padd_ori + 'px', "padding-right": padd_ori + 'px'  }, "fast", "swing");

		});

		var reload = true;


		$(window).scroll(function() {

			var scroll = $(window).scrollTop();

		if (scroll == '0') {

			$('.logo').css('display', 'flex');
		}
		if (scroll >= '100') {

			if (reload == true) {

				reload = false

			}
			$('.logo').css('display', 'none');

		}

		});

		
	}
}
</script>

<style>

.headerButton{
    
	position: fixed;
	left: auto;
	top: 20px;
	right: 20px;
	border-radius: 15px;
	background-color: hsla(0, 0%, 100%, 0.37);
    width: 30px; 
	
}

.headerMore span {
    width: 5px;
    height: 5px;
    -webkit-border-radius: 50%;
    border-radius: 50%;
    background-color: #fff;
    display: block;
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
.headerBody {
    /*position: absolute;*/
    left: 30px;
    top: 30px;
    width: 200px;
    height: 340px;
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
    /* justify-content: space-between; */
}

.headerBody .topBody li {

    list-style: none;
    font-size: 1.2rem;
    line-height: 1.5;
    text-align: left;

}

.headerBody .topBody li a{

  font-weight: 400;}

.topBody{

    padding-left: 25px;
      padding-top: 30px;

}

.bottomBody{

    padding-left: 25px;    
}


.bottomBody{


}


</style>