angular.module('checkout').directive('submitOrder', function(){
	return{
		scope:{
			showShipping: '=',
			showReview: '=',
			showBilling: '='
		},
		templateUrl: '../app/checkout/submitOrder/submitOrder.html',
		controller: 'submitOrderController',
		controllerAs: 'soc',
		replace:true,
		bindToController: true
	}
})
.controller('submitOrderController', ['checkoutManager','$state', function(checkoutManager, $state){
	
	this.submitCheckout = function(){
		checkoutManager.submitCheckout().then(function(){
			$state.go('confirmation')
		},
		function(){
		//error 
		});
	}
	this.back
}]);