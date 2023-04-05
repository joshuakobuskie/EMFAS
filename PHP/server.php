
<?php
    header('Access-Control-Allow-Origin: http://localhost:3000');
    
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;
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


if( empty($_POST['name']) && empty($_POST['age']) && empty($_POST['phone']) && empty($_POST['email'])) {
    echo json_encode(
        [
           "sent" => false,
           "message" => "form not filled correctly"
        ]
    ); 
    exit();
}



    if($_POST) {
        $mail = new PHPMailer(true);
        $name= $_POST['name'];
        $age = $_POST['age'];
        $phone = $_POST['phone'];
        $email = $_POST['email'];
        try{
            $mail->isSMTP();
            $mail->Host='stmp.gmail.com';
            $mail->SMTPAuth =true;
            $mail->Username ='data@emfas.org';
            $mail->Password='emfas2621'; // two way verification so that the actual password is not used
            $mail->SMTPSecure='tls';
            $mail->Port ='587';

            $mail->setFrom('data@emfas.org');
            $mail->addAddress('data@emfas.org'); //Email address where you want to receive the emails
            $mail->isHTML(true);
            $mail->Subject= 'Message Recieved From Join Page';
            $mail->Body= "Name: $name <br>Age: $age <br>Phone: $phone <br>Email: $email"; 
            $mail ->send();

            $alert= "<div class='alert-sucess'><span>Your information has been submitted!</span></div>";


        } catch(Exception $e){
            $alert ="<div class='alert-error'><span>'Somenthing went wrong. Please try again.'</span>";

        }
    }
  
  



 
?>