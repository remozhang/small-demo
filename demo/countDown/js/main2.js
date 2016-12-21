window.onload = function() {
	showTime();
	function addZero(i) {
		return i < 10 ? "0" + i : i + "";
	}

	function showTime() {
		var nowTime = new Date();
		var endTime = new Date("2017/1/28");
		var leftTime = ((endTime.getTime()-nowTime.getTime())/1000);
		var time = setInterval(function() {
			leftTime -= 1;
      		var d = Math.floor(leftTime/(24*60*60));
      		var h = Math.floor(leftTime/(60*60)%24);
      		var m = Math.floor(leftTime/60%60);
      		var s = Math.floor(leftTime%60);
            d = addZero(d);
            h = addZero(h);
            m = addZero(m);
            s = addZero(s);
      		var countDown = document.getElementById("countDown");
      		if (leftTime > 0) {
	      		countDown.innerHTML = d + "天" + h + "小时" + m + "分钟" + s + "秒";
            } else {
            	countDown.innerHTML = "春天到了！";
            	clearInterval(time);
            }
		},1000);
	}
}