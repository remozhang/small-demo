<?php
require_once 'setting.php';
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>晚餐预订</title>
	<link rel="stylesheet" type="text/css" href="css/main.css">
</head>
<body>
	<div class="warpper">
		<div class="header clearfix">
			<div class="header-left">
				<div class="time-box"><div class="time"></div></div>
				<div class="count">共有
				<font size="20px" color="green"><?php $res = render(); echo $res['count']; ?></font>
				人订餐</div>
			</div>
			<div class="header-right">
				<div class="slogan">
					<h1>晚餐预订</h1>
					<p>注意：我们的订餐时间是在<font color="red">9:00-15:30</font></p>
					<p>过了这个时间就不能再定了</p>
					<p>还有请大家<font color="red" >不要恶作剧</font>,退订的时候把别人也给退订了</p>
				</div>
			</div>
		</div>
		<div class="content">
			<div id="warn">Sorry,不在订餐时间中</div>
			<div class="action clearfix">
				<div class="input-group">
					<div class="item">
						<label for="username">姓 名</label>
						<input type="text" name="username" id="username">
					</div>
					<div class="item">
						<label for="password">密 码</label>
						<input type="password" name="password" id="password">
					</div>
					<div class="item">
						<label for="depart">部 门</label>
						<label><input type="radio" name="depart" value="1" checked="true">开发部</label>
						<label><input type="radio" name="depart" value="2">运维部</label>
					</div>
					<div class="item">
						<label for="verify">验证码</label>
						<input type="text" name="verify" id="verify" maxlength="4" width="156">
						<img src="verify.php" id="change" title="看不清，点击更换">
					</div>
				</div>
				<div class="button-group clearfix">
					<button class="operation" id="signup">注册</button>
					<button class="operation" id="order">订餐</button>
					<button class="operation" id="delete">撤销</button>
					<button class="operation" id="book">借书</button>
					<div class="remember"><label><input type="checkbox" name="remember" id="remember">记住我</label></div>
				</div>
			</div>
			<div class="transition"><img src="img/form_bottom.gif"></div>
			<div class="record-list">
				<div id="dev-list" <?php if(!$res['devCount']) {echo 'style="display:none"';} ?> >
					<h2>开发部共<font color="green" size="20px" id="dev-count"><?php print_r($res['devCount']) ?></font>人订餐</h2>
					<div id="dev-content"><?php echo $res['devText'] ?></div>
					<img src="img/leaf.gif">
				</div>
				<div id="op-list" <?php if(!$res['opCount']) {echo 'style="display:none"';} ?> >
					<h2>运维部共<font color="green" size="20px" id="op-count"><?php print_r($res['opCount']) ?></font>人订餐</h2>
					<div id="op-content"><?php echo $res['opText'] ?></div>
					<img src="img/leaf.gif">
				</div>
			</div>
		</div>
		<div class="footer">
			浙江某知名股份有限公司(仅供内部使用)
		</div>
	</div>
	<script src= "http://apps.bdimg.com/libs/jquery/2.1.1/jquery.min.js"></script>
	<script src="main.js"></script>
</body>
</html>