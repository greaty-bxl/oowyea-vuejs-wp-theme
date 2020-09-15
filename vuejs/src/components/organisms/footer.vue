<template>
	<div id="footer" class="section">
		<div class="clear"></div>

		<section>	
			<footer>

			<div class="textbox">
			<div  class="div-text-contact ">
			<Alpl class="text-contact">Vous avez une idée.<br>
				Nous avons l'expertise pour la réaliser.<br>
				Faites-nous un <u><strong><a href="">coucou</a></strong> </u>
			</Alpl>
<li class="c-box__list--item">
<!-- <?xml version="1.0" encoding="iso-8859-1"?> -->
<!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
<svg class="c-emoji c-emoji-laugh" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 511.993 511.993" style="enable-background:new 0 0 511.993 511.993;" xml:space="preserve">
<g transform="matrix(1.25 0 0 -1.25 0 45)">
<g>
<g>
  <path style="fill:#FFCC4D;" d="M349.614-23.981c79.974-79.974,79.974-209.658,0-289.633s-209.647-79.974-289.633,0
      c-79.974,79.974-79.974,209.658,0,289.633C139.967,55.994,269.639,55.994,349.614-23.981"/>
  <path style="fill:#664500;" d="M219.349-183.361c-39.754-39.754-70.758-61.486-109.739-87.768
      c-8.875-6.019-21.936-21.948,0.023-43.895c43.884-43.884,149.163-48.321,219.432,21.948
      c70.292,70.281,65.866,175.559,21.959,219.455c-21.959,21.948-37.888,8.886-43.895,0
      C280.858-112.58,259.115-143.607,219.349-183.361"/>
  <path style="fill:#FFFFFF;" d="M131.57-293.043c0,0,43.895,21.948,109.727,87.791c65.843,65.82,87.78,109.716,87.78,109.716
      s21.948-65.843-54.852-142.655C197.402-314.99,131.57-293.043,131.57-293.043"/>
  <g>
      <path style="fill:#664500;" d="M142.618-143.88c-0.284-2.719-2.389-4.892-5.086-5.325c-0.182-0.011-18.421-3.049-39.219-23.848
          c-20.787-20.787-23.825-39.026-23.859-39.196c-0.387-2.697-2.571-4.836-5.279-5.109c-2.719-0.319-5.313,1.24-6.303,3.812
          c-0.637,1.661-15.303,40.858,9.887,66.048c25.202,25.202,64.398,10.524,66.059,9.887
          C141.343-138.601,142.902-141.172,142.618-143.88"/>
      <path style="fill:#664500;" d="M253.346-33.151c-0.273-2.708-2.367-4.892-5.074-5.325c-0.182-0.011-18.432-3.049-39.208-23.836
          c-20.799-20.799-23.848-39.049-23.871-39.196c-0.387-2.708-2.56-4.824-5.279-5.131c-2.719-0.307-5.325,1.263-6.315,3.823
          c-0.637,1.65-15.292,40.858,9.91,66.048c25.179,25.19,64.375,10.524,66.037,9.887C252.095-27.872,253.653-30.432,253.346-33.151
          "/>
  </g>
</g>
</g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>
</li>

			</div>
			</div>
			<div class="footer-text on-screen">

			<div class="adresse-social">

			<div>

			<p class="">Greaty</p>
			<p class="">Bd. de l'Humanité 415,</p>
			<p class="">1190 Bruxelles</p> 

			</div>

			</div>

			<div class="confidentialite">


			<p class="" > <a href="mailto:i[at]greaty.be"> i[at]greaty.be </a></p>
			<p class="" > <a href="tel:+32 (0) 471 72 18 08">+32 (0) 471 72 18 08</a></p>
			<p class=""><a href=""></a>Google Maps</p>

			</div>

			<div class="confidentialite">

			<p class=""><a>GREATY © 2020</a></p>

			<p class=""><a>BE 0 541 980 669 </a></p>

			
			<p class=""><a target="_blank" href="https://drive.google.com/file/d/1HHzzPe2Ds-C45aacgBNIrgyP0mwOUm9N/view?usp=sharing">C.G.V</a></p> 

			</div>

			</div>

			</footer>

		</section>
		
		<div class="clear"></div>
	</div>
