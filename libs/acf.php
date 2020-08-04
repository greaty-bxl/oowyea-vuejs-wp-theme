<?php

include GREATY_TEMPLATE_PATH.'/libs/acf-fields/theme-settings.php';

function vue_get_acf()
{
	$acf = array();
	$acf['post_fields'] = get_fields();
	$acf['options'] = get_fields('options');

	/*echo "<pre>";
	print_r( grt_get_acf_group('') );
	exit();*/

	wp_vue_add_var('acf', $acf);
}

add_action( 'wp_head', 'vue_get_acf' );
add_action( 'wp', 'vue_get_acf' );