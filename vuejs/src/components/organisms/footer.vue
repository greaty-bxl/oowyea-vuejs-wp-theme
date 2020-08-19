<template>
	<div id="footer" class="section">
		<div class="clear"></div>

<section>	  	

<footer>

<div class="footer-text">

<div class="adresse-social">

<div>
  <p class="on-screen">Greaty</p>
  <p class="on-screen">Boulevard de l'Humanité 415,</p>
  <p class="on-screen">1190 Bruxelles</p> 
</div>

</div>

<div class="confidentialite">

<p class="on-screen"><a  href="">GREATY © 2020</a></p>

<p class="on-screen"><a href="">Confidentialité</a></p>

<p class="on-screen"><a href="">Conditions générales</a></p>

</div>

</div>

</footer>
</section>
		
		<div class="clear"></div>
	</div>
</template>

<script>

	import Alpl from 'Molecules/animation-line-per-line';
	import anime from 'animejs/lib/anime.es.js';
	export default {
		Alpl,
		anime,

		mounted(){
			var $ = this.$

			$('p').on('leave-screen', (event) => {

			$(event.target).css("opacity","0");

				anime({
					targets: event.target,
					translateY: '10px',
					opacity: 0,

				});

			})

			$( "p " ).each( function( index , el) {

			$(el).on('enter-screen', (event) => {
				anime({
					targets: event.target,
					translateY: '0px',
					opacity: 1,
					easing: 'easeInOutSine',
					duration: 500,
					delay: index * 100
				});

			})


			});

			$('a').on('leave-screen', (event) => {

			$(event.target).css("opacity","0");

				anime({
					targets: event.target,
					translateY: '10px',
					opacity: 0,

				});

			})

			$( "a" ).each( function( index , el) {

			$(el).on('enter-screen', (event) => {
				anime({
					targets: event.target,
					translateY: '0px',
					opacity: 1,
					easing: 'easeInOutSine',
					duration: 500,
					delay: index * 100
				});

			})


			});

		}
	}


</script>

<style>
		#footer{
			min-height: auto;
			color: white;
		}
		footer{
		font-family: 'Gotham Book Regular', sans-serif; 
		}

		a{
			color: white
		}

		@media screen and (min-width: 1200px) {

		footer{

		padding: 20px 30px;
		display: flex;
		-webkit-box-orient: vertical;
		flex-direction: column;

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
		text-align: right;
		}

		

		}

		@media screen and (max-width: 1200px) {

		footer{
		padding: 40px 5vw;
		color: white;
		display: flex;
		-webkit-box-orient: vertical;
		flex-direction: column;

		}

		.reseaux-sociaux{
		display: flex;
		flex-direction: column;
		justify-content: center;

		}

		.reseaux-sociaux p {
		margin: 4px  0px;
		}

		.confidentialite{

		display: flex;
		flex-direction: column;

		}

		.confidentialite p {
		margin: 5px  0px;
		text-align: left;
		}

		}

		.text-contact a{
		font-family: 'Gotham Bold', sans-serif; 
		color: white;
		}

		#footer{
			
			background-color: rgb(25, 26, 28);

		}

		/*.css('background-color', 'rgb(25, 26, 28)');*/
</style>