<?php

// Формируем данные для отправки формы
$headers .= 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=utf8' . "\r\n";
$systemEmail = $_POST["systemEmail"];
$hostname = $_POST["hostname"];
$title = $_POST["title"];
$subject = $title . " / " . $hostname;
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

$bodyText = "$modelText ФИО: $fio. Телефон: $phone. Email: $email. Город: $city. Компания: $company. Комментарий: $comment";



if (mail($systemEmail, $subject, $bodyHTML, $headers)) {
    $success = array("status" => "SUCCESS");
    echo json_encode($success);
} else {
    $fail = array("status" => "FAIL", "mailerError" => $mail->ErrorInfo);
    echo json_encode($fail);
}