<?php
// error_reporting(0);

// 检测是否是本机IP;
// if(!preg_match("/202.107.194./i",$_SERVER["REMOTE_ADDR"])){
// 	exit;
// }

//设置时区
if(!function_exists('date_default_timezone_set')){
	date_default_timezone_set('Asia/Shanghai');
}


$hostname = "localhost";
$dbname = "test";
$dbuser = "test";
$dbpwd = "test1";

try{
	$conn = new PDO("mysql:host=$hostname;dbname=$dbname",$dbuser,$dbpwd,array(
		PDO::ATTR_PERSISTENT=>false,PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION
		));
	$conn -> query("set names utf8");
} catch(PDOException $e) {
	exit("Could not connected:".$e->getMessage());
}

require 'function.php';
