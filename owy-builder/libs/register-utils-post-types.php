<?php
// Template post type function
function owy_template_posttype() {

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

    register_taxonomy( 'owy_templates_group', 'owy_template', array(
        'label' => 'Group'
    ) );

    /*register_post_type( 'owy_wp_data',
        array(
            'labels' => array(
                'name' => __( 'oowYea WP Data' ),
                'singular_name' => __( 'WP Data' )
            ),
            'public' => false,
            'has_archive' => false,
            'rewrite' => false,
            'show_in_rest' => false,
            'show_ui' => true,
            'show_in_menu' => true,
        )
    );*/

    register_post_type( 'owy_query',
        array(
            'labels' => array(
                'name' => __( 'oowYea Query' ),
                'singular_name' => __( 'Custom Query' )
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