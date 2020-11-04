<?php

function wc_empty_cart_redirect_url() {
	return get_site_url();
}
add_filter( 'woocommerce_return_to_shop_redirect', 'wc_empty_cart_redirect_url' );