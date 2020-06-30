<?php

//add_filter( 'the_content', 'image_lazy_prepare' );
 
function image_lazy_prepare( $content ) {
 
   	//echo $content;
	$html = new htmlify();
	$html->init($content);

	$html->find('img')->each( function($index, $el){
		$sizes = explode(', ', $el->getAttribute('srcset') );

		foreach ($sizes as $key => $size) 
		{
			$sizes[$key] = explode(' ', $size);
		}
		
		$sizes = array_reverse( $sizes );
		/*echo "<pre>";
		print_r( $sizes[1][0] );*/
		
		$el->setAttribute('data-srcset', $el->getAttribute('srcset') );
		$el->setAttribute('src', $sizes[1][0] );
		$el->removeAttribute('srcset');
	});

	$content = $html->saveHTML();
	
   	//print_r( $html->saveHTML() );
    //exit();

    return $content;
}