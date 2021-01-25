<?php
function owy_get_all_strings_translation()
{
	if( !function_exists('pll__') )
	{
		return;
	}

	$owy_pll_strings = get_option( 'owy_pll_strings', array() );

	foreach ($owy_pll_strings as $key => $string) 
	{
		$owy_pll_strings[$key] = pll__($string);
	}

	wp_vue_add_var('pll_strings', $owy_pll_strings);
}
add_action( 'vue_vars', 'owy_get_all_strings_translation' );