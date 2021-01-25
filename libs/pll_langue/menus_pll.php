<?php

function get_menus_pll()
{	
	global $post;

	$query = array(
		'echo' => 0,
		'display_names_as' => 'slug',
	);

	if( $post->ID )
	{
		$query['post_id'] = $post->ID;
	}
	
	$pll = pll_the_languages( $query );

	wp_vue_add_var('pll', $pll);
}

add_action( 'vue_vars', 'get_menus_pll' );