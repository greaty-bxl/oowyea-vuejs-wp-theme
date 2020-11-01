<?php

function gtr_get_count( ) {

	// global $posts;
		$count = do_shortcode( '[owy_woo_get_cart_contents_count]');
		wp_vue_add_var('count', $count);

       
};
add_action( 'wp_head', 'gtr_get_count' ); // used on load
add_action( 'wp', 'gtr_get_count' ); // json page transition
