<?php

function owy_register_filter_easy_admin()
{
	global $owy_hide_on_screen;

	if( get_field('paged_product_category', 'option') )
	{
		$owy_hide_on_screen = array();
		$owy_hide_on_screen[] = 'product_cat';
		$fields = array();

		/* Main Product cat */

		$main_uid = 'field_'.uniqid();

		$fields[] = array(
			'key' => $main_uid,
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
		);

		$relations = owy_get_filter_relations();

		foreach ($relations as $cat_key => $cat_term) 
		{
			if( is_array( $cat_term->relations ) )
			{
				foreach ($cat_term->relations as $rl_key => $rl_tax) {

					$owy_hide_on_screen[] = $rl_tax['slug'];

					$fields[] = array(
						'key' => 'field_'.uniqid(),
						'label' => $rl_tax['label'],
						'name' => 'owy_field_'.$rl_tax['slug'],
						'type' => 'acfe_taxonomy_terms',
						'instructions' => '',
						'required' => 0,
						'conditional_logic' => array(
							array(
								array(
									'field' => $main_uid,
									'operator' => '==',
									'value' => strval($cat_term->term_id),
								),
							),
						),
						'wrapper' => array(
							'width' => '',
							'class' => '',
							'id' => '',
						),
						'taxonomy' => array(
							0 => $rl_tax['slug'],
						),
						'allow_terms' => '',
						'allow_level' => '',
						'field_type' => 'checkbox',
						'default_value' => '',
						'return_format' => 'id',
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
					);
				}
			}
		}

		acf_add_local_field_group(array(
			'key' => 'group_acf_custom_cat_filter',
			'title' => 'Product Categories and sub-categories',
			'fields' => $fields,
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
			/*'acfe_display_title' => '',
			'acfe_autosync' => array(
				0 => 'php',
				1 => 'json',
			),
			'acfe_form' => 0,
			'acfe_meta' => '',
			'acfe_note' => '',*/
		));
	}
}

add_action('wp_loaded', 'owy_register_filter_easy_admin');



function owy_filter_easy_admin_remove_side($data) {
	global $owy_hide_on_screen;
	
	if( get_field('paged_product_category', 'option') )
	{
		?>
		<script>
			jQuery(document).ready(function($) {
				var hide_on_screen = <?php echo json_encode($owy_hide_on_screen); ?>;
				$.each(hide_on_screen, function(index, val) {
					$('#'+val+'div').hide()
				});

				$(document).on('change', '#acf-group_acf_custom_cat_filter input', function(event) {
					//event.preventDefault();
					var value = $(this).val()
					var is_checked = $(this).prop('checked')
					var find_check_term = $('#side-sortables input[value="'+value+'"]')
					//console.log('change', value, is_checked, find_check_term );
					find_check_term.prop('checked', is_checked)

				});
				
			});
			
		</script>
		<?php
	}
}
add_action('admin_footer', 'owy_filter_easy_admin_remove_side');