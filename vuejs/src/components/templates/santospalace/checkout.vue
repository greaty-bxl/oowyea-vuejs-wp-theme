<template>

	<div class="checkout_santos " >
		<h5 v-if="cols_checkout.title_commande == undefined " class="title-home">Paiement</h5>
		<h5 v-else class="title-home">Facture</h5>
			<div v-html="cols_checkout.order_notices"></div>

			<div class="woocommerce">
				
				<form  v-if="is_user_logged_in == false " class="woocommerce-form woocommerce-form-login login" method="post" v-html="cols_checkout.woocommerce_login">
				</form>

			</div>
			

			<form v-if="cols_checkout.woocommerce_order == undefined " name="checkout" method="post" :action="cols_checkout.action" class="form-check-out">

				<div class="col-1" v-html="cols_checkout.col_1"></div>

				<div class="trigge_only_this">
					<input id='two' type='checkbox' >
					<label class="button-ouverture" for='one'>
						<span></span>
					<!-- 	<p class="text-2adress"></p> -->
					</label>
				</div>

				<div v-html="cols_checkout.col_1_input"></div>
				

				<div v-if="cols_checkout.col_2" class="trigge_only_this">
					<input id='one' type='checkbox' v-model="checked">
						<label class="button-ouverture" for='one'>
							<span></span>
							<p class="text-2adress" @click="Open"  v-html="cols_checkout.title_ship_address_text" ></p>
						</label>
				</div>

				<div v-else :style="{ height:'50px'}" >					
				</div>

				<transition name="fade">
					<div  v-show="checked" v-html="cols_checkout.col_2"></div>
				</transition>


				<div v-html="cols_checkout.title_commande"></div>

				<div v-html="cols_checkout.order_review" ></div>

			</form>

			<div v-html="cols_checkout.woocommerce_order">
			</div>

			<!-- <div v-html="post.post_content"></div> -->

	</div>

</template>

<script>

import smart_fonts from 'Libs/smart-fonts.js';

import init_styled_form from 'Libs/styled-form.js'

export default {

	data(){
		return {
			ouvert: 0,
			checked: false,
			is_already_logged: false,

		}


	},

	props: {
		'post' : Object
	},

	watch : {

		'$store.state.wp.woo_account.is_user_logged_in': function(){

			if (this.is_already_logged == false && this.is_user_logged_in == true ) {
				this.$('#page-loader').css('display', 'flex');
				location.reload()

			}
		},
	},

	mounted(){


		this.is_already_logged = this.$store.state.wp.woo_account.is_user_logged_in

		this.$emit('template_mounted', this);

			smart_fonts({
			'.title-home' : 25,
		})

			init_styled_form('.woocommerce-billing-fields input, .woocommerce-shipping-fields__field-wrapper input , .login input')

			// hide header

			var $ = this.$

			$('#header').hide()

			$('#footer').hide()

			var payconiq  = $('[alt="Payconiq"]').attr('src');

			var bancontact  = $('[alt="Bancontact"]').attr('src', 'https://demo-santospalace.greaty.be/bruxelles/wp-content/uploads/sites/2/2021/02/Bancontact.svg');

			$('[for="payment_method_paypal"]').find('img').attr('src', 'https://demo-santospalace.greaty.be/bruxelles/wp-content/uploads/sites/2/2021/02/Paypal.svg');

			$('[alt="eMaestro"]').attr('src', 'https://demo-santospalace.greaty.be/bruxelles/wp-content/uploads/sites/2/2021/02/Maestro_2016.svg');


				let image 

			  $('.wc_payment_method').find('label').each( (index, el) => {

			  	image = $(el).find('img')

				$(el).text('')

				$(el).append(image)

			  	
			  });

			
			if ( payconiq != undefined  ) {

				payconiq = payconiq.replace('24x24/payconiq.png', 'payconiqlogo.png')
				$('[alt="Payconiq"]').attr('src', payconiq);

			}
			
			
	},

	beforeDestroy(){

		var $ = this.$

		$('#header').show()
		
		$('#footer').show()
	},

	methods:{

		Open: function(){

			this.ouvert = true

		}
	},

	computed:{

		cols_checkout: function(){

			var $ = this.$

			// let post

			let cols = {}

			//console.log(this.post.post_content);

			this.pll__([
				'Cash on delivery',
				'Pay with cash upon delivery',
				'.payment_box.payment_method_bacs'
				], true)

			

			cols['action'] = $(this.post.post_content).find('.checkout').attr('action');
			cols['col_1_input'] =  $(this.post.post_content).find('.col-1').find('.woocommerce-account-fields').html()
			cols['col_1_input_id'] =  $(this.post.post_content).find('.col-1').find('.woocommerce-account-fields').find('input').attr('id')
			cols['col_1_input_name'] =  $(this.post.post_content).find('.col-1').find('.woocommerce-account-fields').find('input').attr('name')
			cols['col_1'] =  $(this.post.post_content).find('.col-1').html();
			cols['col_2'] =  $(this.post.post_content).find('.col-2 .shipping_address').html();
			cols['title_commande'] =  $(this.post.post_content).find('.order_review_heading').html();
			cols['title_ship_address_text'] =  $(this.post.post_content).find('#ship-to-different-address span').text();
			cols['order_review'] =  $(this.post.post_content).find('.woocommerce-checkout-review-order').html();
			cols['order_notices'] =  $(this.post.post_content).find('.woocommerce-notices-wrapper').html();
			cols['woocommerce_order'] =  $(this.post.post_content).find('.woocommerce-order').html();
			cols['woocommerce_login'] =  $(this.post.post_content).find('.login').html();

			


			//console.log(cols);
			
			return cols
		},

		is_user_logged_in : function(){
			return this.$store.state.wp.woo_account.is_user_logged_in
		},



	}


	

}



