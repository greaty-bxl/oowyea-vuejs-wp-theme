<template>
	<div class="section-wrap">
		<div class="clear"></div>

		
		<div class="wp-content">

			<VideoBackground src="/assets/al_piccolo_mondo_540p.mp4" poster="assets/home-poster.png" class="video-container"/>

			<div style="min-height: 100vh;" class="row">
				<div data-scroll data-scroll-speed="2" class="col-xl-6 col-lg-12 p-6" style="text-align: left;">
					<h1 data-scroll data-scroll-offset="10%" class="title">
						<div data-scroll data-scroll-speed="-0.3" data-scroll-direction="horizontal">UNE</div> 
						<div data-scroll data-scroll-speed="0.3" data-scroll-direction="horizontal">HISTOIRE DE</div>
						<div data-scroll data-scroll-speed="-0.3" data-scroll-direction="horizontal">FAMILLE</div>
					</h1>
					<div data-scroll class="post_content" v-html="post.post_content"></div>	
					<div data-scroll class="section-link-container">
						<div data-scroll data-scroll-speed="0.7" data-scroll-direction="horizontal" >
							<a class="section-link" target="_blank" href="assets/76707-Menu-BR-SC-12.pdf">>> DÉCOUVRIR LA CARTE</a>
						</div>	
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


			let locomotive = this.$store.state.locomotive
			
			locomotive.on('scroll', this.checkImages);



		},
		methods : {
			checkImages() {
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
		top: 20vh;
		right: 45%;
		width: 39vh;
		height: 0vh; 
	}

	.home-imgs #img2 {
		top: calc(26vh + 2.5%);
		right: -15%;
		width: 57%;
		height: 0vh; 	
	}

	.home-imgs #img3 {
		top: 61vh;
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
			margin-top: -30vh;
			transform: scale(0.9) translateY(7%) !important;
		}
	}

	@media (max-width: 767px) {
		.home-imgs {
			margin-top: -60vh;
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