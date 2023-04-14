<?php
//get data from form  
$name = $_POST['Fname'];
$lname = $_POST['Lname'];
$email = $_POST['mail'];
$phone = $_POST['tel'];
$job = $_POST['Jobb'];
$exp = $_POST['exp'];
$link = $_POST['link'];
$portf = $_POST['portf'];
$to = "mukundk712@gmail.com";
$subject = "Mail From website";
$txt = "First Name = " . $name . "\r\n Last Name =" . $lname;
$headers = "From: 77000172+mukundk1903@users.noreply.github.com" . "\r\n" .
    "CC: somebodyelse@example.com";
if ($email != NULL) {
    mail("mukundk712@gmail.com", "Mail from vmdesigngroup", $txt, $headers);
}
