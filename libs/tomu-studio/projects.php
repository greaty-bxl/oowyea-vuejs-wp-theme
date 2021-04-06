<?php

function gtr_get_projects( $projects_1 = null ) {

	global $posts;

	$args5 = array(
		'post_type' => 'project',
		'posts_per_page' => -1,

	);

    $projects = get_posts($args5);

    $projects = apply_filters( 'posts_results', $projects ) ;

    wp_vue_add_var('projects', $projects);
       
       
};
add_action( 'vue_vars', 'gtr_get_projects' ); // used on load
