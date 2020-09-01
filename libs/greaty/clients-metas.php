<?php


function gtr_get_clients( $args2 = null ) {

	global $post;

	$args2 = array(
		'post_type' => 'client',
		'posts_per_page' => -1,
	);

    $clients = get_posts($args2);

    $clients = apply_filters( 'posts_results', $clients ) ;

       wp_vue_add_var('clients', $clients);
       

       
};
add_action( 'wp_head', 'gtr_get_clients' ); // used on load
add_action( 'wp', 'gtr_get_clients' ); // json page transition