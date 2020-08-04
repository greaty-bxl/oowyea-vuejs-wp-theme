<?php

include GREATY_TEMPLATE_PATH.'/libs/acf-fields/theme-settings.php';

function vue_get_acf( $section )
{
	if( is_admin() )
	{
		return;
	}
	

	if( is_singular( $section->post_type ) )
	{
		$object_id = $section->ID;
	}

	$acf = array();
	$acf['field_objects'] = get_field_objects();
	$acf['this_fields'] = get_fields( $object_id );
	$acf['options'] = get_fields('options');
	
	$section->acf = $acf;
	
	return $section;
}
add_filter( 'section', 'vue_get_acf' );

/*add_action( 'wp_head', 'vue_get_acf' );
add_action( 'wp', 'vue_get_acf' );*/