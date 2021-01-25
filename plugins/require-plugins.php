<?php

function grt_theme_register_required_plugins() {
	/*
	 * Array of plugin arrays. Required keys are name and slug.
	 * If the source is NOT from the .org repo, then source is also required.
	 */
	$plugins = array(
		// This is an example of how to include a plugin from the WordPress Plugin Repository.
		array(
			'name'      => 'ACF Extended',
			'slug'      => 'acf-extended',
			'required'  => false,
		),

		array(
			'name'		=> 'Calculated fields for ACF',
			'slug'		=> 'calculated-fields-for-acf',
			'required'	=> false,
		),

		array(
			'name'      => 'Custom Post Type UI',
			'slug'      => 'custom-post-type-ui',
			'required'  => false,
		),

		array(
			'name'      => 'Newsletter',
			'slug'      => 'newsletter',
			'required'  => false,
		),

		array(
			'name'      => 'WooCommerce',
			'slug'      => 'woocommerce',
			'required'  => false,
		),

		array(
			'name'      => 'Polylang',
			'slug'      => 'polylang',
			'required'  => false,
		),

		
	);

	/*
	 * Array of configuration settings. Amend each line as needed.
	 *
	 * TGMPA will start providing localized text strings soon. If you already have translations of our standard
	 * strings available, please help us make TGMPA even better by giving us access to these translations or by
	 * sending in a pull-request with .po file(s) with the translations.
	 *
	 * Only uncomment the strings in the config array if you want to customize the strings.
	 */
	$config = array(
		'id'           => 'tgmpa',                 // Unique ID for hashing notices for multiple instances of TGMPA.
		'default_path' => '',                      // Default absolute path to bundled plugins.
		'menu'         => 'tgmpa-install-plugins', // Menu slug.
		'parent_slug'  => 'plugins.php',            // Parent menu slug.
		'capability'   => 'edit_theme_options',    // Capability needed to view plugin install page, should be a capability associated with the parent menu used.
		'has_notices'  => true,                    // Show admin notices or not.
		'dismissable'  => true,                    // If false, a user cannot dismiss the nag message.
		'dismiss_msg'  => '',                      // If 'dismissable' is false, this message will be output at top of nag.
		'is_automatic' => false,                   // Automatically activate plugins after installation or not.
		'message'      => '',                      // Message to output right before the plugins table.
		'strings'      => array(
			'page_title'                      => 'Install Required Plugins', 'theme-slug',
			'menu_title'                      => 'Required Plugins', 'theme-slug',
		)
	);

	tgmpa( $plugins, $config );

}

add_action( 'tgmpa_register', 'grt_theme_register_required_plugins' );