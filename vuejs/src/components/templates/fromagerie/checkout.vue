<template>

	<div>
		<h5 class="title-home">Paiement</h5>
		<div v-html="post.post_content" >
		</div>
	</div>
	


</template>

<script>

import smart_fonts from 'Libs/smart-fonts.js';
// import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
// import 'swiper/css/swiper.css';


export default {
	components: {

		// Swiper,
		// SwiperSlide,

	},
	props: {
		'post' : Object
	},




	mounted(){

	
		this.$emit('template_mounted', this);

			smart_fonts({
			'.title-home' : 25,
		})


	},


	

}



</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;1,100;1,200;1,300;1,400&display=swap');

	#checkout h3{

		font-size: 16px;
		color: #70625B

	}

	#checkout .woocommerce img, .woocommerce-page img{

		width: 100px;
	}

	#checkout button {

		background-color: #70625B !important;
		color: white !important;
		border-width: 0;
		margin-top: 16px;
		border: solid #70625B;
		border-width: 1px;
		min-width: 200px;
		padding-top: 25px;
		padding-bottom: 25px;
		line-height: 0;
		border-radius: 0px;
		margin-bottom: 16px;
		font-size: 18px;

	}

	#checkout button:hover {

		background-color: white !important;
		color: #70625B !important;
		transition: 200;

	}

	#checkout div p{

		font-family: 'Montserrat', sans-serif !important;
		font-size: 18px;
	}



	#checkout input.button.alt{

		border: solid #70625B;
		border-width: 1px;



	}

	#checkout input{

		border: 1px solid #A59890 !important;
		margin-top: 15px;
		padding-top: 10px;
		padding-bottom: 10px;
		color: #666666;
		padding-left: 15px;

	}

	#checkout .shop_table td{

		font-size: 16px !important;
	}



	.woocommerce #respond input#submit.alt:hover, .woocommerce a.button.alt:hover, .woocommerce button.button.alt:hover, .woocommerce input.button.alt:hover{

		background-color: white;
		color: #70625B;
		transition: 200;

	}

	#checkout .stripe-icon {

		width: 100px;
	}

	#checkout .woocommerce{

		margin: 5vh auto;
		width: 50vw;

	

	}

	#checkout .woocommerce a{

		text-decoration-line: none;
		color: #70625B;
		font-weight: 500;

	}

	#checkout .woocommerce table.shop_table th{

		color: #70625B;
		font-size: 18px;
	}

	#checkout .woocommerce ul.order_details{

		padding-left: 0px !important;
		display: flex;
		flex-direction: column;

	}


	#checkout .woocommerce .woocommerce-customer-details address{

		font-size: 18px !important;
		min-width: 90%;
		width: auto;

	}

	#checkout .woocommerce .woocommerce-customer-details address p{

		font-size: 18px !important;

	}

	.woocommerce-thankyou-order-received{

		margin-bottom: 20px !important;
		font-size: 20px !important;
		color: #70625b !important;
		font-weight: 600;
	}

		#checkout .woocommerce ul.order_details li{

		border: none !important;
		padding-top: 10px !important;
		margin-right: 0px !important;
		font-size: 15px!important;
		}

		#checkout .woocommerce ul.order_details li strong{

		padding-top: 10px !important;
		}

		#checkout .stripe-icon{

		width: 70px;
		}


		@media screen and (max-width: 600px){


		#checkout .woocommerce .woocommerce-customer-details address{

			font-size: 15px !important;
			min-width: 90%;
			width: auto;

		}

		#checkout .woocommerce .woocommerce-customer-details address p{

		font-size: 15px !important;

		}

		.woocommerce-thankyou-order-received{

		margin-bottom: 20px !important;
		color: #70625b;
		font-weight: 600;
		margin-bottom: 20px;
		}

		#checkout .woocommerce ul.order_details{

		padding-left: 0px !important;
		display: flex;
		flex-direction: column;

		}
		#checkout .woocommerce ul.order_details li{

		border: none !important;
		padding-top: 10px !important;
		margin-right: 0px !important;
		font-size: 12px!important;
		}

		#checkout .woocommerce ul.order_details li strong{

		padding-top: 7px !important;
		}

		#checkout .stripe-icon{

		width: 70px;
		}


		#checkout .woocommerce a{

			text-decoration-line: none;
			color: #70625B;
			font-weight: bold;

		}
		#checkout .woocommerce{

			margin: 30px 30px;
			width: auto;

		}

		#checkout .woocommerce-no-js form.woocommerce-form-coupon, .woocommerce-no-js form.woocommerce-form-login{

			display: flex!important;
			flex-direction: column;

		}

		#checkout .woocommerce form .form-row-first, .woocommerce form .form-row-last, .woocommerce-page form .form-row-first, .woocommerce-page form .form-row-last{

			width: 100%;
			text-align: center;
		}

		#checkout .section-wrap{

			min-height: auto !important;
		}

		#checkout{

			min-height: auto !important;
		}

		#checkout button {

			min-width: 250px;
			font-size: 16px;

		}

		.title-home{
			font-size: 22px !important;
			margin-left: 30px !important;
		}


		}

	@media screen and (max-width: 1100px) and (min-width: 600px){

		#checkout .woocommerce .woocommerce-customer-details address{

			font-size: 18px!important;
			min-width: 90%;
			width: auto !important;

		}

		#checkout .woocommerce .woocommerce-customer-details address p{

			font-size: 18px !important;

		}

		.woocommerce-thankyou-order-received{

			margin-bottom: 20px !important;
			font-size: 20px !important;
			color: #70625b !important;
			font-weight: 600;
		}

		#checkout .woocommerce ul.order_details{

			padding-left: 0px !important;
			display: flex;
			flex-direction: column;

		}
		#checkout .woocommerce ul.order_details li{

		border: none !important;
		padding-top: 10px !important;
		margin-right: 0px !important;
		font-size: 18px!important;

		}

		#checkout .woocommerce ul.order_details li strong{

			padding-top: 10px !important;
			font-weight: 400 !important;

		}

		#checkout .stripe-icon{

			width: 70px;
		}


		#checkout .woocommerce{

		margin: 0px 70px !important;
		width: calc(100% - 140px);

		}

		#checkout .section-wrap{

			min-height: auto !important;
		}

		#checkout{

			min-height: auto !important;
		}


		.title-home{

			margin-left: 70px !important;
			text-align: left !important;

		}

		#checkout button{

			font-size: 18px;
		}

	}

	#checkout .title-home{

		text-align: left;
		margin-left: 140px;
		margin-bottom: 5vh;
		/*margin-top: 0px !important;*/
		margin-top: 100px;
		padding-top: 5vh;
		color: #70625B;
		font-weight: 500;


	}

	#checkout.woocommerce #payment #place_order, .woocommerce-page #payment #place_order
		#checkout .woocommerce .shop_table  {
			border: 1px solid #70625B !important;
			font-size: 18px
		}

	@media screen and (max-width: 4000px) and (min-width: 1700px){

		.title-home{

			margin-bottom: 7vh;
			padding-top: 7vh;

		}

	}

	

</style>

<style scoped >



</style>





