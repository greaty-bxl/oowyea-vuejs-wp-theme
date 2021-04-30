<?php

function owy_builder_network_admin_url()
{
	if( is_multisite() )
	{

		$network_admin_url = network_admin_url();
		wp_vue_add_var('network_admin_url', $network_admin_url);
		wp_vue_add_var('is_multisite', 1);	
	}
	else
	{
		wp_vue_add_var('is_multisite', 0);	
	}
}
add_action( 'vue_vars', 'owy_builder_network_admin_url' );

function let_all_users_create_sites(){
	if( is_multisite() 

		&& basename( $_SERVER['PHP_SELF'] ) == "site-new.php" 

		&& is_user_logged_in() )
	{
		return true;
	}
	else
	{
		return false;
	}
}

function multi_create_sites($allcaps, $cap)
{
	global $can_edit_theme;

	if( let_all_users_create_sites() )
	{
		$allcaps[$cap[0]] = true;
	}	
	return $allcaps;
}
add_filter( 'user_has_cap', 'multi_create_sites', 10, 2 );

function multi_site_creator_remove_wp_elements()
{
	if( let_all_users_create_sites() && !is_super_admin() )
	{
	?>
		<style>
			#wpadminbar, #adminmenumain, #screen-meta-links, #wpfooter{
				display: none !important;
			}
			#wpcontent{
				margin-left: 0px;
			}
			body {
			    background: transparent;
			    color: #fff;
			}
		</style>
		<?php
	}
}
add_action( 'admin_head', 'multi_site_creator_remove_wp_elements' );