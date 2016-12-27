$(function(){
	var backButton=$(".back-to-top"),
		main1=$("#main1"),
		main2=$("#main2"),
		main3=$("#main3"),
		main4=$("#main4"),
		main5=$("#main5"),
		nav=$("#navbar"),
		down=$(".down"),
		blog=$("#blog");
	
	// 返回顶部栏  
	backButton.on("click",function() {
	    $("html,body").animate({
	    	scrollTop:0
	    },800)
	});

	// 导航栏点击效果
	main1.on("click",function() {
	    $("html,body").animate({
	    	scrollTop:$(window).height()
	    },800)
	})

	main2.on("click",function() {
	    $("html,body").animate({
	    	scrollTop:$(window).height()+850
	    },800)
	})

	main3.on("click",function() {
	    $("html,body").animate({
	    	scrollTop:$(window).height()+850+800
	    },800)
	})

	main4.on("click",function() {
	    $("html,body").animate({
	    	scrollTop:$(window).height()+850+800+800
	    },800)
	})

	main5.on("click",function() {
	    $("html,body").animate({
	    	scrollTop:$(window).height()+850+800+800+800
	    },800)
	})

	// 首页下拉效果
	down.on("click",function() {
	    $("html,body").animate({
	    	scrollTop:$(window).height()
	    },800)
	})
   
	// 导航栏，返回按钮首页效果
	$(window).on("scroll",function(){
		if ( $(window).height() > $(window).scrollTop())
		{
			nav.hide();
			backButton.hide();
		}
		else
		{
			nav.show();
		    backButton.show();
		}
	})
	
    // 博客按钮
	blog.on("click",function(){
		alert("博客正在努力建设中。。。请稍后");
		return false;
	})

    // 触发
	$(window).scroll();
	$(window).resize();
});

	// 调节首尾页满屏
$(window).resize(function(){ 
	var firstpage=$("firstpage");
	    lastpage=$("lastpage");

	//首末页满屏
	$("#firstpage").css("height", $(window).height());
	$("#lastpage").css("height", $(window).height());
});
