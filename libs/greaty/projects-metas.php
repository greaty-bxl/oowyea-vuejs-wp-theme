<?php

function my_posts_results_filter_projects( $projects ) {

	foreach ($projects as $key => $project) 
	{						
		$project[$key]->permalink = get_permalink( $child->ID );
	
	}

	return $projects;
}
