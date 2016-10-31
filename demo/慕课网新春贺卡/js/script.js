
window.onload = function() {
	var page1 = document.getElementById('page1');
	var page2 = document.getElementById('page2');
	var page3 = document.getElementById('page3');
	var music = document.getElementById("music");
	var audio = document.getElementsByTagName("audio")[0];
	var lantern = document.getElementById("lantern")

	// 音乐停止时，停止光盘旋转
	audio.addEventListener("ended",function(){
		music.setAttribute("class","")
	},false);

	// 点击音乐图标，控制音乐播放效果和光盘旋转
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
    
    //点击屏幕一跳转效果
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
	        },5500);
		},1000);
    },false)    
};