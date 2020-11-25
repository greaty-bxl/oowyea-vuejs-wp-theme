<?php

add_action( 'wp_ajax_nopriv_send_contact_mail', 'send_contact_mail');
add_action( 'wp_ajax_send_contact_mail', 'send_contact_mail' );

function send_contact_mail( ) {

   //if (isset($_POST['submit'])) {
  $strings = array(
    'name' => 'Name',
    'email' => 'E-mail',
    'message' => 'Message'
  );

      $name =  $_POST['name'];
      $email =  $_POST['email'];
      $message =  $_POST['message'];
      $type =  $_POST['type'];

      

    // Set your email address where you want to receive emails.

     $email_from = 'salimoualdoummmou@gmail.com';
     $subject = 'Contact Request From Website';
     // $headers = "From: ".$name." <".$email."> \r\n";

      // echo $message;
      // die( json_encode(  $message ) );
      // exit();
    
     $text_mail = '';

     foreach ($_POST['form'] as $key => $field) 
     {
        $text_mail .= $strings[ $field['name'] ] . ' - ' . $field['value'] . '<br>';

     };

     $headers = "From: no-reply@agricolafrancescopepe.it\r\n".
     'Reply-To: '.$email_from."\r\n" .
     'From: '.$email_from."\r\n" .
     'X-Mailer: PHP/' . phpversion();


     // echo $message;

      wp_mail($email_from,$subject,$text_mail,$headers);

      // @mail($to,$subject,$text_mail,$headers);
     // @mail($send_email );  
     //echo ($send_email) ? 'success' : 'error';
     // die( $text_mail );
     // die( json_encode( $_POST['form'] ) );


     // }
  }


?>

