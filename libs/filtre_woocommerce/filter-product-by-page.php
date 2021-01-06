<?php

	function global_funtion_filter( $query ) {

		if ( $query->query['post_type'] == 'product' && !is_admin()  && !$query->is_single && $_GET['filter-taxonomy'] )
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
			else
			{ 
				return;
			}

			unset( $taxonomies['filter-taxonomy'] );			

			if ( count( $taxonomies ) > 0 ) 
			{
				$tax_query = array( 'relation' => 'AND' );

				foreach ($taxonomies as $name => $terms) 
				{
					if( !is_array( $terms ) )
					{
						$terms = array( $terms ); 
					}

					$tax_query[] = array(
						'taxonomy'     => $name,
						'field' => 'slug',
						'terms' =>  $terms,
						'include_children' => true, 
						'operator' => 'IN'
					);
				}

				$query->set( 'tax_query', $tax_query );
			}
		}
				
	};

	add_action( 'pre_get_posts', 'global_funtion_filter' ); // used on load

?>