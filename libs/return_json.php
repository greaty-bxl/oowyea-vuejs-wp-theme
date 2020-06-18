<?php

function vue_return_json()
{
	if ( isset( $_GET['add_to_json'] ) ) 
	{
		global $wp_vue_json;
		echo json_encode( $wp_vue_json );
		exit();
	}
}
add_action( 'wp','vue_return_json', 9999 );