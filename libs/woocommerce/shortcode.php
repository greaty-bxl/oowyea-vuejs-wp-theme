<?php

/* Complete content from WC pages */

function owy_woo_obstart_woocommerce_get_template( $php_template )
{
	ob_start();
	woocommerce_get_template( $php_template );
	$template = ob_get_clean();
	return $template;
}

function owy_woo_woocommerce_get_template_with_variables( $woo_template , $variables = array() )
{
	global $post;
	global $product;

	extract( $variables );
	ob_start();
	include( WooCommerce::plugin_path() . '/templates/' .  $woo_template );
	return ob_get_clean();
}

function owy_get_woo_content( $atts ) {

	$atts = shortcode_atts( array(
		'get' => '',
		'exclude' => ''
	), $atts );

	$get = $atts['get'];
	$exclude = $atts['exclude'];
	?>
    <style type="text/css">
    	body{
    		visibility: visible !important;
    	}
    </style>
    <?php

	global $woocommerce_content;
	$wooDom = new DOMDocument();
	$wooDom->loadHTML( '<meta http-equiv="content-type" content="text/html; charset=' . get_bloginfo( 'charset' ) . '">'.$woocommerce_content );

	if( $get != '' )
	{
		$element_get = dom_get_elements_by_selectors($wooDom, $get);
		
		if( $element_get )
		{
			$new_wooDom = new DOMDocument();
		    $cloned = $element_get->cloneNode(TRUE);
		    $new_wooDom->appendChild($new_wooDom->importNode($cloned,TRUE));
		    $wooDom = $new_wooDom;
		}
		else
		{
			return;
		}

	}
	if( $exclude != '' )
	{
		dom_remove_elements_by_selectors($wooDom, $exclude);
	}
	
	$html = preg_replace(array("/^\<\!DOCTYPE.*?<html><body>/si",
                                      "!</body></html>$!si"),
                                "",
                                restore_html_dom_bug( $wooDom->saveHTML() ) );

	return $html;
}
add_shortcode( 'woocommerce_content','owy_get_woo_content' );


/* Part of WC elements */

/* Single Product */

function owy_woo_message( $atts )
{
	return do_shortcode( '[woocommerce_content get=".woocommerce-message"]' );
}
add_shortcode( 'owy_woo_message','owy_woo_message' );

function owy_woo_price( $atts ) {
	
	global $post;
	global $product;
	$product = wc_get_product($post->ID);

	/*echo "<pre>";
	print_r( $product );*/
	
	if( is_object( $product ) )
	{
		ob_start();
		?>
		<script type="text/javascript">
		
		</script>
		<style type="text/css">
		.mtw-woo-price del{
			text-decoration: line-through;
		}
		</style>
		<?php
		?><div class="mtw-woo-price"><?php
		woocommerce_get_template( 'loop/price.php' );
		?></div><?php
		$template = ob_get_clean();
		return apply_filters( 'owy_woo_get_price_filter', $template );
	}
	else
	{
		return apply_filters( 'owy_woo_get_price_filter', '' );
	}
}
add_shortcode( 'price','owy_woo_price' );
add_shortcode( 'owy_woo_price','owy_woo_price' );



function owy_woo_add_to_cart( $atts ) {
	global $post;
	global $product;
	$product = wc_get_product($post->ID);
	/*echo "<pre>";
	print_r( $product->get_type() );
	exit();*/
	$atts = shortcode_atts( array(
		
	), $atts );

	switch ( $product->get_type() ) {
		case 'simple':
			ob_start();
			woocommerce_simple_add_to_cart();
			return ob_get_clean();
			break;
		case 'grouped':
			ob_start();
			woocommerce_grouped_add_to_cart();
			return ob_get_clean();
			break;
		case 'external':
			ob_start();
			woocommerce_external_add_to_cart();
			return ob_get_clean();
			break;
		case 'variable':
			ob_start();
			woocommerce_variable_add_to_cart();
			return ob_get_clean();
			break;
		default:
			ob_start();
			woocommerce_simple_add_to_cart();
			return ob_get_clean();
			break;
	}	
}
add_shortcode( 'owy_woo_add_to_cart','owy_woo_add_to_cart' );

