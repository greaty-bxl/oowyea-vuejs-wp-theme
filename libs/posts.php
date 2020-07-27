<?php

function my_posts_results_filter( $posts ) {

	foreach ($posts as $key2 => $child) 
	{						
		$posts[$key2]->permalink = get_permalink( $child->ID );
		$posts[$key2]->metas = get_post_meta( $child->ID );
		$posts[$key2]->thumb = get_the_post_thumbnail_url( $child->ID );
		$posts[$key2]->fields = get_fields( $child->ID );
		$excerpt = get_the_excerpt( $child->ID );
		$excerpt = substr( $excerpt , 0, 100);
		$posts[$key2]->excerpt = $excerpt;
	}

	return $posts;

}
add_filter( 'posts_results', 'my_posts_results_filter' );