</template>

<script>

	import smart_fonts from "Libs/smart-fonts.js"
	import Alpl from 'Molecules/animation-line-per-line';
	import anime from 'animejs/lib/anime.es.js';
	export default {

		components:{
			Alpl,
			// anime,
		},
		

		mounted(){



		

			this.$emit('template_mounted', this);

			// anime.height()
			var $ = this.$

			$('.footer-text').on('leave-screen', (event) => {

				$(event.target).css({
					// "opacity":"0",
					// transform: 'translateY(20px)',
					opacity: 0,
				});

					// alert('2')
			})


			$('.footer-text').on('enter-screen', (event) => {
				anime({
					targets: event.target,
					// translateY: '0px',
					opacity: 1,
					easing: 'easeInOutSine',
					duration: 500,
					delay: 500
				});

				// alert('1')

			})

			// $('.c-box__list--item').on('leave-screen', (event) => {

			// 	$(event.target).css({
			// 		// "opacity":"0",
			// 		// transform: 'translateY(20px)',
			// 		opacity: 0,
			// 	});

		
			// })

			// // $('.footer-text').css({
			// // 	transform: 'translateY(20px)',
			// // 	opacity: 0,
			// // });


			// // $('.footer-text').each( function() {

			// $('.c-box__list--item').on('enter-screen', (event) => {
			// 	anime({
			// 		targets: event.target,
			// 		// translateY: '0px',
			// 		opacity: 1,
			// 		easing: 'easeInOutSine',
			// 		duration: 500,
			// 		delay: 500
			// 	});

			// })

			
			// });


			// 	$('.div-text-contact').css({
			// 		transform: 'translateY(100px)',
			// 		opacity: 0,
			// 	});

			// 	$( ".div-text-contact" ).each( function( index , el) {

			// 	$(el).on('enter-screen', (event) => {
			// 		anime({
			// 			targets: event.target,
			// 			translateY: '0px',
			// 			opacity: 1,
			// 			easing: 'easeInOutSine',
			// 			duration: 500,
			// 			delay: index * 500
			// 		});

			// 	})


			// });


			// 	$('a').css({
			// 		transform: 'translateY(10px)',
			// 		opacity: 0,
			// 	});

			// $('a').on('leave-screen', (event) => {

			// // $(event.target).css("opacity","0");

			// 	anime({
			// 		targets: event.target,
			// 		translateY: '10px',
			// 		opacity: 0,

			// 	});

			// })

			// $( "a" ).each( function( index , el) {

			// $(el).on('enter-screen', (event) => {
			// 	anime({
			// 		targets: event.target,
			// 		translateY: '10px',
			// 		opacity: 1,
			// 		easing: 'easeInOutSine',
			// 		duration: 500,
			// 		delay: index * 100
			// 	});

			// })


			// });

	

			smart_fonts({
				'.text-contact' : 52.8,
			})

		}
	}


</script>

