<template>
	<div class="section-wrap">
		<div class="clear"></div>

		
		<div class="wp-content">

			<VideoBackground src="assets/al_piccolo_mondo_540p.mp4" poster="assets/home-poster.png" class="video-container"/>

			<div style="min-height: 100vh;" class="row">
				<div data-scroll data-scroll-speed="2" class="col-xl-6 col-lg-12 p-6" style="text-align: left;">
					<h1 data-scroll class="title">
						<div data-scroll data-scroll-speed="-0.3" data-scroll-direction="horizontal">UNE</div> 
						<div data-scroll data-scroll-speed="0.3" data-scroll-direction="horizontal">HISTOIRE DE</div>
						<div data-scroll data-scroll-speed="-0.3" data-scroll-direction="horizontal">FAMILLE</div>
					</h1>
					<div v-html="post.post_content"></div>	
					<div data-scroll data-scroll-speed="0.7" data-scroll-direction="horizontal" >
						<a class="section-link" target="_blank" href="assets/76707-Menu-BR-SC-12.pdf">>> DÉCOUVRIR LA CARTE</a>
					</div>

				</div>
				<div data-scroll data-scroll-speed="-1" style="min-height: 100vh;" class="col-xl-6 col-lg-12 home-imgs d-flex align-items-end justify-content-end">
					<div id="img1" class="to-reveal" :class="{reveal: img1}" style="background-image: url('assets/Leo-et-Aldo-Spagnuolo-les-fondateurs-du-al-piccolo-mondo-en-1979.png')"></div>
					<div id="img2" class="to-reveal" :class="{reveal: img2}" style="background-image: url('assets/Terrasse-2023.png')"></div>
					<div id="img3" class="to-reveal" :class="{reveal: img3}" style="background-image: url('assets/03-Al-Piccolo-Mondo-11-21.png')"></div>
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

			/*const scrollReveal = ScrollReveal({
				container: '#app', // Utilise le div spécifique comme conteneur de défilement
				reset: true,
			});

			var slideUp = {
				delay: 0,
				opacity: null,
				afterReveal: (el) => {
					el.classList.add('reveal');
				},
				afterReset: (el) => {
					console.log('hello');
					el.classList.remove('reveal');
				}
			};

			scrollReveal.reveal('.img1', slideUp)
			scrollReveal.reveal('.img2', slideUp)
			scrollReveal.reveal('.img3', slideUp)*/

			
			// Declare Scene
			//console.log(LocomotiveScroll);
			/*this.scroll = new LocomotiveScroll({
				smooth: true,
				// Autres options si nécessaire
			});*/

			

			console.log('locomotive', this.$store.state.locomotive);

			let locomotive = this.$store.state.locomotive
			/*locomotive.on('scroll', (instance) => {
				const progress = instance.scroll.y / (instance.limit.y - window.innerHeight);
				document.getElementById('element-to-animate').style.transform = `translateX(${(progress - 1) * 20}%)`;
			})*/;

			
			//this.scroll.update()
			
			locomotive.on('scroll', this.checkElements);


		},
		beforeDestroy() {
			//this.scroll.destroy();
		},
		methods : {
			checkElements() {
				const elements = document.querySelectorAll('.to-reveal');
				
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
				console.log('Element is visible!', this.$(element).hasClass('to-reveal') ) ;

				if( this.$(element).hasClass('to-reveal') )
				{
					setTimeout( () => {
						this.$(element).addClass('reveal')
					}, 450 )					
				}
				// Ajoutez votre code ici

			}

		}


	}
</script>

<style type="text/css">
	.video-container{
		height: 100vh;
	}

	.home-imgs > div {
		position: absolute;
		overflow: hidden;
		background-size: cover;
		background-position: center center;
		transition: all 0.7s ease-out;
	}


	.home-imgs #img1 {
		bottom: 32vh;
		right: 45%;
		width: 39vh;
		height: 0vh; 
	}

	.home-imgs #img2 {
		bottom: calc(39vh + 2.5%);
		right: -15%;
		width: 57%;
		height: 0vh; 	
	}

	.home-imgs #img3 {
		bottom: 0vh;
		right: 10%;
		width: 57vh;
		height: 0vh; 
	}

	.home-imgs #img1.reveal {
		height: 50vh;
	}

	.home-imgs #img2.reveal {
		height: 29vh;
	}

	.home-imgs #img3.reveal {
		height: 39vh 
	}

	@media (max-width: 991px) {
		.home-imgs {
			margin-top: -350px;
			transform: scale(0.9) translateY(7%) !important;
		}
	}

	@media (max-width: 767px) {
		.home-imgs {
			margin-top: -450px;
			transform: scale(0.6) translateY(40%) translateX(5%) !important;
		}

		.home-imgs #img3 {
			right: 0%;
		}

		.home-imgs #img2 {
			width: 75%;
			right: -35%;
		}
	}

	#element-to-animate {
		position: relative;
		transform: translateX(0);
	}
</style>