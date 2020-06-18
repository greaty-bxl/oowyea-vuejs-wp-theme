<?php

function get_wp_sidebars()
{
	$sidebars = array();

	foreach ( $GLOBALS['wp_registered_sidebars'] as $sidebar ) 
	{
		ob_start();
		dynamic_sidebar( $sidebar['id'] );
		$sidebars[$sidebar['id']] = ob_get_clean();
		
	}
	wp_vue_add_var('sidebars', $sidebars);
}

add_action( 'wp_head', 'get_wp_sidebars' );
add_action( 'wp', 'get_wp_sidebars' );