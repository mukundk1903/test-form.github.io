<?php
//get data from form  
$name = $_POST['Fname'];
$lname = $_POST['Lname'];
$email = $_POST['mail'];
$to = "mukundk712@gmail.com";
$subject = "Mail From website";
$txt = "First Name = " . $name . "\r\n Last Name =" . $lname;
$headers = "From: noreply@mukundkumar.in" . "\r\n" .
    "CC: somebodyelse@example.com";
if ($email != NULL) {
    mail("mukundk712@gmail.com", "Mail from vmdesigngroup", $txt, $headers);
}
