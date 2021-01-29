<?php


function vue_return_json()
{
	if ( isset( $_GET['add_to_json'] )/* && !$_GET['_wpnonce']*/ ) 
	{
		global $wp_vue_json;
		/*echo "<pre>";
		print_r( json_encode( $wp_vue_json['radio_show']->metas['playlist_array'] ) );
		echo "</pre>";

		$prefix = '';
		echo '[';
		foreach($wp_vue_json as $row) {
		  echo $prefix, json_encode($row);
		  $prefix = ',';
		}
		echo ']';*/

		echo json_encode( $wp_vue_json );
		exit();
	}
}
add_action( 'before_document','vue_return_json', 9999 );