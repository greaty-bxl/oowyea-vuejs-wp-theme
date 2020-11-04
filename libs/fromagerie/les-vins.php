<?php

function gtr_get_les_vins( $les_vins_1 = null ) {

	global $posts;

	$args4 = array(
		'post_type' => 'product',
		'posts_per_page' => -1,
		'tax_query' =>  array( 
							
						array(
						'taxonomy'      => 'product_cat',
						'terms'  => 22,
						)
							 
				)
	);

    $les_vins = get_posts($args4);

    $les_vins = apply_filters( 'posts_results', $les_vins ) ;

    wp_vue_add_var('les_vins', $les_vins);
       

       
};
add_action( 'vue_vars', 'gtr_get_les_vins' ); // used on load