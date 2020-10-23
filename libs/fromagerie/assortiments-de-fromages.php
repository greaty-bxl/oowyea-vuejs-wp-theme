<?php

function gtr_get_assortiments_de_fromages( $assortiments_de_fromages_1 = null ) {

	global $posts;

	$args4 = array(
		'post_type' => 'product',
		'posts_per_page' => -1,
		'category' => 'assortiments-de-fromages'
	);

    $assortiments_de_fromages = get_posts($args4);

    $assortiments_de_fromages = apply_filters( 'posts_results', $assortiments_de_fromages ) ;

    wp_vue_add_var('assortiments_de_fromages', $assortiments_de_fromages);
       

       
};
add_action( 'wp_head', 'gtr_get_assortiments_de_fromages' ); // used on load
add_action( 'wp', 'gtr_get_assortiments_de_fromages' ); // json page transition
