<?php

function gtr_get_appareils( $appareils_1 = null ) {

	global $posts;

	$args8 = array(
		'post_type' => 'post',
		'posts_per_page' => -1,

	);

    $press = get_posts($args8);

    $press = apply_filters( 'posts_results', $press ) ;

    wp_vue_add_var('press', $press);
       
    
};
add_action( 'vue_vars', 'gtr_get_appareils' ); // used on load
