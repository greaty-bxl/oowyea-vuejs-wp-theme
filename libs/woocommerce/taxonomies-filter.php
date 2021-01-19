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
		$shop_header = array(
			'parent_label' => '',
			'label' => $post->post_title,
			'slug' => $post->post_name,
			'img' => '',
		);

		if( $_GET['product_cat'] && !is_array( $_GET['product_cat'] ) )
		{
			$current_term = get_term_by( 'slug', $_GET['product_cat'], 'product_cat' );

			// get the thumbnail id using the queried category term_id
			$thumbnail_id = get_term_meta( $current_term->term_id, 'thumbnail_id', true ); 

			// get the image URL
			$image = wp_get_attachment_url( $thumbnail_id ); 

			if( $current_term->parent !== 0 )
			{
				$parent_label = get_term( $current_term->parent )->name;
			}
			else
			{
				$parent_label = '';
			}

			$shop_header = array(
				'parent_label' => $parent_label,
				'label' => $current_term->name,
				'slug' => $current_term->slug,
				'img' => $image,
			);
		}

		wp_vue_add_var('shop_header', $shop_header );

		$paged_product_category = get_field('paged_product_category', 'option');

		if( $paged_product_category )
		{

			$terms = get_terms( 'product_cat', array(
			    //'hide_empty' => false,
			));

			foreach ($terms as $key => $term) 
			{
				$relations = get_field( 'taxonomies_list', 'product_cat_'.$term->term_id );
				$relations_new_array = array();
				

				if( is_array( $relations ) )
				{
					foreach ($relations as $key_rel => $taxonomy_field) 
					{

						$taxonomy = $taxonomy_field['other_taxonomy_relation'];

						$relation_terms = get_terms( $taxonomy, array(
						    //'hide_empty' => false,
						));

						if( is_array( $relation_terms ) )
						{
							foreach ($relation_terms as $key_term => $term) 
							{
								$relation_terms[$key_term]->selected = false;
								$relation_terms[$key_term]->disabled = false;
							}	
						}

						$relations_new_array[] = array(
							'label' => get_taxonomy( $taxonomy )->label,
							'slug' => $taxonomy,
							'terms' => $relation_terms
						);

						//$relations_new_array[$taxonomy]	= $relation_terms;
					}	
				}
				

				$terms[$key]->relations = $relations_new_array;
			}

			$relations = $terms;

			wp_vue_add_var('product_cat_child', $relations );
		}


		$include_filters = get_field('include_in_filtering', 'option');
		$shop_filter = array();

		if( is_array($include_filters) )
		{
			foreach ($include_filters as $key => $filter) 
			{
				$terms = get_terms( array('taxonomy'=> $filter['tax_filter_in'] ) );

				if( is_array( $terms ) )
				{
					foreach ($terms as $key_term => $term) 
					{
						$terms[$key_term]->selected = false;
						$terms[$key_term]->disabled = false;
					}	
				}

				$shop_filter[] = array(
					'label' => get_taxonomy( $filter['tax_filter_in'] )->label,
					'slug' => $filter['tax_filter_in'],
					'terms' => $terms
				);
			}
			wp_vue_add_var('shop_filter', $shop_filter );
			
		}
	}
}

add_action( 'vue_vars', 'owy_get_product_cat_filters_lists_with_relations' );


?>