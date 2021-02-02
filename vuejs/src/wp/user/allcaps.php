<?php 
function allcaps_current_user($value='')
{
	$data = get_userdata( get_current_user_id() );
	 
	if ( is_object( $data) ) {
	    $current_user_caps = $data->allcaps;
	}
	else
	{
		$current_user_caps = array();
	}

	wp_vue_add_var('user_can', $current_user_caps);
}
/*add_action( 'wp_head', 'allcaps_current_user' );
add_action( 'wp', 'allcaps_current_user' );*/