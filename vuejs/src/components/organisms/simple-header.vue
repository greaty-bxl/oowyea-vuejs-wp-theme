<template>
	<div id="header">
		<transition name="slide-right">
			<div v-show="show" class="menu-fullscreen">
				<ul class="ul-simply texts">
					<li v-for="(item, key) in wp.menus['header-menu']" :key="key">
						<a :href="item.url"	:data-index="key" @click="toggleDiv" @mousemove="moveImg" @mouseover="overMenu" @mouseleave="outMenu" v-html="item.title"></a>
					</li>
				</ul>
				<div class="bottom-links texts">
					<a href="tel:003225388794">+32 2 538 87 94</a><br> 
					<a class="text-gold" href="mailto:info@alpiccolomondo.com">info@alpiccolomondo.com</a>
				</div>
				
			</div>
			
		</transition>
		<transition name="slide-left">
			<div v-show="show" class="menu-left">
				<div style="width: 100%; height:100vh" class="d-flex align-items-center justify-content-center">
					
					<div class="img-move" v-for="(item, key) in wp.menus['header-menu']" :key="key"
						:style="{
							backgroundImage: 'url(' + item.acf.image.url + ')',
							transform: 
								'translate('+item.x+','+item.y+') skewX('+item.skewX+'deg)', width: item.width + 'px', opacity: item.opacity }
						">
					</div>
				</div>
			</div>
		</transition>
		

		<div style="pointer-events:none" class="header-menu d-flex justify-content-between align-items-start" :class="{minify: minify && !show, open: show}" :style="backgroundStyle">
			<img class="logo" src="assets/logo-al-piccolo-mondo.svg">
			
			<div style="pointer-events:auto" class="d-flex align-items-center justify-content-end topRightMenuOpen">
				
				<div class="d-flex align-items-end justify-content-end">
					<div class="resa" v-show="!show" :class="{hidden:show}">Réservation</div>
					<div class="icos" v-show="show">
						<a target="_blank" href="https://www.instagram.com/alpiccolomondobruxelles/?hl=fr"><img height="16" src="assets/instagram.svg"></a>
						<a target="_blank" href="https://www.facebook.com/alpiccolomondorestaurant"><img height="16" src="assets/facebook-f.svg"></a>
					</div>
					<div class="dropdown">
						<span class="dropdown-toggle" id="dropdownLangsButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							FR
						</span>
						<div class="dropdown-menu" aria-labelledby="dropdownLangsButton">
							<a class="dropdown-item" href="#">EN</a>
						</div>
					</div>
				</div>
				
				<div class="menu-bt d-flex flex-column justify-content-center align-items-center" :class="{ 'close-bt': show }" @click="toggleDiv()">
					<div class="bar-1"></div>
					<div class="bar-2"></div>
				</div>
				
			</div>
		</div>

		<div @mousemove="fullImgMove" class="fullImgContainer d-flex flex-column justify-content-center align-items-center" v-if="$store.state.fullImg" @click="close()" >
			<img :style="{transform: 'translateY('+fullImgMoveY+'px)'}" :src="$store.state.fullImg" width="100%" />
		</div>

	</div>
	
