<?php
$headers .= 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=utf8' . "\r\n";
$to = "zakaz@yale-rus.ru";
$subject = "Форма по запчастям с сайта Yale-rus.ru";
$model = $_POST['model'];
$year = $_POST['year'];
$number = $_POST['number'];
$company = $_POST['company'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$city = $_POST['city'];
$spares = $_POST['spares'];


//$content = $model . $year . $number . $phone . $email . $city . $company . $spares;

// содержимое
$strBody = '<h3>Заказ запчастей Lema</h3>
<table style="border: 1px solid #eee;border-collapse: collapse;">
	<tbody>
	  <tr>
  			<td style="padding: 5px 50px 5px 10px;background-color: #eee;border-left: 1px solid #eee;">Марка и модель техники</td>
  			<td style="padding: 5px 10px;background-color: #eee;border-left: 1px solid #eee;">' . $model . '</td>
  	</tr>
		<tr>
			<td style="padding: 5px 50px 5px 10px;border-left: 1px solid #eee;">Год выпуска</td>
			<td style="padding: 5px 10px;border-left: 1px solid #eee;">' . $year . '</td>
		</tr>
		<tr>
      <td style="padding: 5px 50px 5px 10px;background-color: #eee;border-left: 1px solid #eee;">Серийный номер техники</td>
      <td style="padding: 5px 10px;background-color: #eee;border-left: 1px solid #eee;">' . $number . '</td>
    </tr>
    <tr>
      <td style="padding: 5px 50px 5px 10px;border-left: 1px solid #eee;">Организация</td>
      <td style="padding: 5px 10px;border-left: 1px solid #eee;">' . $company . '</td>
    </tr>
		<tr>
			<td style="background-color: #eee;padding: 5px 50px 5px 10px;border-left: 1px solid #eee;">Контактный телефон</td>
			<td style="background-color: #eee;padding: 5px 10px;border-left: 1px solid #eee;">' . $phone . '</td>
		</tr>
		<tr>
			<td style="padding: 5px 50px 5px 10px;border-left: 1px solid #eee;">Email</td>
			<td style="padding: 5px 10px;border-left: 1px solid #eee;">' . $email . '</td>
		</tr>
		<tr>
			<td style="background-color: #eee;padding: 5px 50px 5px 10px;border-left: 1px solid #eee;">Город</td>
			<td style="background-color: #eee;padding: 5px 10px;border-left: 1px solid #eee;">' . $city . '</td>
		</tr>
		<tr>
			<td style="padding: 5px 50px 5px 10px;border-left: 1px solid #eee;">Список требуемых запчастей</td>
			<td style="padding: 5px 10px;border-left: 1px solid #eee;">' . $spares . '</td>
		</tr>
	</tbody>
</table>';


//отправка
if (mail($to, $subject, $strBody, $headers)) {
    echo 'true';
} else {
    echo '<span class="popup__result_err">Произошла ошибка, попробуйте еще раз</span>';
}