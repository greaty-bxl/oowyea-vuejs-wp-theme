<?php 

if( function_exists('acf_add_local_field_group') ):

acf_add_local_field_group(array(
	'key' => 'group_658550174043e',
	'title' => 'Fichiers cartes',
	'fields' => array(
		array(
			'key' => 'field_65855020e433e',
			'label' => 'carte restaurant',
			'name' => 'carte_restaurant',
			'type' => 'file',
			'instructions' => '',
			'required' => 0,
			'conditional_logic' => 0,
			'wrapper' => array(
				'width' => '',
				'class' => '',
				'id' => '',
			),
			'formula' => '',
			'calculated_format' => '',
			'blank_if_zero' => 0,
			'readonly' => 0,
			'acfe_save_meta' => 0,
			'uploader' => '',
			'return_format' => 'url',
			'min_size' => '',
			'max_size' => '',
			'mime_types' => '',
			'library' => 'all',
		),
		array(
			'key' => 'field_658552b5cc5a3',
			'label' => 'carte banquet',
			'name' => 'carte_banquet',
			'type' => 'file',
			'instructions' => '',
			'required' => 0,
			'conditional_logic' => 0,
			'wrapper' => array(
				'width' => '',
				'class' => '',
				'id' => '',
			),
			'formula' => '',
			'calculated_format' => '',
			'blank_if_zero' => 0,
			'readonly' => 0,
			'acfe_save_meta' => 0,
			'uploader' => '',
			'return_format' => 'url',
			'min_size' => '',
			'max_size' => '',
			'mime_types' => '',
			'library' => 'all',
		),
	),
	'location' => array(
		array(
			array(
				'param' => 'options_page',
				'operator' => '==',
				'value' => 'cartes',
			),
		),
	),
	'menu_order' => 0,
	'position' => 'normal',
	'style' => 'default',
	'label_placement' => 'left',
	'instruction_placement' => 'label',
	'hide_on_screen' => '',
	'active' => true,
	'description' => '',
	'acfe_display_title' => '',
	'acfe_autosync' => array(
		0 => 'php',
		1 => 'json',
	),
	'acfe_form' => 0,
	'acfe_meta' => '',
	'acfe_note' => '',
	'modified' => 1703236376,
));

endif;