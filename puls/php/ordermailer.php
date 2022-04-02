<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/style.min.css">
    <title>Document</title>
</head>

<body>
    <div class='success_by_wrapper'>
        <div class='success_by'>
            <p>Спасибо! <br> Наш менеджер скоро свяжется с Вами</p>
            <a href='../index.html'>назад</a>
        </div>
    </div>
</body>

</html>

<?php

$user_name = $_POST['user_name'];

$to = "maxpetrovv1980@gmail.com";
$from = $_POST['user_email'];
$phone = $_POST['user_phone'];
$message = "Имя пользователя: $user_name" . "\r\n" .
    "Телефон: $phone" . "\r\n" .
    "Email: $from";
mail($to, "Новый клиент!", $message);
?>
