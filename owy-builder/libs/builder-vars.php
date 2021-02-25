<?php
function owy_builder_register_vars()
{
	wp_vue_add_var('back_admin_url', admin_url() );
	wp_vue_add_var('owy_builder_url', owy_builder_url);
}
add_action( 'vue_vars', 'owy_builder_register_vars' );