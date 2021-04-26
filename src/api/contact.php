<?php
  header('Content-Type: text/html; charset=utf-8');
  $headers = array(
    'X-Mailer' => 'PHP/' . phpversion(),
    'Content-type' => 'text/html; charset=utf-8',
    'MIME-Version' => '1.0'
);

  $name = $_POST['name'];
  $email = $_POST['email'];
  $phone = $_POST['phone'];
  $surname = $_POST['surname'];
  $message = $_POST['message'];
  $accept = $_POST['accept'];
  $discount = $_POST['discount'] === "true" ? "Tak" : "Nie";

  $content = "
  Imię: $name
  Nazwisko: $surname
  E-mail: $email
  Telefon: $phone
  Rabat: $discount
  Wiadomość: $message
  ";

  mail('biuro@nowa-srodula.pl', "Formularz kontaktowy - Nova Środula", $content, implode("\r\n", $headers));
