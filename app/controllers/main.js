angular.module('app')
  .controller('Main', Main)

Main.$inject = ['Teas'];

function Main(Teas) {
  const vm = this;
  Teas.getTeas().then(teas => {
    vm.teas = teas
  });
}
