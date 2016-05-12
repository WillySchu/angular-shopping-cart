angular.module('app')
  .directive('wsNav', function() {
    return {
      templateUrl: 'app/directives/navbar.html',
      scope: {
        nav: '=navScope'
      }
    }
  })
