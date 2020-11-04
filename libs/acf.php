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
	
	$section->acf_fields = get_fields( $object_id );
	
	return $section;
}
add_filter( 'section', 'vue_get_acf' );


function vue_get_acf_option()
{
	global $wp_filesystem;
	if ( ! $wp_filesystem ) {
		require_once ( ABSPATH . '/wp-admin/includes/file.php' );
		WP_Filesystem();
	}

	$acf = array();
	
	$acf['options'] = get_fields('options');

	$fields = array();

	foreach ( array_diff(scandir(GREATY_TEMPLATE_PATH.'/acf-json'), array('..', '.')) as $key => $value) {

		$local_file = /*str_replace('/', '\\',*/ GREATY_TEMPLATE_PATH . '/acf-json/' . $value/*)*/;

		if ( $wp_filesystem->exists( $local_file ) ) 
		{
			foreach ( json_decode( $wp_filesystem->get_contents( $local_file ) )->fields as $field_object) 
			{
				$fields[$field_object->name] = $field_object;
			}
		}
	}

	$acf['field_objects'] = $fields;


	wp_vue_add_var('acf', $acf);
}
add_action( 'vue_vars', 'vue_get_acf_option' );
//add_action( 'wp', 'vue_get_acf_option' );