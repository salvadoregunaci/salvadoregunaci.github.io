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
            <p>Спасибо! <br> Наш менеджер скоро свяжется с вами</p>
            <a href='../index.html'>назад</a>
        </div>
    </div>
</body>

</html>

<?php
        $user_name = $_POST['user_name'];
        $to = "salvadoregunacci@gmail.com";
        $phone = $_POST['user_phone'];
        $message = "Имя пользователя: $user_name" . "\r\n" .
                   "Телефон: $phone";
        mail($to, "Перезвоните мне!", $message);
?>