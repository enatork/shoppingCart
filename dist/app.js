var countries = [
{"name": "United States", "code": "US"},
{"name": "Canada", "code": "CA"},
{"name": "Afghanistan", "code": "AF"}, 
{"name": "Åland Islands", "code": "AX"}, 
{"name": "Albania", "code": "AL"}, 
{"name": "Algeria", "code": "DZ"}, 
{"name": "American Samoa", "code": "AS"}, 
{"name": "AndorrA", "code": "AD"}, 
{"name": "Angola", "code": "AO"}, 
{"name": "Anguilla", "code": "AI"}, 
{"name": "Antarctica", "code": "AQ"}, 
{"name": "Antigua and Barbuda", "code": "AG"}, 
{"name": "Argentina", "code": "AR"}, 
{"name": "Armenia", "code": "AM"}, 
{"name": "Aruba", "code": "AW"}, 
{"name": "Australia", "code": "AU"}, 
{"name": "Austria", "code": "AT"}, 
{"name": "Azerbaijan", "code": "AZ"}, 
{"name": "Bahamas", "code": "BS"}, 
{"name": "Bahrain", "code": "BH"}, 
{"name": "Bangladesh", "code": "BD"}, 
{"name": "Barbados", "code": "BB"}, 
{"name": "Belarus", "code": "BY"}, 
{"name": "Belgium", "code": "BE"}, 
{"name": "Belize", "code": "BZ"}, 
{"name": "Benin", "code": "BJ"}, 
{"name": "Bermuda", "code": "BM"}, 
{"name": "Bhutan", "code": "BT"}, 
{"name": "Bolivia", "code": "BO"}, 
{"name": "Bosnia and Herzegovina", "code": "BA"}, 
{"name": "Botswana", "code": "BW"}, 
{"name": "Bouvet Island", "code": "BV"}, 
{"name": "Brazil", "code": "BR"}, 
{"name": "British Indian Ocean Territory", "code": "IO"}, 
{"name": "Brunei Darussalam", "code": "BN"}, 
{"name": "Bulgaria", "code": "BG"}, 
{"name": "Burkina Faso", "code": "BF"}, 
{"name": "Burundi", "code": "BI"}, 
{"name": "Cambodia", "code": "KH"}, 
{"name": "Cameroon", "code": "CM"}, 
{"name": "Canada", "code": "CA"}, 
{"name": "Cape Verde", "code": "CV"}, 
{"name": "Cayman Islands", "code": "KY"}, 
{"name": "Central African Republic", "code": "CF"}, 
{"name": "Chad", "code": "TD"}, 
{"name": "Chile", "code": "CL"}, 
{"name": "China", "code": "CN"}, 
{"name": "Christmas Island", "code": "CX"}, 
{"name": "Cocos (Keeling) Islands", "code": "CC"}, 
{"name": "Colombia", "code": "CO"}, 
{"name": "Comoros", "code": "KM"}, 
{"name": "Congo", "code": "CG"}, 
{"name": "Congo, The Democratic Republic of the", "code": "CD"}, 
{"name": "Cook Islands", "code": "CK"}, 
{"name": "Costa Rica", "code": "CR"}, 
{"name": "Cote D\"Ivoire", "code": "CI"}, 
{"name": "Croatia", "code": "HR"}, 
{"name": "Cuba", "code": "CU"}, 
{"name": "Cyprus", "code": "CY"}, 
{"name": "Czech Republic", "code": "CZ"}, 
{"name": "Denmark", "code": "DK"}, 
{"name": "Djibouti", "code": "DJ"}, 
{"name": "Dominica", "code": "DM"}, 
{"name": "Dominican Republic", "code": "DO"}, 
{"name": "Ecuador", "code": "EC"}, 
{"name": "Egypt", "code": "EG"}, 
{"name": "El Salvador", "code": "SV"}, 
{"name": "Equatorial Guinea", "code": "GQ"}, 
{"name": "Eritrea", "code": "ER"}, 
{"name": "Estonia", "code": "EE"}, 
{"name": "Ethiopia", "code": "ET"}, 
{"name": "Falkland Islands (Malvinas)", "code": "FK"}, 
{"name": "Faroe Islands", "code": "FO"}, 
{"name": "Fiji", "code": "FJ"}, 
{"name": "Finland", "code": "FI"}, 
{"name": "France", "code": "FR"}, 
{"name": "French Guiana", "code": "GF"}, 
{"name": "French Polynesia", "code": "PF"}, 
{"name": "French Southern Territories", "code": "TF"}, 
{"name": "Gabon", "code": "GA"}, 
{"name": "Gambia", "code": "GM"}, 
{"name": "Georgia", "code": "GE"}, 
{"name": "Germany", "code": "DE"}, 
{"name": "Ghana", "code": "GH"}, 
{"name": "Gibraltar", "code": "GI"}, 
{"name": "Greece", "code": "GR"}, 
{"name": "Greenland", "code": "GL"}, 
{"name": "Grenada", "code": "GD"}, 
{"name": "Guadeloupe", "code": "GP"}, 
{"name": "Guam", "code": "GU"}, 
{"name": "Guatemala", "code": "GT"}, 
{"name": "Guernsey", "code": "GG"}, 
{"name": "Guinea", "code": "GN"}, 
{"name": "Guinea-Bissau", "code": "GW"}, 
{"name": "Guyana", "code": "GY"}, 
{"name": "Haiti", "code": "HT"}, 
{"name": "Heard Island and Mcdonald Islands", "code": "HM"}, 
{"name": "Holy See (Vatican City State)", "code": "VA"}, 
{"name": "Honduras", "code": "HN"}, 
{"name": "Hong Kong", "code": "HK"}, 
{"name": "Hungary", "code": "HU"}, 
{"name": "Iceland", "code": "IS"}, 
{"name": "India", "code": "IN"}, 
{"name": "Indonesia", "code": "ID"}, 
{"name": "Iran, Islamic Republic Of", "code": "IR"}, 
{"name": "Iraq", "code": "IQ"}, 
{"name": "Ireland", "code": "IE"}, 
{"name": "Isle of Man", "code": "IM"}, 
{"name": "Israel", "code": "IL"}, 
{"name": "Italy", "code": "IT"}, 
{"name": "Jamaica", "code": "JM"}, 
{"name": "Japan", "code": "JP"}, 
{"name": "Jersey", "code": "JE"}, 
{"name": "Jordan", "code": "JO"}, 
{"name": "Kazakhstan", "code": "KZ"}, 
{"name": "Kenya", "code": "KE"}, 
{"name": "Kiribati", "code": "KI"}, 
{"name": "Korea, Democratic People\"S Republic of", "code": "KP"}, 
{"name": "Korea, Republic of", "code": "KR"}, 
{"name": "Kuwait", "code": "KW"}, 
{"name": "Kyrgyzstan", "code": "KG"}, 
{"name": "Lao People\"S Democratic Republic", "code": "LA"}, 
{"name": "Latvia", "code": "LV"}, 
{"name": "Lebanon", "code": "LB"}, 
{"name": "Lesotho", "code": "LS"}, 
{"name": "Liberia", "code": "LR"}, 
{"name": "Libyan Arab Jamahiriya", "code": "LY"}, 
{"name": "Liechtenstein", "code": "LI"}, 
{"name": "Lithuania", "code": "LT"}, 
{"name": "Luxembourg", "code": "LU"}, 
{"name": "Macao", "code": "MO"}, 
{"name": "Macedonia, The Former Yugoslav Republic of", "code": "MK"}, 
{"name": "Madagascar", "code": "MG"}, 
{"name": "Malawi", "code": "MW"}, 
{"name": "Malaysia", "code": "MY"}, 
{"name": "Maldives", "code": "MV"}, 
{"name": "Mali", "code": "ML"}, 
{"name": "Malta", "code": "MT"}, 
{"name": "Marshall Islands", "code": "MH"}, 
{"name": "Martinique", "code": "MQ"}, 
{"name": "Mauritania", "code": "MR"}, 
{"name": "Mauritius", "code": "MU"}, 
{"name": "Mayotte", "code": "YT"}, 
{"name": "Mexico", "code": "MX"}, 
{"name": "Micronesia, Federated States of", "code": "FM"}, 
{"name": "Moldova, Republic of", "code": "MD"}, 
{"name": "Monaco", "code": "MC"}, 
{"name": "Mongolia", "code": "MN"}, 
{"name": "Montserrat", "code": "MS"}, 
{"name": "Morocco", "code": "MA"}, 
{"name": "Mozambique", "code": "MZ"}, 
{"name": "Myanmar", "code": "MM"}, 
{"name": "Namibia", "code": "NA"}, 
{"name": "Nauru", "code": "NR"}, 
{"name": "Nepal", "code": "NP"}, 
{"name": "Netherlands", "code": "NL"}, 
{"name": "Netherlands Antilles", "code": "AN"}, 
{"name": "New Caledonia", "code": "NC"}, 
{"name": "New Zealand", "code": "NZ"}, 
{"name": "Nicaragua", "code": "NI"}, 
{"name": "Niger", "code": "NE"}, 
{"name": "Nigeria", "code": "NG"}, 
{"name": "Niue", "code": "NU"}, 
{"name": "Norfolk Island", "code": "NF"}, 
{"name": "Northern Mariana Islands", "code": "MP"}, 
{"name": "Norway", "code": "NO"}, 
{"name": "Oman", "code": "OM"}, 
{"name": "Pakistan", "code": "PK"}, 
{"name": "Palau", "code": "PW"}, 
{"name": "Palestinian Territory, Occupied", "code": "PS"}, 
{"name": "Panama", "code": "PA"}, 
{"name": "Papua New Guinea", "code": "PG"}, 
{"name": "Paraguay", "code": "PY"}, 
{"name": "Peru", "code": "PE"}, 
{"name": "Philippines", "code": "PH"}, 
{"name": "Pitcairn", "code": "PN"}, 
{"name": "Poland", "code": "PL"}, 
{"name": "Portugal", "code": "PT"}, 
{"name": "Puerto Rico", "code": "PR"}, 
{"name": "Qatar", "code": "QA"}, 
{"name": "Reunion", "code": "RE"}, 
{"name": "Romania", "code": "RO"}, 
{"name": "Russian Federation", "code": "RU"}, 
{"name": "RWANDA", "code": "RW"}, 
{"name": "Saint Helena", "code": "SH"}, 
{"name": "Saint Kitts and Nevis", "code": "KN"}, 
{"name": "Saint Lucia", "code": "LC"}, 
{"name": "Saint Pierre and Miquelon", "code": "PM"}, 
{"name": "Saint Vincent and the Grenadines", "code": "VC"}, 
{"name": "Samoa", "code": "WS"}, 
{"name": "San Marino", "code": "SM"}, 
{"name": "Sao Tome and Principe", "code": "ST"}, 
{"name": "Saudi Arabia", "code": "SA"}, 
{"name": "Senegal", "code": "SN"}, 
{"name": "Serbia and Montenegro", "code": "CS"}, 
{"name": "Seychelles", "code": "SC"}, 
{"name": "Sierra Leone", "code": "SL"}, 
{"name": "Singapore", "code": "SG"}, 
{"name": "Slovakia", "code": "SK"}, 
{"name": "Slovenia", "code": "SI"}, 
{"name": "Solomon Islands", "code": "SB"}, 
{"name": "Somalia", "code": "SO"}, 
{"name": "South Africa", "code": "ZA"}, 
{"name": "South Georgia and the South Sandwich Islands", "code": "GS"}, 
{"name": "Spain", "code": "ES"}, 
{"name": "Sri Lanka", "code": "LK"}, 
{"name": "Sudan", "code": "SD"}, 
{"name": "Suriname", "code": "SR"}, 
{"name": "Svalbard and Jan Mayen", "code": "SJ"}, 
{"name": "Swaziland", "code": "SZ"}, 
{"name": "Sweden", "code": "SE"}, 
{"name": "Switzerland", "code": "CH"}, 
{"name": "Syrian Arab Republic", "code": "SY"}, 
{"name": "Taiwan, Province of China", "code": "TW"}, 
{"name": "Tajikistan", "code": "TJ"}, 
{"name": "Tanzania, United Republic of", "code": "TZ"}, 
{"name": "Thailand", "code": "TH"}, 
{"name": "Timor-Leste", "code": "TL"}, 
{"name": "Togo", "code": "TG"}, 
{"name": "Tokelau", "code": "TK"}, 
{"name": "Tonga", "code": "TO"}, 
{"name": "Trinidad and Tobago", "code": "TT"}, 
{"name": "Tunisia", "code": "TN"}, 
{"name": "Turkey", "code": "TR"}, 
{"name": "Turkmenistan", "code": "TM"}, 
{"name": "Turks and Caicos Islands", "code": "TC"}, 
{"name": "Tuvalu", "code": "TV"}, 
{"name": "Uganda", "code": "UG"}, 
{"name": "Ukraine", "code": "UA"}, 
{"name": "United Arab Emirates", "code": "AE"}, 
{"name": "United Kingdom", "code": "GB"}, 
{"name": "United States", "code": "US"}, 
{"name": "United States Minor Outlying Islands", "code": "UM"}, 
{"name": "Uruguay", "code": "UY"}, 
{"name": "Uzbekistan", "code": "UZ"}, 
{"name": "Vanuatu", "code": "VU"}, 
{"name": "Venezuela", "code": "VE"}, 
{"name": "Viet Nam", "code": "VN"}, 
{"name": "Virgin Islands, British", "code": "VG"}, 
{"name": "Virgin Islands, U.S.", "code": "VI"}, 
{"name": "Wallis and Futuna", "code": "WF"}, 
{"name": "Western Sahara", "code": "EH"}, 
{"name": "Yemen", "code": "YE"}, 
{"name": "Zambia", "code": "ZM"}, 
{"name": "Zimbabwe", "code": "ZW"} 
];
var creditCards = [
	'Visa', 
	'MasterCard',
	'Discover', 
	'American Express'
]
var months = [
			{'name':'January', 'id': 1},
			{'name':'February', 'id': 2},
			{'name':'March', 'id': 3},
			{'name':'April', 'id': 4},
			{'name':'May', 'id': 5},
			{'name':'June', 'id': 6},
			{'name':'July', 'id': 7},
			{'name':'August', 'id': 8},
			{'name':'September', 'id': 9},
			{'name':'October', 'id': 10},
			{'name':'November', 'id': 11},
			{'name':'December', 'id': 12}
		];
