<?php

if( !isset($_POST) )
{
    echo 'Error!';
    exit;
}

require './PHPMailer/Exception.php';
require './PHPMailer/PHPMailer.php';
require './PHPMailer/SMTP.php';

// Import PHPMailer classes into the global namespace
// These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

// Load Composer's autoloader
// require 'vendor/autoload.php';

// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';

// echo '<pre>';
// print_r($_POST);
// echo '</pre>';

// echo '<pre>';
// print_r($_FILES);
// echo '</pre>';

$name = $_POST['first_name'].' '.$_POST['last_name'];
$email = $_POST['email'];
$phone = $_POST['phone_number'];
$text = $_POST['message'];
$country = $_POST['country'];
$city = $_POST['city'];
$subject = $_POST['subject'];


try {
    //Server settings
    // $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      // Enable verbose debug output
    $mail->isSMTP();                                            // Send using SMTP
    $mail->Host       = 'smtp.mail.ru';                    // Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'alikscorp@mail.ru';                     // SMTP username
    $mail->Password   = 'Terabyte1976!';                               // SMTP password
    $mail->SMTPSecure = 'ssl';         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` also accepted
    $mail->Port       = 465;                                    // TCP port to connect to

    //Recipients
    $mail->setFrom('alikscorp@mail.ru', 'TMPack.biz');

    $mail->addAddress('info@yashylgala.com', 'Export TMPACK');     // Add a recipient
    // $mail->addAddress('alikscorp@mail.ru', 'Alik Scorp');     // Add a recipient


    // $mail->addAddress('ellen@example.com');               // Name is optional
    // $mail->addReplyTo('info@example.com', 'Information');
    // $mail->addCC('cc@example.com');
    // $mail->addBCC('bcc@example.com');

    // Attachments
    // $mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
    // $mail->addAttachment($_FILES['file']['tmp_name'], $_FILES['file']['name']);    // Optional name

    if(isset($_FILES['file']['tmp_name']) && $_FILES['file']['tmp_name'] != "") {
        $mail->AddAttachment($_FILES['file']['tmp_name'], $_FILES['file']['name']);
      }


    // if( isset($_FILES) )
    // {
    //     foreach ($_FILES as $key => $value) {
    //         $mail->AddAttachment($value['tmp_name'], $value['name']);
    //     }
    // }

    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = $subject;
    $mail->Body    = 'Имя пользователя: ' . $name . '<br> E-Mail пользователя: ' . $email .  '<br> Tелефон пользователя: ' . $phone .'<br>  Страна: ' . '<b>' .$country . '</b>'.'<br>  Город: ' . '<b>' .$city . '</b>' . '<br> Дополнительная информация: ' .$text  ;
    $mail->AltBody = '';

    $mail->send();
    echo 'Ok';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
