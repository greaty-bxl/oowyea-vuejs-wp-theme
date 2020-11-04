<?php

function gtr_get_posts_assortiments( $posts_assortiments_1 = null ) {

	global $posts;

	$args5 = array(
		'post_type' => 'post',
		'posts_per_page' => -1,
		
	);

    $posts_assortiments = get_posts($args5);

    $posts_assortiments = apply_filters( 'posts_results', $posts_assortiments ) ;

    wp_vue_add_var('posts_assortiments', $posts_assortiments);
       

};
add_action( 'vue_vars', 'gtr_get_posts_assortiments' ); // used on load