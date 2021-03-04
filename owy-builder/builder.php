<?php
if( wp_get_theme()->get( 'Name' ) == 'OOWYEA' )
{

	define('owy_builder_is_vuejs_dev', true);
	define('owy_builder_vuejs_server', 'http://localhost:8081/');

	define('owy_builder_dir', plugin_dir_path(__FILE__) );
	define('owy_builder_url', GREATY_TEMPLATE_URL . '/owy-builder/' );

	define('owy_builder_page_admin', 'oowyea-home');

	define('is_owy_builder', ($_GET['page'] == owy_builder_page_admin) );
	

	include owy_builder_dir . 'libs/register-utils-post-types.php';

	include owy_builder_dir . 'libs/builder-vars.php';
	include owy_builder_dir . 'libs/owy-templates.php';	
	include owy_builder_dir . 'libs/get_wp_data_form.php';
	
	
	

	function get_oowyea_editor()
	{
		?>
		<style type="text/css">
			html.wp-toolbar{
				padding: 0;
			}
			#wpadminbar, #adminmenumain, #wpfooter {
			    display: none;
			}
			#wpcontent {
			    margin-left: 0px;
			    padding-left: 0px;
			}
			#wpbody-content {
			    padding-bottom: 0px;
			}
			#editor{
				position: fixed;
				top: 0px;
				left: 0px;
				width: 100%;
				height: 100vh;
				overflow: hidden;
				background: rgb(1,0,18);
				background: linear-gradient(90deg, rgba(1,0,18,1) 0%, rgba(5,5,31,1) 35%, rgba(8,37,43,1) 100%);

			}
			@media screen and (max-width: 960px) {
				.auto-fold #wpcontent, .auto-fold #wpfooter {
				    margin-left: 0px;
				}	
			}
			@media screen and (max-width: 600px) {
				#wpbody {
					padding-top: 0px;
				}	
			}

			.settings-error{
				display: none;
			}
		</style>
		<div id="editor">
			
		</div>
		<?php
	}

	function owy_builder_enqueue($hook) {
	    if( $hook == 'toplevel_page_' . owy_builder_page_admin )
	    {
	    	wp_enqueue_script( 'jquery' );

	    	wp_enqueue_script( 'jquery-effects-core' );

    		wp_register_script('conditionizr', get_template_directory_uri() . '/js/lib/conditionizr-4.3.0.min.js', array(), '4.3.0'); // Conditionizr
    	    wp_enqueue_script('conditionizr'); // Enqueue it!

    	    wp_register_script('modernizr', get_template_directory_uri() . '/js/lib/modernizr-2.7.1.min.js', array(), '2.7.1'); // Modernizr
    	    wp_enqueue_script('modernizr'); // Enqueue it!
	    	    
	    	wp_register_script('greatythemescripts', get_template_directory_uri() . '/js/scripts.js', array('jquery'), '1.0.0'); // Custom scripts
	    	wp_enqueue_script('greatythemescripts'); // Enqueue it!

	    	//vue js Dev
	    	if( owy_builder_is_vuejs_dev )
	    	{
	    	    // vue server
	    	    wp_enqueue_script('oowyea-editor-app', owy_builder_vuejs_server.'/app.js', array('greatythemescripts'), '1.0', true );
	    	    wp_enqueue_script('oowyea-editor-chunk-vendors', owy_builder_vuejs_server.'/chunk-vendors.js', array('greatythemescripts'), '1.0', true);
	    	}
	    	else
	    	{
	    	    // vue dist
	    	    wp_enqueue_script('oowyea-editor-app', plugin_dir_url(__FILE__) .'/vuejs/dist/app.js', array('greatythemescripts'), '1.0', true );
	    	    wp_enqueue_script('oowyea-editor-chunk-vendors', plugin_dir_url(__FILE__) . '/vuejs/dist/chunk-vendors.js', array('vue-app'), '1.0', true);
	    	}
	    }
	}
	add_action('admin_enqueue_scripts', 'owy_builder_enqueue', 100);

	function oowyea_editor_head() {
	    if( $_GET['page'] == owy_builder_page_admin )
	    {
	    	?>
	    	<script type="text/javascript">
	    		window.ajaxurl = "<?= admin_url('admin-ajax.php'); ?>";
	    		window.wp = {};
	    	</script>
	    	<?php
	    }

	    ?>
	    <style type="text/css">
	    	.toplevel_page_oowyea-home .dashicons-before img{
	    		width: 20px;
	    		opacity: 1 !important;
	    	}
	    </style>
	    <?php
	}
	add_action( 'admin_head', 'oowyea_editor_head', 0 );

	function is_admin_plugin_vue_editor($val)
	{
		if( $_GET['page'] == owy_builder_page_admin )
	    {
	    	return true;
	    }
	    else
	    {
	    	return $val;
	    }
	}
	add_filter( 'is_admin_plugin_vue', 'is_admin_plugin_vue_editor' );

	function remove_default_stylesheets() 
	{
		if( $_GET['page'] == owy_builder_page_admin )
	    {
	    	wp_deregister_style('wp-admin');
	    }
	}
	add_action('admin_init','remove_default_stylesheets');

}