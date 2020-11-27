<?php

add_action( 'wp_ajax_nopriv_send_assortiment_mail', 'send_assortiment_mail');
add_action( 'wp_ajax_send_assortiment_mail', 'send_assortiment_mail' );

function send_assortiment_mail( ) {

   //if (isset($_POST['submit'])) {
  $strings = array(
    'name' => 'Name',
    'email' => 'E-mail',
    'telephone' => 'Téléphone',
    'personnes' => 'Personnes',
    'commande' => 'Commande',
    'message' => 'Message',
  );

      $name =  $_POST['name'];
      $email =  $_POST['email'];
      $message =  $_POST['message'];
      $type =  $_POST['type'];


     $email_to = 'fromageriewestland@gmail.com';
     $subject = 'Commande assortiments';

     $text_mail = '';

     foreach ($_POST['form'] as $key => $field) 
     {
        $text_mail .= $strings[ $field['name'] ] . ' - ' . $field['value'] . '<br>';

     };

     $headers = "From: no-reply@fromagerie.be\r\n".
     'Reply-To: '.$email_to."\r\n" .
     'From: '.$email_to."\r\n" .
     'X-Mailer: PHP/' . phpversion();

     add_filter('wp_mail_content_type', function( $content_type ) {
                 return 'text/html';
     });

      wp_mail($email_to,$subject,$text_mail,$headers);


  }


?>

