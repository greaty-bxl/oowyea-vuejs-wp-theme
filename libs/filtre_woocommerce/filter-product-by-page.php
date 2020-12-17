<?php

add_action( 'wp_ajax_nopriv_global_funtion_filter', 'global_funtion_filter');
add_action( 'wp_ajax_global_funtion_filter', 'global_funtion_filter' );

function global_funtion_filter() {

	    exit();
  }

?>
