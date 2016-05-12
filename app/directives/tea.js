angular.module('app')
  .directive('wsTea', function() {
    return {
      templateUrl: 'app/directives/tea.html',
      scope: {
        tea: '=teaScope'
      }
    }
  })
