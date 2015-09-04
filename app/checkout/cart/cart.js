angular.module('checkout').directive('cart', function(){
	return {
		scope:{},
		templateUrl: '../app/checkout/cart/cart.html',
		controller: 'cartController',
		controllerAs: 'cc',
		replace: true
	}
})
.controller('cartController', ['checkoutManager','utility', function(checkoutManager, utility){
	
	var me = this;
	this.cart = [];
	checkoutManager.getCart().then(function(resp){
		me.cart = resp;
	});


	this.getPrice = function(quantity, price){
		return utility.formatMoney(quantity * price);
	}
	this.totalPrice = function(){
		var total = 0;
		for(var i =0; i < me.cart.length; i++)
		{
			total += (me.cart[i].price * me.cart[i].quantity);
		}
		return utility.formatMoney(total);
	}
	this.removeItem = function(itemId){
		this.cart = checkoutManager.removeItem(itemId);
	}

}]);