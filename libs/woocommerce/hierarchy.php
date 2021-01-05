<?php

function init_woo_hierarchy()
{
	global $wp_query;
	global $woocommerce;

	if ( class_exists( 'woocommerce' ) ) 
	{
		if( is_shop() && is_page() )
		{
			$queried_object = $wp_query->post;
			$queried_object->label = $wp_query->post->post_title;

			$wp_query->is_page = false;

			$wp_query = new WP_Query( array(
				'post_type' => 'product'
			) );

			$wp_query->is_home = false;

			$wp_query->is_shop = true;

			$wp_query->queried_object = $queried_object;

			$wp_query->post = $queried_object;
		}
	}


}

add_action( 'before_sections', 'init_woo_hierarchy' );