<?php

function owy_polylang_vars(){

	wp_vue_add_var('current_language', pll_current_language() );
	wp_vue_add_var('languages_except_current', get_other_languages_except_current() );

}

add_action( 'vue_vars', 'owy_polylang_vars', 1, 1000 );


function get_other_languages_except_current() {
    // Vérifiez si la fonction pll_the_languages est disponible
    if (function_exists('pll_the_languages')) {
        // Obtenez toutes les langues
        $languages = pll_the_languages(array('raw' => 1));

        // Obtenez la langue courante
        $current_lang = pll_current_language();

        // Préparez un tableau pour les langues autres que la langue courante
        $other_languages = array();

        foreach ($languages as $lang) {
            if ($lang['slug'] != $current_lang) {
                // Ajoutez la langue au tableau si elle n'est pas la langue courante
                $other_languages[] = $lang;
            }
        }

        return $other_languages;
    }

    return array(); // Retournez un tableau vide si Polylang n'est pas actif
}