</script>

<style >

@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;1,100;1,200;1,300;1,400&display=swap');

	.checkout_santos .woocommerce-no-js form.woocommerce-form-coupon, .woocommerce-no-js form.woocommerce-form-login > p{

		padding-top: 20px;
	}	

	.checkout_santos{

		width: 50% !important;
		margin-right: auto;
		margin-left: auto;
		margin-bottom: 100px;
	}

	.checkout_santos .woocommerce-error{

		width: auto !important;
	}


	.checkout_santos *{

		font-size: 15px;
	}

	.fade-enter-active, .fade-leave-active, .fade-leave-to {
		background: rgba(255,255,255,0);
		transition: background 0.6s;
	}

	.fade-enter-to{
		background: rgba(255,255,255,0.6);
	}

	.fade-enter-active .woocommerce-shipping-fields, .fade-leave-active .woocommerce-shipping-fields, .fade-leave-to .left-col
	{

		opacity: 0;
	}

	.fade-enter-to .woocommerce-shipping-fields{

		margin-top: 0px;
		transition: margin-top 0.6s;
	}

	.checkout_santos .form-row{

		padding: 0.4285714286em;
	}

	.checkout_santos .form-row  label{

		text-align: left;
		padding-left: 0.7857142857em; 
	}

	.checkout_santos .form-check-out input{

		border: 1px transparent solid;
		background-clip: padding-box;
		display: block;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		width: auto;	
		padding: 1.2em 0.7857142857em;
		word-break: normal;
		line-height: inherit;
		border-color: #d9d9d9;
	}

	.checkout_santos .login input{

		border: 1px transparent solid;
		background-clip: padding-box;
		display: block;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		width: auto;	
		padding: 1.2em 0.7857142857em ;
		word-break: normal;
		line-height: inherit;
		border-color: #d9d9d9;

	}

	.checkout_santos .paddingTop-animation{

		padding-top: 26px !important;
		padding-bottom: 10px  !important;
	}



	.checkout_santos .appear-label{

		margin-top: 5px !important;
		position: absolute !important;
		display: flex !important;

	}

	.checkout_santos input#createaccount {
		margin-right: 15px;
	}

	.checkout_santos label.woocommerce-form__label.woocommerce-form__label-for-checkbox.checkbox {
		color: #888320;
		font-weight: 500;
	}

	.checkout_santos .trigge_only_this *{ box-sizing: border-box; user-select: none; }

	.checkout_santos .trigge_only_this input[type='checkbox']{ height: 0; width: 0; }

	.checkout_santos .trigge_only_this input[type='checkbox'] + label{
		position: relative;
		justify-content: center;
		display: flex;
		margin: .6em 0;
		align-items: center;
		color: #9e9e9e;
		transition: color 250ms cubic-bezier(.4,.0,.23,1);
	}
	.checkout_santos .trigge_only_this input[type='checkbox'] + label > ins{
		position: absolute;
		display: block;
		bottom: 0;
		left: 2em;
		height: 0;
		width: 100%;
		overflow: hidden;
		text-decoration: none;
		transition: height 300ms cubic-bezier(.4,.0,.23,1);
	}
	.checkout_santos .trigge_only_this input[type='checkbox'] + label > ins > i{
		position: absolute;
		bottom: 0;
		font-style: normal;
		color: #4FC3F7;
	}
	.checkout_santos .trigge_only_this input[type='checkbox'] + label > span{
		display: flex;
		justify-content: center;
		align-items: center;
		margin-right: 1em;
		width: 16px;
		height: 16px;
		background: white;
		border: 2px solid #9E9E9E;
		border-radius: 2px;
		cursor: pointer;  
		transition: all 250ms cubic-bezier(.4,.0,.23,1);
	}
	/*
	.checkout_santos input[type='checkbox'] + label:hover, input[type='checkbox']:focus + label{
	color: #fff;
	}*/
	.checkout_santos  .trigge_only_this input[type='checkbox'] + label:hover > span, input[type='checkbox']:focus + label > span{
		background: rgba(255,255,255,.1);
	}
	.checkout_santos .trigge_only_this  input[type='checkbox']:checked + label > ins{ height: 100%; }

	.checkout_santos .trigge_only_this input[type='checkbox']:checked + label > span{

		/*border: .7em solid #888320;*/
		background-color: #888320;
		border-color: #888320;
		position: relative;
		border-radius: 3px;
		animation: shrink-bounce 200ms cubic-bezier(.4,.0,.23,1);
	}
	.checkout_santos .trigge_only_this input[type='checkbox']:checked + label > span:before{
		content: "";
		position: absolute;
		top: 2px;
		left: 1px;
		border-right: 3px solid transparent;
		border-bottom: 3px solid transparent;
		transform: rotate(45deg);
		transform-origin: 0% 100%;
		animation: checkbox-check 125ms 250ms cubic-bezier(.4,.0,.23,1) forwards;
	}


	@keyframes shrink-bounce{
	0%{
	transform: scale(1);
	}
	33%{    
	transform: scale(.85);
	}
	100%{
	transform: scale(1);    
	}
	}
	@keyframes checkbox-check{
	0%{
	width: 0;
	height: 0;
	border-color: white;
	transform: translate3d(0,0,0) rotate(45deg);
	}
	33%{
	width: .2em;
	height: 0;
	transform: translate3d(0,0,0) rotate(45deg);
	}
	100%{    
	width: .2em;
	height: .5em;    
	border-color: white;
	transform: translate3d(0,-.5em,0) rotate(45deg);
	}
	}

	.checkout_santos .woocommerce-shipping-fields__field-wrapper{

		padding-bottom: 50px;
	}

	.screen-reader-text{

		clip: inherit;
		overflow: visible;
		width: auto;
	}

	.checkout_santos .button-ouverture {

		margin-top: 30px !important;
		margin-bottom: 30px  !important;

	}

	.button-ouverture p{

		font-weight: 500;
	}

	.woocommerce-checkout-review-order-table{

		width: 100%;
		border: 1px solid #d9d9d9 ;
		border-radius: 5px !important;
		border-collapse: initial;
	}

	.checkout_santos tr td {padding: 15px 10px}

	.checkout_santos tr th {padding: 15px 10px}

	.checkout_santos thead td{

		border-top: 1px solid #d9d9d9 !important;
		
	}

	.checkout_santos tbody td {

		border-top: 1px solid #d9d9d9;
	}

	.checkout_santos tfoot td th{

		border-top: 1px solid #d9d9d9 !important;
	}

	.checkout_santos tfoot th{

		border-top: 1px solid #d9d9d9 !important;
	}


	.checkout_santos tr td{

		border-top: 1px solid #d9d9d9 !important;

	}

	.checkout_santos dd.variation-Mouture{

		margin-left: 10px;
	}


	.checkout_santos dl.variation {
		display: flex;
		justify-content: center;
	}


	.checkout_santos .woocommerce-checkout-payment{

		margin-top: 50px;
	}

	.checkout_santos .wc_payment_methods.payment_methods.methods li{

		flex-wrap: wrap;
		display: flex;
		line-height: 52px !important;

	}

	.checkout_santos .wc_payment_methods.payment_methods.methods li label{

		min-width: 50%;

	}

	.checkout_santos #add_payment_method #payment, .woocommerce-cart #payment, .woocommerce-checkout #payment{

		background-color: #f7f7f7;
	}

	.payment_method_buckaroo_payconiq img{

		width: 100px !important;
	}

	.checkout_santos #add_payment_method #payment div.payment_box::before, .woocommerce-cart #payment div.payment_box::before, .woocommerce-checkout #payment div.payment_box::before{

		/*border: 1em solid #888320 !important;*/
		border: 1em solid #888320;
		border-right-color: transparent;
		border-left-color: transparent;
		border-top-color: transparent;

	}

	.checkout_santos #add_payment_method #payment div.payment_box, .woocommerce-cart #payment div.payment_box, .woocommerce-checkout #payment div.payment_box{

		background-color: #888320 !important;
		color: white !important;

	}

	.checkout_santos .wc_payment_method input{

		width: auto;
	}

	.checkout_santos .wc_payment_methods.payment_methods.methods input{

		margin: auto 15px auto 0px !important;

	}

	.checkout_santos #add_payment_method #payment .payment_method_paypal .about_paypal, .woocommerce-cart #payment .payment_method_paypal .about_paypal, .woocommerce-checkout #payment .payment_method_paypal .about_paypal{

		line-height: auto !important;

	}

	.checkout_santos a{

		text-decoration-line: none;
		color: #888320 ;
		font-weight: bold;

	}

	.checkout_santos .woocommerce table.shop_table tbody th, .woocommerce table.shop_table tfoot td, .woocommerce table.shop_table tfoot th{

		border-top: 1px solid rgba(0,0,0,.1);
		border-collapse: collapse;
	}

	.checkout_santos ul.woocommerce-shipping-methods {

		margin: 0px;

	}

	.checkout_santos .woocommerce-shipping-methods li{

		list-style: none;
		display: flex;
		align-items: center;
		padding-top: 10px;
		padding-bottom: 10px;

	}

	.checkout_santos .woocommerce-shipping-methods li  input{

		width: auto;
	}


	.checkout_santos .woocommerce-shipping-methods  label{

		margin-left: 10px;
	}

	.checkout_santos .wc_payment_methods a{

		margin-left: 10px !important;
	}

	.checkout_santos .woocommerce form .form-row label.checkbox, .woocommerce-page form .form-row label.checkbox {

		display: flex;
		justify-content: center;
		align-items: center;
	}

	.woocommerce-checkout-payment span{

		margin-left: 10px !important;
	}

	.form-row .validate-required{

		margin-bottom: 15px;
	}

	.checkout_santos .woocommerce #payment #place_order, .woocommerce-page #payment #place_order{

		background-color: #888320 !important;
		color: white !important;
		/*margin-top: 35px !important;*/
		border: solid #888320 !important;
		border-radius: 3px !important;
		border-width: 1px !important;
		min-width: 200px  !important;
		width: 100% !important;
		padding-top: 20px !important;
		padding-bottom: 20px !important;
		font-size: 16px !important;
	}


	.checkout_santos .woocommerce #payment #place_order, .woocommerce-page #payment #place_order:hover{

		background-color: white !important;
		color: #888320 !important;
		transition: 0.3s !important;	
	}

	.woocommerce-thankyou-order-details{

		list-style: none;
	}


	.checkout_santos table.woocommerce-table.woocommerce-table--order-details.shop_table.order_details{

		margin-left: auto;
		margin-right: auto;
		border: 1px solid #d9d9d9 ;
		border-radius: 3px;
		border-collapse: inherit;
		width: 80%;
	}

	.checkout_santos section.woocommerce-columns.woocommerce-columns--2.woocommerce-columns--addresses.col2-set.addresses {

		margin-top: 30px;

	}


	.checkout_santos ul.woocommerce-order-overview.woocommerce-thankyou-order-details.order_details li{

		margin-top: 15px;
	}


	.checkout_santos section.woocommerce-order-details{

		margin-top: 30px;
	}


	.title-home{

		color: #422112;
		font-size: 20px;
		font-weight: 700;
		line-height: 61px;
		text-transform: uppercase;
		padding-bottom: 30px;
		margin-bottom: 0;
		padding-top: 50px;
		margin: 0px;
	}

	.col-1 .woocommerce-account-fields{

		display: none;
	}


	.checkout_santos input#createaccount{

	/*	width: 16px;
		height: 16px;*/
		border-color: #d9d9d9;
		border: 1px solid #d9d9d9 ;
	}

	.checkout_santos .woocommerce .woocommerce-form-login .woocommerce-form-login__submit{

		color: white;
		background-color: #888320 !important;
		border: 1px solid #888320;
		border-radius: 3px !important;
		transition: 0.3s;
		padding: 15px;
		font-weight: 600;
		text-decoration: none;
		cursor: pointer;
	}

	.checkout_santos #mon-compte .woocommerce-no-js form.woocommerce-form-coupon, .woocommerce-no-js form.woocommerce-form-login{

		margin-left: 0px !important;
		margin-right: 0px !important;
	}

	.checkout_santos .woocommerce #respond input#submit:hover, .woocommerce a.button:hover, .woocommerce button.button:hover, .woocommerce input.button:hover{

		color: #888320 !important;
		background-color: white !important;
	}

	.checkout_santos .woocommerce .woocommerce-form-login .woocommerce-form-login__rememberme input{

		display: inherit !important;
		margin-right: 5px;
	}
	.checkout_santos .woocommerce form .form-row-first, .woocommerce form .form-row-last, .woocommerce-page form .form-row-first, .woocommerce-page form .form-row-last{

		width: 50%;
		overflow: visible;
		box-sizing: border-box;

	}

	.checkout_santos #mon-compte .woocommerce-no-js form.woocommerce-form-coupon, .woocommerce-no-js form.woocommerce-form-login{

		padding: 12px;
	}

	.checkout_santos .login .form-row-first{

		width: calc(50% - 3px) !important;
	}	
	
	.checkout_santos .login .form-row-last{

		width: calc(50% - 3px) !important;
	}

	.checkout_santos ul.wc_payment_methods.payment_methods.methods img{

		width: 120px;
	}

	.checkout_santos img.wc-stripe-card-icon{

		width: 70px !important;
	}

	.checkout_santos li.wc_payment_method.payment_method_buckaroo_emaestro img{

		width: 70px !important; 

	}

	.checkout_santos ul.payment_methods li[class*=payment_method_stripe_] label>img:first-of-type{

		float: none !important;
	}
	@media screen and (max-width: 1025px) and (min-width: 745px){

		.checkout_santos{

			width: 100% !important;
			padding-right: 70px;
			padding-left: 70px;
			margin-bottom: 100px;
			box-sizing: border-box;
		}

		.checkout_santos #mon-compte .woocommerce-no-js form.woocommerce-form-coupon, .woocommerce-no-js form.woocommerce-form-login{

			margin-left: 0px;
			margin-right: 0px;
		}
	}


	@media screen and (max-width: 745px){

		.checkout_santos .woocommerce form .form-row-first, .woocommerce form .form-row-last, .woocommerce-page form .form-row-first, .woocommerce-page form .form-row-last{

			width: 100%;
		}

		.checkout_santos .login .form-row-first{

			width: 100% !important;
		}	
		
		.checkout_santos .login .form-row-last{

			width: 100% !important;
		}


		.woocommerce .woocommerce-form-login .woocommerce-form-login__submit{

			margin-top: 15px;
		}
		.checkout_santos table.woocommerce-table.woocommerce-table--order-details.shop_table.order_details{

			width: 100%;
		}

		.woocommerce-billing-fields__field-wrapper p{

			width: 100% !important;
		}

		.checkout_santos{

			width: 100% !important;
			padding-right: 30px;
			padding-left: 30px;
			margin-bottom: 100px;
			box-sizing: border-box;
		}

		.checkout_santos .form-row{

			padding: 15px 0px 0px 0px;
		}

		.checkout_santos ul.woocommerce-shipping-methods {

			padding: 0px;

		}

		.checkout_santos .woocommerce-page .col2-set .col-1{

			float: left;
			width: 100%;
			display: flex;
			flex-direction: column;
			margin-bottom: 20px;
		}

		.checkout_santos .woocommerce-checkout-payment span{

			text-align: center;
		}

		.checkout_santos label.woocommerce-form__label.woocommerce-form__label-for-checkbox.woocommerce-form-login__rememberme{

			padding-left: 0px;
		}

		.checkout_santos .text-2adress{

			width: 60%
		}

		.checkout_santos li.wc_payment_method.payment_method_stripe_cc.wc-stripe-no-desc.stripe-small-container label{

			padding-left: 10px;
		}


	}

</style>

<style scoped >



</style>





