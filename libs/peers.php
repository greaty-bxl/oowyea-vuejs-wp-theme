<?php

function owy_get_unique_peer_site()
{
	if( ! $uid_site = get_option( 'owy_unique_peer_site' ) )
	{
		$uid_site = uniqid();

		update_option( 'owy_unique_peer_site', $uid_site );
	}

	wp_vue_add_var('uid_site', $uid_site . '_' . sanitize_title( get_bloginfo('name') ) );
}
add_action( 'vue_vars', 'owy_get_unique_peer_site' );