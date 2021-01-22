<?php 

if( function_exists('acf_add_local_field_group') ):

acf_add_local_field_group(array(
	'key' => 'group_600a80295c1bc',
	'title' => 'Last Products Slider',
	'fields' => array(
		array(
			'key' => 'field_600a807bacf1c',
			'label' => 'Select one or more Categories to display in the slider section',
			'name' => 'last_product_slider_categories',
			'type' => 'acfe_taxonomy_terms',
			'instructions' => '',
			'required' => 0,
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
			'return_format' => 'id',
			'layout' => 'vertical',
			'toggle' => 0,
			'save_terms' => 0,
			'load_terms' => 0,
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
		array(
			'key' => 'field_600a80e34b228',
			'label' => 'Max product per category',
			'name' => 'last_product_slider_max_product_per_category',
			'type' => 'number',
			'instructions' => '',
			'required' => 0,
			'conditional_logic' => 0,
			'wrapper' => array(
				'width' => '',
				'class' => '',
				'id' => '',
			),
			'default_value' => 5,
			'placeholder' => '',
			'prepend' => '',
			'append' => '',
			'min' => '',
			'max' => '',
			'step' => '',
		),
	),
	'location' => array(
		array(
			array(
				'param' => 'options_page',
				'operator' => '==',
				'value' => 'shop-settings',
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
	'modified' => 1611302066,
));

endif;