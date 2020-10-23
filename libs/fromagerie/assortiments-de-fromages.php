<?php

function gtr_get_assortiments_de_fromages( $assortiments_de_fromages_1 = null ) {

	global $posts;

	$args6 = array(
		'post_type' => 'product',
		'posts_per_page' => -1,
		'tax_query' =>  array( 
			'taxonomy' =>  'assortiments-de-fromages',
			'field' => 'slug',  )
	);


    $assortiments_de_fromages = get_posts($args6);

    $assortiments_de_fromages = apply_filters( 'posts_results', $assortiments_de_fromages ) ;

    wp_vue_add_var('assortiments_de_fromages', $assortiments_de_fromages);
       

       
};
add_action( 'wp_head', 'gtr_get_assortiments_de_fromages' ); // used on load
add_action( 'wp', 'gtr_get_assortiments_de_fromages' ); // json page transition



  //     $productByCat = array();
      
  //     foreach ($posts as $key => $post_temp) 
  //     {
  //       $posts[$key]->permalink = get_permalink( $post_temp->ID )
  // ;
  //       $posts[$key]->image_hover = get_field( 'image_hover', $post_temp->ID ); 

  //       $posts[$key]->price = get_post_meta($post_temp->ID);

  //       $terms = wp_get_post_terms( $post_temp->ID, 'product_cat' );

  //       foreach ($terms as $term) 
  //       {
  //         if( !isset( $productByCat[ $term->term_id ]['object'] ) )
  //         {
  //           $productByCat[ $term->term_id ]['object'] = $term;  

  //           $productByCat[ $term->term_id ]['object']->img =  wp_get_attachment_url( get_woocommerce_term_meta( $term->term_id, 'thumbnail_id', true )
  //  );
  //           $productByCat[ $term->term_id ]['object']->link = get_term_link( $term );
        
  //         } 

  //         $productByCat[ $term->term_id ]['posts'][] = $posts[$key];

  //       }
  //     }
