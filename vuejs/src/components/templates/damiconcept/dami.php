<?php
if( ! ( function_exists( 'wp_get_attachment_by_post_name' ) ) ) {
    function wp_get_attachment_by_post_name( $post_name ) {
            $args           = array(
                'posts_per_page' => 1,
                'post_type'      => 'attachment',
                'name'           => trim( $post_name ),
            );

            $get_attachment = new WP_Query( $args );

            if ( ! $get_attachment || ! isset( $get_attachment->posts, $get_attachment->posts[0] ) ) {
                return false;
            }

            return $get_attachment->posts[0];
    }
}

function get_damiconept_assets(){

	$assets = array(
		'logo', 
		'bg-left',
		'carrelage_damiconcept',
		'demolition_damiconcept',
		'peinture_damiconcept',
		'terrassement_damiconcept',
		'toiture_damiconcept'
	);
	$export = array();
	foreach ($assets as $key => $asset) 
	{
		$export[$asset] = wp_get_attachment_by_post_name($asset)->guid;
	}
	
	wp_vue_add_var('dami_assets', $export);
}

add_action( 'vue_vars', 'get_damiconept_assets' );