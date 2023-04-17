<?php
// Replace these values with your own information
$from = "your-email@gmail.com";
$to = "recipient-email@example.com";
$subject = "Test Email";
$body = "This is a test email from PHP.";

// Gmail SMTP server settings
$host = "smtp.gmail.com";
$username = "mukundk712@gmail.com";
$password = "grlimocaemepxwif";
$port = 587; // or 465 for SSL/TLS encrypted connection

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
$mail->Body = $body;

// Send the email and check for errors
if ($mail->send()) {
    echo "Email sent successfully.";
} else {
    echo "Error: " . $mail->ErrorInfo;
}
?>
