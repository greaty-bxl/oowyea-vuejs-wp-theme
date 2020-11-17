<?php

function wp_redirect_filter($status, $location) {
    if( $_GET['add_to_json'] && $_GET['_wpnonce'] )
	{
		echo "refresh";
		exit();
	}
	return $status;
}
add_filter( 'wp_redirect_status', 'wp_redirect_filter', 10, 2);