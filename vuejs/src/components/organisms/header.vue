<template>
	<div id="header">
		<div class="clear"></div>
		<div id="header-logo"></div>
		<div id="header-menu">
			<!-- Exemple
				<ul id="16" class="menu"><li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-8 current_page_item menu-item-has-children menu-item-24"><a href="http://localhost/wp-food-theme/" aria-current="page">We serve quality code 😎</a>
				<ul class="sub-menu">
					<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-25"><a href="http://localhost/wp-food-theme/we-serve-quality-food/our-menu/">Our menu</a></li>
					<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-26"><a href="http://localhost/wp-food-theme/we-serve-quality-food/news/">News</a></li>
					<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-27"><a href="http://localhost/wp-food-theme/we-serve-quality-food/about-us/">About us</a></li>
				</ul>
				</li>
				<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-28"><a href="http://localhost/wp-food-theme/sample-page/">Sample Page</a></li>
				</ul>
			-->
		</div>
		<div id="right-panel">
			<div id="burger-menu" class="btn"></div>
			<div id="cart-sidebar" class="btn"></div>
			<div id="user-sidebar" class="btn"></div>
			<div id="search-sidebar" class="btn"></div>			
			<div class="mask"></div>
			<div class="side-container" v-html="sideEl">
				
			</div>
		</div>
		<div class="clear"></div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				sideEl : ''
			}
		},
		mounted(){
			console.log( this.wp.menus )
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
				$('#right-panel .mask').css('display', 'block').animate({opacity:1}, 200)
				$('#right-panel .side-container').animate({right:0}, 400, 'easeInOutQuart')

				if(event.target.id == 'burger-menu') this.sideEl = this.wp.menus['burger-menu'] + this.wp.sidebars['burger-menu-area']
				if(event.target.id == 'cart-sidebar') this.sideEl = this.wp.sidebars['ecommerce-menu-area']
				if(event.target.id == 'user-sidebar') this.sideEl = this.wp.sidebars['user-menu-area']
				if(event.target.id == 'search-sidebar') this.sideEl = this.wp.sidebars['search-menu-area']

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
		background-color: #F55353;
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
		background-color: #000000;
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