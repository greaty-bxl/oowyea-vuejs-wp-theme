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

@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;1,100;1,200;1,300;1,400&display=swap');

	
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

	#checkout #add_payment_method table.cart img, .woocommerce-cart table.cart img, .woocommerce-checkout table.cart img {

		width: 100px;
	}

	#checkout .woocommerce{

		margin: 120px auto;
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

/*	#checkout .woocommerce table.shop_table{

	border: 1px solid #A59890 !important;
	}
*/
/*	#checkout .woocommerce table.shop_table td{

		border: 1px solid #A59890 !important;
	}
*/
	@media screen and (max-width: 600px){

		#checkout .woocommerce a{

			text-decoration-line: none;
			color: #70625B;
			font-weight: bold;

		}
		#checkout .woocommerce{

			margin: 100px 30px;
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

	
	}

	@media screen and (max-width: 1100px) and (min-width: 600px){

		#checkout .woocommerce{

		margin: 150px 70px !important;
		width: calc(100% - 140px);

		}

		#checkout .section-wrap{

			min-height: auto !important;
		}

		#checkout{

			min-height: auto !important;
		}

	}

/*	#checkout .woocommerce table.shop_table td{

		border: none !important;
	}*/

	#checkout .woocommerce .shop_table  {
		border: 1px solid #70625B !important;
	}
	

</style>

<style scoped >



</style>





