<?php
header('content-type:application/json;charset=utf-8');
require_once 'setting.php';

// 验证通过恶意修改JS代码而产生的提交
if(!validate_time()){
	exit('{"msg":"虽然时间不在范围内，但你好像是个高手"}');
}
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

if(check("zl_dinner","username = '$username' AND password = '$password'")){
	if(check("zl_record","username = '$username' AND DATE(post_date) = CURDATE()")) {
		$res = del("zl_record","username ='$username'");
		if($res){
			exit('{"msg":"撤销成功！"}');
		} else {
			exit('{"msg":"好像发生了不可名状的错误"}');
		}
	} else {
		exit('{"msg":"你今天还没有订餐呢"}');
	}
} else {
	exit('{"msg":"账号密码输入错误"}');
} 