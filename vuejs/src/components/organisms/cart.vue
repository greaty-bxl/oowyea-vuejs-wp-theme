<template>
	<transition name="fade">
		<div class="side-cart" v-show="open" @click="click_to_close">
			<div class="left-col" >
				<div class="header-carte">
					
					<h4 class="product__add__success__title" v-html="pll__('Your Cart')">
					</h4>
					<span class="close" @click="click_to_close">
						<a href="">
							<svg  class="close" viewBox="0 0 27 27"><g stroke="#979797" fill="none" fill-rule="evenodd" stroke-linecap="square"><path d="M.5.5l26 26M26.5.5l-26 26"></path></g>
							</svg>
						</a>
					</span>

				</div>
				<form class="form-cart woocommerce-cart-form" action="" method="post">
					<div v-for="(product, key) in my_cart_products" :key="key">
						<div class="items-carte-container">
							
							<div class="col-1">
								<span class="image_product" v-html="product.product_thumbnail"></span>
							</div>
							<div class="descriptif-item">
								<div class="col-2">
									<h3 class="name" v-html="product.product_name"></h3>
									<div class="price-carte" v-html="product.product_price"></div>
								</div>

								<div class="col-3" >

									<div class="quantity">
										<span class="button-moins"  @click="change_quant( key, -1 )">-</span>

										<input  step="1" min="0" type="number" :name="product.product_input_name"
										:id="product.product_input_id" 
										v-bind:value="product.product_input_value">

										<span class="button-plus" @click="change_quant( key, +1 )">+</span>
									</div>

									
									<a class="remove" :href="product.product_remove_href" 
									v-html="pll__('Remove')"></a>								
								</div>		
							</div>
						</div>				
					</div>

					<div v-show="submit_button.button_text" class="cart-update">
						
						<button :disabled="disabled"  type="submit" name="update_cart" aria-disabled="true" v-bind:value="submit_button.button_value"  v-html="submit_button.button_text" ><a href=""></a></button>

						<div>
						
							<input  type="hidden" name="woocommerce-cart-nonce" :value="submit_button.input_1_value" >
							
						</div>
						
						<input type="hidden" name="_wp_http_referer" v-bind:value="submit_button.input_2_value">

						<div class="subtotal" v-html="submit_button.subtotal"></div>
				
						<a class="button_checkout_clone" v-show="submit_button.button_checkout_clone_name" :href="submit_button.button_checkou_href" v-html="submit_button.button_checkout_clone_name">
						</a>
					
					</div>

					<p class="empty" v-if="submit_button.cart_empty" v-html="submit_button.cart_empty"> </p>
						


				</form>
				<!-- <hr/> -->
				<!-- <div v-html="$store.state.wp.cart"></div> -->
			</div>
		</div>
	</transition>
</template>

