<template>
	<div class="section-wrap banquet-section">
		<div class="clear"></div>
		<div class="wp-content">
			<div class="row">
				<div data-scroll data-scroll-speed="-1" style="" class="imgs-trio-banquet col-xl-12 col-lg-12 home-imgs d-flex align-items-start justify-content-center no-padding">
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

<style scoped>

	.home-imgs #img1 {
		top: 0vh;
		right: auto;
		width: 52vh;
		height: 0vh; 
	}

	.home-imgs #img2 {
		top: 77vh;
		right: 0;
		width: 50%;
		height: 0vh;
	}

	.home-imgs #img3 {
		top: 94vh;
		right: auto;
		width: 45vh;
		height: 0vh;
	}

	.home-imgs #img1.reveal {
		height: 70vh;
	}

	.home-imgs #img2.reveal {
		height: 77vh;
	}

	.home-imgs #img3.reveal {
		height: 28vh;
	}

	.imgs-trio-banquet {
		min-height: 155vh;
	}

	@media (max-width: 767px) {
		.home-imgs #img2 {
			width: 100vw;
			right: -45vw;
		}

		.imgs-trio-banquet {
			min-height: 100vh;
		}	

		.imgs-trio-banquet.home-imgs {
			height: 100vh;
			transform: scale(0.6) translateY(-20vh) translateX(5%) !important;
		}
	}
	
</style>