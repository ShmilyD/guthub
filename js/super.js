
define(["text!./../super.html","$css!./../css/super.css"], function(super){
	console.log(super)
	$(".main").html(homePage).show().siblings("div").hide();
	// return {
	// 		init:function(){
	// 			console.log(1)
	// 		}
	// 	}
	return function f(){
		console.log('aaa')
	}
});