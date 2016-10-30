
window.onload = function() {
	var music = document.getElementById("music");
	var audio = document.getElementsByTagName("audio")[0];
	music.onclick = function() {
		if (audio.paused) {
			audio.play();
			this.setAttribute("class","play");
		}else {
			audio.pause();
		    this.setAttribute("class","")
		}
	}
};