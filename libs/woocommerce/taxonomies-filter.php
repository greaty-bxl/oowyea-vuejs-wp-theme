<?php

function global_funtion_filter( $query ) {

	if ( $query->query['post_type'] == 'product' && !is_admin()  && !$query->is_single && $_GET['filter-taxonomy'] )
	{	
		if ( $_GET['filter-taxonomy'] ) 
		{	
			$taxonomies = $_GET;

			$category = $_GET['product_cat'];
		}
		else if ( $_POST['filter-taxonomy'] )
		{
			$taxonomies = $_POST;
		}
		else
		{ 
			return;
		}

		unset( $taxonomies['filter-taxonomy'] );

		if( $_GET['add_to_json'] )
		{
			unset( $taxonomies['add_to_json'] );	
		}

		if ( count( $taxonomies ) > 0 ) 
		{
			$tax_query = array( 'relation' => 'AND' );

			foreach ($taxonomies as $name => $terms) 
			{
				if( !is_array( $terms ) )
				{
					$terms = array( $terms ); 
				}

				$tax_query[] = array(
					'taxonomy'     => $name,
					'field' => 'slug',
					'terms' =>  $terms,
					'include_children' => true, 
					'operator' => 'IN'
				);
			}

			$query->set( 'tax_query', $tax_query );
		}
	}			
};

add_action( 'pre_get_posts', 'global_funtion_filter' ); // used on load




function owy_get_product_cat_filters_lists_with_relations() {

	global $post;

	if( $post->template == 'wc-shop' )
	{
		$terms = get_terms( 'product_cat', array(
		    'hide_empty' => false,
		));

		foreach ($terms as $key => $term) 
		{
			$relations = get_field( 'other_taxonomy_relation', 'product_cat_'.$term->term_id );
			$relations_new_array = array();

			if( is_array( $relations ) )
			{
				foreach ($relations as $key_rel => $taxonomy) 
				{
					$relation_terms = get_terms( $taxonomy, array(
					    'hide_empty' => false,
					));

					$relations_new_array[$taxonomy]	= $relation_terms;
				}	
			}
			

			$terms[$key]->relations = $relations_new_array;
		}

		wp_vue_add_var('product_cat_filters_extended', $terms );
	}
}

add_action( 'vue_vars', 'owy_get_product_cat_filters_lists_with_relations' );


?>