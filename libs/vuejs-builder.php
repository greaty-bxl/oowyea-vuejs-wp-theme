<?php 

function greatytheme_admin_style($hook) {

	if( $hook == 'oowyea_page_vue-builder' )
	{	        
	    wp_register_script('greatythemescripts', get_template_directory_uri() . '/js/scripts.js', array('jquery'), '1.0.0'); // Custom scripts
	    wp_enqueue_script('greatythemescripts'); // Enqueue it!

	    //vue js Dev
	    if( is_vuejs_dev )
	    {
	        wp_enqueue_media();
	        // vue server
	        wp_enqueue_script('vuebuilder-app', vuejs_builder_server.'/app.js', array('greatythemescripts'), '1.0', true );
	        wp_enqueue_script('vuebuilder-chunk-vendors', vuejs_builder_server.'/chunk-vendors.js', array('greatythemescripts'), '1.0', true);
	    }
	    
	    // vue dist
	    if( !is_vuejs_dev )
	    {
	        // vue dist
	        wp_enqueue_script('vuebuilder-app', get_template_directory_uri() .'/vuejs-builder/dist/app.js', array('greatythemescripts'), '1.0', true );
	        wp_enqueue_script('vuebuilder-chunk-vendors', get_template_directory_uri() . '/vuejs-builder/dist/chunk-vendors.js', array('vuebuilder-app'), '1.0', true);

	        wp_register_style('vuebuilder-chunk-vendors-css', get_template_directory_uri() . '/vuejs-builder/dist/chunk-vendors.css', array(), '1.0', 'all');
	        wp_enqueue_style('vuebuilder-chunk-vendors-css'); // Enqueue it!

	        wp_register_style('vuebuilder-css', get_template_directory_uri() . '/vuejs-builder/dist/app.css', array(), '1.0', 'all');
	        wp_enqueue_style('vuebuilder-css'); // Enqueue it!
	    }
	}
}
add_action( 'admin_enqueue_scripts', 'greatytheme_admin_style' );

function get_vuejs_builder()
{
	?>
	<div id="app"></div>
	<?php
}