<?php

function my_posts_results_filter( $posts ) {

	foreach ($posts as $key2 => $child) 
	{						
		$posts[$key2]->permalink = get_permalink( $child->ID );
		$posts[$key2]->metas = get_post_meta( $child->ID );
		$posts[$key2]->thumb = get_the_post_thumbnail_url( $child->ID );
	}

	return $posts;
}
add_filter( 'posts_results', 'my_posts_results_filter' );