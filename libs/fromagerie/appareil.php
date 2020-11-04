<?php

function gtr_get_appareils( $appareils_1 = null ) {

	global $posts;

	$args5 = array(
		'post_type' => 'product',
		'posts_per_page' => -1,
		'tax_query' =>  array( 
							
						array(
						'taxonomy'      => 'product_cat',
						'terms'  => 23,
						)
							 
				)
		
	);

    $appareils = get_posts($args5);

    $appareils = apply_filters( 'posts_results', $appareils ) ;

    wp_vue_add_var('appareils', $appareils);
       
       
};
add_action( 'vue_vars', 'gtr_get_appareils' ); // used on load
