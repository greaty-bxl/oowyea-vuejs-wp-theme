<template>
	<div id="header" class="header-greaty">
		<div class="clear"></div>

		<div id="right-panel">

			<div class="santos-navbar">

				<div class="icon button-header close-simple">
					<div class="burger"></div>
				</div>

				<div class="logo-santos">
					<a :href="this.wp.options.siteurl"><Acf field="logo"/></a>
				</div>

				<ul class="parent">
					<div v-for="child in wp.menus" :key="child.ID" >


						<li v-if="child.ID > -1"   class="dropdown grandparent"  >

							<div v-if="child.child">

								<div class="li-espace-between">

								<a class="ligne-animation" :href="child.url" v-html="child.title">Mouse over me</a>

								<svg aria-hidden="true" focusable="false" role="presentation" class="icon-arrow-right" viewBox="0 0 20 38"><path d="M15.932 18.649L.466 2.543A1.35 1.35 0 0 1 0 1.505c0-.41.155-.77.466-1.081A1.412 1.412 0 0 1 1.504 0c.41 0 .756.141 1.038.424l16.992 17.165c.31.283.466.636.466 1.06 0 .423-.155.777-.466 1.06L2.542 36.872a1.412 1.412 0 0 1-1.038.424c-.41 0-.755-.141-1.038-.424A1.373 1.373 0 0 1 0 35.813c0-.423.155-.776.466-1.059L15.932 18.65z" fill="#726D75" fill-rule="evenodd"></path>
								</svg>

								</div>

								<ul  class="dropdown-content">


									<li class="sousmenus childli dropdown__title li-espace-between">

										<svg aria-hidden="true" focusable="false" role="presentation" class="icon-arrow-left close-simple" viewBox="0 0 20 38"><path d="M4.068 18.649l15.466 16.105c.31.283.466.629.466 1.039 0 .41-.155.77-.466 1.08a1.412 1.412 0 0 1-1.038.424c-.41 0-.756-.141-1.038-.424L.466 19.708A1.373 1.373 0 0 1 0 18.648c0-.423.155-.776.466-1.059L17.458.424A1.412 1.412 0 0 1 18.496 0c.41 0 .755.141 1.038.424.31.282.466.636.466 1.06 0 .423-.155.776-.466 1.059L4.068 18.649z" fill="#726D75" fill-rule="evenodd"></path></svg>

										<a class="sousmenus" :href="child.url" v-html="child.title">Hello World!</a>

									</li>

									<div class="li-sousmenu" v-for="child2 in child.child" :key="child2.ID">
						
										<li class="sousmenus childli"> <a :href="child2.url" class="sousmenus" v-html="child2.title" >Hello World!</a></li>

									</div>
							
								</ul>	
							</div>



							<div v-else>
								<a class="ligne-animation" :href="child.url" v-html="child.title" >Mouse over me</a>
							</div>

						</li>


						<div  v-else >
						</div>
						

					</div>


					<div class="ligne-mobile">

						<a class="div-image-compte-mobile" href="">

						<div class="image-compte-mobile" >
						<span>

							<svg  class="icon-account"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
							viewBox="0 0 22.3 20.6" style="enable-background:new 0 0 22.3 20.6;" xml:space="preserve">
							<g fill-rule="nonzero">
							<path class="st0" d="M22.1,19.9c-0.9-2.1-2.4-3.9-4.3-5.3c-1.5-1-3.1-1.6-4.9-1.9c2.7-0.8,4.6-3.2,4.6-6.2c0-3.5-2.9-6.4-6.4-6.4
							S4.7,3,4.7,6.6c0,2.9,2,5.4,4.6,6.2c-1.7,0.3-3.4,0.9-4.8,1.9c-1.9,1.3-3.4,3.1-4.3,5.3c0,0.1,0,0.3,0,0.4c0.1,0.1,0.2,0.2,0.3,0.2
							h21.1c0.1,0,0.3-0.1,0.3-0.2C22.1,20.2,22.1,20,22.1,19.9z M5.5,6.6C5.5,3.5,8,1,11.1,1s5.6,2.5,5.6,5.6s-2.5,5.6-5.6,5.6
							S5.5,9.7,5.5,6.6z M1.2,19.7c1.8-3.8,5.7-6.3,9.9-6.3s8.1,2.4,10,6.3H1.2z">							
							</path>
							</g>
							</svg>

						</span>
						</div>
						<p>Mon compte</p>
						</a>

					</div>

					<img class="image-logo" src="http://santospalace.test/wp-content/uploads/2020/12/logo_marionnette_santos_palace.svg">

				</ul>

				<div class="icons-santos-palace">

					<div class="lang" >
						
						<div  v-for="child3 in wp.menus" :key="child3.ID" >

	 						<div v-if="child3.ID > -1" >
	 					
	 						</div>
	 						<div v-else>

							<a :class="child3.classes" :href="child3.url">

								<p v-html="child3.title" ></p>

							</a>

 						</div>

						</div>

					</div>
					

				

				

				<!-- </div> -->

					<div class="div-image-compte" >

						<a href="">

							<img class="image-compte" src="http://santospalace.test/wp-content/uploads/2020/12/login-01.svg">

						</a>

					</div>
					
					<a class="woocommerce-cart-quantity-a" href="">

						<p class="woocommerce-cart-quantity count" v-html="count" ></p>	
				
					</a>		

				</div>




			</div>
	
		</div>

		<div>
		

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

		this.$emit('template_mounted', this)

		// console.log(this.wp.menus);


 // moins de 2 characters langages

		var characters
		$(".lang").find('span').each(function(index, el) {
			characters = $(this)
			characters.text(characters.text().substr(0,2))           
		});;

 // end moins de 2 characters langages

		$('.menu-item').click(function() {

			if ($(this).hasClass('close-simple')){

				console.log('qhsd');
			}

			else{

				$('.parent').animate({
					// targets: $('.parent').target,
					left: '100vw',
					easing: 'easeInOutSine',
					duration: 200,
				});


				$('.button-header').removeClass('open-simple')
				$('.button-header').removeClass('active')
				$('.button-header').addClass('close-simple')
				$('.count').removeClass('changement-couleur')
			}

		});

		$('.button-header').click(function() {

			$(this).toggleClass('active');

			if ($(this).hasClass('close-simple')) {

				$(this).removeClass('close-simple')

				$(this).addClass('open-simple')

				$('.count').addClass('changement-couleur')
			
					$('.parent').animate({
						
							right: '0vw',
							easing: 'easeInOutSine',
							duration: 200,
						});

			}
		
			else {

				$('.parent').animate({
					// targets: $('.parent').target,
					right: '100vw',
					easing: 'easeInOutSine',
					duration: 200,
				});

				$('.dropdown-content').animate({
					// targets: $('.parent').target,
					right: '100vw',
					easing: 'easeInOutSine',
					duration: 200,
				});

				
				$(this).removeClass('open-simple')
				$(this).addClass('close-simple')
				$('.count').removeClass('changement-couleur')
				$('.icon-arrow-left').removeClass('open-simple')
				$('.icon-arrow-left').addClass('close-simple')
				$('.icon-arrow-right').removeClass('open-simple')
				$('.icon-arrow-right').addClass('close-simple')



			}

		});


		$('.icon-arrow-right').click(function() {

			$(this).parents('.grandparent').find('.icon-arrow-left').toggleClass('active');

			if ($(this).parents('.grandparent').find('.icon-arrow-left').hasClass('close-simple')) {

				$(this).parents('.grandparent').find('.icon-arrow-left').removeClass('close-simple')

				$(this).parents('.grandparent').find('.icon-arrow-left').addClass('open-simple')

				$('.count').addClass('changement-couleur')
			
				$(this).parents('.grandparent').find('.dropdown-content').animate({
						
							right: '0vw',
							easing: 'easeInOutSine',
							duration: 200,
						});
				
			}
			else {

				$(this).parents('.grandparent').find('.dropdown-content').animate({
					// targets: $('.parent').target,
					right: '100vw',
					easing: 'easeInOutSine',
					duration: 200,
				});

				
				$(this).parents('.grandparent').find('.icon-arrow-left').removeClass('open-simple')
				$(this).parents('.grandparent').find('.icon-arrow-left').addClass('close-simple')
				$('.count').removeClass('changement-couleur')

			}

		});


		$('.icon-arrow-left').click(function() {

			$(this).parents('.grandparent').find('.icon-arrow-left').toggleClass('active');

			if ($(this).parents('.grandparent').find('.icon-arrow-left').hasClass('close-simple')) {

				$(this).parents('.grandparent').find('.icon-arrow-left').removeClass('close-simple')

				$(this).parents('.grandparent').find('.icon-arrow-left').addClass('open-simple')

				$('.count').addClass('changement-couleur')
			
				$(this).parents('.grandparent').find('.dropdown-content').animate({
						
							right: '0vw',
							easing: 'easeInOutSine',
							duration: 200,
						});
				
			}
			else {

				$(this).parents('.grandparent').find('.dropdown-content').animate({
					// targets: $('.parent').target,
					right: '100vw',
					easing: 'easeInOutSine',
					duration: 200,
				});

				
				$(this).parents('.grandparent').find('.icon-arrow-left').removeClass('open-simple')
				$(this).parents('.grandparent').find('.icon-arrow-left').addClass('close-simple')
				$('.count').removeClass('changement-couleur')

			}

		});


		$(document).on('click', function() {


		if($(event.target).parents('.parent').length != 0) {

			if ($(event.target).is('a')) {

				if ($('.button-header').hasClass('open-simple')) {

					$('.button-header').removeClass('open-simple')
					$('.button-header').removeClass('active')
					$('.button-header').addClass('close-simple')
					
					$('.parent').animate({

						right: '100vw',
						easing: 'easeInOutSine',
						duration: 200,

					});

					$('.dropdown-content').animate({

						right: '100vw',
						easing: 'easeInOutSine',
						duration: 200,

					});

					$(this).removeClass('open-simple')
					$(this).addClass('close-simple')
					$('.count').removeClass('changement-couleur')
					$('.icon-arrow-left').removeClass('open-simple')
					$('.icon-arrow-left').addClass('close-simple')
					$('.icon-arrow-right').removeClass('open-simple')
					$('.icon-arrow-right').addClass('close-simple')

				}	


			}

		}

		});



	},

	computed: {
		count () {
			return this.$store.state.wp.count
		}
	}

}
</script>

