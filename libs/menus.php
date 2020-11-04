<?php

function get_menus()
{
	$menuLocations = get_nav_menu_locations();
	$menus = array();

	foreach ($menuLocations as $key => $menuLocation) 
	{
		$menus[$key] = wp_nav_menu( array(
				'menu_id' => $menuLocations[$key],
				'echo' => false
			));
	}
	wp_vue_add_var('menus', $menus);
}

add_action( 'vue_vars', 'get_menus' );