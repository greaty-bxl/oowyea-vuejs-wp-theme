<?php

function check_other_term_availabilities(){
	global $post;

	//delete_option( 'terms_combos' );

	if( !is_admin() )
	{
		echo "<pre>";
		print_r( get_option( 'terms_combos', array() ) );
		exit();
	}
}
add_action( 'wp', 'check_other_term_availabilities' );


function find_post_id_and_remove( $terms_combos, $post_ID )
{
	foreach ($terms_combos as $combo => $ids) 
	{
		foreach ($ids as $id_key => $id) 
		{
			if( $post_ID == $id )
			{
				unset($terms_combos[$combo][$id_key]);
				if( empty($terms_combos[$combo]) )
				{
					unset( $terms_combos[$combo] );
				}
			}
		}
	}
	return $terms_combos;
}


function update_terms_tax_combo($post_ID, $post)
{
	if( $post->post_type == 'product' )
	{
		$terms_combos = get_option( 'terms_combos', array() );

		$terms_combos = find_post_id_and_remove( $terms_combos, $post_ID );

		if( $post->post_status == 'publish' )
		{

			$taxonomies = array();//get_taxonomies();
			$acf_filters = get_field('include_in_filtering', 'option');
			
			//$include_tax = array();
			foreach ($acf_filters as $key => $filter) 
			{
				$taxonomies[$filter['tax_filter_in']] = $filter['tax_filter_in'];
			}
			echo "<pre>";
			print_r( $taxonomies );
			echo "<hr/>";


			ksort($taxonomies);
			$new_combo = array();

			foreach ($taxonomies as $taxonomy_slug => $taxonomy_slug_2) {
				
				$terms = get_the_terms( $post, $taxonomy_slug );

				echo "<pre>";
				print_r($taxonomy_slug);

				echo "<pre>";
				print_r($terms);

				if( !empty( $terms ) )
				{
					foreach ($terms as $term_key => $term_object) 
					{
						$new_combo[] = $term_object->term_id;
					}
				}
			}

			//exit();

			sort( $new_combo );

			if( count($new_combo) > 1 )
			{
				$combo_key = implode('-', $new_combo);

				$terms_combos[$combo_key][$post_ID] = $post_ID;

				echo "<pre>";
				print_r( $terms_combos );
			}
		}
		update_option( 'terms_combos', $terms_combos, true );
	}
}
add_action( 'post_updated', 'update_terms_tax_combo', 0, 2 );

function update_terms_tax_combo_on_delete($postid, $post)
{
	if( $post->post_type == 'product' )
	{

		$terms_combos = get_option( 'terms_combos', array() );

		$terms_combos = find_post_id_and_remove( $terms_combos, $post_ID );

		update_option( 'terms_combos', $terms_combos, true );
	}
}
add_action( 'delete_post', 'update_terms_tax_combo_on_delete', 0, 2 );