<script>

	import links_and_anchors from 'Libs/links-and-anchors.js'

	export default{
		data(){
			return {
				open: 0,
				my_cart_products: [],

				disabled: true,
				
			}
		},
		mounted(){

			// let quantity;

			// quantity =  $(el).find('.quantity').value()
			
			let $ = this.$

			$(document).on('add_to_cart', () => {

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

					href = href.replace( this.$store.state.wp.cart_page , '' )

					$(el).prop('href', href)
				});

			},
// 

			change_quant( key, num){

				console.log( key , num);

				let new_result_2 = parseInt(this.my_cart_products[key].product_input_value ) + num

				console.log(new_result_2);

				if( new_result_2 >= 1 )
				{
					this.my_cart_products[key].product_input_value = new_result_2

					this.disabled = false

				}

			},

			update_cart(){
				let $ = this.$
				let products = []

				$(this.$store.state.wp.cart).find('.cart_item').each( (index, el) => {

					products[index] = {}
					products[index]['product_remove_href'] = $(el).find('.product-remove a').attr('href')
					products[index]['product_name'] = $(el).find('.product-name').html()
					products[index]['product_label'] = $(el).find('.quantity').find('label').html()
					products[index]['product_input'] = $(el).find('.quantity').find('input').html()
					products[index]['product_input_value'] = $(el).find('.quantity').find('input').val()
					products[index]['product_input_id'] = $(el).find('.quantity').find('input').attr('id')
					products[index]['product_input_name'] = $(el).find('.quantity').find('input').attr("name");
					products[index]['product_thumbnail'] = $(el).find('.product-thumbnail').html()
					products[index]['product_price'] = $(el).find('.woocommerce-Price-amount.amount').html()



				});

				this.my_cart_products = products
			}
			
		},
		watch:{
			'$store.state.wp' : function()
			{
				this.update_cart()
				
			},
			'$store.state.wp.cart' : function()
			{
				this.update_cart()
			}
		},
		computed:{
			submit_button: function () 
			{
				let $ = this.$

				let button_submit

				button_submit = {}

				button_submit['button_value'] =  $(this.$store.state.wp.cart).find('.actions').find('button').attr('value');
				button_submit['button_text'] =  $(this.$store.state.wp.cart).find("[name='update_cart']").text();
				button_submit['input_1_value'] = $(this.$store.state.wp.cart).find('#woocommerce-cart-nonce').attr('value');
				button_submit['input_2_value'] = $(this.$store.state.wp.cart).find('[name="_wp_http_referer"]').attr('value');
				button_submit['subtotal'] = $(this.$store.state.wp.cart).find('.cart-collaterals').find('.cart-subtotal').html();
				button_submit['button_checkou_href'] = $(this.$store.state.wp.cart).find('.cart_totals').find('.wc-proceed-to-checkout').find('a').attr('href');
				button_submit['button_checkout_clone_name'] = $(this.$store.state.wp.cart).find('.cart_totals').find('.wc-proceed-to-checkout').find('a').text();
				button_submit['cart_empty'] = $(this.$store.state.wp.cart).find('.cart-empty').text();
				
				return button_submit

			}
		}
	}
</script>

<style scoped>

	.header-carte{

		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-content: center;
		height: 60px;
		border-bottom: 1px solid rgb(220, 220, 220);

	}


	.header-carte h4{

		color: #422112 ;
		font-size: 20px;
		font-weight: 700;
		line-height: 61px;
		text-transform: uppercase;
		padding-bottom: 5px;
		text-align: left;
		margin-bottom: 0;
		margin: 0px

	}
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
		box-shadow: -4px 0px 20px -11px #422112 ;
		padding: 27px 40px 85px 50px;
		box-sizing: border-box;
		overflow: auto;
		margin-bottom: auto;
	}

	.fade-enter-active .left-col, .fade-leave-active .left-col, .fade-leave-to .left-col {
		margin-right: -500px;
		transition: margin-right 0.6s;
	}

	.fade-enter-to .left-col{
		margin-right: 0px;
	}

	.side-cart .items-carte-container{

		display: flex;
		flex-direction: row;
		justify-content: center;
		align-content: center;

	}
	.side-cart .col-2{

		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-content: center;

	}
	.side-cart .col-3{

		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-content: center;

	}

	.form-cart{

		margin-bottom: 30px
	}

	.side-cart .close{

		width: 21px;
		height: 21px;
		display: flex;
		margin-top: auto;
		margin-bottom: auto;
		pointer-events: auto

	}

	.button-moins{

		position: absolute;
		left: 15px;
		user-select: none;
		font-size: 20px;

	}
	.button-plus{

		position: absolute;
		right: 15px;
		user-select: none;
		font-size: 20px;

	}

	

</style>

