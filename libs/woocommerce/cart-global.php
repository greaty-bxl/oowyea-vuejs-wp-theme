<?php

function cart_global()
{	
	// $args =
	$cart = do_shortcode( '[woocommerce_cart]' );
	$cart_page = wc_get_cart_url();
	//$cart_object = WC()->cart;

	/*echo "<pre>";
	print_r(WC()->cart);

	exit();*/

	wp_vue_add_var('cart', $cart);
	wp_vue_add_var('cart_page', $cart_page);
	wp_vue_add_var('cart_object', $cart_object);
}

add_action( 'vue_vars', 'cart_global' );