<?php

function my_posts_results_filter( $posts ) {

	if( !is_array($posts) )
	{
		$post = $posts;
		$posts = array( 0 => $post );
	}
	foreach ($posts as $key2 => $child) 
	{						
		$posts[$key2]->permalink = get_permalink( $child->ID );

		$metas = get_post_meta( $child->ID );

		foreach ($metas as $key => $meta) {
			if( count($meta) == 1 )
			{
				$metas[$key] = $meta[0];
			}
		}
		$posts[$key2]->metas = $metas;
		$posts[$key2]->thumb = get_the_post_thumbnail_url( $child->ID );
		$posts[$key2]->post_author_object = get_userdata( $child->post_author );
		unset( $posts[$key2]->post_author_object->data->user_pass );
	    // $posts[$key2]->fields = get_field( 'image_projet' );
	    //$posts[$key2]->terms = get_the_terms( $child->ID, 'product_cat' );
		$posts[$key2]->terms = array();

		foreach (get_taxonomies() as $key_tax => $taxonomy) {
			$terms = get_the_terms( $child->ID, $taxonomy );
			if( !empty($terms) )
			{
				foreach ($terms as $key_term => $term) 
				{
					$terms[$key_term]->fields = get_fields( $taxonomy . '_' . $term->term_id );
				}
				$posts[$key2]->terms[$key_tax] = $terms;	
			}
		}
	    
	    $posts[$key2]->fields = get_fields( $child->ID );

	    

	}

	return $posts;
}
add_filter( 'posts_results', 'my_posts_results_filter' );