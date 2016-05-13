angular.module('app')
  .config(function($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
      templateUrl: 'app/partials/teas.html',
      controller: 'Main'
    }).when('/teas/:cat', {
      templateUrl: 'app/partials/teas.html',
      controller: 'Main'
    }).when('/cart', {
      templateUrl: 'app/partials/cart.html'
    }).when('/checkout', {
      templateUrl: 'app/partials/checkout.html'
    })
    $locationProvider.html5Mode(true);
  })
