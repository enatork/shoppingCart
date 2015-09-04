angular.module('checkout').directive('billingContainer', function(){
	return{
		scope:{},
		templateUrl: '../app/checkout/billingContainer/billingContainer.html',
		controller: 'billingContainerController',
		controllerAs: 'bcc',
		replace:true
	}
})
.controller('billingContainerController', function(){
	this.showBilling = true;
	this.showShipping = false;
	this.showReview = false;
});