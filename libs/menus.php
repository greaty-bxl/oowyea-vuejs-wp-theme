<?php

// function get_menus()
// {
// 	$menuLocations = get_nav_menu_locations();
// 	$menus = array();

// 	foreach ($menuLocations as $key => $menuLocation) 
// 	{
// 		$menus[$key] = wp_nav_menu( array(
// 				'menu_id' => $menuLocations[$key],
// 				'echo' => false
// 			));
// 	}
// 	wp_vue_add_var('menus', $menus);
// }

// add_action( 'vue_vars', 'get_menus' );

function get_menus()
{
	$menuLocations = get_nav_menu_locations();
	$menus;
	$menus_array;

	foreach ($menuLocations as $key => $menuLocation) 
	{
		$menus[$key] = wp_nav_menu( array(
				'menu_id' => $menuLocations[$key],
				'echo' => false
			));

		$menus_array[$key] = wp_get_nav_menu_items( $menuLocations[$key] );
	}
	
	$res  = array();
	
	$array = json_decode(json_encode($menus_array['header-menu']), true);

	if( is_array( $array ) )
	{

		foreach($array as $val){

		   if($val['menu_item_parent'] != 0){

		       $res[$val['menu_item_parent']]['child'][] = $val;
		   }
		   else{
		       $res[$val['ID']] = $val;
		   }
		}

		wp_vue_add_var('menus', $res);
	}
	else
	{
		wp_vue_add_var('menus', array());
	}
}

add_action( 'vue_vars', 'get_menus' );