<style>


/*styleglobal*/

@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap');


	.current-lang span{

		color: #888320;
		font-weight: bold;
	}


	.santos-navbar *{

		font-family: 'Open Sans', sans-serif;
	}

	.clear{

		display: none !important;
	}
	.santos-navbar{

		background-color: white;
		border-bottom: 1px solid #dddddd;
	}

	.div-image-compte{

		display: flex;
		flex-direction: row;
		align-items: center;
		height: 100%;
	}
	
	
	.image-compte{

		height: 20px;
	}
	.image-compte-mobile{

		height: 20px;
	}

	.lang{

		display: flex;
		flex-direction: row;
		align-items: center;
		height: 100%;
	}

	.fr{

		padding-right: 10px;
		margin-right: 10px;
		border-right: 1px solid #888320;
	}

	.count{

		position: absolute;
		display: block;
		padding: 5px;
		cursor: pointer;
		background-color: #888320;
		color: white;
		border-radius: 20px;
		height: 17px;
		width: 17px;
		display: flex;
		justify-content: center;
		transition: 0.5s;
		font-size: 15px !important;
		line-height: 16px;

	}

	.parent li{

		list-style: none;

	}

	.parent li a{

		color: #422112;
		font-weight: bold;

	}

	.parent li a:hover {

		color: #888320;
		transition:0.3;

	}

	.icon-arrow-right{

		width: 15px;
		height: 15px;

	}

	.icon-arrow-left{

		width: 15px;
		height: 15px;
	}
	

	.logo-santos img{

		height: 60px;
	}

	.parent{

		padding-left: 0px;
	}

	.icon-account{

		height: 20px;
		width: 20px;
	}

