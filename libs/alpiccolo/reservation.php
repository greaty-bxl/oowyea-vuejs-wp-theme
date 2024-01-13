<?php
function init_reservation_vars() {

	wp_vue_add_var('reservation_confirmation', 0 );

	$args = array(
	    'meta_key'   => '_wp_page_template',
	    'meta_value' => 'LaReservationConfirmation', // Remplacez par le nom de votre fichier de template
	    'sort_order' => 'ASC',
	    'sort_column' => 'post_date',
	    'number' => 1
	);

	$pages = get_pages($args);

	if (!empty($pages)) {
	    // Utiliser la première page
	    $page = $pages[0];
	    // Votre code pour afficher le contenu de la page ici
	    wp_vue_add_var('reservation_confirmation', $page );
	}

	
}
add_action( 'vue_vars', 'init_reservation_vars' );

function submit_reservation()
{
	if (isset($_POST['data'])) {
        $formData = $_POST['data'];

        // Créer un nouveau post de type 'reservation-list'
        $post_id = wp_insert_post(array(
            'post_title'    => sanitize_text_field($formData['firstName'] . ' ' . $formData['lastName']),
            'post_status'   => 'publish',
            'post_type'     => 'reservation-list',
        ));

        // Vérifier si le post a bien été créé
        if ($post_id != 0) {
            // Mettre à jour les métadonnées du post
            update_post_meta($post_id, 'type', sanitize_text_field($formData['type']));
            update_post_meta($post_id, 'date', sanitize_text_field($formData['date']));
            update_post_meta($post_id, 'number', intval($formData['number']));
            update_post_meta($post_id, 'time', sanitize_text_field($formData['time']));
            update_post_meta($post_id, 'firstName', sanitize_text_field($formData['firstName']));
            update_post_meta($post_id, 'lastName', sanitize_text_field($formData['lastName']));
            update_post_meta($post_id, 'phone', sanitize_text_field($formData['phone']));
            update_post_meta($post_id, 'email', sanitize_email($formData['email']));
            update_post_meta($post_id, 'comments', sanitize_textarea_field($formData['comments']));

            // Renvoyer une réponse
            echo json_encode(array('success' => true, 'message' => 'Réservation enregistrée'));
        } else {
            // Renvoyer une erreur
            echo json_encode(array('success' => false, 'message' => 'Erreur lors de l\'enregistrement'));
        }
    } else {
        // Données non reçues
        echo json_encode(array('success' => false, 'message' => 'Données non reçues'));
    }

    wp_die(); // cette fonction est requise pour terminer correctement la requête AJAX

}

add_action( 'wp_ajax_submit_reservation', 'submit_reservation');
add_action( 'wp_ajax_nopriv_submit_reservation', 'submit_reservation' );


function add_custom_columns_to_reservation_list($columns) {
    
    $new_columns = array('cb' => '<input type="checkbox" />');
    $new_columns['title'] = 'Titre';
    $new_columns['type'] = 'Type';
    $new_columns['reservation_date'] = 'Date';
    $new_columns['reservation_time'] = 'Heure';
    $new_columns['reservation_number'] = 'Nombre de personnes';
    $new_columns['confirm_reservation'] = 'Confirmer';

    return $new_columns;
}
add_filter('manage_reservation-list_posts_columns', 'add_custom_columns_to_reservation_list');


function custom_reservation_list_column_content($column_name, $post_id) {
    switch ($column_name) {
    	case 'type':
            echo get_post_meta($post_id, 'type', true);
            break;
        case 'reservation_date':
            echo get_post_meta($post_id, 'date', true);
            break;
        case 'reservation_time':
            echo get_post_meta($post_id, 'time', true);
            break;
        case 'reservation_number':
            echo get_post_meta($post_id, 'number', true);
            break;
        case 'confirm_reservation':
            echo '<a href="#" class="button confirm-reservation-button" data-post-id="' . $post_id . '">Confirmer la réservation</a>';
            break;

    }
}
add_action('manage_reservation-list_posts_custom_column', 'custom_reservation_list_column_content', 10, 2);

function set_custom_post_types_admin_orderby($columns) {
    $columns['reservation_date'] = 'reservation_date_meta';
    return $columns;
}
add_filter('manage_edit-reservation-list_sortable_columns', 'set_custom_post_types_admin_orderby');

function custom_post_types_admin_orderby($query) {
    if (!is_admin() || !$query->is_main_query()) {
        return;
    }

    if ($query->get('post_type') == 'reservation-list' && $query->get('orderby') == 'reservation_date_meta') {
        $query->set('meta_key', 'date');
        $query->set('orderby', 'meta_value');
    }
}
add_action('pre_get_posts', 'custom_post_types_admin_orderby');

