<?php

function owy_polylang_vars(){

	wp_vue_add_var('current_language', pll_current_language() );

}

add_action( 'vue_vars', 'owy_polylang_vars' );