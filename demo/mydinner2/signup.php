<?php
header('content-type:application/json;charset=utf-8');
require_once 'setting.php';

//验证账号密码是否输入以及验证码
validate();

$depart = $_POST['depart'];
if(!get_magic_quotes_gpc()){
	$username = addslashes(trim($_POST['username']));
	$password = addslashes(trim($_POST['password']));
} else {
	$username = trim($_POST['username']);
	$password = trim($_POST['password']);
}

if(check("zl_dinner",("username = '$username'"))) {
	exit('{"msg":"我的天老爷，你的名字太抢手了！"}');
}else{
	$res = add("zl_dinner",("'','$username','$password','$depart',NOW()"));
	if($res) {
		echo '{"msg":"注册成功"}';
	} else {
		exit('{"msg":"好像发生了什么不可预知的状况！重试一遍看看"}');
	}
}
