<?php

function wp_redirect_filter($status, $location) {
    if( 
    	( $_GET['add_to_json'] && $_GET['_wpnonce'] ) 
    	/*&& 
    	( $_GET['remove_item'] || $_GET['undo_item'] ) */
    )
	{
		global $wp_query;

		//echo "<pre>";
		if( isset( $wp_query->query['customer-logout'] ) )
		{
			wp_logout();
			$return = array(
				'reload' => 1
			);
			echo json_encode($return);
			exit();
		}

		/*$url_obj = parse_url( urldecode( $location ) );		

		global $wp;

		if( $url_obj['query'] && strpos($url_obj['query'], 'action=logout') >= 0 )
		{
			$return = array(
				'reload' => 1
			);

			//echo "logout";
			wp_logout();

			echo json_encode($return);
			exit();
		}*/
		//echo $location;

		wp();

		do_action( 'before_document');	

		exit();
	}
	elseif( 
		$_POST['woocommerce-login-nonce'] 
		|| 
		$_POST['woocommerce-register-nonce'] 
		|| 
		$_POST['woocommerce-lost-password-nonce'] 
		||
    	$_POST['save-account-details-nonce']
    	||
    	$_POST['woocommerce-edit-address-nonce']
    	||
    	$_POST['woocommerce-cart-nonce']
	)
	{
		setcookie("owy_last_post_method", json_encode( $_POST ), time()+3600, '/');
		setcookie("owy_force_json", 1, time()+3600, '/');
	}

	/*if( $_POST['save-account-details-nonce'] )
	{
		echo "test";
		exit();
	}*/
	return $status;
}
add_filter( 'wp_redirect_status', 'wp_redirect_filter', 10, 2);