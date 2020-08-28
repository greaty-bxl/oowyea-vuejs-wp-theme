<?php 

if( function_exists('acf_add_local_field_group') ):

acf_add_local_field_group(array(
	'key' => 'group_5f440cff014fa',
	'title' => 'Radio Settings',
	'fields' => array(
		array(
			'key' => 'field_5f440d0e7cbfa',
			'label' => 'Active Radio',
			'name' => 'active_radio',
			'type' => 'true_false',
			'instructions' => '',
			'required' => 0,
			'conditional_logic' => 0,
			'wrapper' => array(
				'width' => '',
				'class' => '',
				'id' => '',
			),
			'acfe_permissions' => '',
			'message' => '',
			'default_value' => 1,
			'ui' => 0,
			'ui_on_text' => '',
			'ui_off_text' => '',
		),
		array(
			'key' => 'field_5f440d717cbfb',
			'label' => 'Auto start everywhere',
			'name' => 'auto_start_everywhere',
			'type' => 'true_false',
			'instructions' => '',
			'required' => 0,
			'conditional_logic' => array(
				array(
					array(
						'field' => 'field_5f440d0e7cbfa',
						'operator' => '==',
						'value' => '1',
					),
				),
			),
			'wrapper' => array(
				'width' => '',
				'class' => '',
				'id' => '',
			),
			'acfe_permissions' => '',
			'message' => '',
			'default_value' => 1,
			'ui' => 0,
			'ui_on_text' => '',
			'ui_off_text' => '',
		),
		array(
			'key' => 'field_5f44101ec913c',
			'label' => 'Main radio',
			'name' => 'main_radio',
			'type' => 'relationship',
			'instructions' => 'Use a page with a Radio Template',
			'required' => 1,
			'conditional_logic' => array(
				array(
					array(
						'field' => 'field_5f440d0e7cbfa',
						'operator' => '==',
						'value' => '1',
					),
				),
			),
			'wrapper' => array(
				'width' => '',
				'class' => '',
				'id' => '',
			),
			'acfe_permissions' => '',
			'post_type' => array(
				0 => 'page',
			),
			'taxonomy' => '',
			'filters' => array(
				0 => 'search',
				1 => 'post_type',
				2 => 'taxonomy',
			),
			'elements' => '',
			'min' => 1,
			'max' => 1,
			'return_format' => 'object',
			'acfe_bidirectional' => array(
				'acfe_bidirectional_enabled' => '0',
			),
		),
		array(
			'key' => 'field_5f4411aecff7f',
			'label' => 'Use fixed bottom player',
			'name' => 'use_fixed_bottom_player',
			'type' => 'true_false',
			'instructions' => '',
			'required' => 0,
			'conditional_logic' => 0,
			'wrapper' => array(
				'width' => '',
				'class' => '',
				'id' => '',
			),
			'acfe_permissions' => '',
			'message' => '',
			'default_value' => 1,
			'ui' => 0,
			'ui_on_text' => '',
			'ui_off_text' => '',
		),
	),
	'location' => array(
		array(
			array(
				'param' => 'options_page',
				'operator' => '==',
				'value' => 'radio-settings',
			),
		),
	),
	'menu_order' => 0,
	'position' => 'normal',
	'style' => 'default',
	'label_placement' => 'left',
	'instruction_placement' => 'label',
	'hide_on_screen' => '',
	'active' => 1,
	'description' => '',
	'acfe_display_title' => '',
	'acfe_autosync' => array(
		0 => 'php',
		1 => 'json',
	),
	'acfe_permissions' => '',
	'acfe_form' => 0,
	'acfe_meta' => '',
	'acfe_note' => '',
	'modified' => 1598612102,
));

endif;