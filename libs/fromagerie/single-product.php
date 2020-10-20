<?php

function gtr_get_add_to_cart( ) {

	// global $posts;

	if( is_product() ){

		 // exit();

		$add_to_cart = do_shortcode('[add_to_cart_url id="'.$post->ID.'"]');

		// $plateaux_fromages = apply_filters( 'posts_results', $plateaux_fromages ) ;

		wp_vue_add_var('add_to_cart', $add_to_cart);
	}

   

       
};
add_action( 'wp_head', 'gtr_get_add_to_cart' ); // used on load
add_action( 'wp', 'gtr_get_add_to_cart' ); // json page transition
