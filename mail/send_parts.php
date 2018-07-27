<?php

// Формируем данные для отправки формы
$headers .= 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=utf8' . "\r\n";
$systemEmail = $_POST["systemEmail"];
$hostname = $_POST["hostname"];
$title = $_POST["title"];
$subject = $title . " / " . $hostname;
$model = $_POST["model"];
$year = $_POST["year"];
$serial = $_POST["serial"];
$org = $_POST["org"];
$phone = $_POST["phone"];
$email = $_POST["mail"];
$city = $_POST["city"];
$listOfParts = $_POST["listOfParts"];
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
			<td style="padding: 5px 50px 5px 10px;background-color: #f9f9f9;border-left: 1px solid #eee;border-bottom: 1px solid #eee;">Модель техники</td>
			<td style="padding: 5px 10px;background-color: #f9f9f9;border-left: 1px solid #eee;border-bottom: 1px solid #eee;">' . $model . '</td>
		</tr>
		<tr>
			<td style="padding: 5px 50px 5px 10px;border-left: 1px solid #eee;border-bottom: 1px solid #eee;">Год выпуска</td>
			<td style="padding: 5px 10px;border-left: 1px solid #eee;border-bottom: 1px solid #eee;">' . $year . '</td>
		</tr>
		<tr>
			<td style="padding: 5px 50px 5px 10px;background-color: #f9f9f9;border-left: 1px solid #eee;border-bottom: 1px solid #eee;">Серийный номер</td>
			<td style="padding: 5px 10px;background-color: #f9f9f9;border-left: 1px solid #eee;border-bottom: 1px solid #eee;">' . $serial . '</td>
		</tr>
		<tr>
			<td style="padding: 5px 50px 5px 10px;border-left: 1px solid #eee;border-bottom: 1px solid #eee;">Организация</td>
			<td style="padding: 5px 10px;border-left: 1px solid #eee;border-bottom: 1px solid #eee;">' . $org . '</td>
		</tr>
		<tr>
			<td style="padding: 5px 50px 5px 10px;background-color: #f9f9f9;border-left: 1px solid #eee;border-bottom: 1px solid #eee;">Телефон</td>
			<td style="padding: 5px 10px;background-color: #f9f9f9;border-left: 1px solid #eee;border-bottom: 1px solid #eee;">' . $phone . '</td>
		</tr>
		<tr>
			<td style="padding: 5px 50px 5px 10px;background-color: #f9f9f9;border-left: 1px solid #eee;border-bottom: 1px solid #eee;">Email</td>
			<td style="padding: 5px 10px;background-color: #f9f9f9;border-left: 1px solid #eee;border-bottom: 1px solid #eee;">' . $email . '</td>
		</tr>
		<tr>
			<td style="padding: 5px 50px 5px 10px;background-color: #f9f9f9;border-left: 1px solid #eee;border-bottom: 1px solid #eee;">Город</td>
			<td style="padding: 5px 10px;background-color: #f9f9f9;border-left: 1px solid #eee;border-bottom: 1px solid #eee;">' . $city . '</td>
		</tr>
		<tr>
			<td style="padding: 5px 50px 5px 10px;border-left: 1px solid #eee;">Список требуемых запчастей </td>
			<td style="padding: 5px 10px;border-left: 1px solid #eee;">' . $listOfParts . '</td>
		</tr>
	</tbody>
</table>';

$bodyText = "$model Год выпуска: $year. Серийный номер: $serial. Организация: $org. Телефон: $phone. Email: $mail. Город: $city. Список требуемых запчастей: $listOfParts";



if (mail($systemEmail, $subject, $bodyHTML, $headers)) {
    $success = array("status" => "SUCCESS");
    echo json_encode($success);
} else {
    $fail = array("status" => "FAIL", "mailerError" => $mail->ErrorInfo);
    echo json_encode($fail);
}