<?php

/*function single_product_get_elements()
{
	global $post;

	if( $post->post_type == 'product' )
	{
		$price = do_shortcode( '[owy_woo_price]' );

		wp_vue_add_var('price', $price);
	}
}
add_action( 'vue_vars', 'single_product_get_elements' );*/


function woocommerce_product_vars( $posts ) {

	global $post;
	//if page with list then we will keep the global post as it after the filter
	$post_before = $post;

	if( !is_array($posts) )
	{
		$post = $posts;
		$posts = array( 0 => $post );
	}
	foreach ($posts as $key2 => $child) 
	{					
		//make the current child as main post to let shortcode working correctly	
		$post = $child;
		$posts[$key2]->price = do_shortcode( '[owy_woo_price]' );
	}

	$post = $post_before;

	return $posts;
}
add_filter( 'posts_results', 'woocommerce_product_vars' );