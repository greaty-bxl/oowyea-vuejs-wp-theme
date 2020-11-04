<?php

function gtr_get_les_pains( $les_pains_1 = null ) {

	global $posts;

	$args5 = array(
		'post_type' => 'product',
		'posts_per_page' => -1,
		'tax_query' =>  array( 
							
						array(
						'taxonomy'      => 'product_cat',
						'terms'  => 20,
						)
							 
				)
		
	);

    $les_pains = get_posts($args5);

    $les_pains = apply_filters( 'posts_results', $les_pains ) ;

    wp_vue_add_var('les_pains', $les_pains);
       

       
};
add_action( 'vue_vars', 'gtr_get_les_pains' ); // used on load