<?php
function ajax_is_user_logged()
{
    die( is_user_logged_in() );
}
add_action( 'wp_ajax_is_user_logged', 'ajax_is_user_logged' );
add_action( 'wp_ajax_nopriv_is_user_logged', 'ajax_is_user_logged' );