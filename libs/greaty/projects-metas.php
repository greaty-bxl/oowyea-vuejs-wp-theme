<?php

function my_posts_results_filter_projects( $projects ) {

	foreach ($projects as $key => $project) 
	{						
		$project[$key]->permalink = get_permalink( $child->ID );
		$project[$key]->thumb = get_the_post_thumbnail( $child->ID );
	
	}

	return $projects;
}
