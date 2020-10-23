<?php

function save_theme_option()
{
	global $user;

	if( current_user_can( 'edit_theme_options' ) )
	{
		$options_to_up = array();

		foreach ( $_POST['vars']['keys'] as $key => $value) 
		{
			$options_to_up[$key] = $_POST['vars']['state'][$value];
			update_option( $key, $_POST['vars']['state'][$value] );
		}
		die( json_encode( $options_to_up ) );
	}
}
add_action( 'wp_ajax_save_theme_option', 'save_theme_option' );