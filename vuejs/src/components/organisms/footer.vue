<template>
	<div data-scroll-section>
		<div style="min-height: 100vh;padding-top: 100px !important;" class="footer wp-content d-flex flex-column align-items-center justify-content-center p-6">			
			<img class="logo-footer" width="300" src="assets/logo-footer_al-piccolo-mondo.svg">
			<hr/>
			<div class="row " style="width:100%; text-align: left;">
				<div class="col-xl-5 col-lg-12 no-padding">
					<p>
						<span class="text-gold">Al Piccolo Mondo</span> <br>
						<!-- 19 rue Jourdan, 1060 Bruxelles (Saint-Gilles) <br>
						Belgique<br><br> 
						+32 2 538 87 94<br>
						info@alpiccolomondo.com -->

						<a class="text-grey" target="_blank" href="https://goo.gl/maps/GvXUBsJf2VEKwhpW9">19 rue Jourdan, 1060 Bruxelles (Saint-Gilles) – Belgique</a> <br><br>
						<a class="text-grey" href="tel:003225388794">+32 2 538 87 94</a><br> 
						<a class="text-grey" href="mailto:info@alpiccolomondo.com">info@alpiccolomondo.com</a>
					</p>
				</div>
				<div class="col-xl-5 col-lg-12 no-padding">
					<p>
						<span class="text-gold">Ouverture Ouvert 7 jours sur 7</span><br>
						(fermeture annuelle du 1 au 31 août)<br> 
						Déjeuner 12:00 - 15:00 Dîner 18:00 - 00:00<br>
						(fermeture du restaurant à minuit)<br><br>
						<span class="text-gold">Dresscode Tenue correcte exigée :</span><br>
						Pas de shorts, casquettes, tenues sportives, sandales ou tongs à l’intérieur du restaurant.
					</p>
				</div>
				<div class="col-xl-2 col-lg-12 no-padding">
					<p>
						<span class="text-gold">Suivez-nous sur</span><br>Facebook<br>Instagram
					</p>
				</div>
			</div>
			<hr/>
			<div id="legal" class="d-flex row" style="font-size:15px;width: 100%;">
				<div class="col-lg-6 col-sm-12 no-padding copyright" style="text-align: left;">Copyright © Al Piccolo Mondo 2023 - Powered by <a class="text-grey" target="_blank" href="https://greaty.be">Greaty.be</a></div>
				<div class="col-lg-6 col-sm-12 no-padding mentions" style="text-align: right;">
					<ul>
						<li>Mentions légales</li>
						<li>Politique de confidentialité</li> 
						<li>Politique de cookies</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {

	}
</script>

<style type="text/css">

	#legal .mentions ul {
		list-style: none;
		margin: 0;
		padding: 0;
	}

	#legal .mentions li {
		display: inline-block;
		margin-left: 20px;
	}

	.footer p{
		font-size: 18px !important;
	}

	.text-grey {
		color: #5C5C5C;
	}

	@media (max-width: 991px) {
		#legal {			
			flex-direction: column-reverse !important;	
			text-align: right;
		}

		#legal .copyright {
			font-size: 12px !important;
			text-align: right !important;
		}

		#legal .mentions ul {
			margin-bottom: 30px;
		}

		#legal .mentions li {
			line-height: 200%;
			display: block;
			margin-left: 20px;
		}
	}

	@media (max-width: 767px) {
		.logo-footer{
			width: 70%;
		}

		
		
	}
</style>