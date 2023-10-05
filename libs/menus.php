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
	$menus_array = array();
	$array = null;

	foreach ($menuLocations as $key => $menuLocation) 
	{
		$menus[$key] = wp_nav_menu( array(
				'menu_id' => $menuLocations[$key],
				'echo' => false
			));

		$menus_array[$key] = wp_get_nav_menu_items( $menuLocations[$key] );

		if (function_exists('get_fields') ) {
			foreach ($menus_array[$key] as $key2 => $item) {
			    $fields = get_fields($item->ID);
			    if ($fields) {
			    	$menus_array[$key][$key2]->acf = $fields;
			    }
			}
		}

	}
	
	$res  = array();
	
	if ( @$menus_array['header-menu'] )
	{
		$array = json_decode(json_encode($menus_array['header-menu']), true);	
	}
	
	wp_vue_add_var('menus', $menus_array);

	

	/*if( is_array( $array ) )
	{

		foreach($array as $val){

		   if($val['menu_item_parent'] != 0){

		   		//find parent
		   		foreach ($res as $key => $parent) 
		   		{
		   			if( $parent['ID'] == $val['menu_item_parent'] )
		   			{
		   				$res[$key]['child'][] = $val;
		   			}
		   		}
		       //$res[$val['menu_item_parent']]['child'][] = $val;
		   }
		   else{
		       $res[] = $val;
		   }
		}

		wp_vue_add_var('menus', $res);
	}
	else
	{
		wp_vue_add_var('menus', array());
	}*/


}

add_action( 'vue_vars', 'get_menus' );
