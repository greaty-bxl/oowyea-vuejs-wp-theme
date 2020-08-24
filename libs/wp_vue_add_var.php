<?php
/* Init classics variables */

function init_classics_wp_variables()
{
	if(is_admin()) {return;}
	global $wp, $wp_query;
	wp_vue_add_var('wp', $wp );
	wp_vue_add_var('wp_query', $wp_query );
	wp_vue_add_var('title', html_entity_decode( get_the_title() ) );
	wp_vue_add_var('options', wp_load_alloptions() );
	wp_vue_add_var('upload_baseurl', wp_get_upload_dir()['baseurl'] );
}

add_action( 'wp_head', 'init_classics_wp_variables' );
add_action( 'wp', 'init_classics_wp_variables' );


/* Add wordpress php variables as javascript vue variable or add in json return */

$is_wp_head = false;

function isJson($string) 
{
	json_decode($string);
	return (json_last_error() == JSON_ERROR_NONE);
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
		?>
		<script type="text/javascript">window.wp['<?= $key ?>'] = '<?= $value ?>'</script>
		<?php
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

