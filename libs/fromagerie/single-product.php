<?php

function gtr_get_add_to_cart( ) {


	if( is_product() ){

		

		// $add_to_cart = do_shortcode('[owy_woo_add_to_cart]');
		// $count = do_shortcode( '[owy_woo_get_cart_contents_count]');
		// wp_vue_add_var('add_to_cart', $add_to_cart);
		// wp_vue_add_var('count', $count);
	}

   

       
};
add_action( 'vue_vars', 'gtr_get_add_to_cart' );