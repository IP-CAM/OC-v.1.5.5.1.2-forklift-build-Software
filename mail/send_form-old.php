<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require($_SERVER['DOCUMENT_ROOT'].'/mail/PHPMailer/src/Exception.php');
require($_SERVER['DOCUMENT_ROOT'].'/mail/PHPMailer/src/PHPMailer.php');
require($_SERVER['DOCUMENT_ROOT'].'/mail/PHPMailer/src/SMTP.php');


// Формируем данные для отправки формы
$systemEmail = $_POST["systemEmail"];
$hostname = $_POST["hostname"];
$title = $_POST["title"];
$fio = $_POST["fio"];
$phone = $_POST["phone"];
$email = $_POST["email"];
$city = $_POST["city"];
$company = $_POST["company"];
$comment = $_POST["comment"];
$modelHTML = "";
$modelText = "";
if($_POST["model"] != "none") {
    $modelHTML = '<p style="margin-top: 0;font-weight:bold"><a href="' . urldecode($_POST["modelUrl"]) . '">' . $_POST["model"] . '</a></p>';
    $modelText = $_POST["model"];
}


// Тело письма
$bodyHTML = $modelHTML .
'<table style="border: 1px solid #eee;border-collapse: collapse;">
	<tbody>
		<tr>
			<td style="padding: 5px 50px 5px 10px;background-color: #f9f9f9;border-left: 1px solid #eee;border-bottom: 1px solid #eee;">ФИО</td>
			<td style="padding: 5px 10px;background-color: #f9f9f9;border-left: 1px solid #eee;border-bottom: 1px solid #eee;">' . $fio . '</td>
		</tr>
		<tr>
			<td style="padding: 5px 50px 5px 10px;border-left: 1px solid #eee;border-bottom: 1px solid #eee;">Телефон</td>
			<td style="padding: 5px 10px;border-left: 1px solid #eee;border-bottom: 1px solid #eee;">' . $phone . '</td>
		</tr>
		<tr>
			<td style="padding: 5px 50px 5px 10px;background-color: #f9f9f9;border-left: 1px solid #eee;border-bottom: 1px solid #eee;">Email</td>
			<td style="padding: 5px 10px;background-color: #f9f9f9;border-left: 1px solid #eee;border-bottom: 1px solid #eee;">' . $email . '</td>
		</tr>
		<tr>
			<td style="padding: 5px 50px 5px 10px;border-left: 1px solid #eee;border-bottom: 1px solid #eee;">Город</td>
			<td style="padding: 5px 10px;border-left: 1px solid #eee;border-bottom: 1px solid #eee;">' . $city . '</td>
		</tr>
		<tr>
			<td style="padding: 5px 50px 5px 10px;background-color: #f9f9f9;border-left: 1px solid #eee;border-bottom: 1px solid #eee;">Компания</td>
			<td style="padding: 5px 10px;background-color: #f9f9f9;border-left: 1px solid #eee;border-bottom: 1px solid #eee;">' . $company . '</td>
		</tr>
		<tr>
			<td style="padding: 5px 50px 5px 10px;border-left: 1px solid #eee;">Комментарий</td>
			<td style="padding: 5px 10px;border-left: 1px solid #eee;">' . $comment . '</td>
		</tr>
	</tbody>
</table>';

$bodyText = "$model ФИО: $fio. Телефон: $phone. Email: $email. Город: $city. Компания: $company. Комментарий: $comment";


$mail = new PHPMailer(true); // Passing `true` enables exceptions

try {
    //Server settings
    $mail->SMTPDebug = 2; // Enable verbose debug output
    /*$mail->isSMTP(); // Set mailer to use SMTP
      $mail->Host = 'smtp.mail.ru'; // Specify main and backup SMTP servers
      $mail->SMTPAuth = true; // Enable SMTP authentication
      $mail->Username = 'terezanov@mail.ru'; // SMTP username
      $mail->Password = '111'; // SMTP password
      $mail->SMTPSecure = 'tls'; // Enable TLS encryption, `ssl` also accepted
      $mail->Port = 465; // TCP port to connect to*/

    //Recipients
    $mail->setFrom('from@example.com', $title . " / " . $hostname);
    $mail->addAddress($systemEmail); // send to
    /*$mail->addAddress('joe@example.net', 'Joe User'); // Add a recipient
      $mail->addReplyTo('info@example.com', 'Information');
      $mail->addCC('cc@example.com');
      $mail->addBCC('bcc@example.com');*/

    //Attachments
    /*$mail->addAttachment('/var/tmp/file.tar.gz'); // Add attachments
      $mail->addAttachment('/tmp/image.jpg', 'new.jpg'); // Optional name*/

    //Content
    $mail->isHTML(true); // Set email format to HTML
    $mail->Subject = $title . " / " . $hostname;
    $mail->Body = $bodyHTML;
    $mail->AltBody = $bodyText;
    $mail->CharSet = 'utf-8';

    $mail->send();

    $success = array("status" => "SUCCESS");
    echo json_encode($success);

} catch (Exception $e) {
    $fail = array("status" => "FAIL", "mailerError" => $mail->ErrorInfo);
    echo json_encode($fail);
}
