<?php

function get_menus()
{
	$metas = array();

	
	wp_vue_add_var('metas', $metas);
}

add_action( 'wp_head', 'get_menus' );
add_action( 'wp', 'get_menus' );