<template>
	

	<div id="header">
		<div class="burger-menu" @click="toggleNav">
			
			<div  class="icon button-header"  :class="['close', {'active': this.open}]" >
				<div class="burger"></div>
			</div>

		</div>
	
			

		<transition name="fade">
		<div class="header-tomu-container" v-if="open">

				<div class="menu-tomu" >
					
					<svg xmlns="http://www.w3.org/2000/svg" id="Calque_1" data-name="Calque 1" viewBox="0 0 85.22 85.22" fill="currentColor" ><defs>
					</defs>
					<path class="cls-1" d="M20.25,32.48V73a10,10,0,0,1-1,3.87A5.91,5.91,0,0,1,16.1,80a9.78,9.78,0,0,1-3.86,1,9.79,9.79,0,0,1-3.87-1A5.93,5.93,0,0,1,5.2,76.85a9.83,9.83,0,0,1-1-3.87V32.48a9.78,9.78,0,0,1,1-3.86,6,6,0,0,1,3.17-3.18,9.93,9.93,0,0,1,3.87-1,9.93,9.93,0,0,1,3.86,1,6,6,0,0,1,3.18,3.18,10,10,0,0,1,1,3.86M8,21a12.14,12.14,0,0,0-3.72,2.22v-19H81V73a9.83,9.83,0,0,1-1,3.87A5.93,5.93,0,0,1,76.85,80,9.83,9.83,0,0,1,73,81a9.78,9.78,0,0,1-3.86-1,5.91,5.91,0,0,1-3.18-3.17A9.83,9.83,0,0,1,65,73V32.48a12.26,12.26,0,0,0-7.55-11.31,11.26,11.26,0,0,0-4.26-.92,14.3,14.3,0,0,0-3.59.41,12.56,12.56,0,0,0-2.94,1.21,12.3,12.3,0,0,0-2.22,1.65,12,12,0,0,0-1.8,2.09,12,12,0,0,0-1.8-2.09,12.3,12.3,0,0,0-2.22-1.65,12.35,12.35,0,0,0-9.27-1.21,11.75,11.75,0,0,0-2.84,1.16,12.28,12.28,0,0,0-2.32,1.7,12,12,0,0,0-1.8,2.09,12,12,0,0,0-1.8-2.09,12,12,0,0,0-5.16-2.86,13.82,13.82,0,0,0-3.47-.41A11.38,11.38,0,0,0,8,21M81.63,81.64A12.19,12.19,0,0,0,85.22,73V0H0V73a12.08,12.08,0,0,0,.93,4.69,11.86,11.86,0,0,0,2.66,4,11.86,11.86,0,0,0,4,2.66,12.08,12.08,0,0,0,4.69.93,12.26,12.26,0,0,0,11.31-7.55A12.06,12.06,0,0,0,24.48,73V32.48a9.93,9.93,0,0,1,1-3.86,6,6,0,0,1,3.18-3.18,9.93,9.93,0,0,1,3.86-1,9.93,9.93,0,0,1,3.87,1,6,6,0,0,1,3.18,3.18,9.93,9.93,0,0,1,1,3.86V78.84a3.48,3.48,0,0,0,0,.46,1.7,1.7,0,0,0,.62,1.07,2.06,2.06,0,0,0,1.5.62,2,2,0,0,0,1.49-.62,2,2,0,0,0,.62-1.5V32.48a10,10,0,0,1,1-3.86,6,6,0,0,1,3.18-3.18,9.93,9.93,0,0,1,3.86-1,9.93,9.93,0,0,1,3.87,1,6,6,0,0,1,3.17,3.18,9.78,9.78,0,0,1,1,3.86V73a12.08,12.08,0,0,0,.93,4.69,12.38,12.38,0,0,0,6.62,6.62,12.08,12.08,0,0,0,4.69.93,12.13,12.13,0,0,0,8.65-3.58" />
					</svg>

					<div  v-html="$store.state.wp.menus['burger-menu']"></div>

				</div>

			

		</div>
		</transition>
	</div>

</template>

<script type="text/javascript">

import is from 'is_js'

	export default{

		data() {
			return {
			open : false
			}
		},
		mounted(){

			console.log(this.open);

			if ( !is.mobile() ) {

				this.open = true

			}

			// let $ = this.$

		

			open
		},

		methods: {
			toggleNav: function() {
	
				if ( this.open == false ) {

					this.open = true

					console.log(this.open);
				}
				else{

					this.open = false	

					console.log(this.open);
				}
			}
		},

	}
</script>

<style lang="scss">
	

</style>

