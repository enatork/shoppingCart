angular.module('checkout').factory('checkoutManager', ['$q', '$timeout','utility', '$http', function($q, $timeout, utility, $http){
	var cart;
	var billingInfo = {};
	var shippingInfo = {};
	var mockCart =  [{
			'id': 'efg456',
			'itemName': 'widget',
			'quantity': 2,
			'price': 1.99
		},
		{
			'id': 'abc123',
			'itemName': 'gadget',
			'quantity': 3,
			'price': 4.99
		}];
	var getCart = function(){
		//mocked data
		var deferred = $q.defer();

		if(!cart)
		{
			cart = angular.copy(mockCart);
		}

		deferred.resolve(cart);

		return deferred.promise;
	};
	var removeItem = function(itemId){
		var removeIndex = cart.map(function(item) { return item.id; })
		.indexOf(itemId);
		cart.splice(removeIndex, 1);
        //xhr request would go out to also update the cart on the server at this point as well
        return cart;
    };

    var totalPrice = function(){
		var total = 0;
		for(var i =0; i < cart.length; i++)
		{
			total += (cart[i].price * cart[i].quantity);
		}
		return utility.formatMoney(total);
	}

    var saveBilling = function(billing){
    	billingInfo = billing;
    };

     var saveShipping = function(shipping){
    	shippingInfo = shipping;
    };

    var luhn = function (value) {
	  // accept only digits, dashes or spaces
	  if (/[^0-9-\s]+/.test(value)) return false;

		var nCheck = 0, nDigit = 0, bEven = false;
		value = value.replace(/\D/g, "");

		for (var n = value.length - 1; n >= 0; n--) {
			var cDigit = value.charAt(n),
			nDigit = parseInt(cDigit, 10);

			if (bEven) {
				if ((nDigit *= 2) > 9) nDigit -= 9;
			}

			nCheck += nDigit;
			bEven = !bEven;
		}

		return (nCheck % 10) == 0;
	}

	var copyBillingToShipping = function(){
		shippingInfo = angular.copy(billingInfo)
		return shippingInfo;
	}

	var submitCheckout = function(){
		//http post to api
		var formData = utility.extend(billingInfo, shippingInfo);
		//lets just pretend that this is in a format an api wants
		var postData = utility.extend(formData, {items:cart});
		var req = {
 		method: 'POST',
 		url: 'http://fake.checkoutapi.net',
		 headers: {
		   'Content-Type': 'application/json'
		 },
		 data: { postData }
		}
		//http post
		/*$http(req).then(function(resp){
		success
		}, function(error){
		error
		});*/

		var deferred = $q.defer();

		//mock xhr delay
		$timeout(function(){
			deferred.resolve(true);
		}, 2000);

		return deferred.promise;
	}
return {
	getCart: getCart,
	removeItem: removeItem,
	saveBilling: saveBilling,
	saveShipping: saveShipping,
	luhn: luhn,
	copyBillingToShipping: copyBillingToShipping,
	submitCheckout: submitCheckout,
	totalPrice: totalPrice

}
}]);