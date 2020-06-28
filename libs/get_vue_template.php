<?php

$last_check_hierarchy;

function mtw_check_hierarchy( $template_hierarchy , $singleTemplates ){
		
	global $wp_query, $last_check_hierarchy;

	foreach ($template_hierarchy as $key => $value) 
	{	
		if( !is_int( $key ) && $wp_query->$key )
		{
			if( isset( $value[0] ) )
			{
				foreach ($value as $key2 => $value2) {

					$search =  $value2;

					if( in_array( $search , $singleTemplates ) )
					{
						$last_check_hierarchy = $value2; //array_search( $value2 , $singleTemplates );
					}
				}
			}
			else
			{
				mtw_check_hierarchy( $value, $singleTemplates );
			}
		}
	}
}
function get_vue_template($post = false) 
{

	global $wp_query;
	global $term;

	if( !$post ) global $post;


	@$post_type = $post->post_type;
	if( @$wp_query->query['post_type'] )
	{
		$post_type = $wp_query->query['post_type'] ;
	}
	

	if ( $wp_query->is_tax || $wp_query->is_category || $wp_query->is_tag ) 
	{
		$tax = $wp_query->queried_object->taxonomy;
		$term = $wp_query->queried_object->slug;
		
		$wp_query->is_archive = 1;
	}

	$template_hierarchy = array(
		'is_home' => array(
			0 => 'index'
			),
		'is_posts_page' => array(
			0 => 'index',
			1 => 'archive',
			2 => 'blog'
			),
		'is_page' => array(
			0 => 'index',
			1 => 'page'
			),
		'is_single' => array(
			0 => 'index',
			1 => 'single',
			2 => 'single-' . $post_type,
			3 => 'single-' . $post_type . '-' . @$post->post_name
			),
		'is_archive' => array(
			'is_post_type_archive' => array(
				0 => 'index',
				1 => 'archive',
				2 => 'archive-' . $post_type
				),
			'is_category' => array(
				0 => 'index',
				1 => 'archive',
				2 => 'category',
				3 => 'category-' . $term,
				),
			'is_tax' => array(
				0 => 'index',
				1 => 'archive',
				2 => 'taxonomy',
				3 => 'taxonomy-' . @$tax,
				4 => 'taxonomy-' . @$tax . '-' . $term
				),
			'is_tag' => array(
				0 => 'index',
				1 => 'archive',
				2 => 'tag',
				3 => 'tag-' . $term,
				),
			),
		'is_404' => array(
			0 => '404'
			),
		'is_search' => array(
			0 => 'search'
			),
		'is_author' => array(
			0 => 'author'
			),
		);

	$page_template = get_page_template_slug($post->ID);

	if( empty($page_template) )
	{
		global $vue_hierarchy, $last_check_hierarchy;
		mtw_check_hierarchy( $template_hierarchy , $vue_hierarchy );
		return $last_check_hierarchy;
	}
	else
	{
		return $page_template;
	}


	/*$singleTemplates =  array();
	
	$musesProjectsPages = ttr_get_muse_html_array();
	if( $musesProjectsPages ){
		foreach ( ttr_get_muse_html_array() as $key => $value ) 
		{			
			$explode = explode("/", $key);
			$file = $explode[1];
			$singleTemplates[$key] = $file;	
		}
	}
	if( !$wp_query->is_page )
	{
		mtw_check_hierarchy( $template_hierarchy , $singleTemplates );
	}
	if( basename( $template ) == "woocommerce.php" && $pass2 == false )
	{
		return $template;
	}	
	if( $isMuseTheme !== false || !is_null($museUrl) )
	{
		if ( is_null( $museUrl ) ) $museUrl = $template;
		return TTR_MW_PLUGIN_DIR . 'default-template-5.php';
	}
	else
	{
		return $template;
	}*/
}