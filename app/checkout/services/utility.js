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