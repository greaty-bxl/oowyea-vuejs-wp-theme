<?php
function owy_get_builder_form()
{
	if( is_owy_builder )
	{
		//include GREATY_TEMPLATE_PATH . '/acfe-php/group_owy_wp_data.php';

		acf_form_head();
		
		//ob_start();

		acf_form(array(
			'field_groups' => array('group_owy_wp_data')
		));
		//$form = ob_get_clean();
		
		wp_vue_add_var('wp_data_form',  $form );

		exit();
	}	
}
//add_action( 'vue_vars', 'owy_get_builder_form' );

if( is_owy_builder )
{
	function owy_builder_init_acf()
	{
		//include GREATY_TEMPLATE_PATH . '/acfe-php/group_owy_wp_data.php';
		acf_form_head();
	}
	add_action( 'admin_init', 'owy_builder_init_acf' );
	add_action( 'admin_footer', 'disable_acf_alert' );
}

function owy_get_builder_wp_data_form_ajx()
{
	ob_start();

	acf_form(array(
		'field_groups' => array('group_owy_wp_data')
	));
	$form = ob_get_clean();

	die( $form );
}
add_action( 'wp_ajax_owy_get_builder_wp_data_form_ajx', 'owy_get_builder_wp_data_form_ajx' );


function owy_builder_wp_data_acf_filter($field)
{

	echo "<pre>";
	print_r($field);
	echo "</pre>";
	
}
//add_filter( 'acf/load_field', 'owy_builder_wp_data_acf_filter', 10 );