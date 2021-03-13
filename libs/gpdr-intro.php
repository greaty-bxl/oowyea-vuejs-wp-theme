<?php
//setcookie( 'owy_gpdr_accepted', 'test' );

function check_gpdr_intro_accepted()
{
	$gpdr_accepted = false;

	if( $_COOKIE["owy_gpdr_accepted"] == 'true' )
	{
		$gpdr_accepted = true;
	}
	wp_vue_add_var( 'gpdr_accepted', $gpdr_accepted );
}
add_action( 'vue_vars', 'check_gpdr_intro_accepted', 0 );


function check_google_accepted()
{
	$Google_accepted = false;

	// echo('<pre>');
	// print_r($_COOKIE["owy_gpdr_accepted"]);
	// echo('<pre>');
	// exit();

	// if( $_COOKIE["owy_gpdr_accepted"] == 'true' )
	if( $_POST['data']['google'] == 'true' )
		
	{
		?>
		<script type="text/javascript">
			
		</script>
		<?php
		$Google_accepted = true;
	}
	wp_vue_add_var( 'gpdr_accepted', $gpdr_accepted );
}
add_action( 'wp_head', 'check_google_accepted', 0 );


function gpdr_update_state()
{
	$_POST['data']['gpdr'];
	$_POST['data']['google'];

	if( $_POST['data']['gpdr'] == 'true' )
	{
		setcookie('owy_gpdr_accepted', 'true', time()+62208000, '/', $_SERVER['HTTP_HOST']);
	}
	die( json_encode( $_COOKIE ) );
}

add_action( 'wp_ajax_gpdr_update_state', 'gpdr_update_state' );
add_action( 'wp_ajax_nopriv_gpdr_update_state', 'gpdr_update_state' );