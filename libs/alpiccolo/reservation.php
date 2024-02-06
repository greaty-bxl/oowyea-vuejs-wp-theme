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


    wp_vue_add_var('reservation_page', array('permalink'=>'#') );

    $args = array(
        'meta_key'   => '_wp_page_template',
        'meta_value' => 'LaReservation', // Remplacez par le nom de votre fichier de template
        'sort_order' => 'ASC',
        'sort_column' => 'post_date',
        'number' => 1
    );

    $pages = get_pages($args);

    if (!empty($pages)) {
        // Utiliser la première page
        $page = $pages[0];
        // Votre code pour afficher le contenu de la page ici
        wp_vue_add_var('reservation_page', $page );
    }

    wp_vue_add_var('banquet_page', array('permalink'=>'#') );

    $args = array(
        'meta_key'   => '_wp_page_template',
        'meta_value' => 'LesBanquets', // Remplacez par le nom de votre fichier de template
        'sort_order' => 'ASC',
        'sort_column' => 'post_date',
        'number' => 1
    );

    $pages = get_pages($args);

    if (!empty($pages)) {
        // Utiliser la première page
        $page = $pages[0];
        // Votre code pour afficher le contenu de la page ici
        wp_vue_add_var('banquet_page', $page );
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
            update_post_meta($post_id, 'language', sanitize_text_field($formData['language']));
            update_post_meta($post_id, 'date', sanitize_text_field($formData['date']));
            update_post_meta($post_id, 'number', intval($formData['number']));
            update_post_meta($post_id, 'time', sanitize_text_field($formData['time']));
            update_post_meta($post_id, 'firstName', sanitize_text_field($formData['firstName']));
            update_post_meta($post_id, 'lastName', sanitize_text_field($formData['lastName']));
            update_post_meta($post_id, 'phone', sanitize_text_field($formData['phone']));
            update_post_meta($post_id, 'email', sanitize_email($formData['email']));
            update_post_meta($post_id, 'comments', sanitize_textarea_field($formData['comments']));
            update_post_meta($post_id, 'nom_du_banquet', sanitize_text_field($formData['nom_du_banquet']));
            

            // Envoyer un e-mail à l'administrateur
            $admin_email = 'j.obbiet@greaty.be, nicolaswayenbergh@greaty.be, info@alpiccolomondo.com, alpiccolomondobruxelles@gmail.com'; //get_option('admin_email');
            $subject = 'Nouvelle réservation '. esc_html($formData['type']) .' sur le site';
                        
            // Créer le contenu HTML de l'e-mail
            $message = '<html><body>';
            $message .= '<table>';
            $message .= '<tr><td>Type :</td><td>' . esc_html($formData['type']) . '</td></tr>';
            if(esc_html($formData['type']) == 'banquet')
            {
                $message .= '<tr><td>Nom du banquet :</td><td>' . esc_html($formData['nom_du_banquet']) . '</td></tr>';
            }

            $dateString = esc_html($formData['date']);
            $date = new DateTime($dateString);
            $formattedDate = $date->format('d/m/Y');

            $message .= '<tr><td>Nom :</td><td>' . esc_html($formData['lastName'] . ' ' . $formData['firstName']) . '</td></tr>';
            $message .= '<tr><td>Date :</td><td>' . $formattedDate . '</td></tr>';
            $message .= '<tr><td>Heure :</td><td>' . esc_html($formData['time']) . '</td></tr>';
            $message .= '<tr><td>Nombre de personnes :</td><td>' . esc_html($formData['number']) . '</td></tr>';
            $message .= '<tr><td>Téléphone :</td><td>' . esc_html($formData['phone']) . '</td></tr>';
            $message .= '<tr><td>E-mail :</td><td>' . esc_html($formData['email']) . '</td></tr>';
            $message .= '<tr><td>Langue :</td><td>' . esc_html($formData['language']) . '</td></tr>';
            $message .= '<tr><td>Commentaires, allergies et habitudes alimentaires :</td><td>' . esc_html($formData['comments']) . '</td></tr>';
            $message .= '</table>';
            
            $message .= '<p>Cliquez sur le bouton ci-dessous pour confirmer la réservation :</p>';
            $message .= '<a href="' . get_reservation_reply_link($post_id) . '" style="display:inline-block;padding:10px 20px;background-color:#0073e6;color:#fff;text-decoration:none;">Confirmer la réservation</a><br/><br/>';
            $message .= '<a href="' . get_reservation_cancel_link($post_id) . '" style="display:inline-block;padding:10px 20px;background-color:#E6003C;color:#fff;text-decoration:none;">Refuser la réservation</a>';
            $message .= '</body></html>';

            // En-têtes de l'e-mail
            $headers[] = 'Content-Type: text/html; charset=UTF-8';
            $headers[] = 'From: Al Piccolo Mondo <no-reply@alpiccolomondo.com>';
            $headers[] = 'Reply-To: ' . esc_html($formData['lastName'] . ' ' . $formData['firstName']) . ' <'.esc_html($formData['email']).'>';

            // Envoyer l'e-mail
            wp_mail($admin_email, $subject, $message, $headers);

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


function get_reservation_reply_link($post_id){
$dateString = get_post_meta($post_id, 'date', true);;
$date = new DateTime($dateString);
$formattedDate = $date->format('d/m/Y');

if( get_post_meta($post_id, 'language', true) == 'fr' )
{
$email_subject = rawurlencode('✅ Nous vous confirmons votre réservation.'); // Sujet de l'e-mail
ob_start();
?>
Cher/Chère <?= get_post_meta($post_id, 'firstName', true); ?>,

Nous sommes ravis de vous accueillir au Al Piccolo Mondo - Dal 1979 ⚜️

Voici les détails de votre réservation :
- Nom : <?= get_post_meta($post_id, 'firstName', true); ?> 
- Prénom : <?= get_post_meta($post_id, 'lastName', true); ?> 
- Date : <?= $formattedDate; ?> 
- Heure : <?= get_post_meta($post_id, 'time', true); ?> 
- Nombre de Personnes : <?= get_post_meta($post_id, 'number', true); ?> 
- Commentaires, Allergies et Habitudes Alimentaires : <?= get_post_meta($post_id, 'comments', true); ?> 

* TENUE CORRECTE EXIGÉE (pas de shorts, casquettes, sandales ou tongs) à l’intérieur du restaurant.
* Aucune table spécifique ne peut être attribuée à l’avance. 
* En cas d’annulation, veuillez avoir l’obligeance de nous prévenir minimum 4 heures à l’avance.
* Après 30 minutes de retard sans nouvelles de votre part nous considérerons votre table comme annulée.
* Cette confirmation est obligatoire et peut être demandée à l’entrée de l’établissement.

ADRESSE 19 rue Jourdan 1060 Bruxelles 
TEL +32 2 538 87 94
WEBSITE www.alpiccolomondo.com
INSTAGRAM 
https://www.instagram.com/alpiccolomondobruxelles/
FACEBOOK 
https://m.facebook.com/alpiccolomondorestaurant/


<?php
$message = ob_get_clean();
}
else
{
$email_subject = rawurlencode('✅ We confirm your reservation.'); // Sujet de l'e-mail
ob_start();
?>
Dear <?= get_post_meta($post_id, 'firstName', true); ?>,

We are happy to welcome you at Al Piccolo Mondo - since 1979 ⚜️

Here are the details of your reservation: 
- Last Name: <?= get_post_meta($post_id, 'firstName', true); ?> 
- First Name: <?= get_post_meta($post_id, 'lastName', true); ?> 
- Date: <?= $formattedDate; ?> 
- Time: <?= get_post_meta($post_id, 'time', true); ?> 
- Number of Guests: <?= get_post_meta($post_id, 'number', true); ?> 
- Comments, Allergies, and Dietary Preferences: <?= get_post_meta($post_id, 'comments', true); ?> 

* WELL DRESSED REQUIRED inside the restaurant (no shorts, no caps, no sandals).
* No specific table can be given in advance.
* In case of cancellation, please advise us 4 hours in advance.
* If you arrive 30 minutes late without letting us know your booking will be automatically cancelled.
* This confirmation can be asked at the entrance of the restaurant.

ADDRESS 19 rue Jourdan 1060 Bruxelles 
TEL +32 2 538 87 94
WEBSITE www.alpiccolomondo.com
INSTAGRAM 
https://www.instagram.com/alpiccolomondobruxelles/
FACEBOOK 
https://m.facebook.com/alpiccolomondorestaurant/

<?php
$message = ob_get_clean();
}
$email_body = rawurlencode( $message );
$to_email = get_post_meta($post_id, 'email', true); // Adresse e-mail du destinataire
$email_link = 'mailto:' . $to_email . '?subject=' . $email_subject . '&body=' . $email_body;
return $email_link;
}


function get_reservation_cancel_link($post_id){
$dateString = get_post_meta($post_id, 'date', true);;
$date = new DateTime($dateString);
$formattedDate = $date->format('d/m/Y');

if( get_post_meta($post_id, 'language', true) == 'fr' )
{
$email_subject = rawurlencode('Refus de Réservation au restaurant Al Piccolo Mondo'); // Sujet de l'e-mail
ob_start();
?>
Cher/Chère <?= get_post_meta($post_id, 'firstName', true); ?>,

Nous regrettons de vous informer que nous ne pouvons pas confirmer votre réservation au restaurant Al Piccolo Mondo pour la date et l'heure demandées.

Voici les détails de votre réservation :
- Nom : <?= get_post_meta($post_id, 'firstName', true); ?> 
- Prénom : <?= get_post_meta($post_id, 'lastName', true); ?> 
- Date : <?= $formattedDate; ?> 
- Heure : <?= get_post_meta($post_id, 'time', true); ?> 
- Nombre de Personnes : <?= get_post_meta($post_id, 'number', true); ?> 
- Commentaires, Allergies et Habitudes Alimentaires : <?= get_post_meta($post_id, 'comments', true); ?> 

Malheureusement, en raison de [RAISON DU REFUS], nous ne pourrons pas accepter votre réservation à cette date. Nous vous prions de nous excuser pour tout désagrément que cela pourrait causer.

Si vous avez des questions supplémentaires ou si vous souhaitez discuter de cette décision, n'hésitez pas à nous contacter à l'adresse e-mail info@alpiccolomondo.com ou au numéro de téléphone +32 2 538 87 94.

Toute l'équipe d'Al Piccolo Mondo est à votre disposition pour répondre à vos besoins et vous offrir une expérience exceptionnelle. Nous espérons avoir l'occasion de vous accueillir à une date ultérieure.

Cordialement,
L'équipe d'Al Piccolo Mondo
<?php
$message = ob_get_clean();
}
else
{
$email_subject = rawurlencode('Reservation Refusal at Al Piccolo Mondo Restaurant'); // Sujet de l'e-mail
ob_start();
?>
Dear <?= get_post_meta($post_id, 'firstName', true); ?>,

We regret to inform you that we are unable to confirm your reservation at Al Piccolo Mondo restaurant for the requested date and time.

Here are the details of your reservation:
- Last Name: <?= get_post_meta($post_id, 'firstName', true); ?> 
- First Name: <?= get_post_meta($post_id, 'lastName', true); ?> 
- Date: <?= $formattedDate; ?> 
- Time: <?= get_post_meta($post_id, 'time', true); ?> 
- Number of Guests: <?= get_post_meta($post_id, 'number', true); ?> 
- Comments, Allergies, and Dietary Preferences: <?= get_post_meta($post_id, 'comments', true); ?> 

Unfortunately, due to [REASON FOR DECLINE], we cannot accept your reservation on this date. We apologize for any inconvenience this may cause.

If you have any further questions or would like to discuss this decision, please feel free to contact us at the email address info@alpiccolomondo.com or by phone at +32 2 538 87 94.

The entire team at Al Piccolo Mondo is here to assist you and provide you with an exceptional experience. We hope to have the opportunity to welcome you on a future date.

Best regards,
The Al Piccolo Mondo Team
<?php
$message = ob_get_clean();
}
$email_body = rawurlencode( $message );
$to_email = get_post_meta($post_id, 'email', true); // Adresse e-mail du destinataire
$email_link = 'mailto:' . $to_email . '?subject=' . $email_subject . '&body=' . $email_body;
return $email_link;
}


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
            echo '<a href="' . get_reservation_reply_link($post_id) . '" class="button confirm-reservation-button" data-post-id="' . $post_id . '">Confirmer la réservation</a>';
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
        /*jQuery(document).ready(function($) {
            $('.confirm-reservation-button').click(function(e) {
                e.preventDefault();
                var postId = $(this).data('post-id');
                // Ici, ajoutez votre logique AJAX pour confirmer la réservation
                console.log('Confirmer la réservation pour le post ID:', postId);
                alert('mail ou sms ?')
            });
        });*/
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

                $current_month = date('n'); // Obtenez le mois actuel
                $previous_month = ($current_month - 1) > 0 ? ($current_month - 1) : 12; // Calcul du mois précédent

                foreach ($months as $num => $name) {
                    // Vérifiez si le mois correspond au mois précédent
                    $selected = ($num == $previous_month) ? 'selected' : '';

                    echo "<option value='$num' $selected>$name</option>";
                }
                ?>
            </select>

            <label for="export-year">Année :</label>
            <select name="export_year" id="export-year">
                <?php for ($i = date('Y'); $i >= 2000; $i--) : ?>
                    <option value="<?php echo $i; ?>"><?php echo $i; ?></option>
                <?php endfor; ?>
            </select>

            <label for="export-language">Langue :</label>
            <select name="export_language" id="export-language">
                <option value="fr">Français</option>
                <option value="en">Anglais</option>
                <!-- Ajoutez d'autres langues au besoin -->
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

                // Récupérer les valeurs du mois et de l'année depuis les sélecteurs HTML
                var export_month = $('#export-month').val();
                var export_year = $('#export-year').val();
                var export_language = $('#export-language').val();

                console.log(export_month, export_year);

                // Effectuer la requête AJAX pour l'exportation CSV
                $.ajax({
                    url: ajaxurl, // Assurez-vous que ajaxurl est défini dans votre environnement WordPress
                    type: 'POST',
                    dataType: 'json',
                    data: {
                        action: 'export_reservation', // Nom de l'action WordPress à appeler
                        export_month: export_month,
                        export_year: export_year,
                        export_language: export_language
                    },
                    success: function(response) {
                        // Traiter la réponse, par exemple, afficher un message de réussite
                        if (response.success) {
                            console.log('Exportation CSV var', response.args);
                            console.log('Exportation CSV réussie', response.csv_url);
                            // Vous pouvez également rediriger l'utilisateur vers le fichier CSV généré
                            window.location.href = response.csv_url;
                        } else {
                            console.log('Erreur lors de l\'exportation CSV');
                        }
                    },
                    error: function(xhr, status, error) {
                        console.log('Erreur AJAX : ' + error);
                    }
                });
            });

            $('#close-csv-popup').click(function() {
                $('#csv-export-popup').hide();
            });
        });
    </script>
    <?php
}
add_action('admin_footer', 'add_csv_export_popup_form');


