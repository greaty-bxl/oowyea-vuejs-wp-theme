<?php

function degustation_form( $sections )
{	


	foreach ($sections as $key => $section) 
	{
		if( $section->template)
		{
			$sections[$key]->degustation_form = do_shortcode( '[acfe_form name="contact-'.pll_current_language().'"]' );
		}
	}

	return $sections;
}

add_filter( 'sections_loaded', 'degustation_form' );