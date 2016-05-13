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

  Teas.getTeas().then(teas => {
    vm.teas = teas;
  });
  Teas.getCategories().then(categories => {
    vm.categories = categories;
  });
  vm.test = function() {
    console.log(vm);
  }

  $interval(function() {
    var newVal = Math.floor((Math.random() * 179) + 1);
    console.log(newVal);

    $('.gauge--3 .semi-circle--mask').attr({
      style: '-webkit-transform: rotate(' + newVal + 'deg);' +
      '-moz-transform: rotate(' + newVal + 'deg);' +
      'transform: rotate(' + newVal + 'deg);'
     });
  }, 1000);

}
