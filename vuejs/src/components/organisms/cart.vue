<template>
	<transition name="fade">
		<div class="side-cart" v-show="open" @click="click_to_close">
			<div class="left-col" >
				<button class="close" @click="click_to_close">close</button>
				<div v-for="(product, key) in my_cart_products" :key="key" >
					{{product.product_name}}
				</div>
				<hr/>
				<div v-html="$store.state.wp.cart"></div>
			</div>
		</div>
	</transition>
</template>

<script>

	import links_and_anchors from 'Libs/links-and-anchors.js'

	export default{
		data(){
			return {
				open: 1,
			}
		},
		mounted(){

			let $ = this.$

			$(document).on('add_to_cart after__wpnonce', () => {

				this.open = 1
			});

			$(document).on('add_to_cart after_next_page after__wpnonce', () => {

				setTimeout( () => {
					links_and_anchors( this )

					this.remove_cart_url()

				}, 100);
			});

			$(document).on('open_cart', () => {
				this.open = 1
			});

			$(document).on('before_next_page', () => {
				this.open = 0
			});
			
			this.remove_cart_url()

			if( this.force_open )
			{
				this.open = 1
			}

			links_and_anchors( this )


		},
		methods:{
			click_to_close : function(event){
				let $ = this.$

				if( $(event.target).hasClass('side-cart') || $(event.target).hasClass('close') )
				{
					this.open = 0
				}				
			},
			remove_cart_url: function(){
				let $ = this.$

				$('.remove').each( (index, el) => {
					let href = $(el).prop('href')
					//console.log( "href", $(el) );
					href = href.replace( this.$store.state.wp.cart_page , '' )

					$(el).prop('href', href)
				});

			}
		},
		computed:{
			my_cart_products: function () 
			{
				let $ = this.$
				let products = []

				$(this.$store.state.wp.cart).find('.cart_item').each( (index, el) => {
					console.log( 'item html', el );
					products[index] = {}
					products[index]['product_remove_href'] = $(el).find('.product-remove a').attr('href')
					products[index]['product_name'] = $(el).find('.product-name a').html()
					
				});

				return products
				//console.log('cart updated', $(this.$store.state.wp.cart).find('.cart_item') );
				//return this.$store.state.wp.cart
			}
		}
	}
</script>

<style scoped>
	.side-cart{
		position: fixed;
		width: 100%;
		height: 100vh;
		top: 0;
		left: 0;
		text-align: right;
		z-index: 4000;
		background: rgba(255,255,255,0.6);
	}

	.fade-enter-active, .fade-leave-active, .fade-leave-to {
		background: rgba(255,255,255,0);
		transition: background 0.6s;
	}

	.fade-enter-to{
		background: rgba(255,255,255,0.6);
	}

	.left-col {
		height: 100vh;
		width: 500px;
		max-width: 95%;
		background: #fff;
		display: inline-block;
		margin-right: 0px;
		box-shadow: -4px 0px 20px -11px #000000;
	}

	.fade-enter-active .left-col, .fade-leave-active .left-col, .fade-leave-to .left-col {
		margin-right: -500px;
		transition: margin-right 0.6s;
	}

	.fade-enter-to .left-col{
		margin-right: 0px;
	}
</style>

<style type="text/css">
	.side-cart img{
		width: 100px;
		height: auto;
	}
</style>