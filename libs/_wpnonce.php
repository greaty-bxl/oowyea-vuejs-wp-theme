<?php

function wp_redirect_filter($status, $location) {
    if( $_GET['add_to_json'] && $_GET['_wpnonce'] && 
    	//can return before redirect
    	( $_GET['remove_item'] || $_GET['undo_item'] ) 
    )
	{
		global $wp;
		wp();

		do_action( 'before_document');

		exit();
	}
	return $status;
}
add_filter( 'wp_redirect_status', 'wp_redirect_filter', 10, 2);