<?php

function return_woocommerce_message(){
	if( $_POST['is_woocommerce_ajax'] )
	{
		global $woocommerce;
		
		$return = array();
		$return['cart_quantity'] = $woocommerce->cart->cart_contents_count;
		$return['notices'] = wc_get_notices();

		echo json_encode($return);
		WC()->session->set('wc_notices', array() );
		exit();	
	}	
}
add_action( 'before_document', 'return_woocommerce_message' );