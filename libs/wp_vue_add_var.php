<?php
/* Init classics variables */

function unserialize_in_array( $array )
{
	foreach ($array as $key => $value) {
		if( is_serialized( $value ) )
		{
			$array[ $key ] = unserialize( $value );			
		}
		elseif ( is_array( $value ) ) 
		{
			$array[ $key ] = unserialize_in_array( $value );
		}
	}

	return $array;
}

function init_classics_wp_variables()
{
	if(is_admin()) {return;}
	global $wp, $wp_query;
	wp_vue_add_var('wp', $wp );
	wp_vue_add_var('wp_query', $wp_query );
	wp_vue_add_var('title', html_entity_decode( get_the_title() ) );
	wp_vue_add_var('body_class', implode(" ", get_body_class() ) );

	$options =  unserialize_in_array( wp_load_alloptions() );
	wp_vue_add_var('options', $options );
<<<<<<< Updated upstream
=======
	// wp_vue_add_var('front_page', pll_home_url() );
>>>>>>> Stashed changes
	wp_vue_add_var('upload_baseurl', wp_get_upload_dir()['baseurl'] );
}
add_action( 'vue_vars', 'init_classics_wp_variables' );

//execute one time the action, or in wp or in head
function init_add_action_vue_vars_hooks($val)
{
	if( !is_admin() )
	{
		do_action( 'vue_vars' );	
	}
}

if( isset( $_GET['add_to_json'] ) )
{	
	add_action( 'wp', 'init_add_action_vue_vars_hooks' );
}
else
{
	add_action( 'wp_head', 'init_add_action_vue_vars_hooks' );	
}

/* Add wordpress php variables as javascript vue variable or add in json return */

$is_wp_head = false;

function isJson($string) 
{
	json_decode($string);
	return (json_last_error() == JSON_ERROR_NONE);
}

function isHTML($string){
 return $string != strip_tags($string) ? true:false;
}

function wp_vue_add_var($key, $value)
{
	global $is_wp_head;

	if( $is_wp_head && ( is_array( $value ) || is_object( $value ) ) )
	{
		$value = json_encode($value);
	}

	if( $is_wp_head && isJson($value) )
	{
		?>
		<script type="text/javascript">window.wp['<?= $key ?>'] = <?= $value ?></script>
		<?php
	}
	elseif ($is_wp_head) 
	{
		if( isHTML( $value ) )
		{
			//$value = array( $value );
			$value = json_encode( $value );
			?>
			<script type="text/javascript">window.wp['<?= $key ?>'] = <?= $value ?></script>
			<?php
		}
		else
		{


			?>
			<script type="text/javascript">window.wp['<?= $key ?>'] = '<?= $value ?>'</script>
			<?php

		}
	}
	elseif ( isset( $_GET['add_to_json'] ) )
	{
		global $wp_vue_json;
		$wp_vue_json[$key] = $value;
	}
}

function is_wp_head_true()
{
	global $is_wp_head;
	$is_wp_head = true;
}

add_action( 'wp_head', 'is_wp_head_true', 0 );