
<?php
    header('Access-Control-Allow-Origin: http://localhost:3000');
    
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;
    use PHPMailer\PHPMailer\SMTP;
    require_once 'phpmailer/Exception.php';
    require_once 'phpmailer/PHPMailer.php';
    require_once 'phpmailer/SMTP.php';

/*
    $name = $_POST['name'];
    echo (" name: $name");
    $age = $_POST['age'];
    echo (" age: $age");
    $phone = $_POST['phone'];
    echo (" phone: $phone");
    $email = $_POST['email'];
    echo (" email: $email");
*/

   $mail = new PHPMailer(true);
   $alert='';

  if(isset($_POST['name']) && isset($_POST['age']) && isset($_POST['phone']) && isset($_POST['email']))
  {

    $name= $_POST['name'];
    $age = $_POST['age'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    try{
        $mail->SMTPDebug = SMTP::DEBUG_SERVER;    
        $mail->isSMTP();
        $mail->Host='ssl://smtp.gmail.com';
        $mail->SMTPAuth =true;
        $mail->Username ='data@emfas.org';
        $mail->Password='radfkkqukocsltyh'; // two way verification generated password
        $mail->SMTPSecure='ssl';
        //PHPMailer::ENCRYPTION_SMTPS;
        $mail->Port =465;

        $mail->setFrom('data@emfas.org','Mailer');
        $mail->addAddress('data@emfas.org'); //Email address where you want to receive the emails
        $mail->isHTML(true);
        $mail->Subject= 'Message Received From Join Page';
        $mail->Body= "Name: $name <br>Age: $age <br>Phone: $phone <br>Email: $email"; 
        $mail ->send();
        $alert= "<div class='alert-sucess'><span>Your information has been submitted!</span></div>";

    }catch(Exception $e)  {  
       $alert="not submitted $e";

    }
}


 
?>