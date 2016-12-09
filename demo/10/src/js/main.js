$(document).ready(function(){
	$(".owl-carousel").owlCarousel({
		items: 1,
		loop: true,
		autoplay: true,
		autoplayTimeout:2000,
		autoplayHoverPause: true,
	});
})


// 根据屏幕大小选择合适的图片			
// $(function(){
// 	function makeImageResponsive() {
// 		var width = $(window).width();
// 		var img = $(".ad img");
// 		console.log(img)
// 		if (width < 480) {
// 			img.attr("src","img/ad001.png");
// 		}else if (width < 800) {
// 			img.attr("src","img/ad001-m.png")
// 		}else {
// 			img.attr("src","img/ad001-l.png")
// 		}
// 	}

// 	$(window).on("resize load",makeImageResponsive)
// })								
