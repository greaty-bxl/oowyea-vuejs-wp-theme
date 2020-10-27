<?php

function gtr_get_cart( ) {

	// global $posts;

	if( is_page('cart') ){

	?>

	<style type="text/css">
		
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

				margin: 120px 70px;
			

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

				border: 1px solid #A59890 !important;
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

	<?php

	}

   

       
};
add_action( 'wp_head', 'gtr_get_cart' ); // used on load
add_action( 'wp', 'gtr_get_cart' ); // json page transition
