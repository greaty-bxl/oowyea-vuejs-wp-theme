<?php

function grt_get_acf_group($slug){
	$acf_field_groups = get_posts(array(
		'name' => $slug,
		'post_type' => 'acf-field-group',
		'posts_per_page' => -1
	));	

	if( !empty( $acf_field_groups ) )
	{
		return $acf_field_groups[0];
	}
	else
	{
		return false;
	}
}

if( function_exists('acf_add_local_field_group') 
	//remove for production (only dev)
	&& !grt_get_acf_group('group_header_style') 
	&& !grt_get_acf_group('group_page_style') 
){
	include GREATY_TEMPLATE_PATH.'/libs/acf-fields/header-style.php';
	include GREATY_TEMPLATE_PATH.'/libs/acf-fields/page-style.php';
} //endif