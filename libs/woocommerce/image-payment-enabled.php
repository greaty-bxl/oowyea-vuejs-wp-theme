<?php
function gtr_get_image_payement()
{

	$wc_gateways      = new WC_Payment_Gateways();
	$payment_gateways = $wc_gateways->get_available_payment_gateways();

	$icons = [];

		foreach( $payment_gateways as $gateway_id => $gateway ){

			$instructions = property_exists( $gateway , 'instructions' ) ? $gateway->instructions : '';
			$icon = $gateway->get_icon();
			$icons = $icon;
		}

	 	wp_vue_add_var('payment_methods_images', $icons);

}

add_action( 'vue_vars', 'gtr_get_image_payement' );
