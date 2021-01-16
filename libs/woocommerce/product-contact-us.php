<?php

/* custom product type */

function owy_register_contact_us_product() {

  class WC_Product_Contact_us extends WC_Product {
			
    public function __construct( $product ) {
        $this->product_type = 'contact_us';
		parent::__construct( $product );
    }
  }
}
add_action( 'init', 'owy_register_contact_us_product' );


function owy_add_contact_us_product( $types ){
    $types[ 'contact_us' ] = __( 'Contact us product', 'greatytheme' );

    return $types;	
}

add_filter( 'product_type_selector', 'owy_add_contact_us_product' );


function owy_contact_us_product_tab( $original_tabs ) {
	
	global $product;

    $new_tab['contact_us'] = array(
      'label' => __( 'Contact us form', 'greatytheme' ),
      'target' => 'contact_us_product',
      'class'  => 'show_if_contact_us',
     );

    $insert_at_position = 2; // This can be changed
	$tabs = array_slice( $original_tabs, 0, $insert_at_position, true ); // First part of original tabs
	$tabs = array_merge( $tabs, $new_tab ); // Add new
	$tabs = array_merge( $tabs, array_slice( $original_tabs, $insert_at_position, null, true ) ); // Glue the second part of original

    return $tabs;
}
add_filter( 'woocommerce_product_data_tabs', 'owy_contact_us_product_tab' );


function owy_contact_us_product_tab_content() {

	?><div id='contact_us_product' class='panel woocommerce_options_panel'><?php
	?><div class='options_group'><?php
		
		$select_forms = array();

		$acfs = get_posts( array(
			'post_type' => 'acfe-form',
			'posts_per_page' => -1,
		));

		foreach ($acfs as $acf) 
		{
			$select_forms[$acf->ID] = $acf->post_title;
		}

		woocommerce_wp_select(
			array(
			'id' => 'contact_us_product_forms',
			'label' => __( 'Select a Form', 'greatytheme' ),
			'placeholder' => '',
			'desc_tip' => false,
			'description' => '',
			'options' => $select_forms,
			'type' => 'select'
			)
		);
	?></div>
	</div><?php
}

add_action( 'woocommerce_product_data_panels', 'owy_contact_us_product_tab_content' );


function owy_save_contact_us_product( $post_id ){
		
    $contact_us_product_forms = $_POST['contact_us_product_forms'];
		
    if( !empty( $contact_us_product_forms ) ) 
    { 
		update_post_meta( $post_id, 'contact_us_product_forms', esc_attr( $contact_us_product_forms ) );
    }
}
add_action( 'woocommerce_process_product_meta', 'owy_save_contact_us_product' );

/* ACF new location */

/*function my_acf_init_location_types() {

    class My_Location extends ACF_Location {
        function initialize() {
            $this->name = 'contact_us_product';
            $this->label = __( 'WooCommerce - Contact us product' );
            $this->category = 'Front End';
        }
    }
    acf_register_location_type( 'My_Location' );
}

add_action('acf/init', 'my_acf_init_location_types');*/