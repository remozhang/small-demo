
window.onload=function(){
	waterfall("main","box");
	window.onscroll=function(){
		if(checkScrollSlide){
			

		}

	}
}

function waterfall(parent,box){
	//将main下所有class为box的元素取出来
	var oParent=document.getElementById(parent);
	var oBoxs=getByClass(oParent,"box");
	//计算整个页面显示的列数（页面宽/box宽）
	var oBoxW=oBoxs[0].offsetWidth;
	var cols=Math.floor(document.documentElement.clienWidth/oBoxW)||Math.floor(window.innerWidth/oBoxW);
	// 设置main的宽
	oParent.style.cssText="width:"+oBoxW*cols+"px;margin:0 auto";
	var hArr=[];
	for (var i=0;i<oBoxs.length;i++){
		if (i<cols) {
			hArr.push(oBoxs[i].offsetHeight);
		}
		else{
			var minH=Math.min.apply(null,hArr);
			var index=getMinIndex(hArr,minH);
			oBoxs[i].style.position="absolute";
			oBoxs[i].style.top=minH+"px";
			oBoxs[i].style.left=oBoxW*index+"px";
			hArr[index]+=oBoxs[i].offsetHeight;
		}
	}
}    

// 根据class获取元素
function getByClass(parent,clsName){
	var boxArr=new Array(), //用来存储获取到的所有class为box的元素
		oElements=parent.getElementsByTagName("*");
	for(var i=0;i<oElements.length;i++){
		if (oElements[i].className==clsName) {
			boxArr.push(oElements[i]);
		}
	}
	return boxArr;
}

// 取出最小值的索引
function getMinIndex(arr,val){
	for(var i in arr){
		if (arr[i]==val) {
			return i
		}
	}
}

// 检测是否具备加载数据块的条件
function checkScrollSlide(){
	var oParent=document.getElementById("main");
	var oBoxs=getByClass(oParent,"box");
	var lastBoxH=oBoxs[oBoxs.length-1].offsetTop+Math.floor(oBoxs[oBoxs.length-1].offsetHeight/2);
    var scrollTop=document.body.scrollTop || document.documentElement.scrollTop;
    var height=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight;
    return (lastBoxH<scrollTop+height)?true:false;
}