<?php

function grt_get_acf_group($slug){
	$acf_field_groups = get_posts(array(
		'name' => $slug,
		'post_type' => 'acf-field-group',
		'posts_per_page' => -1,
	));	

	if( !empty( $acf_field_groups ) )
	{
		return $acf_field_groups;
	}
	else
	{
		return false;
	}
}

if( function_exists('acf_add_local_field_group') ){
	//remove conditionals for prod (only dev)
	if(!grt_get_acf_group('group_header_style')) include GREATY_TEMPLATE_PATH.'/libs/acf-fields/header-style.php';
} //endif