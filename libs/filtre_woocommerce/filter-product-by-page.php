<?php

	function global_funtion_filter( $query ) {

	
		if ( $query->query['post_type'] == 'product' && !is_admin()  && !$query->is_single  && is_page('boutique')  )
		{	

			if ( $_GET['filter-taxonomy'] ) 
			{	
		
				$taxonomies = $_GET;

				$category = $_GET['product_cat'];

			}
			else if ( $_POST['filter-taxonomy'] )
			{
				$taxonomies = $_POST;

			}
			else{ 
			}

			unset($taxonomies['filter-taxonomy']);
			unset($taxonomies['product_cat']);

		
			$arrayjquery = array();

		
			
			// $query->set( 'tax_query', array(

			// 	'relation' => 'AND',

			//            array(
			//                'taxonomy'     => 'product_cat',
			//                'field' => 'slug',
			//                'terms' =>  $category,
			//                'include_children' => true, 
			//                'operator' => 'IN' 
			//                ),

			//             ) );

			// foreach ($taxonomies as $key => $value) {

			// 	    $query->set( 'tax_query', array(

				    
   //  					'relation' => 'AND',

   //  			           array(

   //  			               'taxonomy'     => 'product_cat',
   //  			               'field' => 'slug',
   //  			               'terms' =>  $category,
   //  			               'include_children' => true, 
   //  			               'operator' => 'IN' 

   //  			               ),

			//                array(

			//                    'taxonomy'  => $key,
			//                    'field' => 'slug',
			//                    'terms' =>   $value,
			//                    'include_children' => true, 
			//                    'operator' => 'IN' 	

			//                    )

			// 	     ) 
			// 	);


			// 	};

		}
				
	};

	add_action( 'pre_get_posts', 'global_funtion_filter' ); // used on load


	function gtr_get_les_cafes( $query  ) {


		if ( is_page('boutique')) {

				$posts_1 = get_posts( array('post_type' => 'product'));

				$args = array();
														
				$products = wc_get_products( $args );

				$generale = apply_filters( 'posts_results', $posts_1 ) ;

				wp_vue_add_var('generale', $generale);

			}

	};
	add_action( 'wp', 'gtr_get_les_cafes' );
	
	add_action( 'vue_vars', 'gtr_get_les_cafes' ); 

	?>
