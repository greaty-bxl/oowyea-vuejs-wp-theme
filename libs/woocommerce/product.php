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
	global $product;

	//if page with list then we will keep the global post as it after the filter
	$post_before = $post;

	if( is_admin() )
	{
		return $posts;
	}

	if( !is_array($posts) )
	{
		$post = $posts;
		$posts = array( 0 => $post );
	}

	foreach ($posts as $key2 => $child) 
	{
		if( $child->post_type == 'product' )
		{
			$product = wc_get_product($child->ID);

			/*echo "<pre>";
			print_r( $product->data );
			exit();*/
			//make the current child as main post to let shortcode working correctly	
			$post = $child;
			$posts[$key2]->price = do_shortcode( '[owy_woo_price]' );
			$posts[$key2]->sold_out = do_shortcode( '[owy_woo_sold_out_badge]' );
			$posts[$key2]->is_in_stock = $product->is_in_stock();
		}
	}	

	$post = $post_before;

	return $posts;
}
add_filter( 'posts_results', 'woocommerce_product_vars' );