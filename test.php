<?php
//get data from form  
$name = $_POST['fname'];
$lname = $_POST['lname'];
ini_set('display_error', 1);
error_reporting(E_ALL);
$from = "77000172+mukundk1903@users.noreply.github.com";
$to = "mukundk712@gmail.com";
$subject = "New Job Application";
$message = "First Name = " . $name . "\r\n Last Name =" . $lname;
$headers = "From:" . $from;
mail($to, $subject, $message, $headers);
echo "<script type='text/javascript'>alert('Application Submitted Successfully. \nThank you')</script>";
