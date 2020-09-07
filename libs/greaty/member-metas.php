<?php


function gtr_get_member( $args3 = null ) {

	global $post;

	$args3 = array(
		'post_type' => 'member',
		'posts_per_page' => -1,
	);

    $members = get_posts($args3);

    $members = apply_filters( 'posts_results', $members ) ;

       wp_vue_add_var('members', $members);
       

       
};
add_action( 'wp_head', 'gtr_get_member' ); // used on load
add_action( 'wp', 'gtr_get_member' ); // json page transition