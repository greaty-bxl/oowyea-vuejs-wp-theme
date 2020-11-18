<!-- 

// Anti spam validation
$hidden_input_validation = $_POST['hidden_input_validation'];
 // required
if ( $hidden_input_validation !== 'ok') {
  exit();
} 


    // EDIT THE 2 LINES BELOW AS REQUIRED
    $email_to = "salimoualdoummmou@gmail.com";
    $email_subject = "Modulo di contatto Azienda agricola Pepe";
  
    function died($error) {
        // your error code can go here
        echo "We are very sorry, but there were error(s) found with the form you submitted. ";
        echo "These errors appear below.<br /><br />";
        echo $error."<br /><br />";
        echo "Please go back and fix these errors.<br /><br />";
        die();
    }
   
    // validation expected data exists
    
 
    $nom = $_POST['Name']; // required
    $surname = $_POST['Surname']; // required
    $email = $_POST['Email']; // required
    $tel = $_POST['Phone']; // required
    $message_contact = $_POST['Field-2']; // required
    $error_message = "";
  

 
     
  function clean_string($string) {
    $bad = array("content-type","bcc:","to:","cc:","href");
    return str_replace($bad,"",$string);
  }
     
    $email_message .= "Conome: ".clean_string($nom)."\n";
    $email_message .= "Nome: ".clean_string($surname)."\n";
    $email_message .= "e-mail: ".clean_string( $email)."\n";
    $email_message .= "Telefono: ".clean_string($tel)."\n";
    $email_message .= "messaggio: ".clean_string( $message_contact)."\n";
    
 

 $headers = "From: no-reply@agricolafrancescopepe.it\r\n".
 'Reply-To: '.$email_from."\r\n" .
 'X-Mailer: PHP/' . phpversion();
@mail($email_to, $email_subject, $email_message, $headers );  

 header("location:http://localhost/huile_de_olive/wordpress-5.2.3/wordpress/message-recu/")

  -->

?>