<style type="text/css">

	li.pll-parent-menu-item{

		text-align: center;
		margin-top: 20px;
		display: flex;
		font-size: 16px;
	}


	.pll-parent-menu-item:hover > ul{
		transition: transform 1s ease-out;
		display: block;
	}

	.pll-parent-menu-item ul{

		display: none;
		position: absolute;
		left: 50px;

	}

	.pll-parent-menu-item > a{

		pointer-events:none;
		margin-left: auto;
		text-align: right;

	}

	ul.sub-menu {

		width: 100px;

	}



	.pll-parent-menu-item ul .current-lang{

		display: none;
		/*position: absolute;*/

	}

	.pll-parent-menu-item:after {

		content: '\003E';
		height: 18px;
		width: 18px;
		margin-top: 1.5px;
		color: black;
		margin-left: 5px;
		transition: transform 0.2s ease-out;
		transform-origin: center;

	}

	.pll-parent-menu-item:hover:after {

		transform: rotate(90deg) translateY(0px) translateX(0px);
		/*transition: all 1s ease-out;*/

	}

	.sub-menu{

		padding-top: 30px;
	}

	.lang-item{

		padding-right: 17px;
	}

	.sub-menu {

		width: 100%;
	}

	.fade-enter-active, .fade-leave-active {
	transition: opacity .5s;
	}
	.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
	opacity: 0;
	}

	.menu a {
		color: black;
		text-decoration: none;
		cursor: pointer;
		font-weight: 800 !important;
		width: 100px;
		text-align: right
	}

	.header-tomu-container a:focus {
		outline: none;
		
	}
	
	.header-tomu-container{
		/*transition: all 1s ease-out;*/
		position: fixed;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		vertical-align: center;
		text-align: right;
		color: #252525;
		height: 100vh;
		box-sizing: content-box;
		left: calc( 100vw - 420px);
		z-index: 3000;

	}

	.header-tomu-container svg{

		width: 100px;

	}

	.menu-tomu{
		margin-right: 70px;
		margin-left: 70px;
		height: auto;
		width: 100px;
		font-size: 19px;
		margin-top: 25px;
		font-weight: 800 !important;
		
		
	}

	ul * {

		all: unset;
		display: block
	}

	ul {

		all: unset;
		display: block
	}


	.lang-item{

		text-align: left;
	}



	@media screen and ( max-width: 1125px ) and ( min-width: 600px){

		.header-tomu-container{

			left: calc( 100vw - 215px);

		}

		.header-tomu-container svg{

			width: 70px;
	/*		padding-left: 50px;
			padding-right: 30px;*/

		}

		.menu-tomu{

			padding-left: auto;
			padding-right: auto;
		}



	
		
	}

	@media screen and ( max-width: 600px ){

		li.pll-parent-menu-item{

			position: relative;
		}

		.sub-menu{

			width: 100px;
			right: calc( 50% + 17px )
		}

		.pll-parent-menu-item ul{

			right: 17px;
			left: auto;
		}


		.header-tomu-container{
			width: 100%;
			background-color: white;
			left: 0;
		}

		.burger{
			width: 30px;
			height: 2px;
			background-color: #422112;
			position: fixed;
			left: 50%;
			transform: translate(-50%,-50%);
			box-shadow: 0 2px 5px rgba(0,0,0,0.2);
			transition: 0.5s;
			top: 30px;
			left: calc( 100% - 30px);
			z-index: 3001;
		}
		.burger::before{
			content: '';
			position: absolute;
			width: 18px;
			height: 2px;
			left: 0;
			background: #422112;
			box-shadow: 0 2px 5px rgba(0,0,0,0.2);
			transition: 0.5s;
		}
		.burger::after{
			content: '';
			position: absolute;
			width: 30px;
			height: 2px;
			left: 0;
			background: #422112;
			box-shadow: 0 2px 5px rgba(0,0,0,0.2);
			transition: 0.5s;
		}
		.burger::before{
			top: -8px;
		}
		.burger::after{
			top: 8px;
		}
		.icon.active .burger{
			background: white;
			box-shadow: none;
		}
		.icon.active .burger::before{
			top: 0;
			width: 30px;
			transform: rotate(45deg);
		}
		.icon.active .burger::after{
			top: 0;
			transform: rotate(135deg);
		}

		.fade-enter-active, .fade-leave-active, .fade-leave-to {
			background: rgba(255,255,255,0);
			transition: background 0.6s;
		}

		.fade-enter-to{
			background: rgba(255,255,255,0.6);
		}

		.fade-enter-active .left-col, .fade-leave-active .left-col, .fade-leave-to .left-col {
			margin-right: -500px;
			transition: margin-right 0.6s;
		}

		.fade-enter-to .left-col{
			margin-right: 0px;
		}

		.lang-item {

			font-size: 19px !important;
		}


		.burger-menu{

			height: 30px;
			width: 40px;
			top: 15px;
			left: calc( 100% - 50px);
			position: fixed;
			z-index: 3002
		

		}

		
	}

</style>