<style scoped>
		@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;600&display=swap');

		footer{

			overflow: hidden;
		}
		nav{
		width: 100%;
		/*height: 35px;*/
		/*background: #191a1c;*/
		/*box-shadow: 0 0 15px 20px #191a1c;*/
		}
		nav ul{
		list-style: none;
		display: flex;
		flex-wrap: wrap;
		align-items: left;
		justify-content: left;
		padding-top: 15px;
		padding-bottom: 15px;
		margin: 0;
		height: 100%;
		text-align: left;
		display: flex;
		flex-direction: column;

		}
		nav ul li{
		cursor: pointer;
		}

		.textbox {
		margin:5em;

		}

		a{color: #e1e1e1 ;}

		#footer{
			min-height: auto;
			color: #e1e1e1;
		}
		footer{
		font-family: 'Montserrat', sans-serif; 
		}
		.word{

			text-align: left;
		}

		a{
			color: #e1e1e1;
			text-decoration: none;
		}

		@media screen and (min-width: 1100px) {

				.c-box__list--item {
				/*	    display: flex;
				/*justify-content: center;*/
				margin: 0px 3% !important;
				/*display: inline-block;*/
				}


				footer{

				padding: 20px 70px;
				display: flex;
				-webkit-box-orient: vertical;
				flex-direction: column;
				min-height: calc(100vh - 80px);

				}

				.footer-text{

				display: flex;
				flex-direction: row;
				justify-content: space-between;

				}

				.reseaux-sociaux{
				display: flex;
				flex-direction: column;

				}
				.adresse-social {
				text-align: left;

				}

				.adresse-social p {
				margin-top: 0px ;
				text-align: left;

				}

				.reseaux-sociaux p {
				margin: 5px  0px;
				}

				.confidentialite{

				display: flex;
				flex-direction: column;

				}

				.confidentialite p {
				margin-top: 0px ;
				text-align: left;
				}
				.text-contact{

					font-size: 3.3em;
				}

		

		}

		@media screen and (max-width: 1100px) and  (min-width: 600px) {


		.footer-text{

		display: flex;
		flex-direction: row;
		justify-content: space-between;

		}

		footer{

		padding: 40px 70px;
		color: #e1e1e1;
		height:  calc( 100vh - 80px);
		display: flex;
		flex-direction: column;

		}

		.reseaux-sociaux{
		display: flex;
		flex-direction: column;
		justify-content: center;

		}

		.reseaux-sociaux p {
		margin: 4px  0px;
		text-align: left;
		}

		.confidentialite{

		display: flex;
		flex-direction: column;
		text-align: left;

		}

		.adresse-social p {
		margin-top: 0px ;
		text-align: left;

		}

		.confidentialite p {
		margin: 5px  0px;
		text-align: left;
		font-size: 14px;
		}

		}

		.text-contact a{
		font-family: 'Gotham Bold', sans-serif; 
		color: #e1e1e1;
		}

		#footer{
			
			background-color: #282828;

		}

		@media screen and (max-width: 600px) {

			p{
				text-align: left;
				padding-right: 30px;
				font-size: 14px !important;
			}

			footer{

			padding: 30px 40px;
			color: #e1e1e1;
			/*height:  calc( 100vh - 80px);*/
			display: flex;
			flex-direction: column;



			}


			.textbox {
			margin: 0px 0px;
			min-height: 100vh;
			display: flex;
			flex-direction: column;
			justify-content: center;
			}

			.confidentialite{

				padding-top: 5%;
			}

			.div-text-contact{

				padding-left: 0px !important;
				padding-right: 0px;
			}

			.div-text-contact{

				margin-left: 0px !important;
			}
	
		}

		/*.css('background-color', 'rgb(25, 26, 28)');*/
</style>


<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;600&display=swap')


.text-contact a{
font-family: 'Montserrat', sans-serif !important;
color: #e1e1e1;
font-weight: lighter;}
.text-contact {
	font-family: 'Montserrat', sans-serif !important;
color: #e1e1e1;
font-weight: lighter;
/*font-size: 0.6em !important;*/
}

.textbox {
	margin-bottom: auto;
	margin-top: auto;
    text-align: left;
}

.text-contact {
 
    color: #e1e1e1;
    
}

.text-contact a{
		color: #e1e1e1;
	}

p{

	font-family: 'Montserrat', sans-serif !important;
}	
	

