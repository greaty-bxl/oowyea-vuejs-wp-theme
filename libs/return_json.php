<?php

/*function owy_force_json_function(){
	if( $_COOKIE['owy_force_json'] )
	{
		//$_GET['add_to_json'] = 1;
		setcookie("owy_force_json", 0, time()+1);
		
		global $wp;

		print_r( $wp );

		do_action( 'before_document');	

		wp_logout();
		exit();
	}
}
add_action( 'wp', 'owy_force_json_function' );*/

function vue_return_json()
{
	if ( isset( $_GET['add_to_json'] ) || $_COOKIE['owy_force_json'] /* && !$_GET['_wpnonce']*/ ) 
	{
		setcookie("owy_force_json", 0, time()-1, '/');

		global $wp_vue_json;
		echo json_encode( $wp_vue_json );

		exit();
	}
}
add_action( 'before_document','vue_return_json', 9999 );