angular.module('app')
  .controller('Main', Main)

Main.$inject = ['Teas', 'Cart', '$routeParams'];

function Main(Teas, Cart, $routeParams) {
  const vm = this;

  vm.nums = new Array(10);
  vm.cart = Cart.cart;
  vm.cartQuantity = Cart.cartQuantity;

  vm.addToCart = Cart.addToCart;
  vm.removeFromCart = Cart.removeFromCart;
  vm.editItem = Cart.editItem;

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
