<?php 

	function gtr_get_switcher_pll() {

	    $switcher = pll_the_languages(
	    	array(
	    		'echo'=>0,
	    		'show_flags'=>0,
	    		'show_names'=>1
	    	)
	    ); 

	    wp_vue_add_var('switcher_lagage', $switcher);

	};
	add_action( 'vue_vars', 'gtr_get_switcher_pll' ); // used on load


?>