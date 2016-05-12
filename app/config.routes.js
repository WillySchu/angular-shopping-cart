angular.module('app')
  .config($routeProvider, $locationProvider, {
    $routeProvider.when('/teas/:cat', {
      templateUrl: 'index.html',
      controller: 'Main'
    })
    $locationProvider.html5Mode(true);
  })
