<?php

function gtr_get_les_pains( $les_pains_1 = null ) {

	global $posts;

	$args4 = array(
		'post_type' => 'product',
		'posts_per_page' => -1,
		'category' => 'les-pains'
	);

    $les_pains = get_posts($args4);

    $les_pains = apply_filters( 'posts_results', $les_pains ) ;

    wp_vue_add_var('les_pains', $les_pains);
       

       
};
add_action( 'wp_head', 'gtr_get_les_pains' ); // used on load
add_action( 'wp', 'gtr_get_les_pains' ); // json page transition
