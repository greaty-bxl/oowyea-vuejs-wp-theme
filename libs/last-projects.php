<?php



function get_menus_1()
{
	$metas_1 = array();

	
	wp_vue_add_var('metas_1', $metas_1);
}

add_action( 'wp_head', 'get_menus_1' );
add_action( 'wp', 'get_menus_1' );