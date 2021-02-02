<template>
	<transition name="fade">
		<div class="side-cart" v-show="open" @click="click_to_close">
			<div class="left-col" >

				<span class="close" @click="click_to_close">
					<svg  class="close" viewBox="0 0 27 27"><g stroke="#979797" fill="none" fill-rule="evenodd" stroke-linecap="square"><path d="M.5.5l26 26M26.5.5l-26 26"></path></g>
					</svg>
				</span>

				<form class="form-cart" action="" method="post">
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

									<span  @click="change_quant( product, -1 )">&mdash;</span>	
									<div> </div>
									<!-- <div class="quantity" v-html="product.product_label"></div> -->
									<div class="quantity">
										
									<input step="1" min="0" type="number" :name="product.product_input_name"
									:id="product.product_input_id" 
									v-bind:value="product.product_input_value">

									</div>

									<span @click="change_quant( key, +1 )">&#xff0b;</span>
									<a class="remove" :href="product.product_remove_href" 
									v-html="pll__('Remove')"></a>								
								</div>		
							</div>
						</div>				
					</div>

					<div class="cart-update">
						
						<button type="submit" name="update_cart"  aria-disabled="true" disabled  v-bind:value="submit_button.button_value" v-html="submit_button.button_text" ></button>

						<div>
						
							<input type="hidden" name="woocommerce-cart-nonce" :value="submit_button.input_1_value" >
							
						</div>
						
						<input type="hidden" name="_wp_http_referer" v-bind:value="submit_button.input_2_value">
						<div class="subtotal" v-html="submit_button.subtotal"></div>
				
						<a class="button_checkout_clone" :href="submit_button.button_checkou_href" v-html="submit_button.button_checkout_clone_name">
						</a>
					
					</div>
						


				</form>
				<!-- <hr/> -->
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
				my_cart_products: [],
				//num: 2
				
			}
		},
		mounted(){

			// let quantity;

			// quantity =  $(el).find('.quantity').value()
			
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

					href = href.replace( this.$store.state.wp.cart_page , '' )

					$(el).prop('href', href)
				});

			},


			change_quant(key, num){


				console.log( this.my_cart_products);
				this.my_cart_products[key].product_input_value += num
				//product.product_name = 'test'
				//product.product_input_value = '10'// +++ key;

				//this.num = 10

			}

			
		},
		watch:{
			'$store.state.wp' : function()
			{
				console.log('watch');
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
		computed:{

			/*my_cart_products: function () 
			{
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

				console.log('test');
				return products

			},*/

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
				
				return button_submit

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

		margin-top: 30px;
		margin-bottom: 30px
	}

	.side-cart .close{

		width: 21px;
		height: 21px;

	}

	

</style>

<style >

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

	}



	.side-cart .price-carte{

		color: #000000;
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
	}

	.side-cart .items-carte-container{

		padding: 15px 0 20px;
		border-top: 1px solid rgb(220, 220, 220);
	}

	.side-cart .items-carte-container{

		padding: 15px 0 20px;
		border-top: 1px solid rgb(220, 220, 220);

	}

	.side-cart .items-carte-container:last-child {

		border-bottom: 1px solid rgb(220, 220, 220);
		margin-bottom: 20px;
	}

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