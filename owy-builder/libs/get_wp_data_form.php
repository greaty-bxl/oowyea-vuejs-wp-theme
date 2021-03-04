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
	$vue_data = $_POST['data'];

	if( $_POST['is_vue'] )
	{
		if( $field['name'] == 'value' )
		{
			if( isset( $vue_data['template'] ) )
			{

				$field['choices'] = array(
					'test' => 'Test'
				);
			}
		}
	}
	return $field;
	
}
add_filter( 'acf/load_field', 'owy_builder_wp_data_acf_filter', 10 );


function my_pre_save_post($post_id) {
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
add_filter( 'acf/pre_save_post', 'my_pre_save_post' );

add_action( 'wp_ajax_owy_save_wp_data', 'acf_form_head' );

function owy_save_wp_data_return_json($post_id){

	if( $_POST['vue_wp_data'] )
	{
		$return = array(
			'post_id' => $post_id
		);

		die( json_encode( $return ) );
	}
}

add_action( 'acf/save_post', 'owy_save_wp_data_return_json', 20 );