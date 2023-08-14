<?php

function redirect_to_brussels()
{
	if( get_current_blog_id() === 1 )
	{
		wp_redirect( get_site_url(2) );
		exit();	
	}	
	
}
//add_action( 'wp', 'redirect_to_brussels' );