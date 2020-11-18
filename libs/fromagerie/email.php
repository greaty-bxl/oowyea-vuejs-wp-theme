<?php
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

     $to = 'salimoualdoummmou@gmail.com';
     $subject = 'Contact Request From Website';
     $headers = "From: ".$name." <".$email."> \r\n";

    
     $text_mail = '';

     foreach ($_POST['form'] as $key => $field) 
     {
        $text_mail .= $strings[ $field['name'] ] . ' - ' . $field['value'] . '<br>';

     };

     $message = $text_mail;

    // wp_mail($to,$subject,$message,$headers);

     @mail($to,$subject,$text_mail,$headers);
     // @mail($send_email );  
     //echo ($send_email) ? 'success' : 'error';
     // die( $text_mail );
     //die( json_encode( $_POST['form'] ) );

     // }
  }

add_action( 'wp_ajax_send_contact_mail', 'send_contact_mail' );
add_action( 'wp_ajax_nopriv_send_contact_mail', 'send_contact_mail');
?>

