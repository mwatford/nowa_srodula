<?php
  header('Content-Type: text/html; charset=utf-8');
  $headers = array(
    'X-Mailer' => 'PHP/' . phpversion(),
    'Content-type' => 'text/html; charset=utf-8',
    'MIME-Version' => '1.0'
);

  $_POST  = filter_input_array(INPUT_POST, FILTER_SANITIZE_STRING);
  $name = $_POST['name'];
  $email = $_POST['email'];
  $phone = $_POST['phone'];
  $surname = $_POST['surname'];
  $message = $_POST['message'];
  $accept = $_POST['accept'];

  $content = "
  Imię: $name
  Nazwisko: $surname
  E-mail: $email
  Telefon: $phone
  Wiadomość: $message
  ";

  mail('biuro@nowa-srodula.pl', "Formularz kontaktowy - Nova Środula", $content, implode("\r\n", $headers));
