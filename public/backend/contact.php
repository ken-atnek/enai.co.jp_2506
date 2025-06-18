<?php
/*=======================================
* お問い合せフォーム
* URL: public/backend/contact.php
* Referenced src/app/form/page.tsx
* Created: 2025-06-17
* Last updated: 2025-06-17
* ======================================= */


header("Access-Control-Allow-Origin: *"); // CORS対策
header("Content-Type: application/json");

// フォームデータを受け取る
if ($_SERVER["REQUEST_METHOD"] === "POST") {
	$position = isset($_POST["position"]) ? trim($_POST["position"]) : "";
	$positionDetail = isset($_POST["positionDetail"]) ? trim($_POST["positionDetail"]) : "";
	$name = isset($_POST["name"]) ? trim($_POST["name"]) : "";
	$kana = isset($_POST["kana"]) ? trim($_POST["kana"]) : "";
	$email = isset($_POST["email"]) ? trim($_POST["email"]) : "";
	$phone = isset($_POST["phone"]) ? trim($_POST["phone"]) : "";
	$qualification = isset($_POST["qualification"]) ? trim($_POST["qualification"]) : "";
	$education = isset($_POST["education"]) ? trim($_POST["education"]) : "";
	$experience = isset($_POST["experience"]) ? trim($_POST["experience"]) : "";
	$remarks = isset($_POST["remarks"]) ? trim($_POST["remarks"]) : "";
	$motivation = isset($_POST["motivation"]) ? trim($_POST["motivation"]) : "";
	$selfPR = isset($_POST["selfPR"]) ? trim($_POST["selfPR"]) : "";
	$employmentStatus = isset($_POST["employmentStatus"]) ? trim($_POST["employmentStatus"]) : "";
	$desiredChangeDate = isset($_POST["desiredChangeDate"]) ? trim($_POST["desiredChangeDate"]) : "";
	$gender = isset($_POST["gender"]) ? trim($_POST["gender"]) : "";
	$age = isset($_POST["age"]) ? trim($_POST["age"]) : "";
	$zipCode = isset($_POST["zipCode"]) ? trim($_POST["zipCode"]) : "";
	$prefecture = isset($_POST["prefecture"]) ? trim($_POST["prefecture"]) : "";
	$city = isset($_POST["city"]) ? trim($_POST["city"]) : "";
	$addressDetail = isset($_POST["addressDetail"]) ? trim($_POST["addressDetail"]) : "";

	if (empty($position) || empty($positionDetail) || empty($name) || empty($email) || empty($phone) || empty($qualification)) {
		echo json_encode(["success" => false, "error" => "必須項目を入力してください"]);
		exit;
	}

	// 📩 **メールの設定**
	// $to = "ken.atnek@gmail.com";
	$to = "qun@kind.ocn.ne.jp";
	$to_name = "九州運輸";
	$send_date = date("Y/n/j-H:i", time());

	// **エンコーディング設定**
	$orgEncoding = mb_internal_encoding();
	mb_language("uni");
	mb_internal_encoding('UTF-8');

	// **ヘッダー作成**
	$header_from = 'From: "' . mb_encode_mimeheader($name, 'ISO-2022-JP') . '" <no-reply@qun-kumamoto.com>' . "\r\n";
	$header_from .= 'Reply-To: ' . $email;

	// **メール本文**
	$subject = 'お問い合せがありました';
	$mail_body  = "応募フォームより\n";
	$mail_body .= "--------------------\n";
	$mail_body .= "■応募区分: {$position}\n";
	$mail_body .= "■応募職種: {$positionDetail}\n";
	$mail_body .= "■お名前: {$name} 様\n";
	$mail_body .= "■ふりがな: {$kana}\n";
	$mail_body .= "■メールアドレス: {$email}\n";
	$mail_body .= "■電話番号: {$phone}\n";
	$mail_body .= "■郵便番号: {$zipCode}\n";
	$mail_body .= "■都道府県: {$prefecture}\n";
	$mail_body .= "■市区町村: {$city}\n";
	$mail_body .= "■番地・建物名: {$addressDetail}\n";
	$mail_body .= "■性別: {$gender}\n";
	$mail_body .= "■年齢: {$age}\n";
	$mail_body .= "■転職希望時期: {$desiredChangeDate}\n";
	$mail_body .= "■現在の就業状況: {$employmentStatus}\n";
	$mail_body .= "■資格: {$qualification}\n";
	$mail_body .= "■最終学歴: {$education}\n";
	$mail_body .= "■職務経歴: {$experience}\n";
	$mail_body .= "■志望動機: {$motivation}\n";
	$mail_body .= "■自己PR: {$selfPR}\n";
	if ($remarks != "") {
		$mail_body .= "■希望条件やご質問など:\n{$remarks}\n";
	}
	$mail_body .= "--------------------\n";
	$mail_body .= $send_date . "\n";
	$mail_body  = str_replace("\r\n", "\n", $mail_body);

	// **宛先**
	$to_name = mb_encode_mimeheader($to_name, 'ISO-2022-JP');
	$send_target = $to_name . ' <' . $to . '>';

	// **送信**
	$rslt = mb_send_mail($send_target, $subject, $mail_body, $header_from, "-fno-reply@qun-kumamoto.com");
	// **エンコーディングを元に戻す**
	mb_internal_encoding($orgEncoding);

	// **送信結果を適切に出力**
	if ($rslt) {
		echo json_encode(["success" => true, "message" => "メール送信成功！"]);
	} else {
		echo json_encode(["success" => false, "error01" => "メール送信に失敗しました"]);
	}
} else {
	echo json_encode(["success" => false, "error02" => "無効なリクエスト"]);
}
