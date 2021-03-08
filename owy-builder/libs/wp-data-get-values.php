<?php

function owy_wp_data_get_example( $template_name, $query_from )
{
	global $owy_wp_data_example_type;
	
	$choices = array();

	if( $query_from == 'current' )
	{
		if( 
			( !is_hierarchical_template( $template_name ) )
			||
			( is_hierarchical_template( $template_name ) && strpos($template_name, 'page') === 0 )
		)
		{
			//queried object post (page)
			$owy_wp_data_example_type = 'post';
			$args = array(
				'post_type' => 'page',
				'posts_per_page' => -1
			);

			if( !is_hierarchical_template( $template_name ) )
			{
				$args['meta_key'] = '_wp_page_template';
				$args['meta_value'] = $template_name;
			}

			$posts = get_posts( $args );

			foreach ($posts as $key => $value) 
			{
				$choices[$value->ID] = $value->post_title;
			}
			
			
		}
	}
	return $choices;
}

function owy_choices_get_group( $values, $excludes, $parent = '')
{
	$choices = array();
	foreach ( $values as $key => $value) 
	{
		if( !in_array($key, $excludes) )
		{
			if( is_array($value) || is_object($value) )
			{
				$choices[$parent . $key] = owy_choices_get_group( $value, $excludes, $parent . sanitize_title( $key ) .'|' );
			}
			else
			{
				$choices[$parent . $key] = $key . ' (' . $value . ')';	
			}
		}
	}
	return $choices;
}

function owy_wp_data_get_value_choices( $template_name, $query_from )
{
	global $owy_wp_data_example_type;
	global $owy_wp_data_example;

	$excludes = array('to_ping', 'pinged', 'ping_status', 'allcaps', 'cap_key');

	$choices = array();
	
	if( $owy_wp_data_example )
	{
		if( $owy_wp_data_example_type == 'post' )
		{
			$post = get_post( $owy_wp_data_example );
			if( !empty( $post ) ) $post = apply_filters( 'posts_results', $post )[0];

			$choices = owy_choices_get_group( $post, $excludes );
			
		}
	}	
	
	return $choices;
}