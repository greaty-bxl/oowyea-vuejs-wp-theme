<template>
	<div id="header">
		<transition name="slide-right">
			<div v-show="show" class="menu-fullscreen">
				<ul class="ul-simply texts">
					<li><a href="#" @mousemove="moveImg">Réservation</a></li>
					<li><a href="#">La Carte</a></li>
					<li><a href="#">Le Restaurant</a></li>
					<li><a href="#">La Cuisine</a></li>
					<li><a href="#">Banquet</a></li>
					<li><a href="#">Contact</a></li>
					<li><a href="#">Jobs</a></li>
					<li><a href="#">Faqs</a></li>
				</ul>
			</div>
			
		</transition>
		<transition name="slide-left">
			<div v-show="show" class="menu-left d-flex align-items-center justify-content-center">
				<div class="img-move" 
					:style="{backgroundImage: 'url(assets/03-Al-Piccolo-Mondo-11-21.png)',transform: 'translate('+img_translate.x+','+img_translate.y+') skewX(-7deg)'}"></div>
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

		

	</div>
	
</template>
<script>
	import 'bootstrap';
	import { mapState } from 'vuex';


	export default {
		data() {
			return {
				locomotive_active: false,
				show: true,
				minify: false,
				img_translate:{
					x: '0px',
					y: '0px'
				},
				timer: null,
				animating: false,
			}
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
			},
			moveImg(args) {
				console.log('move', args.movementX, args.movementY );
				
				if(!this.animating)
				{
					this.animating = true
					
					this.img_translate.x = (args.layerX * 2) + 'px'
					this.img_translate.y = ((args.layerY - 30) * 3) + 'px'



					clearTimeout( this.timer )
					this.timer = setTimeout( () => { 
						this.animating = false						
					}, 50 )	
				}
				
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
		
		font-weight: 300;
		font-style: normal;
		font-size: 55px;
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
		margin-top: -100px;
		margin-left: -100px;
		width: 400px;
		height: 400px;
		background-size: cover;
		transition: all 0.6s ease-out 0s;
	}

	.menu-left {		
		position: fixed;
		left: 0;
		top: 0;
		bottom: 0;
		width: 50%;
		background-color: #971732;
	}

	.topRightMenuOpen {
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

</style>