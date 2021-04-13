<?php

function owy_replace_be_flags_fr_nl()
{
	?>
	<script type="text/javascript">
		jQuery(document).ready(function($) {
			$('td.language_fr img, th.column-language_fr img').replaceWith('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600" width="16" height="16"><rect width="900" height="600" fill="#ED2939"/><rect width="600" height="600" fill="#fff"/><rect width="300" height="600" fill="#002395"/></svg>')

			$('td.language_nl img, th.column-language_nl img').replaceWith('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 9 6"><rect fill="#21468B"	width="9" height="6"/><rect fill="#FFF" width="9" height="4"/><rect fill="#AE1C28"	width="9" height="2"/></svg>')

			$('#wp-admin-bar-fr img, #wp-admin-bar-nl img').remove()
		});
	</script>
	<?php
}

add_action( 'admin_footer', 'owy_replace_be_flags_fr_nl' );