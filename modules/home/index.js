define(["text!./index.html","$css!./index.css","../../js/jquery.lazyload.js","$css!./swiper.min.css","./swiper.min.js"], function(homePage){
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
		$(".index_").html(homePage).show().siblings("div").hide();
		$.get("js/homeData.json",null,function(data){
			console.log(data)
				$(".swiper-container").eq(0).load("baidu.html",function(){
					var htmlStr = baidu.template("firstTmp", data);
		  			$(".swiper-container").eq(0).html(htmlStr)
		  			var mySwiper = new Swiper('.swiper-container', {
						direction: 'horizontal',
					    loop: true,
					    autoplay:3000,
					    speed:500,
					    pagination : '.swiper-pagination',
					    paginationClickable :true,
				   })
				})
				$(".index_ul1").eq(0).load("baidu.html",function(){
					var htmlStr = baidu.template("secondTmp", data);
		  			$(".index_ul1").eq(0).html(htmlStr)

				})

			$("#cont").load("baidu.html",function(){
			var htmlStr = baidu.template("threeTmp", data);
  			$("#cont").html(htmlStr)
  			$("img.lazy").lazyload()
  				$(".jia").on("click",f)

		})

		})
	}

});
	// localStorage.clear()
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
				data1[$(this).attr("id")]=[1,$(this).attr("imga"),$(this).attr("name"),$(this).attr("name"),$(this).attr("price")];
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

