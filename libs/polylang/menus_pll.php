<?php

function get_menus_pll()
{	
	global $post;

	$query = array(
		'echo' => 0,
		'display_names_as' => 'slug',
	);

	if( $post->ID )
	{
		$query['post_id'] = $post->ID;
	}
	
	$pll = pll_the_languages( $query );

	wp_vue_add_var('pll', $pll);
}

add_action( 'vue_vars', 'get_menus_pll' );




function check_filters_translation($url, $lang) {
 	
 	$search = $_GET;

 	if(  $search['filter-taxonomy'] && $search['product_cat'] )
 	{
 		foreach ($search as $key => $value) {
 			if( $key != 'filter-taxonomy' && $key != 'product_cat' )
 			{
 				unset( $search[$key] );
 			}
 		}
 		
 		$term = get_term_by( 'slug', $search['product_cat'], 'product_cat' );
 		$term_pll = pll_get_term( $term->term_id, $lang );

 		if( $term_pll )
 		{
 			$term = get_term( $term_pll );
 			$search['product_cat'] = $term->slug;

 			return $url . '?' . http_build_query($search);
 		}	
 	}

    return $url;
}

add_filter('pll_the_language_link', 'check_filters_translation', 10, 2);