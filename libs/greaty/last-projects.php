<?php

function gtr_get_projects( $args = null ) {

    $projects = get_posts( array(
    	'numberposts'      => 9,
    	'post_type'        => 'projects',

    ));

    $projects = apply_filters( 'posts_results', $projects ) ;

       wp_vue_add_var('projects', $projects);
       
};
add_action( 'wp_head', 'gtr_get_projects' ); // used on load
add_action( 'wp', 'gtr_get_projects' ); // json page transition