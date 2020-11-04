<?php

function gtr_get_count( ) {

	// global $posts;
	if( !is_admin() ){

		$count = do_shortcode( '[owy_woo_get_cart_contents_count]');
		wp_vue_add_var('count', $count);
	}
	
};
add_action( 'vue_vars', 'gtr_get_count' ); // used on load
//add_action( 'wp', 'gtr_get_count' ); // json page transition
