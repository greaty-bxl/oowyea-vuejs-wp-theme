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
		$errors->add( 'validation', "Merci de choisir une date de retrait en magasin." );
	}

	if( empty( $_POST[ 'pick_hour' ] ) )
	{
		$errors->add( 'validation', "Merci de choisir une heure de retrait en magasin." );
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
        $errors->add( 'validation', "Veuillez choisir une date à partir du lendemain." );
    }

    //If hour is more than 19h30 and date tomorrow
    if( $_POST['pick_date'] <= $tomorrow && $now >= $max_H )
    {
        //echo "Trop tard pour demain";
        $errors->add( 'validation', "Si vous commandez après 19h30, votre commande peut être prête pour sur le lendemain. Merci de choisir une autre date." );
    }

    //No order on sunday
    if( $is_sunday )
    {
        //echo "Pas de commande le dimanche";
        $errors->add( 'validation', "Nous ne préparons pas de commande le dimanche car nous sommes fermé." );
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
/*function wc_email_calendar( $fields, $sent_to_admin, $order ) {
    $fields['pick_date'] = array(
        'label' => "<span style='font-size: 18px;'>" . __( "Date d'enlèvement" ) . "</span>",
        'value' => "<span style='font-size: 18px;'>" . get_post_meta( $order->id, 'pick_date', true ) . ' à ' . get_post_meta( $order->id, 'pick_hour', true ) . "<br/><br/></span>",
    );
    return $fields;
}

add_filter( 'woocommerce_email_order_meta_fields', 'wc_email_calendar', 10, 3 );*/


function add_tracking_number_to_order_email( $order, $sent_to_admin, $plain_text, $email )
{
    //if( empty( $has_discount ) && empty( $po_number ) ) return; // Exit if empty
    $base_color = get_option( 'woocommerce_email_base_color' );
    // CSS style
    $styles = '<style>
        table.pick_date{width: 100%; font-family: \'Helvetica Neue\', Helvetica, Roboto, Arial, sans-serif;
            color: '.$base_color.'; border: 1px solid #e4e4e4; margin-bottom:8px;}
        table.pick_date th, table.tracking-info td{text-align: left; border-top-width: 4px;
            color: '.$base_color.'; border: 1px solid #e4e4e4; padding: 12px; width:50%;}
        table.pick_date td{text-align: left; border-top-width: 4px; color: '.$base_color.'; border: 1px solid #e4e4e4; padding: 12px; width:50%;}
    </style>';

    // HTML Structure
    $html_output = '<h2>'.__( "Date d'enlèvement" ).'</h2>
    <table class="pick_date" cellspacing="0" cellpadding="6">';

    
    $html_output .= '<tr class="sales-rep">
            <td>' . get_post_meta( $order->id, 'pick_date', true ) . ' à ' . get_post_meta( $order->id, 'pick_hour', true ) . '</td>
        </tr>';
    

    $html_output .= '</table><br>'; // HTML (end)

    // Output styles CSS + HTML
    echo $styles . $html_output;
}
add_action( 'woocommerce_email_after_order_table', 'add_tracking_number_to_order_email', 10, 4 );

/**
 * Thank you order display
 */
 
function wc_thankyou_calendar( $order_id ){ 
	echo "<h2 class='woocommerce-order-details__title'>Date d'enlèvement</h2>";
	echo "<p>" . get_post_meta( $order_id, 'pick_date', true ) . ' à ' . get_post_meta( $order_id, 'pick_hour', true ) . '</p>';
}

add_action( 'woocommerce_thankyou', 'wc_thankyou_calendar', 20 );
add_action( 'woocommerce_view_order', 'wc_thankyou_calendar', 20 );