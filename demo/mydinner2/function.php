<?php

/**
 * 检查订单，用户名是否有重复 或者 验证已有账号密码 
 * 返回符合条件的数量
 */
function check($table,$condition)
{
	global $conn;
	$sql = "SELECT * FROM $table WHERE $condition";
	$stmt = $conn -> query($sql);
	return $stmt->rowCount();
}

/**
 * 选出符合条件的值
 */
function sel($field,$table,$condition)
{
	global $conn;
	$sql = "SELECT $field FROM $table WHERE $condition";
	$stmt = $conn -> query($sql);
	return $stmt->fetchAll(PDO::FETCH_ASSOC);
}
/**
 * 添加用户名 或者 提交订单
 *@param dinner$values(id,username,password,depart_id,created)
 *@param record$values(id,username,post_date)
 *
 */
function add($table,$values)
{
	global $conn;
	$sql = "INSERT INTO $table VALUES($values)";
	$stmt = $conn -> exec($sql);
	return $stmt;
}

/**
 * 删除当日订单
 */
function del($table,$condition)
{
	global $conn;
	$sql = "DELETE FROM $table WHERE $condition AND DATE(post_date) = CURDATE()";
	$stmt = $conn ->exec($sql);
	return $stmt;
}

/**
 * 验证账号密码是否为空以及验证码是否正确
 */
function validate(){

	session_start();
	if(!isset($_POST['username']) || empty($_POST['username']) || !isset($_POST['password']) || empty($_POST['password'])) {
		exit('{"msg":"账号密码不能为空"}');
	}

	if($_SESSION['verify'] == strtolower($_POST['verify'])){
		return true;
	} else{
		exit('{"msg":"验证码输入错误！"}');
	}
}


/**
 * 从服务器读取相关信息渲染主页相关内容
 * 返回数据的数组值
 */
function render()
{
	$count = check("zl_record","DATE(post_date) = CURDATE()");
	$devCount = check("zl_dinner AS a,zl_record AS b","DATE(b.post_date) = CURDATE() AND a.depart_id = '1' AND a.username = b.username");
	$opCount = check("zl_dinner AS a,zl_record AS b","DATE(b.post_date) = CURDATE() AND a.depart_id = '2' AND a.username = b.username");
	$devRows = sel("*","zl_dinner AS a,zl_record AS b","DATE(b.post_date) = CURDATE() AND a.depart_id = '1' AND a.username = b.username");
	$opRows = sel("*","zl_dinner AS a,zl_record AS b","DATE(b.post_date) = CURDATE() AND a.depart_id = '2' AND a.username = b.username");

	$devText = "<ul>";
	$opText = "<ul>";
	foreach($devRows as $devRow ){
		$devText .= "<li>".$devRow['username']."&nbsp".date("H:i:s",strtotime($devRow['post_date']))."</li>" ; 
	}
	foreach($opRows as $opRow ){
		$opText .= "<li>".$opRow['username']."&nbsp".date("H:i:s",strtotime($opRow['post_date']))."</li>"; 
	}
	$devText .= "</ul>";
	$opText .= "</ul>";

	$res = array("count"=>$count,"devText"=>$devText,"opText"=>$opText,"devRows"=>$devRows,"opRows" =>$opRows,"devCount"=>$devCount,"opCount"=>$opCount);
	return $res;
}

/**
 * 验证时间
 */
function validate_time($start="09:00:00",$end="15:30:00") {
	$start = strtotime($start);
  	$end = strtotime($end);
	$now = strtotime(date('H:i:s',time()));

	if($now > $start && $now < $end) {
		return true;
	} else {
		return false;
	}
}