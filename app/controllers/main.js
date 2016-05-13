angular.module('app')
  .controller('Main', Main)

Main.$inject = ['Teas', '$routeParams'];

function Main(Teas, $routeParams) {
  const vm = this;

  vm.nums = new Array(10);
  vm.cart = {};
  vm.cartQuantity = 0;

  Teas.getTeas().then(teas => {
    vm.teas = teas;
  });
  Teas.getCategories().then(categories => {
    vm.categories = categories;
  });
  vm.test = function() {
    console.log(vm);
  }
  vm.addToCart = function(tea, quantity) {
    if (vm.cart[tea._id]) {
      vm.cart[tea._id] += parseInt(quantity);
    } else {
      vm.cartQuantity++;
      vm.cart[tea._id] = parseInt(quantity);
    }
  }
}