function owy_woo_sale_flash()
{
	ob_start();
	woocommerce_show_product_sale_flash();
	return ob_get_clean();
}
add_shortcode( 'owy_woo_sale_flash', 'owy_woo_sale_flash' );

function owy_woo_wc_print_notices()
{
	global $product;
	global $woocommerce;
	ob_start();
	echo "<pre>";
	$all_notices  = WC()->session;
	print_r( $all_notices );

	echo "</pre>";
	return ob_get_clean();
}
add_shortcode( 'owy_woo_wc_print_notices' , 'owy_woo_wc_print_notices' );


function owy_woo_tabs( $atts ) {

	global $post;
	global $product;

	$atts = shortcode_atts( array(
		
	), $atts );

	ob_start();
	woocommerce_get_template( 'single-product/tabs/tabs.php' );
	$template = ob_get_clean();
	return $template;
}

add_shortcode( 'owy_woo_tabs','owy_woo_tabs' );

function owy_woo_meta()
{
	global $post;
	global $product;

	$atts = shortcode_atts( array(
		
	), $atts );

	ob_start();
	woocommerce_get_template( 'single-product/meta.php' );
	$template = ob_get_clean();
	return $template;
}
add_shortcode( 'owy_woo_meta', 'owy_woo_meta' );

function owy_woo_product_image()
{
	global $post;
	global $product;

	$atts = shortcode_atts( array(
		
	), $atts );

	ob_start();
	woocommerce_get_template( 'single-product/product-image.php' );
	$template = ob_get_clean();
	return $template;
}
add_shortcode( 'owy_woo_product_image', 'owy_woo_product_image' );

function owy_woo_rating()
{
	global $post;
	global $product;

	$atts = shortcode_atts( array(
		
	), $atts );

	ob_start();
	woocommerce_get_template( 'single-product/rating.php' );
	$template = ob_get_clean();
	return $template;
}
add_shortcode( 'owy_woo_rating', 'owy_woo_rating' );

function owy_woo_short_description()
{
	global $post;
	global $product;

	$atts = shortcode_atts( array(
		
	), $atts );

	ob_start();
	woocommerce_get_template( 'single-product/short-description.php' );
	$template = ob_get_clean();
	return $template;
}
add_shortcode( 'owy_woo_short_description', 'owy_woo_short_description' );

function owy_woo_up_sells()
{
	global $post;
	global $product;

	$atts = shortcode_atts( array(
		
	), $atts );

	ob_start();
	woocommerce_get_template( 'single-product/up-sells.php' );
	$template = ob_get_clean();
	return $template;
}
add_shortcode( 'owy_woo_up_sells', 'owy_woo_up_sells' );

function owy_woo_add_to_cart_permalink()
{
	global $post;
	global $product;

	$atts = shortcode_atts( array(
		
	), $atts );

	return do_shortcode( '[add_to_cart_url id="'.$post->ID.'"]' );
}
add_shortcode( 'owy_woo_add_to_cart_permalink', 'owy_woo_add_to_cart_permalink' );


function owy_woo_mini_cart()
{
	global $post;
	global $product;

	$atts = shortcode_atts( array(
		
	), $atts );

	ob_start();
	woocommerce_get_template( 'cart/mini-cart.php' );
	$template = ob_get_clean();
	return $template;
}
add_shortcode( 'owy_woo_mini_cart', 'owy_woo_mini_cart' );

function owy_woo_get_cart_contents_count()
{
	return WC()->cart->get_cart_contents_count();
}
add_shortcode( 'owy_woo_get_cart_contents_count', 'owy_woo_get_cart_contents_count' );

function owy_woo_get_gallery_attachment_as_json( $atts )
{
	global $post;
	global $product;
	$attachment_ids = $product->get_gallery_attachment_ids();

	$image_links = array();
	foreach( $attachment_ids as $attachment_id ) 
	{
	  	$image_links[] = wp_get_attachment_url( $attachment_id );
	}
	if( empty( $image_links ) )
	{
		$image_links[] = wp_get_attachment_url( get_post_thumbnail_id( $post->ID ) );
	}
	ob_start();
	print_r( json_encode( $image_links ) );
	return ob_get_clean();
}
add_shortcode( 'owy_woo_get_gallery_attachment_as_json' , 'owy_woo_get_gallery_attachment_as_json' );