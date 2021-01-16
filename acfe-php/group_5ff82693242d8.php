<?php 

if( function_exists('acf_add_local_field_group') ):

acf_add_local_field_group(array(
	'key' => 'group_5ff82693242d8',
	'title' => 'Shop filters',
	'fields' => array(
		array(
			'key' => 'field_5ff833371685e',
			'label' => 'Paged main category',
			'name' => 'paged_product_category',
			'type' => 'true_false',
			'instructions' => 'It will display only child taxonomies if checked and in the product cat is used as page.',
			'required' => 0,
			'conditional_logic' => 0,
			'wrapper' => array(
				'width' => '',
				'class' => '',
				'id' => '',
			),
			'message' => '',
			'default_value' => 0,
			'ui' => 0,
			'ui_on_text' => '',
			'ui_off_text' => '',
		),
		array(
			'key' => 'field_5ff8269b1e5ee',
			'label' => 'Include in filtering',
			'name' => 'include_in_filtering',
			'type' => 'repeater',
			'instructions' => '',
			'required' => 0,
			'conditional_logic' => 0,
			'wrapper' => array(
				'width' => '',
				'class' => '',
				'id' => '',
			),
			'acfe_repeater_stylised_button' => 0,
			'collapsed' => '',
			'min' => 0,
			'max' => 0,
			'layout' => 'table',
			'button_label' => 'Add filter',
			'sub_fields' => array(
				array(
					'key' => 'field_5ff828d34c709',
					'label' => 'Filter',
					'name' => 'tax_filter_in',
					'type' => 'acfe_taxonomies',
					'instructions' => '',
					'required' => 0,
					'conditional_logic' => 0,
					'wrapper' => array(
						'width' => '',
						'class' => '',
						'id' => '',
					),
					'taxonomy' => '',
					'field_type' => 'select',
					'default_value' => '',
					'return_format' => 'name',
					'allow_null' => 0,
					'multiple' => 0,
					'ui' => 0,
					'choices' => array(
					),
					'ajax' => 0,
					'placeholder' => '',
					'search_placeholder' => '',
					'layout' => '',
					'toggle' => 0,
					'allow_custom' => 0,
				),
			),
		),
	),
	'location' => array(
		array(
			array(
				'param' => 'options_page',
				'operator' => '==',
				'value' => 'greaty-theme-general-settings',
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
	'acfe_form' => 0,
	'acfe_meta' => '',
	'acfe_note' => '',
	'modified' => 1610620691,
));

endif;