function admin_custom_script() {
    ?>
    <script type="text/javascript">
        jQuery(document).ready(function($) {
            $('.confirm-reservation-button').click(function(e) {
                e.preventDefault();
                var postId = $(this).data('post-id');
                // Ici, ajoutez votre logique AJAX pour confirmer la réservation
                console.log('Confirmer la réservation pour le post ID:', postId);
                alert('mail ou sms ?')
            });
        });
    </script>
    <?php
}
add_action('admin_footer', 'admin_custom_script');

function add_export_button_to_reservation_list($which) {
    global $typenow;

    if ('reservation-list' === $typenow && 'top' === $which) {
        echo '<input type="button" name="export_csv" id="export_csv" class="button button-primary" value="Exporter en CSV">';
    }
}
add_action('manage_posts_extra_tablenav', 'add_export_button_to_reservation_list');

function add_csv_export_popup_form() {
    global $typenow;

    if ('reservation-list' !== $typenow) {
        return;
    }

    ?>
    <style type="text/css">
    	/* Style de base pour le popup */
    	#csv-export-popup {
    	    display: none;
    	    position: fixed;
    	    left: 0;
    	    top: 0;
    	    width: 100%;
    	    height: 100%;
    	    background: rgba(0, 0, 0, 0.5);
    	    z-index: 1000;
    	    align-items: center;
    	    justify-content: center;
    	    padding-top: 100px;
    	}

    	/* Style du formulaire dans le popup */
    	#csv-export-popup form {
    	    background: #fff;
    	    padding: 20px;
    	    border-radius: 5px;
    	    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    	    width: 300px;
    	    margin: 0 auto;
    	}

    	/* Style des labels et des champs de saisie */
    	#csv-export-popup label {
    	    display: block;
    	    margin-bottom: 5px;
    	}

    	#csv-export-popup select {
    	    width: 100%;
    	    margin-bottom: 10px;
    	    padding: 8px;
    	    border: 1px solid #ddd;
    	    border-radius: 4px;
    	}

    	/* Style du bouton de soumission */
    	#csv-export-popup input[type="submit"] {
    	    display: block;
    	    width: 100%;
    	    padding: 10px;
    	    border: none;
    	    border-radius: 4px;
    	    background-color: #0073aa;
    	    color: white;
    	    cursor: pointer;
    	    font-size: 16px;
    	}

    	#csv-export-popup input[type="submit"]:hover {
    	    background-color: #005077;
    	}

    	#close-csv-popup-wrap {
    		text-align: right;
    	}
    	#close-csv-popup {
    	    font-size: 20px;
    	    color: #000;
    	}
    </style>
    <div id="csv-export-popup" style="display:none;">
        <form id="csv-export-form">
        	<div id="close-csv-popup-wrap"><span id="close-csv-popup" style="cursor: pointer;">&times;</span></div>
            <label for="export-month">Mois :</label>
            <select name="export_month" id="export-month">
                <?php 
                $months = array(
                    '1' => 'Janvier',
                    '2' => 'Février',
                    '3' => 'Mars',
                    '4' => 'Avril',
                    '5' => 'Mai',
                    '6' => 'Juin',
                    '7' => 'Juillet',
                    '8' => 'Août',
                    '9' => 'Septembre',
                    '10' => 'Octobre',
                    '11' => 'Novembre',
                    '12' => 'Décembre'
                );
                foreach ($months as $num => $name) {
                    echo "<option value='$num'>$name</option>";
                }
                ?>
            </select>

            <label for="export-year">Année :</label>
            <select name="export_year" id="export-year">
                <?php for ($i = date('Y'); $i >= 2000; $i--) : ?>
                    <option value="<?php echo $i; ?>"><?php echo $i; ?></option>
                <?php endfor; ?>
            </select>

            <input type="submit" value="Exporter" class="button button-primary">
        </form>
    </div>
    <script type="text/javascript">
        jQuery(document).ready(function($) {
            $('#export_csv').click(function() {
                // Affiche le popup
                $('#csv-export-popup').show();
            });

            $('#csv-export-form').submit(function(e) {
                e.preventDefault();
                // Ajoutez ici la logique d'exportation CSV
                console.log('Exporter en CSV pour le mois et l\'année sélectionnés');
            });

            $('#close-csv-popup').click(function() {
                $('#csv-export-popup').hide();
            });
        });
    </script>
    <?php
}
add_action('admin_footer', 'add_csv_export_popup_form');