<?php

global $owy_has_created_template;
$owy_has_created_template = false;

function owy_template_get_default_html($type)
{
	$html = '<p>example</p>';

	if( in_array($type, array('hierarchy', 'page', 'master') ) ) 
	{
		ob_start();
		?>
		
		<h1>Heading</h1>
		<p>content</p>
		
		<?php
		$html = ob_get_clean(); 
	}
	elseif( $type == 'header' )
	{
		ob_start();
		?>
		
		<span>logo</span>
		
		<?php
		$html = ob_get_clean();
	}
	elseif( $type == 'footer' )
	{
		ob_start();
		?>
		
		<p>footer content</p>
		
		<?php
		$html = ob_get_clean();
	}

	return $html;
}

function create_template_if_not_exist($template_name, $type = 'hierarchy', $group = null)
{
	global $owy_has_created_template;

	if( is_admin() )
	{
		if( !post_exists($template_name) )
		{
			if( $group == null ) $group = $type;

			$owy_template = array(
					'post_title' => ucfirst( $template_name ),
					'post_name' => 'owy-template-'. sanitize_title( $template_name ),
					'post_type' => 'owy_template',
					'post_status' => 'publish',
					'tax_input' => array(
						'owy_templates_group' => array(
							ucfirst( $group )
						)
					),
					'meta_input' => array(
					    'owy_html' => owy_template_get_default_html($type),
					    'type' => $type
					)
				);

			if( in_array( $type, array('page','hierarchy') ) ){
				$owy_template['meta_input']['header'] = 'header';
				$owy_template['meta_input']['footer'] = 'footer';
			}

			wp_insert_post(
				$owy_template
			);

			$owy_has_created_template = true;
		}
	}
}

function create_page_if_not_exist($page_name, $template, $callback)
{

}

function owy_builder_get_templates()
{
	global $owy_has_created_template;

	if( user_can( wp_get_current_user(), 'edit_theme_options' ) )
	{

		$exeptions = array(
			'page' => 'page',
			'post' => 'single',
			'attachment' => 'attachment'
		);

		create_template_if_not_exist('footer', 'footer', 'Reusables');
		create_template_if_not_exist('header', 'header', 'Reusables');		
		create_template_if_not_exist('Block example', 'block', 'Reusables');

		create_template_if_not_exist('index');
		create_template_if_not_exist('author');

		create_template_if_not_exist('Sample Page', 'page', 'Pages');

		$posts_type = array();
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
						$posts_type[] = 'post';
					}
				}
				else
				{
					$template_name = 'single-'.$post_type_object->name;
					create_template_if_not_exist( 'archive-'.$post_type_object->name );
					$posts_type[] = $post_type_object->name;
				}

				create_template_if_not_exist($template_name);
			}	
		}		

		$tax_exeptions = array('post_format');

		foreach (get_taxonomies() as $key => $value) {

			$name = $key;
			$tax_object = get_taxonomy( $value );
			$object_types = $tax_object->object_type;

			if( !in_array($name, $tax_exeptions) )
			{
				$find = array();

				foreach ($posts_type as $key => $post_type) 
				{
					if( in_array($post_type, $object_types) )
					{
						$find[] = $post_type;
					}
				}

				if( count( $find ) > 0 )
				{
					if( $tax_object->rewrite['slug'] )
					{
						$name = $tax_object->rewrite['slug'];
					}

					create_template_if_not_exist($name);
				}
			}
		}

		if( $owy_has_created_template )
		{
			$actual_link = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http") . "://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";

			?>
			<script type="text/javascript">
				window.location = "<?php echo $actual_link ?>"
			</script>
			<?php
			exit();
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

		/* Group owy templates by terms */

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


		$groups = get_terms( 'owy_templates_group', array(
		    'hide_empty' => false,
		) );

		$terms_group_order = array();

		foreach ($groups as $key => $group) {
			if( $grouped[ $group->name ] ) 
			{
				$terms_group_order[$group->name] = $grouped[ $group->name ];
			}
			else
			{
				$terms_group_order[$group->name] = array();
			}

		}

		/* Add builtin templates */	
		$owy_vue_templates = array();
		global $vue_hierarchy_builtin, $vue_templates_builtin;

		$owy_vue_templates[ 'Vue.js Hierarchy' ] = array();

		foreach ($vue_hierarchy_builtin as $key => $name) {
			$owy_vue_templates[ 'Vue.js Hierarchy' ][] = array(
				'post_title' => $name,
				'metas' => array(
					'type' => 'vue'
				)
			);
		}

		$owy_vue_templates[ 'Vue.js Custom templates' ] = array();

		foreach ($vue_templates_builtin as $key => $name) {
			$owy_vue_templates[ 'Vue.js Custom templates' ][] = array(
				'post_title' => $name,
				'metas' => array(
					'type' => 'vue'
				)
			);
		}
		//update_option( 'owy_builder_css', '' );

		if( is_admin() )
		{
			wp_vue_add_var('owy_builder_css', get_option( 'owy_builder_css', '' ) );
		}
		wp_vue_add_var('owy_templates', $terms_group_order);
		wp_vue_add_var('owy_vue_templates', $owy_vue_templates);
		wp_vue_add_var('builder_templates_list', $builder_templates_list);
	}
}
add_action( 'vue_vars', 'owy_builder_get_templates' );

function owy_builder_save_templates()
{
	if( user_can( wp_get_current_user(), 'edit_theme_options' ) )
	{
		$data = $_POST['data'];
		$post_id = $data['post']['ID'];

		$post = array(
			'ID' =>  $data['post']['ID'],
			'meta_input' => array(
				'owy_html' => $data['owy_html']
			)
		);

		$hf_els = array('header', 'footer');
		$hf_res = array();
		foreach ($hf_els as $hf_el) 
		{
			$to_up = array();

			if( $data[$hf_el.'_html'] )
			{
				$header = get_page_by_path( 'owy-template-' . $data['post']['metas'][$hf_el], OBJECT, 'owy_template' );

				$to_up = array(
					'ID' => $header->ID,
					'meta_input' => array(
						'owy_html' => $data[$hf_el.'_html']
					)
				);

				$hf_res[$hf_el] = wp_update_post( $to_up, true );
			}
		}
		


		update_option( 'owy_builder_css', $data['css'] );

		$update = wp_update_post( $post, true );

		if( !is_wp_error( $update ) )
		{
			die( json_encode( array( 
				'data' => $data,
				'post' => $post,
				'update' => $update,
				'hf_res' => $hf_res
			) ) );
		}
		else
		{
			die( json_encode( array(
				'error' => "can't save template"
			) ) );
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