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

	.woocommerce #respond input#submit.alt, .woocommerce a.button.alt, .woocommerce button.button.alt, .woocommerce input.button.alt{

		background-color: #70625B;
		color: white;
		border-width: 0;
		margin-top: 16px;
		border: solid #70625B;
		border-width: 1px;
		min-width: 200px;
		width: 40%;
		padding-top: 25px;
		padding-bottom: 25px;
		line-height: 0;



	}

	.woocommerce #respond input#submit.alt:hover, .woocommerce a.button.alt:hover, .woocommerce button.button.alt:hover, .woocommerce input.button.alt:hover{

		background-color: white;
		color: #70625B;
		transition: 200;

	}

	#add_payment_method table.cart img, .woocommerce-cart table.cart img, .woocommerce-checkout table.cart img {

		width: 100px;
	}

	.woocommerce{

		margin: 120px auto;
		width: 50vw;

	

	}

	.woocommerce a{

		text-decoration-line: none;
		color: #70625B;
		font-weight: 500;

	}

	.woocommerce table.shop_table th{

		color: #70625B;
	}

	.woocommerce table.shop_table{

		border: 1px solid #A59890 !important;
	}

	.woocommerce table.shop_table td{

		/*border: 1px solid #A59890 !important;*/
	}

	@media screen and (max-width: 600px){

		.woocommerce a{

			text-decoration-line: none;
			color: #70625B;
			font-weight: bold;

		}

		.woocommerce{

			margin: 100px 30px;
		
		}	

	}


</style>

<style scoped >



</style>





