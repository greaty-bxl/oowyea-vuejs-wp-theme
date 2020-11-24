<?php
/**
 * Add the field to the checkout page
 */
function wc_calendar_hour_field( $checkout ) {

    echo '<div id="my_custom_checkout_field"><h2>' . __("Choisir une date d'enlèvement") . '</h2>';

    woocommerce_form_field( 'pick_date', array(
        'type'          => 'date',
        'required'		=> true,
        'class'         => array('my-field-class form-row-wide'),
        'label'         => __('Quel jour ?'),
        'placeholder'   => __('Enter something'),
        ), $checkout->get_value( 'pick_date' ));

    woocommerce_form_field( 'pick_hour', array(
        'type'          => 'time',
        'required'		=> true,
        'class'         => array('my-field-class form-row-wide'),
        'label'         => __('À quelle heure'),
        'placeholder'   => __('Enter something'),
        'custom_attributes' => array(
			'min'       => '09:00',
			'max'       => '18:00',
		),
    ), $checkout->get_value( 'pick_hour' ));
    
    echo '</div>';

}

add_action( 'woocommerce_after_order_notes', 'wc_calendar_hour_field' );


/**
 * Manage Errors
 */
function wc_validate_calendar_hour_field( $fields, $errors ){

	if( empty( $_POST[ 'pick_date' ] ) )
	{
		$errors->add( 'validation', "Merci de choisir une date d'enlèvement." );
	}

	if( empty( $_POST[ 'pick_hour' ] ) )
	{
		$errors->add( 'validation', "Merci de choisir une heure d'enlèvement." );
	}


 	//$errors->add( 'validation', "date:" . $fields[ 'pick_date' ] );

 	/*echo "<pre>";
 	print_r( $_POST['pick_date'] );
 	exit();*/
    /*if ( preg_match( '/\\d/', $fields[ 'pick_date' ] ) ){
        $errors->add( 'validation', 'Your first or last name contains a number. Really?' );
    }

    if( preg_match( '/\\d/', $fields[ 'pick_hour' ] ) ) {

    }*/
}

add_action( 'woocommerce_after_checkout_validation', 'wc_validate_calendar_hour_field', 10, 2);


/**
 * Update the order meta with field value
 */
function wc_save_calendar( $order_id ) {
    if ( ! empty( $_POST['pick_date'] ) ) {
        update_post_meta( $order_id, 'pick_date', $_POST['pick_date'] );
    }
    if ( ! empty( $_POST['pick_hour'] ) ) {
        update_post_meta( $order_id, 'pick_hour', $_POST['pick_hour'] );
    }
}

add_action( 'woocommerce_checkout_update_order_meta', 'wc_save_calendar' );


/**
 * Display field value on the order edit page
 */
function wc_display_admin_calendar($order){

	echo '<p><strong>Date Souhaitée: </strong>' . get_post_meta( $order->get_id(), 'pick_date', true ) . ' à '. get_post_meta( $order->get_id(), 'pick_hour', true ) .'</p>';
	//echo '<p><strong>Heure: </strong>' .  . '</p>';

}

add_action( 'woocommerce_admin_order_data_after_billing_address', 'wc_display_admin_calendar', 10, 1 );

/**
 * Add a custom field (in an order) to the emails
 */
add_filter( 'woocommerce_email_order_meta_fields', 'custom_woocommerce_email_order_meta_fields', 10, 3 );

function custom_woocommerce_email_order_meta_fields( $fields, $sent_to_admin, $order ) {
    $fields['pick_date'] = array(
        'label' => __( "Date d'enlèvement" ),
        'value' => get_post_meta( $order->id, 'pick_date', true ) . ' à ' . get_post_meta( $order->id, 'pick_hour', true ),
    );
    return $fields;
}