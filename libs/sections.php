<?php

function get_sections()
{
	global $wp_query;
	global $post;

	/*echo "<pre>";
	print_r( $wp_query );
	exit();*/

	$sections = array();
	$page_for_posts = get_option( 'page_for_posts' );

	if( is_page() || ( $wp_query->is_posts_page && $page_for_posts ) )
	{
		if( $wp_query->is_posts_page && $page_for_posts )
		{
			$post = get_page( $page_for_posts );
			//exit();
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
				$sections[$key]->children = get_posts();

				if( $sections[$key]->children )
				{
					foreach ($sections[$key]->children as $key2 => $child) {
						$sections[$key]->children[$key2]->permalink = get_permalink( $child->ID );
						$sections[$key]->children[$key2]->metas = get_post_meta( $child->ID );	
					}
				}

				$wp_query->is_page = true;
				$wp_query->is_posts_page = false;
				$post = $clonePost;
			}
		}
	}
	else
	{
		$sections[0] = (object) 'section';		
		$sections[0]->template = get_vue_template();
	}


	//apply content filter
	foreach ($sections as $key => $value) 
	{
		if( $value->post_content )
		{
			$sections[$key]->post_content = apply_filters( 'the_content', $value->post_content );
		}
	}

	if( $wp_query->queried_object->post_content )
	{
		$wp_query->queried_object->post_content = apply_filters( 'the_content', $wp_query->queried_object->post_content );
	}


	/*echo "<pre>";
	print_r(  );
	exit();*/
	wp_vue_add_var('sections', $sections);
}

add_action( 'wp_head', 'get_sections' );
add_action( 'wp', 'get_sections' );