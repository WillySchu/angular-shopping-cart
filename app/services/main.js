angular.module('app')
  .factory('Teas', function($http) {
    return {
      getTeas: function() {
        return $http.get('items.json').then(teas => {
          return teas.data
        })
      },
      getCategories: function() {
        return $http.get('items.json').then(teas => {
          const categories = [];
          for (i in teas.data) {
            for (j in teas.data[i].categories) {
              if (categories.indexOf(teas.data[i].categories[j]) === -1) {
                categories.push(teas.data[i].categories[j])
              }
            }
          }
          return categories;
        })
      }
    }
  })