var states = [
    {
        "name": "Alabama",
        "abbreviation": "AL"
    },
    {
        "name": "Alaska",
        "abbreviation": "AK"
    },
    {
        "name": "American Samoa",
        "abbreviation": "AS"
    },
    {
        "name": "Arizona",
        "abbreviation": "AZ"
    },
    {
        "name": "Arkansas",
        "abbreviation": "AR"
    },
    {
        "name": "California",
        "abbreviation": "CA"
    },
    {
        "name": "Colorado",
        "abbreviation": "CO"
    },
    {
        "name": "Connecticut",
        "abbreviation": "CT"
    },
    {
        "name": "Delaware",
        "abbreviation": "DE"
    },
    {
        "name": "District Of Columbia",
        "abbreviation": "DC"
    },
    {
        "name": "Federated States Of Micronesia",
        "abbreviation": "FM"
    },
    {
        "name": "Florida",
        "abbreviation": "FL"
    },
    {
        "name": "Georgia",
        "abbreviation": "GA"
    },
    {
        "name": "Guam",
        "abbreviation": "GU"
    },
    {
        "name": "Hawaii",
        "abbreviation": "HI"
    },
    {
        "name": "Idaho",
        "abbreviation": "ID"
    },
    {
        "name": "Illinois",
        "abbreviation": "IL"
    },
    {
        "name": "Indiana",
        "abbreviation": "IN"
    },
    {
        "name": "Iowa",
        "abbreviation": "IA"
    },
    {
        "name": "Kansas",
        "abbreviation": "KS"
    },
    {
        "name": "Kentucky",
        "abbreviation": "KY"
    },
    {
        "name": "Louisiana",
        "abbreviation": "LA"
    },
    {
        "name": "Maine",
        "abbreviation": "ME"
    },
    {
        "name": "Marshall Islands",
        "abbreviation": "MH"
    },
    {
        "name": "Maryland",
        "abbreviation": "MD"
    },
    {
        "name": "Massachusetts",
        "abbreviation": "MA"
    },
    {
        "name": "Michigan",
        "abbreviation": "MI"
    },
    {
        "name": "Minnesota",
        "abbreviation": "MN"
    },
    {
        "name": "Mississippi",
        "abbreviation": "MS"
    },
    {
        "name": "Missouri",
        "abbreviation": "MO"
    },
    {
        "name": "Montana",
        "abbreviation": "MT"
    },
    {
        "name": "Nebraska",
        "abbreviation": "NE"
    },
    {
        "name": "Nevada",
        "abbreviation": "NV"
    },
    {
        "name": "New Hampshire",
        "abbreviation": "NH"
    },
    {
        "name": "New Jersey",
        "abbreviation": "NJ"
    },
    {
        "name": "New Mexico",
        "abbreviation": "NM"
    },
    {
        "name": "New York",
        "abbreviation": "NY"
    },
    {
        "name": "North Carolina",
        "abbreviation": "NC"
    },
    {
        "name": "North Dakota",
        "abbreviation": "ND"
    },
    {
        "name": "Northern Mariana Islands",
        "abbreviation": "MP"
    },
    {
        "name": "Ohio",
        "abbreviation": "OH"
    },
    {
        "name": "Oklahoma",
        "abbreviation": "OK"
    },
    {
        "name": "Oregon",
        "abbreviation": "OR"
    },
    {
        "name": "Palau",
        "abbreviation": "PW"
    },
    {
        "name": "Pennsylvania",
        "abbreviation": "PA"
    },
    {
        "name": "Puerto Rico",
        "abbreviation": "PR"
    },
    {
        "name": "Rhode Island",
        "abbreviation": "RI"
    },
    {
        "name": "South Carolina",
        "abbreviation": "SC"
    },
    {
        "name": "South Dakota",
        "abbreviation": "SD"
    },
    {
        "name": "Tennessee",
        "abbreviation": "TN"
    },
    {
        "name": "Texas",
        "abbreviation": "TX"
    },
    {
        "name": "Utah",
        "abbreviation": "UT"
    },
    {
        "name": "Vermont",
        "abbreviation": "VT"
    },
    {
        "name": "Virgin Islands",
        "abbreviation": "VI"
    },
    {
        "name": "Virginia",
        "abbreviation": "VA"
    },
    {
        "name": "Washington",
        "abbreviation": "WA"
    },
    {
        "name": "West Virginia",
        "abbreviation": "WV"
    },
    {
        "name": "Wisconsin",
        "abbreviation": "WI"
    },
    {
        "name": "Wyoming",
        "abbreviation": "WY"
    }
];
angular.module('app', ['ui.router', 'checkout']);
angular.module('app')
.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/");
  //
  // Now set up the states
  $stateProvider
  .state('checkout', {
    url: "/",
    templateUrl: "../app/views/checkout.html"
  })
  .state('billing',{
    url:"/billing",
    templateUrl: "../app/views/billing.html"
  }).
  state('confirmation',{
    url:"/confirmation",
    templateUrl: "../app/views/confirmation.html"
  });
});
angular.module('checkout', []);
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
angular.module('checkout').directive('confirmation', function(){
	
})
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
angular.module('checkout').factory('utility', function(){
	var getYears = function(){
		var date = new Date();
		var years = [];
		for(var i = 0; i < 15; i++)
		{
			years.push(date.getFullYear() + i);
		}
		return years;
	}

	var extend = function(obj, src) {
    for (var key in src) {
        if (src.hasOwnProperty(key)) obj[key] = src[key];
    }
    return obj;
	}

	var formatMoney = function(price){
		return price.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,")
	}
	return {
		getYears: getYears,
		extend: extend,
		formatMoney: formatMoney
	}
});
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