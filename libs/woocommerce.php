<?php

include 'woocommerce/remove-scripts.php';
include 'woocommerce/hierarchy.php';
include 'woocommerce/shortcode.php';
include 'woocommerce/return-to-shop.php';
include 'woocommerce/ajax_forms.php';
include 'woocommerce/products.php';
include 'woocommerce/product.php';
include 'woocommerce/product-contact-us.php';
include 'woocommerce/taxonomies-filter.php';
include 'woocommerce/terms_taxonomies_combos.php';
include 'woocommerce/last-products-slider.php';
include 'woocommerce/calendar.php';
include 'woocommerce/image-payment-enabled.php';
include 'woocommerce/count.php';

function owy_resolve_issue_header()
{
	?>
	<style type="text/css">
		.woocommerce-embed-page #wpbody .woocommerce-layout, .woocommerce-embed-page .woocommerce-layout__notice-list-hide+.wrap{
			padding-top: 70px !important;
		}
	</style>
	<?php
}

add_action( 'admin_head', 'owy_resolve_issue_header' );