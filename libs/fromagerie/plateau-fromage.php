<?php

function gtr_get_plateaux_fromages( $plateaux_fromages_1 = null ) {

	global $posts;

	$args4 = array(
		'post_type' => 'product',
		'posts_per_page' => -1,
		// 'orderby' => 'rand'
	);

    $plateaux_fromages = get_posts($args4);

    // $plateaux_fromages = apply_filters( 'posts_results', $plateaux_fromages ) ;

    wp_vue_add_var('plateaux_fromages', $plateaux_fromages);
       

       
};
add_action( 'wp_head', 'gtr_get_plateaux_fromages' ); // used on load
add_action( 'wp', 'gtr_get_plateaux_fromages' ); // json page transition