/*styleglobal*/


/*animation header pc*/

@media only screen and (min-width: 1100px){



	.ligne-mobile{

		display: none;

	}

	.image-logo{

		display: none;
	}

	.div-image-compte-mobile{

		display: none;
	}

	.li-sousmenu{

		display: contents;
	}

	.parent li a{

		padding: 10px;

	}

	.icons-santos-palace{

		display: flex;
		flex-direction: row;

	}

	.div-image-compte{

		margin-right: 37px;
	}


	.lang{

		display: flex;
		flex-direction: row;
		align-items: center;
		height: 100%;
		margin-right: 10px;
		font-size: 15px;

	}

	.fr{
		padding-right: 5px;
		margin-right: 5px;
	}

	.santos-navbar{
		padding-left: 40px;
		padding-right: 40px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;

	}

	.icon-arrow-left{

		display: none;

	}

	.icon{

		display: none !important;
	}

	.parent li a{

		padding: 10px;
	}

	.logo-santos img{

		height: 55px;
	}

	.icon-arrow-right{

		display: none;

	}

	.parent{

		display: flex;
		flex-direction: row;
		justify-content: center;
		margin-top: 0px;
		margin-bottom: 0px ;
	}    

	.parent li{

		list-style: none;
		display: inline-block;
		font-size: 14px;
		font-weight: 700;
	}

	.parent li a:hover {
		color: #888320;
	}

	.ligne-animation:after {
		content: "";
		position: absolute;
		opacity: 0;
		top: calc(100% - 7px);
		left: 0;
		z-index: 5010;
		width: 100%;
		height: 7px;
		background-color: #888320;
		transition: opacity .3s ease-in-out;
	}

	.parent li a {
		position: relative;
		padding-bottom: 50px;
		white-space: nowrap;
		transition: opacity .3s ease-in-out;
	}

	.parent li:hover a:after {
		opacity: 1;
	}

	.parent li {
		padding: 47px 24px;
	}

	.dropdown-content {
		display: none;
		width: 100%;
		background: white;
		position: absolute;
		box-sizing: border-box;
		right: 0px;
		top:113px;
		vertical-align:baseline;
		/*z-index :5000;*/
		-webkit-font-smoothing: antialiased;
		border-top: 1px solid #dddddd;
	}

	.dropdown:hover .dropdown-content {

		display: block;
	}
	.dropdown:hover .dropdown-menu {

		display: block;

	}

	.sousmenus{
	
	}

	.logo-santos {

		display: flex;
		align-items: center;
	}

	.count{

		left: calc( 100% - 62px );
		top: 41px;

	}

	.div-image-compte-mobile{

		display: none;
	}

}

