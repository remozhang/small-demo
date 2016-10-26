function $(id){
	return typeof(id)=="string"?document.getElementById(id):id;
}

window.onload=tab;

function tab(){
	//当前高亮显示的页签索引
	var index=0,
		timer=null,
	    lis=$("notice-tit").getElementsByTagName("li"),
	    divs=$("notice-con").getElementsByTagName("div");

    for(var j=0;j<lis.length;j++){
    	lis[j].id=j;
    	lis[j].onmouseover=function(){
    		clearInterval(timer);
	    	for(var k=0;k<lis.length;k++){
	    		lis[k].className=null;
	    		divs[k].style.display="none";
	    	}
	    	this.className="select";
	    	divs[this.id].style.display="block";
	    	console.log(this.id)
	    	index=this.id;
        }
        lis[j].onmouseout=function(){
			timer=setInterval(change,2000)
        }
	}
	//添加定时器，改变当前高亮的索引
	// timer不是函数
	timer=setInterval(change,2000)
	function change(){
		index++;
		if(index>=lis.length){
			index=0; 
		}
	    for (var i = 0; i < lis.length; i++) {
	     	lis[i].className=null;
	     	divs[i].style.display="none";
	     } 
	    lis[index].className="select";
	    divs[index].style.display="block";
	}
}

console.log(index)
