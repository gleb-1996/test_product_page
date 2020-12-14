<?php

$msg_box = "";
$errors = array();

if ($_POST['user_name'] == "") $errors[] = "Поле 'Ваше имя' не заполнено!";
if ($_POST['user_phone'] == "") $errors[] = "Поле 'Телефон' не заполнено!";

if (empty($errors)) {

    $message  = "Имя: " . $_POST['user_name'] . "<br/>";
    $message .= "Телефон: " . $_POST['user_phone'];

    send_mail($message);

    $msg_box = "<span style='color: green;'>Сообщение успешно отправлено!</span>";
} else {
    $msg_box = "";
    foreach($errors as $one_error){
        $msg_box .= "<span style='color: red;'>$one_error</span><br/>";
    }
}

echo json_encode(array(
    'result' => $msg_box
));

function send_mail($message){

    $mail_to = "karbonelg@mail.ru";
    $subject = "Заказ в один клик";

    $headers= "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/html; charset=utf-8\r\n";
    $headers .= "From: Тестовое письмо <karbonelg@mail.ru>\r\n";

    mail($mail_to, $subject, $message, $headers);
}

?>