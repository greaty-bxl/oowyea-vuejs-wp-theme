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



	
	#my-account  button {

		background-color: #70625B !important;
		color: white !important;
		border-width: 0;
		margin-top: 16px;
		border: solid #70625B;
		border-width: 1px;
		min-width: 200px;
		/*width: 40%;*/
		padding-top: 25px;
		padding-bottom: 25px;
		line-height: 0;



	}

	#my-account  button:hover {

		background-color: white !important;
		color: #70625B !important;
		transition: 200;

	}

	div p{

		font-family: 'Montserrat', sans-serif !important;
		font-size: 18px;
	}



	#my-account  input.button.alt{

		border: solid #70625B;
		border-width: 1px;



	}

	#my-account  input{

		border: 1px solid #A59890 !important;
		margin-top: 15px;
		padding-top: 10px;
		padding-bottom: 10px;
		color: #666666;
		padding-left: 15px;

	}

	.woocommerce #respond input#submit.alt:hover, .woocommerce a.button.alt:hover, .woocommerce button.button.alt:hover, .woocommerce input.button.alt:hover{

		background-color: white;
		color: #70625B;
		transition: 200;

	}

	#add_payment_method table.cart img, .woocommerce-cart table.cart img, .woocommerce-checkout table.cart img {

		width: 100px;
	}

	#my-account .woocommerce{

		margin-top: 70px;
		min-height: calc(100vh - 120px);
		display: flex;
	}

	#my-account nav{

		position: static !important;

	}

	#my-account  .woocommerce a{

		text-decoration-line: none;
		color: #70625B;
		font-weight: 500;

	}

	#my-account .woocommerce-MyAccount-navigation{

		margin-top: auto;
		margin-bottom: auto;
		margin-left: auto;

	}

	#my-account .woocommerce-MyAccount-content{

		margin-top: auto;
		margin-bottom: auto;
		margin-right: auto;

	}

	.woocommerce-account .woocommerce-MyAccount-content{

		width: 40%;
	}

	#my-account  .woocommerce table.shop_table th{

		color: #70625B;
		font-size: 18px;
	}

	#my-account  .woocommerce table.shop_table{

	border: 1px solid #A59890 !important;
	}

	#my-account  .woocommerce table.shop_table td{

		border: 1px solid #A59890 !important;
	}


	#my-account .woocommerce-MyAccount-navigation ul{

	padding-left: 0px;

	}

	#my-account .edit{

		padding-right: 10px !important;
		padding-top: 5px !important;
		padding-left: 10px !important;
		padding-bottom: 5px !important;
		color: white !important;
		background-color: #70625B !important;
		border: solid #70625B;
		border-width: 1px;
	}

	#my-account .edit:hover{

		color: #70625B!important;
		background-color: white!important;
	}

	#my-account .woocommerce-MyAccount-content {

		/*text-align: left;*/
	}

	#my-account .woocommerce-MyAccount-content p {

		/*margin-top: 16px;*/
	}

    #my-account header{

		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-top: 16px;
		padding-bottom: 16px;

	}


	#my-account .woocommerce-MyAccount-content a{

		/*color: #70625b !important;*/
		font-weight: 600;
	}



	@media screen and (max-width: 600px){

		#my-account  .woocommerce a{

			text-decoration-line: none;
			color: #70625B;
			font-weight: bold;

		}
		#my-account  .woocommerce{

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
		#my-account .woocommerce {
			margin-top: 70px;
			min-height: calc(100vh - 120px);
			display: flex;
			flex-direction: column;
		}

		#my-account .woocommerce-MyAccount-content{

			margin-left: auto;
			width: 95%;

		}

		#my-account .woocommerce-MyAccount-navigation{

			padding-top: 50px;
			margin-left: auto !important;
			margin-right: auto !important;
			padding-bottom: 50px;
		}

		#my-account .woocommerce-account .woocommerce-MyAccount-content {

			width: 80%;
			
		}

		#my-account .woocommerce ul{

			padding-left: 0px;
		}

	}
	@media screen and (max-width: 1100px) and (min-width: 600px){

		#my-account .woocommerce {
			margin-top: 70px;
			min-height: calc(100vh - 120px);
			display: flex;
			flex-direction: column;
		}

		#my-account .woocommerce-MyAccount-content{

			margin-left: auto;
			width: 80%;

		}

		#my-account .woocommerce-MyAccount-navigation{

			padding-top: 120px;
			margin-left: auto !important;
			margin-right: auto !important;
			padding-bottom: 50px;
		}

		#my-account .woocommerce-account .woocommerce-MyAccount-content {

			width: 80%;

		}

	}




</style>

<style scoped >



</style>





