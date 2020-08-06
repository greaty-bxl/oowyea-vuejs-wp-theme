<?php



function gtr_get_projects( $args = null ) {

    $projects = get_posts( array(
    	'numberposts'      => 9,
    	'post_type'        => 'projects',
    ));

 //    foreach ($projects as key => project) 
	// {						
	// 	project[$key2]->permalink = get_permalink( $child->ID );
	// 	$project[$key2]->metas = get_post_meta( $child->ID );
	// 	$project[$key2]->thumb = get_the_post_thumbnail_url( $child->ID );
	// }

	return $projects;

    wp_vue_add_var('projects', $projects);

  };

add_action( 'wp_head', 'gtr_get_projects' ); // used on load
add_action( 'wp', 'gtr_get_projects' ); // json page transition

