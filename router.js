define(["backbone"], function(Backbone){
	var Router = Backbone.Router.extend({
		routes:{
			index: "home",
			supermarket: "market",
			buycar: "order",
			mine: "mine",
			疯狂秒杀:"miao"
		},
		home: function(){
			require(["modules/home/index.js"],function(home){
				home()
			});
		},
		market: function(){
			require(["modules/market/market.js"],function(market){
				market()
			});
		},
		order: function(){
			require(["modules/order/gou.js"],function(gou){
				gou()
			});
		},
		mine: function(){
			require(["modules/mine/mine.js"],function(mine){
				mine()
			});
		},
		
	});
	return new Router();
});