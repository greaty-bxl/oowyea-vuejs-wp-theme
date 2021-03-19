<?php

function owy_get_unique_peer_site()
{
	//generate ID for channel name
	if( ! $uid_site = get_option( 'owy_unique_peer_site' ) )
	{
		$uid_site = uniqid();

		update_option( 'owy_unique_peer_site', $uid_site );
	}

	//generate key to crypting communication
	function generateRandomString($length = 10) {
	    $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
	    $charactersLength = strlen($characters);
	    $randomString = '';
	    for ($i = 0; $i < $length; $i++) {
	        $randomString .= $characters[rand(0, $charactersLength - 1)];
	    }
	    return $randomString;
	}

	if( ! $peer_key = get_option( 'owy_peer_key' ) )
	{
		$peer_key = generateRandomString(50);

		update_option( 'owy_peer_key', $peer_key );
	}

	if( ! $peer_admin_key = get_option( 'owy_peer_admin_key' ) )
	{
		$peer_admin_key = generateRandomString(50);

		update_option( 'owy_peer_admin_key', $peer_admin_key );
	}

	//add vars to vue

	wp_vue_add_var('uid_site', $uid_site . '_' . sanitize_title( get_bloginfo('name') ) );

	wp_vue_add_var('peer_key', $peer_key );

	if( is_admin() && is_user_logged_in() )
	{
		wp_vue_add_var('peer_admin_key', $peer_admin_key );
	}


}
add_action( 'vue_vars', 'owy_get_unique_peer_site' );