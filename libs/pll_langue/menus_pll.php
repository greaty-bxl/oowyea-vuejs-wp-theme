<?php

function get_menus_pll()
{	
	// $args =
	$pll = pll_the_languages( array(
		'echo' => 0,
		'display_names_as' => 'slug'
	));

	wp_vue_add_var('pll', $pll);
}

add_action( 'vue_vars', 'get_menus_pll' );

