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
}
add_action( 'init', 'owy_template_posttype' );