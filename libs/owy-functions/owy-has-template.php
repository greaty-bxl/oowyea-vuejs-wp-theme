<?php

function owy_has_template( $search )
{
	global $sections;

	foreach ($sections as $key => $section) 
	{
		if( $section->template == $search )
		{
			return true;
		}
	}

	return false;
}