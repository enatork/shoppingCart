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
	this.isEmpty;
	this.cart = [];
	checkoutManager.getCart().then(function(resp){
		me.cart = resp;
		if(me.cart.length > 0){
			me.isEmpty = false;
		}
		else{
			me.isEmpty = true;
		}
	});


	this.getPrice = function(quantity, price){
		return utility.formatMoney(quantity * price);
	}
	this.totalPrice = function(){	
		return checkoutManager.totalPrice();
	}
	this.removeItem = function(itemId){
		this.cart = checkoutManager.removeItem(itemId);
		me.isCartEmpty();
	}

	this.isCartEmpty = function(){
		if(this.totalPrice() === "0.00"){
			me.isEmpty = true;
		}
		else{
			me.isEmpty = false;
		}
	}
}]);