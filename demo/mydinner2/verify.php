<?php
session_start();
getCode(4,70,30);

/**
 * 生成随机验证码
 * @param num $num 验证码字数
 * @param num $w
 * @param num $h
 * @param num $line 绘制干扰线个数，默认为2；
 * 
 */
function getCode($num,$w,$h,$line = 2)
{
	$code = '';
	$str = 'qwertyuiopasdfghjklzxcvbnm123456789';

	//生成随机数,并写入session
	for($i = 0; $i < $num; $i++) {
		$code .= $str[rand(0,strlen($str)-1)];
	}
	$_SESSION['verify'] = $code;

	//生成图片
	header('content-type:image/png;charset=utf-8');
	$im = imagecreatetruecolor($w, $h);
	$black = imagecolorallocate($im, 0, 0, 0);
	$white = imagecolorallocate($im, 255, 255, 255);

	imagefill($im,0,0,$black);

	// //绘制$line条干扰线
	// $style = array($black,$black,$black,$black,$randcol,$randcol,$randcol,$randcol,$randcol);
	// imagesetstyle($im,$style);
	// for ($i=0; $i < $line; $i++) { 
	// 	imageline($im,0,rand(0,$h),$w,rand(0,$h),IMG_COLOR_STYLED);
	// }
	for ($i=0; $i < $line; $i++) { 
		imageline($im,0,rand(0,$h),$w,rand(0,$h),imagecolorallocate($im,rand(0,255),rand(0,255),rand(0,255)));
	}
	

	//绘制80个随机干扰点
	for ($i=0; $i < 80; $i++) { 
		imagesetpixel($im, rand(0,$w), rand(0,$h), imagecolorallocate($im,rand(0,255),rand(0,255),rand(0,255)));
	}

	//将随机数字写入图片
	$strx = rand(5,10);
	
	for ($i=0; $i < $num; $i++) {
		$stry = rand(1,8); 
		imagestring($im,24,$strx,$stry,substr($code,$i,1),$white);
		$strx += rand(10,14);
	}

	imagepng($im);
	imagedestroy($im);
}
