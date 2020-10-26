
<?php


if(!empty($_POST["send"])) {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["message"];


    $toEmail = "lucasalive2010@gmail.com";
    $mailHeaders = "From: " . $name . "<". $email .">\r\n";
    if(mail($toEmail, $subject, $mailHeaders)) {
        $message = "Your contact information is received successfully.";
        $type = "success";
        header('Location:index.php?acerto');
    }else{
        echo 'Error';
        header('Location:index.php?erro');
    }
}

?>