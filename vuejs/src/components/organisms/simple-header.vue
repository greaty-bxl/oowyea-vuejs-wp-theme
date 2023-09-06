<template>
	<div id="header">
		<transition name="slide-right">
			<div v-show="show" class="menu-fullscreen">
				<ul class="ul-simply texts">
					<li v-for="(item, key) in menuMove" :key="key">
						<a href="#"  :data-index="key" @mousemove="moveImg" @mouseover="overMenu" @mouseleave="outMenu" v-html="item.page"></a>
					</li>
					<!-- <li><a href="#" data-index="1" @mousemove="moveImg" @mouseover="overMenu" @mouseleave="outMenu">La Carte</a></li>
					<li><a href="#" data-index="2" @mousemove="moveImg" @mouseover="overMenu" @mouseleave="outMenu">Le Restaurant</a></li>
					<li><a href="#">La Cuisine</a></li>
					<li><a href="#">Banquet</a></li>
					<li><a href="#">Contact</a></li>
					<li><a href="#">Jobs</a></li>
					<li><a href="#">Faqs</a></li> -->
				</ul>
			</div>
			
		</transition>
		<transition name="slide-left">
			<div v-show="show" class="menu-left">
				<div style="width: 100%; height:100vh" class="d-flex align-items-center justify-content-center">
					
					<div class="img-move" v-for="(item, key) in menuMove" :key="key"
						:style="{
							backgroundImage: item.backgroundImage,
							transform: 
								'translate('+item.x+','+item.y+') skewX('+item.skewX+'deg)', width: item.width + 'px', opacity: item.opacity }
						">
					</div>
				</div>
			</div>
		</transition>
		

		<div class="header-menu d-flex justify-content-between align-items-start" :class="{minify: minify && !show, open: show}">
			<img class="logo" src="assets/logo-al-piccolo-mondo.svg">
			
			<div class="d-flex align-items-center justify-content-end topRightMenuOpen">
				
				<div class="d-flex align-items-end justify-content-end">
					<div class="resa" :class="{hidden:show}">Réservation</div>
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

		<div class="fullImgContainer" v-if="$store.state.fullImg">
			
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
			}
		},
		beforeMount(){
			this.menuMove = [
					{
						page: 'Réservation',
						backgroundImage: 'url(assets/03-Al-Piccolo-Mondo-11-21.png)',
					},
					{
						page: 'La Carte',
						backgroundImage: 'url(assets/03-Al-Piccolo-Mondo-11-21.png)',
					},
					{
						page: 'Le Restaurant',
						backgroundImage: 'url(assets/03-Al-Piccolo-Mondo-11-21.png)',
					},
					{
						page: 'La Cuisine',
						backgroundImage: 'url(assets/03-Al-Piccolo-Mondo-11-21.png)',
					},
					{
						page: 'Banquet',
						backgroundImage: 'url(assets/03-Al-Piccolo-Mondo-11-21.png)',
					},
					{
						page: 'Contact',
						backgroundImage: 'url(assets/03-Al-Piccolo-Mondo-11-21.png)',
					},
					{
						page: 'Jobs',
						backgroundImage: 'url(assets/03-Al-Piccolo-Mondo-11-21.png)',
					},
					{
						page: 'Faqs',
						backgroundImage: 'url(assets/03-Al-Piccolo-Mondo-11-21.png)',
					},
				] 
		},
		mounted () {
			/*let locomotive = this.$store.state.locomotive
			locomotive.on('scroll', (instance) => {
				console.log(instance);
			});*/
		},
		methods: {
			toggleDiv() {
				console.log('click');

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
				console.log('move', this.menuMove[0] );

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
				
			}
		},
		computed: {
			...mapState(['locomotive'])	// map l'état `count` du store à une propriété computed
		},
		watch: {
			locomotive(locomotive) {
				console.log(`locomotive`, locomotive);
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
		background-image: linear-gradient(to top, rgba(0,0,0,0), rgba(0,0,0,0.7));
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
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		width: 50%;
		background-color: #971732;
		padding-top: 150px;
		padding-right: 250px;
		text-align: right;
	}

	.menu-fullscreen a {
		color: inherit;
		text-decoration: none;
		display: inline-block;
		position: relative;
	}

	.menu-fullscreen a:after {		
		background: none repeat scroll 0 0 transparent;
		bottom: 18px;
		content: "";
		display: block;
		height: 12px;
		left: -3%; 
		position: absolute;
		background: rgba(180, 158, 92, 0.5);
		transition: all 0.3s ease-in-out 0s;
		width: 0;
	}

	.menu-fullscreen a:hover:after { 
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

		.menu-fullscreen .ul-simply.texts {
			margin-top: 20px;
			position: absolute;
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