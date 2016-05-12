angular.module('app')
  .config(function($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
      templateUrl: 'app/teas/teas.html',
      controller: 'Main'
    }).when('/teas/:cat', {
      templateUrl: 'app/teas/teas.html',
      controller: 'Main'
    })
    $locationProvider.html5Mode(true);
  })
