<?php 

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

$mail = new PHPMailer(true);

try {
    //Server settings
    // $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
    $mail->isSMTP();                                            //Send using SMTP

    $mail->Host       = 'smtp.gmail.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'dmitry.lashchenkov@itp-it.com';
    $mail->Password   = 'zsgtvagyimmzqaxp';
    $mail->Port       = 465;
    $mail->SMTPSecure = 'ssl';
    $mail->setFrom("dmitry.lashchenkov@itp-it.com", "ITP Site");
    
    // $mail->Host       = 'ssl://server54.hosting.reg.ru';                     //Set the SMTP server to send through
    // $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    // $mail->Username   = 'no-reply@dev.itp-it.com';                     //SMTP username
    // $mail->Password   = 'uF5hW7mL2ypW6h';                               //SMTP password
    // $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
    // $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`    
    // $mail->setFrom("no-reply@dev.itp-it.com", "ITP Site");

    //Recipients
    $mail->addAddress("info@itp-it.com");

    //Attachment
    if (isset($_FILES['file']) &&
    $_FILES['file']['error'] == UPLOAD_ERR_OK) {
        $mail->AddAttachment($_FILES['file']['tmp_name'],
                            $_FILES['file']['name']);
    }
    
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    $text = $_POST['text'];

    //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = 'New request';
    $mailBody = 'Форма: <b>'.$_POST['subject'].'</b><br><br>'
    .'<br>Имя: <b>'.$name.'</b>'
    .'<br>Телефон: <b>'.$phone.'</b>'
    .'<br>Email: <b>'.$email.'</b>'
    .'<br>Сообщение: <b>'.$text.'</b>';
    if(isset($_POST['vacancy'])):
        $mailBody .= '<br>Вакансия: <b>'.$_POST['vacancy'].'</b>';
    endif;
    $mail->Body = $mailBody;
    

    $mail->send();
    echo 'true';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
?>