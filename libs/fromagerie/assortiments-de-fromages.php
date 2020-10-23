<?php

function gtr_get_assortiments_de_fromages( $assortiments_de_fromages_1 = null ) {

	global $posts;

	$args6 = array(
		'post_type' => 'product',
		'posts_per_page' => -1,
		// 'taxonomy' =>  array( 'slug' =>  )
	);

	$args6['tax_query'] = array(
		'taxonomy' =>  'assortiments-de-fromages',
		'posts_per_page' => -1,
		'field' => 'slug',
	);

    $assortiments_de_fromages = get_posts($args6);

    $assortiments_de_fromages = apply_filters( 'posts_results', $assortiments_de_fromages ) ;

    wp_vue_add_var('assortiments_de_fromages', $assortiments_de_fromages);
       

       
};
add_action( 'wp_head', 'gtr_get_assortiments_de_fromages' ); // used on load
add_action( 'wp', 'gtr_get_assortiments_de_fromages' ); // json page transition
