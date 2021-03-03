<?php 

if( function_exists('acf_add_local_field_group') ):

acf_add_local_field_group(array(
	'key' => 'group_acf_custom_cat_filter',
	'title' => 'Product Categories and sub-categories',
	'fields' => array(
		array(
			'key' => 'field_603f5d093dc98',
			'label' => 'Product categories',
			'name' => 'product_cat',
			'type' => 'acfe_taxonomy_terms',
			'instructions' => '',
			'required' => 1,
			'conditional_logic' => 0,
			'wrapper' => array(
				'width' => '',
				'class' => '',
				'id' => '',
			),
			'taxonomy' => array(
				0 => 'product_cat',
			),
			'allow_terms' => '',
			'allow_level' => '',
			'field_type' => 'checkbox',
			'default_value' => '',
			'return_format' => 'object',
			'layout' => 'vertical',
			'toggle' => 0,
			'save_terms' => 1,
			'load_terms' => 1,
			'choices' => array(
			),
			'ui' => 0,
			'multiple' => 0,
			'allow_null' => 0,
			'ajax' => 0,
			'placeholder' => '',
			'allow_custom' => 0,
			'other_choice' => 0,
		),
	),
	'location' => array(
		array(
			array(
				'param' => 'post_type',
				'operator' => '==',
				'value' => 'product',
			),
		),
	),
	'menu_order' => 0,
	'position' => 'normal',
	'style' => 'default',
	'label_placement' => 'left',
	'instruction_placement' => 'label',
	'hide_on_screen' => array(
		0 => 'product_cat',
	),
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
	'modified' => 1614765321,
));

endif;