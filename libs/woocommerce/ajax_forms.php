<?php
//setcookie("owy_force_json", 0, time()-1, '/');
function return_woocommerce_message(){
	

	if( $_POST['is_woocommerce_ajax'] )
	{
		global $woocommerce;
		$return = array();

		if( $_POST['action'] == 'save_account_details' )
		{
			
		}	
		
		$return['cart_quantity'] = $woocommerce->cart->cart_contents_count;
		$return['notices'] = wc_get_notices();

		$return['cart'] = do_shortcode( '[woocommerce_cart]' );

		echo json_encode($return);
		WC()->session->set('wc_notices', array() );

		exit();	
	}	
}
add_action( 'before_document', 'return_woocommerce_message' );


