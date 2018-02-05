<?php
$headers .= 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=utf8' . "\r\n";
$to = "zakaz@yale-rus.ru";
$subj = $_POST['subject'];
$subject = $subj . " (Yale-russia.ru)";
$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$city = $_POST['city'];
$company = $_POST['company'];
$comment = $_POST['comment'];
$title = $_POST['title'];


// содержимое
$strBody = '<h3><span style="font-weight:normal;">Модель: </span>' . $title . '</h3>
<table style="border: 1px solid #eee;border-collapse: collapse;">
	<tbody>
		<tr>
			<td style="padding: 5px 50px 5px 10px;background-color: #eee;border-left: 1px solid #eee;font-style: italic;">ФИО</td>
			<td style="padding: 5px 10px;background-color: #eee;border-left: 1px solid #eee;">' . $name . '</td>
		</tr>
		<tr>
			<td style="padding: 5px 50px 5px 10px;border-left: 1px solid #eee;font-style: italic;">Телефон</td>
			<td style="padding: 5px 10px;border-left: 1px solid #eee;">' . $phone . '</td>
		</tr>
		<tr>
			<td style="padding: 5px 50px 5px 10px;background-color: #eee;border-left: 1px solid #eee;font-style: italic;">Email</td>
			<td style="padding: 5px 10px;background-color: #eee;border-left: 1px solid #eee;">' . $email . '</td>
		</tr>
		<tr>
			<td style="padding: 5px 50px 5px 10px;border-left: 1px solid #eee;font-style: italic;">Город</td>
			<td style="padding: 5px 10px;border-left: 1px solid #eee;">' . $city . '</td>
		</tr>
		<tr>
			<td style="padding: 5px 50px 5px 10px;background-color: #eee;border-left: 1px solid #eee;font-style: italic;">Название компании</td>
			<td style="padding: 5px 10px;background-color: #eee;border-left: 1px solid #eee;">' . $company . '</td>
		</tr>
		<tr>
			<td style="padding: 5px 50px 5px 10px;border-left: 1px solid #eee;font-style: italic;">Комментарий</td>
			<td style="padding: 5px 10px;border-left: 1px solid #eee;">' . $comment . '</td>
		</tr>
	</tbody>		
</table>';


if (mail($to, $subject, $strBody, $headers)) {
    echo '<span class="popup__result_ok">Сообщение успешно отправлено!</span>';
} else {
    echo '<span class="popup__result_err">Произошла ошибка, попробуйте еще раз</span>';
}
