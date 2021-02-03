<?php

function cart_global()
{	
	global $woocommerce;
	// $args =
	$cart = do_shortcode( '[woocommerce_cart]' );
	$cart_page = wc_get_cart_url();
	$cart_object = WC()->cart;
	$cart_quantity = $woocommerce->cart->cart_contents_count;
	/*echo "<pre>";
	print_r(WC()->cart);

	exit();*/

	wp_vue_add_var('cart', $cart);
	wp_vue_add_var('cart_page', $cart_page);
	wp_vue_add_var('cart_object', $cart_object);
	wp_vue_add_var('cart_quantity', $cart_quantity);
}

add_action( 'vue_vars', 'cart_global' );