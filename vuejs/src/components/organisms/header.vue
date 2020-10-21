<template>
	<div id="header">
		<div class="clear"></div>
		<div id="header-logo"><Acf field="logo->light"/></div>
		<div id="header-menu"></div>
		<div id="right-panel">
			<div id="burger-menu" class="btn">
				<v-icon name="bars" style="height: 100%; margin-bottom: auto; align-self: flex-start;"></v-icon>
			</div>
			<div id="cart-sidebar" class="btn">
				<v-icon name="shopping-cart"></v-icon>
			</div>
			<div id="user-sidebar" class="btn">
				<v-icon name="user"></v-icon>
			</div>
			<div id="search-sidebar" class="btn">
				<v-icon name="search"></v-icon>
			</div>			
			<div class="mask"></div>
			<div class="side-container" v-html="sideEl">
				
			</div>
		</div>
		<div class="clear"></div>
	</div>
</template>

<script>
import Acf from 'Organisms/acf.vue'

export default {
	components:{
		Acf
	},
	data(){
		return {
			sideEl : ''
		}
	},
	mounted(){
		var $ = this.$

		$(this.$el).find('#header-menu').html( this.wp.menus['header-menu'] )

		var header = this.$el

		function resize_header(header){
			var width_no_scrollbar = $('.section').first().innerWidth()
			$(header).width( width_no_scrollbar )	
		}
		
		resize_header(header)

		$(window).resize( () => {
			resize_header(header)
		});

		$(document).on('click', '#right-panel > .btn', (event) => {
			event.preventDefault();

			if(event.currentTarget.id == 'burger-menu') this.sideEl = this.wp.menus['burger-menu'] + this.wp.sidebars['burger-menu-area']
			if(event.currentTarget.id == 'cart-sidebar') this.sideEl = this.wp.sidebars['ecommerce-menu-area']
			if(event.currentTarget.id == 'user-sidebar') this.sideEl = this.wp.sidebars['user-menu-area']
			if(event.currentTarget.id == 'search-sidebar') this.sideEl = this.wp.sidebars['search-menu-area']

			$('#right-panel .mask').css('display', 'block').animate({opacity:1}, 200)
			$('#right-panel .side-container').animate({right:0}, 400, 'easeInOutQuart')

		});

		function close_sidebar() {
			$('#right-panel .mask').animate({opacity:0}, 200, () => { $('#right-panel .mask').css('display', 'none') })
			$('#right-panel .side-container').animate({right:'-30vw'}, 400, 'easeInOutQuart')
		}

		$(document).on('click', '#right-panel > .mask', (event) => {
			event.preventDefault();
			close_sidebar()
		});

		$('#right-panel .side-container').on('click', 'a', () => {
			close_sidebar()
		});
	}
}
</script>

<style>
	#header{
		height: 0;
		overflow-y: visible;
		position: fixed;
		text-align: left;
	}

	#header-logo{
		position: absolute;
		top: 3vh;
		left: 3vh;

		width: 11vw;
		height: 6vw;
		background-color: #000000;
	}

	#header-menu{
		position: absolute;
		top: 2vh;
		left: calc(3vh + 11vw + 3vh);
	}

	#right-panel{
		position: absolute;
		top: 3vh;
		right: 3vh;
	}

	#right-panel > .btn {
		float: right;
		width: 6vh;
		height: 6vh;
		margin-left: 1vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	#right-panel > .btn > * {
		height: auto;
		width: 42%;
		margin: auto;
	}

	.mask{
		position: fixed;
		top: 0;
		left: 0;
		height: 100vh;
		width: 100%;
		background-color: rgba(0,0,0,0.5);
		opacity: 0;
		display: none;
	}

	#right-panel .side-container{
		position: fixed;
		top: 0;
		right: -30vw;
		height: 100vh;
		width: 30vw;
		background-color: #fff;
	}
</style>