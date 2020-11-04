<?php

function gtr_get_les_confits( $les_confits_1 = null ) {

	global $posts;

	$args4 = array(
		'post_type' => 'product',
		'posts_per_page' => -1,
		'tax_query' =>  array( 
							
						array(
						'taxonomy'      => 'product_cat',
						'terms'  => 21,
						)
							 
				)
	);

    $les_confits = get_posts($args4);

    $les_confits = apply_filters( 'posts_results', $les_confits ) ;

    wp_vue_add_var('les_confits', $les_confits);
       

       
};
add_action( 'vue_vars', 'gtr_get_les_confits' ); // used on load