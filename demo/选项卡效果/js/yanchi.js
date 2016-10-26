function $(id){
	return typeof(id)=="string"?document.getElementById(id):id;
}

window.onload=function(){
	// 标签的索引
	var index=0;
    var timer=null;
    var lis=$("notice-tit").getElementsByTagName("li"),
	    divs=$("notice-con").getElementsByTagName("div");
	    // if (lis.length != divs.length) {
	    // 	return;
	    // }
	// 遍历所有页签
	for(var i = 0;i < lis.length;i++){
		lis[i].id=i;
		lis[i].onmouseover=function(){
			var a=this.id;
			// 用m来引用当前划过的li
			//如果尊在准备执行的定时器，立刻清除，只有当前停留时间大于500MS才开始执行
			if(timer){
				clearTimeout(timer);
				timer=null;
			}
			// 延迟半秒执行
			timer=setTimeout(function(){
	            for (var j = 0; j < lis.length; j++) {
	            	lis[j].className="";
	            	divs[j].style.display="none";
	            }
				lis[a].className="select";
				divs[a].style.display="block";
			},500)
		}
	}
}