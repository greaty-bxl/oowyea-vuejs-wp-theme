<?php

add_action( 'wp_ajax_nopriv_global_funtion_filter', 'global_funtion_filter');
add_action( 'wp_ajax_global_funtion_filter', 'global_funtion_filter' );

function global_funtion_filter( $cafes = null ) {

	 echo $_POST['form12'];

	 

	    print_r($form1) ;
	   	global $posts;

	   	$args4 = array(
	   		'post_type' => 'product',
	   		'posts_per_page' => -1,
	   		'tax_query' =>  array( 
	   							
	   						array(
	   						'taxonomy'      => 'product_cat',
	   						'field' => 'slug',                    //(string) - Select taxonomy term by ('id' or 'slug')
	   						'terms' => 'cafes', 
	 
	   						)
	   							 
	   				)
	   	);

	   	// print_r($args5) ;

	   	$cafes = get_posts($args4);

	   	$cafes = apply_filters( 'posts_results', $cafes ) ;

	   	wp_vue_add_var('cafes', $cafes);


	        
	          
	   };
	   add_action( 'vue_vars', 'global_funtion_filter' ); // used on load

?>
