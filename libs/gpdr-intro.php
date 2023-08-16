<?php

function check_gpdr_intro_accepted()
{
	$gpdr_accepted = false;
	$google_accepted = false;

	if( @$_COOKIE["owy_gpdr_accepted"] == 'true' )
	{
		$gpdr_accepted = true;
	}
	wp_vue_add_var( 'gpdr_accepted', $gpdr_accepted );

	if( @$_COOKIE["owy_google_accepted"] == 'true' )
	{
		$google_accepted = true;
	}
	wp_vue_add_var( 'google_accepted', $google_accepted );
}
add_action( 'vue_vars', 'check_gpdr_intro_accepted', 0 );


function gpdr_update_state()
{

	if( @$_POST['data']['gpdr'] == 'true' )
	{
		setcookie('owy_gpdr_accepted', 'true', time()+62208000, '/', $_SERVER['HTTP_HOST']);
	}

	if( @$_POST['data']['google'] == 'true' )
	{
		setcookie('owy_google_accepted', 'true', time()+62208000, '/', $_SERVER['HTTP_HOST']);
	}
	die( json_encode( $_COOKIE ) );
}

add_action( 'wp_ajax_gpdr_update_state', 'gpdr_update_state' );
add_action( 'wp_ajax_nopriv_gpdr_update_state', 'gpdr_update_state' );