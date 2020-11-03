<template>

	<div v-html="post.post_content" >

	</div>

</template>

<script>

// import smart_fonts from 'Libs/smart-fonts.js';
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
		console.log(this.wp);

	},


	

}



</script>

<style>

	#cart.woocommerce #respond input#submit.alt, .woocommerce a.button.alt, .woocommerce button.button.alt, .woocommerce input.button.alt a{

		background-color: #70625B;
		color: white !important;
		border-width: 0;
		margin-top: 16px;
		border: solid #70625B;
		border-width: 1px;
		min-width: 200px;
		width: 40%;
		padding-top: 25px;
		padding-bottom: 25px;
		line-height: 0;
		border-radius: 0px;



	}

	#cart button:hover{

		background-color: white !important;
		color: #70625B  !important;
	}

	#cart button{

		background-color: #70625B;
		color: white;
		border-width: 0;
		/*margin-top: 16px;*/
		border: solid #70625B;
		border-width: 1px;
		padding-top: 20px;
		padding-bottom: 20px;
		line-height: 0;
		border-radius: 0px;

	}

	#cart button:hover {

		background-color: white;
		color: #70625B;
		transition: 200;

	}

	#cart.woocommerce #respond input#submit.alt:hover, .woocommerce a.button.alt:hover, .woocommerce button.button.alt:hover, .woocommerce input.button.alt:hover{

		background-color: white;
		color: #70625B !important;
		transition: 200;

	}

	#cart#add_payment_method table.cart img, .woocommerce-cart table.cart img, .woocommerce-checkout table.cart img {

		width: 100px;
	}

	#cart.woocommerce{

		margin: 120px auto;
		width: 50vw;

	}

	#cart.woocommerce a{

		text-decoration-line: none;
		color: #70625B;
		font-weight: 500;

	}

	#cart.woocommerce table.shop_table th{

		color: #70625B;
	}

	#cart.woocommerce table.shop_table{

		border: 1px solid #A59890 !important;
	}

	#cart.woocommerce table.shop_table td{

		border: 1px solid #A59890 !important;
	}

	#cart a{

		text-decoration-line: none;
		color: #4D4D4D;
		font-size: 16px;
	}

	#cart.woocommerce tr td, .woocommerce-page table.shop_table_responsive tr td {

		text-decoration-line: none;
		color: #70625B;
		font-size: 18px;
	}

	@media screen and (max-width: 600px){

		#cart button{


			margin-top: 16px;
			width: 50%;
			margin-left: auto;
			margin-right: auto;


		}

		#cart.woocommerce a{

			text-decoration-line: none;
			color: #70625B;
			font-size: 16px;

		}

		#cart.woocommerce{

			margin: 100px 30px;

		}

		#cart .woocommerce{

		margin: 120px 30px !important;
		width: calc(100% - 60px)!important;

		}

		#cart .section-wrap{

			min-height: auto !important;
		}

		#cart{

			min-height: auto !important;
		}

		#cart .woocommerce #content table.cart td.actions .coupon, .woocommerce table.cart td.actions .coupon, .woocommerce-page #content table.cart td.actions .coupon, .woocommerce-page table.cart td.actions .coupon{

				display: flex;
				flex-direction: column;
		}

		#cart .woocommerce #content table.cart td.actions .coupon .button, .woocommerce #content table.cart td.actions .coupon .input-text, .woocommerce #content table.cart td.actions .coupon input, .woocommerce table.cart td.actions .coupon .button, .woocommerce table.cart td.actions .coupon .input-text, .woocommerce table.cart td.actions .coupon input, .woocommerce-page #content table.cart td.actions .coupon .button, .woocommerce-page #content table.cart td.actions .coupon .input-text, .woocommerce-page #content table.cart td.actions .coupon input, .woocommerce-page table.cart td.actions .coupon .button, .woocommerce-page table.cart td.actions .coupon .input-text, .woocommerce-page table.cart td.actions .coupon input {

			width: auto;
			padding-top: 20px;
			padding-bottom: 20px;

		}

	}
		@media screen and (max-width: 1100px) and (min-width: 600px){

			#cart .woocommerce{

			margin: 150px 70px !important;
			width: calc(100% - 140px)!important;
			padding-top: 100px;

			}

			#cart .section-wrap{

				min-height: auto !important;
			}

			#cart{

				min-height: auto !important;
			}


		}

	#cart .woocommerce{
		margin: 120px auto;
		width: 50vw;
	}


</style>

<style scoped >



</style>





