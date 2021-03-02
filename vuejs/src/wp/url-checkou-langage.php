<?php

add_filter( 'woocommerce_get_checkout_url', 'custom_checkout_url', 30 );
function custom_checkout_url( $checkout_page ) {

    $checkout_id = wc_get_page_id( 'checkout' );

    $checkout_page = pll_get_post(intval($checkout_id));

    $checkout_url = get_permalink( $checkout_page );

    $checkout_page = $checkout_url;

    return $checkout_page;
}

