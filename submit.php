<?php
// Replace these values with your own information
$from = "mukundk712@gmail.com";
$to = "mukundk2410@gmail.com";
$subject = "New message from your website";
$name = $_POST["name"];
$message = $_POST["message"];

// Gmail SMTP server settings
$host = "smtp.gmail.com";
$username = "mukundk712@gmail.com";
$password = "bokkhvmgkcvwvhpl";
$port = 465; // or 465 for SSL/TLS encrypted connection

// Create a new PHPMailer instance
require_once "phpmailer/PHPMailer.php";
require_once "phpmailer/SMTP.php";

$mail = new PHPMailer\PHPMailer\PHPMailer();
$mail->isSMTP();
$mail->SMTPDebug = 0;
$mail->Host = $host;
$mail->SMTPAuth = true;
$mail->Username = $username;
$mail->Password = $password;
$mail->SMTPSecure = 'tls'; // Enable TLS encryption, `ssl` also accepted
$mail->Port = $port;
$mail->setFrom($from);
$mail->addAddress($to);
$mail->isHTML(true);
$mail->Subject = $subject;
$mail->Body = "Name: $name<br>Message: $message";

// Send the email and check for errors
if ($mail->send()) {
    echo "Thank you for your message, $name. We will get back to you soon.";
} else {
    echo "Error: " . $mail->ErrorInfo;
}
?>
