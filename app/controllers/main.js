angular.module('app')
  .controller('Main', Main)

Main.$inject = ['Teas'];

function Main(Teas) {
  const vm = this;
  Teas.getTeas().then(teas => {
    vm.teas = teas;
  });
  Teas.getCategories().then(categories => {
    vm.categories = categories;
  })
  vm.test = function() {
    console.log(vm);
  }
  vm.
}
