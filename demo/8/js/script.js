
window.onload = function() {
	console.log("我叫张雷，2016年本科毕业，现在寻找前端相关工作，望联系！")
	console.log("电话：13726021063")
	console.log("邮箱：814895077@qq.com")
	var page1 = document.getElementById('page1');
	var page2 = document.getElementById('page2');
	var page3 = document.getElementById('page3');
	var music = document.getElementById("music");
	var audio = document.getElementsByTagName("audio")[0];
	var lantern = document.getElementById("lantern")

	// 音乐效果
	audio.addEventListener("ended",function(){
		music.setAttribute("class","")
	},false);

	// onclick属性会有300ms延迟
	// music.onclick = function() {
	// 	if (audio.paused) {
	// 		audio.play();
	// 		this.setAttribute("class","play");
	// 	}else {
	// 		audio.pause();
	// 	    this.setAttribute("class","")
	// 	}
	// }

	music.addEventListener("touchstart",function(event) {
		if (audio.paused) {
			audio.play();
			this.setAttribute("class","play");
		}else {
			audio.pause();
		    this.setAttribute("class","")
		}
	},false);
    
    //点击首屏灯笼效果
    lantern.addEventListener("touchstart",function(event) {
    	this.style.top ="-100%";
    	// this.setAttribute("class","p1_lantern top")
		setTimeout(function(){
		    page1.style.display = "none";
	    	page2.style.display = "block";
	    	page3.style.display = "block";
	    	page3.style.top = "100%";
	        
	        setTimeout(function() {
				page2.setAttribute("class","page fadeout")
				page3.setAttribute("class","page fadeIn")
	        },5000);
		},1000);
    },false)    
};

