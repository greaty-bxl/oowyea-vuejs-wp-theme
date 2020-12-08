<template>
	<div id="header" class="header-greaty">
		<div class="clear"></div>

		<div id="right-panel ">

			<div class="santos-navbar">

				<div class="icon button-header close-simple">
					<div class="burger"></div>
				</div>

				<div class="logo-santos">
					<a :href="this.wp.options.siteurl"><Acf field="logo" /> </a>
				</div>

				<ul class="parent">
					<li  class="dropdown grandparent" v-for="child in wp.menus" :key="child.ID"  >

						<div v-if="child.child">

							<div>

							<a class="ligne-animation" v-html="child.title">Mouse over me</a>

							<svg aria-hidden="true" focusable="false" role="presentation" class="icon-arrow-right" viewBox="0 0 20 38"><path d="M15.932 18.649L.466 2.543A1.35 1.35 0 0 1 0 1.505c0-.41.155-.77.466-1.081A1.412 1.412 0 0 1 1.504 0c.41 0 .756.141 1.038.424l16.992 17.165c.31.283.466.636.466 1.06 0 .423-.155.777-.466 1.06L2.542 36.872a1.412 1.412 0 0 1-1.038.424c-.41 0-.755-.141-1.038-.424A1.373 1.373 0 0 1 0 35.813c0-.423.155-.776.466-1.059L15.932 18.65z" fill="#726D75" fill-rule="evenodd"></path>
							</svg>

							</div>

							<ul v-for="child2 in child.child" :key="child2.ID" class="dropdown-content">

								<li class="sousmenus childli dropdown__title">

									<svg aria-hidden="true" focusable="false" role="presentation" class="icon-arrow-left close-simple" viewBox="0 0 20 38"><path d="M4.068 18.649l15.466 16.105c.31.283.466.629.466 1.039 0 .41-.155.77-.466 1.08a1.412 1.412 0 0 1-1.038.424c-.41 0-.756-.141-1.038-.424L.466 19.708A1.373 1.373 0 0 1 0 18.648c0-.423.155-.776.466-1.059L17.458.424A1.412 1.412 0 0 1 18.496 0c.41 0 .755.141 1.038.424.31.282.466.636.466 1.06 0 .423-.155.776-.466 1.059L4.068 18.649z" fill="#726D75" fill-rule="evenodd"></path></svg>

									<a class="sousmenus " v-html="child.title">Hello World!</a>

								</li>
								<li class="sousmenus childli" > <a class="sousmenus" v-html="child2.title" >Hello World!</a></li>
							</ul>	
						</div>
						<div v-else>
							<a class="ligne-animation" v-html="child.title" >Mouse over me</a>
						
						</div>

					</li>
					
				</ul>

				<div>

					<div class="lang">
						
						<div class="fr">FR</div>
						<div class="nl">NL</div>

					</div>
					

					<a href="">
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



		

	}
}

</script>

<style>


/*styleglobal*/


	.lang{

		display: flex;
		flex-direction: row;
		align-items: center;
		height: 100%;
	}

	.fr{

		padding-right: 3px;
		margin-right: 3px;
		border-right: 1px solid #888320;
	}

	.count{

		position: absolute;
		display: block;
		left: calc( 100% - 90px );
		padding: 5px;
		cursor: pointer;
		background-color: #70625b;
		top: 9px;
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
		padding: 10px;
		font-weight: bold;

	}

	.parent li a:hover {

		color: #888320;
		transition:0.3;

	}

	.icon-arrow-right{

		width: 13px;
		height: 13px;

	}

	.icon-arrow-left{

		width: 13px;
		height: 13px;
	}
	

	.logo-santos img{

		height: 60px;
	}


/*styleglobal*/


/*animation header pc*/

@media only screen and (min-width: 1100px){



	.santos-navbar{
		padding-left: 70px;
		padding-right: 70px;
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

		height: 50px;
	}

	.icon-arrow-right{

		display: none;

	}

	.icon-arrow-right{

		display: none;
	}

	.parent{

		display: flex;
		flex-direction: row;
		justify-content: center;
		margin-top: 0px;
		border-bottom: 1px solid #dddddd;
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
		/*background: lightblue;*/
		position: absolute;
		box-sizing: border-box;
		right: 0px;
		top:110px;
		vertical-align:baseline;
		z-index :5000;
		-webkit-font-smoothing: antialiased;
		padding: 47px 24px;
	}

	.dropdown:hover .dropdown-content {
		display: block;
	}
		.dropdown:hover .dropdown-menu {
		display: block;
	}

	.sousmenus{
	
	}



}

/*animation header pc*/


@media only screen and (max-width: 1100px){



	.dropdown__title{

		margin-bottom: 20px;
		padding: 17px 30px;
		background-color: #e9e9e9;

	}

	.parent{

		margin-top: 30px;
		right: 100vw;
	}

	.lang{

		justify-content: center;
		padding-top: 20px;
		padding-bottom: 20px;
	}



}


@media only screen and (max-width: 1100px) and (min-width: 600px){

	.parent{

		height: 100vh;
		background-color: white;
		position: fixed;
		width: calc( 100% - 70px) ;
	}

	.grandparent{

		font-size: 16px;
		margin-bottom: 28px;
	}
	.childli{

		font-size: 16px;
		margin-bottom: 18px;

	}

	.dropdown-content{

		height: 100vh;
		background-color: white;
		position: fixed;
		width: 100%;
		right: 100vw;
		top: 80px;

	}


	.santos-navbar{
		padding-left: 70px;
		padding-right: 70px;
	}


}

@media only screen and (max-width: 600px){

/*	.santos-navbar{
		padding-left: 30px;
		padding-right: 30px;
	}*/

	.parent{

		height: 100vh;
		background-color: white;
		position: fixed;
		width: calc( 100% - 30px) ;
		top: 80px;
	}

	.count {

		left: calc( 100% - 51px );
		padding: 5px;
		cursor: pointer;
		z-index: 11000;
		position: fixed;
		top: 35px;
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
			top: 80px;

		}

		.logo-santos img{

			height: 40px;
		}



}



</style>

<style scoped>
 

		@media screen and (max-width: 600px) {

			.santos-navbar{
			margin:  15px 30px;
			width: calc(100% - 60px);
			}
	

			

			.icon{

				margin-right: 20px;
			}

		}

		.icon{

		position: absolute;
		display: block;
		right: calc( 100% - 90px );
		width: 45px;
		height: 40px;
		cursor: pointer;
		/*background-color: #70625b;*/
		z-index: 11000;
		
		/*margin-top: 20px;*/
		}
		.burger{
		width: 30px;
		height: 1px;
		background-color: black;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
		box-shadow: 0 2px 5px rgba(0,0,0,0.2);
		transition: 0.5s;
		}
		.burger::before{
		content: '';
		position: absolute;
		width: 18px;
		height: 1px;
		left: 0;
		background: black;
		box-shadow: 0 2px 5px rgba(0,0,0,0.2);
		transition: 0.5s;
		}

		.burger::after{
		content: '';
		position: absolute;
		width: 30px;
		height: 1px;
		left: 0;
		background: black;
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