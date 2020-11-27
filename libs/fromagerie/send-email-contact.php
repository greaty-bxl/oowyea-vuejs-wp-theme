<?php

add_action( 'wp_ajax_nopriv_send_contact_mail', 'send_contact_mail');
add_action( 'wp_ajax_send_contact_mail', 'send_contact_mail' );

function send_contact_mail( ) {

   //if (isset($_POST['submit'])) {
  $strings = array(
    'name' => 'Name',
    'email' => 'E-mail',
    'telephone' => 'Téléphone',
    'message' => 'Message',

  );

      $name =  $_POST['name'];
      $email =  $_POST['email'];
      $message =  $_POST['message'];
      $type =  $_POST['type'];


     $email_to = 'fromageriewestland@gmail.com';
     $subject = 'Contact';

    
     $text_mail = '';

     foreach ($_POST['form'] as $key => $field) 
     {
        $text_mail .= $strings[ $field['name'] ] . ' - ' . $field['value'] . '<br>';

     };

     $headers = "From: no-reply@fromagerie.brussels\r\n".
     'Reply-To: '.$email_to."\r\n" .
     'From: '.$email_to."\r\n" .
     'X-Mailer: PHP/' . phpversion();

     add_filter('wp_mail_content_type', function( $content_type ) {
                 return 'text/html';
     });

      wp_mail($email_to,$subject,$text_mail,$headers);

// }
  }


?>

