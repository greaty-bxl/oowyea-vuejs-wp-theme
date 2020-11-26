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
			'min'       => '10:00',
			'max'       => '19:30',
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

    $today = date("Y-m-d");
    $tomorrow = date('Y-m-d', strtotime($today . ' +1 day'));

    $now = date("H:i");
    $max_H = "19:30";
    $is_sunday = date('l', strtotime($_POST['pick_date']) ) == "Sunday";

    //If date is before or today
    if( $_POST['pick_date'] <= $today )
    {
        //echo "Date trop petite";
        $errors->add( 'validation', "Veuillez choisir une date à partir de demain." );
    }

    //If hour is more than 19h30 and date tomorrow
    if( $_POST['pick_date'] <= $tomorrow && $now >= $max_H )
    {
        //echo "Trop tard pour demain";
        $errors->add( 'validation', "Si vous commandez après 19h30, votre commande peut être prête pour après demain. Merci de choisir une autre date." );
    }

    //No order on sunday
    if( $is_sunday )
    {
        //echo "Pas de commande le dimanche";
        $errors->add( 'validation', "Nous ne préparons pas de commande le dimanche." );
    }
    
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
function wc_email_calendar( $fields, $sent_to_admin, $order ) {
    $fields['pick_date'] = array(
        'label' => __( "Date d'enlèvement" ),
        'value' => get_post_meta( $order->id, 'pick_date', true ) . ' à ' . get_post_meta( $order->id, 'pick_hour', true ),
    );
    return $fields;
}

add_filter( 'woocommerce_email_order_meta_fields', 'wc_email_calendar', 10, 3 );


/**
 * Thank you order display
 */
 
function wc_thankyou_calendar( $order_id ){ 
	echo "<h2 class='woocommerce-order-details__title'>Date d'enlèvement</h2>";
	echo "<p>" . get_post_meta( $order_id, 'pick_date', true ) . ' à ' . get_post_meta( $order_id, 'pick_hour', true ) . '</p>';
}

add_action( 'woocommerce_thankyou', 'wc_thankyou_calendar', 20 );
add_action( 'woocommerce_view_order', 'wc_thankyou_calendar', 20 );