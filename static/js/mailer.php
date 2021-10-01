<?php
if( isset($_POST['n']) && isset($_POST['p']) ){
	$n = $_POST['n']; // HINT: use preg_replace() to filter the data
	$p = nl2br($_POST['p']);
	$to ="mohammad.kp8093@gmail.com,mamadkamalipour@gmail.com,info@diba.studio";	
	$from = "info@diba.studio";
	$subject = 'درخواست مشاوره دریافت شد!';
	$message = '<b>نام:</b> '.$n.'<p>شماره تماس:</p> '.$p.';
	$headers = "From: $from\n";
	$headers .= "MIME-Version: 1.0\n";
	$headers .= "Content-type: text/html; charset=iso-8859-1\n";
	if( mail($to, $subject, $message, $headers) ){
		echo "success";
	} else {
		echo "سرور پاسخگو نبود لطفا بعدا دوباره تلاش کنید";
	}
}
?>