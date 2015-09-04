angular.module('checkout').directive('shipping', function(){
	return{
		scope:{ 
			showShipping: '=',
			showReview: '=',
			showBilling: '='
			},
		templateUrl: '../app/checkout/shipping/shipping.html',
		controller: 'shippingController',
		controllerAs: 'sc',
		replace: true,
		bindToController: true
	}
})
.controller('shippingController', ['checkoutManager', 'utility', function(checkoutManager, utility){
	
	var me = this;
	this.countries = countries;
	this.states = states;
	this.creditCards = creditCards;
	this.creditCardYears = utility.getYears();
	this.creditCardMonths = months;

	this.addressSameAsBilling = function(checked){
		if(checked){
			var shippingInfo = checkoutManager.copyBillingToShipping();
			me.shippingForm = {
				shippingCountry : shippingInfo.country,
				shippingState : shippingInfo.state,
				shippingAddress : shippingInfo.address,
				shippingZip : shippingInfo.zip,
				shippingCity : shippingInfo.city,
				shippingName: shippingInfo.name
			}
		}	
		else{
			me.shippingForm = {
				shippingCountry : '',
				shippingState : '',
				shippingAddress : '',
				shippingZip : '',
				shippingCity : '',
				shippingName: ''
			}
		}
	}
	this.saveShipping =function(shippingForm){
			checkoutManager.saveShipping(shippingForm);
			me.showReview = true;
			me.showBilling = true;
			me.showShipping = true;

	}
}]);