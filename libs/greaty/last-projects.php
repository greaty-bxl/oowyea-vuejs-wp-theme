<?php


function gtr_get_projects( $args = null ) {

	global $post;

	global $sections;

	$args = array(
		'post_type' => 'project',
	);

	if( is_single() ){

		$args =
		array( 
			'post_type' => 'project',
			'posts_per_page' => -1,
			// 'post__not_in' =>  array($post->ID)
		);

	}
	if ( $sections[0]->template ==  "greaty-home" ) {

		$args =
		array( 
			'post_type' => 'project',
			'posts_per_page' => -1,

		);
	}
	if ( $sections[0]->template ==  "greaty-projects") {

		$args =
		array( 
			'post_type' => 'project',
			'posts_per_page' => -1,
			'post__not_in' =>  ''

		);


	}

    $projects = get_posts($args);

    $projects = apply_filters( 'posts_results', $projects ) ;

       wp_vue_add_var('projects', $projects);
       
}; 
add_action( 'wp_head', 'gtr_get_projects'); // used on load
add_action( 'wp', 'gtr_get_projects' ); // json page transition