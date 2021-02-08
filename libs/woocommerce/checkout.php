<?php

function checkout()
{	
	global $woocommerce;

	$checkout = do_shortcode( '[woocommerce_checkout]' );

	wp_vue_add_var('checkout', $checkout);

}

add_action( 'vue_vars', 'checkout' );