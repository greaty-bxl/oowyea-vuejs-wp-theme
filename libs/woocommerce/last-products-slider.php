<?php

function get_last_products_slider()
{

	if( owy_has_template( 'nouvelles-section-home' ) )
	{
		$result = array();

		$max_product_per_cat = get_field('last_product_slider_max_product_per_category', 'option');
		$terms_ids = get_field( 'last_product_slider_categories', 'option' );

		

		if( is_array($terms_ids) )
		{
			foreach ($terms_ids as $key => $repeater) {

				$term_id = $repeater['category'];
				
				$result[ $key ]['term'] = get_term( $term_id ); 

				$result[ $key ]['posts'] = apply_filters( 'posts_results', get_posts( array(
					'post_type' => 'product',
					'posts_per_page' => $max_product_per_cat,
					'tax_query'=> array(
						array(
							'taxonomy' => 'product_cat', // (string) - Taxonomy.
							'field' => 'term_id', // (string) - Select taxonomy term by Possible values are 'term_id', 'name', 'slug' or 'term_taxonomy_id'. Default value is 'term_id'.
							'terms' => array( $term_id ), // (int/string/array) - Taxonomy term(s).
							'include_children' => true, // (bool) - Whether or not to include children for hierarchical taxonomies. Defaults to true.
							'operator' => 'IN' // (string) - Operator to test. Possible values are 'IN', 'NOT IN', 'AND', 'EXISTS' and 'NOT EXISTS'. Default value is 'IN'.
						)
					)
				)));
			}	
		}
		
		/*echo "<pre>";
		print_r( $result );

		exit();*/
		wp_vue_add_var('last_products_slider', $result );
	}

}

add_action( 'vue_vars', 'get_last_products_slider' );