<?php
$headers .= 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=utf8' . "\r\n";
$to = "zakaz@yale-rus.ru";
$subject = "Запрос стоимости (Yale-rus.ru)";
$carriage = $_POST['carriage'];
$forkLength = $_POST['forkLength'];
$fio = $_POST['fio'];
$company = $_POST['company'];
$city = $_POST['city'];
$phone = $_POST['phone'];
$email = $_POST['email'];


// содержимое
$strBody = '<h3><span style="font-weight:normal;">Запрос стоимости</h3>
<table style="border: 1px solid #eee;border-collapse: collapse;">
	<tbody>
		<tr>
			<td style="padding: 5px 50px 5px 10px;background-color: #eee;border-left: 1px solid #eee;font-style: italic;">Класс каретки</td>
			<td style="padding: 5px 10px;background-color: #eee;border-left: 1px solid #eee;">' . $carriage . '</td>
		</tr>
		<tr>
			<td style="padding: 5px 50px 5px 10px;border-left: 1px solid #eee;font-style: italic;">Длина вил</td>
			<td style="padding: 5px 10px;border-left: 1px solid #eee;">' . $forkLength . '</td>
		</tr>
		<tr>
			<td style="padding: 5px 50px 5px 10px;background-color: #eee;border-left: 1px solid #eee;font-style: italic;">ФИО</td>
			<td style="padding: 5px 10px;background-color: #eee;border-left: 1px solid #eee;">' . $fio . '</td>
		</tr>
		<tr>
			<td style="padding: 5px 50px 5px 10px;border-left: 1px solid #eee;font-style: italic;">Название организации</td>
			<td style="padding: 5px 10px;border-left: 1px solid #eee;">' . $company . '</td>
		</tr>
		<tr>
			<td style="padding: 5px 50px 5px 10px;background-color: #eee;border-left: 1px solid #eee;font-style: italic;">Город</td>
			<td style="padding: 5px 10px;background-color: #eee;border-left: 1px solid #eee;">' . $city . '</td>
		</tr>
		<tr>
			<td style="padding: 5px 50px 5px 10px;border-left: 1px solid #eee;font-style: italic;">Телефон</td>
			<td style="padding: 5px 10px;border-left: 1px solid #eee;">' . $phone . '</td>
		</tr>
		<tr>
			<td style="padding: 5px 50px 5px 10px;background-color: #eee;border-left: 1px solid #eee;font-style: italic;">E-mail</td>
			<td style="padding: 5px 10px;background-color: #eee;border-left: 1px solid #eee;">' . $email . '</td>
		</tr>
	</tbody>
</table>';


if (mail($to, $subject, $strBody, $headers)) {
    echo '<span class="popup__result_ok">Сообщение успешно отправлено!</span>';
} else {
    echo '<span class="popup__result_err">Произошла ошибка, попробуйте еще раз</span>';
}
