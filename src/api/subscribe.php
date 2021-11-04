<?php
  header('Content-Type: text/html; charset=utf-8');
  $headers = array(
    'X-Mailer' => 'PHP/' . phpversion(),
    'Content-type' => 'text/html; charset=utf-8',
    'MIME-Version' => '1.0'
);

  $_POST  = filter_input_array(INPUT_POST, FILTER_SANITIZE_STRING);
  $email = $_POST['email'];

  $content = "E-mail: $email";

  mail('biuro@nowa-srodula.pl', "Nowa subskrypcja - Nova Środula", $content, implode("\r\n", $headers));
