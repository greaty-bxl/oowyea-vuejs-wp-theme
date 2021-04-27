<?php
/**
 * Acf Admin
 */
class Owy_Acf_Admin
{
	function __construct()
	{
		add_action( 'admin_enqueue_scripts', array($this, 'get_script') );
		add_action( 'wp_ajax_owy_acf_admin_get_form', array($this, 'get_form') );
		add_action( 'wp_ajax_owy_acf_admin_save_form', 'acf_form_head' );
		//add_filter( 'acf/pre_save_post', array($this, 'acf_pre_save_post') );
		add_action( 'acf/save_post', array($this, 'acf_return_json'), 20 );
	}

	public function get_script()
	{
		acf_form_head();
	}

	public function get_form()
	{
		$setting = $_POST['data'];

		ob_start();

		acf_form($setting);
		
		$form = ob_get_clean();

		echo $form;
		echo "<pre>";
		echo var_dump( $setting );
		echo "</pre>";
		die();
	}

	public function acf_pre_save_post($post_id)
	{
		/*if( $_POST['vue_acf_admin_form'] )
		{
			if( $post_id == 0 )
			{
				$post = array(
			        'post_status'  => 'publish' ,
			        'post_type'  => 'owy_wp_data',
			    );
			    $post_id = wp_insert_post($post); 
			}

			die( json_encode($_POST) );
		}*/
		//die( json_encode($_POST) );
		return $post_id;
	}

	public function acf_return_json( $post_id )
	{
		if( $_POST['vue_acf_admin_form'] )
		{
			$return = array(
				'post_id' => $post_id
			);
			die( json_encode( $return ) );
		}
	}
}

$Owy_Acf_Admin = new Owy_Acf_Admin();