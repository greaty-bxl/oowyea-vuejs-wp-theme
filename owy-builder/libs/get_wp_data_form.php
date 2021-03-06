<?php
include 'wp-data-get-values.php';


if( is_owy_builder )
{
	function owy_builder_init_acf()
	{
		//include GREATY_TEMPLATE_PATH . '/acfe-php/group_owy_wp_data.php';
		acf_form_head();
	}
	//add_action( 'admin_init', 'owy_builder_init_acf' );
	add_action( 'admin_enqueue_scripts', 'owy_builder_init_acf' );
	add_action( 'admin_footer', 'disable_acf_alert' );
}

function owy_get_builder_wp_data_form_ajx()
{
	$vue_data = $_POST['data'];
	$setting = array(
		'field_groups' => array('group_owy_wp_data'),
		'return' => admin_url()
	);

	$post = get_posts( array(
		'post_type' => 'owy_wp_data',
		'meta_key' => 'component_id',
		'meta_value' => $vue_data['id']
	) );

	if( !empty($post) )
	{
		global $owy_wp_data_query_from;
		global $owy_wp_data_example;

		$owy_wp_data_query_from = get_field('query_from', $post[0]->ID );
		$owy_wp_data_example = get_field('example', $post[0]->ID );

		$setting['post_id'] = $post[0]->ID;
	}
	else
	{
		$setting['new_post'] = true;
	}


	ob_start();

	acf_form($setting);
	echo "<pre>";
	echo var_dump($post[0]);
	echo "</pre>";
	echo "<pre>";
	echo var_dump($_POST);
	echo "</pre>";
	$form = ob_get_clean();

	die( $form );
}
add_action( 'wp_ajax_owy_get_builder_wp_data_form_ajx', 'owy_get_builder_wp_data_form_ajx' );


function owy_builder_wp_data_acf_filter($field)
{
	global $owy_wp_data_query_from; 
	global $owy_wp_data_example;
	global $owy_wp_data_example_type;

	$vue_data = $_POST['data'];

	$template_name = str_replace('owy-template-', '', $vue_data['template']);

	if( $_POST['is_vue'] )
	{
		if( $field['name'] == 'query_from' )
		{
			if( !$query_from )
			{
				$owy_wp_data_query_from = $field['default_value'];
			}
		}

		if( $field['name'] == 'example' )
		{
			$field['choices'] = owy_wp_data_get_example($template_name, $owy_wp_data_query_from);
			if( empty($field['choices']) )
			{
				$field['instructions'] = 'Please create content example';
			}
		}

		if( $field['name'] == 'value' )
		{
			if( isset( $template_name ) )
			{
				$field['choices'] = owy_wp_data_get_value_choices($template_name, $owy_wp_data_query_from);
			}
		}
	}
	return $field;
}
add_filter( 'acf/load_field', 'owy_builder_wp_data_acf_filter', 10 );

//create post wp data if not exist
function owy_wp_data_acf_pre_save_post($post_id) {
	if( $post_id == 0 && $_POST['vue_wp_data'] )
	{
		$post = array(
	        'post_status'  => 'publish' ,
	        'post_type'  => 'owy_wp_data',
	    );
	    $post_id = wp_insert_post($post); 	
	}
	return $post_id;
}
add_filter( 'acf/pre_save_post', 'owy_wp_data_acf_pre_save_post' );

//convert acf form head as ajax
add_action( 'wp_ajax_owy_save_wp_data', 'acf_form_head' );

//return json ID to vue panel
function owy_save_wp_data_acf_return_json($post_id){

	if( $_POST['vue_wp_data'] )
	{
		$return = array(
			'post_id' => $post_id
		);

		die( json_encode( $return ) );
	}
}

add_action( 'acf/save_post', 'owy_save_wp_data_acf_return_json', 20 );