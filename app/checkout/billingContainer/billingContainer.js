angular.module('checkout').directive('billingContainer', function(){
	return{
		scope:{},
		templateUrl: '../app/checkout/billingContainer/billingContainer.html',
		controller: 'billingContainerController',
		controllerAs: 'bcc',
		replace:true
	}
})
.controller('billingContainerController', ['checkoutManager','$state' ,function(checkoutManager, $state){
	this.showBilling = true;
	this.showShipping = false;
	this.showReview = false;


	if(checkoutManager.totalPrice() === "0.00")
	{
		$state.go('checkout')
	}

}]);