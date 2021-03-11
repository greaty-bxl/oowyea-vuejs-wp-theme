<?php

    function next_post_or_precedent(){
    	global $post;
    	
    	$prev = get_adjacent_post(false, '', true);
    	$next = get_adjacent_post(false, '', false);

    	if($prev){
    	    $url = get_permalink($prev->ID);            
    	    // $next_html = '<a href="' . $url . '" title="' . $prev->post_title . '">' .pll__("Suivant"). '</a>';
    	    $next_html = $url;
    	}

    	if($next) {
    	    $url = get_permalink($next->ID);            
    	    // $prev_html = '<a href="' . $url . '" title="' . $next->post_title . '">' .pll__("Précédent"). '</a>';
    	    $prev_html = $url;
    	}


    	wp_vue_add_var('single_prev', $prev_html);

    	wp_vue_add_var('single_next', $next_html);

    }
    add_action( 'vue_vars', 'next_post_or_precedent' );
?>