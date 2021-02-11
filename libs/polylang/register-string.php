<?php

function find_string_and_register()
{
	if( !function_exists('pll_register_string') && $_GET['page'] !== 'mlang_strings' )
	{
		return;
	}
	global $option_keys;
	$option_keys = array();

	function recursive_scan($dir)
	{
		global $option_keys;
		$files = scandir( $dir );

		foreach ($files as $key => $value) {

		    $path = realpath($dir . DIRECTORY_SEPARATOR . $value);

		    if (!is_dir($path)) {
		        $info = pathinfo( $path );
		        if( $info['extension'] == 'vue' || $info['extension'] == 'js' )
		        {
		            preg_match('#templates\\\(.*)\\\#', $path, $matches, PREG_OFFSET_CAPTURE);
		            if( @$matches[1][0] )
		            {
		                $__dir = $matches[1][0];
		                $title_dir = ucwords( $__dir . ' - ' );
		            }
		            else
		            {
		                $title_dir = '';
		            }

		            $basename = substr(basename( $path ), 0, -4);

		            $content = file_get_contents( $path );

		            preg_match_all('/pll__\([\'|\"]((?:(?!pll__\().)*)[\'|\"]\)/i', $content, $matches);

		            if( count( $matches[0] ) ){

		            	foreach ($matches[1] as $key => $string) 
		            	{
		            		//$multiline = true;
		            		pll_register_string($string, $string, 'vuejs ' . $basename, true);
		            		$option_keys[$string] = $string;
		            	}      	
		            }



		        }            
		    } 
		    else if ($value != "." && $value != "..") 
		    {
		        recursive_scan($path);
		    }
		}
	}

	recursive_scan( GREATY_TEMPLATE_PATH.'/vuejs/src/' );

	update_option( 'owy_pll_strings', $option_keys, true );
}

add_action( 'admin_init', 'find_string_and_register' );