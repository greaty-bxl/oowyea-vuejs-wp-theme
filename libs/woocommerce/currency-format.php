<?php

function owy_vue_get_currency_format()
{	
	// $args =
	$get_currency_format = [];
	$get_currency_format['pos'] = get_option( 'woocommerce_currency_pos' );
	$get_currency_format['symb'] = html_entity_decode( get_woocommerce_currency_symbol() );

	wp_vue_add_var('get_currency_format', $get_currency_format);
}

add_action( 'vue_vars', 'owy_vue_get_currency_format' );