</template>
<script>
	import 'bootstrap';
	import { mapState } from 'vuex';


	export default {
		data() {
			return {
				locomotive_active: false,
				show: false,
				minify: false,
				menuMove: [
					
				],
				timer: [],
				timer_skewX: [],
				timer_out: [],
				animating: false,
				fullImgMoveY: 0,
				animatingImgY : false,
			}
		},
		beforeMount(){
			this.menuMove = [
					{
						page: 'Réservation',
						backgroundImage: 'url(assets/menu/reservation_al-piccolo-mondo.jpg)',
					},
					{
						page: 'La Carte',
						backgroundImage: 'url(assets/menu/carte_al-piccolo-mondo.jpg)',
					},
					{
						page: 'Le Restaurant',
						backgroundImage: 'url(assets/menu/restaurant_al-piccolo-mondo.jpg)',
					},
					{
						page: 'La Cuisine',
						backgroundImage: 'url(assets/menu/cuisine_al-piccolo-mondo.jpg)',
					},
					{
						page: 'Banquet',
						backgroundImage: 'url(assets/menu/banquet_al-piccolo-mondo.jpg)',
					},
					{
						page: 'Contact',
						backgroundImage: 'url(assets/menu/contact_al-piccolo-mondo.jpg)',
					},
					{
						page: 'Jobs',
						backgroundImage: 'url(assets/menu/jobs_al-piccolo-mondo.jpg)',
					},
					{
						page: 'Faqs',
						backgroundImage: 'url(assets/menu/faq_al-piccolo-mondo.jpg)',
					},
				] 
		},
		mounted () {
			console.log( 'header menu', this.wp.menus['header-menu'] );

		},
		methods: {
			toggleDiv() {

				this.show = !this.show;

				if( !this.show ){
					this.locomotive.start()
				}
				else
				{
					this.locomotive.stop()
				}
			},
			moveImg(args) {

				let index = args.target.dataset.index

				
				
				if( !this.animating )
				{
					this.animating = true
					
					/*this.menuMove[index].x = (args.layerX * 1.5) + 'px'
					this.menuMove[index].y = ((args.layerY - 30) * 3) + 'px'

					this.menuMove[index].skewX = args.movementX*/
					

					this.$set(this.menuMove, index, {
						...this.menuMove[index],
						x: (args.layerX * 1.5) + 'px',
						y: ((args.layerY - 30) * 3) + 'px',
						skewX: args.movementX,
					});

					clearTimeout( this.timer[index] )
					this.timer[index] = setTimeout( () => { 
						this.animating = false						
					}, 50 )	
				}

				clearTimeout( this.timer_skewX[index] )
				this.timer_skewX[index] = setTimeout( () => { 
					/*this.menuMove[index].skewX = 0	*/
					
					this.$set(this.menuMove, index, {
						...this.menuMove[index],
						skewX: 0,
					});

				}, 50 )				
				
			},
			overMenu ( args ) {
				let index = args.target.dataset.index

				clearTimeout( this.timer_out[index] )
				this.$set(this.menuMove, index, {
					...this.menuMove[index],
					'margin-left': '200px',
					width: 400,
					opacity: 1,
				});

			
			},
			outMenu ( args ) {
				let index = args.target.dataset.index

				clearTimeout( this.timer_out[index] )
				this.timer_out[index] = setTimeout( () => { 
					/*this.menuMove[index].width = 0
					this.menuMove[index].opacity = 0*/	
					
					this.$set(this.menuMove, index, {
						...this.menuMove[index],
						'margin-left': '0px',
						width: 0,
						opacity: 0,
					});

				}, 150 )	
				
			},
			close() {
				this.$store.state.fullImg = null
				this.animatingImgY = false
				this.fullImgMoveY = 0
			},
			fullImgMove(event) {
				if( this.$(event.target).height() > this.$(window).height() ) {


					let percent = ((event.clientY / this.$(window).height() * 100 - 50) * 2) / 100  * -1
					let depass = (this.$(event.target).height() - this.$(window).height()) / 2				
					
					if( !this.animatingImgY ) {
						this.animatingImgY = true
						this.fullImgMoveY = depass * percent
						setTimeout( () => { 
							this.animatingImgY = false
						}, 200)
					}
				}
				
			}
		},
		computed: {
			...mapState(['locomotive']),// map l'état `count` du store à une propriété computed
			backgroundStyle() {
				if (!this.show) {
					return {
						backgroundImage: 'linear-gradient(to top, rgba(0,0,0,0), rgba(0,0,0,0.7))'
					};
				}
				return {};
			}

		},
		watch: {
			locomotive(locomotive) {
				if( this.locomotive_active == false )
				{
					this.locomotive_active = true
					locomotive.on('scroll', (instance) => {
						let y = instance.scroll.y
						
						if( y > 50 )
						{
							this.minify = true
						}
						else
						{
							this.minify = false
						}
					});
				}
				// Ici, vous pouvez réagir au changement de valeur de `count`
			}
		}

	}
