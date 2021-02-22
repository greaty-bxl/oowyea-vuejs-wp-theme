<?php
// Template post type function
function owy_template_posttype() {

    register_post_type( 'owy_project',
        array(
            'labels' => array(
                'name' => __( 'oowYea Projects' ),
                'singular_name' => __( 'Project' )
            ),
            'public' => false,
            'has_archive' => false,
            'rewrite' => false,
            'show_in_rest' => false,
            'show_ui' => true,
            'show_in_menu' => true,
        )
    );

    register_post_type( 'owy_template',
        array(
            'labels' => array(
                'name' => __( 'oowYea Templates' ),
                'singular_name' => __( 'Template' )
            ),
            'public' => false,
            'has_archive' => false,
            'rewrite' => false,
            'show_in_rest' => false,
            'show_ui' => true,
            'show_in_menu' => true,
        )
    );
}
add_action( 'init', 'owy_template_posttype' );


function owy_save_template()
{

}
add_action( 'wp_ajax_owy_save_template', 'owy_save_template' );

function owy_editor_get_templates()
{
	if( is_admin() && $_GET['page'] == owy_editor_page_admin )
	{
        $projects = get_posts( array(
            'post_type' => 'owy_project',
            'posts_per_page' => -1
        ) );

        wp_vue_add_var('owy_editor_projects', $projects );
        
		/*$templates = get_posts( array(
			'post_type' => 'owy_template',
			'posts_per_page' => -1
		) );

		wp_vue_add_var('custom_templates', $templates );*/
	}	
}
add_action( 'vue_vars', 'owy_editor_get_templates' );