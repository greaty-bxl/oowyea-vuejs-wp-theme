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
}

$Owy_Acf_Admin = new Owy_Acf_Admin();