</script>
<style type="text/css">
	#header {
		color: #B49E5C;
	}

	.header-menu {
		position: absolute;
		width: 100%;
		height: 180px;
		/*background-image: linear-gradient(to top, rgba(0,0,0,0), rgba(0,0,0,0.7));*/
		padding: 35px;
		transition: all 0.2s linear;
	}

	.header-menu .logo {
		width: 210px;
	}

	.header-menu .menu-bt {
		transition: all 0.2s linear;
	}

	.header-menu.open,
	.header-menu.open .menu-bt {
		transition: all 0.6s ease-in-out 0.4s;
	}

	

	.header-menu.minify {
		transform: translateY(-200px);
	}

	.header-menu.minify .menu-bt{
		transform: translateY(200px);
	}

	.menu-fullscreen {
		overflow: auto;
		font-weight: 300;
		font-style: normal;
		font-size: 45px;
		line-height: 130%;
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		width: 50%;
		background-color: #971732;
		padding-top: 120px;
		padding-right: 250px;
		text-align: right;
	}

	.menu-fullscreen a {
		color: inherit;
		text-decoration: none;
		display: inline-block;
		position: relative;
	}

	.menu-fullscreen .bottom-links{
		font-size: 18px;
		text-align: right;
		line-height: 140%;
		text-decoration: underline;
		margin-top: 25px;
	}

	.menu-fullscreen .bottom-links a {
		text-decoration: underline;
	}

	.menu-fullscreen .ul-simply a:after {		
		background: none repeat scroll 0 0 transparent;
		bottom: 10px;
		content: "";
		display: block;
		height: 12px;
		left: -3%; 
		position: absolute;
		background: rgba(180, 158, 92, 0.5);
		transition: all 0.3s ease-in-out 0s;
		width: 0;
	}

	.menu-fullscreen .ul-simply a:hover:after { 
		width: 106%; 
		left: -3%; 
	}

	.menu-left .img-move {
		position: absolute;
		margin-top: -100px;
		opacity: 0;
		margin-left: 200px;
		width: 400px;
		height: 400px;
		background-size: cover;
		background-position: center center;
		transition: transform 0.6s ease-out 0s, width 0.3s ease-in 0s, opacity 0.3s ease-in 0s, margin-left 0.3s ease-in 0s;
	}

	.menu-left {		
		position: fixed;
		left: 0;
		top: 0;
		bottom: 0;
		width: 50%;
		background-color: #971732;
	}

	.topRightMenuOpen, .topRightMenuOpen .dropdown-item {
		font-size: 17px;	
	}
	

	.topRightMenuOpen > div {
		margin-left: 30px;
	}

	.topRightMenuOpen .resa {
		font-size: 20px;
		margin-right: 30px;
		height: 24px;
		top: -4px;
		position: relative;
	}

	.topRightMenuOpen .icos{
		margin-right: 20px;
		text-wrap: nowrap;
		transform: translateY(-2px);
	}

	.topRightMenuOpen .icos a {
		display: inline-block;
		margin-right: 15px;
	}

	.topRightMenuOpen .resa.hidden {
		visibility: hidden;
	}

	.topRightMenuOpen .dropdown-menu {

		background-color: #B49E5C;
		
		color: inherit;
		min-width: 0;
		margin-left: -1rem;
	}

	.topRightMenuOpen .dropdown-menu a {
		color: white;
		padding-top: 0px;
		padding-bottom: 0px;
	}
	.topRightMenuOpen .dropdown-menu a:hover {
		background-color: transparent;
	}

	.slide-right-enter-active,
	.slide-right-leave-active,
	.slide-left-enter-active,
	.slide-left-leave-active {
		transition: all 0.8s ease-in-out;
	}

	.slide-right-enter,
	.slide-right-leave-to {
		transform: translateX(100%);
	}

	.slide-left-enter,
	.slide-left-leave-to {
		transform: translateX(-100%);
	}

	.menu-fullscreen .texts {
		transition: all 0.6s ease-out 0.7s;
	}

	
	.slide-right-leave-active .texts{
		transition: all 0.6s ease-out;
	}

	.slide-right-enter .texts,
	.slide-right-leave-to .texts {
		opacity: 0;
		transform: translateX(20%);
	}


	.menu-bt {
		width: 45px;
		height: 45px;
		background-color: #971732;
		border-radius: 50px;
		text-align: center;
	}

	.bar-1, .bar-2 {
		position: absolute;	
		width: 23px;
		height: 2px;
		background-color: #B49E5C;
		transition: all 0.4s ease-out;
		transform-origin: center;
	}

	.bar-1 {
		margin-top: -12px;
	}

	.bar-2 {
		margin-top: 12px;
	}

	.close-bt .bar-1 {
		margin-top: 0px;
		transform: rotate(45deg) ;
	}
	.close-bt .bar-2 {
		margin-top: 0px;
		transform: rotate(-45deg) ;
	}


	.fullImgContainer {
		background-color: #000000;
		position: fixed;
		height: 100vh;
		width: 100%;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 5000;
	}

	.fullImgContainer img{
		transition: all 0.7s linear;
	}

	.fullImgContainer img:hover {
		cursor: url('https://dev.alpiccolomondo.be/assets/mouse-close.svg') 32 32, auto;
	}

	@media (max-width: 991px) {
		.menu-fullscreen {
			width: 100%;
		}
		.menu-left {
			display: none;
		}
		.menu-left .img-move{
			display: none;
		}

		.menu-fullscreen .texts {
			margin-top: 20px;
			width: 90vw;
			right: 40px;
		}
	}

	@media (max-width: 767px) {
		.menu-fullscreen {
			font-size: 35px;
		}

		.menu-fullscreen a:after {		
			bottom: 13px;
			height: 6px;
			width: 0;
		}

		.menu-fullscreen .ul-simply.texts {
			margin-top: 20px;
			right: 30px;
		}

		.header-menu {
			padding: 20px;
		}

		.header-menu .logo {
			width: 35%;
		}

		.topRightMenuOpen {
			transform: translateY(4vw);
		}

		.topRightMenuOpen, .topRightMenuOpen .dropdown-item {
			font-size: 13px;
		}

		.topRightMenuOpen .resa {
			font-size: 15px;
			margin-right: 20px;
			height: 17px
		}

		.menu-bt {
			transform: scale(0.8);
		}

		.header-menu.minify .menu-bt{
			transform: translateY(200px) scale(0.8);
		}

		.topRightMenuOpen > div {
			margin-left: 10px;
		}
	}

</style>