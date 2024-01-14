<?php

include 'reservation.php';

function remove_slash_from_wp_title($title) {
    // Supprimer les "/" du titre pour les onglets du navigateur
    $title = str_replace('/', ' ', $title);

    return $title;
}
add_filter('the_title', 'remove_slash_from_wp_title');
