<?php


function gtr_get_projects( $args = null ) {

	global $post;

	$args = array(
		'post_type' => 'project',
	);

	if( is_single() && $post->post_type == "project" ){

		$args = 
		array( 
			'post_type' => 'project',
			'post__not_in' =>  array($post->ID)
		);
	
	}

	if ( $post->template ==  'greaty-home' ) {
		
		$args = 
		array( 
			'post_type' => 'project',
			'posts_per_page' => 6,
			'post__not_in' =>  ''

		);

	}

    $projects = get_posts($args);

    $projects = apply_filters( 'posts_results', $projects ) ;

       wp_vue_add_var('projects', $projects);
       
};
add_action( 'wp_head', 'gtr_get_projects' ); // used on load
add_action( 'wp', 'gtr_get_projects' ); // json page transition