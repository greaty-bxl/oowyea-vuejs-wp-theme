<?php


function santos_register_mail_string()
{
	/*global $woocommerce;
	$woocommerce->cart->add_to_cart( 1256 );*/
	$registers = array(
		"Hi %s,",
		"Just to let you know &mdash; we\'ve received your order #%s, and it is now being processed:",
	);

	foreach ($registers as $value) {
		pll_register_string($value, $value, 'wc-mails', true);
	}
}
add_action( 'wp_loaded', 'santos_register_mail_string' );

function santos_woocommerce_mail($args)
{
	
	$doc = phpQuery::newDocument( $args['message'] );


	$doc['.shipped_via']->parent()->prepend('<span>'.pll__('livraison').':</span>');
	$shipped_via = $doc['.shipped_via']->remove();
	
	$args['message'] = $doc->html();
	
	echo $args['message'];
	exit();

	return $args;
}

add_filter( 'wp_mail', 'santos_woocommerce_mail' );
