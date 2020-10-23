<?php

function gtr_get_les_confits( $les_confits_1 = null ) {

	global $posts;

	$args4 = array(
		'post_type' => 'product',
		'posts_per_page' => -1,
		'taxonomy' => 'les-confits'
	);

    $les_confits = get_posts($args4);

    $les_confits = apply_filters( 'posts_results', $les_confits ) ;

    wp_vue_add_var('les_confits', $les_confits);
       

       
};
add_action( 'wp_head', 'gtr_get_les_confits' ); // used on load
add_action( 'wp', 'gtr_get_les_confits' ); // json page transition
