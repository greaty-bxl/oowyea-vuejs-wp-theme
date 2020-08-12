<template>
	<div id="footer" class="section">
		<div class="clear"></div>

<section>	  	

<footer>

<div class="footer-text">

<div class="adresse-social">

<div>
  <p>Greaty</p>
  <p>Boulevard de l'Humanité 415,</p>
  <p>1190 Bruxelles</p> 
</div>

</div>

<div class="confidentialite">

<p> <a href="">GREATY © 2020</a></p>

<p><a href="">Confidentialité</a></p>

<p><a href="">Conditions générales</a></p>

</div>

</div>

</footer>
</section>
		
		<div class="clear"></div>
	</div>
</template>

<script>
	export default {

	}
</script>

<style>
		#footer{
			min-height: 33vh;
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
		padding: 40px 30px;
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

		.reseaux-sociaux p {
		margin: 5px  0px;
		}

		.confidentialite{

		display: flex;
		flex-direction: column;

		}

		.confidentialite p {
		margin: 5px  0px;
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