
define(["text!./super.html", "$css!./super.css"], function(marketPage){
	$(".super_").html(marketPage).show().siblings("div").hide();
	function nu(){
		var num=0;
		for( p in JSON.parse(localStorage.gou)){
				num  += Number(JSON.parse(localStorage.gou)[p][0])
			}
			$(".num").eq(0).html(num)
		}
		if(typeof localStorage.gou!="undefined"){
		nu();

		}

	return function(){
		$.get("js/getCategoryProducts.json",null,function(data){
			$(".super_div_ul").eq(0).load("baidu.html",function(){
				var str = baidu.template("fourTmp",data)
				$(".super_div_ul").eq(0).html(str)
				$(".jia").on("click",f)
			})
		})
		$(".super_").html(marketPage).show().siblings("div").hide();
		
	}
});
function f(){
	var num=0;
	var flag = true;
	
		if(typeof localStorage.gou=="undefined"){
			var data = {}
			data[$(this).attr("id")]=[1,$(this).attr("imga"),$(this).attr("name"),$(this).attr("price")]
			localStorage.gou = JSON.stringify(data)

		}else{
			var data1 = JSON.parse(localStorage.gou)
			for(p in data1){
				if(p==$(this).attr("id")){
					flag = false;
					data1[p][0] = Number(data1[p][0])+1
				}
			}
			if(flag){
				data1[$(this).attr("id")]=[1,$(this).attr("imga"),$(this).attr("name"),$(this).attr("price")];
			}
			localStorage.gou = JSON.stringify(data1)
		}
			var num=0;
		for( p in JSON.parse(localStorage.gou)){
				num  += Number(JSON.parse(localStorage.gou)[p][0])
			}
			$(".num").eq(0).html(num)
		if($(".num").eq(0).html()=="0"||$(".num").eq(0).html()==""){
			$(".num").eq(0).hide()
		}else{
			$(".num").eq(0).show()
		}
		return false
	}