function export_reservation() {
    // Récupérer les valeurs du mois, de l'année et de la langue depuis la requête
    $export_month = isset($_POST['export_month']) ? intval($_POST['export_month']) : null;
    $export_year = isset($_POST['export_year']) ? intval($_POST['export_year']) : null;
    $export_language = isset($_POST['export_language']) ? sanitize_text_field($_POST['export_language']) : '';

    // Vérifier que le mois et l'année sont valides
    if ($export_month && $export_year) {
        // Créer un tableau pour stocker les données de réservation
        $reservation_data = array(
            array('Nom', 'Prénom', 'Date', 'Heure', 'Nombre de Personnes', 'Type', 'Langue', 'Téléphone', 'Email', 'Commentaires'),
        );

        // Obtenez les réservations en fonction du mois, de l'année et de la langue
        $args = array(
            'post_type' => 'reservation-list',
            'posts_per_page' => -1,
            'monthnum' => $export_month,
            'year' => $export_year,
            'meta_key' => 'language', // Utilisez la clé de métadonnées "language"
            'meta_value' => $export_language, // Valeur de la langue
        );

        $reservations_query = new WP_Query($args);

        if ($reservations_query->have_posts()) {
            while ($reservations_query->have_posts()) {
                $reservations_query->the_post();
                // Récupérez les données de chaque réservation
                $first_name = get_post_meta(get_the_ID(), 'firstName', true);
                $last_name = get_post_meta(get_the_ID(), 'lastName', true);
                $date = get_the_date('Y-m-d');
                $time = get_post_meta(get_the_ID(), 'time', true);
                $number = get_post_meta(get_the_ID(), 'number', true);
                $type = get_post_meta(get_the_ID(), 'type', true);
                $language = get_post_meta(get_the_ID(), 'language', true);
                $phone = get_post_meta(get_the_ID(), 'phone', true);
                $email = get_post_meta(get_the_ID(), 'email', true);
                $comments = get_post_meta(get_the_ID(), 'comments', true);

                // Ajoutez les données de réservation au tableau
                $reservation_data[] = array($last_name, $first_name, $date, $time, $number, $type, $language, $phone, $email, $comments);
            }
        }

        // Créez le contenu CSV
        $csv_content = '';
        foreach ($reservation_data as $row) {
            $csv_content .= implode(',', $row) . "\n";
        }

        // Créez le nom du fichier CSV avec une date
        $csv_filename = 'export_reservation_' . date('Y-m-d') . '.csv';

        // Obtenez le répertoire de téléchargement de médias de WordPress
        $upload_dir = wp_upload_dir();

        // Créez le chemin complet du fichier CSV
        $csv_file_path = $upload_dir['path'] . '/' . $csv_filename;

        // Écrivez le contenu CSV dans le fichier
        file_put_contents($csv_file_path, $csv_content);

        // Enregistrez le fichier CSV en tant que média WordPress
        $attachment = array(
            'post_mime_type' => 'text/csv',
            'post_title' => sanitize_file_name($csv_filename),
            'post_content' => '',
            'post_status' => 'inherit'
        );

        $attachment_id = wp_insert_attachment($attachment, $csv_file_path);

        // Incluez le fichier dans la bibliothèque de médias de WordPress
        require_once(ABSPATH . 'wp-admin/includes/image.php');
        $attachment_data = wp_generate_attachment_metadata($attachment_id, $csv_file_path);
        wp_update_attachment_metadata($attachment_id, $attachment_data);

        // Obtenez l'URL du fichier CSV
        $csv_url = wp_get_attachment_url($attachment_id);

        // Retournez l'URL du fichier CSV
        echo json_encode(array('success' => true, 'csv_url' => $csv_url, 'args' => $args));

        // Arrêtez l'exécution de WordPress pour empêcher l'affichage de la page habituelle
        die();
    } else {
        // Retournez une réponse d'erreur si le mois et l'année ne sont pas valides
        echo json_encode(array('success' => false, 'message' => 'Mois et année non valides'));
        die();
    }
}



add_action('wp_ajax_export_reservation', 'export_reservation');