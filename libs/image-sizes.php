<?php

function vue_get_all_image_sizes_as_array()
{
	$sizes = array();
	foreach ( get_intermediate_image_sizes() as $size_name ) 
	{
		$sizes[ $size_name ]['w'] = get_option( "{$size_name}_size_w" );
		$sizes[ $size_name ]['h'] = get_option( "{$size_name}_size_h" );
		$sizes[ $size_name ][ 'crop' ] = get_option( "{$size_name}_crop" ) ? 1 : 0;
	}

	wp_vue_add_var('image-sizes', $sizes);
}

add_action( 'vue_vars', 'vue_get_all_image_sizes_as_array' );