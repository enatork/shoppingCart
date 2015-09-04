angular.module('checkout').directive('billing' ,function(){
	return{
		scope:{
			showShipping : '=',
			showBilling : '='
		},
		templateUrl: '../app/checkout/billing/billingForm.html',
		controller: 'billingController',
		controllerAs: 'bc',
		replace: true,
		bindToController: true
	}
})
.controller('billingController', ['checkoutManager','utility', function(checkoutManager, utility){
	var me = this;
	this.countries = countries;
	this.states = states;
	this.creditCards = creditCards;
	this.creditCardYears = utility.getYears();
	this.creditCardMonths = months;

	this.saveBilling = function(form){
		if(checkoutManager.luhn(form.creditCardNumber)){	
			checkoutManager.saveBilling(form);
			me.showShipping = true;
		}
		else{
			// return message to user about cc number
		}
	}
}]);