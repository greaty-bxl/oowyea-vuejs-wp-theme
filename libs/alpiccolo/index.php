<?php

include 'reservation.php';

function remove_slash_from_wp_title($title) {
    // Supprimer les "/" du titre pour les onglets du navigateur
    $title = str_replace('/', ' ', $title);

    return $title;
}
add_filter('the_title', 'remove_slash_from_wp_title');


function options_cartes() {

    wp_vue_add_var('carte_restaurant', get_field('carte_restaurant', 'option') );
    wp_vue_add_var('carte_banquet', get_field('carte_banquet', 'option') );
    
}
add_action( 'vue_vars', 'options_cartes' );

