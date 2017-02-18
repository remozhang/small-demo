
$(function(){
	getCurrentTime();
	warn();
	operation($("#signup"),"signup.php");
	operation($("#order"),"order.php");
	operation($("#delete"),"delete.php");
	render($("#order,#delete"));
	//检测提交更换验证码
	// $("#change,#signup,#order,#delete").on("click",function(){
	// 	$("#change").attr("src","verify.php?" + Math.random());
	// })
	$("#change").on("click",function(){
		$("#change").attr("src","verify.php?" + Math.random());
	})

})

//按钮操作
function operation(button,target) {
	button.on("click",function(){
		var data = {
			username:$('#username').val(),
			password:$("#password").val(),
			verify:$("#verify").val(),
			depart:$("input[name='depart']:checked").val()
		};
		$.post(target,data,function(res){
				alert(res.msg);
			},"json");
	})
}


//利用取到的服务器数据渲染相关页面参数
function render(button) {
	button.on("click",function(){
		$.get("render.php",'',function(data){
			$(".count font").html(data.count);
			if(data.devCount) {
				$("#dev-list").css("display","block");
				$("#dev-count").html(data.devCount);
				$("#dev-content").html(data.devText);
			} else {
				$("#dev-list").css("display","none");

			}
			if(data.opCount) {
				$("#op-list").css("display","block");
				$("#op-count").html(data.opCount);
				$("#op-content").html(data.opText);
			} else {
				$("#op-list").css("display","none");

			}



		})
	})
}


//获取当前时间渲染时间组件
function getCurrentTime() {
	var time = new Date();
	var year = time.getFullYear();
	var month = time.getMonth()+1;
	var date = time.getDate();	
	var hours = time.getHours();
	if(hours<10) {
		hours = "0"+hours;
	}
	var minutes = time.getMinutes();
	if(minutes<10) {
		minutes = "0"+minutes;
	}
	var seconds = time.getSeconds();
	if(seconds<10) {
		seconds = "0"+seconds;
	}
	var day = time.getDay();
	var week = ["天","一","二","三","四","五","六"];

	var currentTime = "<span>"+year+"年"+month+"月"+date+"日<br/>星期"+week[day]+"<br/><b>"+hours+":"+minutes+":"+seconds+"</b></span>"; 

	$(".time").html(currentTime);

	setTimeout(getCurrentTime,1000);
}

//判断是否符合订餐时间，修改页面中的元素
function warn() {
	var time = new Date(),
		hours = time.getHours(),
		minutes = time.getMinutes(),
		msg = document.getElementById("warn");
		if(!(hours > 9 &&((hours < 15) || (hours == 15 && minutes <30)))) {
			$("#order,#delete").css("display","none");
			$("#warn").show();
		}
}