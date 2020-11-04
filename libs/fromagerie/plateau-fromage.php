<?php

function gtr_get_plateaux_fromages( $plateaux_fromages_1 = null ) {

	global $posts;

	$args4 = array(
		'post_type' => 'product',
		'posts_per_page' => -1,
		'tax_query' =>  array( 
					
				array(
				'taxonomy'      => 'product_cat',
				// 'relation' => 'AND',
				'terms'  => 18,
				// 'taxonomy' =>  'plateau-fromage',
				// 'field' => 'slug',
				)
					 
		)
	);

    $plateaux_fromages = get_posts($args4);

    $plateaux_fromages = apply_filters( 'posts_results', $plateaux_fromages ) ;

    wp_vue_add_var('plateaux_fromages', $plateaux_fromages);
       

       
};
add_action( 'vue_vars', 'gtr_get_plateaux_fromages' ); // used on load