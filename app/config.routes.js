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
    })
    $locationProvider.html5Mode(true);
  })