/*animation header pc*/


@media only screen and (max-width: 1100px){

	.div-image-compte-mobile{

		background-color: #888320;
		margin-left: auto;
		margin-right: auto;
		display: flex;
		flex-direction: row;
		justify-content: center;
		color: white;
		padding: 20px;
		color: white;
		border: 1px solid #888320;
		border-radius: 3px;

	}

	.div-image-compte-mobile svg{

		fill: white ;
	}

	.div-image-compte-mobile:hover{
		
		color: #888320 ;
		background-color: white;
		transition: 0.3;
	}

	.div-image-compte-mobile:hover svg{

		fill: #888320 ;
		transition: 0.3;
	}

	.ligne-mobile{

		border-top: 1px solid #dddddd;
		margin-left: 20px;
		margin-right: 20px;

	}

	.image-logo{

		width: 20%;
		margin-left: auto;
		margin-right: auto;
		
	}		

	.div-image-compte-mobile p{

		padding-left: 15px;
		font-weight: 700;

	}
	.div-image-compte{

		display: none
	}

	.dropdown__title{

		padding: 20px 30px;
		background-color: #e9e9e9;

	}
	.li-sousmenu{

		padding-top: 28px;
		/*padding-bottom: 20px;*/

	}

	.dropdown-content{
		top: 0;
		display: flex;
		flex-direction: column;
		align-content: center;
		justify-content: center;
		z-index: 5000;
		
	}

	.parent{
		
		right: 100vw;
		display: flex;
		flex-direction: column;
		align-content: center;
		justify-content: center;
	}

	.icon{
		right: calc( 100% - 56px );
		height: 60px !important;
	}

	.count{

		left: calc( 100% - 50px );
	}

	.lang{

		border-top: 1px solid #dddddd;
	
	}

	.santos-navbar{

		position: relative;
	}

	.parent{

		top: 0px;
		z-index: 100;
		
	}

	.icon-arrow-right{

		position: absolute;
		right: 20%;
	}

	.icon-arrow-left{

		position: absolute;
		left: 20%;

	}

	.li-espace-between{

		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		/*position: relative;*/	
	}


}