<style>


	.cart-update button{

		padding-top: 15px;
		padding-bottom: 15px;
		background-color: white;
		border: 1px solid #888320;
		color: #888320;
		margin-top: 15px;
		transition: 0.3s;

	}


	.cart-update button:hover{

		padding-top: 15px;
		padding-bottom: 15px;
		background-color: #888320;
		border: 1px solid white;
		color: white;

	}

	.side-cart img{
		width: 150px;
		height: auto;
	}
	.side-cart .col-2 h3 {
		margin-top: 0px;
		font-size: 15px;
		text-align: left;
		text-transform: uppercase;
	}

	.side-cart a{

		color: #422112 !important;
		text-decoration-line: none;
	}

	.side-cart .col-2 a:hover{

		color: #888320 !important;
	}

	.side-cart .col-3 input{

		margin: 0;
		padding: 17px;
		border: 1px solid #dcdcdc;	
		background-color: white;
		text-align: center;
		color: #422112;
		width: 70px;

	}



	.side-cart .price-carte{

		color: #422112 ;
		font-size: 15px;
		font-weight: 700;
		text-align: right;

	}

	.side-cart .remove{

		font-size: 14px;
		font-weight: 300;
		line-height: 23px;
		margin-top: auto;
		margin-bottom: auto;

	}

	.side-cart .remove:hover{

		color: #888320 !important;

	}

	.side-cart .descriptif-item{

		display: flex;
		flex-direction: column;
		padding-top: 13px;
		padding-bottom: 13px;
		width: 100%;
		justify-content: space-around;

	}

	.side-cart .col-2 input{

		box-sizing:border-box;
		display: inline-block;
		height: 53px;
		margin-bottom: 0px;
		margin-left: 0px;
		margin-right: 0px;
		margin-top: 0px;
		max-width: 100%;
		padding-bottom:17px;
		padding-left: 17px;;
		padding-right: 17px;
		padding-top: 17px;
		visibility: visible;
		width: 106px;
	}

	.side-cart .quantity{

		text-align: left;
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;

	}

	.side-cart .items-carte-container{

		padding: 15px 0 20px;
		border-bottom: 1px solid rgb(220, 220, 220);
	}



/*	.items-carte-container:last-child {

		border-bottom: 1px solid rgb(220, 220, 220);
		margin-bottom: 20px;
	}
*/
	.side-cart .button_checkout_clone {

		background-color: #888320 ;
		color: white !important;
		border: solid #888320 ;
		border-radius: 3px ;
		border-width: 1px;
		min-width: 200px;
		width: 100% !important;
		font-size: 16px ;
		height: 50px;
		transition: 0.3s !important;
		text-align: center;
		padding: 20px 18px;
		box-sizing: border-box;


	}

	.side-cart .button_checkout_clone:hover{

		background-color: white !important;
		color: #888320 !important;
		transition: 0.3s !important;

	}

	.side-cart .cart-update{

		display: flex;
		flex-direction: column;

	}

	.side-cart .button_checkout_clone{

		height: auto;
	}

	.side-cart .subtotal{

		text-align: right!important;
		font-size: 17px;
		letter-spacing: .5px;
		font-weight: 700;
		color: #422112 !important;
		display: flex;
		justify-content: space-between;
		margin-bottom: 25px;
		margin-top: 25px;
	}


	/* Chrome, Safari, Edge, Opera */
	.side-cart .quantity input ::-webkit-outer-spin-button,
	.side-cart .quantity ::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	/* Firefox */
	.side-cart .quantity input {
		-moz-appearance: textfield;
	}

	.side-cart .empty{

		text-transform: uppercase;
		font-size: 10px !important;
		line-height: 1.45;
		letter-spacing: 1.6px;
		padding: 30px 15px;
		font-weight: 700;
		text-align: center;
		border-top: 1px solid #dcdcdc;
		color: #422112;

	}


	@media screen and (max-width: 600px) {

		.items-carte-container{

			flex-direction: column !important;
		}

		.col-1{

			display: flex;
		}

		.image_product{

			margin-right: auto;
			margin-left: auto;
		}
		
	}


</style>