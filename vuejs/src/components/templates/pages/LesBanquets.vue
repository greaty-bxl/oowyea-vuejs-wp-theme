<template>
	<div class="section-wrap banquet-section">
		<div class="clear"></div>

		<div class="container-fluid min-vh-100 top-bg" :style="{backgroundImage: 'url('+post.thumb+')' }"></div>
		<div class="wp-content">

			<VideoBackground src="/assets/al_piccolo_mondo_540p.mp4" poster="assets/home-poster.png" class="video-container"/>

			<div style="min-height: 100vh;" class="row">
				<div data-scroll data-scroll-speed="2" class="col-xl-6 col-lg-12 p-6" style="text-align: left;">
					<h1 data-scroll data-scroll-offset="10%" class="title">
						<div data-scroll data-scroll-speed="-0.3" data-scroll-direction="horizontal">LE BANQUET</div> 
					</h1>
					<div data-scroll class="post_content" v-html="post.post_content"></div>	
					<div data-scroll class="section-link-container">
						<div data-scroll data-scroll-speed="0.7" data-scroll-direction="horizontal" >
							<a class="section-link" target="_blank" href="assets/76707-Menu-BR-SC-12.pdf">>> DÉCOUVRIR NOS FORMULES</a>
						</div>	
					</div>
					<div data-scroll class="section-link-container">
						<div data-scroll data-scroll-speed="0.7" data-scroll-direction="horizontal" >
							<a class="section-link" target="_blank" href="assets/76707-Menu-BR-SC-12.pdf">>> RÉSERVER VOTRE BANQUET</a>
						</div>	
					</div>
					

				</div>
				<div data-scroll data-scroll-speed="-1" style="min-height: 100vh;" class="col-xl-6 col-lg-12 home-imgs d-flex align-items-end justify-content-end">
					<div id="img1" class="to-reveal" :class="{reveal: img1}" style="background-image: url('../assets/Leo-et-Aldo-Spagnuolo-les-fondateurs-du-al-piccolo-mondo-en-1979.png')"></div>
					<div id="img2" class="to-reveal" :class="{reveal: img2}" style="background-image: url('../assets/Terrasse-2023.png')"></div>
					<div id="img3" class="to-reveal" :class="{reveal: img3}" style="background-image: url('../assets/03-Al-Piccolo-Mondo-11-21.png')"></div>
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
			data () {
				return {
					img1: false,
					img2: false,
					img3: false,
					scroll: null,
					elementsInViewport: [],
				}
			},
			mounted (){
				this.$emit('template_mounted')


				let locomotive = this.$store.state.locomotive
				
				locomotive.on('scroll', this.checkImages);



			},
			methods : {
				checkImages() {
					const elements = document.querySelectorAll('.banquet-section .to-reveal');
					
					elements.forEach((element, index) => {
						const rect = element.getBoundingClientRect();

						// Vérifiez si l'élément est dans la fenêtre d'affichage
						if (rect.top <= window.innerHeight && rect.bottom >= 0) {
							if (!this.elementsInViewport.includes(index)) {
								this.elementsInViewport.push(index);
								this.doSomething(element);
							}
						}
					});
				},
				doSomething(element) {

					if( this.$(element).hasClass('to-reveal') )
					{
						setTimeout( () => {
							this.$(element).addClass('reveal')
						}, 450 )					
					}
					// Ajoutez votre code ici

				},
			}
		}
</script>