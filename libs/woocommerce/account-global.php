<?php

function owy_account_template($template){
	if( is_user_logged_in() )
	{
		$user = get_user_by('id', get_current_user_id());
	}
	else
	{
		$user = 0;
	}

	ob_start();
		wc_get_template( $template, array(
			'current_user' => $user,
			'user' => $user
		));
	return ob_get_clean();
}

function owy_get_address($type){
	
	global $user_id;

	$load_address = sanitize_key( $type );

	$address = WC()->countries->get_address_fields( '', $load_address . '_' );

	foreach ($address as $key => $value) 
	{		
		$address[$key]['value'] = get_user_meta( $user_id, $key, true );
		/*echo "<pre>";
		print_r($address[$key]);*/
		$address[$key]['autocomplete'] = '';
	}

	//exit();

	ob_start();
		wc_get_template( 'myaccount/form-edit-address.php', array(
			'address' => $address,
			'load_address' => $load_address,
		));
	return ob_get_clean();
}

function owy_get_order($id){
	ob_start();
		wc_get_template( 'order/order-details.php', array(
			'order_id' => $id,
		));
	return ob_get_clean();
}

function owy_woo_account()
{
	global $wp_query;
	global $user;
	global $user_id;

	$user = wp_get_current_user();
	$user_id = get_current_user_id();

	$myaccount = [];

	$myaccount['is_user_logged_in'] = is_user_logged_in();

	$myaccount['page_url'] = get_permalink( get_option('woocommerce_myaccount_page_id') );

	$myaccount['user'] = $user;

	$myaccount['login'] = owy_account_template('myaccount/form-login.php');

	$myaccount['lost_password'] = owy_account_template('myaccount/form-lost-password.php');

	$myaccount['edit_address_billing'] = owy_get_address('billing');
	$myaccount['edit_address_delivery'] = owy_get_address('shipping');

	

	$navigation = [];
	foreach (wc_get_account_menu_items() as $key => $value) {

		$exclude = 0;

		$url = esc_url( wc_get_account_endpoint_url( $key ) );

		if( strpos($url, '_wpnonce') <= 0 )
		{
			//$html = file_get_contents($url.'?get_wc_content=1');
			switch ($key) {
				case 'dashboard':
					$html = owy_account_template('myaccount/dashboard.php');
					break;
				case 'orders':
					$html = owy_account_template('myaccount/my-orders.php');
					break;
				case 'downloads':
					$html = owy_account_template('myaccount/my-downloads.php');
					break;
				case 'edit-address':
					$html = owy_account_template('myaccount/my-address.php');
					break;
				case 'edit-account':
					$html = owy_account_template('myaccount/form-edit-account.php');
					break;
				default:
					$html = '';
					break;
			}
		}
		else
		{
			if( $key == 'customer-logout' ){
				$exclude = 1;
				$myaccount['logout'] = array( 
					'title' => $value,
					'url' => esc_url( wc_get_account_endpoint_url( $key ) )
				);
			}
			$html = '';
		}

		if( !$exclude ) 
		{
			$navigation[$key] = array(
				'title' => $value,
				'url' => esc_url( wc_get_account_endpoint_url( $key ) ),
				'html' => $html
			);
		}
	}

	$myaccount['navigation'] = $navigation;

	wp_vue_add_var('woo_account', $myaccount);
}

add_action( 'vue_vars', 'owy_woo_account' );


function woo_account_get_order($data)
{
	die(owy_get_order(228));
}
add_action( 'wp_ajax_woo_account_get_order', 'woo_account_get_order' );
//add_action( 'wp_ajax_nopriv_woo_account_get_order', 'woo_account_get_order' );