<?php

function create_template_if_not_exist($template_name)
{
	if( is_admin() )
	{
		if( !post_exists($template_name) )
		{
			wp_insert_post(
				array(
					'post_title' => $template_name,
					'post_name' => 'owy-template-'.$template_name,
					'post_type' => 'owy_template',
					'post_status' => 'publish',
					'tax_input' => array(
						'owy_templates_group' => array(
							'Hierarchy'
						)
					),
					'meta_input' => array(
					    'owy_html' => '<h1 class="title">Your template: '.$template_name.'</h1>',
					)
				)
			);
		}
	}
}

function create_page_if_not_exist($page_name, $template, $callback)
{

}

function owy_builder_get_templates()
{
	if( user_can( wp_get_current_user(), 'edit_theme_options' ) )
	{

		$exeptions = array(
			'page' => 'page',
			'post' => 'single',
			'attachment' => 'attachment'
		);

		//init single template
		foreach (get_post_types() as $key => $type) 
		{
			$post_type_object = get_post_type_object($type);

			if( $post_type_object->exclude_from_search == false )
			{
				if( $exeptions[$post_type_object->name] )
				{
					$template_name = $exeptions[$post_type_object->name];
					if( $post_type_object->name == 'post' )
					{
						create_template_if_not_exist( 'archive' );
					}
				}
				else
				{
					$template_name = 'single-'.$post_type_object->name;
					create_template_if_not_exist( 'archive-'.$post_type_object->name );
				}

				create_template_if_not_exist($template_name);
			}	
		}

		global $builder_templates;
		global $builder_templates_list;
		/*$owy_templates = get_posts(array(
			'post_type' => 'owy_template',
			'orderby' => 'menu_order',
			'posts_per_page' => -1
		));*/
		$owy_templates = $builder_templates;

		$owy_templates = apply_filters( 'posts_results', $owy_templates );

		$grouped = array();

		if( !empty( $owy_templates ) )
		{
			foreach ($owy_templates as $key => $template) 
			{
				$group = $template->terms['owy_templates_group'][0]->name;

				$order = $template->menu_order;
				if( !$grouped[ $group ][$order] )
				{
					$grouped[ $group ][$order] = $template;
				}
				else
				{
					$grouped[ $group ][] = $template;
				}
			}	
		}
		
		//update_option( 'owy_builder_css', '' );

		if( is_admin() )
		{
			wp_vue_add_var('owy_builder_css', get_option( 'owy_builder_css', '' ) );
		}
		wp_vue_add_var('owy_templates', $grouped);
		wp_vue_add_var('builder_templates_list', $builder_templates_list);
	}
}
add_action( 'vue_vars', 'owy_builder_get_templates' );

function owy_builder_save_templates()
{
	if( user_can( wp_get_current_user(), 'edit_theme_options' ) )
	{
		$data = $_POST['data'];

		$post = array(
			'ID' =>  $data['post']['ID'],
			'meta_input' => array(
				'owy_html' => $data['owy_html']
			)
		);

		update_option( 'owy_builder_css', $data['css'] );

		$update = wp_update_post( $post, true );

		if( !is_wp_error( $update ) )
		{
			die( json_encode( apply_filters( 'posts_results', get_post( $update ) )[0] ) );
		}
		else
		{
			die( json_encode( $update ) );
		}

		
	}
}
add_action( 'wp_ajax_owy_save_template', 'owy_builder_save_templates' );

function owy_builder_get_css()
{
	?>
	<style type="text/css">
	<?php
	echo str_replace('#wrapper', 'body', get_option( 'owy_builder_css', '' ) );
	?>
	</style>
	<?php
}
add_action( 'wp_head', 'owy_builder_get_css' );

function owy_builder_meta_html_if_not($post_id, $post)
{

	//$html = get_post_meta( $post_id, 'html', true);
	if( $post->post_type == 'owy_template' && $post->post_status != 'auto-draft' )
	{		
		if( strpos($post->post_name, 'owy-template') !== 0 )
		{
			wp_update_post( array(
				'ID' => $post_id,
				'post_name' => 'owy-template-'.$post->post_name
			));
		}

		if( !metadata_exists('post', $post_id, 'owy_html') )
		{
			update_post_meta( $post_id, 'owy_html', '' );
		}
	}
	
}

add_action( 'save_post', 'owy_builder_meta_html_if_not', 100, 2 );