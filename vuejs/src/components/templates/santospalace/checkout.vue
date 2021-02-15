<template>

	<div class="checkout_santos" >
		<h5 class="title-home">Paiement</h5>

			<div v-html="cols_checkout.order_notices"></div>

			<form v-if="cols_checkout.woocommerce_order == undefined " name="checkout" method="post" :action="cols_checkout.action" class="form-check-out">

				<div v-html="cols_checkout.col_1"></div>

				<div v-if="cols_checkout.col_2" class="trigge_only_this">
					<input id='one' type='checkbox' v-model="checked">
						<label class="button-ouverture" for='one'>
							<span></span>
						<p @click="Open" v-html="cols_checkout.title_ship_address_text" ></p>
					</label>
				</div>				
				<div v-else :style="{ height:'50px'}" >
				</div>
				<transition name="fade">
					<div  v-show="checked" v-html="cols_checkout.col_2"></div>
				</transition>


				<div v-html="cols_checkout.title_commande" ></div>

				<div v-html="cols_checkout.order_review" ></div>

			</form>

			<div v-html="cols_checkout.woocommerce_order">
			</div>

	
<!-- 

		<div v-html="post.post_content" >
		</div> -->

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
			// post
		}


	},

	props: {
		'post' : Object
	},

	mounted(){

		this.$emit('template_mounted', this);

			smart_fonts({
			'.title-home' : 25,
		})

			init_styled_form('.woocommerce-billing-fields input, .woocommerce-shipping-fields__field-wrapper input')

			// hide header

			var $ = this.$

			$('#header').hide()

			var payconiq  = $('[alt="Payconiq"]').attr('src');

			if ( payconiq != undefined  ) {

				payconiq = payconiq.replace('24x24/payconiq.png', 'payconiqlogo.png')
				$('[alt="Payconiq"]').attr('src', payconiq);
			}
			
			
	},

	beforeDestroy(){

		var $ = this.$

		$('#header').show()
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

			console.log(this.post.post_content);

						
					cols['action'] = $(this.post.post_content).find('.checkout').attr('action');
					cols['col_1'] =  $(this.post.post_content).find('.col-1').html();
					cols['col_2'] =  $(this.post.post_content).find('.col-2 .shipping_address').html();
					cols['title_commande'] =  $(this.post.post_content).find('.order_review_heading').html();
					cols['title_ship_address_text'] =  $(this.post.post_content).find('#ship-to-different-address span').text();
					cols['order_review'] =  $(this.post.post_content).find('.woocommerce-checkout-review-order').html();
					cols['order_notices'] =  $(this.post.post_content).find('.woocommerce-notices-wrapper').html();
					cols['woocommerce_order'] =  $(this.post.post_content).find('.woocommerce-order').html();


			console.log(cols);
			
			return cols
		}

	}


	

}



</script>

<style >

@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;1,100;1,200;1,300;1,400&display=swap');

	.checkout_santos{

		width: 50% !important;
		margin-right: auto;
		margin-left: auto;
		margin-bottom: 100px;
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

	.fade-enter-active .woocommerce-shipping-fields, .fade-leave-active .woocommerce-shipping-fields, .fade-leave-to .left-col {

	/*	margin-top: -500px;
		transition: margin-top 0.6s;*/
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

	.checkout_santos .paddingTop-animation{

		padding-top: 26px !important;
		padding-bottom: 10px  !important;
	}

	.checkout_santos .appear-label{

		margin-top: 5px !important;
		position: absolute !important;
		display: flex !important;
	

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
	.checkout_santos  .trigge_only_thisinput[type='checkbox'] + label:hover > span, input[type='checkbox']:focus + label > span{
		background: rgba(255,255,255,.1);
	}
	.checkout_santos .trigge_only_this  input[type='checkbox']:checked + label > ins{ height: 100%; }

	.checkout_santos .trigge_only_this input[type='checkbox']:checked + label > span{
		border: .7em solid #888320;
		animation: shrink-bounce 200ms cubic-bezier(.4,.0,.23,1);
	}
	.checkout_santos .trigge_only_this input[type='checkbox']:checked + label > span:before{
		content: "";
		position: absolute;
		/* top: .5em;
		left: .3em;*/
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

	.woocommerce-checkout-review-order-table{

		/*margin-left: auto;
		margin-right: auto;*/
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

	.checkout_santos td p{
		margin-top: 10px !important;
		margin-bottom: 10px !important;
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



	@media screen and (max-width: 1025px) and (min-width: 600px){

		.checkout_santos{

			width: 100% !important;
			padding-right: 70px;
			padding-left: 70px;
			margin-bottom: 100px;
			box-sizing: border-box;
		}
	}


	@media screen and (max-width: 600px){

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


	}





</style>

<style scoped >



</style>





