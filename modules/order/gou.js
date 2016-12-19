define(["text!./gou.html", "$css!./gou.css"], function(orderPage){
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

		
	$(".order_").html(orderPage).show().siblings("div").hide();
	return function(){
		$(".order_").html(orderPage).show().siblings("div").hide();
		
		if(typeof localStorage.gou=="undefined"||$(".num").eq(0).html()=="0"){
			$(".num").eq(0).hide()
			$(".gou_none").eq(0).show()
			$(".gou_list").eq(0).hide()

		}else{
			$(".num").eq(0).show()
			$(".gou_none").eq(0).hide()
			$(".gou_list").eq(0).show()
			var data = JSON.parse(localStorage.gou)
			$(".food_list").eq(0).load("baidu.html",function(){
				var info = {info:data}
				var htmlStr = baidu.template("gouBuy",info);
	  			$(".food_list").eq(0).html(htmlStr)
			$(".addAndJian").on("click",addAndJian)

			})
	  			
		}

		
	}
});
function addAndJian(e){
				var index = $(e.target).parent().attr("index")
				var data = JSON.parse(localStorage.gou)
				var s = $(e.target).parent().find("span")
				var val = $(e.target).attr("class")
				console.log(val)
				if(val=="jian"){
					if(data[index][0]=="1"){
						 $(this).parent().parent().parent().remove()
						delete data[index]
					}else{
					data[index][0] = Number(data[index][0])-1
					console.log("jian"+data[index][0] )
				s.html(data[index][0])


					}
				}else{
					if(val=="add"){
					data[index][0] = Number(data[index][0])+1
					s.html(data[index][0])


					}
				}
				localStorage.gou=JSON.stringify(data)

			var num=0;
			for( p in JSON.parse(localStorage.gou)){
				num  += Number(JSON.parse(localStorage.gou)[p][0])
			}
			$(".num").eq(0).html(num)
				console.log($(".num").eq(0).html())
				if($(".num").eq(0).html()=="0"){
					$(".gou_none").eq(0).show()
					$(".gou_list").eq(0).hide()
					$(".num").eq(0).hide()
				}else{

					$(".num").eq(0).show()
				}
			
				return false;
			}