<?php
function owy_wc_get_product( $sections )
{
	if( is_array( $sections ) )
	{
		foreach ( $sections as $key => $section ) 
		{
			if( $section->template == 'wc-shop' )
			{	
				$products = get_posts( array(
					'post_type' => 'product',
					'posts_per_page' => 0
				) );
				$section->children = apply_filters( 'posts_results', $products );
			}
		}	
	}
	
	/*echo "<pre>";
	print_r( $sections );
	exit();*/

	return $sections;
}

add_filter( 'sections_loaded', 'owy_wc_get_product' );