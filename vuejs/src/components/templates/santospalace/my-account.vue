<template>

	<div id="mon-compte">
		<h5 class="title-compte" v-html="pll__('Mon compte')"></h5>
		<!-- <div v-html="post.post_content" > -->
		<!-- </div>	 -->
	</div>

</template>

<script>

import smart_fonts from 'Libs/smart-fonts.js';

export default {

	props: {
		'post' : Object
	},

	mounted(){
		var $ = this.$

		this.$emit('template_mounted', this);

		console.log(this.wp);

		smart_fonts({
			'.title-compte' : 25,
		})


		$('.woocommerce-error').parents('.woocommerce').css({
			display: 'flex',
			flexDirection: 'column'
		});


		$('.woocommerce-error').parents('.woocommerce').find('h2').css('margin-right', 'auto');

		$('.woocommerce-error').parents('.woocommerce').find('.login').css('margin-left', 'auto');

		//resolve login issue 'add to json'
		var referer_val = $('[name="_wp_http_referer"]').prop('value')
		if( referer_val )
		{
			referer_val = referer_val.replace('?add_to_json=1', '')
			referer_val = referer_val.replace('&add_to_json=1', '')
			$('[name="_wp_http_referer"]').val(referer_val)
		}

	},

}



</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;1,100;1,200;1,300;1,400&display=swap');


	.woocommerce .woocommerce-customer-details :last-child, .woocommerce .woocommerce-order-details :last-child, .woocommerce .woocommerce-order-downloads :last-child{

		font-size: 18px !important;
		line-height: 25px !important;
	}


	mark{

		background: white !important;
		font-weight: 500;
	}
	#mon-compte nav ul li {

		margin-bottom: 15px;
		margin-left: 10px;
		margin-right: 10px;
		font-size: 18px!important;
		list-style: none;

	}


	#mon-compte .lost_reset_password{

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 50%;
		margin-left: auto;
		margin-right: auto;
	}


	#mon-compte  *{

		font-weight: 400;

	}

	
	#mon-compte .woocommerce-MyAccount-navigation-link--edit-address a{
 
		display: none !important;
	}

	#mon-compte .is-active a{

		border-bottom: 2px solid #70625B !important;

	}

	.woocommerce-button .button .view{

		font-size: 16px !important;
	}

	
	#mon-compte  button {

		background-color: #70625B !important;
		color: white !important;
		border-width: 0;
		margin-top: 16px;
		border: solid #70625B;
		border-width: 1px;
		min-width: 200px;
		padding-top: 25px;
		padding-bottom: 25px;
		line-height: 0px;

	}

	#mon-compte .woocommerce-button .button .view{

		font-size: 14px !important;
	}

	#mon-compte .woocommerce #respond input#submit, .woocommerce a.button, .woocommerce button.button, .woocommerce input.button{

		font-size: 18px !important;
		border: solid #70625B;
		border-width: 1px;
		background-color: white !important;
		border-radius: 0px !important;

	}

	#mon-compte  button:hover {

	background-color: white !important;
	color: #70625B !important;
	transition: 0.3s;
	}

	#mon-compte div p{

		font-family: 'Montserrat', sans-serif !important;
		font-size: 18px;
		line-height: 30px;
	}



	#mon-compte  input.button.alt{

		border: solid #70625B;
		border-width: 1px;
		border-radius: 0px !important;



	}

	#mon-compte  input{

		border: 1px solid #A59890 !important;
		margin-top: 15px;
		padding-top: 10px;
		padding-bottom: 10px;
		color: #666666;
		padding-left: 15px;

	}

	#mon-compte .woocommerce-MyAccount-content .view{

		background-color: #70625B !important;
		color: white !important;
		border-width: 0;
		/*margin-top: 16px;*/
		border: solid #70625B;
		border-width: 1px;
		/*min-width: 200px;*/
		padding-top: 10px;
		padding-bottom: 10px;
		line-height: 0;
		border-radius: 0px;
		font-size: 14px !important;
		/*margin-bottom: 16px;*/
		/*font-size: 18px;*/

	}

	#mon-compte .woocommerce-MyAccount-content .view:hover{

		background-color: white !important;
		color: #70625B !important;
		transition: 0.3s;


	}

	.woocommerce #respond input#submit.alt:hover, .woocommerce a.button.alt:hover, .woocommerce button.button.alt:hover, .woocommerce input.button.alt:hover{

		background-color: white;
		color: #70625B;
		transition: 0.3s;

	}

	#add_payment_method table.cart img, .woocommerce-cart table.cart img, .woocommerce-checkout table.cart img {

		width: 100px;
	}

	#mon-compte .woocommerce{

		margin-top: 5vh;
		/*min-height: calc(100vh - 230px);*/
		display: flex;
	}

	#mon-compte nav{

		position: static !important;

	}

	#mon-compte  .woocommerce a{

		text-decoration-line: none;
		color: #70625B;
		font-weight: 500;

	}

	#mon-compte .woocommerce-MyAccount-navigation{

		/*margin-top: auto;*/
		margin-bottom: auto;
		margin-left: auto;

	}

	#mon-compte .woocommerce-MyAccount-content{

		margin-top: auto;
		margin-bottom: auto;
		margin-right: auto;

	}

	.woocommerce-account .woocommerce-MyAccount-content{

		width: 40%;
	}

	#mon-compte  .woocommerce table.shop_table th{

		color: #70625B;
		/*font-size: 16px;*/
	}

	#mon-compte  .woocommerce table.shop_table{

	border: 1px solid #A59890 !important;
	font-size: 16px !important;
	}

	#mon-compte .woocommerce-MyAccount-navigation ul{

	padding-left: 0px;

	}

	#mon-compte .edit{

		padding-right: 10px !important;
		padding-top: 5px !important;
		padding-left: 10px !important;
		padding-bottom: 5px !important;
		color: white !important;
		background-color: #70625B !important;
		border: solid #70625B;
		border-width: 1px;
	}

	#mon-compte .edit:hover{

		color: #70625B!important;
		background-color: white!important;
	}

	#mon-compte .woocommerce-MyAccount-content {

		/*text-align: left;*/
	}

	#mon-compte .woocommerce-MyAccount-content p {

		/*margin-top: 16px;*/
	}

    #mon-compte header{

		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-top: 16px;
		padding-bottom: 16px;

	}


	#mon-compte .woocommerce-MyAccount-content a{

		/*color: #70625b !important;*/
		font-weight: 600;
	}

	#mon-compte .woocommerce-no-js form.woocommerce-form-coupon, .woocommerce-no-js form.woocommerce-form-login{

		margin-left: 70px;
		margin-right: auto;
		/*margin-left: auto;*/
	}

	#mon-compte h2{

		margin-left: auto !important;
		/*margin-right: auto !important ;*/
		color: #70625B;
		font-weight: 500;
	}

	.woocommerce-error {
		border-top-color: #b81c23;
		width: 50% !important;
		margin: 0 auto;
	}

	@media screen and (max-width: 600px){


		.date-enlevement {
			text-align: left;
		}

		.woocommerce .woocommerce-customer-details :last-child, .woocommerce .woocommerce-order-details :last-child, .woocommerce .woocommerce-order-downloads :last-child{

			font-size: 14px !important;
			line-height: 20px !important;
		}

		#mon-compte div p{

			font-size: 14px !important;
			line-height: 20px !important;
		}

		#mon-compte .woocommerce-info{

			display: flex;
			flex-direction: column;
			font-size: 12px !important;
		}

		#mon-compte .woocommerce-error::before, .woocommerce-info::before, .woocommerce-message::before{

			left: 2 !important;
		}

		.woocommerce-message{

			font-size: 16px !important;
		}


		#mon-compte .lost_reset_password{

			width: 100%;

		}

		#mon-compte .lost_reset_password button{

			font-size: 14px !important;
		}


		.woocommerce-error {

			width: auto !important;
			margin: 0 auto;
			
		}

		#mon-compte  .woocommerce a{

			text-decoration-line: none;
			color: #70625B;
			/*font-weight: bold;*/

		}

		#mon-compte  .woocommerce{

			margin: 100px 30px;
			width: auto;

		}
		.woocommerce-no-js form.woocommerce-form-coupon, .woocommerce-no-js form.woocommerce-form-login{

			display: flex!important;
			flex-direction: column;

		}

		.woocommerce form .form-row-first, .woocommerce form .form-row-last, .woocommerce-page form .form-row-first, .woocommerce-page form .form-row-last{

			width: 100%;
			text-align: center;
		}
		#mon-compte .woocommerce {
			margin-top: 20px;
			display: flex;
			flex-direction: column;
		}

		#mon-compte .woocommerce-MyAccount-content{

			margin-left: auto;
			width: 95%;

		}

		#mon-compte .woocommerce-MyAccount-navigation{

			padding-top: 0px;
			margin-left: auto !important;
			margin-right: auto !important;
			padding-bottom: 50px;
		}

		#mon-compte .woocommerce-account .woocommerce-MyAccount-content {

			width: 80%;
			
		}

	/*	#mon-compte .woocommerce ul{

			/*padding-left: 0px;*/
		/*}*/

		.title-compte{
			font-size: 22px !important;
			margin-left: 30px !important;
		}

		#mon-compte .woocommerce-no-js form.woocommerce-form-coupon, .woocommerce-no-js form.woocommerce-form-login{

				margin-left: 0px;
				margin-right: 0px;
				
			}

			#mon-compte h2{
				color: #70625B;
				font-weight: 500;
				text-align: left;
				margin-left: 0px !important;
				font-size: 18px;
			}

		#mon-compte div p{

			font-family: 'Montserrat', sans-serif !important;
			font-size: 18px;
			line-height: 25px;
		}

		#mon-compte button{

			line-height: 25px;
			padding-top: 10px;
			padding-bottom: 10px;

		}

		

	}
	@media screen and (max-width: 1100px) and (min-width: 600px){

		.woocommerce-order-details__title{

				text-align: center !important;
				margin-left: 0px !important;


		}

		.date-enlevement{

				text-align: center !important;
				margin-left: 0px !important;

		}
		
		#mon-compte .lost_reset_password{

			width: 70%;

		}

		.woocommerce-error {
			width: 70% !important;
			width: auto;
			margin: 0 auto;
		}

		#mon-compte .woocommerce {
			margin-top: 70px;
			display: flex;
			flex-direction: column;
		}

		#mon-compte .woocommerce-MyAccount-content{

			margin-left: auto;
			width: 80%;

		}

		#mon-compte .woocommerce-MyAccount-navigation{

			/*padding-top: 120px;*/
			margin-left: auto !important;
			margin-right: auto !important;
			padding-bottom: 100px;
		}

		#mon-compte .woocommerce-account .woocommerce-MyAccount-content {

			width: 80%;

		}


		.title-compte{

			margin-left: 70px !important;
			text-align: left !important;

		}

		#mon-compte .woocommerce-no-js form.woocommerce-form-coupon, .woocommerce-no-js form.woocommerce-form-login{

			margin-left: 70px;
			margin-right: 70px;

		}

		#mon-compte h2{
			color: #70625B;
			font-weight: 500;
			text-align: left;
			/*margin-left: 70px !important;*/
			margin-right: 0;

			font-size: 18px;
		}

		#mon-compte div p{

			font-family: 'Montserrat', sans-serif !important;
			font-size: 18px;
			line-height: 25px;
		}



	}



	.title-compte{

		text-align: left;
		margin-left: 140px;
		margin-bottom: 5vh;
		margin-top: 100px;
		padding-top: 5vh;
		color: #70625B;
		font-weight: 500;


	}


	@media screen and (max-width: 4000px) and (min-width: 1700px){

		.title-compte{

			margin-bottom: 7vh;
			padding-top: 7vh;

		}

	}




</style>

<style scoped >



</style>





