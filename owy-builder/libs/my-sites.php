<?php
function owy_builder_get_my_sites()
{
	if( is_multisite() )
	{

		$sites = get_blogs_of_user( get_current_user_id() );

		foreach ($sites as $key => $site) {
			
			$sites[$key]->admin_url = get_admin_url($site->userblog_id);
			$sites[$key]->oowyea_url = $sites[$key]->admin_url . '?page=oowyea-home';
		}

		wp_vue_add_var('builder_my_sites', $sites);	

	}
}
add_action( 'vue_vars', 'owy_builder_get_my_sites' );