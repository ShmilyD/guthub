define(["text!./index.html","$css!./index.css","../../js/jquery.lazyload.js","$css!./swiper.min.css","./swiper.min.js"], function(homePage){
	var latitude = 0 ;
 var longitude = 0 ;
 var localName;
    wx.getLocation({
	    type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
	    success: function (res) {
	         latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
	         longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
	        var speed = res.speed; // 速度，以米/每秒计
	        var accuracy = res.accuracy; // 位置精度
	        	localName =res.name;
	    }
	});
   wx.openLocation({
	    latitude: latitude, // 纬度，浮点数，范围为90 ~ -90
	    longitude:longitude, // 经度，浮点数，范围为180 ~ -180。
	    name: name, // 位置名
	    address: '', // 地址详情说明
	    scale: 1, // 地图缩放级别,整形值,范围从1~28。默认为最大
	    infoUrl: '' // 在查看位置界面底部显示的超链接,可点击跳转
    });

	$("#local").html(localName);


	
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

