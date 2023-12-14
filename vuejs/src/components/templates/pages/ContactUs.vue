<template>
	<div class="section-wrap">
		<div class="clear"></div>

		<div class="container-fluid min-vh-100 top-bg" :style="{backgroundImage: 'url('+post.thumb+')' }"></div>
		<div class="wp-content">
			<div class="row">
				<div data-scroll data-scroll-speed="2" class="col-xl-6 col-lg-12 p-6" style="text-align: left;">
					<h1 data-scroll data-scroll-offset="10%" class="title">
						<div data-scroll data-scroll-speed="-0.3" data-scroll-direction="horizontal">CONTACTEZ</div>   
						<div data-scroll data-scroll-speed="0.3" data-scroll-direction="horizontal">AL PICCOLO</div>
						<div data-scroll data-scroll-speed="-0.3" data-scroll-direction="horizontal">MONDO</div>
					</h1>
					<div data-scroll class="section-link-container">
						<div data-scroll data-scroll-speed="0.7" data-scroll-direction="horizontal" >
							<a class="section-link" target="_blank" href="assets/76707-Menu-BR-SC-12.pdf">>> ENVOYER UN MESSAGE</a>
						</div>	
					</div>
					<div data-scroll class="section-link-container">
						<div data-scroll data-scroll-speed="0.7" data-scroll-direction="horizontal" >
							<a class="section-link" target="_blank" href="assets/76707-Menu-BR-SC-12.pdf">>> RÉSERVER UNE TABLE</a>
						</div>	
					</div>
				</div>
			</div>
			<div class="row px-6">
				<div class="col-xl-4 col-lg-12" style="text-align: left;">
					<p style="max-width: 340px;">
						<span class="text-gold">Al Piccolo Mondo</span> <br>
						<!-- 19 rue Jourdan, 1060 Bruxelles (Saint-Gilles) <br>
						Belgique<br><br> 
						+32 2 538 87 94<br>
						info@alpiccolomondo.com -->

						<a class="text-grey" target="_blank" href="https://goo.gl/maps/GvXUBsJf2VEKwhpW9">19 rue Jourdan, 1060 Bruxelles (Saint-Gilles)<br>Belgique</a> <br><br>
						<a class="text-grey" href="tel:003225388794">+32 2 538 87 94</a><br> 
						<a class="text-grey" href="mailto:info@alpiccolomondo.com">info@alpiccolomondo.com</a>
					</p>
				</div>
				<div class="col-xl-4 col-lg-12" style="text-align: left;">
					<p style="max-width: 340px;">
						<span class="text-gold">Ouverture</span><br>
						Ouvert 7 jours sur 7<br>
						(fermeture annuelle du 1 au 31 août)<br> 
						Déjeuner 12:00 - 15:00 <br>Dîner 18:00 - 00:00<br>
						(fermeture du restaurant à minuit)<br><br>
						<span class="text-gold">Dresscode</span><br>
						Tenue correcte exigée : Pas de shorts, casquettes, tenues sportives, sandales ou tongs à l’intérieur du restaurant.
					</p>
				</div>
				<div class="col-xl-4 col-lg-12" style="text-align: left;">
					<p style="max-width: 340px;">
						<span class="text-gold">Parkings</span> <br>

						Parking "Louise Village" Rue Dejoncker 36 1060 Bruxelles <br>
						Interparking "Stéphanie - Louise (Wiltchers)" Avenue Louise 83 A 1060 Bruxelles <br>
						Interparking "Sablon Poelaert" Place Poelaert 1000 Bruxelles <br>
						Interparking "Deux Portes Toison d'Or" Boulevard de Waterloo 2a 1000 Bruxelles <br>
						Parking extérieur sur l’Avenue de la Toison d’Or et la Rue Dejoncker <br><br>

						<span class="text-gold">Transports </span><br>
						Trams 8 92 93 97 <br>
						Métro 2 et 6 (arrêt "Louise") <br>
						A environ 20 minutes de marche ou 8 minutes en voiture de la Gare du Midi, de la Gare Centrale et de la Gare Bruxelles-Luxembourg<br><br> 

						TAXIS VERTS <a class="text-grey" href="tel:003223494949">+32 2 349 49 49</a><br> 
						TAXIS BLEUS <a class="text-grey" href="tel:003222680000">+32 2 268 00 00</a><br> 
					</p>
				</div>
			</div>
		</div>
		<div class="clear"></div>
	</div>
</template>

<script>
	export default {
		components: {
			
		},
		props: {
			'post' : Object
		},
		mounted (){
	
		}
	}
</script>