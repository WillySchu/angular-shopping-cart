angular.module('app')
  .factory('Teas', function($http) {
    return {
      getTeas: function() {
        return $http.get('items.json').then(teas => {
          console.log(teas.data);
          return teas.data
        })
      }
    }
  })
