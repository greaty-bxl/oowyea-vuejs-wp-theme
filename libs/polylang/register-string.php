<?php

function find_string_and_register()
{
	if( !function_exists('pll_register_string') || $_GET['page'] !== 'mlang_strings' )
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
		            /*preg_match('#templates\\\(.*)\\\#', $path, $matches, PREG_OFFSET_CAPTURE);
		            if( @$matches[1][0] )
		            {
		                $__dir = $matches[1][0];
		                $title_dir = ucwords( $__dir . ' - ' );
		            }
		            else
		            {
		                $title_dir = '';
		            }*/

		            $basename = substr(basename( $path ), 0, -4);

		            $content = file_get_contents( $path );

		            $content = str_replace(array("\n", "\r"), "", $content);

		            //echo htmlentities( $content );

		            preg_match_all("/pll__\(\s*\[?\s*[\'|\"]((?:(?![a-zA-Z_$]\(\s*\[?\s*[\'|\"]|[a-zA-Z_-]\=[\'|\"]).)*)([\'|\"])\s*(\]?)\s*\,?\s*(?:(true|false)?)\s*\)/i", $content, $matches);

		            /*echo "<hr>";
		            echo $value;		            
		            echo "<pre>";
		            print_r( $matches );*/
		            

		            if( count( $matches[0] ) ){

		            	foreach ($matches[1] as $key => $string) 
		            	{
		            		//$multiline = true;
		            		if( $matches[3][$key] == ']' )
		            		{
		        				
		            			/*echo "is array: ";
		            			echo "<br>";*/
		            			$quote = $matches[2][$key];
		            			$string_with_quotes = 'array(' . $quote . $string . $quote . ')';
		            			/*echo "<br>";
		            			echo $string_with_quotes;*/
		            			$json = str_replace('\\'.$quote.'', htmlspecialchars($quote, ENT_QUOTES), $string_with_quotes);


		            			eval( '$array_eval =' .  $string_with_quotes . ';' );
		            			/*echo "<pre>";*/
/*		            			print_r( $array_eval );*/

		            			foreach ($array_eval as $_value) 
		            			{
		            				$_value = stripslashes( $_value );

		            				pll_register_string($_value, $_value, 'vuejs ' . $basename, true);
		            				$option_keys[$_value] = $_value;
		            			}

		            			/*echo "<br>";
		            			preg_match_all("/".$quote."[a-zA-Z]/", $string_with_quotes, $matches2);

		            			echo "<pre>";
		            			print_r( $matches2 );*/
		            		}
		            		else
		            		{
		            			$string = html_entity_decode( stripslashes( $string ) );

		            			pll_register_string($string, $string, 'vuejs ' . $basename, true);
		            			$option_keys[$string] = $string;	
		            		}
		            		
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

	//exit();

	update_option( 'owy_pll_strings', $option_keys, true );
}

add_action( 'admin_init', 'find_string_and_register' );