@media only screen and (max-width: 1100px) and (min-width: 600px){


	.div-image-compte-mobile{

		width: 25%;
		font-size: 16px;
		margin-top: 10%;

	}

	.ligne-mobile{

		margin-top: 10%;

	}

	.image-logo{

		margin-top: 10%;
	}

	.parent{

		height: 100vh;
		background-color: white;
		position: fixed;
		width: 100%;

	}

	.grandparent{

		font-size: 16px;
		margin-top: 28px;
	}
	.childli{

		font-size: 16px;


	}

	.lang{

		justify-content: center;
		padding-top: 20px;
		padding-bottom: 20px;
		margin-top: 20px;
		font-size: 14px;
	}


	.dropdown-content{

		height: 100vh;
		background-color: white;
		position: fixed;
		width: 100%;
		right: 100vw;

	}
	.count{

		top: 39.5px;
	}

	.santos-navbar{

		padding-top: 20px;
		width: 100%;
	}

	.burger{

		top: 35px;
	}



}

@media only screen and (max-width: 600px){

	.ligne-mobile{

		margin-top: 30px;
	}

	.div-image-compte-mobile{

		width: 55%;
		font-size: 14px;
		margin-top: 30px;

	}

	.image-logo{

		margin-top: 30px;
		
	}	

	.grandparent{

		font-size: 14px;
		margin-top: 28px;
	}

	.lang{

		justify-content: center;
		padding-top: 15px;
		padding-bottom: 15px;
		margin-top: 15px;
		font-size: 12px;
	}


	.parent{

		height: 100vh;
		background-color: white;
		position: fixed;
		width: 100% ;
		
	}

	.count {

		padding: 5px;
		cursor: pointer;
		z-index: 11000;
		position: absolute;
		top: 23px;
		color: white;
		border-radius: 20px;
		height: 16px;
		width: 16px;
		display: flex;
		justify-content: center;
		line-height: 17px;

	}

	.dropdown-content{

		height: 100vh;
		background-color: white;
		position: fixed;
		width: 100%;
		right: 100vw;

	}

	.logo-santos img{

		height: 40px;
	}
	.icon{

		width: auto !important;
	}

	.santos-navbar{
	
		padding-top: 15px;

	}

	.burger{

		top: 23px;

	}


}



</style>

<style scoped>
 

		@media screen and (max-width: 600px) {


			.icon{

				margin-right: 20px;
			}

		}

		.icon{

		position: absolute;
		display: block;
		width: 45px;
		cursor: pointer;
		z-index: 11000;

		}
		.burger{
		width: 30px;
		height: 2px;
		background-color: #422112;
		position: absolute;
		left: 50%;
		transform: translate(-50%,-50%);
		box-shadow: 0 2px 5px rgba(0,0,0,0.2);
		transition: 0.5s;
		}
		.burger::before{
		content: '';
		position: absolute;
		width: 18px;
		height: 2px;
		left: 0;
		background: #422112;
		box-shadow: 0 2px 5px rgba(0,0,0,0.2);
		transition: 0.5s;
		}

		.burger::after{
		content: '';
		position: absolute;
		width: 30px;
		height: 2px;
		left: 0;
		background: #422112;
		box-shadow: 0 2px 5px rgba(0,0,0,0.2);
		transition: 0.5s;
		}
		.burger::before{
		top: -8px;
		}
		.burger::after{
		top: 8px;
		}

		.icon.active .burger{
		background: white;
		}
		.icon.active .burger::before{
		top: 0;
		width: 30px;
		transform: rotate(45deg);
		}
		.icon.active .burger::after{
		top: 0;
		transform: rotate(135deg);
		}


</style>

<style scoped>
	
	a{

		text-decoration: none;
	}
</style>