<?php

function gtr_get_newsletter( ) {

	// global $posts;
	if( !is_admin() ){

		$newsletter = do_shortcode( '[newsletter_form]');
		wp_vue_add_var('newsletter', $newsletter);
	}
	
};
add_action( 'vue_vars', 'gtr_get_newsletter' ); // used on load
//add_action( 'wp', 'gtr_get_count' ); // json page transition
