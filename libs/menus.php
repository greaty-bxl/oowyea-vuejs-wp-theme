<?php

function get_menus()
{
	$menuLocations = get_nav_menu_locations();
	$menus = array();

	foreach ($menuLocations as $key => $menuLocation) 
	{
		$menus[$key] = wp_nav_menu( array(
				'menu_id' => $menuLocations['header-menu'],
				'echo' => false
			));
	}
	wp_vue_add_var('menus', $menus);
}

add_action( 'wp_head', 'get_menus' );
add_action( 'wp', 'get_menus' );		