@media screen and (min-width: 1100px) {

	.div-text-contact{

		/*padding: 12rem 4.5rem;*/
		width: 80%;
		margin-left: 0;
		margin-right: 0;
		padding-top: 100px;
		padding-bottom: 70px;
		font-family: 'Montserrat', sans-serif !important;
		margin-left: 70px;
		margin-right: 70px;
		font-size: 35px;
		font-weight: lighter;

	}

	.text-contact strong{

		display: inline !important;
		font-family: 'Montserrat', sans-serif !important;
		font-weight: 600;
	}

		.section-wrap{

		height: 75vh;

		}     
	
	}

    @media screen and (max-width: 1100px) and  (min-width: 600px) {


		.div-text-contact{

		font-family: 'Montserrat', sans-serif !important;
		width: 100%;
		font-size: 2em;
		color: white;
/*		margin-left: 70px;
		margin-right: 70px;*/
		padding-top: 50px;
		font-weight: lighter;
		}
		.text-homepage{

			margin-top: 20% !important;
		}
    }

    @media screen and (max-width: 600px) {

        .div-text-contact{

			font-family: 'Montserrat', sans-serif !important;
			color: white;
			margin-left: 0;
			margin-right: 0;
			padding-top: 50px;
			/*padding-left: 30px !important;*/
			padding-right: 30px !important;
			font-weight: lighter;

		}

		.div-text-contact{
			padding: 0px 0px;
		}
		.div-text-contact{

			height: 100%

		}
		
		.div-text-contact{

			width: auto !important;

		}

		.text-contact{

		/*	font-size: 2.2em !important;
			line-height: 1.8em;
*/
		}
    }






    /*------------------------------------*\
    #FONTS
    \*------------------------------------*/

    /*------------------------------------*\
    #Variables
    \*------------------------------------*/

    :root {
        /* colors */
        --black: #232526;
        --grey: #414345;
        --yellow: #F2BB5F;

        --gradient: linear-gradient(to bottom left, var(--black), var(--grey));
        --gradient-reversed: linear-gradient(to top right, var(--black), var(--grey));

        /* fonts */
        --font-light: "Proxima Nova Light";
        --font: "Proxima Nova";
        --font-semibold: "Proxima Nova Semibold";
        --font-bold: "Proxima Nova Bold";

        /* shadows */
        --shadow: 0 3px 6px rgba(0, 0, 0, 0.15);
        --text-shadow: 0 6px 6px rgba(0, 0, 0, 0.15);

        /* borders */

        /* transitions */
        --transition-alpha: .1s ease-out;

        /* radius */
        --radius: 3px;
    }

    /*------------------------------------*\
    #GENERIC
    \*------------------------------------*/

    /*
        Generic: Page
        ---
        Global page styles + universal box-sizing:
    */

    html {
        font-size: 16px;
        line-height: 1.5;
        font-family: var(--font), sans-serif;
        color: #FFFFFF;
        background: var(--gradient);
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    *,
    *:before,
    *:after {
        box-sizing: inherit;
    }

    .index {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 100%;
    }

    @media (min-width: 768px) {
        .index {
            height: 100vh;
        }
    }

    /*
    * Remove text-shadow in selection highlight:
    * https://twitter.com/miketaylr/status/12228805301
    *
    * Customize the background color to match your design.
    */

    ::-moz-selection {
        background: var(--orange);
        color: white;
        text-shadow: none;
    }

    ::selection {
        background: var(--orange);
        color: white;
        text-shadow: none;
    }

    /*------------------------------------*\
    #Elements
    \*------------------------------------*/

    /*
    Elements: Images
    ---
    Default markup for images to make them responsive
    */

    img {
        max-width: 100%;
        vertical-align: top;
    }

    /*
        Elements: typography
        ---
        Default markup for typographic elements
    */

    h1,
    h2,
    h3 {
        font-weight: 600;
    }

    h1 {
        font-size: 36px;
        line-height: 48px;
        margin: 0 0 24px;
    }

    h2 {
        font-size: 32px;
        line-height: 40px;
        margin: 0 0 24px;
    }

    h3 {
        font-size: 26px;
        line-height: 32px;
        margin: 0 0 24px;
    }

    h4,
    h5,
    h6 {
        font-size: 16px;
        font-weight: 600;
        line-height: 24px;
        margin: 0 0 24px;
    }

/*    p,
    ol,
    ul,
    dl,
    table,
    address,
    figure {
        margin: 0 0 24px;
    }
*/
    ul,
    ol {
        padding-left: 24px;
    }

    li ul,
    li ol {
        margin-bottom: 0;
    }

    a {
        transition: all var(--transition-alpha);
        color: var(--color-alpha);
        outline-color: var(--color-alpha);
        outline-width: medium;
        outline-offset: 2px;
    }

    a:visited,
    a:active {
        color: var(--color-alpha);
    }

    a:hover,
    a:focus {
        color: var(--color-alpha-light);
    }

    @media (max-width: 768px) {
        .o-box {
            height: 100%;
        }
    }

    /*------------------------------------*\
    #COMPONENTS
    \*------------------------------------*/

    /*
        Component: Lead
        ---
        Leads like h1, h2, ... in need of specific styling
    */

    .c-lead {
        font-size: 40px;
        line-height: 86px;
        text-shadow: var(--text-shadow);
        display: flex;
        justify-content: center;
    }

    /*
        Component: box
        ---
        Box where emoji's are shown in
    */

    .c-box {
        max-width: 768px;
        padding: 24px 48px;
        border-radius: 20px;
    }

    .c-box a {
        text-decoration: none;
    }

    .c-box a:hover {
        text-decoration: none;
    }

    .c-box__list {
        list-style: none;
        padding: 0 !important;
        margin: 0 !important;
    }

    .c-box__list--item {
        display: flex;
        /*justify-content: center;*/
        align-content: center;
        align-items: center;
        margin: 0px 10%;
        /*display: inline-block;*/
    }

		@media (max-width: 600px) {

		.c-box__list--item {
		display: flex;
		/*justify-content: center;*/
		align-content: center;
		align-items: center;
		/*margin: 0px 10%;*/
		padding-top: 10%;
		margin: 0px 0px !important;
		padding-left: 10px;
		}


		}

		@media (min-width: 768px) {
		.c-box {
		background: var(--gradient-reversed);
		}

		.c-box__list--item {
		display: inline-flex;
		/* margin: 24px;*/
		}



    }

    /*
        Component: Emoji
        ---
        Styling of the Emoji SVG's
    */
    .c-emoji {
        height: 30px;
        width: 30px;
        /*padding: 5px;*/
    }

    /* 👍🏻 */
    .c-emoji-nice {
        animation: emoji-nice 2s infinite;
        animation-timing-function: ease-in-out;
    }

    @keyframes emoji-nice {
        0%   {transform: rotate(0)}
        25%  {transform: rotate(-10deg) translateY(-10px)}
        75%  {transform: rotate(4deg) translateY(4px)}
        100% {transform: rotate(0)}
    }

    /* 🤣 */
    .c-emoji-laugh {
        animation: emoji-laugh 2s infinite;
        animation-timing-function: ease-in-out;
    }

    @keyframes emoji-laugh {
        /* 0%   {transform: scale(2) translateX(0px) rotate(0turn)} */
        0%   {transform: translateX(-15px) rotate(-0.5turn)}
        50%  {transform: translateX(15px) rotate(0.5turn)}
        100% {transform: translateX(-15px) rotate(-0.5turn)}
    }

    /* 😱 */
    .c-emoji-scared {
        animation: emoji-scare 0.2s infinite;
        animation-timing-function: ease-in-out;
    }

    @keyframes emoji-scare {
        0%   {transform: translateX(-2px)}
        50%  {transform: translateX(4px)}
        100% {transform: translateX(-2px)}
    }

    /* 😭 */
    .c-emoji-cry {
        animation: emoji-cry 1s infinite;
        animation-timing-function: ease-in-out;
    }

    @keyframes emoji-cry {
        0%   {transform: translateY(-2px)}
        50%  {transform: translateY(4px)}
        100% {transform: translateY(-2px)}
    }

    /* 😡 */
    .c-emoji-angry .c-emoji-angry__face {
        animation: emoji-angry 2s infinite;
        animation-timing-function: ease-in-out;
    }

    @keyframes emoji-angry {
        0%   {transform: rotate3d(0, 1, 0, -30deg)}
        24%  {transform: rotate3d(0, 1, 0, 30deg)}
        48%  {transform: rotate3d(0, 1, 0, -20deg)}
        72%  {transform: rotate3d(0, 1, 0, 20deg)}
        100% {transform: rotate3d(0, 1, 0, 0)}
    }

    /*------------------------------------*\
    #UTILITIES
    \*------------------------------------*/
    /*
        Utilities: spacing
        ---
        Utility classes to put specific margins and paddings onto elements
    */

    .u-pt-clear {
        padding-top: 0 !important;
    }

    .u-mb-clear {
        margin-bottom: 0 !important;
    }

    .u-mb-xs {
        margin-bottom: 4px !important;
    }

    .u-mb-sm {
        margin-bottom: 8px !important;
    }

    .u-mb-md {
        margin-bottom: 16px !important;
    }

    .u-mb-lg {
        margin-bottom: 32px !important;
    }

    .u-mb-xl {
        margin-bottom: 48px !important;
    }
</style>