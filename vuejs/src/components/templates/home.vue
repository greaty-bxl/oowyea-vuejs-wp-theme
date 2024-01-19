<template>
	<div class="section-wrap home-section">
		<div class="clear"></div>

		
		<div class="wp-content">

			<VideoBackground src="/assets/al_piccolo_mondo_540p.mp4" poster="assets/home-poster.png" class="video-container"/>

			<div class="row">
				<div data-scroll data-scroll-speed="2" class="col-xl-6 col-lg-12 p-6" style="text-align: left;">
					<h1 data-scroll data-scroll-offset="10%" class="title">
						<div v-for="(item, i) in splitAndTrim(post.post_title)" :key="i" 
							data-scroll :data-scroll-speed="item.speed" 
							data-scroll-direction="horizontal" v-html="item.text">
							
						</div> 
						<!-- <div data-scroll data-scroll-speed="0.3" data-scroll-direction="horizontal">HISTOIRE DE</div>
						<div data-scroll data-scroll-speed="-0.3" data-scroll-direction="horizontal">FAMILLE</div> -->
					</h1>
					<div data-scroll class="post_content" v-html="post.post_content"></div>	
					<div data-scroll class="section-link-container">
						<div data-scroll data-scroll-speed="0.7" data-scroll-direction="horizontal" >
							<a class="section-link" target="_blank" :href="carte_restaurant" v-html="pll__('>> DÉCOUVRIR LA CARTE')"></a>
						</div>	
					</div>
					

				</div>
				<div data-scroll data-scroll-speed="1" class="col-xl-6 col-lg-12 home-imgs d-flex align-items-end justify-content-end">
					<div id="img1" class="to-reveal" :class="{reveal: img1}" :style="{backgroundImage: 'url('+post.acf_fields.image_1+')'}"></div>
					<div id="img2" class="to-reveal" :class="{reveal: img2}" :style="{backgroundImage: 'url('+post.acf_fields.image_2+')'}"></div>
					<div id="img3" class="to-reveal" :class="{reveal: img3}" :style="{backgroundImage: 'url('+post.acf_fields.image_3+')'}"></div>
				</div>
			</div>
			

			
		
		</div>
		<div class="clear"></div>
	</div>
</template>

<script>
	//import ScrollReveal from 'scrollreveal'

	/*import LocomotiveScroll from 'locomotive-scroll';
	import 'locomotive-scroll/dist/locomotive-scroll.css';*/


	import VideoBackground from 'Organisms/VideoBackground'
	export default {
		components: {
			VideoBackground
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

			console.log('home', this.wp);

		},
		methods : {
			checkImages() {
				const elements = document.querySelectorAll('.home-section .to-reveal');
				
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
			/*splitAndTrim(str) {
				// Diviser la chaîne en utilisant '/' et supprimer les espaces superflus
				let speed = -0.3; // Vitesse initiale

				return str.split('/').map((element) => {
					// Créer l'objet avec le texte et la vitesse
					let obj = {
						text: element.trim(),
						speed: speed
					};

					// Inverser la vitesse pour le prochain élément
					speed = -speed;

					return obj;
				});
 
			}*/
		},
		computed : {
			carte_restaurant() {
				return this.$store.state.wp.acf.options.carte_restaurant
			}
		}
	}
</script>

<style type="text/css">

	
</style>