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