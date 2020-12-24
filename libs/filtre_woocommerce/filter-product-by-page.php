<?php

// add_action( 'wp_ajax_nopriv_global_funtion_filter', 'global_funtion_filter');
// add_action( 'wp_ajax_global_funtion_filter', 'global_funtion_filter' );


	function global_funtion_filter( $query ) {

		if ( $query->query['post_type'] == 'product' && !is_admin()  && !$query->is_single  )
		{	

			$taxonomies = array();

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
		
			$query->set( 'posts_per_page', -1);
			$query->set( 'tax_query', array(
				'relation' => 'AND',
			           array(
			               'taxonomy'     => 'product_cat',
			               'field' => 'slug',
			               'terms' =>  array('cafes'),
			               'include_children' => true, 
			               'operator' => 'IN' 
			               ),
			           array(
			               'taxonomy'     => 'intensite',
			               'field' => 'slug',
			               'terms' =>   'moyen',
			               'include_children' => true, 
			               'operator' => 'IN' 
			               )
			            ) );
		}
				
	};

	add_action( 'pre_get_posts', 'global_funtion_filter' ); // used on load


	function gtr_get_les_cafes( $query  ) {


		if ( is_page('boutique')) {

			$posts_1 = get_posts( array('post_type' => 'product'));

			$args = array();
													
			$products = wc_get_products( $args );

			echo "<pre>";
			print_r($posts_1);
			echo "</pre>";
			exit();

			}

	};
	add_action( 'wp', 'gtr_get_les_cafes' );

	?>
