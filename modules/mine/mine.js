
define(["text!./mine.html", "$css!./mine.css"], function(minePage){
	$(".bucar_").html(minePage).show().siblings("div").hide();
	return function(){
		$(".bucar_").html(minePage).show().siblings("div").hide();
	}
});