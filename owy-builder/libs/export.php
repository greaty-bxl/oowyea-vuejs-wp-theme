<?php

function owy_export_as_theme(/*$field, $post_id*/){
	
	if( current_user_can( 'edit_theme_options' ) )
	{


		echo "<pre>";
		print_r( get_bloginfo() );
		echo "</pre>";

		$path = GREATY_TEMPLATE_PATH . "/owy-builder/export/".get_current_blog_id();

		if( !file_exists($path) )
		{
			if (!mkdir($path, 0777, true)) 
			{
			    //wp_send_json_success( array('error' => 'Can\'t create the directory') );
			}
		}

		$zip = new ZipArchive();
		$filename = $path . "/export.zip";

		if( file_exists($filename) )
		{
			unlink($filename);
		}

		if ($zip->open($filename, ZipArchive::CREATE)!==TRUE) {
			//wp_send_json_success( "Impossible d'ouvrir le fichier <$filename>\n" );
		}



		$zip->addFromString( time(), '' );
		$zip->close();

		echo $filename;

	    //wp_send_json_success( 'test' );

	    exit();
	}
    
}
//add_action('acfe/fields/button/name=theme_export', 'owy_export_as_theme', 10, 2);

//add_action( 'wp_loaded', 'owy_export_as_theme' );