angular.module('app')
  .controller('Main', Main)

Main.$inject = ['Teas', 'Cart', '$routeParams', '$interval'];

function Main(Teas, Cart, $routeParams, $interval) {
  const vm = this;

  vm.nums = new Array(10);
  vm.cart = Cart.cart;
  vm.cartQuantity = Cart.cartQuantity;

  vm.addToCart = Cart.addToCart;
  vm.removeFromCart = Cart.removeFromCart;
  vm.editItem = Cart.editItem;
  vm.getTotal = Cart.getTotal;
  vm.total = Cart.total;

  Teas.getTeas().then(teas => {
    vm.teas = teas;
  });
  Teas.getCategories().then(categories => {
    vm.categories = categories;
  });
  vm.test = function() {
    console.log(vm);
  }
}
