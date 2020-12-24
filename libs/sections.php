<?php

function get_sections()
{
	global $wp_query;
	global $post;
	global $sections;

	if( is_admin() )
	{
		return;
	}

	$sections = array();
	$page_for_posts = get_option( 'page_for_posts' );

	do_action( 'before_sections' );

	if( is_page() || ( $wp_query->is_posts_page && $page_for_posts ) )
	{
		if( $wp_query->is_posts_page && $page_for_posts )
		{
			$post = get_page( $page_for_posts );
		}

		if( $post->post_parent == 0 )
		{
			$sections[0] = $post;
		}
		else
		{
			$sections[0] = get_page( $post->post_parent );
		}

		$sections[0]->template = get_vue_template( $sections[0] );

		$children = get_pages( array( 'child_of' => $sections[0]->ID, 'sort_column' => 'menu_order' ) );
		
		$wp_query->is_page = true;

		if( $children )
		{
			foreach ($children as $key => $child) 
			{
				$children[$key]->template = get_vue_template( $child );
			}	
			
			$sections = array_merge($sections, $children);			
		}

		foreach ($sections as $key => $section) 
		{

			$sections[$key]->permalink = get_permalink( $section->ID );
			$sections[$key]->metas = get_post_meta( $section->ID );

			if( $section->ID == $page_for_posts )
			{
				$clonePost = $post;
				$post = null;

				$wp_query->is_page = false;
				$wp_query->is_posts_page = true;
				
				$sections[$key] = (object) array_merge( (array) $sections[$key], (array) get_page( $page_for_posts ) ) ;
				$sections[$key]->template = get_vue_template();
				//$sections[$key]->children = get_posts() ;
				$sections[$key]->children = apply_filters( 'posts_results', get_posts() ) ;

				$wp_query->is_page = true;
				$wp_query->is_posts_page = false;
				$post = $clonePost;
			}
		}

		$sections = apply_filters( 'posts_results', $sections ) ;
	}
	else
	{
		$sections[0] = (object) 'section';

		if( is_object($wp_query->post) )
		{
			$sections[0] = apply_filters( 'posts_results', $wp_query->post )[0];	
			$sections[0]->post_content = apply_filters( 'the_content', $sections[0]->post_content );
		}
		$sections[0]->template = get_vue_template();


		if( count( $wp_query->posts ) > 1 )
		{
			$sections[0]->children = apply_filters( 'posts_results', $wp_query->posts );
		}
		
		if( $wp_query->is_404 )
		{
			$actual_link = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http") . "://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";

			$sections[0]->permalink = $actual_link;
			$sections[0]->post_title = '404';
			$sections[0]->template = '404' ;
		}
		
	}

	//apply content filter
	foreach ($sections as $key => $section) 
	{
		$section = apply_filters( 'section', $section );
		
		if( $section->post_content )
		{
			$sections[$key]->post_content = apply_filters( 'the_content', $section->post_content );
		}
	}

	if( $wp_query->queried_object->post_content )
	{
		$wp_query->queried_object->post_content = apply_filters( 'the_content', $wp_query->queried_object->post_content );
	}

	// echo "<pre>";
	// print_r( $sections );
	// exit();
	
	wp_vue_add_var('sections', $sections);
}

/*add_action( 'wp_head', 'get_sections', 0);
add_action( 'wp', 'get_sections', 0);*/

add_action( 'vue_vars', 'get_sections', 0 );