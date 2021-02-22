<?php

//include GREATY_TEMPLATE_PATH.'/libs/acf-fields/theme-settings.php';

/*acf_add_options_page(array(
        'page_title'    => 'Theme General Settings',
        'menu_title'    => 'Theme Settings',
        'menu_slug'     => 'greaty-theme-general-settings',
        'parent_slug'   => 'oowyea-home',
        'capability'    => 'edit_posts',
        'redirect'      => false
    ));*/

/*acf_add_options_page(array(
	'page_title' => 'Shop Settings',
	'menu_title' => 'Shop Settings',
	'menu_slug' => 'shop-settings',
	'capability' => 'manage_woocommerce',
	'position' => '',
	'parent_slug' => 'oowyea-home',
	'icon_url' => '',
	'redirect' => true,
	'post_id' => 'options',
	'autoload' => false,
	'update_button' => 'Update',
	'updated_message' => 'Options Updated',
));*/

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


	/*echo "<pre>";
	print_r( $acf );
	exit();*/
	
	wp_vue_add_var('acf', $acf);
}
//add_action( 'vue_vars', 'vue_get_acf_option' );


/* ACF new location */
function owy_acf_init_no_location_types() {

    class Owy_No_Location extends ACF_Location {
        function initialize() {
            $this->name = 'owy-no-location';
            $this->label = __( 'No location (use in your code)' );
            $this->category = 'Forms';
        }
    }
    acf_register_location_type( 'Owy_No_Location' );
}

add_action('acf/init', 'owy_acf_init_no_location_types');

function return_acf_message(){
	
	/*if( $_POST['_acf_validation'] )
	{
		echo "<pre>";
		print_r( $_POST );

		echo "<pre>";
		echo do_shortcode( '[acfe_form ID="239"]' );
		exit();
	}*/
	global $acf_form;

	

	if( $_POST['is_acf_ajax'] )
	{
		
		$return = array('new_acf'=> do_shortcode( '[acfe_form ID="'.$acf_form['ID'].'"]' ) );
		echo json_encode( $return );

		exit();	
	}	
}
add_action( 'before_document', 'return_acf_message' );

function disable_acf_alert()
{
	?>
	<script type="text/javascript">
	(function($) {
	  $(document).ready(function() {
	    acf.unload.active = false;
	  });
	})(jQuery);
	</script>
	<?php
}

add_action( 'wp_footer', 'disable_acf_alert' );

function test_acf( $form, $action ){

	global $acf_form;

	$acf_form =  $form;

/*	if( $_POST['is_acf_ajax'] )
	{
		$return = array('new_acf'=>do_shortcode( '[acfe_form name="'.$form['ID'].'"]' ));
		echo json_encode($return);
		exit();
	}*/
}
add_action( 'acfe/form/submit', 'test_acf', 100, 2 );